import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get Your First Operator",
  description:
    "Contact Staff Stack to get your first StackCertified operator. Tell us about your agency and the roles you need. Operators ready in 7 days with 14-day replacement guarantee.",
  keywords: [
    "contact Staff Stack",
    "hire offshore operator",
    "agency staffing contact",
    "get quote offshore staffing",
    "remote team Philippines contact",
  ],
  openGraph: {
    title: "Contact Us | Get Your First Operator | Staff Stack",
    description:
      "Get your first StackCertified operator. AI-native delivery staff for agencies, ready in 7 days.",
    url: "https://staffstack.co/contact-us",
  },
  alternates: {
    canonical: "https://staffstack.co/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
