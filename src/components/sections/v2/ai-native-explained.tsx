"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Lightbulb, Shield } from "lucide-react";

const lookForItems = [
  {
    id: "plan",
    icon: Lightbulb,
    text: "turn a messy brief into a clean plan (and ask the right questions early)",
  },
  {
    id: "verify",
    icon: CheckCircle,
    text: "use AI to draft faster, then verify and improve before shipping",
  },
  {
    id: "document",
    icon: AlertCircle,
    text: "document decisions and edge cases so work doesn't get lost in Slack",
  },
  {
    id: "escalate",
    icon: Shield,
    text: "escalate blockers with context (not panic, not silence)",
  },
];

export function AINativeExplained() {
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
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
              "AI-native" doesn't mean{" "}
              <span className="text-brand">"let the model do it"</span>
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              AI-native operators aren't magic. They're disciplined.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <div className="md:col-span-2">
              <p className="text-lg font-inter text-center mb-6">
                We look for people who can:
              </p>
            </div>
            {lookForItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl"
              >
                <div className="p-2 rounded-lg bg-brand/10 shrink-0">
                  <item.icon className="h-5 w-5 text-brand" />
                </div>
                <p className="text-base font-inter">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-muted-foreground font-inter mb-8"
          >
            In certification, we score for verification and judgment — not just
            speed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-brand/5 border border-brand/20 rounded-xl p-6 text-center"
          >
            <p className="text-lg font-lexend font-medium text-brand">
              AI is part of the workflow. QA is the guardrail.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
