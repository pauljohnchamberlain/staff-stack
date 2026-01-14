import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Bug,
  CheckCircle,
  ClipboardList,
  Code,
  Layers,
  Package,
  Repeat,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Shopify Dev Agency Staff | Staff Stack",
  description:
    "StackCertified Shopify developers, QA testers, and support devs for Shopify agencies. Handle overflow without missing deadlines.",
};

const roles = [
  {
    title: "Shopify Developer",
    description:
      "Full Shopify development: theme customization, app integration, checkout extensions, and more.",
    skills: ["Liquid", "JavaScript", "Shopify APIs", "Theme Development"],
    icon: Code,
  },
  {
    title: "Theme Specialist",
    description:
      "Theme customization, section development, metafields setup, and design implementation.",
    skills: ["Liquid", "CSS", "Theme Architecture", "Metafields"],
    icon: Layers,
  },
  {
    title: "QA Tester",
    description:
      "Cross-browser, mobile, checkout flow, and functionality testing. Bug documentation and regression.",
    skills: ["Cross-browser QA", "Mobile Testing", "Checkout QA", "Bug Tracking"],
    icon: Bug,
  },
  {
    title: "Support Developer",
    description:
      "Handle client support tickets, quick fixes, content updates, and maintenance tasks.",
    skills: ["Ticket Management", "Quick Fixes", "Client Communication", "Documentation"],
    icon: Wrench,
  },
  {
    title: "Project Manager",
    description:
      "Project coordination, client communication, timeline management, and resource allocation.",
    skills: ["Project Planning", "Client Management", "Resource Allocation", "Agile"],
    icon: ClipboardList,
  },
  {
    title: "App Integration Specialist",
    description:
      "App installation, configuration, custom integrations, and third-party connections.",
    skills: ["App Setup", "API Integration", "Webhooks", "Custom Apps"],
    icon: Package,
  },
  {
    title: "Store Migration Specialist",
    description:
      "Platform migrations, data transfer, SEO preservation, and launch coordination.",
    skills: ["Data Migration", "SEO Redirects", "Platform Knowledge", "Launch QA"],
    icon: Repeat,
  },
];

const painPoints = [
  {
    problem: "Project overflow during launches",
    solution:
      "Add certified developers who can execute from specs without hand-holding.",
  },
  {
    problem: "Support tickets piling up",
    solution:
      "Dedicated support developers who handle tickets while your team builds.",
  },
  {
    problem: "Senior devs on junior tasks",
    solution:
      "Free up senior developers for complex work while operators handle routine tasks.",
  },
  {
    problem: "Can't scale without hiring full-time",
    solution:
      "Flexible capacity that scales with your project load. Add operators as needed.",
  },
];

const certificationTests = [
  "Fix a Shopify theme bug from a client ticket (60 min, timed)",
  "Build a custom Liquid section with metafield integration",
  "QA a checkout flow: document all issues found",
  "Migrate product data from WooCommerce to Shopify",
  "Set up a custom app integration with webhooks",
];

export default function ShopifyAgencyPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-green-900 via-green-700 to-green-500 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Code className="h-4 w-4" />
              <span className="text-sm font-medium font-inter">
                For Shopify Dev Agencies
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Handle Overflow Without Missing Deadlines
            </h1>
            <p className="text-xl opacity-90 font-inter mb-4">
              StackCertified Shopify developers, QA testers, and support devs for
              Shopify agencies. Implementation capacity that delivers.
            </p>
            <p className="text-lg font-lexend font-medium text-green-200 mb-8">
              Promise: Project overflow handled, deadlines hit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-white/90 font-lexend font-medium"
                asChild
              >
                <Link href="/contact-us">Get Shopify Operators</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 font-lexend font-medium"
                asChild
              >
                <Link href="/stackcertified">See Certification Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Operator Showcase */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/images/operator-shopify.png"
                alt="StackCertified Shopify developer working on store design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-lexend font-bold mb-4">
                Shopify Devs Who <span className="text-green-600">Hit Deadlines</span>
              </h2>
              <p className="text-muted-foreground font-inter mb-4">
                Project overflow shouldn't mean missed deadlines. Our Shopify
                developers pass practical certification tests — they fix real bugs,
                build real sections, and handle real client requirements.
              </p>
              <p className="text-muted-foreground font-inter">
                Every operator demonstrates modern AI-assisted development workflows:
                using AI for code generation, debugging assistance, and
                documentation — the way modern dev teams actually work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              StackCertified <span className="text-green-600">Shopify</span>{" "}
              Roles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              Every role has dedicated certification tests designed for Shopify
              agency work. Not generic — specific.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <role.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-lexend font-semibold mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter mb-4">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded font-inter"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Problems We <span className="text-green-600">Solve</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {painPoints.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                  <div>
                    <h3 className="font-lexend font-semibold mb-2 text-red-700">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      <span className="text-green-600 font-medium">Solution:</span>{" "}
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                Shopify Certification Tests
              </h2>
              <p className="text-muted-foreground font-inter">
                These aren't generic assessments. Every operator passes
                Shopify-specific practical tests before placement.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="font-lexend font-semibold mb-4">
                Example Certification Tasks:
              </h3>
              <ul className="space-y-3">
                {certificationTests.map((test, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm">{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-green-200 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Ready to Scale Your Dev Capacity?
            </h2>
            <p className="text-xl opacity-90 font-inter mb-8">
              StackCertified Shopify operators, ready in 7 days. Handle project
              overflow without missing deadlines.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-white/90 font-lexend font-medium"
              asChild
            >
              <Link href="/contact-us">Get Shopify Operators</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
