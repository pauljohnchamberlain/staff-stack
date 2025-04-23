"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-brand to-brand-light rounded-2xl text-white overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6 leading-tight">
                  Build Your Remote Team <br className="hidden md:block" />
                  <span className="text-brand-accent">Today</span>
                </h2>

                <p className="text-lg mb-8 max-w-2xl text-white/90 font-inter">
                  Ready to tap into the Philippine talent pool and reduce costs
                  while maintaining quality? We'll help you find the perfect
                  professionals for your team.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-accent mt-1" />
                    <div>
                      <h3 className="font-lexend font-semibold text-sm mb-1">Call Us</h3>
                      <p className="text-sm text-white/80 font-inter">+63 2 8791 7462</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand-accent mt-1" />
                    <div>
                      <h3 className="font-lexend font-semibold text-sm mb-1">Email Us</h3>
                      <p className="text-sm text-white/80 font-inter">
                        info@staffstack.com
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-start gap-3">
                    <CalendarClock className="h-5 w-5 text-brand-accent mt-1" />
                    <div>
                      <h3 className="font-lexend font-semibold text-sm mb-1">
                        Schedule Call
                      </h3>
                      <p className="text-sm text-white/80 font-inter">
                        Book a free consultation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/90 text-brand font-lexend font-medium"
                    asChild
                  >
                    <Link href="/contact-us">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 font-lexend font-medium"
                    asChild
                  >
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground font-inter">
              Staff Stack serves clients worldwide, providing flexible staff
              augmentation solutions.
              <br />
              Learn more about{" "}
              <Link href="/about" className="text-brand hover:underline font-lexend">
                how we work
              </Link>{" "}
              or{" "}
              <Link href="/contact-us" className="text-brand hover:underline font-lexend">
                contact us
              </Link>{" "}
              with any questions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
