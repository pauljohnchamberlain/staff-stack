import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle,
  FileText,
  RefreshCw,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "StackGuarantee: Risk-Free Hiring | Staff Stack",
  description:
    "14-day replacement guarantee with clear SLAs. If your Staff Stack operator isn't working out, we fix it fast. Risk removed from offshore hiring.",
};

const guaranteeFeatures = [
  {
    id: "replacement",
    title: "14-Day Replacement Guarantee",
    description:
      "If your operator isn't meeting expectations within the first 14 days, we replace them at no additional cost. No arguments, no delays.",
    icon: RefreshCw,
  },
  {
    id: "sla",
    title: "Clear SLAs",
    description:
      "Every engagement has defined service level agreements: response times, quality standards, escalation paths. You know exactly what to expect.",
    icon: FileText,
  },
  {
    id: "performance",
    title: "Performance Plan Template",
    description:
      "If issues arise, we provide a structured performance plan template. Clear expectations, timelines, and checkpoints for improvement.",
    icon: AlertCircle,
  },
  {
    id: "bench",
    title: "Backup Bench Ready",
    description:
      "Pre-certified backup operators in each role family mean replacements happen in days, not weeks. Your capacity doesn't skip a beat.",
    icon: Users,
  },
];

const processSteps = [
  {
    step: 1,
    title: "You Flag an Issue",
    description:
      "Contact your Client Success Manager with specific concerns about performance, quality, or fit.",
  },
  {
    step: 2,
    title: "We Assess & Act",
    description:
      "Within 24 hours, we review the situation and determine if coaching or replacement is the right path.",
  },
  {
    step: 3,
    title: "Rapid Resolution",
    description:
      "If replacement is needed, we match you with a pre-certified backup within 7 days. If coaching, we implement a performance plan.",
  },
  {
    step: 4,
    title: "You Approve",
    description:
      "New operator or improved performance — you confirm the resolution meets your needs before we consider the issue closed.",
  },
];

const slaMetrics = [
  {
    metric: "Initial Response",
    value: "< 4 hours",
    description: "For urgent escalations during business hours",
  },
  {
    metric: "Replacement Match",
    value: "< 7 days",
    description: "Pre-certified backup operator presented",
  },
  {
    metric: "Performance Plan",
    value: "< 48 hours",
    description: "Structured improvement plan delivered",
  },
  {
    metric: "Ongoing Check-ins",
    value: "Weekly",
    description: "Regular KPI reviews and status updates",
  },
];

export default function StackGuaranteePage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-brand-dark via-brand to-brand-light text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4 text-brand-accent" />
              <span className="text-sm font-medium font-inter">
                Risk Removed from Offshore Hiring
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              StackGuarantee
            </h1>
            <p className="text-xl opacity-90 font-inter mb-8">
              14-day replacement guarantee with clear SLAs. If it's not working,
              we fix it — fast. No arguments, no delays, no excuses.
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
                <Link href="/stackops">See StackOps</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              What's <span className="text-brand">Guaranteed</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              StackGuarantee removes the risk from offshore hiring with concrete
              commitments and clear processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guaranteeFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-6 shadow-sm border"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Resolution Process */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              How <span className="text-brand">Resolution</span> Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              A clear, fast process from issue flagged to problem solved.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {processSteps.map((item, index) => (
                <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-lexend font-bold text-sm">
                      {item.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-brand/20 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-lg font-lexend font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-inter text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLA Metrics */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Our <span className="text-brand">SLA</span> Commitments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              Concrete timelines you can hold us to.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaMetrics.map((item) => (
              <div
                key={item.metric}
                className="bg-white rounded-xl p-6 shadow-sm border text-center"
              >
                <div className="text-3xl font-lexend font-bold text-brand mb-2">
                  {item.value}
                </div>
                <div className="text-lg font-lexend font-medium mb-2">
                  {item.metric}
                </div>
                <p className="text-sm text-muted-foreground font-inter">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT Covered - Transparency */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                Full Transparency
              </h2>
              <p className="text-muted-foreground font-inter">
                StackGuarantee has clear boundaries. Here's what triggers (and
                doesn't trigger) a replacement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand/5 rounded-xl p-6 border border-brand/20">
                <h3 className="text-lg font-lexend font-semibold mb-4 text-brand flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Covered
                </h3>
                <ul className="space-y-3">
                  {[
                    "Skill mismatch vs certification scorecard",
                    "Communication quality issues",
                    "Consistent quality errors",
                    "Responsiveness problems",
                    "Culture or work style mismatch",
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

              <div className="bg-muted/50 rounded-xl p-6 border">
                <h3 className="text-lg font-lexend font-semibold mb-4 text-muted-foreground flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Not Covered
                </h3>
                <ul className="space-y-3">
                  {[
                    "Scope changes after placement",
                    "Skills outside original role spec",
                    "Client-side process issues",
                    "Requests beyond 14-day window*",
                    "Performance during extended leave",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm font-inter text-muted-foreground"
                    >
                      <span className="mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-4 font-inter">
                  *Issues flagged after 14 days are handled through StackOps
                  performance coaching and may still qualify for replacement on a
                  case-by-case basis.
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
              Hire With Confidence
            </h2>
            <p className="text-xl opacity-90 font-inter mb-8">
              StackGuarantee means if it's not working, we fix it. Get your first
              operator with zero risk.
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
