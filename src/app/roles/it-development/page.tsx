import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "IT & Development Staff | Offshore Staffing",
  description: "Hire dedicated IT and software development professionals from the Philippines. Our technical staff helps build and maintain your digital solutions.",
};

export default function ITDevelopmentPage() {
  const roles = [
    "Software Developers",
    "Web Developers",
    "Mobile App Developers",
    "Frontend Developers",
    "Backend Developers",
    "Full Stack Developers",
    "QA Engineers",
    "DevOps Engineers",
    "UI/UX Designers",
    "Database Administrators",
    "System Administrators",
    "IT Support Specialists"
  ];

  const technologies = [
    "JavaScript/TypeScript",
    "React/Angular/Vue",
    "Node.js",
    "Python",
    "PHP",
    "Java",
    ".NET/C#",
    "Ruby on Rails",
    "iOS/Android Development",
    "AWS/Azure/GCP",
    "Docker/Kubernetes",
    "SQL & NoSQL Databases"
  ];

  const benefits = [
    "Access to a large pool of qualified IT professionals",
    "Significant cost savings vs. hiring locally",
    "Dedicated full-time technical resources",
    "Flexible team composition based on project needs",
    "Scalable resource allocation for growth phases",
    "Continuous training and skill development"
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              IT & Development Staff
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Build your dedicated tech team with skilled developers in the Philippines
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
                Technical Talent Solutions
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our offshore IT and development professionals in the Philippines provide comprehensive technical expertise for your software projects. With strong English communication skills and a solid technical foundation, they seamlessly integrate into your team to build, maintain, and enhance your digital solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                    IT & Dev Roles
                  </h3>
                  <ul className="space-y-3">
                    {roles.slice(0, 6).map((role) => (
                      <li key={`role-${role.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#09d8f5] flex items-center justify-center shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
                      <li key={`role-${role.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#09d8f5] flex items-center justify-center shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
                Technologies & Skills
              </h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {technologies.map((tech) => (
                  <span
                    key={`tech-${tech.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                    className="px-4 py-2 bg-slate-100 text-[#0f2c4a] rounded-full font-lexend"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Why Choose Our IT Staff
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
                  Build your development team
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  Get started today with our expert recruitment team to find the perfect IT professionals for your tech projects and ongoing support needs.
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
                "Staff Stack has been instrumental in helping us build our engineering team. The developers we've hired are not just technically proficient but also great communicators who integrate seamlessly with our in-house team. We've been able to accelerate our product development significantly while maintaining high quality standards."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  DS
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">David Schmidt</p>
                  <p className="text-sm text-slate-500">CTO, TechInnovate Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
