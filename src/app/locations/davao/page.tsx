import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Clock,
  Users,
  Briefcase,
  Globe2,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo";

export const metadata: Metadata = {
  title: "Hire Remote Staff in Davao, Philippines | Staff Stack",
  description:
    "Build your remote team with emerging talent in Davao, Philippines. Access cost-effective IT developers, customer service, and admin staff in a stable region.",
  keywords: [
    "Davao offshore staffing",
    "hire remote staff Davao",
    "Philippines outsourcing Davao",
    "Davao IT developers",
    "Davao customer service",
    "remote teams Davao",
  ],
  openGraph: {
    title: "Hire Remote Staff in Davao, Philippines | Staff Stack",
    description:
      "Access Davao's emerging talent pool for IT development, customer service, and professional services. Build your dedicated remote team today.",
    url: "https://staffstack.co/locations/davao",
  },
};

export default function DavaoLocationPage() {
  const davaoStats = {
    population: "2.5 million",
    timeZone: "GMT+8 (Philippine Standard Time)",
    languages: "English, Filipino, Cebuano",
    internetSpeed: "Average 70+ Mbps",
    businessDistricts: [
      "Lanang",
      "Downtown Davao",
      "J.P. Laurel Avenue",
      "Matina",
    ],
  };

  const availableRoles = [
    {
      category: "IT & Development",
      roles: [
        "Junior Developers",
        "Web Developers",
        "Mobile Developers",
        "System Administrators",
      ],
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      category: "Customer Service",
      roles: [
        "Customer Support",
        "Technical Support",
        "Chat Support",
        "Order Processing",
      ],
      icon: <Phone className="h-6 w-6" />,
    },
    {
      category: "Creative Services",
      roles: [
        "Graphic Design",
        "Content Writing",
        "Social Media",
        "Video Editing",
      ],
      icon: <Globe2 className="h-6 w-6" />,
    },
    {
      category: "Administrative",
      roles: [
        "Virtual Assistants",
        "Data Processing",
        "Lead Generation",
        "Administrative Support",
      ],
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const davaoAdvantages = [
    {
      title: "Emerging Talent Pool",
      description:
        "Growing outsourcing destination with fresh talent and lower competition for skilled professionals.",
    },
    {
      title: "Exceptional Value",
      description:
        "Most cost-effective location in the Philippines while maintaining good quality standards.",
    },
    {
      title: "Stable Environment",
      description:
        "Safe, peaceful region with lower natural disaster risk and stable political environment.",
    },
    {
      title: "Good Infrastructure",
      description:
        "Improving telecommunications and business infrastructure supporting remote work operations.",
    },
    {
      title: "Cultural Advantages",
      description:
        "Strong Filipino work values with high loyalty and commitment to employers.",
    },
    {
      title: "Strategic Location",
      description:
        "Gateway to Southeast Asia with growing business connections and strategic positioning.",
    },
  ];

  // LocalBusiness schema for Davao office
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Staff Stack Davao",
    image: "https://staffstack.co/davao-office.jpg",
    "@id": "https://staffstack.co/locations/davao",
    url: "https://staffstack.co/locations/davao",
    telephone: "+63 82 321 4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "789 Business District",
      addressLocality: "Davao City",
      addressRegion: "Davao del Sur",
      postalCode: "8000",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 7.0731,
      longitude: 125.6128,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 7.0731,
        longitude: 125.6128,
      },
      geoRadius: "50000", // 50km radius
    },
    areaServed: "Davao, Philippines",
    priceRange: "$",
  };

  return (
    <main className="pt-24">
      {/* LocalBusiness Schema for Davao */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Breadcrumbs */}
      <div className="container pt-4">
        <Breadcrumbs
          items={[
            { label: "Locations", href: "/offices" },
            { label: "Davao", href: "/locations/davao" },
          ]}
        />
      </div>

      {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-[#09d8f5]" />
                <span className="text-[#09d8f5] font-medium">
                  Davao, Philippines
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hire Quality Remote Staff in Davao
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mb-8">
                Discover Davao's emerging talent pool and build your dedicated
                remote team in the Philippines' most cost-effective location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-semibold"
                  asChild
                >
                  <Link href="/contact-us">Start Building Your Davao Team</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#0f2c4a] font-semibold"
                  asChild
                >
                  <Link href="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Davao Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c4a] mb-6">
                    Why Choose Davao for Your Remote Team?
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Davao City is the Philippines' third-largest city and an
                    emerging outsourcing destination. Known for its safety,
                    stability, and growing tech sector, Davao offers excellent
                    value with lower costs while maintaining quality standards
                    and strong work ethics.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {davaoStats.population} metro area
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {davaoStats.timeZone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe2 className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {davaoStats.languages}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {davaoStats.internetSpeed}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#0f2c4a] mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Population:</span>
                      <span className="font-medium">
                        {davaoStats.population}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Time Zone:</span>
                      <span className="font-medium">GMT+8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Languages:</span>
                      <span className="font-medium">
                        {davaoStats.languages}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Internet Speed:</span>
                      <span className="font-medium">
                        {davaoStats.internetSpeed}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium text-[#0f2c4a] mb-2">
                      Major Business Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {davaoStats.businessDistricts.map((district) => (
                        <Badge
                          key={district}
                          variant="secondary"
                          className="bg-[#09d8f5]/10 text-[#0f2c4a]"
                        >
                          {district}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Roles */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c4a] mb-4">
                  Roles Available in Davao
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Davao's emerging talent market offers skilled professionals
                  with excellent value proposition and strong work commitment
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {availableRoles.map((role) => (
                  <Card
                    key={role.category}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 bg-[#09d8f5]/10 rounded-full flex items-center justify-center mx-auto mb-3 text-[#0f2c4a]">
                        {role.icon}
                      </div>
                      <CardTitle className="text-lg text-[#0f2c4a]">
                        {role.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {role.roles.map((roleName) => (
                          <li
                            key={roleName}
                            className="text-sm text-slate-600 flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-[#09d8f5] rounded-full mr-2" />
                            {roleName}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Davao Advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c4a] mb-4">
                  Davao Advantages
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Why Davao represents excellent value for offshore teams
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {davaoAdvantages.map((advantage, index) => (
                  <div key={advantage.title} className="text-center">
                    <div className="w-16 h-16 bg-[#e60b8a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-[#e60b8a]">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0f2c4a] mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-slate-600">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0f2c4a]/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c4a] mb-6">
                Ready to Build Your Davao Team?
              </h2>
              <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                Discover the value of Davao's emerging talent market. Build a
                cost-effective, high-quality remote team with strong commitment
                and excellent work ethic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-semibold"
                  asChild
                >
                  <Link href="/contact-us">Get Started Today</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#09d8f5] text-[#0f2c4a] hover:bg-[#09d8f5]/10 font-semibold"
                  asChild
                >
                  <Link href="/faq">View FAQ</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#0f2c4a] mb-8 text-center">
                Explore Other Locations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#0f2c4a]">
                      Manila
                    </CardTitle>
                    <CardDescription>
                      Philippines business capital with largest talent pool
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/locations/manila">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#0f2c4a]">
                      Cebu
                    </CardTitle>
                    <CardDescription>
                      Growing tech hub with competitive rates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/locations/cebu">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#0f2c4a]">
                      All Locations
                    </CardTitle>
                    <CardDescription>
                      View all our office locations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/offices">View All</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
