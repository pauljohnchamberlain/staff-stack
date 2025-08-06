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
  Mail,
  Clock,
  Users,
  Briefcase,
  Globe2,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Remote Staff in Manila, Philippines | Staff Stack",
  description:
    "Build your remote team with talented professionals in Manila, Philippines. Access top IT developers, customer service, and admin staff at 60% cost savings.",
  keywords: [
    "Manila offshore staffing",
    "hire remote staff Manila",
    "Philippines outsourcing Manila",
    "Manila IT developers",
    "Manila customer service",
    "remote teams Manila",
  ],
  openGraph: {
    title: "Hire Remote Staff in Manila, Philippines | Staff Stack",
    description:
      "Access Manila's top talent pool for IT development, customer service, and professional services. Build your dedicated remote team today.",
    url: "https://staffstack.com/locations/manila",
  },
};

export default function ManilaLocationPage() {
  const manilaStats = {
    population: "13.5 million",
    timeZone: "GMT+8 (Philippine Standard Time)",
    languages: "English, Filipino",
    internetSpeed: "Average 100+ Mbps",
    businessDistricts: [
      "Makati",
      "Bonifacio Global City",
      "Ortigas",
      "Quezon City",
    ],
  };

  const availableRoles = [
    {
      category: "IT & Development",
      roles: [
        "Full-stack Developers",
        "DevOps Engineers",
        "UI/UX Designers",
        "Mobile App Developers",
      ],
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      category: "Customer Service",
      roles: [
        "Customer Support",
        "Technical Support",
        "Live Chat Agents",
        "Social Media Management",
      ],
      icon: <Phone className="h-6 w-6" />,
    },
    {
      category: "Creative Services",
      roles: [
        "Graphic Designers",
        "Video Editors",
        "Content Creators",
        "Digital Marketing",
      ],
      icon: <Globe2 className="h-6 w-6" />,
    },
    {
      category: "Administrative",
      roles: [
        "Virtual Assistants",
        "Data Entry",
        "Executive Assistants",
        "Project Coordinators",
      ],
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const manilaAdvantages = [
    {
      title: "Business Hub of the Philippines",
      description:
        "Manila is the country's economic center with the highest concentration of skilled professionals.",
    },
    {
      title: "Excellent Infrastructure",
      description:
        "Modern office buildings, reliable internet, and world-class telecommunications infrastructure.",
    },
    {
      title: "Large Talent Pool",
      description:
        "Home to top universities and training centers, producing thousands of qualified graduates annually.",
    },
    {
      title: "Cultural Alignment",
      description:
        "Strong Western business culture integration with American-style education and work practices.",
    },
    {
      title: "Cost Effective",
      description:
        "Competitive rates while maintaining high quality standards - typically 60-70% cost savings.",
    },
    {
      title: "24/7 Operations",
      description:
        "Flexible working arrangements to support global business hours and time zones.",
    },
  ];

  // LocalBusiness schema for Manila office
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Staff Stack Manila",
    image: "https://staffstack.com/manila-office.jpg",
    "@id": "https://staffstack.com/locations/manila",
    url: "https://staffstack.com/locations/manila",
    telephone: "+63-2-1234-5678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business District",
      addressLocality: "Manila",
      addressRegion: "Metro Manila",
      postalCode: "1000",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 14.5995,
      longitude: 120.9842,
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
        latitude: 14.5995,
        longitude: 120.9842,
      },
      geoRadius: "50000", // 50km radius
    },
    areaServed: "Manila, Philippines",
    priceRange: "$$",
  };

  return (
    <>
      {/* LocalBusiness Schema for Manila */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-[#09d8f5]" />
                <span className="text-[#09d8f5] font-medium">
                  Manila, Philippines
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hire Top Remote Staff in Manila
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mb-8">
                Access Manila's exceptional talent pool and build your dedicated
                remote team in the Philippines' business capital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-semibold"
                  asChild
                >
                  <Link href="/contact-us">
                    Start Building Your Manila Team
                  </Link>
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

        {/* Manila Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c4a] mb-6">
                    Why Choose Manila for Your Remote Team?
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Manila is the Philippines' premier business destination and
                    the heart of the country's outsourcing industry. With over
                    13 million people in the metropolitan area, Manila offers
                    the largest pool of skilled, English-speaking professionals
                    in Southeast Asia.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {manilaStats.population} metro area
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {manilaStats.timeZone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe2 className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {manilaStats.languages}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {manilaStats.internetSpeed}
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
                        {manilaStats.population}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Time Zone:</span>
                      <span className="font-medium">GMT+8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Languages:</span>
                      <span className="font-medium">
                        {manilaStats.languages}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Internet Speed:</span>
                      <span className="font-medium">
                        {manilaStats.internetSpeed}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium text-[#0f2c4a] mb-2">
                      Major Business Districts:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {manilaStats.businessDistricts.map((district) => (
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
                  Roles Available in Manila
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Manila's diverse talent pool covers all major business
                  functions with highly skilled professionals
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

        {/* Manila Advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c4a] mb-4">
                  Manila Advantages
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Why Manila is the top choice for building offshore teams
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {manilaAdvantages.map((advantage, index) => (
                  <div key={index} className="text-center">
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
                Ready to Build Your Manila Team?
              </h2>
              <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies who have successfully built dedicated
                remote teams in Manila. Start with one hire and scale as you
                grow.
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
                      Davao
                    </CardTitle>
                    <CardDescription>
                      Emerging destination for quality talent
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/locations/davao">Learn More</Link>
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
    </>
  );
}
