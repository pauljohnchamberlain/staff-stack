"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Services",
    items: [
      { name: "IT & Development", href: "/services#it-development" },
      { name: "Creative & Design", href: "/services#creative-design" },
      { name: "Customer Service", href: "/services#customer-service" },
      { name: "Digital Marketing", href: "/services#digital-marketing" },
      { name: "Finance & Accounting", href: "/services#finance-accounting" },
      { name: "Virtual Assistants", href: "/services#virtual-assistants" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/jobs" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Industries",
    items: [
      { name: "Technology", href: "/industries#technology" },
      { name: "Finance", href: "/industries#finance" },
      { name: "Healthcare", href: "/industries#healthcare" },
      { name: "E-commerce", href: "/industries#ecommerce" },
      { name: "Real Estate", href: "/industries#realestate" },
      { name: "Legal", href: "/industries#legal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand and Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-lexend font-medium text-2xl tracking-tight text-white">
                Staff Stack
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md font-inter">
              Your trusted partner for building dedicated offshore teams in the
              Philippines. We handle the complexities while you focus on growth.
            </p>
            <div className="space-y-2 text-slate-400 font-inter">
              <p>
                <strong className="text-white font-lexend">Email:</strong>{" "}
                support@staffstack.co
              </p>
              <p>
                <strong className="text-white font-lexend">Phone:</strong> +1
                (800) 123-4567
              </p>
              <p>
                <strong className="text-white font-lexend">Address:</strong>{" "}
                18th Floor, Citibank Square, Eastwood City, Quezon City,
                Philippines
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
        <div className="flex items-center justify-between pt-8 pb-8 border-t border-border">
          <span className="font-lexend">
            © 2025 Staff Stack. All rights reserved.
          </span>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
