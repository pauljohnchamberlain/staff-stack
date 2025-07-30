import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "20 Reasons Why Staff Stack | Offshore Staffing",
  description:
    "Discover the top 20 reasons why businesses choose Staff Stack for their offshore staffing needs in the Philippines.",
};

export default function ReasonsPage() {
  const reasons = [
    "Up to 75% cost savings compared to hiring locally",
    "Access to a large pool of highly skilled English-speaking professionals",
    "Managed recruitment & HR services included",
    "State-of-the-art offices with high-speed internet",
    "ISO-certified data security protocols",
    "Staff retention rate above 95%",
    "No geographic limitations - work with staff in any time zone",
    "Dedicated full-time employees, not freelancers",
    "No setup costs or infrastructure investment",
    "Flexible staffing solutions - home-based, office, or hybrid",
    "Simple fixed monthly fee structure",
    "Staff work exclusively for your business",
    "Comprehensive training and development programs",
    "24/7 technical support team",
    "No long-term contracts required",
    "Risk management and business continuity plans",
    "Culture-matching and team integration expertise",
    "Proven track record with 250+ satisfied clients",
    "Continuous performance monitoring and improvement",
    "Simple onboarding process that takes just days, not months",
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              20 Reasons to Choose Staff Stack
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Discover why businesses worldwide trust us with their offshore
              staffing needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {reasons.map((reason, index) => (
              <div
                key={`reason-${index}-${reason.substring(0, 10)}`}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 h-10 w-10 rounded-full bg-[#09d8f5] text-white font-lexend font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <p className="text-lg font-lexend font-medium text-[#0f2c4a]">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
              Ready to build your offshore team?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                asChild
              >
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#09d8f5] text-[#0f2c4a] hover:bg-[#09d8f5]/10 font-lexend"
                asChild
              >
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-8">
              What Our Clients Say
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-xs">
              <p className="text-lg italic font-inter text-slate-600 mb-6">
                "Staff Stack has completely transformed our business operations.
                The quality of talent we've accessed through their platform is
                exceptional. We've been able to scale our operations rapidly
                while maintaining top-tier service levels. The cost savings have
                been substantial, but the real value is in the dedicated
                professionals now working as an integral part of our team."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  MK
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Michael Kerns</p>
                  <p className="text-sm text-slate-500">
                    Operations Director, TechSolve Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
