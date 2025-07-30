"use client";

import { motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

// Update Why outsourced items to match the screenshot
const whyOutsourcedItems = [
  {
    name: "20 reasons why Outsourced",
    href: "/why-outsourced/reasons",
  },
  {
    name: "Great place to work",
    href: "/why-outsourced/workplace",
  },
  {
    name: "Why The Philippines?",
    href: "/why-outsourced/philippines",
  },
  {
    name: "Benefits of outsourcing",
    href: "/why-outsourced/benefits",
  },
];

// Industries items
const industriesLeftItems = [
  {
    name: "Hire talent in your industry",
    href: "/industries/overview",
  },
  {
    name: "Administration & Support",
    href: "/industries/administration",
  },
  {
    name: "Hospitality & Tourism",
    href: "/industries/hospitality",
  },
  {
    name: "Real Estate Services",
    href: "/industries/real-estate",
  },
  {
    name: "Education & Training",
    href: "/industries/education",
  },
  {
    name: "Information Technology",
    href: "/industries/information-technology",
  },
  {
    name: "Retail Trade & E-Commerce",
    href: "/industries/retail",
  },
  {
    name: "Engineering & Construction",
    href: "/industries/engineering",
  },
  {
    name: "Professional Services",
    href: "/industries/professional-services",
  },
];

const industriesRightItems = [
  {
    name: "Information Media & Telecommunications",
    href: "/industries/telecommunications",
  },
  {
    name: "Transport, Postal & Warehousing",
    href: "/industries/transport",
  },
  {
    name: "Financial & Insurance Services",
    href: "/industries/financial",
  },
  {
    name: "Mining",
    href: "/industries/mining",
  },
  {
    name: "Utilities",
    href: "/industries/utilities",
  },
  {
    name: "Health Care",
    href: "/industries/healthcare",
  },
  {
    name: "Legal services",
    href: "/industries/legal",
  },
  {
    name: "Wholesale Trade",
    href: "/industries/wholesale",
  },
];

// About Us items
const aboutUsItems = [
  {
    name: "About Outsourced",
    href: "/about",
  },
  {
    name: "Corporate Timeline",
    href: "/about/timeline",
  },
  {
    name: "Our People",
    href: "/about/our-people",
  },
  {
    name: "Social responsibility",
    href: "/about/social-responsibility",
  },
  {
    name: "What our clients say",
    href: "/about/testimonials",
  },
  {
    name: "Core Values",
    href: "/about/core-values",
  },
];

// How it works items
const howItWorksLeftItems = [
  {
    name: "How it works",
    href: "/how-it-works",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Recruitment",
    href: "/recruitment",
  },
  {
    name: "Human Resources",
    href: "/human-resources",
  },
  {
    name: "Offices & Facilities",
    href: "/offices",
  },
  {
    name: "Training & Development",
    href: "/training",
  },
];

const howItWorksRightItems = [
  {
    name: "Home Based Staff",
    href: "/staff/home-based",
  },
  {
    name: "Office Based Teams",
    href: "/staff/office-based",
  },
  {
    name: "Hybrid Staff",
    href: "/staff/hybrid",
  },
  {
    name: "ISO Data Security",
    href: "/security",
  },
  {
    name: "How to succeed offshore",
    href: "/succeed-offshore",
  },
];

// Roles items
const rolesLeftItems = [
  {
    name: "IT & Development",
    href: "/roles/it-development",
  },
  {
    name: "CX & Contact Center",
    href: "/roles/contact-center",
  },
  {
    name: "Professional Services",
    href: "/roles/professional-services",
  },
  {
    name: "Creative & Design",
    href: "/roles/creative-design",
  },
  {
    name: "Marketing",
    href: "/roles/marketing",
  },
  {
    name: "Healthcare & Medical",
    href: "/roles/healthcare",
  },
];

const rolesRightItems = [
  {
    name: "Admin Support",
    href: "/roles/admin-support",
  },
  {
    name: "Finance & Accounting",
    href: "/roles/finance-accounting",
  },
  {
    name: "Education & Training",
    href: "/roles/education-training",
  },
  {
    name: "Engineering & Architecture",
    href: "/roles/engineering-architecture",
  },
  {
    name: "Legal Services",
    href: "/roles/legal",
  },
  {
    name: "Artificial Intelligence",
    href: "/roles/ai",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <span className="font-lexend font-medium text-2xl tracking-tight text-[#0f2c4a]">
              Staff Stack
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavTrigger>Why outsourced</NavTrigger>
                <NavigationMenuContent>
                  <div className="w-[750px] bg-[#0f2c4a]">
                    <div className="px-5 py-4">
                      <h3 className="text-white font-lexend font-medium tracking-tight">
                        Why outsourced
                      </h3>
                    </div>
                    <div className="bg-white p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-[#09d8f5] font-lexend tracking-tight text-xl">
                            Recruitment. Facilities. HR
                          </h3>
                          <h2 className="text-4xl font-lexend text-[#0f2c4a] font-semibold leading-tight">
                            Hire full time,
                            <br />
                            dedicated staff for
                            <br />
                            your business
                          </h2>
                          <p className="text-muted-foreground font-inter mt-4">
                            We are your offshore recruitment partner.
                            <br />
                            We find, you hire, we manage.
                          </p>
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                          {whyOutsourcedItems.map((item) => (
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
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavTrigger>Industries</NavTrigger>
                <NavigationMenuContent>
                  <div className="w-[750px] bg-[#0f2c4a]">
                    <div className="px-5 py-4">
                      <h3 className="text-white font-lexend font-medium tracking-tight">
                        Industries
                      </h3>
                    </div>
                    <div className="bg-white p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-[#09d8f5] font-lexend tracking-tight text-xl">
                            Large and small teams
                          </h3>
                          <h2 className="text-4xl font-lexend text-[#0f2c4a] font-semibold leading-tight">
                            Dedicated teams with
                            <br />
                            experience across
                            <br />
                            every industry
                          </h2>
                          <p className="text-muted-foreground font-inter mt-4">
                            Highly skilled, English speaking, qualified talent
                            to build your team
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-y-5 gap-x-6">
                          <div className="space-y-5">
                            {industriesLeftItems.map((item) => (
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
                          <div className="space-y-5">
                            {industriesRightItems.map((item) => (
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
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavTrigger>Roles</NavTrigger>
                <NavigationMenuContent>
                  <div className="w-[750px] bg-[#0f2c4a]">
                    <div className="px-5 py-4">
                      <h3 className="text-white font-lexend font-medium tracking-tight">
                        Roles
                      </h3>
                    </div>
                    <div className="bg-white p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-[#09d8f5] font-lexend tracking-tight text-xl">
                            Large and small teams
                          </h3>
                          <h2 className="text-4xl font-lexend text-[#0f2c4a] font-semibold leading-tight">
                            World class talent for
                            <br />
                            any role
                          </h2>
                          <p className="text-muted-foreground font-inter mt-4">
                            Highly skilled, English speaking, qualified talent
                            to build your team
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-y-5 gap-x-6">
                          <div className="space-y-5">
                            {rolesLeftItems.map((item) => (
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
                          <div className="space-y-5">
                            {rolesRightItems.map((item) => (
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
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavTrigger>How it works</NavTrigger>
                <NavigationMenuContent>
                  <div className="w-[750px] bg-[#0f2c4a]">
                    <div className="px-5 py-4">
                      <h3 className="text-white font-lexend font-medium tracking-tight">
                        How it works
                      </h3>
                    </div>
                    <div className="bg-white p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-[#09d8f5] font-lexend tracking-tight text-xl">
                            We make it simple
                          </h3>
                          <h2 className="text-4xl font-lexend text-[#0f2c4a] font-semibold leading-tight">
                            Build your team from
                            <br />
                            the top 1% of talent.
                          </h2>
                          <p className="text-muted-foreground font-inter mt-4">
                            Our unique recruitment process has been paramount to
                            our offshore staffing success and how we've become a
                            leading Philippines Staff Outsourcing provider.
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-y-5 gap-x-6">
                          <div className="space-y-5">
                            {howItWorksLeftItems.map((item) => (
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
                          <div className="space-y-5">
                            {howItWorksRightItems.map((item) => (
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
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavTrigger>About us</NavTrigger>
                <NavigationMenuContent>
                  <div className="w-[750px] bg-[#0f2c4a]">
                    <div className="px-5 py-4">
                      <h3 className="text-white font-lexend font-medium tracking-tight">
                        About us
                      </h3>
                    </div>
                    <div className="bg-white p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-[#09d8f5] font-lexend tracking-tight text-xl">
                            Recruitment. Facilities. HR
                          </h3>
                          <h2 className="text-4xl font-lexend text-[#0f2c4a] font-semibold leading-tight">
                            The team behind
                            <br />
                            your quality
                            <br />
                            offshore staffing
                          </h2>
                          <p className="text-muted-foreground font-inter mt-4">
                            We are your offshore recruitment partner. We find,
                            you hire, we manage.
                          </p>
                        </div>
                        <div className="space-y-5">
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
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <Button
              className="h-10 rounded-md border border-[#09d8f5] bg-white hover:bg-gray-50 text-[#0f2c4a] font-lexend font-medium"
              asChild
            >
              <Link href="/jobs">We're hiring</Link>
            </Button>
            <Button
              className="h-10 rounded-md bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend font-medium"
              asChild
            >
              <Link href="/contact-us">Contact us</Link>
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
                  <span className="font-lexend font-medium text-2xl tracking-tight text-[#0f2c4a]">
                    Staff Stack
                  </span>
                </Link>

                <div className="flex flex-col gap-6">
                  <div className="border-b pb-2">
                    <h3 className="text-lg font-lexend font-medium mb-2">
                      Why outsourced
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {whyOutsourcedItems.map((item) => (
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

                  <div className="border-b pb-2">
                    <h3 className="text-lg font-lexend font-medium mb-2">
                      Industries
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {[...industriesLeftItems, ...industriesRightItems].map(
                        (item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground font-lexend"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="border-b pb-2">
                    <h3 className="text-lg font-lexend font-medium mb-2">
                      Roles
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {[...rolesLeftItems, ...rolesRightItems].map((item) => (
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

                  <div className="border-b pb-2">
                    <h3 className="text-lg font-lexend font-medium mb-2">
                      How it works
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {[...howItWorksLeftItems, ...howItWorksRightItems].map(
                        (item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground font-lexend"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="border-b pb-2">
                    <h3 className="text-lg font-lexend font-medium mb-2">
                      About us
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {aboutUsItems.map((item) => (
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

                  <div className="flex flex-col gap-3 mt-4">
                    <Button
                      className="rounded-md border border-[#09d8f5] bg-white hover:bg-gray-50 text-[#0f2c4a] font-lexend font-medium w-full"
                      asChild
                    >
                      <Link href="/jobs">We're hiring</Link>
                    </Button>
                    <Button
                      className="rounded-md bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend font-medium w-full"
                      asChild
                    >
                      <Link href="/contact-us">Contact us</Link>
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

function NavContentItem({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="block transition-colors">
          <div className="text-base font-lexend font-medium text-[#0f2c4a]">
            {name}
          </div>
          <p className="text-sm text-muted-foreground mt-1 font-inter">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function NavItem({
  trigger,
  items,
  isGridLayout = false,
}: {
  trigger: string;
  items: { name: string; description: string; href: string }[];
  isGridLayout?: boolean;
}) {
  return (
    <NavigationMenuItem>
      <NavTrigger>{trigger}</NavTrigger>
      <NavigationMenuContent>
        <div className="w-[600px] bg-[#0f2c4a]">
          <div className="px-5 py-4">
            <h3 className="text-white font-lexend font-medium tracking-tight">
              {trigger}
            </h3>
          </div>
          <div className="bg-white p-5">
            <ul
              className={cn(
                "grid gap-4",
                isGridLayout ? "grid-cols-2" : "grid-cols-1",
              )}
            >
              {items.map((item) => (
                <NavContentItem
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </ul>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
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
