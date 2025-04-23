import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Services Staff | Offshore Staffing",
  description: "Build your dedicated real estate team with skilled offshore professionals from the Philippines. Our staff helps streamline your real estate operations.",
};

export default function RealEstatePage() {
  const services = [
    "Property Management Assistants",
    "Virtual Real Estate Assistants",
    "Listing Coordinators",
    "Lead Generation Specialists",
    "Transaction Coordinators",
    "Real Estate Marketing Specialists",
    "Leasing Administrators",
    "Real Estate Research Analysts",
    "Property Maintenance Coordinators"
  ];

  const benefits = [
    "24/7 client inquiry management and follow-up",
    "Streamlined property listing and administration",
    "Expert lead qualification and nurturing",
    "Cost-effective back-office operations",
    "Scalable team growth during market peaks",
    "Consistent marketing and social media management"
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Real Estate Services Staff
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Build your dedicated real estate team with skilled professionals in the Philippines
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
                Real Estate Support Services
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our offshore real estate professionals provide comprehensive support for property management companies, real estate agencies, and brokerages. With excellent organizational skills and industry knowledge, they help streamline operations and improve client service while allowing your local team to focus on closing deals.
              </p>

              <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                Real Estate Roles We Fill
              </h3>
              <ul className="space-y-3 mb-10">
                {services.map((service) => (
                  <li key={`service-${service.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#09d8f5] flex items-center justify-center shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-lg text-slate-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Why Choose Our Real Estate Staff
              </h2>
              <ul className="space-y-6 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={`benefit-${benefit.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`} className="flex items-start gap-4">
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
                  Grow your real estate business
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  Get started today and build a dedicated real estate support team that handles administrative tasks while you focus on growing your business and serving clients.
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
                "Our real estate agency has seen tremendous growth since partnering with Staff Stack. Their virtual assistants handle all our listing coordination, paperwork, and initial client inquiries with incredible efficiency. This has freed our agents to focus on showings and closings, resulting in a 40% increase in transactions within the first six months."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  SL
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Sarah Lawson</p>
                  <p className="text-sm text-slate-500">Broker/Owner, Prime Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
