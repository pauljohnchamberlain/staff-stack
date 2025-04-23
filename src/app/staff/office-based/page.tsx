import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Office Based Teams | Offshore Staffing",
  description: "Build dedicated office-based teams in the Philippines with our premium facilities, professional environment, and comprehensive support systems.",
};

export default function OfficeBasedTeamsPage() {
  const benefits = [
    {
      title: "Professional Environment",
      description: "State-of-the-art office facilities designed for collaboration, productivity, and professional development."
    },
    {
      title: "Advanced Infrastructure",
      description: "Enterprise-grade technology, redundant connectivity, and secure systems for uninterrupted operations."
    },
    {
      title: "Team Collaboration",
      description: "Dedicated spaces that foster teamwork, peer learning, and organic knowledge sharing among staff members."
    },
    {
      title: "Management Oversight",
      description: "Direct supervision with team leaders and managers on-site to ensure productivity and quality standards."
    },
    {
      title: "Security & Compliance",
      description: "Physical security measures, access controls, and ISO-certified data security protocols for maximum protection."
    },
    {
      title: "Corporate Culture",
      description: "Immersive environment that reinforces your company culture, values, and performance expectations."
    }
  ];

  const facilityFeatures = [
    "Modern ergonomic workstations",
    "High-speed redundant internet connections",
    "Backup power systems",
    "Collaborative meeting spaces",
    "Breakout areas and recreational facilities",
    "24/7 security and access controls",
    "Refreshment areas and pantries",
    "Technical support on-site"
  ];

  const officeLocations = [
    {
      city: "Makati City",
      area: "Premium business district in Metro Manila",
      features: "Class A office buildings, excellent transportation access, nearby amenities"
    },
    {
      city: "Bonifacio Global City",
      area: "Modern financial and lifestyle center",
      features: "Contemporary office spaces, tech-friendly environment, vibrant community"
    },
    {
      city: "Cebu City",
      area: "Major business hub in central Philippines",
      features: "Growing IT Park, rich talent pool, competitive operational costs"
    },
    {
      city: "Davao City",
      area: "Business center in southern Philippines",
      features: "Emerging technology sector, stable infrastructure, quality of life advantages"
    }
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Office Based Teams
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Professional, collaborative environments for your dedicated offshore staff
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
                Premium Office Environments
              </h2>
              <p className="text-lg text-slate-700">
                Our office-based staffing solutions provide your team with a dedicated professional environment designed to maximize productivity, collaboration, and security. With all infrastructure and support services managed by our team, your staff can focus entirely on delivering exceptional results for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit) => (
                <div
                  key={`benefit-${benefit.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                World-Class Facilities
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our offices are specifically designed for offshore teams, with everything your staff needs to perform at their best. Each facility combines functionality, comfort, and security to create an optimal working environment.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                  Office Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facilityFeatures.map((feature) => (
                    <div
                      key={`feature-${feature.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-[#09d8f5] flex items-center justify-center shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-lg text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Strategic Locations
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our office facilities are located in key business districts across the Philippines, providing convenient access to talent pools, transportation, and supporting infrastructure.
              </p>

              <div className="space-y-6">
                {officeLocations.map((location) => (
                  <div
                    key={`location-${location.city.replace(/\s+/g, "-").toLowerCase()}`}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                  >
                    <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                      {location.city}
                    </h3>
                    <p className="text-slate-600 font-medium mb-2">
                      {location.area}
                    </p>
                    <p className="text-slate-700">
                      {location.features}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ready to build your office-based team?
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Get started today with our expert recruitment team to build your dedicated office-based offshore team in one of our premium facilities.
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
                "I was impressed when I visited our team at Staff Stack's office in Manila. The facilities are first-class – on par with our headquarters in Sydney. Our staff have everything they need, from cutting-edge technology to comfortable workspaces. The security measures and professional environment give us complete confidence when dealing with sensitive client information. Most importantly, our team loves working there, which has resulted in excellent retention rates."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  JC
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">James Chen</p>
                  <p className="text-sm text-slate-500">Managing Director, Pacific Financial Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
