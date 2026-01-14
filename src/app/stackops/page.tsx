import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  CheckSquare,
  HeadphonesIcon,
  LineChart,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "StackOps: Delivery Operations | Staff Stack",
  description:
    "Weekly KPI reviews, QA checklists, SOP libraries, and performance coaching built into every Staff Stack engagement. We're your delivery infrastructure.",
};

const opsFeatures = [
  {
    id: "kpis",
    title: "Weekly KPI Reviews",
    description:
      "Every operator has measurable targets. We track delivery volume, QA error rates, turnaround times, and communication responsiveness. You get visibility, not surprises.",
    icon: LineChart,
    metrics: [
      "Campaigns delivered per week",
      "QA error rate (<X% target)",
      "Average turnaround time",
      "Response time on briefs",
    ],
  },
  {
    id: "qa",
    title: "QA Checklist Library",
    description:
      "Pre-built QA checklists for every deliverable type: email campaigns, ad creatives, Shopify updates. Consistent quality across every task.",
    icon: CheckSquare,
    metrics: [
      "Email: Links, rendering, UTMs, copy review",
      "Ads: Specs, copy limits, CTA placement",
      "Shopify: Cross-browser, mobile, checkout flow",
      "Reporting: Data accuracy, formatting, insights",
    ],
  },
  {
    id: "sops",
    title: "SOP Templates",
    description:
      "Your operators don't start from scratch. We provide role-specific SOP templates that you can customize. Faster ramp-up, consistent processes.",
    icon: BookOpen,
    metrics: [
      "Campaign briefing workflows",
      "Approval and revision processes",
      "Client communication templates",
      "Escalation procedures",
    ],
  },
  {
    id: "coaching",
    title: "Performance Coaching",
    description:
      "Our team coaches your operators on performance gaps before they become problems. We invest in their growth so you get better output over time.",
    icon: Target,
    metrics: [
      "Monthly skill assessments",
      "Targeted training recommendations",
      "Tool proficiency upgrades",
      "Communication coaching",
    ],
  },
];

const supportTiers = [
  {
    title: "Client Success Manager",
    description:
      "Your dedicated point of contact for all operational questions and escalations.",
    icon: HeadphonesIcon,
  },
  {
    title: "Performance Monitoring",
    description:
      "We track operator KPIs and flag issues before they impact your deliverables.",
    icon: BarChart3,
  },
  {
    title: "Backup Bench Ready",
    description:
      "Pre-certified backup operators in each role family for rapid replacement.",
    icon: Users,
  },
];

export default function StackOpsPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-brand-dark via-brand to-brand-light text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4 text-brand-accent" />
              <span className="text-sm font-medium font-inter">
                The System Behind Quality Delivery
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              StackOps: Delivery Operations
            </h1>
            <p className="text-xl opacity-90 font-inter mb-8">
              We don't just place operators and walk away. StackOps is the
              delivery infrastructure that ensures consistent quality: KPI
              tracking, QA systems, SOPs, and performance coaching built into
              every engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white font-lexend font-medium"
                asChild
              >
                <Link href="/contact-us">Get Your First Operator</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 font-lexend font-medium"
                asChild
              >
                <Link href="/stackcertified">See StackCertified</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              What's <span className="text-brand">Included</span> in Every
              Engagement
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              StackOps isn't an add-on. It's the foundation of how we ensure
              operators deliver quality work from day one.
            </p>
          </div>

          <div className="space-y-8">
            {opsFeatures.map((feature) => (
              <div
                key={feature.id}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start bg-white rounded-xl p-8 shadow-sm border"
              >
                <div className="lg:col-span-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-xl font-lexend font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-muted/30 rounded-lg p-3 text-sm font-inter"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Infrastructure */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Your <span className="text-brand">Support</span> Infrastructure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              Beyond systems, you get a team invested in your operators' success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier) => (
              <div
                key={tier.title}
                className="bg-white rounded-xl p-6 shadow-sm border text-center"
              >
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tier.icon className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-lexend font-semibold mb-2">
                  {tier.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                Job Board vs{" "}
                <span className="text-brand">Delivery Infrastructure</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted/30 rounded-xl p-6 border border-muted">
                <h3 className="text-lg font-lexend font-semibold mb-4 text-muted-foreground">
                  Typical Job Board
                </h3>
                <ul className="space-y-3">
                  {[
                    "You hire, you manage, you're on your own",
                    "No standardized quality processes",
                    "No visibility into performance",
                    "Replacement = start from scratch",
                    "Generic candidates, generic results",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm font-inter text-muted-foreground"
                    >
                      <span className="text-red-500 mt-0.5">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand/5 rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-lexend font-semibold mb-4 text-brand">
                  Staff Stack with StackOps
                </h3>
                <ul className="space-y-3">
                  {[
                    "We hire AND provide delivery infrastructure",
                    "QA checklists and SOPs from day one",
                    "Weekly KPI visibility and reporting",
                    "Backup bench for rapid replacement",
                    "Role-certified operators for your vertical",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm font-inter"
                    >
                      <span className="text-brand mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
              Ready for Delivery Infrastructure?
            </h2>
            <p className="text-xl opacity-90 font-inter mb-8">
              Get StackOps-backed operators ready in 7 days. Quality delivery
              without the overhead.
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
