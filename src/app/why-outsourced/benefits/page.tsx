import {
  BadgeCheck,
  Building2,
  Clock,
  CreditCard,
  LineChart,
  Scale,
  Search,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Benefits of Outsourcing | Staff Stack",
  description:
    "Discover the key benefits of outsourcing your business operations with Staff Stack, from cost savings to access to global talent.",
};

export default function BenefitsPage() {
  const benefits = [
    {
      id: "cost-savings",
      icon: <CreditCard className="h-8 w-8 text-[#09d8f5]" />,
      title: "Significant Cost Savings",
      description:
        "Reduce operational costs by up to 75% while maintaining quality. Save on office space, equipment, benefits, training, and recruitment costs.",
    },
    {
      id: "focus-core",
      icon: <BadgeCheck className="h-8 w-8 text-[#09d8f5]" />,
      title: "Focus on Core Business",
      description:
        "Delegate time-consuming support functions to your offshore team while your local team concentrates on strategic growth initiatives.",
    },
    {
      id: "access-talent",
      icon: <Search className="h-8 w-8 text-[#09d8f5]" />,
      title: "Access to Specialized Talent",
      description:
        "Tap into a global pool of highly qualified professionals with specialized skills that might be scarce or expensive in your local market.",
    },
    {
      id: "operational-flexibility",
      icon: <Scale className="h-8 w-8 text-[#09d8f5]" />,
      title: "Operational Flexibility",
      description:
        "Scale your team up or down based on business needs without the complexities of local hiring and severance regulations.",
    },
    {
      id: "round-clock",
      icon: <Clock className="h-8 w-8 text-[#09d8f5]" />,
      title: "Round-the-Clock Operations",
      description:
        "Leverage time zone differences to achieve 24/7 operations, faster turnaround times, and improved customer service availability.",
    },
    {
      id: "competitive-advantage",
      icon: <LineChart className="h-8 w-8 text-[#09d8f5]" />,
      title: "Competitive Advantage",
      description:
        "Compete more effectively against larger businesses by accessing the same quality talent at a fraction of the cost.",
    },
    {
      id: "reduced-risk",
      icon: <Building2 className="h-8 w-8 text-[#09d8f5]" />,
      title: "Reduced Business Risk",
      description:
        "Distribute operational risk across multiple locations while benefiting from Staff Stack's business continuity infrastructure.",
    },
    {
      id: "diverse-perspectives",
      icon: <Users2 className="h-8 w-8 text-[#09d8f5]" />,
      title: "Diverse Perspectives",
      description:
        "Enrich your business with multicultural insights that can drive innovation and help expand into new markets.",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Benefits of Outsourcing
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Elevate your business with global talent while reducing costs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6 text-center">
              Why Businesses Choose Offshore Staffing
            </h2>
            <p className="text-lg font-inter text-slate-700 text-center">
              In today's competitive global market, businesses of all sizes are
              discovering that offshore staffing provides numerous strategic
              advantages beyond just cost savings. With Staff Stack as your
              partner, you gain access to a world-class infrastructure and
              talent pool that can transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white p-6 rounded-lg shadow-xs hover:shadow-md transition-all border border-slate-100"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-lexend font-bold text-[#0f2c4a] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 font-inter">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
              Ready to experience these benefits?
            </h2>
            <p className="text-lg font-inter text-slate-700 mb-8 max-w-3xl mx-auto">
              Join hundreds of forward-thinking businesses that have transformed
              their operations with Staff Stack's offshore staffing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                asChild
              >
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#09d8f5] text-[#0f2c4a] hover:bg-[#09d8f5]/10 font-lexend"
                asChild
              >
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-xs border border-slate-100">
              <h2 className="text-2xl md:text-3xl font-lexend font-bold text-[#0f2c4a] mb-6 text-center">
                Calculate Your Potential Savings
              </h2>
              <p className="text-lg font-inter text-slate-700 mb-8 text-center">
                Hiring through Staff Stack can save you up to 75% on staffing
                costs compared to local hires. Use our simple calculator to see
                your potential monthly and annual savings.
              </p>

              <div className="bg-[#0f2c4a]/5 p-6 rounded-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <h3 className="font-lexend font-medium text-[#0f2c4a]">
                      Average Local Salary
                    </h3>
                    <div className="p-4 bg-white rounded border border-slate-200 text-2xl font-lexend font-bold text-[#0f2c4a]">
                      $75,000
                    </div>
                    <p className="text-sm text-slate-500 font-inter">
                      Annual cost per employee
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-lexend font-medium text-[#0f2c4a]">
                      Staff Stack Cost
                    </h3>
                    <div className="p-4 bg-white rounded border border-slate-200 text-2xl font-lexend font-bold text-[#09d8f5]">
                      $24,000
                    </div>
                    <p className="text-sm text-slate-500 font-inter">
                      Annual cost per employee
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-lexend font-medium text-[#0f2c4a]">
                      Your Savings
                    </h3>
                    <div className="p-4 bg-white rounded border border-slate-200 text-2xl font-lexend font-bold text-[#e60b8a]">
                      $51,000
                    </div>
                    <p className="text-sm text-slate-500 font-inter">
                      Annual savings per employee
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                  asChild
                >
                  <Link href="/contact-us">Get Your Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
