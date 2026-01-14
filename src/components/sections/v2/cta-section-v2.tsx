"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSectionV2() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-linear-to-r from-brand to-brand-light rounded-2xl text-white overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6 leading-tight">
                  Need execution capacity{" "}
                  <span className="text-brand-accent">next week?</span>
                </h2>

                <p className="text-lg mb-8 max-w-xl mx-auto text-white/90 font-inter">
                  Tell us the role and your delivery standard. We'll send
                  pre-certified operators with scorecards — so you can hire with
                  evidence, not hope.
                </p>

                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-brand font-lexend font-medium"
                  asChild
                >
                  <Link href="/contact-us">
                    Get Your First Operator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <p className="mt-6 text-sm text-white/70 font-inter">
                  Two-minute brief. We respond with next steps.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
