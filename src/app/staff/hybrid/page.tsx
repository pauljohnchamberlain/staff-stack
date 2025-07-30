import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Hybrid Staff | Offshore Staffing",
  description:
    "Flexible hybrid work arrangements for your offshore team combining office and remote work. Get the best of both worlds with our hybrid staffing solutions.",
};

export default function HybridStaffPage() {
  const benefits = [
    {
      title: "Flexibility & Balance",
      description:
        "Combine office days for collaboration and team building with remote days for focused work and improved work-life balance.",
    },
    {
      title: "Expanded Talent Access",
      description:
        "Attract a wider pool of candidates who value flexible work arrangements while still maintaining in-person connection.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Optimize operational costs with reduced office space requirements while maintaining professional infrastructure.",
    },
    {
      title: "Improved Productivity",
      description:
        "Staff can choose the environment best suited for different types of work, enhancing focus and efficiency.",
    },
    {
      title: "Enhanced Retention",
      description:
        "Higher employee satisfaction and loyalty from staff who appreciate flexible work arrangements.",
    },
    {
      title: "Business Continuity",
      description:
        "Built-in resilience with staff equipped to work effectively from multiple locations.",
    },
  ];

  const hybridModels = [
    {
      title: "Split Week",
      description:
        "Staff work predetermined days in the office (typically 2-3 days) and the remainder from home, following a consistent schedule.",
    },
    {
      title: "Project-Based",
      description:
        "Office attendance based on project phases requiring collaboration, with independent work done remotely.",
    },
    {
      title: "Team Rotation",
      description:
        "Different teams alternate office use on specified days to optimize space while ensuring cross-team collaboration.",
    },
    {
      title: "Core Hours",
      description:
        "Mandatory in-office presence during specific core hours or days, with flexibility outside those times.",
    },
  ];

  const hybridSupport = [
    "Comprehensive equipment for both locations",
    "Cloud-based collaboration platforms",
    "Secure access to company systems",
    "Regular team building activities",
    "Unified communication tools",
    "Performance tracking systems",
    "Seamless technical support",
    "Structured check-in processes",
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Hybrid Staff
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Flexible work arrangements that combine office and remote work for
              optimal results
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                The Best of Both Worlds
              </h2>
              <p className="text-lg text-slate-700">
                Our hybrid staffing model offers the perfect balance between
                traditional office-based teams and fully remote staff. This
                flexible approach combines the collaboration and culture
                benefits of in-person work with the autonomy and lifestyle
                advantages of remote arrangements, creating an optimized
                environment for productivity and staff satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit) => (
                <div
                  key={`benefit-${benefit.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Flexible Hybrid Models
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We offer several hybrid work arrangements that can be tailored
                to your business needs, team dynamics, and operational
                requirements.
              </p>

              <div className="space-y-6">
                {hybridModels.map((model) => (
                  <div
                    key={`model-${model.title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                  >
                    <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                      {model.title}
                    </h3>
                    <p className="text-slate-700">{model.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Comprehensive Hybrid Support
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We provide all the tools, infrastructure, and management systems
                needed to ensure your hybrid team functions seamlessly across
                multiple work environments.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                  Key Support Elements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hybridSupport.map((feature) => (
                    <div
                      key={`feature-${feature.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-[#09d8f5] flex items-center justify-center shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-lg text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ready to build your hybrid team?
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Get started today with our expert recruitment team to build a
                flexible hybrid workforce tailored to your business needs.
              </p>
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
                "The hybrid model offered by Staff Stack has given us
                unprecedented flexibility. Our team comes together in the office
                twice a week for collaborative work and strategy sessions, while
                working remotely the rest of the time for focused development
                tasks. The balanced approach has boosted both productivity and
                team satisfaction. Staff Stack's management of the logistics and
                technical requirements for both environments has made it
                completely seamless for us."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  AP
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Alicia Patel</p>
                  <p className="text-sm text-slate-500">
                    CTO, Agile Software Innovations
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
