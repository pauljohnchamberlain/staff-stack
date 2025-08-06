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
  title: "Hire Remote Staff in Cebu, Philippines | Staff Stack",
  description:
    "Build your remote team with skilled professionals in Cebu, Philippines. Access competitive IT developers, customer service, and admin staff with excellent English skills.",
  keywords: [
    "Cebu offshore staffing",
    "hire remote staff Cebu",
    "Philippines outsourcing Cebu",
    "Cebu IT developers",
    "Cebu customer service",
    "remote teams Cebu",
  ],
  openGraph: {
    title: "Hire Remote Staff in Cebu, Philippines | Staff Stack",
    description:
      "Access Cebu's growing talent pool for IT development, customer service, and professional services. Build your dedicated remote team today.",
    url: "https://staffstack.com/locations/cebu",
  },
};

export default function CebuLocationPage() {
  const cebuStats = {
    population: "3.2 million",
    timeZone: "GMT+8 (Philippine Standard Time)",
    languages: "English, Cebuano, Filipino",
    internetSpeed: "Average 80+ Mbps",
    businessDistricts: [
      "Cebu IT Park",
      "Ayala Business Park",
      "Lahug",
      "Banilad",
    ],
  };

  const availableRoles = [
    {
      category: "IT & Development",
      roles: [
        "Web Developers",
        "Software Engineers",
        "QA Testers",
        "Database Administrators",
      ],
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      category: "Customer Service",
      roles: [
        "Call Center Agents",
        "Email Support",
        "Help Desk Support",
        "Account Management",
      ],
      icon: <Phone className="h-6 w-6" />,
    },
    {
      category: "Creative Services",
      roles: [
        "Web Designers",
        "Animation Artists",
        "Content Writers",
        "SEO Specialists",
      ],
      icon: <Globe2 className="h-6 w-6" />,
    },
    {
      category: "Administrative",
      roles: [
        "Virtual Assistants",
        "Bookkeeping",
        "Research Specialists",
        "Operations Support",
      ],
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const cebuAdvantages = [
    {
      title: "Growing Tech Hub",
      description:
        "Cebu is rapidly becoming a major IT and BPO destination with modern infrastructure and competitive talent.",
    },
    {
      title: "Cost Competitive",
      description:
        "Excellent value proposition with rates typically 10-15% lower than Manila while maintaining high quality.",
    },
    {
      title: "Strong English Skills",
      description:
        "High English proficiency with neutral accents, ideal for international client communication.",
    },
    {
      title: "Cultural Fit",
      description:
        "Strong Western orientation with excellent work ethic and professional attitudes.",
    },
    {
      title: "Quality Education",
      description:
        "Home to prestigious universities producing skilled graduates in technology and business fields.",
    },
    {
      title: "Stable Operations",
      description:
        "Reliable infrastructure with lower natural disaster risk compared to other Philippine regions.",
    },
  ];

  // LocalBusiness schema for Cebu office
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Staff Stack Cebu",
    image: "https://staffstack.com/cebu-office.jpg",
    "@id": "https://staffstack.com/locations/cebu",
    url: "https://staffstack.com/locations/cebu",
    telephone: "+63-32-1234-5678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "456 IT Park",
      addressLocality: "Cebu City",
      addressRegion: "Cebu",
      postalCode: "6000",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.3157,
      longitude: 123.8854,
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
        latitude: 10.3157,
        longitude: 123.8854,
      },
      geoRadius: "50000", // 50km radius
    },
    areaServed: "Cebu, Philippines",
    priceRange: "$",
  };

  return (
    <>
      {/* LocalBusiness Schema for Cebu */}
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
                  Cebu, Philippines
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hire Top Remote Staff in Cebu
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mb-8">
                Access Cebu's competitive talent pool and build your dedicated
                remote team in the Philippines' rising tech hub.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-semibold"
                  asChild
                >
                  <Link href="/contact-us">Start Building Your Cebu Team</Link>
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

        {/* Cebu Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c4a] mb-6">
                    Why Choose Cebu for Your Remote Team?
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">
                    Cebu is the Philippines' second-largest metropolitan area
                    and a rapidly growing outsourcing destination. Known as the
                    "Queen City of the South," Cebu offers excellent talent at
                    competitive rates with strong cultural alignment and
                    exceptional English proficiency.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {cebuStats.population} metro area
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {cebuStats.timeZone}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe2 className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {cebuStats.languages}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-[#09d8f5]" />
                      <span className="text-slate-600">
                        {cebuStats.internetSpeed}
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
                        {cebuStats.population}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Time Zone:</span>
                      <span className="font-medium">GMT+8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Languages:</span>
                      <span className="font-medium">{cebuStats.languages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Internet Speed:</span>
                      <span className="font-medium">
                        {cebuStats.internetSpeed}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium text-[#0f2c4a] mb-2">
                      Major Business Districts:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cebuStats.businessDistricts.map((district) => (
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
                  Roles Available in Cebu
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Cebu's talent pool offers skilled professionals across key
                  business functions with excellent quality-to-cost ratio
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

        {/* Cebu Advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c4a] mb-4">
                  Cebu Advantages
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Why Cebu is an excellent choice for building offshore teams
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cebuAdvantages.map((advantage, index) => (
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
                Ready to Build Your Cebu Team?
              </h2>
              <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                Join growing companies who have discovered the value of Cebu's
                talented professionals. Start building your competitive
                advantage today.
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
