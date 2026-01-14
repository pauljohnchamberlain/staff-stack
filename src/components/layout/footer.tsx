"use client";

import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "For Agencies",
    items: [
      { name: "Retention & Klaviyo", href: "/agencies/retention" },
      { name: "Paid Media Ops", href: "/agencies/paid-media" },
      { name: "Shopify Dev", href: "/agencies/shopify" },
      { name: "All Agency Verticals", href: "/agencies" },
    ],
  },
  {
    title: "The Stack",
    items: [
      { name: "StackCertified", href: "/stackcertified" },
      { name: "StackOps", href: "/stackops" },
      { name: "StackGuarantee", href: "/stackguarantee" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "About Us", href: "/about" },
      { name: "What Agencies Say", href: "/about/testimonials" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand and Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-lexend font-medium text-2xl tracking-tight text-white">
                Staff Stack
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md font-inter">
              Delivery infrastructure for agencies. StackCertified operators,
              StackOps quality systems, StackGuarantee peace of mind.
            </p>
            <div className="bg-brand/10 border border-brand/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-300 font-inter">
                <span className="text-brand-accent font-medium">
                  AI-native operators
                </span>{" "}
                — onboarded, tested, and ready in 7 days. More client capacity
                without more chaos.
              </p>
            </div>
            <div className="space-y-2 text-slate-400 font-inter">
              <p>
                <strong className="text-white font-lexend">Email:</strong>{" "}
                hello@staffstack.co
              </p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-lexend font-medium text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors font-lexend font-normal"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 pb-8 border-t border-slate-800">
          <span className="font-lexend text-slate-400 text-sm">
            © 2025 Staff Stack. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-white text-sm font-lexend transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-white text-sm font-lexend transition-colors"
            >
              Terms of Service
            </Link>
            <div className="flex space-x-4 ml-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
