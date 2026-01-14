"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const fitItems = [
  "one (or a few) full-time operators you can rely on",
  "proof of execution before you hire",
  "repeatable delivery — not heroics",
];

const notFitItems = [
  "the cheapest possible labor",
  "a dozen resumes by tomorrow",
  'someone to "figure out your process" with zero direction',
];

export function NotForEveryone() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
            Staff Stack isn't for{" "}
            <span className="text-brand">every agency</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* We're a fit */}
          <motion.div
            variants={itemVariants}
            className="bg-green-50 border border-green-100 rounded-xl p-8"
          >
            <h3 className="text-xl font-lexend font-semibold mb-6 text-green-800">
              We're a fit if you want:
            </h3>
            <ul className="space-y-4">
              {fitItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-500 shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-base font-inter text-green-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* We're not a fit */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 border border-slate-200 rounded-xl p-8"
          >
            <h3 className="text-xl font-lexend font-semibold mb-6 text-slate-700">
              We're not a fit if you want:
            </h3>
            <ul className="space-y-4">
              {notFitItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-slate-400 shrink-0 mt-0.5">
                    <X className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-base font-inter text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-muted-foreground font-inter"
        >
          If that honesty saves you a bad hire, it's doing its job.
        </motion.p>
      </div>
    </section>
  );
}
