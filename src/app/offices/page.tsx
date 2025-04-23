import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Offices & Facilities | Offshore Staffing",
  description: "Explore our state-of-the-art office facilities in the Philippines designed to provide your offshore team with the ideal work environment.",
};

export default function OfficesPage() {
  const facilityFeatures = [
    {
      title: "Modern Workspaces",
      description: "Ergonomic workstations, collaborative areas, and quiet zones designed to maximize productivity and comfort."
    },
    {
      title: "Enterprise-Grade Infrastructure",
      description: "Redundant high-speed internet connections, backup power systems, and enterprise-level hardware to ensure uninterrupted operations."
    },
    {
      title: "Advanced Security",
      description: "24/7 physical security, biometric access controls, CCTV monitoring, and data security protocols to protect your business assets."
    },
    {
      title: "Collaboration Technology",
      description: "High-definition video conferencing, digital whiteboards, and meeting rooms equipped with the latest presentation technology."
    },
    {
      title: "Employee Amenities",
      description: "Break rooms, dining areas, relaxation spaces, and recreational facilities to promote staff wellbeing and work-life balance."
    },
    {
      title: "Expansion Capacity",
      description: "Flexible office layouts that can easily accommodate your growing team without disrupting operations."
    }
  ];

  const locations = [
    {
      city: "Makati City",
      address: "One Ayala Tower, Ayala Avenue, Makati City, Metro Manila",
      features: "Premium central business district location, Class A office space"
    },
    {
      city: "Bonifacio Global City",
      address: "High Street South Corporate Plaza, BGC, Taguig City, Metro Manila",
      features: "Modern financial district, premium amenities and connectivity"
    },
    {
      city: "Cebu City",
      address: "Cebu IT Park, Lahug, Cebu City",
      features: "Technology hub in central Philippines, robust IT infrastructure"
    },
    {
      city: "Davao City",
      address: "Matina IT Park, Davao City, Mindanao",
      features: "Strategic location in southern Philippines, expanding tech center"
    }
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Offices & Facilities
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              State-of-the-art workspaces for your offshore team in the Philippines
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
                World-Class Office Environments
              </h2>
              <p className="text-lg text-slate-700">
                Staff Stack provides premium office facilities across key locations in the Philippines. Our purpose-built workspaces are designed to foster productivity, collaboration, and employee wellbeing, ensuring your offshore team has everything they need to perform at their best.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {facilityFeatures.map((feature) => (
                <div
                  key={`feature-${feature.title.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-700">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Technology Infrastructure
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Reliable connectivity and robust technology are essential for offshore teams. Our facilities feature enterprise-grade infrastructure designed for performance, reliability, and security.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-[#09d8f5] mb-2">99.99%</div>
                    <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">Uptime</p>
                    <p className="text-slate-700 mt-2">Redundant systems ensure continuous operations</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-[#09d8f5] mb-2">1 Gbps+</div>
                    <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">Internet</p>
                    <p className="text-slate-700 mt-2">High-speed dedicated connections</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-[#09d8f5] mb-2">24/7</div>
                    <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">IT Support</p>
                    <p className="text-slate-700 mt-2">Round-the-clock technical assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Strategic Locations
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Our offices are strategically located in prime business districts across the Philippines, providing easy access, excellent amenities, and proximity to talent pools.
              </p>

              <div className="space-y-6">
                {locations.map((location) => (
                  <div
                    key={`location-${location.city.replace(/\s+/g, "-").toLowerCase()}`}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                  >
                    <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                      {location.city}
                    </h3>
                    <p className="text-slate-600 mb-3">
                      {location.address}
                    </p>
                    <p className="text-slate-700 italic">
                      {location.features}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ready to build your offshore team?
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Get started today with our expert recruitment team to build your dedicated offshore team in our state-of-the-art facilities.
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
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg italic font-inter text-slate-600 mb-6">
                "When I visited Staff Stack's offices in Manila, I was genuinely impressed by the quality of their facilities. The workspace is modern, professional, and on par with any tech company in Silicon Valley. The infrastructure is robust, with redundant systems that ensure my team can work without interruption. It's clear that they've invested significantly in creating an environment where staff can thrive."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  AK
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Alex Kaplan</p>
                  <p className="text-sm text-slate-500">Founder, Nimble Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
