"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  ClipboardCheck,
  RefreshCw,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    id: "certified",
    icon: Award,
    title: "StackCertified: AI-Operator",
    description:
      "Every hire passes role-specific tests, AI workflow proof, and communication simulations before placement.",
    link: "/stackcertified",
  },
  {
    id: "speed",
    icon: Zap,
    title: "Ready in 7 Days",
    description:
      "Pre-certified operators from our bench, onboarded and delivering within a week — not months.",
    link: null,
  },
  {
    id: "ops",
    icon: ClipboardCheck,
    title: "StackOps Delivery",
    description:
      "Weekly KPI reviews, QA checklists, SOP libraries, and performance coaching built into every engagement.",
    link: "/stackops",
  },
  {
    id: "guarantee",
    icon: RefreshCw,
    title: "StackGuarantee",
    description:
      "14-day replacement guarantee with clear SLAs. If it's not working, we fix it — fast.",
    link: "/stackguarantee",
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "AI-Native Workflows",
    description:
      "Operators who turn messy briefs into shipped work using AI tools — not button-pushers waiting for instructions.",
    link: null,
  },
  {
    id: "bench",
    icon: BadgeCheck,
    title: "Backup Bench Ready",
    description:
      "Pre-certified backup operators in each role family, so replacements happen in days, not weeks.",
    link: null,
  },
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6">
            The <span className="text-brand">Stack System</span> — Why Agencies
            Trust Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            We're not a job board. We're delivery infrastructure. Our systems
            ensure your operators ship quality work from day one.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => {
            const cardContent = (
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 rounded-full bg-brand/10 w-fit">
                    <reason.icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-lexend font-semibold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {reason.description}
                  </p>
                  {reason.link && (
                    <span className="mt-4 text-brand text-sm font-medium font-inter">
                      Learn more →
                    </span>
                  )}
                </CardContent>
              </Card>
            );

            return (
              <motion.div
                key={reason.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {reason.link ? (
                  <Link href={reason.link}>{cardContent}</Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-lexend font-bold">
              Your Delivery Infrastructure, Not a Directory
            </h3>
            <p className="text-muted-foreground font-inter">
              Agencies don't need another job board. They need operators who can
              take a brief and ship. Our StackCertified process tests for
              exactly that — AI-assisted work, clear communication, and quality
              delivery under deadline pressure.
            </p>
            <ul className="space-y-2 mt-6">
              <li className="flex items-center gap-2">
                <Badge />
                <span className="text-sm font-inter">
                  Role-specific practical tests
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Badge />
                <span className="text-sm font-inter">
                  AI workflow proof required
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Badge />
                <span className="text-sm font-inter">
                  Loom + async communication screening
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Badge />
                <span className="text-sm font-inter">
                  Shareable candidate scorecards
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg relative aspect-video">
            <Image
              src="https://ext.same-assets.com/2688779156/3300813873.jpeg"
              alt="Staff Stack StackCertified Process"
              fill
              className="object-cover"
              unoptimized={true}
              crossOrigin="anonymous"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge() {
  return (
    <div className="p-1 rounded-full bg-white/20">
      <BadgeCheck className="h-4 w-4 text-brand-accent" />
    </div>
  );
}
