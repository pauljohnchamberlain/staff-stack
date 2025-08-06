import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Staff Stack | Leading Offshore Staffing Provider Philippines",
  description:
    "Learn about Staff Stack's mission to help businesses build exceptional remote teams in the Philippines. Trusted by companies worldwide since 2015.",
  keywords: [
    "about Staff Stack",
    "offshore staffing company",
    "Philippines staffing provider",
    "remote team solutions",
    "offshore staffing expertise",
    "Staff Stack history",
  ],
  openGraph: {
    title: "About Staff Stack | Leading Offshore Staffing Provider Philippines",
    description:
      "Learn about Staff Stack's mission to help businesses build exceptional remote teams in the Philippines. Trusted by companies worldwide since 2015.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
