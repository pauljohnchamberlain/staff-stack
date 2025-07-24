import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Social Responsibility | Staff Stack",
  description:
    "Learn about Staff Stack's commitment to social responsibility and sustainable business practices in the Philippines.",
};

export default function SocialResponsibilityPage() {
  const initiatives = [
    {
      title: "Educational Scholarships",
      description:
        "We provide educational scholarships to underprivileged students pursuing degrees in IT, business, and other fields relevant to the BPO industry. Since 2015, we've sponsored over 120 students through university education.",
      impact: "120+ students supported",
    },
    {
      title: "Digital Skills Training",
      description:
        "Our free digital literacy and skills training programs help community members develop the technical capabilities needed for employment in the modern economy. These programs focus on basic computer skills, English proficiency, and introductory programming.",
      impact: "2,500+ participants trained",
    },
    {
      title: "Disaster Relief",
      description:
        "When natural disasters strike the Philippines, our team mobilizes quickly to provide relief supplies, temporary shelter, communication services, and financial assistance to affected communities, particularly in regions where our staff members reside.",
      impact: "15+ disaster response efforts",
    },
    {
      title: "Community Development",
      description:
        "We partner with local government units and NGOs to implement infrastructure improvement projects, focusing on internet connectivity, computer labs for schools, and sustainable community spaces that foster learning and collaboration.",
      impact: "35+ communities served",
    },
  ];

  const environmentalPrograms = [
    {
      title: "Carbon Footprint Reduction",
      description:
        "We've implemented comprehensive energy efficiency measures across all our facilities, including energy-efficient lighting, optimized cooling systems, and smart energy management. Our carbon footprint reduction program has cut energy consumption by 35% since 2018.",
      target: "50% reduction by 2030",
    },
    {
      title: "Paperless Operations",
      description:
        "Our digital-first approach has reduced paper consumption by over 90%. We use electronic documentation, digital signatures, and collaborative online tools to minimize environmental impact while enhancing operational efficiency.",
      target: "95% paperless by 2025",
    },
    {
      title: "Waste Management",
      description:
        "Our comprehensive recycling and e-waste management programs ensure that electronic equipment, office materials, and other waste are properly processed, recycled, or disposed of in environmentally responsible ways.",
      target: "Zero landfill waste by 2027",
    },
    {
      title: "Green Transportation",
      description:
        "We encourage sustainable commuting through shuttle services, carpool programs, bike-friendly facilities, and incentives for staff who use public transportation, reducing the carbon footprint of our daily operations.",
      target: "60% sustainable commuting",
    },
  ];

  const workplaceInitiatives = [
    {
      title: "Diversity & Inclusion",
      description:
        "We actively promote workplace diversity through inclusive hiring practices, cultural awareness training, and accommodation for various needs. Our team includes individuals from diverse backgrounds, ages, abilities, and perspectives.",
    },
    {
      title: "Fair Compensation",
      description:
        "We provide compensation packages that exceed industry standards, including comprehensive benefits, health insurance, retirement plans, and performance-based incentives that recognize and reward excellence.",
    },
    {
      title: "Work-Life Balance",
      description:
        "Our flexible work arrangements, including remote and hybrid options, help staff maintain a healthy balance between professional responsibilities and personal life, resulting in higher satisfaction and productivity.",
    },
    {
      title: "Professional Development",
      description:
        "We invest in ongoing learning through tuition reimbursement, professional certification programs, skills development workshops, and leadership training to help our team members advance their careers.",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Social Responsibility
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Making a positive impact on our communities, environment, and
              society
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6 text-center">
              Our Commitment to Responsible Business
            </h2>
            <p className="text-lg text-slate-700 mb-10 text-center">
              At Staff Stack, we believe that business success and social
              responsibility go hand in hand. Our approach to corporate social
              responsibility focuses on creating positive impacts in three key
              areas: community development, environmental sustainability, and
              workplace ethics. Through strategic initiatives and partnerships,
              we strive to contribute to a more inclusive, sustainable, and
              prosperous Philippines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="h-16 w-16 rounded-full bg-[#09d8f5] mx-auto flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                  Community Impact
                </h3>
                <p className="text-slate-700">
                  Investing in education, skills development, and economic
                  opportunity for local communities.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="h-16 w-16 rounded-full bg-[#09d8f5] mx-auto flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                  Environmental Stewardship
                </h3>
                <p className="text-slate-700">
                  Reducing our environmental footprint through sustainable
                  business practices and conservation efforts.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="h-16 w-16 rounded-full bg-[#09d8f5] mx-auto flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                  Workplace Ethics
                </h3>
                <p className="text-slate-700">
                  Creating a fair, inclusive, and supportive work environment
                  that prioritizes employee well-being and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Initiatives Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-8 text-center">
              Community Initiatives
            </h2>
            <p className="text-lg text-slate-700 mb-10 text-center">
              Our community programs focus on creating pathways to economic
              opportunity through education, skills development, and
              infrastructure support.
            </p>

            <div className="space-y-8">
              {initiatives.map((initiative) => (
                <div
                  key={`initiative-${initiative.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-white p-6 rounded-xl shadow-xs"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="grow">
                      <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                        {initiative.title}
                      </h3>
                      <p className="text-slate-700">{initiative.description}</p>
                    </div>
                    <div className="md:shrink-0">
                      <span className="bg-[#09d8f5]/20 text-[#0f2c4a] text-sm font-medium py-2 px-4 rounded-full block text-center">
                        {initiative.impact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-8 text-center">
              Environmental Sustainability
            </h2>
            <p className="text-lg text-slate-700 mb-10 text-center">
              Our environmental initiatives focus on reducing our carbon
              footprint, minimizing waste, and promoting sustainable practices
              throughout our operations.
            </p>

            <div className="space-y-8">
              {environmentalPrograms.map((program) => (
                <div
                  key={`program-${program.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="grow">
                      <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                        {program.title}
                      </h3>
                      <p className="text-slate-700">{program.description}</p>
                    </div>
                    <div className="md:shrink-0">
                      <span className="bg-[#0f2c4a] text-white text-sm font-medium py-2 px-4 rounded-full block text-center">
                        {program.target}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workplace Initiatives Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-8 text-center">
              Ethical Workplace
            </h2>
            <p className="text-lg text-slate-700 mb-10 text-center">
              Our workplace practices are designed to create an equitable,
              inclusive, and supportive environment where team members can
              thrive professionally and personally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workplaceInitiatives.map((item) => (
                <div
                  key={`workplace-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-white p-6 rounded-xl shadow-xs"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-8">
              Partner With Us
            </h2>
            <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto">
              When you choose Staff Stack as your offshore staffing partner,
              you're not just building your team – you're contributing to
              sustainable economic development and positive social impact in the
              Philippines. Join us in creating business value while making a
              difference.
            </p>

            <Button
              size="lg"
              className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
              asChild
            >
              <Link href="/contact-us">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
