import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Staff Stack | Start Your Offshore Team Today",
  description:
    "Ready to build your offshore team in the Philippines? Contact Staff Stack for a free consultation and discover how we can help scale your business.",
  keywords: [
    "contact Staff Stack",
    "offshore staffing consultation",
    "start offshore team",
    "Philippines staffing contact",
    "remote team consultation",
    "offshore staffing quotes",
  ],
  openGraph: {
    title: "Contact Staff Stack | Start Your Offshore Team Today",
    description:
      "Ready to build your offshore team in the Philippines? Contact Staff Stack for a free consultation and discover how we can help scale your business.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
