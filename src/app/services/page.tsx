"use client";

import { ServiceCategories } from "@/components/sections/service-categories";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle,
  ChevronRight,
  HardHat,
  Headphones,
  HeartPulse,
  LineChart,
  Mail,
  Monitor,
  Paintbrush,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "it-development",
    name: "IT & Development",
    icon: Monitor,
    color: "bg-blue-100 text-blue-600",
    description:
      "Access top tech talent at a fraction of the cost of local hires. Our IT professionals work as a seamless extension of your team.",
    benefits: [
      "Full-stack developers, DevOps engineers, UI/UX designers",
      "Significant cost savings compared to local tech talent",
      "Philippines has 200,000+ IT graduates annually",
      "24/7 team coverage option for global operations",
    ],
    cta: "Hire IT Talent",
  },
  {
    id: "creative-design",
    name: "Creative & Design",
    icon: Paintbrush,
    color: "bg-purple-100 text-purple-600",
    description:
      "Elevate your brand with dedicated creative professionals who bring your vision to life with exceptional design and content.",
    benefits: [
      "Graphic designers, content writers, video editors",
      "Consistent output for all your creative needs",
      "High-quality work at competitive rates",
      "Strong English skills for clear communication",
    ],
    cta: "Hire Creative Talent",
  },
  {
    id: "customer-service",
    name: "Customer Service",
    icon: Headphones,
    color: "bg-green-100 text-green-600",
    description:
      "Provide excellent customer support with our friendly, English-fluent representatives ready to serve your clients with care.",
    benefits: [
      "Customer support reps, technical support, help desk",
      "Known globally for warm, friendly customer service",
      "Cultural affinity with Western markets",
      "Flexible 24/7 scheduling options",
    ],
    cta: "Hire Support Staff",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: LineChart,
    color: "bg-red-100 text-red-600",
    description:
      "Boost your online presence with dedicated marketing experts who understand how to grow your audience and convert leads.",
    benefits: [
      "SEO specialists, social media managers, PPC experts",
      "Data-driven marketers with proven results",
      "Full-time dedicated team members",
      "Stay ahead with latest marketing trends and tools",
    ],
    cta: "Hire Marketing Experts",
  },
  {
    id: "finance-accounting",
    name: "Finance & Accounting",
    icon: Calculator,
    color: "bg-amber-100 text-amber-600",
    description:
      "Trust your financial operations to skilled professionals with accounting qualifications and attention to detail.",
    benefits: [
      "Accountants, bookkeepers, financial analysts",
      "Strong educational background in finance",
      "Familiar with international accounting standards",
      "Meticulous attention to detail and accuracy",
    ],
    cta: "Hire Finance Professionals",
  },
  {
    id: "virtual-assistants",
    name: "Virtual Assistants",
    icon: Mail,
    color: "bg-sky-100 text-sky-600",
    description:
      "Streamline your operations with dedicated administrative professionals who handle the day-to-day tasks that keep your business running.",
    benefits: [
      "Executive assistants, admin support, data entry",
      "College-educated staff with excellent English",
      "Reliable support for your daily business needs",
      "Free up your time to focus on business growth",
    ],
    cta: "Hire Virtual Assistants",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 pb-16 md:pb-24 bg-gradient-to-r from-brand-dark via-brand to-brand-light text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-brand-accent"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{ top: "10%", left: "5%" }}
          />
          <motion.div
            className="absolute h-96 w-96 rounded-full bg-secondary/50"
            animate={{
              x: [0, -70, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{ bottom: "-20%", right: "-5%" }}
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Offshore Staffing{" "}
              <span className="text-brand-accent">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl opacity-90 mb-10"
            >
              Access exceptional talent across multiple disciplines with our
              full-time dedicated professionals in the Philippines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-medium"
                asChild
              >
                <Link href="/contact-us">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#service-categories">View All Categories</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Wave SVG Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="fill-background w-full h-10 md:h-16"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      <section id="service-categories" className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Service <span className="text-brand">Categories</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground"
            >
              Explore our wide range of staffing solutions to find the perfect
              fit for your business needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  <div
                    className={`${category.color} p-4 rounded-xl md:self-start`}
                  >
                    <category.icon className="h-10 w-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {category.benefits.map((benefit, idx) => (
                        <div
                          key={`${category.id}-benefit-${idx}`}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="mt-2 bg-brand hover:bg-brand-light text-white"
                      asChild
                    >
                      <Link href="/contact-us">
                        {category.cta} <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <ServiceCategories />
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Build Your{" "}
              <span className="text-brand-accent">Offshore Team?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8"
            >
              Contact us today to discuss your staffing needs and find out how
              we can help your business grow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-brand font-medium"
                asChild
              >
                <Link href="/contact-us">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
