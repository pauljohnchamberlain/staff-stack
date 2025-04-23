"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
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
    { id: "cost", text: "Up to 70% cost savings compared to local hires" },
    { id: "language", text: "English-fluent, college-educated professionals" },
    {
      id: "dedicated",
      text: "Dedicated full-time team members, not contractors",
    },
    { id: "quality", text: "ISO-certified quality assurance process" },
    { id: "infrastructure", text: "Fully managed office infrastructure" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white">
      <div className="container relative z-10 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-lexend font-bold"
              variants={itemVariants}
            >
              Build Your <span className="text-brand-accent">Offshore</span>{" "}
              Team in the Philippines
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl opacity-90 max-w-xl font-inter"
              variants={itemVariants}
            >
              Access top Filipino talent to reduce costs while maintaining
              quality. Staff Stack provides dedicated remote professionals with
              all the infrastructure handled for you.
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
                <Link href="/contact-us">Get Started Today</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 font-lexend font-medium"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-lexend font-medium mb-3">
                Why Companies Choose Us:
              </h3>
              <ul className="space-y-2">
                {benefitItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="flex items-center gap-2"
                    variants={itemVariants}
                  >
                    <div className="rounded-full bg-brand-accent/20 p-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-brand-accent" />
                    </div>
                    <span className="text-sm md:text-base font-inter">{item.text}</span>
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
            {/* Replace with the new team illustration image */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <Image
                src="/images/team-illustration.png"
                alt="Staff Stack Team Illustration"
                width={600}
                height={450}
                className="w-full h-auto object-contain"
                priority
                crossOrigin="anonymous"
              />
              <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-[90%] bg-white/90 rounded-lg p-4 text-brand-dark text-center backdrop-blur-sm shadow-lg">
                <p className="font-lexend font-medium text-sm mb-2">
                  Join 250+ companies with staff in the Philippines
                </p>
                <div className="flex justify-center gap-1 text-xs text-muted-foreground font-inter">
                  <span>Customer Support</span>
                  <span>•</span>
                  <span>Software Development</span>
                  <span>•</span>
                  <span>Admin</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
