"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  HardHat,
  Headphones,
  HeartPulse,
  LineChart,
  Mail,
  Monitor,
  Paintbrush,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "it",
    name: "Information Technology",
    icon: Monitor,
    color: "bg-blue-100 text-blue-600",
    description:
      "Technical specialists for software development, web applications, and IT systems support.",
    roles: [
      "Full Stack Developer",
      "DevOps Engineer",
      "UI/UX Designer",
      "QA Tester",
      "Database Administrator",
      "Data Scientist",
      "IT Support Specialist",
      "System Administrator",
    ],
  },
  {
    id: "creative",
    name: "Creative & Design",
    icon: Paintbrush,
    color: "bg-purple-100 text-purple-600",
    description:
      "Creative professionals to elevate your brand's visual appeal and content strategy.",
    roles: [
      "Graphic Designer",
      "Content Writer",
      "Video Editor",
      "Animator",
      "Illustrator",
      "Social Media Designer",
      "Presentation Designer",
      "3D Modeler",
    ],
  },
  {
    id: "customer",
    name: "Customer Service",
    icon: Headphones,
    color: "bg-green-100 text-green-600",
    description:
      "Support teams to handle customer inquiries, technical support, and service excellence.",
    roles: [
      "Customer Support Representative",
      "Technical Support Specialist",
      "Help Desk Analyst",
      "Live Chat Agent",
      "Email Support Specialist",
      "Customer Success Manager",
      "Account Manager",
      "Multilingual Support",
    ],
  },
  {
    id: "finance",
    name: "Finance & Accounting",
    icon: Calculator,
    color: "bg-amber-100 text-amber-600",
    description:
      "Financial experts to manage accounting, bookkeeping, and financial analysis.",
    roles: [
      "Accountant",
      "Bookkeeper",
      "Financial Analyst",
      "Accounts Payable Specialist",
      "Accounts Receivable Specialist",
      "Tax Specialist",
      "Payroll Administrator",
      "Auditor",
    ],
  },
  {
    id: "marketing",
    name: "Digital Marketing",
    icon: LineChart,
    color: "bg-red-100 text-red-600",
    description:
      "Marketing professionals to grow your online presence and drive customer acquisition.",
    roles: [
      "SEO Specialist",
      "PPC Campaign Manager",
      "Social Media Manager",
      "Content Marketer",
      "Email Marketing Specialist",
      "Marketing Analyst",
      "Growth Hacker",
      "CRM Specialist",
    ],
  },
  {
    id: "admin",
    name: "Virtual Assistants",
    icon: Mail,
    color: "bg-sky-100 text-sky-600",
    description:
      "Administrative support staff to handle everyday tasks and keep your business organized.",
    roles: [
      "Executive Assistant",
      "Admin Assistant",
      "Data Entry Specialist",
      "Research Assistant",
      "Travel Coordinator",
      "Calendar Management",
      "Email Management",
      "Project Coordinator",
    ],
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: BarChart3,
    color: "bg-teal-100 text-teal-600",
    description:
      "Specialized professionals for legal, HR, and business operations support.",
    roles: [
      "HR Assistant",
      "Recruitment Specialist",
      "Legal Assistant",
      "Compliance Officer",
      "Business Analyst",
      "Project Manager",
      "Operations Coordinator",
      "Corporate Trainer",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare Support",
    icon: HeartPulse,
    color: "bg-rose-100 text-rose-600",
    description:
      "Healthcare administrative staff to support your medical practice operations.",
    roles: [
      "Medical Transcriptionist",
      "Medical Billing Specialist",
      "Insurance Verification",
      "Medical Records Specialist",
      "Healthcare Coordinator",
      "Patient Care Coordinator",
      "Medical Administrative Assistant",
      "Telemedicine Coordinator",
    ],
  },
  {
    id: "engineering",
    name: "Engineering & Architecture",
    icon: HardHat,
    color: "bg-indigo-100 text-indigo-600",
    description:
      "Technical experts in engineering, design, and architectural support.",
    roles: [
      "CAD Designer",
      "Architectural Draftsman",
      "Civil Engineering Assistant",
      "Mechanical Designer",
      "Structural Modeler",
      "Energy Analyst",
      "BIM Specialist",
      "Electrical Designer",
    ],
  },
];

export function ServiceCategories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4">
            Offshore Staffing <span className="text-brand">Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            There are hundreds of roles we can recruit for you in the
            Philippines. Below is a list of some of the most popular ones that
            clients request.
          </p>
        </motion.div>

        <Tabs defaultValue="it" className="w-full">
          <div className="relative mb-8 pb-2 overflow-x-auto hide-scrollbar">
            <TabsList className="w-auto inline-flex">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 min-w-32 text-center data-[state=active]:bg-brand data-[state=active]:text-white font-lexend"
                >
                  <span className="flex items-center gap-2">
                    <category.icon className="h-4 w-4" />
                    <span className="hidden md:inline">{category.name}</span>
                    <span className="md:hidden">
                      {category.name.split(" ")[0]}
                    </span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="pt-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="col-span-1 md:col-span-1"
                >
                  <div
                    className={`p-4 rounded-xl mb-4 ${category.color} w-fit`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-lexend font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4 font-inter">
                    {category.description}
                  </p>
                  <Button variant="outline" className="group font-lexend font-medium" asChild>
                    <Link href={`/services#${category.id}`}>
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="col-span-1 md:col-span-3 bg-white rounded-xl p-6 shadow-xs"
                >
                  <h4 className="text-lg font-lexend font-medium mb-4">
                    Popular {category.name} Roles
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.roles.map((role, index) => (
                      <motion.div
                        key={`${category.id}-${index}`}
                        variants={itemVariants}
                        className="bg-muted/30 rounded-lg p-3 text-sm font-lexend font-medium"
                      >
                        {role}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-brand hover:bg-brand-light text-white font-lexend font-medium"
            asChild
          >
            <Link href="/services">
              View all staffing options <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
