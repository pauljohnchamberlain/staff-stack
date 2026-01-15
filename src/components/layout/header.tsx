"use client";

import { motion } from "framer-motion";
import { ChevronDown, Menu, Award, Zap, Shield, Code, Mail, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// For Agencies items
const forAgenciesItems = [
  {
    name: "Retention & Klaviyo",
    description: "Email, SMS, and CRO production capacity",
    href: "/agencies/retention",
    icon: Mail,
  },
  {
    name: "Paid Media Ops",
    description: "Ad ops and creative throughput",
    href: "/agencies/paid-media",
    icon: TrendingUp,
  },
  {
    name: "Shopify Dev",
    description: "Implementation and support capacity",
    href: "/agencies/shopify",
    icon: Code,
  },
];

// The Stack mechanism items
const stackItems = [
  {
    name: "StackCertified",
    description: "AI-Operator certification process",
    href: "/stackcertified",
    icon: Award,
  },
  {
    name: "StackOps",
    description: "Weekly KPIs, QA, and performance coaching",
    href: "/stackops",
    icon: Zap,
  },
  {
    name: "StackGuarantee",
    description: "14-day replacement with clear SLAs",
    href: "/stackguarantee",
    icon: Shield,
  },
];

// How it works items
const howItWorksItems = [
  {
    name: "How It Works",
    href: "/how-it-works",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

// About Us items
const aboutUsItems = [
  {
    name: "About Staff Stack",
    href: "/about",
  },
  {
    name: "What Agencies Say",
    href: "/about/testimonials",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-xs shadow-xs py-3"
          : "bg-white py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {logoError ? (
              <span className="font-lexend font-medium text-2xl tracking-tight text-[#0f2c4a]">
                Staff Stack
              </span>
            ) : (
              <Image
                src="/images/logo.png"
                alt="Staff Stack"
                width={180}
                height={48}
                className="h-[48px] w-auto"
                priority
                onError={() => setLogoError(true)}
              />
            )}
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavTrigger>For Agencies</NavTrigger>
                <NavigationMenuContent>
                  <div className="w-[650px] bg-[#0f2c4a]">
                    <div className="px-5 py-4">
                      <h3 className="text-white font-lexend font-medium tracking-tight">
                        For Agencies
                      </h3>
                    </div>
                    <div className="bg-white p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-[#09d8f5] font-lexend tracking-tight text-xl">
                            Built for your vertical
                          </h3>
                          <h2 className="text-3xl font-lexend text-[#0f2c4a] font-semibold leading-tight">
                            AI-native operators
                            <br />
                            for agencies that
                            <br />
                            need to ship
                          </h2>
                          <p className="text-muted-foreground font-inter mt-4">
                            Pre-certified operators ready in 7 days.
                            <br />
                            More capacity without more chaos.
                          </p>
                          <Link
                            href="/agencies"
                            className="inline-flex items-center text-brand hover:text-brand-light font-lexend font-medium mt-2"
                          >
                            View all agency verticals
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 ml-2"
                            >
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </Link>
                        </div>
                        <div className="flex flex-col justify-center space-y-5">
                          {forAgenciesItems.map((item) => (
                            <Link
                              href={item.href}
                              key={item.name}
                              className="flex items-center gap-3 text-[#0f2c4a] hover:text-[#09d8f5] transition-colors group"
                            >
                              <div className="p-2 rounded-lg bg-brand/10 group-hover:bg-brand/20 transition-colors">
                                <item.icon className="h-5 w-5 text-brand" />
                              </div>
                              <div>
                                <div className="font-lexend font-medium">
                                  {item.name}
                                </div>
                                <div className="text-sm text-muted-foreground font-inter">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavTrigger>The Stack</NavTrigger>
                <NavigationMenuContent>
                  <div className="w-[650px] bg-[#0f2c4a]">
                    <div className="px-5 py-4">
                      <h3 className="text-white font-lexend font-medium tracking-tight">
                        The Stack System
                      </h3>
                    </div>
                    <div className="bg-white p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-[#09d8f5] font-lexend tracking-tight text-xl">
                            Delivery infrastructure
                          </h3>
                          <h2 className="text-3xl font-lexend text-[#0f2c4a] font-semibold leading-tight">
                            We're not a job board.
                            <br />
                            We're your delivery
                            <br />
                            infrastructure.
                          </h2>
                          <p className="text-muted-foreground font-inter mt-4">
                            Certification, operations, and guarantees
                            <br />
                            built to ensure quality delivery.
                          </p>
                        </div>
                        <div className="flex flex-col justify-center space-y-5">
                          {stackItems.map((item) => (
                            <Link
                              href={item.href}
                              key={item.name}
                              className="flex items-center gap-3 text-[#0f2c4a] hover:text-[#09d8f5] transition-colors group"
                            >
                              <div className="p-2 rounded-lg bg-brand/10 group-hover:bg-brand/20 transition-colors">
                                <item.icon className="h-5 w-5 text-brand" />
                              </div>
                              <div>
                                <div className="font-lexend font-medium">
                                  {item.name}
                                </div>
                                <div className="text-sm text-muted-foreground font-inter">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavTrigger>How It Works</NavTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] bg-[#0f2c4a]">
                    <div className="px-5 py-4">
                      <h3 className="text-white font-lexend font-medium tracking-tight">
                        How It Works
                      </h3>
                    </div>
                    <div className="bg-white p-6">
                      <div className="space-y-4">
                        {howItWorksItems.map((item) => (
                          <Link
                            href={item.href}
                            key={item.name}
                            className="flex items-center justify-between text-[#0f2c4a] hover:text-[#09d8f5] transition-colors font-lexend font-medium"
                          >
                            {item.name}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 ml-2"
                            >
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavTrigger>About</NavTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] bg-[#0f2c4a]">
                    <div className="px-5 py-4">
                      <h3 className="text-white font-lexend font-medium tracking-tight">
                        About Us
                      </h3>
                    </div>
                    <div className="bg-white p-6">
                      <div className="space-y-4">
                        {aboutUsItems.map((item) => (
                          <Link
                            href={item.href}
                            key={item.name}
                            className="flex items-center justify-between text-[#0f2c4a] hover:text-[#09d8f5] transition-colors font-lexend font-medium"
                          >
                            {item.name}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 ml-2"
                            >
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-10 rounded-md border-brand text-brand hover:bg-brand/5 font-lexend font-medium"
              asChild
            >
              <Link href="/stackcertified">See StackCertified</Link>
            </Button>
            <Button
              className="h-10 rounded-md bg-brand hover:bg-brand-light text-white font-lexend font-medium"
              asChild
            >
              <Link href="/contact-us">Get Your First Operator</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 py-6">
                <Link href="/" className="flex items-center gap-2">
                  {logoError ? (
                    <span className="font-lexend font-medium text-2xl tracking-tight text-[#0f2c4a]">
                      Staff Stack
                    </span>
                  ) : (
                    <Image
                      src="/images/logo.png"
                      alt="Staff Stack"
                      width={150}
                      height={40}
                      className="h-[40px] w-auto"
                      onError={() => setLogoError(true)}
                    />
                  )}
                </Link>

                <div className="flex flex-col gap-6">
                  <MobileNavSection
                    title="For Agencies"
                    items={forAgenciesItems.map((item) => ({
                      name: item.name,
                      href: item.href,
                    }))}
                  />

                  <MobileNavSection
                    title="The Stack"
                    items={stackItems.map((item) => ({
                      name: item.name,
                      href: item.href,
                    }))}
                  />

                  <MobileNavSection title="How It Works" items={howItWorksItems} />

                  <MobileNavSection title="About" items={aboutUsItems} />

                  <div className="flex flex-col gap-3 mt-4">
                    <Button
                      variant="outline"
                      className="rounded-md border-brand text-brand hover:bg-brand/5 font-lexend font-medium w-full"
                      asChild
                    >
                      <Link href="/stackcertified">See StackCertified</Link>
                    </Button>
                    <Button
                      className="rounded-md bg-brand hover:bg-brand-light text-white font-lexend font-medium w-full"
                      asChild
                    >
                      <Link href="/contact-us">Get Your First Operator</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Helper components to make the code cleaner and more maintainable
function NavTrigger({ children }: { children: React.ReactNode }) {
  return (
    <NavigationMenuTrigger className="bg-transparent text-[#0f2c4a] font-lexend font-medium px-3 py-2">
      <span className="flex items-center gap-1">
        {children}
        <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </span>
    </NavigationMenuTrigger>
  );
}

function MobileNavSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; href: string }[];
}) {
  return (
    <div className="border-b pb-2">
      <h3 className="text-lg font-lexend font-medium mb-2">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground font-lexend"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
