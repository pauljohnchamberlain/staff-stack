"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  Globe,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    id: "cost",
    icon: TrendingUp,
    title: "Cost Efficiency",
    description:
      "Save up to 70% on labor costs compared to hiring locally, without sacrificing quality.",
  },
  {
    id: "talent",
    icon: BadgeCheck,
    title: "Superior Talent",
    description:
      "Access to highly skilled professionals with degrees, certifications, and industry experience.",
  },
  {
    id: "speed",
    icon: Zap,
    title: "Quick Scaling",
    description:
      "Rapidly expand your team with pre-vetted professionals ready to start within weeks.",
  },
  {
    id: "global",
    icon: Globe,
    title: "Global Presence",
    description:
      "Establish your brand's international presence with 24/7 operational capabilities.",
  },
  {
    id: "time",
    icon: Clock,
    title: "Dedicated Full-Time Staff",
    description:
      "Your team works exclusively for you, not juggling multiple clients like freelancers.",
  },
  {
    id: "security",
    icon: Shield,
    title: "Risk Management",
    description:
      "ISO-certified security protocols and infrastructure to protect your sensitive data.",
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
            Why Companies <span className="text-brand">Choose Staff Stack</span>{" "}
            in the Philippines
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            We provide end-to-end solutions for building your offshore team with
            all the infrastructure and management handled for you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 rounded-full bg-brand/10 w-fit">
                    <reason.icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-lexend font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground font-inter">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
              Quality That Exceeds Expectations
            </h3>
            <p className="text-muted-foreground font-inter">
              Staff Stack's ISO-certified quality assurance processes ensure
              consistent excellence across all our staffing solutions. We invest
              heavily in infrastructure, training, and retention to deliver the
              highest standards in the industry.
            </p>
            <ul className="space-y-2 mt-6">
              <li className="flex items-center gap-2">
                <Badge />
                <span className="text-sm font-inter">ISO 9001:2015</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge />
                <span className="text-sm font-inter">ISO 27001</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge />
                <span className="text-sm font-inter">Great Place to Work®</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge />
                <span className="text-sm font-inter">GDPR Compliant</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg relative aspect-video">
            <Image
              src="https://ext.same-assets.com/2688779156/3300813873.jpeg"
              alt="Modern Staff Stack office interior"
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
