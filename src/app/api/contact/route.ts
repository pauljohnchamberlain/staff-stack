import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Server-side validation schema (same as frontend)
const contactFormSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().min(1).max(200),
  phone: z.string().min(6).max(20),
  service: z.string().min(1),
  message: z.string().min(10).max(2000),
});

// Simple in-memory rate limiting (for production, use Redis or database)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];

  // Remove old requests outside the window
  const recentRequests = requests.filter(
    (time) => now - time < RATE_LIMIT_WINDOW,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  // Add current request
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);

  return false;
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIP) {
    return realIP.trim();
  }

  return "unknown";
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .substring(0, 2000); // Limit length
}

function createEmailTemplate(data: z.infer<typeof contactFormSchema>): string {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission - Staff Stack</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 20px; text-align: center; }
        .content { padding: 30px; background: #f8fafc; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1e3a8a; display: block; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #e2e8f0; }
        .message-field { background: white; padding: 15px; border-radius: 5px; border: 1px solid #e2e8f0; white-space: pre-wrap; }
        .footer { text-align: center; padding: 20px; color: #64748b; font-size: 14px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>📧 New Contact Form Submission</h1>
        <p>Staff Stack - Offshore Staffing Solutions</p>
    </div>
    
    <div class="content">
        <div class="field">
            <span class="label">👤 Full Name:</span>
            <div class="value">${sanitizeInput(data.fullName)}</div>
        </div>
        
        <div class="field">
            <span class="label">📧 Email:</span>
            <div class="value">${sanitizeInput(data.email)}</div>
        </div>
        
        <div class="field">
            <span class="label">🏢 Company:</span>
            <div class="value">${sanitizeInput(data.company)}</div>
        </div>
        
        <div class="field">
            <span class="label">📞 Phone:</span>
            <div class="value">${sanitizeInput(data.phone)}</div>
        </div>
        
        <div class="field">
            <span class="label">🎯 Service Category:</span>
            <div class="value">${sanitizeInput(data.service)}</div>
        </div>
        
        <div class="field">
            <span class="label">💬 Message:</span>
            <div class="message-field">${sanitizeInput(data.message)}</div>
        </div>
    </div>
    
    <div class="footer">
        <p>This email was sent from the Staff Stack contact form.</p>
        <p>Respond directly to this email to reply to ${sanitizeInput(data.fullName)}.</p>
    </div>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Check environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 },
      );
    }

    const fromEmail = process.env.CONTACT_EMAIL_FROM || "noreply@example.com";
    const toEmail = process.env.CONTACT_EMAIL_TO || "support@staffstack.co";

    // Rate limiting
    const clientIP = getClientIP(request);
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait before submitting again.",
        },
        { status: 429 },
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = validationResult.data;

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email, // Allow direct reply to the sender
      subject: `New Contact Form Submission from ${data.fullName} - ${data.company}`,
      html: createEmailTemplate(data),
      // Add plain text version for better deliverability
      text: `
New Contact Form Submission

Name: ${data.fullName}
Email: ${data.email}
Company: ${data.company}
Phone: ${data.phone}
Service: ${data.service}

Message:
${data.message}

---
This email was sent from the Staff Stack contact form.
Reply to: ${data.email}
      `,
    });

    if (emailResult.error) {
      console.error("Failed to send email:", emailResult.error);
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 500 },
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message:
        "Message sent successfully! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
