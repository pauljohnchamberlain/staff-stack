import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Staff Stack | Remote & Offshore Teams in the Philippines",
  description:
    "Staff Stack helps businesses build remote and offshore teams in the Philippines with talented professionals across IT, creative, customer service, and more.",
  keywords: [
    "offshore staffing",
    "remote teams",
    "Philippines outsourcing",
    "IT outsourcing",
    "hire remote staff",
    "offshore development",
    "virtual assistants",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
