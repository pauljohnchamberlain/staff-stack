import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bug,
  CheckCircle,
  Code,
  Layers,
  Mail,
  MessageSquare,
  MousePointerClick,
  Package,
  Palette,
  Repeat,
  Scissors,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "StackCertified Roles | Staff Stack",
  description:
    "Browse StackCertified operator roles for agencies. Email builders, ad ops assistants, Shopify developers, and more — all pre-certified and ready in 7 days.",
  keywords: [
    "agency staffing",
    "Klaviyo email builder",
    "ad ops assistant",
    "Shopify developer",
    "email designer",
    "QA specialist",
    "reporting analyst",
  ],
};

const rolesByVertical = [
  {
    id: "retention",
    name: "Retention & Klaviyo",
    color: "purple",
    icon: Mail,
    href: "/agencies/retention",
    roles: [
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
    ],
  },
  {
    id: "paid-media",
    name: "Paid Media Ops",
    color: "blue",
    icon: TrendingUp,
    href: "/agencies/paid-media",
    roles: [
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
    ],
  },
  {
    id: "shopify",
    name: "Shopify Dev",
    color: "green",
    icon: Code,
    href: "/agencies/shopify",
    roles: [
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
    ],
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-200",
      badge: "bg-purple-50 text-purple-700",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
      badge: "bg-blue-50 text-blue-700",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      border: "border-green-200",
      badge: "bg-green-50 text-green-700",
    },
  };
  return colors[color] || colors.purple;
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://staffstack.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Roles",
        item: "https://staffstack.com/services",
      },
    ],
  };

  return (
    <main className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-brand-dark via-brand to-brand-light text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4 text-brand-accent" />
              <span className="text-sm font-medium font-inter">
                StackCertified Operators
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Browse <span className="text-brand-accent">Certified Roles</span>
            </h1>
            <p className="text-xl opacity-90 font-inter mb-8">
              Every role has a dedicated certification track. Not generic hires —
              operators who pass role-specific practical tests before placement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white font-lexend font-medium"
                asChild
              >
                <Link href="/contact-us">
                  Get Your First Operator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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

      {/* Roles by Vertical */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              Roles by <span className="text-brand">Agency Vertical</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              Each vertical has specialized operators with role-specific
              certifications. Find the right capacity for your agency type.
            </p>
          </div>

          <div className="space-y-16">
            {rolesByVertical.map((vertical) => {
              const colors = getColorClasses(vertical.color);
              return (
                <div key={vertical.id}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${colors.bg}`}>
                        <vertical.icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <h3 className="text-2xl font-lexend font-bold">
                        {vertical.name}
                      </h3>
                    </div>
                    <Button
                      variant="outline"
                      className={`${colors.border} ${colors.text} hover:${colors.bg}`}
                      asChild
                    >
                      <Link href={vertical.href}>
                        View Vertical
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vertical.roles.map((role) => (
                      <div
                        key={role.title}
                        className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
                      >
                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                          <role.icon className={`h-6 w-6 ${colors.text}`} />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-lexend font-semibold">
                            {role.title}
                          </h4>
                          <span className="bg-brand/10 text-brand text-xs px-2 py-0.5 rounded font-inter font-medium">
                            StackCertified
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground font-inter mb-4">
                          {role.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`${colors.badge} text-xs px-2 py-1 rounded font-inter`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What StackCertified Means */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-brand mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
                What <span className="text-brand">StackCertified</span> Means
              </h2>
              <p className="text-muted-foreground font-inter">
                Every operator earns their StackCertified badge through rigorous
                practical testing — not generic assessments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-lexend font-semibold mb-2">
                      Role-Specific Tests
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      Timed practical tests designed for each role. Build a Klaviyo
                      flow, audit a Meta account, fix a Shopify bug.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-lexend font-semibold mb-2">
                      AI Workflow Proof
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      Demonstrated ability to work with AI tools: prompt → output →
                      edit → deliverable. Modern operators for modern workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-lexend font-semibold mb-2">
                      Communication Simulation
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      Loom walkthrough, written updates, escalation handling. Every
                      operator proves they can communicate clearly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-lexend font-semibold mb-2">
                      Shareable Scorecard
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      See exactly what they scored before you hire. Test results,
                      sample outputs, tool fluency — full transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
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
