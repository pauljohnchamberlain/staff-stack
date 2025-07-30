import {
  ArrowRight,
  Banknote,
  CheckCircle,
  Gavel,
  Home,
  MonitorPlay,
  ShoppingCart,
  Stethoscope,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Industries We Serve | Staff Stack",
  description:
    "Specialized offshore staffing solutions for technology, finance, healthcare, e-commerce, real estate, and legal industries.",
};

const industries = [
  {
    id: "technology",
    title: "Technology & Software",
    icon: MonitorPlay,
    summary:
      "Supporting digital innovation with dedicated development and tech talent.",
    description:
      "The fast-paced world of technology demands agile teams and specialized skills. Staff Stack provides top-tier developers, QA specialists, and technical support professionals who help technology companies scale efficiently without compromising quality.",
    services: [
      "Software Development Teams",
      "QA & Testing Specialists",
      "DevOps & Cloud Engineers",
      "Technical Support Teams",
      "IT Infrastructure Management",
      "Product Management Support",
    ],
    benefits: [
      "Access to specialized tech talent at competitive rates",
      "Easily scale your development team based on project needs",
      "24/7 technical support coverage",
      "Reduce time-to-market for your products",
    ],
    caseStudy: {
      title: "Scaling Development Capacity",
      description:
        "A growing SaaS company needed to expand their development team quickly. Staff Stack provided a dedicated team of 15 developers, QA specialists, and DevOps engineers who integrated seamlessly with their existing team. The result was a 40% increase in development velocity and on-time product launches.",
    },
  },
  {
    id: "finance",
    title: "Finance & Accounting",
    icon: Banknote,
    summary: "Precision financial operations and expert accounting support.",
    description:
      "Financial services firms and accounting departments require precision, confidentiality, and specialized knowledge. Our finance and accounting professionals deliver accurate work while maintaining the highest standards of data security and compliance.",
    services: [
      "Bookkeeping & Accounting Services",
      "Financial Analysis & Reporting",
      "Accounts Receivable/Payable",
      "Tax Preparation Support",
      "Audit Assistance",
      "Financial Research",
    ],
    benefits: [
      "Reduce operational costs while maintaining quality",
      "Scale financial operations during busy seasons",
      "ISO 27001 certified for data security and protection",
      "24/7 processing capability for global operations",
    ],
    caseStudy: {
      title: "Streamlining Financial Operations for a Mid-size Firm",
      description:
        "A growing financial services firm was struggling to keep up with their accounting workload. Staff Stack provided a team of 8 financial professionals who took over routine accounting tasks, freeing up their in-house team to focus on strategy and growth. The result was a 35% reduction in processing time and significant cost savings.",
    },
  },
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    icon: Stethoscope,
    summary: "Supporting healthcare delivery with administrative excellence.",
    description:
      "The healthcare industry faces unique challenges in managing patient data, insurance claims, and administrative processes. Our healthcare support specialists help medical practices and health organizations focus on patient care while we handle the back-office operations.",
    services: [
      "Medical Billing & Coding",
      "Insurance Claims Processing",
      "Electronic Health Records Management",
      "Healthcare Customer Support",
      "Medical Transcription",
      "Healthcare Data Analysis",
    ],
    benefits: [
      "HIPAA-compliant processes and secure data handling",
      "Reduce administrative costs and improve accuracy",
      "Quick turnaround on claims and billing processes",
      "Specialized healthcare administrative expertise",
    ],
    caseStudy: {
      title: "Optimizing Revenue Cycle Management for a Medical Group",
      description:
        "A multi-location medical practice was struggling with billing inefficiencies and delayed insurance payments. Staff Stack provided a dedicated team of medical billing specialists who implemented streamlined processes. Within 6 months, the practice saw a 28% reduction in claim rejections and a 15% increase in revenue collection.",
    },
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    icon: ShoppingCart,
    summary:
      "Powering online retail with scalable customer and operational support.",
    description:
      "E-commerce businesses need to scale operations quickly during peak seasons while maintaining excellent customer experience. Our e-commerce specialists provide the flexibility and skills needed to manage product listings, process orders, and deliver outstanding customer service.",
    services: [
      "Customer Service & Order Support",
      "Inventory Management",
      "Product Listing & Catalog Management",
      "Returns Processing",
      "E-commerce Platform Administration",
      "Digital Marketing Support",
    ],
    benefits: [
      "Scale customer support during peak seasons",
      "24/7 customer service coverage",
      "Reduce operational costs while improving service levels",
      "Multi-platform e-commerce expertise",
    ],
    caseStudy: {
      title: "Scaling Customer Support for a Growing Online Retailer",
      description:
        "An e-commerce company was experiencing rapid growth but struggling to maintain service levels during peak seasons. Staff Stack provided a flexible team of customer service representatives that could scale from 10 to 30 agents as needed. The retailer achieved 24/7 customer support coverage and maintained a 98% customer satisfaction rating even during the busiest periods.",
    },
  },
  {
    id: "realestate",
    title: "Real Estate",
    icon: Home,
    summary: "Streamlining property management and real estate operations.",
    description:
      "Real estate firms need efficient back-office operations to manage properties, process leases, and respond to client inquiries. Our real estate support specialists handle administrative tasks so you can focus on closing deals and growing your portfolio.",
    services: [
      "Property Management Support",
      "Lease Administration",
      "Real Estate Transaction Coordination",
      "MLS Listing Management",
      "Lead Qualification & Follow-up",
      "Real Estate Virtual Assistants",
    ],
    benefits: [
      "Dedicated support for agents and property managers",
      "Faster processing of real estate transactions",
      "Timely follow-up with leads and clients",
      "Cost-effective administrative support",
    ],
    caseStudy: {
      title: "Boosting Agent Productivity for a Real Estate Brokerage",
      description:
        "A growing real estate brokerage wanted to help their agents focus more on client relationships and less on paperwork. Staff Stack provided a team of real estate virtual assistants who handled listing management, transaction coordination, and administrative tasks. Agents reported saving 15-20 hours per week, resulting in a 30% increase in transactions closed.",
    },
  },
  {
    id: "legal",
    title: "Legal Services",
    icon: Gavel,
    summary:
      "Supporting law firms with specialized administrative and paralegal assistance.",
    description:
      "Law firms require meticulous attention to detail and confidential handling of sensitive information. Our legal support professionals assist with research, document preparation, and administrative tasks that help legal practices operate more efficiently.",
    services: [
      "Legal Research & Document Review",
      "Paralegal Support",
      "Contract Management",
      "Legal Transcription",
      "Client Intake & Case Management",
      "Litigation Support",
    ],
    benefits: [
      "Reduce overhead costs while maintaining quality",
      "Scale legal support resources as needed",
      "Strict confidentiality and security protocols",
      "Support for specialized practice areas",
    ],
    caseStudy: {
      title: "Enhancing Capacity for a Boutique Law Firm",
      description:
        "A boutique law firm specializing in corporate law needed additional support for document review and contract management. Staff Stack provided a team of 5 paralegals with corporate law experience who worked on contract review, due diligence, and legal research. The firm was able to take on 40% more clients without adding to their in-house headcount.",
    },
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-linear-to-b from-sky-50 to-background">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Staff Stack provides specialized offshore staffing solutions
              across diverse industries, with teams tailored to your specific
              business domain.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12">
            {industries.map((industry) => (
              <Card
                key={industry.id}
                className="group bg-white hover:shadow-md transition-all duration-300 cursor-pointer border-2 hover:border-brand/20"
              >
                <Link href={`#${industry.id}`} className="block h-full">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-3">
                      {/* Use the icon component */}
                      {industry.icon && (
                        <industry.icon
                          className="h-7 w-7 text-brand"
                          aria-label={industry.title}
                        />
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-brand transition-colors">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {industry.summary}
                    </p>
                    <div className="flex items-center mt-4 text-sm text-brand font-medium">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-6xl">
          <Tabs defaultValue="technology" className="space-y-8">
            <div className="overflow-auto pb-2">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0">
                {industries.map((industry) => (
                  <TabsTrigger
                    key={industry.id}
                    value={industry.id}
                    className="data-[state=active]:border-b-2 data-[state=active]:border-brand data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none px-4 py-2"
                  >
                    {industry.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {industries.map((industry) => (
              <TabsContent
                key={industry.id}
                value={industry.id}
                id={industry.id}
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2 space-y-6">
                    <h2 className="text-3xl font-bold">
                      {industry.title}{" "}
                      <span className="text-brand">Solutions</span>
                    </h2>
                    <p className="text-muted-foreground">
                      {industry.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Our Services
                        </h3>
                        <ul className="space-y-2">
                          {industry.services.map((service, _index) => (
                            <li
                              key={`service-${service.toLowerCase().replace(/\s+/g, "-")}`}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Key Benefits
                        </h3>
                        <ul className="space-y-2">
                          {industry.benefits.map((benefit, _index) => (
                            <li
                              key={`benefit-${benefit.toLowerCase().replace(/\s+/g, "-")}`}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-muted rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        Case Study: {industry.caseStudy.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {industry.caseStudy.description}
                      </p>
                    </div>

                    <div className="mt-8">
                      <Button
                        size="lg"
                        className="bg-brand hover:bg-brand/90"
                        asChild
                      >
                        <Link href="/contact-us">
                          Discuss Your {industry.title} Needs
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Card className="border-2 border-brand/20">
                      <CardHeader className="bg-brand/5 border-b">
                        <CardTitle className="text-xl">
                          Why Choose Staff Stack
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Industry Expertise</p>
                              <p className="text-sm text-muted-foreground">
                                Our specialists have deep knowledge of{" "}
                                {industry.title.toLowerCase()} processes and
                                requirements.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Quality Assurance</p>
                              <p className="text-sm text-muted-foreground">
                                Rigorous quality control processes ensure
                                high-quality service delivery.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Scalable Teams</p>
                              <p className="text-sm text-muted-foreground">
                                Easily scale your team up or down based on your
                                business needs.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Data Security</p>
                              <p className="text-sm text-muted-foreground">
                                ISO 27001 certified with strict security
                                protocols to protect your data.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Cost-Effective Solutions
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Significant cost savings without compromising on
                                quality or service.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <div className="mt-6">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="faq-1">
                          <AccordionTrigger>
                            How quickly can you set up a team?
                          </AccordionTrigger>
                          <AccordionContent>
                            For most {industry.title.toLowerCase()} roles, we
                            can present qualified candidates within 2-3 weeks.
                            Once you select your team members, the onboarding
                            process typically takes 1-2 weeks.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2">
                          <AccordionTrigger>
                            What type of {industry.title.toLowerCase()}{" "}
                            experience do your staff have?
                          </AccordionTrigger>
                          <AccordionContent>
                            Our {industry.title.toLowerCase()} specialists have
                            a minimum of 2-5 years of industry experience. Many
                            have worked with international clients and are
                            familiar with global standards and practices in the{" "}
                            {industry.title.toLowerCase()} sector.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-3">
                          <AccordionTrigger>
                            How do you ensure quality and security?
                          </AccordionTrigger>
                          <AccordionContent>
                            We implement rigorous screening processes, regular
                            performance evaluations, and comprehensive training
                            programs. Our facilities are ISO 27001 certified
                            with strict security protocols, secure
                            infrastructure, and confidentiality agreements.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-brand text-white">
        <div className="container max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build your industry-specific team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how Staff Stack can provide specialized offshore
            staffing solutions tailored to your industry.
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
