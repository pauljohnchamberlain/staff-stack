import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Offshore Staffing Services | IT, Customer Service & More | Staff Stack",
  description:
    "Comprehensive offshore staffing services from the Philippines. IT development, customer service, admin support, creative services, and specialized roles.",
  keywords: [
    "offshore staffing services",
    "IT outsourcing Philippines",
    "customer service outsourcing",
    "admin support Philippines",
    "creative services offshore",
    "remote team services",
  ],
  openGraph: {
    title:
      "Offshore Staffing Services | IT, Customer Service & More | Staff Stack",
    description:
      "Comprehensive offshore staffing services from the Philippines. IT development, customer service, admin support, creative services, and specialized roles.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
