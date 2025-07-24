"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  FileSearch,
  MonitorCheck,
  UserCheck,
  Users,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Define Your Requirements",
    description:
      "You provide us with a job description including skills, experience, and qualifications needed.",
    icon: <FileSearch className="h-6 w-6" />,
    color: "bg-blue-50 text-blue-500",
  },
  {
    id: 2,
    title: "We Recruit & Screen Candidates",
    description:
      "Our talent acquisition team sources qualified candidates who match your requirements.",
    icon: <Users className="h-6 w-6" />,
    color: "bg-teal-50 text-teal-500",
  },
  {
    id: 3,
    title: "Interview & Select",
    description:
      "You interview pre-screened candidates and choose the best fit for your team.",
    icon: <UserCheck className="h-6 w-6" />,
    color: "bg-amber-50 text-amber-500",
  },
  {
    id: 4,
    title: "Onboarding & Support",
    description:
      "We handle all equipment, HR, and facilities while you manage the daily work.",
    icon: <MonitorCheck className="h-6 w-6" />,
    color: "bg-purple-50 text-purple-500",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-lexend font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground font-inter">
            Our proven process for building dedicated remote teams has helped
            over 250+ businesses reduce costs and scale efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-xs relative border border-muted overflow-hidden group hover:border-brand hover:shadow-md transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="flex-none">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4 text-brand">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-lexend font-semibold mb-3">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 grow font-inter">
                  {step.description}
                </p>
                <div className="text-sm font-lexend font-medium text-brand flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-muted/30 rounded-xl p-8 mt-16">
          <h3 className="text-xl font-lexend font-bold mb-6 text-center">
            What's Included in Our Service
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Comprehensive talent sourcing",
              "Rigorous skills assessment",
              "Cultural fit evaluation",
              "Seamless onboarding process",
              "Quality assurance monitoring",
              "Employee benefits and incentives",
              "Security compliance and protocols",
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
        </div>
      </div>
    </section>
  );
}
