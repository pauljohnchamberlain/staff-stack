import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  Mail,
  MessageSquare,
  Palette,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo";

export const metadata: Metadata = {
  title: "Retention & Klaviyo Agency Staff | Staff Stack",
  description:
    "StackCertified email builders, designers, QA specialists, and copywriters for retention agencies. Ship more campaigns without breaking deadlines.",
};

const roles = [
  {
    title: "Klaviyo Email Builder",
    description:
      "Build flows, campaigns, and segments in Klaviyo. Template development, A/B tests, automation setup.",
    skills: ["Klaviyo", "HTML/CSS", "Liquid", "A/B Testing"],
    icon: Mail,
  },
  {
    title: "Email Designer",
    description:
      "Transform Figma designs into pixel-perfect emails. Responsive layouts, dark mode, accessibility.",
    skills: ["Figma", "Email HTML", "Responsive Design", "Dark Mode"],
    icon: Palette,
  },
  {
    title: "QA Specialist",
    description:
      "Links, rendering, UTMs, copy review, inbox testing. Catch errors before they reach inboxes.",
    skills: ["Litmus/Email on Acid", "UTM Auditing", "Rendering QA", "Copy QA"],
    icon: CheckCircle,
  },
  {
    title: "Copywriter",
    description:
      "Subject lines, preview text, body copy, CTAs. Conversion-focused writing for email and SMS.",
    skills: ["Email Copy", "SMS Copy", "A/B Headlines", "Conversion Copy"],
    icon: MessageSquare,
  },
  {
    title: "Flow Strategist",
    description:
      "Design and optimize automated flows: welcome, abandon, post-purchase, win-back, and more.",
    skills: ["Flow Architecture", "Segmentation", "Timing Optimization", "Revenue Attribution"],
    icon: Target,
  },
  {
    title: "SMS Specialist",
    description:
      "SMS campaign management, compliance, segmentation, and performance optimization.",
    skills: ["SMS Platforms", "Compliance", "Segmentation", "Performance"],
    icon: Zap,
  },
];

const painPoints = [
  {
    problem: "Campaign backlogs during peak seasons",
    solution:
      "Add certified email builders who can execute from briefs without hand-holding.",
  },
  {
    problem: "QA errors slipping through to clients",
    solution:
      "Dedicated QA specialists with checklist-driven processes catch issues before send.",
  },
  {
    problem: "Strategists stuck building emails",
    solution:
      "Free up strategists to focus on strategy while operators handle execution.",
  },
  {
    problem: "Can't say yes to new clients",
    solution:
      "Scale capacity without full-time overhead. Add operators as you grow.",
  },
];

const certificationTests = [
  "Build a 3-email abandoned cart flow in Klaviyo (45 min, timed)",
  "Convert a Figma design to responsive email HTML",
  "QA audit an email campaign: find 10+ issues",
  "Write subject line variants and preview text for A/B test",
  "Design a post-purchase flow with 5+ touchpoints",
];

export default function RetentionAgencyPage() {
  return (
    <main className="pt-24">
      {/* Breadcrumbs */}
      <div className="container pt-4">
        <Breadcrumbs
          items={[
            { label: "Agencies", href: "/agencies" },
            { label: "Retention", href: "/agencies/retention" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-purple-900 via-purple-700 to-purple-500 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium font-inter">
                For Retention & Klaviyo Agencies
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Ship More Campaigns Without Breaking Deadlines
            </h1>
            <p className="text-xl opacity-90 font-inter mb-4">
              StackCertified email builders, designers, QA specialists, and
              copywriters for retention agencies. Production capacity that
              actually ships.
            </p>
            <p className="text-lg font-lexend font-medium text-purple-200 mb-8">
              Promise: Ship X campaigns/week with &lt;Y% QA error rate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-white/90 font-lexend font-medium"
                asChild
              >
                <Link href="/contact-us">Get Retention Operators</Link>
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
                src="/images/operator-email-marketing.png"
                alt="StackCertified email marketing operator working on Klaviyo campaigns"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-lexend font-bold mb-4">
                Email Operators Who <span className="text-purple-600">Actually Ship</span>
              </h2>
              <p className="text-muted-foreground font-inter mb-4">
                Our retention operators pass practical Klaviyo tests before placement.
                They build real flows, convert real designs, and execute real QA
                checklists — not just answer interview questions.
              </p>
              <p className="text-muted-foreground font-inter">
                Every operator demonstrates AI-native workflows: using tools like
                ChatGPT for copy ideation, Claude for optimization suggestions, and
                automation tools to speed up repetitive tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              StackCertified <span className="text-purple-600">Retention</span>{" "}
              Roles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              Every role has dedicated certification tests designed for retention
              agency work. Not generic — specific.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <role.icon className="h-6 w-6 text-purple-600" />
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
                      className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded font-inter"
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
              Problems We <span className="text-purple-600">Solve</span>
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
                      <span className="text-purple-600 font-medium">Solution:</span>{" "}
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
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                Retention Certification Tests
              </h2>
              <p className="text-muted-foreground font-inter">
                These aren't generic assessments. Every operator passes
                retention-specific practical tests before placement.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
              <h3 className="font-lexend font-semibold mb-4">
                Example Certification Tasks:
              </h3>
              <ul className="space-y-3">
                {certificationTests.map((test, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm">{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-purple-200 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Ready to Scale Your Retention Output?
            </h2>
            <p className="text-xl opacity-90 font-inter mb-8">
              StackCertified retention operators, ready in 7 days. Ship more
              campaigns without more chaos.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-white/90 font-lexend font-medium"
              asChild
            >
              <Link href="/contact-us">Get Retention Operators</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
