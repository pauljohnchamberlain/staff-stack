import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Frequently Asked Questions | Offshore Staffing Philippines | Staff Stack",
  description:
    "Get answers to common questions about offshore staffing in the Philippines. Learn about our process, pricing, staff management, and how we ensure quality results.",
  keywords: [
    "offshore staffing FAQ",
    "Philippines staffing questions",
    "remote team FAQ",
    "outsourcing questions",
    "Staff Stack FAQ",
    "offshore staffing process",
    "Philippines outsourcing help",
  ],
  openGraph: {
    title:
      "Frequently Asked Questions | Offshore Staffing Philippines | Staff Stack",
    description:
      "Get answers to common questions about offshore staffing in the Philippines. Learn about our process, pricing, staff management, and how we ensure quality results.",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
