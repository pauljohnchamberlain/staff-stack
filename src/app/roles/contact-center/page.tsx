import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "CX & Contact Center Staff | Offshore Staffing",
  description:
    "Hire dedicated customer experience and contact center professionals from the Philippines. Our skilled CX specialists provide exceptional customer service.",
};

export default function ContactCenterPage() {
  const roles = [
    "Customer Service Representatives",
    "Technical Support Specialists",
    "Call Center Agents",
    "Live Chat Support Agents",
    "Email Support Specialists",
    "Social Media Support Agents",
    "Customer Experience Managers",
    "Quality Assurance Specialists",
    "Contact Center Team Leaders",
    "Customer Success Managers",
    "Help Desk Support Agents",
    "Bilingual Support Specialists",
  ];

  const capabilities = [
    "24/7 Customer Support Coverage",
    "Multilingual Support Options",
    "Technical Product Support",
    "Order Processing & Management",
    "Account Management",
    "Complaint Resolution",
    "Service Escalation Management",
    "Reporting & Analytics",
    "CRM System Management",
  ];

  const benefits = [
    "Significant cost savings (up to 70%) vs. local hiring",
    "English-proficient agents with neutral accents",
    "24/7 operational capability for global coverage",
    "Experienced staff with strong customer service skills",
    "Dedicated full-time resources (not shared agents)",
    "Scalable teams for seasonal or growth demands",
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              CX & Contact Center Staff
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Build your dedicated customer support team with skilled
              professionals in the Philippines
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Customer Experience Solutions
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our offshore customer experience and contact center
                professionals in the Philippines provide exceptional support
                services for your customers. With outstanding English
                communication skills and a customer-first mindset, they help
                build loyalty and satisfaction while optimizing your operational
                costs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                    CX & Support Roles
                  </h3>
                  <ul className="space-y-3">
                    {roles.slice(0, 6).map((role) => (
                      <li
                        key={`role-${role.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
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
                        <span className="text-lg text-slate-700">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                    More Roles
                  </h3>
                  <ul className="space-y-3">
                    {roles.slice(6, 12).map((role) => (
                      <li
                        key={`role-${role.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
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
                        <span className="text-lg text-slate-700">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                Service Capabilities
              </h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {capabilities.map((capability) => (
                  <span
                    key={`capability-${capability.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                    className="px-4 py-2 bg-slate-100 text-[#0f2c4a] rounded-full font-lexend"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Why Choose Our CX Staff
              </h2>
              <ul className="space-y-6 mb-10">
                {benefits.map((benefit, index) => (
                  <li
                    key={`benefit-${benefit.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 h-10 w-10 rounded-full bg-[#09d8f5] text-white font-lexend font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg font-lexend font-medium text-[#0f2c4a]">
                        {benefit}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                  Elevate your customer experience
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  Get started today with our expert recruitment team to build a
                  dedicated customer support team that delivers exceptional
                  service while optimizing your operational costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
                "Since partnering with Staff Stack for our customer support
                team, our customer satisfaction scores have increased by 35%.
                Their agents are professional, empathetic, and truly care about
                resolving customer issues. The 24/7 coverage has eliminated our
                backlog and significantly reduced response times. It's been a
                game-changer for our business."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  LP
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Lisa Parker</p>
                  <p className="text-sm text-slate-500">
                    Customer Experience Director, Global Solutions
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
