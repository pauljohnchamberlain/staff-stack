"use client";

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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service category." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const locations = [
  {
    id: "manila",
    city: "Manila Main Office",
    address: "25th Floor, One World Place, BGC, Taguig City, Philippines",
    phone: "+63 2 8791 7462",
    email: "info@globalstaff.com",
    hours: "Monday-Friday: 9AM-6PM PHT",
    image: "https://ext.same-assets.com/2688779156/543602244.png",
  },
  {
    id: "cebu",
    city: "Cebu Office",
    address: "15th Floor, Park Centrale Tower, IT Park, Cebu City, Philippines",
    phone: "+63 32 342 8765",
    email: "cebu@globalstaff.com",
    hours: "Monday-Friday: 9AM-6PM PHT",
    image: "https://ext.same-assets.com/1379786756/1312885363.jpeg",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);
    // In a real application, this would send the form data to your server
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <>
      <section className="pt-16 pb-16 bg-linear-to-r from-brand-dark via-brand to-brand-light text-white overflow-hidden relative">
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Get in <span className="text-brand-accent">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl opacity-90"
            >
              We'd love to hear from you! Reach out to discuss your offshore
              staffing needs.
            </motion.p>
          </div>
        </div>

        {/* Wave SVG Divider */}
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
              className="bg-white p-8 rounded-xl shadow-xs"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
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
                          <FormLabel>Full Name</FormLabel>
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
                          <FormLabel>Email</FormLabel>
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
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} />
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
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="it-development">
                              IT & Development
                            </SelectItem>
                            <SelectItem value="creative-design">
                              Creative & Design
                            </SelectItem>
                            <SelectItem value="customer-service">
                              Customer Service
                            </SelectItem>
                            <SelectItem value="digital-marketing">
                              Digital Marketing
                            </SelectItem>
                            <SelectItem value="finance-accounting">
                              Finance & Accounting
                            </SelectItem>
                            <SelectItem value="virtual-assistants">
                              Virtual Assistants
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your staffing needs"
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
                      className="bg-brand hover:bg-brand-light text-white w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
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
              <div className="bg-white p-8 rounded-xl shadow-xs">
                <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
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
                          <h3 className="font-bold text-lg">{location.city}</h3>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-brand mt-1" />
                          <span className="text-sm">{location.address}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-brand mt-1" />
                          <span className="text-sm">{location.phone}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-brand mt-1" />
                          <span className="text-sm">{location.email}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-brand mt-1" />
                          <span className="text-sm">{location.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-r from-brand to-brand-light text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">
                  International Clients
                </h3>
                <p className="mb-6">
                  We work with businesses globally. Our team is available during
                  your business hours through our flexible work arrangements.
                </p>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/30 hover:bg-white/20 w-full"
                  asChild
                >
                  <Link href="/services">Learn more about our services</Link>
                </Button>
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
              className="text-3xl font-bold mb-6"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="grid gap-6 mt-8 text-left">
              {[
                {
                  q: "How quickly can you staff our positions?",
                  a: "Typically, we can present qualified candidates within 1-2 weeks. The entire hiring process from initial request to onboarding usually takes 3-4 weeks, depending on the role complexity and specific requirements.",
                },
                {
                  q: "What happens if the staff member doesn't work out?",
                  a: "We provide a 30-day replacement guarantee. If any staff member doesn't meet your expectations within the first 30 days, we'll replace them at no additional cost. Our thorough vetting process helps ensure this rarely happens.",
                },
                {
                  q: "How do you handle time zone differences?",
                  a: "Our staff are flexible and can be scheduled to work during your business hours, regardless of your time zone. Many of our clients appreciate the ability to have work continue even after their local team has gone home.",
                },
                {
                  q: "What kind of infrastructure and equipment do you provide?",
                  a: "We provide all necessary workspace, computers, high-speed internet with backup connections, and supporting infrastructure. We can also accommodate specific software or hardware requirements for specialized roles.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={`faq-${faq.q.substring(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-xs"
                >
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
