import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/seo";

export const metadata: Metadata = {
  title: "About Us | Staff Stack",
  description:
    "Staff Stack provides AI-native certified operators for agencies. We built StackCertified to solve the agency staffing problem — operators tested on real work, ready in 7 days.",
};

const principles = [
  {
    id: "ship",
    title: "Operators Ship",
    description:
      "We don't place 'candidates'. We certify operators who can execute on day one. Every StackCertified hire has proven they can ship real work.",
    icon: Rocket,
  },
  {
    id: "ai-native",
    title: "AI-Native Workflows",
    description:
      "Modern agencies use AI tools. So do our operators. Every certification includes AI workflow proof — prompt to deliverable.",
    icon: Sparkles,
  },
  {
    id: "quality",
    title: "Quality Over Volume",
    description:
      "We don't flood you with resumes. We send pre-certified operators with scorecards you can actually evaluate.",
    icon: Award,
  },
  {
    id: "accountability",
    title: "Ongoing Accountability",
    description:
      "Certification is step one. StackOps keeps operators performing with weekly KPI check-ins and QA systems.",
    icon: Target,
  },
];

const stackMechanisms = [
  {
    title: "StackCertified",
    description:
      "Role-specific practical tests that prove operators can do agency work — not generic assessments.",
    link: "/stackcertified",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "StackOps",
    description:
      "The delivery infrastructure that keeps operators performing: QA checklists, KPI tracking, performance coaching.",
    link: "/stackops",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "StackGuarantee",
    description:
      "14-day replacement guarantee. If your operator isn't the right fit, we find a replacement at no additional cost.",
    link: "/stackguarantee",
    color: "bg-green-50 text-green-600",
  },
];

const agencyVerticals = [
  {
    name: "Retention & Klaviyo",
    roles: "Email builders, designers, QA specialists, copywriters",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Paid Media Ops",
    roles: "Ad ops assistants, reporting analysts, creative editors",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Shopify Dev",
    roles: "Shopify developers, QA testers, support devs, PMs",
    color: "bg-green-100 text-green-700",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Breadcrumbs */}
      <div className="container pt-4">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      </div>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full mb-6">
                <Users className="h-4 w-4 text-brand-accent" />
                <span className="text-sm font-medium font-inter">
                  Built for Agencies
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
                We Built Staff Stack to Solve the{" "}
                <span className="text-brand-accent">Agency Staffing Problem</span>
              </h1>
              <p className="text-xl opacity-90 font-inter">
                Agencies need operators who can ship. Not candidates who interview
                well. We created StackCertified to prove the difference.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                  The Problem We Saw
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <h3 className="font-lexend font-semibold text-red-700 mb-4">
                    What Agencies Were Getting
                  </h3>
                  <ul className="space-y-3 text-red-600 font-inter">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Generic VAs who need weeks of training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Freelancers who disappear mid-project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Hires who interview well but can't execute</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>No accountability after placement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h3 className="font-lexend font-semibold text-green-700 mb-4">
                    What Agencies Actually Need
                  </h3>
                  <ul className="space-y-3 text-green-600 font-inter">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Operators tested on actual agency tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Full-time commitment with clear expectations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>AI-native workflows built in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ongoing support and performance tracking</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
                  So we built a certification system that tests what actually
                  matters: can this person ship the work your agency needs?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Operators */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/team-collaboration.png"
                  alt="StackCertified operators collaborating on agency work"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6">
                  Meet the <span className="text-brand">Operators</span>
                </h2>
                <p className="text-muted-foreground font-inter mb-6">
                  Our operators are based in the Philippines — a country known for
                  strong English communication, cultural alignment with Western
                  agencies, and a deep talent pool in digital marketing and
                  development.
                </p>
                <p className="text-muted-foreground font-inter mb-6">
                  But unlike traditional offshore hires, every Staff Stack operator
                  earns their StackCertified badge through practical testing. They
                  prove they can ship before they start.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    Klaviyo Certified
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Ad Ops Tested
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Shopify Qualified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                What We Believe
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
                These principles shape how we certify operators and support
                agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {principles.map((principle) => (
                <Card key={principle.id} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <principle.icon className="h-6 w-6 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-lexend font-semibold mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground font-inter text-sm">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Stack Approach */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                The <span className="text-brand">Stack</span> Approach
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
                Three mechanisms that make Staff Stack different from generic
                staffing agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {stackMechanisms.map((mechanism) => (
                <div
                  key={mechanism.title}
                  className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
                >
                  <span
                    className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${mechanism.color}`}
                  >
                    {mechanism.title}
                  </span>
                  <p className="text-muted-foreground font-inter mb-4">
                    {mechanism.description}
                  </p>
                  <Link
                    href={mechanism.link}
                    className="text-brand font-lexend font-medium text-sm inline-flex items-center hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                Who We Serve
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
                We specialize in three agency verticals where we've built
                role-specific certification tracks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {agencyVerticals.map((vertical) => (
                <div
                  key={vertical.name}
                  className="bg-white rounded-xl p-6 shadow-sm border text-center"
                >
                  <span
                    className={`inline-block text-sm font-medium px-4 py-2 rounded-full mb-4 ${vertical.color}`}
                  >
                    {vertical.name}
                  </span>
                  <p className="text-muted-foreground font-inter text-sm">
                    {vertical.roles}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                className="bg-brand hover:bg-brand-light text-white font-lexend font-medium"
                asChild
              >
                <Link href="/agencies">
                  Explore Agency Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                Built for Agency Scale
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "7", label: "Days to first operator" },
                { number: "14", label: "Day replacement guarantee" },
                { number: "3", label: "Agency verticals" },
                { number: "100%", label: "AI workflow tested" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand/5 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-lexend font-bold text-brand mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-inter text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brand text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Zap className="h-12 w-12 text-brand-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                Ready to Add Capacity?
              </h2>
              <p className="text-xl opacity-90 font-inter mb-8">
                StackCertified operators for your agency. Tested on real work.
                Ready in 7 days.
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
                  <Link href="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
