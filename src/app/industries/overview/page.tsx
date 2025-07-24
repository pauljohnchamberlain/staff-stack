import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Industry Expertise | Staff Stack",
  description:
    "Discover the wide range of industries we serve with our offshore staffing solutions. Find specialized talent for your specific industry needs.",
};

export default function IndustryOverviewPage() {
  const industries = [
    {
      id: "it",
      title: "Information Technology",
      description:
        "Tech talent for software development, web applications, and IT support.",
      href: "/industries/information-technology",
      icon: "/images/industries/information-technology.png",
    },
    {
      id: "financial",
      title: "Financial & Insurance Services",
      description:
        "Accounting, financial analysis, and insurance support professionals.",
      href: "/industries/financial",
      icon: "/images/industries/financial.png",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "Medical billing, patient coordination, and healthcare administrative support.",
      href: "/industries/healthcare",
      icon: "/images/industries/healthcare.png",
    },
    {
      id: "retail",
      title: "Retail Trade & E-Commerce",
      description:
        "Customer service, inventory management, and e-commerce operations.",
      href: "/industries/retail",
      icon: "/images/industries/retail.png",
    },
    {
      id: "education",
      title: "Education & Training",
      description:
        "Educational content development, tutoring, and administrative support.",
      href: "/industries/education",
      icon: "/images/industries/education.png",
    },
    {
      id: "hospitality",
      title: "Hospitality & Tourism",
      description:
        "Customer service, booking management, and tourism operations.",
      href: "/industries/hospitality",
      icon: "/images/industries/hospitality.png",
    },
    {
      id: "real-estate",
      title: "Real Estate Services",
      description:
        "Property management, lead generation, and administrative support.",
      href: "/industries/real-estate",
      icon: "/images/industries/real-estate.png",
    },
    {
      id: "telecommunications",
      title: "Information Media & Telecommunications",
      description:
        "Media production, telecommunications support, and content management.",
      href: "/industries/telecommunications",
      icon: "/images/industries/telecommunications.png",
    },
    {
      id: "engineering",
      title: "Engineering & Construction",
      description:
        "CAD specialists, project coordinators, and technical support.",
      href: "/industries/engineering",
      icon: "/images/industries/engineering.png",
    },
    {
      id: "legal",
      title: "Legal Services",
      description:
        "Legal research, document preparation, and paralegal support.",
      href: "/industries/legal",
      icon: "/images/industries/legal.png",
    },
    {
      id: "professional",
      title: "Professional Services",
      description:
        "Business consulting, administrative support, and specialized services.",
      href: "/industries/professional-services",
      icon: "/images/industries/professional-services.png",
    },
    {
      id: "transport",
      title: "Transport, Postal & Warehousing",
      description:
        "Logistics coordination, shipping administration, and supply chain support.",
      href: "/industries/transport",
      icon: "/images/industries/transport.png",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Industry Expertise
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Specialized offshore staffing solutions for every industry
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6 text-center">
              Industry-Specific Talent Solutions
            </h2>
            <p className="text-lg font-inter text-slate-700 text-center">
              At Staff Stack, we understand that each industry has unique
              requirements, challenges, and operational needs. Our
              industry-specific staffing solutions are designed to provide you
              with professionals who have the exact skills, experience, and
              background needed for your sector.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={industry.href}
                className="bg-white rounded-lg border border-slate-100 p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#0f2c4a]/5 flex items-center justify-center shrink-0">
                    <div className="h-6 w-6 text-[#09d8f5]">
                      {/* Placeholder for industry icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-lexend font-bold text-[#0f2c4a] mb-2 group-hover:text-[#09d8f5] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-slate-600 font-inter">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-[#0f2c4a]/5 p-8 md:p-12 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ready to Find Industry-Specific Talent?
              </h2>
              <p className="text-lg font-inter text-slate-700 mb-8">
                Our talent acquisition specialists will work with you to
                understand your industry-specific requirements and find the
                perfect professionals for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                  asChild
                >
                  <Link href="/contact-us">Discuss Your Needs</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#09d8f5] text-[#0f2c4a] hover:bg-[#09d8f5]/10 font-lexend"
                  asChild
                >
                  <Link href="/how-it-works">Learn About Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Facts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-10 text-center">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <p className="text-4xl font-lexend font-bold text-[#09d8f5]">
                  15+
                </p>
                <p className="mt-2 font-inter">Industries Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-lexend font-bold text-[#09d8f5]">
                  3,500+
                </p>
                <p className="mt-2 font-inter">Professionals Placed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-lexend font-bold text-[#09d8f5]">
                  97%
                </p>
                <p className="mt-2 font-inter">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-lexend font-bold text-[#09d8f5]">
                  250+
                </p>
                <p className="mt-2 font-inter">Global Clients</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-inter text-slate-700">
                Our industry expertise has helped businesses of all sizes access
                specialized talent that drives growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
