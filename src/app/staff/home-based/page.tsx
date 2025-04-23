import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Home Based Staff | Offshore Staffing",
  description: "Hire dedicated home-based staff in the Philippines. Our remote workforce solutions provide flexibility and cost-effectiveness without sacrificing quality.",
};

export default function HomeBasedStaffPage() {
  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Lower operational costs with no office space requirements, reduced utilities, and more affordable infrastructure."
    },
    {
      title: "Access to Wider Talent Pool",
      description: "Recruit the best talent regardless of their location within the Philippines, expanding your potential candidate options."
    },
    {
      title: "Greater Flexibility",
      description: "Scale your team up or down quickly without physical space constraints or long-term office lease commitments."
    },
    {
      title: "Improved Work-Life Balance",
      description: "Staff who work from home often report higher job satisfaction, leading to better retention and productivity."
    },
    {
      title: "Business Continuity",
      description: "Distributed workforce provides inherent protection against local disruptions, ensuring continuous operations."
    },
    {
      title: "Reduced Carbon Footprint",
      description: "Eliminating daily commutes and office energy usage contributes to environmental sustainability goals."
    }
  ];

  const homeSupportFeatures = [
    "Enterprise-grade laptops and dual monitors",
    "High-speed fiber internet connections with backup options",
    "Uninterruptible power supplies (UPS)",
    "Ergonomic work furniture",
    "VPN, time tracking, and productivity software",
    "Secure home office setup and verification",
    "Regular technical support and maintenance",
    "Home office stipends for utilities and setup costs"
  ];

  const staffTypes = [
    {
      role: "Administrative Support",
      description: "Virtual assistants, data entry specialists, and administrative coordinators working remotely."
    },
    {
      role: "Software Development",
      description: "Remote developers, programmers, and QA engineers collaborating through cloud-based tools."
    },
    {
      role: "Creative Services",
      description: "Graphic designers, content creators, and multimedia specialists connected virtually."
    },
    {
      role: "Customer Support",
      description: "Remote customer service representatives, technical support staff, and help desk agents."
    },
    {
      role: "Digital Marketing",
      description: "SEO specialists, social media managers, and marketing coordinators working from home."
    }
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Home Based Staff
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Flexible, cost-effective remote workforce solutions with the same quality and management
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
                Professional Remote Workforce
              </h2>
              <p className="text-lg text-slate-700">
                Our home-based staffing solutions offer the flexibility of remote work combined with our comprehensive management and support systems. Each remote team member is equipped with enterprise-grade technology, secure connectivity, and full integration with your business processes, ensuring high performance regardless of physical location.
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
                  <p className="text-slate-700">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Comprehensive Home Office Support
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We ensure each home-based staff member has a professional, secure, and productive work environment through our comprehensive equipment and support program.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                  Equipment & Infrastructure
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {homeSupportFeatures.map((feature) => (
                    <div
                      key={`feature-${feature.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-[#09d8f5] flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-lg text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Popular Home-Based Roles
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Many roles are well-suited for remote work while maintaining high productivity and integration with your in-house team.
              </p>

              <div className="space-y-6">
                {staffTypes.map((type) => (
                  <div
                    key={`type-${type.role.replace(/\s+/g, "-").toLowerCase()}`}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                  >
                    <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                      {type.role}
                    </h3>
                    <p className="text-slate-700">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ready to build your home-based team?
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Get started today with our expert recruitment team to build your dedicated remote offshore team.
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
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg italic font-inter text-slate-600 mb-6">
                "Staff Stack's home-based staffing solution has been perfect for our needs. We were initially concerned about managing remote workers across time zones, but their comprehensive support systems and high-quality staff selection made it seamless. Our remote developers and support specialists are as integrated, responsive, and productive as any in-office team I've managed."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  RH
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Rebecca Hernandez</p>
                  <p className="text-sm text-slate-500">Operations Director, CloudTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
