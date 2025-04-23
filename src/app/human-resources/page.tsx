import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Human Resources | Offshore Staffing",
  description: "Learn how our comprehensive HR services support your offshore team in the Philippines, ensuring your staff is well-managed, motivated, and retained.",
};

export default function HumanResourcesPage() {
  const hrServices = [
    {
      title: "Comprehensive Onboarding",
      description: "From day one, we ensure your new staff members are properly integrated into your team with thorough orientation, equipment setup, and system access."
    },
    {
      title: "Performance Management",
      description: "We implement structured performance review processes, help set KPIs, and provide regular feedback mechanisms to ensure your team is meeting expectations."
    },
    {
      title: "Staff Retention Programs",
      description: "Our proven retention strategies have resulted in a 95%+ retention rate, ensuring your valuable offshore team members stay with your company long-term."
    },
    {
      title: "Payroll & Benefits Administration",
      description: "We handle all payroll processing, healthcare benefits, social security, and other mandatory benefits in compliance with Philippine regulations."
    },
    {
      title: "Employee Engagement",
      description: "Regular team building activities, recognition programs, and wellness initiatives keep your offshore staff motivated and engaged."
    },
    {
      title: "Conflict Resolution",
      description: "Our experienced HR team provides mediation and resolution for any workplace conflicts, ensuring a harmonious work environment."
    }
  ];

  const complianceAreas = [
    "Labor Code Compliance",
    "Tax Regulations",
    "Social Security System",
    "Philippine Health Insurance",
    "Home Development Mutual Fund",
    "Workplace Safety Standards",
    "Data Privacy Compliance",
    "Anti-Discrimination Policies"
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Human Resources Management
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Comprehensive HR support for your offshore team in the Philippines
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
                Complete HR Management Services
              </h2>
              <p className="text-lg text-slate-700">
                Our dedicated Human Resources team takes care of all aspects of employee management, allowing you to focus on your core business activities. From onboarding and training to performance management and retention, we ensure your offshore team operates smoothly and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {hrServices.map((service) => (
                <div
                  key={`service-${service.title.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-700">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Legal Compliance & Regulations
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We ensure complete compliance with Philippine labor laws and regulations, managing all the complex legal requirements of employing staff in the Philippines so you don't have to worry about local compliance issues.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                  Compliance Areas We Handle
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {complianceAreas.map((area) => (
                    <div
                      key={`compliance-${area.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-[#09d8f5] flex items-center justify-center shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-lg text-slate-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Team Retention & Well-being
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our HR team is committed to creating a positive work environment that promotes staff well-being and long-term retention. Through regular check-ins, career development opportunities, and comprehensive wellness programs, we ensure your offshore team members are happy, healthy, and committed to your organization.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl font-bold text-[#09d8f5] mb-2">95%+</div>
                  <p className="text-2xl font-lexend font-semibold text-[#0f2c4a]">Staff Retention Rate</p>
                  <p className="text-lg text-slate-700 mt-2">One of the highest in the Philippine BPO industry</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ready to build your offshore team?
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Get started today with our expert recruitment team and comprehensive HR management services to build and maintain your dedicated offshore team.
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
                "Staff Stack's HR management has been exceptional. They've handled everything from onboarding to ongoing support for our team of 15 offshore staff. Their retention strategies are clearly working - we haven't lost a single team member in over two years. The regular performance reviews and development plans have ensured our staff continue to grow their skills and contribute increasingly to our business."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  RJ
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Robert Johnson</p>
                  <p className="text-sm text-slate-500">Operations Director, Insight Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
