import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code, Mail, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Agencies | Staff Stack",
  description:
    "AI-native operators for retention, paid media, and Shopify agencies. StackCertified, ready in 7 days, with delivery infrastructure included.",
};

const verticals = [
  {
    id: "retention",
    name: "Retention & Klaviyo",
    icon: Mail,
    color: "bg-purple-100 text-purple-600",
    borderColor: "border-purple-200",
    description:
      "Production capacity for email, SMS, and CRO agencies. Ship more campaigns without breaking deadlines.",
    promise: "Ship X campaigns/week with <Y% QA error rate",
    roles: [
      "Klaviyo Email Builder",
      "Email Designer (Figma → Email)",
      "QA Specialist (Links, Rendering, UTMs)",
      "Copywriter",
      "Flow Strategist",
      "Campaign Manager",
      "Segmentation Analyst",
      "SMS Specialist",
    ],
    painPoints: [
      "Campaign backlogs during peak seasons",
      "QA errors slipping through",
      "Strategists stuck building emails",
      "Can't say yes to new clients",
    ],
    link: "/agencies/retention",
  },
  {
    id: "paid-media",
    name: "Paid Media Ops",
    icon: TrendingUp,
    color: "bg-blue-100 text-blue-600",
    borderColor: "border-blue-200",
    description:
      "Ad ops and creative throughput for media buying agencies. Free up strategists to focus on strategy.",
    promise: "Reduce founder/strategist time by X hrs/week",
    roles: [
      "Ad Ops Assistant",
      "Reporting Analyst (Looker/Sheets)",
      "Creative Editor (Variants + Hooks)",
      "UTM & Pixel Specialist",
      "Campaign Builder",
      "Landing Page QA",
      "Media Buyer Assistant",
      "GA4 Analyst",
    ],
    painPoints: [
      "Strategists drowning in ad ops tasks",
      "Reporting takes days, not hours",
      "Creative variants backlogged",
      "Attribution setup errors",
    ],
    link: "/agencies/paid-media",
  },
  {
    id: "shopify",
    name: "Shopify Dev",
    icon: Code,
    color: "bg-green-100 text-green-600",
    borderColor: "border-green-200",
    description:
      "Implementation and support capacity for Shopify agencies. Handle overflow without missing deadlines.",
    promise: "Project overflow handled, deadlines hit",
    roles: [
      "Shopify Developer",
      "Theme Customization Specialist",
      "QA Tester",
      "Support Developer",
      "Project Manager",
      "App Integration Specialist",
      "Store Migration Specialist",
      "Liquid Developer",
    ],
    painPoints: [
      "Project overflow during launches",
      "Support tickets piling up",
      "Senior devs on junior tasks",
      "Can't scale without hiring",
    ],
    link: "/agencies/shopify",
  },
];

export default function AgenciesPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-brand-dark via-brand to-brand-light text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <span className="text-sm font-medium font-inter">
                Built for Agency Verticals
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              AI-Native Operators for Agencies That Ship
            </h1>
            <p className="text-xl opacity-90 font-inter mb-8">
              We specialize in three agency types. Each vertical has dedicated
              certification tracks, role-specific tests, and pre-built SOPs. No
              generic hires — operators built for your work.
            </p>
            <Button
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white font-lexend font-medium"
              asChild
            >
              <Link href="/contact-us">Get Your First Operator</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Choose Your <span className="text-brand">Vertical</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              Each vertical has specialized operators, certification tracks, and
              delivery systems designed for your specific agency type.
            </p>
          </div>

          <div className="space-y-12">
            {verticals.map((vertical) => (
              <div
                key={vertical.id}
                className={`bg-white rounded-xl shadow-sm border ${vertical.borderColor} overflow-hidden`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left: Overview */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r">
                    <div
                      className={`p-3 rounded-xl mb-4 ${vertical.color} w-fit`}
                    >
                      <vertical.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-lexend font-bold mb-3">
                      {vertical.name}
                    </h3>
                    <p className="text-muted-foreground font-inter mb-4">
                      {vertical.description}
                    </p>
                    <div className="bg-brand/5 border border-brand/20 rounded-lg p-3 mb-6">
                      <p className="text-sm font-inter text-brand font-medium">
                        Promise: {vertical.promise}
                      </p>
                    </div>
                    <Button
                      className="w-full bg-brand hover:bg-brand-light text-white font-lexend font-medium"
                      asChild
                    >
                      <Link href={vertical.link}>
                        Explore {vertical.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Middle: Roles */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r bg-muted/20">
                    <h4 className="font-lexend font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
                      StackCertified Roles
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {vertical.roles.map((role) => (
                        <div
                          key={role}
                          className="bg-white rounded-lg p-2 text-sm font-inter border"
                        >
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Pain Points */}
                  <div className="p-8">
                    <h4 className="font-lexend font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
                      Problems We Solve
                    </h4>
                    <ul className="space-y-3">
                      {vertical.painPoints.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm font-inter"
                        >
                          <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Agency-Specific */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6">
              Why <span className="text-brand">Agency-Specific</span> Matters
            </h2>
            <p className="text-muted-foreground font-inter mb-8">
              Generic offshore hires don't understand agency workflows. They
              don't know Klaviyo from Mailchimp, can't audit a Meta pixel, and
              have never touched Liquid code. Our operators do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="font-lexend font-semibold mb-2">
                  Role-Specific Tests
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  Not generic assessments. Real agency tasks: build flows, audit
                  accounts, fix bugs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="font-lexend font-semibold mb-2">
                  Vertical SOPs
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  Pre-built standard operating procedures for each agency type.
                  Faster ramp-up.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="font-lexend font-semibold mb-2">
                  Backup Bench
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  Pre-certified backups in your vertical. Replacements in days,
                  not weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-brand-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Ready to Add Capacity?
            </h2>
            <p className="text-xl opacity-90 font-inter mb-8">
              StackCertified operators for your vertical, ready in 7 days. More
              client capacity without more chaos.
            </p>
            <Button
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white font-lexend font-medium"
              asChild
            >
              <Link href="/contact-us">Get Your First Operator</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
