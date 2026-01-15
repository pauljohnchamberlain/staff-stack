import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  CheckCircle,
  ClipboardCheck,
  Clock,
  MessageSquare,
  Rocket,
  Shield,
  Sparkles,
  UserSearch,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Breadcrumbs } from "@/components/seo";

export const metadata: Metadata = {
  title: "How It Works | Staff Stack",
  description:
    "Learn how Staff Stack's StackCertified process works. From role request to shipping work in 7 days — operators tested on real agency tasks, not generic assessments.",
};

const processSteps = [
  {
    id: 1,
    title: "Tell Us Your Role",
    description:
      "Share the role you need — Klaviyo builder, ad ops assistant, Shopify developer, reporting analyst, or any agency operator position. We'll match your requirements to our certification tracks.",
    icon: UserSearch,
    details: [
      "15-minute intake call or async brief",
      "Role requirements mapped to certification track",
      "Timeline and expectations aligned",
    ],
  },
  {
    id: 2,
    title: "We Match & Certify",
    description:
      "We source candidates from our talent pool and put them through StackCertified testing — role-specific practical tests that mirror actual agency work.",
    icon: Award,
    details: [
      "Timed practical tests (Klaviyo flow build, ad account audit, etc.)",
      "AI workflow proof: prompt → output → edits → deliverable",
      "Communication simulation: Loom + written updates",
    ],
  },
  {
    id: 3,
    title: "You Review & Select",
    description:
      "Interview pre-certified operators with their full scorecard. See exactly what they can do before you commit — test results, sample outputs, and tool fluency ratings.",
    icon: ClipboardCheck,
    details: [
      "Scorecard with test scores and sample work",
      "Video interview with candidate",
      "You make the final call",
    ],
  },
  {
    id: 4,
    title: "Operator Ships in 7 Days",
    description:
      "Your StackCertified operator starts with onboarding complete. Weekly KPI check-ins, QA systems, and our replacement guarantee keep things running smoothly.",
    icon: Rocket,
    details: [
      "Onboarding handled by our team",
      "Weekly performance check-ins",
      "14-day replacement guarantee",
    ],
  },
];

const certificationComponents = [
  {
    title: "Practical Tests",
    description:
      "Role-specific, timed assessments that mirror real agency work. Build a Klaviyo flow, audit a Meta account, fix a Shopify bug.",
    icon: ClipboardCheck,
  },
  {
    title: "AI Workflow Proof",
    description:
      "Every operator demonstrates they can work with AI tools: prompt → output → edits → final deliverable. Modern operators for modern workflows.",
    icon: Sparkles,
  },
  {
    title: "Communication Simulation",
    description:
      "2-minute Loom walkthrough, 5-bullet written update, escalation message. Prove they can communicate clearly before placement.",
    icon: MessageSquare,
  },
  {
    title: "Shareable Scorecard",
    description:
      "Full transparency: test scores, sample outputs, tool fluency checklist. See exactly what you're getting before you hire.",
    icon: Award,
  },
];

const stackOpsFeatures = [
  {
    title: "QA Checklist Library",
    description:
      "Role-specific quality checklists your operator uses to catch errors before delivery.",
    icon: CheckCircle,
  },
  {
    title: "Weekly KPI Check-ins",
    description:
      "We review performance weekly and address any issues before they become problems.",
    icon: Clock,
  },
  {
    title: "Performance Coaching",
    description:
      "Ongoing feedback and skill development to keep your operator improving.",
    icon: Zap,
  },
  {
    title: "Backup Bench",
    description:
      "If your operator is unavailable, we have certified backups ready to step in.",
    icon: Shield,
  },
];

export default function HowItWorksPage() {
  return (
    <main className="pt-24">
      {/* Breadcrumbs */}
      <div className="container pt-4">
        <Breadcrumbs items={[{ label: "How It Works", href: "/how-it-works" }]} />
      </div>

      {/* Hero */}
        <section className="py-20 bg-linear-to-br from-brand-dark via-brand to-brand-light text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full mb-6">
                <Award className="h-4 w-4 text-brand-accent" />
                <span className="text-sm font-medium font-inter">
                  StackCertified Process
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
                From Role Request to{" "}
                <span className="text-brand-accent">Shipping Work</span> in 7 Days
              </h1>
              <p className="text-xl opacity-90 font-inter mb-8">
                Not generic hiring. Role-specific certification that proves
                operators can do the actual work before they start.
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
                  <Link href="/stackcertified">See Certification Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                The 4-Step <span className="text-brand">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
                Simple, fast, and focused on getting you operators who actually
                ship work — not just fill a seat.
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="bg-white rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-lexend font-bold text-brand bg-brand/10 w-12 h-12 rounded-full flex items-center justify-center">
                          {step.id}
                        </span>
                        <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-brand" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-lexend font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-inter mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-sm font-inter"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
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

        {/* StackCertified Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <Award className="h-12 w-12 text-brand mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                What <span className="text-brand">StackCertified</span> Means
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
                Every operator earns their certification through practical
                testing — not resumes, not interviews alone, not generic
                assessments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certificationComponents.map((item) => (
                <Card key={item.title} className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-brand" />
                      </div>
                      <CardTitle className="text-lg font-lexend">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base font-inter">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                className="bg-brand hover:bg-brand-light text-white font-lexend font-medium"
                asChild
              >
                <Link href="/stackcertified">
                  Learn More About Certification
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* StackOps Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                <span className="text-brand">StackOps</span>: Ongoing Delivery
                Support
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
                Certification is just the start. StackOps is the delivery
                infrastructure that keeps your operators performing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stackOpsFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm border text-center"
                >
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="font-lexend font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" className="font-lexend" asChild>
                <Link href="/stackops">
                  Learn About StackOps
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to get an operator?",
                  a: "Most operators are ready to start within 7 days of your initial request. For specialized roles, it may take slightly longer to ensure we find the right certified match.",
                },
                {
                  q: "What if the operator doesn't work out?",
                  a: "Our StackGuarantee includes a 14-day replacement guarantee. If your operator isn't the right fit, we'll find a replacement at no additional cost.",
                },
                {
                  q: "What roles can you fill?",
                  a: "We specialize in agency operator roles: Klaviyo builders, email designers, ad ops assistants, reporting analysts, Shopify developers, QA testers, and more. If it's an agency execution role, we likely have a certification track for it.",
                },
                {
                  q: "Do I manage the operator directly?",
                  a: "Yes — your operator works for you and follows your direction on day-to-day tasks. We handle the employment, HR, weekly performance check-ins, and provide ongoing support through StackOps.",
                },
                {
                  q: "What's included in the monthly fee?",
                  a: "Everything: operator salary, StackCertified onboarding, weekly KPI check-ins, QA systems access, escalation support, and our replacement guarantee. No hidden fees.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                >
                  <h3 className="font-lexend font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground font-inter">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="text-brand font-lexend font-medium inline-flex items-center hover:underline"
              >
                View all FAQs
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
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
                StackCertified operators for your agency, ready in 7 days. More
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
