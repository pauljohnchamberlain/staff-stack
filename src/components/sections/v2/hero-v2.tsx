"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroV2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefitItems = [
    {
      id: "certified",
      text: "StackCertified operators pass role-specific tests before placement",
    },
    {
      id: "speed",
      text: "Ready in 7 days with 14-day replacement guarantee",
    },
    {
      id: "systems",
      text: "Weekly KPI reviews + QA checklists + SOP library included",
    },
    {
      id: "ai",
      text: "AI workflow proof: every hire demonstrates prompt-to-deliverable competence",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-dark via-brand to-brand-light text-white">
      <div className="container relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full"
              variants={itemVariants}
            >
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <span className="text-sm font-medium font-inter">
                AI-Native Certified Staff
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-lexend font-bold leading-tight"
              variants={itemVariants}
            >
              Stop hiring satisfactory.{" "}
              <span className="text-brand-accent">Hire operators who ship.</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl opacity-90 max-w-xl font-inter"
              variants={itemVariants}
            >
              AI-native delivery staff for agencies — onboarded, tested, and
              ready in 7 days. More client capacity without more chaos.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white font-lexend font-medium"
                asChild
              >
                <Link href="/contact-us">Get a Shortlist</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 font-lexend font-medium"
                asChild
              >
                <Link href="/stackcertified">See a Scorecard</Link>
              </Button>
            </motion.div>

            <motion.p
              className="text-sm opacity-70 font-inter"
              variants={itemVariants}
            >
              Two-minute brief. We respond with next steps.
            </motion.p>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-lexend font-medium mb-3">
                Why Agencies Choose Staff Stack:
              </h3>
              <ul className="space-y-2">
                {benefitItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="flex items-center gap-2"
                    variants={itemVariants}
                  >
                    <div className="rounded-full bg-brand-accent/20 p-1 shrink-0">
                      <Check className="h-3 w-3 text-brand-accent" />
                    </div>
                    <span className="text-sm md:text-base font-inter">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-white/10 backdrop-blur-xs rounded-2xl p-8 shadow-lg">
              <Image
                src="/images/staff-stack-hero.png"
                alt="Staff Stack AI-Native Operators"
                width={600}
                height={450}
                className="w-full h-auto object-contain"
                priority
                crossOrigin="anonymous"
              />
              <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-[90%] bg-white/90 rounded-lg p-4 text-brand-dark text-center backdrop-blur-xs shadow-lg">
                <p className="font-lexend font-medium text-sm mb-2">
                  Built for Retention, Paid Media & Shopify Agencies
                </p>
                <div className="flex justify-center gap-1 text-xs text-muted-foreground font-inter">
                  <span>Klaviyo Ops</span>
                  <span>•</span>
                  <span>Media Buying</span>
                  <span>•</span>
                  <span>Shopify Dev</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
