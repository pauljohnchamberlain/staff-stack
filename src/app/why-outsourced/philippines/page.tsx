import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Why Philippines for Offshore Staffing | Best Location | Staff Stack",
  description:
    "Discover why the Philippines is the world's top offshore staffing destination. 92% English proficiency, cultural alignment, and exceptional talent pool.",
  keywords: [
    "Philippines offshore staffing",
    "why Philippines outsourcing",
    "Filipino talent advantages",
    "Philippines business advantages",
    "offshore staffing location",
    "best outsourcing destination",
  ],
  openGraph: {
    title:
      "Why Philippines for Offshore Staffing | Best Location | Staff Stack",
    description:
      "Discover why the Philippines is the world's top offshore staffing destination. 92% English proficiency, cultural alignment, and exceptional talent pool.",
  },
};

export default function PhilippinesPage() {
  const advantages = [
    {
      id: "business-environment",
      title: "Business-Friendly Environment",
      description:
        "The Philippines has a stable government and economy with policies encouraging foreign investment and international business partnerships.",
    },
    {
      id: "english-proficiency",
      title: "High English Proficiency",
      description:
        "With over 92% English literacy, Filipinos rank among the top non-native English speakers globally, ensuring seamless communication.",
    },
    {
      id: "cultural-compatibility",
      title: "Cultural Compatibility",
      description:
        "Filipino culture blends Eastern values with Western influences, making it easy for Filipino staff to adapt to international business practices.",
    },
    {
      id: "education-system",
      title: "Education System",
      description:
        "The Philippines produces over 500,000 college graduates annually, with strong emphasis on business, IT, engineering, and healthcare.",
    },
    {
      id: "cost-efficiency",
      title: "Cost Efficiency",
      description:
        "Operational costs in the Philippines are 70-80% lower than the US, Australia, and Europe, without compromising quality.",
    },
    {
      id: "work-ethic",
      title: "Exceptional Work Ethic",
      description:
        "Filipino professionals are known for their dedication, loyalty, and extraordinary customer service orientation.",
    },
  ];

  const skills = [
    { id: "software-dev", name: "Software Development" },
    { id: "digital-marketing", name: "Digital Marketing" },
    { id: "customer-support", name: "Customer Support" },
    { id: "financial-services", name: "Financial Services" },
    { id: "data-entry", name: "Data Entry" },
    { id: "virtual-assistance", name: "Virtual Assistance" },
    { id: "graphic-design", name: "Graphic Design" },
    { id: "engineering", name: "Engineering" },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Why The Philippines?
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              The ideal offshore staffing destination for your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                The Philippines: Your Staff Stack Advantage
              </h2>
              <p className="text-lg font-inter text-slate-700 mb-6">
                For businesses looking to optimize operations while maintaining
                high quality, the Philippines stands out as the premier offshore
                staffing destination. With its unique combination of linguistic
                capabilities, educational excellence, and cultural affinity with
                Western business practices, Filipino professionals offer
                unparalleled value.
              </p>
              <p className="text-lg font-inter text-slate-700 mb-6">
                At Staff Stack, we've built our success on connecting businesses
                with the exceptional talent pool the Philippines offers. Our
                clients consistently report that their Filipino team members
                outperform expectations, delivering outstanding work while
                seamlessly integrating with existing teams across the globe.
              </p>
            </div>

            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/2688779156/3300813873.jpeg"
                alt="Modern Staff Stack office in the Philippines"
                fill
                className="object-cover"
                unoptimized
                crossOrigin="anonymous"
              />
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-10 text-center">
              6 Key Advantages of Filipino Talent
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.id}
                  className="bg-slate-50 p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-[#09d8f5]/20 text-[#09d8f5] flex items-center justify-center mb-4">
                    <span className="text-xl font-lexend font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-lexend font-bold text-[#0f2c4a] mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 font-inter">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-[#0f2c4a]/5 p-8 md:p-12 rounded-xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-lexend font-bold text-[#0f2c4a] mb-6 text-center">
                Specialized Talent Across Industries
              </h2>
              <p className="text-lg font-inter text-slate-700 mb-8 text-center">
                The Philippines is a hub for specialized talent across numerous
                fields, from IT and software development to customer service,
                accounting, digital marketing, and healthcare support.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="bg-white py-2 px-4 rounded-full text-[#0f2c4a] font-lexend shadow-xs"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                  asChild
                >
                  <Link href="/contact-us">Build Your Team Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0f2c4a] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-lexend font-bold mb-12 text-center">
            Philippines Staffing By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-lexend font-bold text-[#09d8f5]">
                92%
              </p>
              <p className="mt-2 font-inter">English Literacy Rate</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-lexend font-bold text-[#09d8f5]">
                700k+
              </p>
              <p className="mt-2 font-inter">Annual IT Graduates</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-lexend font-bold text-[#09d8f5]">
                24/7
              </p>
              <p className="mt-2 font-inter">Operational Capabilities</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-lexend font-bold text-[#09d8f5]">
                75%
              </p>
              <p className="mt-2 font-inter">Average Cost Savings</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
