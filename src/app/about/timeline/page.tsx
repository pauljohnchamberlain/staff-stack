import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Corporate Timeline | Staff Stack",
  description:
    "Explore Staff Stack's journey from our founding to becoming a leading offshore staffing provider in the Philippines.",
};

export default function TimelinePage() {
  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description:
        "Staff Stack was founded with a vision to bridge the gap between international businesses and talented Filipino professionals.",
    },
    {
      year: "2010",
      title: "First Major Client",
      description:
        "Secured our first enterprise client, providing a dedicated team of 25 staff across various roles.",
    },
    {
      year: "2012",
      title: "Expansion to Cebu",
      description:
        "Opened our second office location in Cebu City to access additional talent pools and provide geographical redundancy.",
    },
    {
      year: "2014",
      title: "100th Client",
      description:
        "Celebrated our 100th client partnership, with over 500 staff employed across our facilities.",
    },
    {
      year: "2015",
      title: "ISO Certification",
      description:
        "Achieved ISO 27001 certification for our information security management systems, enhancing our data protection protocols.",
    },
    {
      year: "2017",
      title: "Launch of Home-Based Program",
      description:
        "Established our home-based staffing solutions in response to changing work preferences and technological advancements.",
    },
    {
      year: "2018",
      title: "10th Anniversary",
      description:
        "Celebrated 10 years of operation with over 1,000 staff members working across 150+ client businesses.",
    },
    {
      year: "2019",
      title: "BGC Office Opening",
      description:
        "Inaugurated our flagship office in Bonifacio Global City, a premium business district in Metro Manila.",
    },
    {
      year: "2020",
      title: "Remote Work Transformation",
      description:
        "Successfully transitioned 95% of our workforce to remote work within two weeks during the global pandemic.",
    },
    {
      year: "2021",
      title: "Hybrid Work Model Launch",
      description:
        "Developed and implemented our comprehensive hybrid work model, combining the benefits of office and remote work.",
    },
    {
      year: "2022",
      title: "Davao Office Opening",
      description:
        "Expanded to southern Philippines with a new office in Davao City, further diversifying our geographical presence.",
    },
    {
      year: "2023",
      title: "250th Client Milestone",
      description:
        "Reached 250 active client partnerships spanning 18 countries and 25 industry sectors.",
    },
    {
      year: "2024",
      title: "AI & Advanced Staffing Solutions",
      description:
        "Launched specialized AI-assisted staffing solutions to help businesses navigate emerging technologies and talent needs.",
    },
    {
      year: "2025",
      title: "Continued Growth & Innovation",
      description:
        "Continuing our journey of innovation and excellence in offshore staffing with new facilities and expanded service offerings.",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Corporate Timeline
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Our journey from startup to industry-leading offshore staffing
              provider
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6 text-center">
                Our Growth Story
              </h2>
              <p className="text-lg text-slate-700 text-center">
                Since our founding in 2008, Staff Stack has grown from a small
                team with a big vision into one of the Philippines' leading
                offshore staffing providers. Our timeline reflects our
                commitment to innovation, quality, and exceptional service to
                clients worldwide.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#09d8f5] rounded-full" />

              {/* Timeline entries */}
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div
                    key={`milestone-${milestone.year}`}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    {/* Timeline connector and year */}
                    <div className="w-1/2 flex justify-center">
                      <div
                        className={`relative ${index % 2 === 0 ? "text-right pr-10" : "text-left pl-10"}`}
                      >
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f2c4a] border-4 border-[#09d8f5] z-10 left-1/2 -translate-x-1/2" />
                        <h3 className="text-3xl font-lexend font-bold text-[#0f2c4a]">
                          {milestone.year}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-1/2">
                      <div
                        className={`bg-slate-50 p-6 rounded-xl border border-slate-100 ${index % 2 === 0 ? "ml-10" : "mr-10"}`}
                      >
                        <h4 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-slate-700">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 text-center">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Be Part of Our Future
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                As we continue to grow and innovate, we invite you to join our
                journey. Partner with Staff Stack to build your dedicated
                offshore team and contribute to the next chapter of our story.
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
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-8">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
              Throughout our history, our growth has been guided by a set of
              core values that define who we are and how we operate. These
              principles have remained constant even as we've evolved as an
              organization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-xs">
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
                    <path d="M18 6 7 17l-5-5" />
                    <path d="m22 10-7.5 7.5L13 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                  Excellence
                </h3>
                <p className="text-slate-700">
                  Consistently delivering beyond expectations in every service
                  we provide.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xs">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16.24 7.76-8.48 8.48" />
                    <path d="m7.76 7.76 8.48 8.48" />
                  </svg>
                </div>
                <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                  Transparency
                </h3>
                <p className="text-slate-700">
                  Operating with honesty and clarity in all client and employee
                  relationships.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xs">
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
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                    <circle cx="7.5" cy="11.5" r="1.5" />
                    <circle cx="12" cy="8" r="1.5" />
                    <circle cx="16.5" cy="11.5" r="1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                  Innovation
                </h3>
                <p className="text-slate-700">
                  Continuously seeking new ways to improve our services and
                  create value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
