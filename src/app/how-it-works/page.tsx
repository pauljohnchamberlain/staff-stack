import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle,
  FileSearch,
  Globe,
  MonitorCheck,
  Shield,
  UserCheck,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "How It Works | Staff Stack",
  description:
    "Learn the simple process of building your remote team in the Philippines with Staff Stack - from recruitment to ongoing management.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-linear-to-b from-sky-50 to-background">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building Offshore & Remote Teams in the Philippines
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover our streamlined process for building your dedicated
                remote team with ease. Our structured process makes it simple to
                build your team. Staff Stack handles all the complexities while
                you focus on your business.
              </p>
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white"
                asChild
              >
                <Link href="#process">See How It Works</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/413077933/3759590863.svg"
                alt="Offshore team illustration"
                width={600}
                height={400}
                className="rounded-lg"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-100">
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <p className="text-muted-foreground mb-8">
                Our streamlined process ensures you get the right talent for
                your business with minimal hassle.
              </p>
              <ol className="relative border-l border-brand/30 space-y-8 pl-6 ml-3">
                {[
                  {
                    title: "Initial Consultation",
                    description:
                      "We begin with a thorough consultation to understand your business needs, culture, and specific role requirements.",
                  },
                  {
                    title: "Talent Sourcing",
                    description:
                      "Our recruitment specialists source and screen candidates from our extensive talent pool, ensuring only the best fit your criteria.",
                  },
                  {
                    title: "Candidate Presentation",
                    description:
                      "We introduce you to shortlisted candidates for interviews and skill assessments, so you can make the final selection.",
                  },
                  {
                    title: "Onboarding & Setup",
                    description:
                      "Once you've chosen your team members, we handle all onboarding, equipment provisioning, and workspace setup.",
                  },
                  {
                    title: "Ongoing Management",
                    description:
                      "We provide HR, payroll, IT support, and productivity monitoring, so you can focus on your core business.",
                  },
                ].map((step, index) => (
                  <li key={`step-${index + 1}`} className="mb-2">
                    <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-brand text-white rounded-full font-bold text-lg shadow-sm">
                      {index + 1}
                    </span>
                    <div className="ml-6">
                      <h3 className="font-semibold text-lg mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:mt-12">
              <Image
                src="https://ext.same-assets.com/413077933/2596823443.svg"
                alt="Offshore team chart"
                width={600}
                height={400}
                className="rounded-lg"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </section>

      <div id="process">
        <section className="py-16 bg-white" id="how-it-works">
          <div className="container">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground">
                Our proven process for building dedicated remote teams has
                helped over 250+ businesses reduce costs and scale efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
              {[
                {
                  id: 1,
                  title: "Define Requirements",
                  description:
                    "You provide us with job descriptions, skills, and qualifications needed.",
                  icon: <FileSearch className="h-6 w-6" />,
                },
                {
                  id: 2,
                  title: "We Recruit & Screen",
                  description:
                    "Our team sources candidates that match your requirements.",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  id: 3,
                  title: "Interview & Select",
                  description:
                    "You interview pre-screened candidates and choose the best fits.",
                  icon: <UserCheck className="h-6 w-6" />,
                },
                {
                  id: 4,
                  title: "Onboarding & Support",
                  description:
                    "We handle equipment, HR, and facilities for your team.",
                  icon: <MonitorCheck className="h-6 w-6" />,
                },
              ].map((step) => (
                <div
                  key={step.id}
                  className="bg-white rounded-lg p-6 shadow-xs relative border border-muted overflow-hidden group hover:border-brand hover:shadow-md transition-all"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-none">
                      <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4 text-brand">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 grow">
                      {step.description}
                    </p>
                    <div className="text-sm font-medium text-brand flex items-center">
                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 rounded-xl p-8 mt-16">
              <h3 className="text-xl font-bold mb-6 text-center">
                What's Included in Our Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  "Comprehensive talent sourcing",
                  "Rigorous skills assessment",
                  "Cultural fit evaluation",
                  "Seamless onboarding process",
                  "Quality assurance monitoring",
                  "Employee benefits and incentives",
                  "Security compliance and protocols",
                ].map((item, _idx) => (
                  <div
                    key={`service-${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-none">
                      <div className="h-6 w-6 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                        <Check className="h-3 w-3" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-20 bg-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Full-<span className="text-brand">Managed</span> Operations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We handle all the administrative and operational aspects of your
              offshore team so you can focus on your core business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-brand/20 shadow-xs">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-brand" />
                  <span>World-Class Infrastructure</span>
                </CardTitle>
                <CardDescription>
                  State-of-the-art facilities with enterprise-grade technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>
                      Enterprise-grade hardware, workstations and connectivity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>
                      Backup power systems with 99.9% uptime guarantee
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Redundant fiber internet connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>
                      Premium office environment with modern amenities
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand/20 shadow-xs">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-brand" />
                  <span>Data Security</span>
                </CardTitle>
                <CardDescription>
                  Enterprise-level security measures for your peace of mind
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>
                      ISO 27001 certified information security management
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Secure VPN solutions and end-to-end encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>GDPR and data privacy compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Regular security audits and penetration testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand/20 shadow-xs">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-brand" />
                  <span>Transparent Productivity</span>
                </CardTitle>
                <CardDescription>
                  Real-time monitoring and performance tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Customizable productivity monitoring dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Regular performance reports and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Time tracking and attendance management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Quality assurance and continuous improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand/20 shadow-xs">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-brand" />
                  <span>Full HR Management</span>
                </CardTitle>
                <CardDescription>
                  Comprehensive human resource services and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>
                      Recruitment, onboarding, and retention strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Payroll administration and benefits management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Performance management and career development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span>Employee engagement and wellness programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible <span className="text-brand">Offshore</span> Staffing
              Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the staffing model that best fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-brand/20 shadow-xs">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Remote Staff</CardTitle>
                <CardDescription>
                  Fully remote team members who work from home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Enterprise-grade equipment provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Secure home office setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Productivity monitoring software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Backup internet connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Full HR and technical support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand/20 shadow-xs">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>Hybrid Staff</CardTitle>
                <CardDescription>
                  Flexible schedule combining office and remote work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Split days between office and home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Dedicated desk at our facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Equipment for both locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Scheduled team collaboration days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Customizable schedule options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand/20 shadow-xs">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Office-Based Staff</CardTitle>
                <CardDescription>
                  Dedicated team members working from our secure facilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Premium office environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Enhanced security protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Direct supervision and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Team building and company culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span>Private meeting rooms and facilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-accent/5">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our offshore staffing process
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h4 className="font-medium mb-2">What is outsourcing?</h4>
            <p className="text-muted-foreground mb-6">
              Outsourcing is the business practice of hiring a party outside a
              company to perform services or create goods that traditionally
              were performed in-house by the company's own employees and staff.
              Staff Stack provides dedicated staff that work exclusively for
              your business, unlike traditional outsourcing where resources may
              be shared.
            </p>
            <Separator className="my-4" />
            <h4 className="font-medium mb-2">
              What's the difference between outsourcing and offshoring?
            </h4>
            <p className="text-muted-foreground mb-6">
              Outsourcing refers to contracting out a business process to
              another party, while offshoring specifically refers to getting
              work done in a different country, usually to benefit from lower
              costs. Staff Stack combines both by providing dedicated offshore
              staff based in the Philippines who work exclusively for your
              business.
            </p>
            <Separator className="my-4" />
            <h4 className="font-medium mb-2">What is offshore outsourcing?</h4>
            <p className="text-muted-foreground mb-6">
              Offshore outsourcing, or offshoring, is the practice of hiring an
              external organization to perform some business functions in a
              country other than the one where the products or services are
              developed or manufactured. With Staff Stack, you get dedicated
              Philippine-based staff who are fully integrated with your team.
            </p>
            <Separator className="my-4" />
            <h4 className="font-medium mb-2">
              How long does it take to build my team?
            </h4>
            <p className="text-muted-foreground mb-6">
              The timeline depends on your specific requirements and the roles
              you're looking to fill. For most positions, we can present
              qualified candidates within 2-3 weeks. Once you select your
              preferred candidates, onboarding typically takes an additional
              week. For specialized or senior roles, the recruitment process may
              take longer to ensure we find the perfect match.
            </p>
            <Separator className="my-4" />
            <h4 className="font-medium mb-2">
              How do I manage remote staff effectively?
            </h4>
            <p className="text-muted-foreground mb-0">
              Effective management of remote staff involves clear communication,
              setting expectations, regular check-ins, and utilizing appropriate
              technology tools. Staff Stack provides productivity monitoring
              software, regular reports, and management support to help you
              track performance. We also handle all administrative aspects,
              allowing you to focus on managing the work itself rather than HR
              functions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build your offshore team?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how Staff Stack can help grow and manage your business
            with dedicated offshore professionals.
          </p>
          <Button
            size="lg"
            className="bg-white text-brand hover:bg-white/90"
            asChild
          >
            <Link href="/contact-us">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
