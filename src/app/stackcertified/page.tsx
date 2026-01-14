import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Brain,
  CheckCircle,
  ClipboardCheck,
  FileText,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "StackCertified: AI-Operator Certification | Staff Stack",
  description:
    "Every Staff Stack operator passes role-specific tests, AI workflow proof, and communication screening before placement. See what makes StackCertified different.",
};

const certificationSteps = [
  {
    id: 1,
    title: "Role-Specific Practical Test",
    description:
      "Timed, hands-on tests for each role: Klaviyo email builds, ad account QA audits, Shopify bugfixes. Not generic assessments — real agency work.",
    icon: ClipboardCheck,
    examples: [
      "Build a 3-email abandoned cart flow in Klaviyo (45 min)",
      "QA an ad account for UTM/pixel issues (30 min)",
      "Fix a Shopify theme bug from a client ticket (60 min)",
    ],
  },
  {
    id: 2,
    title: "AI Workflow Proof",
    description:
      "We require proof of AI-assisted work: prompt → output → edits → final deliverable. We hire operators, not button-pushers.",
    icon: Brain,
    examples: [
      "Show us a prompt-to-email workflow",
      "Demonstrate AI-assisted copy editing",
      "Walk through an AI-augmented design process",
    ],
  },
  {
    id: 3,
    title: "Communication Simulation",
    description:
      "Async-first communication matters. We test for Loom recording, written updates, and escalation messaging.",
    icon: MessageSquare,
    examples: [
      "Record a 2-minute Loom walkthrough",
      "Write a 5-bullet status update",
      "Draft an escalation message for a blocked task",
    ],
  },
  {
    id: 4,
    title: "Shareable Scorecard",
    description:
      "You get a candidate scorecard: test scores, sample outputs, tool fluency checklist. Real data for real hiring decisions.",
    icon: FileText,
    examples: [
      "Test scores by category",
      "Sample deliverable from practical test",
      "Tool proficiency ratings (Klaviyo, Meta, Shopify)",
    ],
  },
];

const roleCategories = [
  {
    title: "Retention & Klaviyo",
    roles: [
      "Klaviyo Email Builder",
      "Email Designer (Figma → Email)",
      "QA Specialist",
      "Copywriter",
      "Flow Strategist",
      "SMS Specialist",
    ],
  },
  {
    title: "Paid Media Ops",
    roles: [
      "Ad Ops Assistant",
      "Reporting Analyst",
      "Creative Editor",
      "UTM & Pixel Specialist",
      "Campaign Builder",
      "GA4 Analyst",
    ],
  },
  {
    title: "Shopify Dev",
    roles: [
      "Shopify Developer",
      "Theme Specialist",
      "QA Tester",
      "Support Developer",
      "Project Manager",
      "Liquid Developer",
    ],
  },
];

export default function StackCertifiedPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-brand-dark via-brand to-brand-light text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4 text-brand-accent" />
              <span className="text-sm font-medium font-inter">
                The Certification That Sets Us Apart
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              StackCertified: AI-Operator
            </h1>
            <p className="text-xl opacity-90 font-inter mb-8">
              Every hire passes role-specific tests, AI workflow proof, and
              communication simulations before they ever meet you. This is why
              agencies trust Staff Stack operators to ship.
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
                <Link href="/agencies">View Agency Verticals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Operators in Action */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative h-[280px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/operator-email-marketing.png"
                alt="Certified email marketing operator"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-lexend font-medium text-sm">
                  Retention Operator
                </span>
              </div>
            </div>
            <div className="relative h-[280px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/operator-developer.png"
                alt="Certified ad ops operator"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-lexend font-medium text-sm">
                  Paid Media Operator
                </span>
              </div>
            </div>
            <div className="relative h-[280px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/operator-shopify.png"
                alt="Certified Shopify developer"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-lexend font-medium text-sm">
                  Shopify Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              The 4-Part <span className="text-brand">Certification</span>{" "}
              Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              We don't just interview. We test for the skills that matter to
              agencies: practical execution, AI fluency, and async communication.
            </p>
          </div>

          <div className="space-y-12">
            {certificationSteps.map((step) => (
              <div
                key={step.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              >
                <div className="bg-white rounded-xl p-8 shadow-sm border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-brand" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-brand text-white text-sm font-lexend font-bold px-2 py-1 rounded">
                          Step {step.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-lexend font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-inter">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-lexend font-medium mb-4 text-sm text-muted-foreground uppercase tracking-wider">
                    Example Tasks
                  </h4>
                  <ul className="space-y-3">
                    {step.examples.map((example, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-inter">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Certification Tracks by{" "}
              <span className="text-brand">Vertical</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              Each role has dedicated test content designed for agency work. No
              generic assessments — just real skills for real delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roleCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl p-6 shadow-sm border"
              >
                <h3 className="text-xl font-lexend font-semibold mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.roles.map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-2 text-sm font-inter"
                    >
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-brand-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Ready to Hire Operators Who Ship?
            </h2>
            <p className="text-xl opacity-90 font-inter mb-8">
              Get StackCertified operators ready in 7 days. More capacity without
              more chaos.
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
