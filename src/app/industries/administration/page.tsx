import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Administration & Support Staff | Offshore Staffing",
  description:
    "Hire dedicated administration and support staff from the Philippines. Our offshore administrative professionals help streamline your business operations.",
};

export default function AdministrationPage() {
  const services = [
    "Virtual Administrative Assistants",
    "Customer Service Representatives",
    "Data Entry Specialists",
    "Office Managers",
    "Executive Assistants",
    "Document Controllers",
    "Receptionists & Front Office Staff",
    "Scheduling Coordinators",
    "Administrative Coordinators",
  ];

  const benefits = [
    "Cost-effective administrative support at 50-70% lower than local hiring",
    "Highly skilled, English-proficient administrative professionals",
    "Flexible scheduling with 24/7 coverage options",
    "Reduced operational burden and administrative overhead",
    "Scalable support that grows with your business",
    "Full-time dedicated staff, not shared resources",
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Administration & Support Staff
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Streamline your operations with dedicated offshore administrative
              professionals
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
                Administrative Support Services
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our offshore administrative professionals in the Philippines
                provide comprehensive support for your business operations. With
                exceptional English communication skills and a strong work
                ethic, they seamlessly integrate into your team to handle
                day-to-day administrative tasks, allowing you to focus on core
                business functions.
              </p>

              <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                Administrative Roles We Fill
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
                Why Choose Our Administrative Staff
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
                  Ready to build your administrative team?
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  Get started today with our expert recruitment team to find the
                  perfect administrative professionals for your business.
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
                "Hiring administrative staff through Staff Stack has been
                transformative for our business. The quality of talent is
                exceptional, and the cost savings are substantial. Our
                administrative team in the Philippines works seamlessly with our
                local staff, handling everything from customer service to data
                entry with precision and professionalism."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  JW
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Jennifer Wilson</p>
                  <p className="text-sm text-slate-500">
                    Operations Manager, Global Solutions Inc.
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
