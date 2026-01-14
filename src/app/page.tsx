import type { Metadata } from "next";
import { Award, Clock, Rocket, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Native Delivery Staff for Agencies | Staff Stack",
  description:
    "StackCertified operators for retention, paid media, and Shopify agencies. Onboarded, tested, and ready in 7 days. More client capacity without more chaos.",
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
      "StackCertified operators for retention, paid media, and Shopify agencies. Onboarded, tested, and ready in 7 days.",
  },
};
import { CtaSection } from "@/components/sections/cta-section";
import { Hero } from "@/components/sections/hero";
import { ServiceCategories } from "@/components/sections/service-categories";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

function SimpleHowItWorksSection() {
  return (
    <section className="py-16 bg-white" id="home-how-it-works">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-lexend font-bold mb-4">
            From Brief to <span className="text-brand">Shipping</span> in 7 Days
          </h2>
          <p className="text-muted-foreground font-inter">
            Our StackCertified process ensures you get operators who can take a
            brief and deliver — not button-pushers waiting for instructions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              title: "Share Your Needs",
              description: "Tell us about your agency vertical and capacity gaps",
              icon: <Rocket className="h-6 w-6 text-brand" />,
            },
            {
              id: 2,
              title: "We Match & Certify",
              description: "Role-specific tests, AI workflow proof, communication screening",
              icon: <Award className="h-6 w-6 text-brand" />,
            },
            {
              id: 3,
              title: "You Interview",
              description: "Meet pre-certified candidates with shareable scorecards",
              icon: <UserCheck className="h-6 w-6 text-brand" />,
            },
            {
              id: 4,
              title: "Ready in 7 Days",
              description: "Onboarded with StackOps: KPIs, QA checklists, SOPs",
              icon: <Clock className="h-6 w-6 text-brand" />,
            },
          ].map((step) => (
            <div key={step.id} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 md:right-1/4 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center text-sm font-lexend font-bold">
                  {step.id}
                </div>
              </div>
              <h3 className="font-lexend font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-inter">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
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
      <Hero />
      <WhyChooseUs />
      <ServiceCategories />
      <SimpleHowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
