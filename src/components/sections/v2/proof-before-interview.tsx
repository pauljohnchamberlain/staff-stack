"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ClipboardList,
  FileText,
  Video,
  Workflow,
  Wrench,
} from "lucide-react";

const proofItems = [
  {
    id: "deliverable",
    icon: FileText,
    text: "the deliverable from a timed, role-specific practical test",
  },
  {
    id: "qa",
    icon: ClipboardList,
    text: "the QA checklist they used (or missed)",
  },
  {
    id: "loom",
    icon: Video,
    text: "a 2-minute Loom update (how they communicate async)",
  },
  {
    id: "ai-workflow",
    icon: Workflow,
    text: "an AI workflow trace (prompt → output → edits → final)",
  },
  {
    id: "tools",
    icon: Wrench,
    text: "a tool fluency checklist for your vertical",
  },
];

export function ProofBeforeInterview() {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
            Proof before the interview{" "}
            <span className="text-muted-foreground font-normal text-2xl md:text-3xl">
              (not after the first invoice)
            </span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter mb-8">
            Most hiring processes ask you to <em>guess</em> if someone can
            deliver. We'd rather show you.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <p className="text-lg font-inter mb-6">
              Before you interview anyone, you'll see:
            </p>

            <motion.ul
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {proofItems.map((item) => (
                <motion.li
                  key={item.id}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <div className="p-2 rounded-lg bg-brand/10 shrink-0">
                    <item.icon className="h-5 w-5 text-brand" />
                  </div>
                  <span className="text-base font-inter pt-1.5">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-6 border-t flex items-center gap-2"
            >
              <CheckCircle className="h-5 w-5 text-brand" />
              <p className="text-base font-inter text-muted-foreground">
                If it's not in the scorecard, it's not a claim we expect you to
                believe.
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center text-sm text-muted-foreground font-inter"
          >
            Get a shortlist in 7 days (most roles). No resume flood.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
