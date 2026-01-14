"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  ClipboardCheck,
  Rocket,
  UserSearch,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Tell Us Your Role",
    description:
      "Share the role you need — Klaviyo builder, ad ops assistant, Shopify developer, or any agency operator position.",
    icon: <UserSearch className="h-6 w-6" />,
    color: "bg-purple-50 text-purple-500",
  },
  {
    id: 2,
    title: "We Match & Certify",
    description:
      "We source candidates and put them through StackCertified testing — role-specific practical tests, AI workflow proof, and communication simulation.",
    icon: <Award className="h-6 w-6" />,
    color: "bg-blue-50 text-blue-500",
  },
  {
    id: 3,
    title: "You Review & Select",
    description:
      "Interview pre-certified operators with their scorecard in hand. See test results, sample outputs, and tool fluency before you decide.",
    icon: <ClipboardCheck className="h-6 w-6" />,
    color: "bg-green-50 text-green-500",
  },
  {
    id: 4,
    title: "Operator Ships in 7 Days",
    description:
      "Your StackCertified operator starts with onboarding complete, weekly KPI check-ins, and our 14-day replacement guarantee.",
    icon: <Rocket className="h-6 w-6" />,
    color: "bg-brand-accent/10 text-brand-accent",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-white" id="component-how-it-works">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-lexend font-bold mb-4">
            From Role Request to Shipping Work
          </h2>
          <p className="text-muted-foreground font-inter">
            Our StackCertified process ensures every operator is tested, proven,
            and ready to deliver — not just "qualified" on paper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm relative border border-muted overflow-hidden group hover:border-brand hover:shadow-md transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="flex-none">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-lexend font-bold text-brand bg-brand/10 w-7 h-7 rounded-full flex items-center justify-center">
                      {step.id}
                    </span>
                    <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-lexend font-semibold mb-3">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 grow font-inter">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-muted/30 rounded-xl p-8 mt-16">
          <h3 className="text-xl font-lexend font-bold mb-6 text-center">
            What's Included with Every StackSeat
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "StackCertified operator (role-tested)",
              "7-day onboarding included",
              "Weekly KPI check-ins",
              "QA checklist library access",
              "14-day replacement guarantee",
              "Escalation support from our team",
              "Performance coaching & feedback",
            ].map((item, idx) => (
              <motion.div
                key={`service-${item.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-none">
                  <div className="h-6 w-6 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                    <Check className="h-3 w-3" />
                  </div>
                </div>
                <p className="text-muted-foreground font-inter">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/stackcertified"
              className="text-brand font-lexend font-medium inline-flex items-center hover:underline"
            >
              Learn about StackCertified process
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
