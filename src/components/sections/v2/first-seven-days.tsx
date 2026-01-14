"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  CheckSquare,
  ClipboardCheck,
  FileBarChart,
  Settings,
  Users,
} from "lucide-react";

const days = [
  {
    id: "day-0",
    day: "Day 0",
    title: "Intake",
    description:
      "You share the role + examples of \"good work.\" We align on tools, hours, and KPIs.",
    icon: Briefcase,
  },
  {
    id: "day-1",
    day: "Day 1",
    title: "Onboarding",
    description:
      "Your operator is set up in your tools, briefed on your SOPs, and given a first task bundle.",
    icon: Users,
  },
  {
    id: "day-2-3",
    day: "Day 2–3",
    title: "First outputs",
    description:
      "They ship real work. Not training tasks. We review quality against checklists.",
    icon: CheckSquare,
  },
  {
    id: "day-4-5",
    day: "Day 4–5",
    title: "QA + refinement",
    description:
      "We tighten the workflow: templates, naming conventions, revision loops, escalation rules.",
    icon: Settings,
  },
  {
    id: "day-6",
    day: "Day 6",
    title: "KPI baseline",
    description:
      "You get a simple baseline: throughput, turnaround time, QA error rate, communication quality.",
    icon: FileBarChart,
  },
  {
    id: "day-7",
    day: "Day 7",
    title: "Stable week-one cadence",
    description:
      'You should know: "Can this person take briefs and ship, without chasing?"',
    icon: ClipboardCheck,
  },
];

export function FirstSevenDays() {
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
    <section className="py-20 bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
            What the first <span className="text-brand">7 days</span> looks like
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            From intake to stable delivery cadence — here's what happens.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand/20 hidden md:block" />

            <div className="space-y-6">
              {days.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex shrink-0 w-16 justify-center">
                    <div className="relative z-10 w-4 h-4 rounded-full bg-brand border-4 border-white shadow-sm" />
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-brand/10 shrink-0">
                        <item.icon className="h-5 w-5 text-brand" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-lexend font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded">
                            {item.day}
                          </span>
                          <h3 className="text-lg font-lexend font-semibold">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground font-inter">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center text-sm text-muted-foreground font-inter max-w-xl mx-auto"
        >
          If a role is unusually specialized, we'll tell you upfront if it needs
          longer than a week.
        </motion.p>
      </div>
    </section>
  );
}
