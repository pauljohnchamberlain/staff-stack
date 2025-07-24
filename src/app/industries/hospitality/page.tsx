import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Hospitality & Tourism Staff | Offshore Staffing",
  description:
    "Build your dedicated hospitality and tourism team with skilled offshore professionals from the Philippines. Our staff helps streamline your hospitality operations.",
};

export default function HospitalityPage() {
  const services = [
    "Hotel & Resort Management",
    "Travel & Booking Coordinators",
    "Customer Service Representatives",
    "Reservations Specialists",
    "Virtual Tour Guides",
    "Event Planners & Coordinators",
    "Revenue Management Specialists",
    "Front Desk Support Staff",
    "Digital Marketing for Hospitality",
  ];

  const benefits = [
    "24/7 customer service coverage for global clientele",
    "Trained hospitality professionals with industry experience",
    "Multilingual staff options for international guests",
    "Significant cost savings compared to local hiring",
    "Scalable team growth during peak seasons",
    "Streamlined booking and reservation management",
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Hospitality & Tourism Staff
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Build your dedicated hospitality team with skilled professionals
              in the Philippines
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
                Hospitality & Tourism Services
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our offshore hospitality professionals provide comprehensive
                support for hotels, resorts, travel agencies, and tourism
                businesses. With excellent customer service skills and industry
                knowledge, they help deliver exceptional guest experiences while
                optimizing operational efficiency.
              </p>

              <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                Hospitality Roles We Fill
              </h3>
              <ul className="space-y-3 mb-10">
                {services.map((service) => (
                  <li
                    key={`service-${service.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
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
                    <span className="text-lg text-slate-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Why Choose Our Hospitality Staff
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
                  Elevate your hospitality business
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  Get started today and build a dedicated hospitality team that
                  provides exceptional service to your guests while optimizing
                  operational costs.
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
                "The hospitality staff we hired through Staff Stack has
                transformed our customer service operations. Our guests
                consistently praise the responsiveness and helpfulness of our
                remote team. The 24/7 coverage has been a game-changer for our
                international clientele, and the cost savings have allowed us to
                invest more in our physical facilities."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  RM
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Richard Martinez</p>
                  <p className="text-sm text-slate-500">
                    General Manager, Horizon Resorts
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
