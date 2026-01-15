import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  CheckCircle,
  Code,
  FileSpreadsheet,
  MousePointerClick,
  Scissors,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo";

export const metadata: Metadata = {
  title: "Paid Media Ops Agency Staff | Staff Stack",
  description:
    "StackCertified ad ops assistants, reporting analysts, and creative editors for paid media agencies. Free up strategists to focus on strategy.",
};

const roles = [
  {
    title: "Ad Ops Assistant",
    description:
      "Campaign setup, audience building, budget management, and day-to-day ad account maintenance.",
    skills: ["Meta Ads", "Google Ads", "TikTok Ads", "Campaign Setup"],
    icon: MousePointerClick,
  },
  {
    title: "Reporting Analyst",
    description:
      "Build dashboards, automate reports, and deliver insights. Looker, Sheets, Data Studio expertise.",
    skills: ["Looker Studio", "Google Sheets", "Data Analysis", "Automation"],
    icon: BarChart3,
  },
  {
    title: "Creative Editor",
    description:
      "Produce ad variants, hook variations, and creative iterations at scale. Fast turnaround.",
    skills: ["Video Editing", "Static Ads", "Variant Creation", "Hook Testing"],
    icon: Scissors,
  },
  {
    title: "UTM & Pixel Specialist",
    description:
      "Attribution setup, pixel configuration, conversion tracking, and debugging.",
    skills: ["UTM Strategy", "Meta Pixel", "GA4", "Conversion API"],
    icon: Code,
  },
  {
    title: "Campaign Builder",
    description:
      "Execute campaign builds from briefs: ad sets, targeting, creative upload, and launch.",
    skills: ["Campaign Structure", "Audience Targeting", "Ad Formats", "Launch QA"],
    icon: Target,
  },
  {
    title: "GA4 Analyst",
    description:
      "Google Analytics 4 setup, reporting, and analysis. Event tracking and custom reports.",
    skills: ["GA4", "Event Tracking", "Custom Reports", "Attribution"],
    icon: FileSpreadsheet,
  },
];

const painPoints = [
  {
    problem: "Strategists drowning in ad ops tasks",
    solution:
      "Offload campaign builds, optimizations, and maintenance to certified ops assistants.",
  },
  {
    problem: "Reporting takes days, not hours",
    solution:
      "Dedicated reporting analysts who build, automate, and maintain client dashboards.",
  },
  {
    problem: "Creative variants backlogged",
    solution:
      "Creative editors who produce variants and hooks at scale with fast turnaround.",
  },
  {
    problem: "Attribution setup errors",
    solution:
      "UTM & Pixel specialists who get tracking right the first time.",
  },
];

const certificationTests = [
  "Audit a Meta ad account: identify 10+ optimization opportunities",
  "Build a client dashboard in Looker Studio from raw data",
  "Create 10 ad variants from a single hero creative (60 min)",
  "Debug a broken conversion tracking setup",
  "Set up a campaign structure for a new client vertical",
];

export default function PaidMediaAgencyPage() {
  return (
    <main className="pt-24">
      {/* Breadcrumbs */}
      <div className="container pt-4">
        <Breadcrumbs
          items={[
            { label: "Agencies", href: "/agencies" },
            { label: "Paid Media", href: "/agencies/paid-media" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium font-inter">
                For Paid Media Agencies
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Free Up Strategists to Focus on Strategy
            </h1>
            <p className="text-xl opacity-90 font-inter mb-4">
              StackCertified ad ops assistants, reporting analysts, and creative
              editors for paid media agencies. Execution capacity that delivers.
            </p>
            <p className="text-lg font-lexend font-medium text-blue-200 mb-8">
              Promise: Reduce founder/strategist time by X hrs/week
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-white/90 font-lexend font-medium"
                asChild
              >
                <Link href="/contact-us">Get Paid Media Operators</Link>
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
            <div>
              <h2 className="text-2xl md:text-3xl font-lexend font-bold mb-4">
                Ad Ops That <span className="text-blue-600">Frees Up Strategists</span>
              </h2>
              <p className="text-muted-foreground font-inter mb-4">
                Your strategists should be strategizing — not building audiences,
                pulling reports, or fixing UTMs. Our ad ops assistants handle the
                execution work so your team can focus on what matters.
              </p>
              <p className="text-muted-foreground font-inter">
                Every operator passes practical tests in real ad platforms: campaign
                setup, audience building, and report automation. They demonstrate
                AI-native workflows for creative iteration and data analysis.
              </p>
            </div>
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/operator-developer.png"
                alt="StackCertified ad ops operator working on analytics dashboards"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              StackCertified <span className="text-blue-600">Paid Media</span>{" "}
              Roles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              Every role has dedicated certification tests designed for paid media
              agency work. Not generic — specific.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <role.icon className="h-6 w-6 text-blue-600" />
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
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-inter"
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
              Problems We <span className="text-blue-600">Solve</span>
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
                      <span className="text-blue-600 font-medium">Solution:</span>{" "}
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
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                Paid Media Certification Tests
              </h2>
              <p className="text-muted-foreground font-inter">
                These aren't generic assessments. Every operator passes
                paid media-specific practical tests before placement.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <h3 className="font-lexend font-semibold mb-4">
                Example Certification Tasks:
              </h3>
              <ul className="space-y-3">
                {certificationTests.map((test, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm">{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-blue-200 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Ready to Scale Your Media Ops?
            </h2>
            <p className="text-xl opacity-90 font-inter mb-8">
              StackCertified paid media operators, ready in 7 days. More execution
              capacity without more overhead.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-white/90 font-lexend font-medium"
              asChild
            >
              <Link href="/contact-us">Get Paid Media Operators</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
