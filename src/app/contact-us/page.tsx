"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  fullName: z.string().min(2, { error: "Name must be at least 2 characters." }),
  email: z.string().email({ error: "Please enter a valid email address." }),
  company: z.string().min(1, { error: "Company name is required." }),
  phone: z.string().min(6, { error: "Please enter a valid phone number." }),
  service: z.string().min(1, { error: "Please select an agency vertical." }),
  teamSize: z.string().optional(),
  message: z
    .string()
    .min(10, { error: "Message must be at least 10 characters." }),
});

const locations = [
  {
    id: "manila",
    city: "Manila Main Office",
    address: "25th Floor, One World Place, BGC, Taguig City, Philippines",
    phone: "+63 2 8791 7462",
    email: "support@staffstack.co",
    hours: "Monday-Friday: 9AM-6PM PHT",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
  },
  {
    id: "cebu",
    city: "Cebu Office",
    address: "15th Floor, Park Centrale Tower, IT Park, Cebu City, Philippines",
    phone: "+63 32 342 8765",
    email: "support@staffstack.co",
    hours: "Monday-Friday: 9AM-6PM PHT",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://staffstack.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://staffstack.co/contact-us",
      },
    ],
  };

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      teamSize: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          description:
            result.message || "We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        if (response.status === 429) {
          toast.error("Too many requests", {
            description: "Please wait a moment before submitting again.",
          });
        } else if (response.status === 400) {
          toast.error("Invalid form data", {
            description: "Please check your input and try again.",
          });
        } else {
          toast.error("Failed to send message", {
            description:
              result.error || "Please try again or contact us directly.",
          });
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <section className="pt-16 pb-16 bg-linear-to-br from-brand-dark via-brand to-brand-light text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
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

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-accent/20 px-4 py-2 rounded-full mb-6"
            >
              <Award className="h-4 w-4 text-brand-accent" />
              <span className="text-sm font-medium font-inter">
                Get Your First Operator
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-lexend font-bold mb-4"
            >
              Let's Talk <span className="text-brand-accent">Capacity</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl opacity-90 font-inter"
            >
              Tell us about your agency and the roles you need. We'll match you
              with StackCertified operators ready in 7 days.
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

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-lexend font-bold mb-6">
                Get Your First Operator
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter">
                            Agency Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your agency" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter">
                            Agency Vertical
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your vertical" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="retention">
                                Retention & Klaviyo
                              </SelectItem>
                              <SelectItem value="paid-media">
                                Paid Media Ops
                              </SelectItem>
                              <SelectItem value="shopify">
                                Shopify Dev
                              </SelectItem>
                              <SelectItem value="multiple">
                                Multiple / Other
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="teamSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter">
                            Current Team Size
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-5">1-5 people</SelectItem>
                              <SelectItem value="6-15">6-15 people</SelectItem>
                              <SelectItem value="16-30">16-30 people</SelectItem>
                              <SelectItem value="31+">31+ people</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter">
                          Tell Us About the Role(s) You Need
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="E.g., 'We need a Klaviyo email builder who can handle 10+ campaigns/week' or 'Looking for a Shopify developer for ongoing support tickets'"
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-brand hover:bg-brand-light text-white font-lexend w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get Started"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-lexend font-bold mb-6">
                  Our Locations
                </h2>
                <div className="grid gap-8">
                  {locations.map((location) => (
                    <div key={location.id} className="flex flex-col space-y-4">
                      <div className="relative h-48 rounded-xl overflow-hidden">
                        <Image
                          src={location.image}
                          alt={location.city}
                          fill
                          className="object-cover"
                          unoptimized={true}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-brand/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-lexend font-bold text-lg">
                            {location.city}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-brand mt-1" />
                          <span className="text-sm font-inter">
                            {location.address}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-brand mt-1" />
                          <span className="text-sm font-inter">
                            {location.phone}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-brand mt-1" />
                          <span className="text-sm font-inter">
                            {location.email}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-brand mt-1" />
                          <span className="text-sm font-inter">
                            {location.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-r from-brand to-brand-light text-white p-8 rounded-xl">
                <h3 className="text-xl font-lexend font-bold mb-3">
                  What Happens Next?
                </h3>
                <ul className="space-y-3 font-inter">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent font-bold">1.</span>
                    <span>
                      We'll schedule a 15-minute call to understand your needs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent font-bold">2.</span>
                    <span>
                      We match and certify operators for your specific roles
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent font-bold">3.</span>
                    <span>
                      You interview with their scorecard — see exactly what they
                      can do
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-accent font-bold">4.</span>
                    <span>Your operator starts shipping work within 7 days</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-lexend font-bold mb-6"
            >
              Common Questions
            </motion.h2>

            <div className="grid gap-6 mt-8 text-left">
              {[
                {
                  q: "How quickly can I get an operator?",
                  a: "Most operators are ready to start within 7 days. We'll match you with StackCertified candidates who've already passed role-specific tests, so there's no waiting around for training.",
                },
                {
                  q: "What if the operator doesn't work out?",
                  a: "Our StackGuarantee includes a 14-day replacement guarantee. If your operator isn't the right fit, we'll find a replacement at no additional cost. Our certification process makes this rare.",
                },
                {
                  q: "What roles can you fill for agencies?",
                  a: "We specialize in agency execution roles: Klaviyo email builders, email designers, QA specialists, ad ops assistants, reporting analysts, creative editors, Shopify developers, and more.",
                },
                {
                  q: "How is this different from hiring freelancers?",
                  a: "StackCertified operators are full-time, dedicated to your agency, and backed by our StackOps delivery infrastructure — QA systems, weekly check-ins, backup bench, and escalation support. Not just a body in a seat.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={`faq-${faq.q.substring(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="font-lexend font-bold text-lg mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground font-inter">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
