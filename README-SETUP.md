# Staff Stack - Contact Form Setup

## Environment Variables

To enable the contact form functionality, you need to configure the following environment variables in your `.env.local` file:

### Required Variables

```env
# Resend API Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Email Configuration
CONTACT_EMAIL_FROM=noreply@yourdomain.com
CONTACT_EMAIL_TO=support@staffstack.co

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Setup Instructions

1. **Sign up for Resend**: Go to [resend.com](https://resend.com) and create an account
2. **Get API Key**: Navigate to API Keys in your dashboard and create a new key
3. **Verify Domain**: Add and verify your domain in Resend (required for sending emails)
4. **Create .env.local**: Copy the variables above and replace with your actual values

### Variable Details

- **RESEND_API_KEY**: Your Resend API key (starts with "re_")
- **CONTACT_EMAIL_FROM**: Email address to send from (must be from verified domain)
- **CONTACT_EMAIL_TO**: Email address where form submissions will be sent
- **NEXT_PUBLIC_APP_URL**: Your application URL (used for CORS and validation)

### Testing

1. Start the development server: `pnpm dev`
2. Navigate to `/contact-us`
3. Fill out and submit the contact form
4. Check your email (CONTACT_EMAIL_TO) for the submission

### Features

✅ **Server-side validation** with Zod schemas  
✅ **Rate limiting** (5 requests per IP per hour)  
✅ **Input sanitization** to prevent XSS  
✅ **Professional email templates** with Staff Stack branding  
✅ **Comprehensive error handling** with user-friendly messages  
✅ **Reply-to functionality** for direct responses  

### Production Notes

- Ensure your domain is verified in Resend before deploying
- Consider using Redis for rate limiting in production
- Monitor email delivery rates and bounces
- Set up proper error logging and monitoring