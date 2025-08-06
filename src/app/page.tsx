import type { Metadata } from "next";
import { FileSearch, MonitorCheck, UserCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Offshore Staffing Philippines | Build Remote Teams | Staff Stack",
  description:
    "Build your dedicated remote team in the Philippines with Staff Stack. Access top IT developers, customer service, and admin professionals at 60% cost savings.",
  keywords: [
    "offshore staffing Philippines",
    "remote team Philippines",
    "hire Filipino developers",
    "Philippines outsourcing",
    "dedicated offshore team",
    "IT outsourcing Philippines",
  ],
  openGraph: {
    title: "Offshore Staffing Philippines | Build Remote Teams | Staff Stack",
    description:
      "Build your dedicated remote team in the Philippines with Staff Stack. Access top IT developers, customer service, and admin professionals at 60% cost savings.",
  },
};
import { CtaSection } from "@/components/sections/cta-section";
import { Hero } from "@/components/sections/hero";
import { ServiceCategories } from "@/components/sections/service-categories";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

// Create a simpler version of the component directly in this file
function SimpleHowItWorksSection() {
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Our proven process for building dedicated remote teams
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              title: "Define Requirements",
              icon: <FileSearch className="h-6 w-6" />,
            },
            {
              id: 2,
              title: "We Recruit Candidates",
              icon: <Users className="h-6 w-6" />,
            },
            {
              id: 3,
              title: "Interview & Select",
              icon: <UserCheck className="h-6 w-6" />,
            },
            {
              id: 4,
              title: "Onboarding & Support",
              icon: <MonitorCheck className="h-6 w-6" />,
            },
          ].map((step) => (
            <div key={step.id} className="text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                {step.icon}
              </div>
              <h3 className="font-medium">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServiceCategories />
      <SimpleHowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
