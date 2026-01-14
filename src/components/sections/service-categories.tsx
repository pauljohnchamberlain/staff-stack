"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Mail, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  {
    id: "retention",
    name: "Retention & Klaviyo",
    icon: Mail,
    color: "bg-purple-100 text-purple-600",
    description:
      "Production capacity for email, SMS, and CRO agencies. Ship more campaigns without breaking deadlines.",
    promise: "Ship X campaigns/week with <Y% QA error rate",
    roles: [
      "Klaviyo Email Builder",
      "Email Designer (Figma → Email)",
      "QA Specialist (Links, Rendering, UTMs)",
      "Copywriter",
      "Flow Strategist",
      "Campaign Manager",
      "Segmentation Analyst",
      "SMS Specialist",
    ],
    link: "/agencies/retention",
  },
  {
    id: "paid-media",
    name: "Paid Media Ops",
    icon: TrendingUp,
    color: "bg-blue-100 text-blue-600",
    description:
      "Ad ops and creative throughput for media buying agencies. Free up strategists to focus on strategy.",
    promise: "Reduce founder/strategist time by X hrs/week",
    roles: [
      "Ad Ops Assistant",
      "Reporting Analyst (Looker/Sheets)",
      "Creative Editor (Variants + Hooks)",
      "UTM & Pixel Specialist",
      "Campaign Builder",
      "Landing Page QA",
      "Media Buyer Assistant",
      "GA4 Analyst",
    ],
    link: "/agencies/paid-media",
  },
  {
    id: "shopify",
    name: "Shopify Dev",
    icon: Code,
    color: "bg-green-100 text-green-600",
    description:
      "Implementation and support capacity for Shopify agencies. Handle overflow without missing deadlines.",
    promise: "Project overflow handled, deadlines hit",
    roles: [
      "Shopify Developer",
      "Theme Customization Specialist",
      "QA Tester",
      "Support Developer",
      "Project Manager",
      "App Integration Specialist",
      "Store Migration Specialist",
      "Liquid Developer",
    ],
    link: "/agencies/shopify",
  },
];

export function ServiceCategories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
            Built for <span className="text-brand">Agency Verticals</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            We specialize in three agency types. Each vertical has dedicated
            certification tracks, role-specific tests, and pre-built SOPs.
          </p>
        </motion.div>

        <Tabs defaultValue="retention" className="w-full">
          <div className="relative mb-8 pb-2 overflow-x-auto hide-scrollbar">
            <TabsList className="w-auto inline-flex">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-3 min-w-40 text-center data-[state=active]:bg-brand data-[state=active]:text-white font-lexend"
                >
                  <span className="flex items-center gap-2">
                    <category.icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="pt-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="col-span-1 md:col-span-1"
                >
                  <div
                    className={`p-4 rounded-xl mb-4 ${category.color} w-fit`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-lexend font-bold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-inter">
                    {category.description}
                  </p>
                  <div className="bg-brand/5 border border-brand/20 rounded-lg p-3 mb-4">
                    <p className="text-sm font-inter text-brand font-medium">
                      Promise: {category.promise}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="group font-lexend font-medium"
                    asChild
                  >
                    <Link href={category.link}>
                      View {category.name} details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="col-span-1 md:col-span-3 bg-white rounded-xl p-6 shadow-xs"
                >
                  <h4 className="text-lg font-lexend font-medium mb-4">
                    StackCertified {category.name} Roles
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.roles.map((role, index) => (
                      <motion.div
                        key={`${category.id}-${index}`}
                        variants={itemVariants}
                        className="bg-muted/30 rounded-lg p-3 text-sm font-lexend font-medium"
                      >
                        {role}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-brand hover:bg-brand-light text-white font-lexend font-medium"
            asChild
          >
            <Link href="/agencies">
              Explore all agency verticals{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
