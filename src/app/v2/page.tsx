import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native Delivery Staff for Agencies | Staff Stack",
  description:
    "StackCertified operators for retention, paid media, and Shopify agencies. Proof before the interview. Onboarded and ready in 7 days.",
  keywords: [
    "agency staffing",
    "Klaviyo operators",
    "email marketing staff",
    "paid media ops",
    "Shopify developers",
    "agency delivery staff",
    "AI-native operators",
    "offshore agency staff",
  ],
  openGraph: {
    title: "AI-Native Delivery Staff for Agencies | Staff Stack",
    description:
      "StackCertified operators for retention, paid media, and Shopify agencies. Proof before the interview. Onboarded and ready in 7 days.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

import { ServiceCategories } from "@/components/sections/service-categories";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { AINativeExplained } from "@/components/sections/v2/ai-native-explained";
import { CtaSectionV2 } from "@/components/sections/v2/cta-section-v2";
import { FirstSevenDays } from "@/components/sections/v2/first-seven-days";
import { HeroV2 } from "@/components/sections/v2/hero-v2";
import { NotForEveryone } from "@/components/sections/v2/not-for-everyone";
import { ProofBeforeInterview } from "@/components/sections/v2/proof-before-interview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function HomeV2() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://staffstack.co",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Staff Stack",
    description:
      "AI-native delivery staff for agencies. StackCertified operators for retention, paid media, and Shopify agencies.",
    url: "https://staffstack.co",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <HeroV2 />
      <ProofBeforeInterview />
      <WhyChooseUs />
      <AINativeExplained />
      <ServiceCategories />
      <FirstSevenDays />
      <NotForEveryone />
      <TestimonialsSection />
      <CtaSectionV2 />
    </>
  );
}
