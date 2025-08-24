"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building,
  Lightbulb,
  Medal,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const executiveTeam = [
  {
    id: "ceo",
    name: "Michael Johnson",
    role: "CEO & Founder",
    bio: "With over 20 years of experience in global outsourcing, Michael founded Staff Stack to bridge the gap between international businesses and the exceptional talent in the Philippines.",
    image: "/images/team-event-1.jpg",
  },
  {
    id: "coo",
    name: "Isabel Santos",
    role: "Chief Operations Officer",
    bio: "Isabel oversees all operational aspects of Staff Stack, ensuring that our infrastructure, processes, and support systems consistently deliver an exceptional client experience.",
    image: "/images/team-event-2.jpg",
  },
  {
    id: "recruiting",
    name: "David Park",
    role: "Head of Talent Acquisition",
    bio: "David leads our recruitment team, implementing innovative sourcing strategies to find the perfect professionals for our clients' unique business needs.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "client",
    name: "Sarah Johnson",
    role: "Client Success Director",
    bio: "Sarah ensures that every client partnership thrives through proactive communication, strategic planning, and ongoing optimization of each staffing solution.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
];

const offices = [
  {
    id: "manila",
    location: "Manila Main Office",
    address: "25th Floor, One World Place, BGC, Taguig City, Philippines",
    description:
      "Our headquarters features modern workspaces, dedicated team areas, and state-of-the-art technology infrastructure.",
    image: "https://ext.same-assets.com/2688779156/543602244.png",
  },
  {
    id: "cebu",
    location: "Cebu Office",
    address: "15th Floor, Park Centrale Tower, IT Park, Cebu City, Philippines",
    description:
      "Located in Cebu's thriving IT Park, this office supports our expanding operations in the Visayas region.",
    image: "https://ext.same-assets.com/1379786756/1312885363.jpeg",
  },
];

const values = [
  {
    id: "excellence",
    title: "Excellence",
    description:
      "We are committed to delivering exceptional quality in everything we do, from recruitment to daily operations.",
    icon: Medal,
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We build trust through honest communication, transparency, and ethical business practices.",
    icon: BadgeCheck,
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We continuously improve our processes, technology, and services to lead the industry in offshore staffing solutions.",
    icon: Lightbulb,
  },
  {
    id: "partnership",
    title: "Partnership",
    description:
      "We view ourselves as an extension of our clients' teams, fully invested in their long-term success.",
    icon: Users,
  },
];

export default function AboutPage() {
  const storyId = useId();
  const valuesId = useId();
  const teamId = useId();
  const locationsId = useId();
  const whyChooseUsId = useId();

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

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://staffstack.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://staffstack.com/about",
      },
    ],
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* About Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-linear-to-b from-slate-50 to-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-brand-accent"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{ top: "10%", left: "5%" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="text-brand-accent">Staff Stack</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl opacity-90 mb-8"
            >
              Your trusted partner for building remote and offshore teams in the
              Philippines
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="fill-background w-full h-10 md:h-16"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section id={storyId} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Founded in 2012, Staff Stack was created to solve a critical
                  business challenge: how to access exceptional talent while
                  managing costs effectively. We recognized the Philippines'
                  unique combination of strong English proficiency, cultural
                  compatibility, and technical expertise.
                </p>
                <p>
                  What began as a small operation with just 5 staff has grown
                  into a thriving organization with multiple offices across the
                  Philippines and hundreds of professionals working with clients
                  worldwide.
                </p>
                <p>
                  Our vision is to transform how businesses approach staffing by
                  providing dedicated, full-time team members who work
                  exclusively for one client while being fully supported by our
                  infrastructure, HR, and management systems.
                </p>
                <p>
                  Today, we serve businesses of all sizes, from startups to
                  Fortune 500 companies, across industries ranging from
                  technology and healthcare to finance and creative services.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  className="bg-brand hover:bg-brand-light text-white"
                  asChild
                >
                  <Link href="/contact-us">
                    Work with us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <img
                src="/images/team-event-3.jpg"
                className="object-cover rounded-xl w-full h-full"
                alt="Staff Stack office"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section id={valuesId} className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from how we treat our
              staff to how we partner with clients
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div key={value.id} variants={itemVariants}>
                <Card className="h-full border-none shadow-md">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 p-3 rounded-full bg-brand/10 w-fit">
                      <value.icon className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id={teamId} className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the professionals behind Staff Stack who work tirelessly to
              deliver exceptional service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xs overflow-hidden"
              >
                <div className="relative h-48">
                  {member.image.startsWith("/") ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-brand-accent text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section id={locationsId} className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern, secure facilities equipped with everything your team needs
              to succeed
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xs overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={office.image}
                    alt={office.location}
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{office.location}</h3>
                  <p className="text-muted-foreground mb-3">{office.address}</p>
                  <p>{office.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Our facilities include high-speed redundant internet, backup power
              systems, biometric security, ergonomic workspaces, relaxation
              areas, and all the technology your team needs to be productive.
            </p>
            <Button
              className="bg-brand hover:bg-brand-light text-white"
              asChild
            >
              <Link href="/contact-us">
                Schedule a virtual tour <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id={whyChooseUsId} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose <span className="text-brand-accent">Staff Stack</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8 opacity-90"
            >
              Partner with us for the perfect blend of talent, infrastructure,
              and management
            </motion.p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10"
          >
            <motion.div
              variants={itemVariants}
              className="bg-brand/10 p-6 rounded-xl"
            >
              <Building className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Fully Managed Infrastructure
              </h3>
              <p className="text-slate-700">
                We handle all the complexities of infrastructure, from office
                space and equipment to IT systems and security.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-brand/10 p-6 rounded-xl"
            >
              <Users className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Exceptional Talent Pool
              </h3>
              <p className="text-slate-700">
                Access a deep pool of qualified professionals with the skills,
                education, and experience your business needs.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-brand/10 p-6 rounded-xl"
            >
              <Medal className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-slate-700">
                With over a decade of experience and hundreds of satisfied
                clients, we have the expertise to deliver results.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              className="bg-brand hover:bg-brand-light text-white font-medium"
              asChild
            >
              <Link href="/contact-us">
                Start Building Your Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
