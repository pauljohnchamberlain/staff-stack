import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Badge,
  CheckCircle,
  Clock,
  Globe,
  GraduationCap,
  Heart,
  Leaf,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Job Vacancies | Staff Stack",
  description:
    "Find your next career opportunity at Staff Stack! Explore diverse job openings and join a dynamic team that values growth and collaboration. Apply now!",
};

const jobCategories = [
  {
    id: "all",
    name: "All Positions",
    count: 35,
  },
  {
    id: "engineering",
    name: "Engineering",
    count: 10,
  },
  {
    id: "customer-service",
    name: "Customer Service",
    count: 7,
  },
  {
    id: "marketing",
    name: "Marketing / PR",
    count: 5,
  },
  {
    id: "finance",
    name: "Finance / Accounting",
    count: 4,
  },
  {
    id: "design",
    name: "Design / Creative",
    count: 3,
  },
  {
    id: "admin",
    name: "Admin & General Support",
    count: 4,
  },
  {
    id: "hr",
    name: "HR & Recruitment",
    count: 2,
  },
];

const jobListings = [
  {
    id: 1,
    title: "Senior React Developer",
    category: "engineering",
    location: "Remote / Manila",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "We're looking for an experienced React developer with 4+ years of experience building modern web applications.",
  },
  {
    id: 2,
    title: "Customer Success Specialist",
    category: "customer-service",
    location: "Manila (Eastwood)",
    type: "Full-time",
    posted: "1 week ago",
    description:
      "Support our global clients and ensure they have a stellar experience with our services.",
  },
  {
    id: 3,
    title: "Digital Marketing Manager",
    category: "marketing",
    location: "Remote / Manila",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "Lead digital marketing campaigns across multiple channels for our international clients.",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    category: "design",
    location: "Hybrid / Manila",
    type: "Full-time",
    posted: "5 days ago",
    description:
      "Design intuitive user interfaces and create engaging experiences for web and mobile applications.",
  },
  {
    id: 5,
    title: "Financial Analyst",
    category: "finance",
    location: "Manila (Eastwood)",
    type: "Full-time",
    posted: "1 week ago",
    description:
      "Support financial planning, budgeting, and analysis for our international clients.",
  },
  {
    id: 6,
    title: "Executive Assistant",
    category: "admin",
    location: "Remote / Manila",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "Provide high-level administrative support to C-level executives of international companies.",
  },
  {
    id: 7,
    title: "Technical Recruiter",
    category: "hr",
    location: "Manila (Eastwood)",
    type: "Full-time",
    posted: "2 weeks ago",
    description:
      "Source and recruit top technical talent for our company and clients in the IT sector.",
  },
  {
    id: 8,
    title: "Node.js Backend Developer",
    category: "engineering",
    location: "Remote / Manila",
    type: "Full-time",
    posted: "1 day ago",
    description:
      "Build scalable backend systems using Node.js, Express, and various databases.",
  },
];

const perks = [
  {
    icon: Clock,
    title: "Flexible work arrangements",
    description: "Remote, hybrid, or office-based options",
  },
  {
    icon: Users,
    title: "Opportunities for growth",
    description: "Career advancement and skills development",
  },
  {
    icon: Globe,
    title: "Work with international clients",
    description: "Gain global business experience",
  },
];

const testimonials = [
  {
    id: "1",
    name: "Maria Santos",
    position: "Web Developer",
    quote:
      "One of the best highlights of my life! The amount of learning and growth I've experienced at Staff Stack has been incredible. My technical skills have improved dramatically, and I've had the opportunity to work with clients from around the world.",
  },
  {
    id: "2",
    name: "Juan Reyes",
    position: "Customer Support Lead",
    quote:
      "Thank you Staff Stack! I've been with the company for two years now and love the culture and flexibility! The management and culture consistently embrace diversity. I have grown both professionally and personally since joining.",
  },
  {
    id: "3",
    name: "Nina Lim",
    position: "Graphic Designer",
    quote:
      "A fantastic place to work. Staff Stack provides excellent benefits and truly values work-life balance. The training programs are comprehensive, and I've had the chance to develop both technical and leadership skills. The culture is supportive and inclusive.",
  },
];

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We genuinely care about our employees, clients, and the impact our work has on communities.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "We are committed to excellence in everything we do, from our talent selection to service delivery.",
  },
  {
    icon: Leaf,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and ethical standards in all our interactions.",
  },
  {
    icon: Users,
    title: "Kindness",
    description:
      "We create a supportive environment based on respect, empathy, and understanding.",
  },
  {
    icon: GraduationCap,
    title: "Wellness",
    description:
      "We promote the holistic wellbeing of our employees through various programs and policies.",
  },
];

export default function JobsPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-b from-sky-50 to-background">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
                Find your next career opportunity at Staff Stack! Explore
                diverse job openings and join a dynamic team that values growth,
                collaboration, and innovation.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/2377162884/2563674450.png"
                alt="Staff Stack careers team illustration"
                width={600}
                height={400}
                className="rounded-lg"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-6xl">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">
              Search Jobs by Job Title
            </h2>
            <div className="flex max-w-xl">
              <div className="relative flex-grow">
                <Input placeholder="e.g. Developer" className="pr-10 h-12" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Button className="ml-2 bg-brand hover:bg-brand/90 h-12">
                Search
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-bold mb-4">Filter By Category</h3>
                <ul className="space-y-2">
                  {jobCategories.map((category) => (
                    <li
                      key={category.id}
                      className="flex items-center justify-between group"
                    >
                      <Link
                        href={`#${category.id}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {category.name}
                      </Link>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold mb-6">
                Current Job Openings ({jobListings.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobListings.map((job) => (
                  <Card
                    key={job.id}
                    className="border-l-4 border-l-brand overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <span className="text-xs bg-brand/10 text-brand py-1 px-2 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <CardDescription>
                        {job.location} • Posted {job.posted}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {job.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-brand hover:text-brand-dark hover:bg-brand/5"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  className="border-brand text-brand hover:bg-brand/5"
                >
                  View More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why work at <span className="text-brand">Staff Stack</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a growing global company, we provide a dynamic environment
              where you can develop new skills, advance your career, and work
              alongside talented professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {perks.map((perk, index) => (
              <Card
                key={`perk-${perk.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="border-none shadow-sm bg-white"
              >
                <CardHeader className="pb-2">
                  <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center mb-2">
                    <perk.icon className="h-5 w-5 text-brand" />
                  </div>
                  <CardTitle className="text-lg">{perk.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-xl shadow-sm">
            <div className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/2377162884/2687197341.svg"
                alt="Great Place to Work Certified"
                width={150}
                height={180}
                className="rounded-md"
                unoptimized={true}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Great company culture, an inclusive and diverse environment,
                awesome working conditions.
              </h3>
              <p className="text-muted-foreground mb-4">
                Staff Stack is proud to have achieved Great Place To Work
                certification for creating a positive workplace culture where
                employees thrive.
              </p>
              <div className="flex items-center">
                <div className="text-yellow-500 font-bold text-lg mr-2">
                  4.7
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-5 h-5 ${star === 5 ? "text-gray-300" : "text-yellow-500"}`}
                    >
                      {star === 5 ? (
                        <>
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </>
                      ) : (
                        <>
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </>
                      )}
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              More reasons to work at Staff Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-slate-900 text-white border-none shadow-md">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-brand-accent" />
                </div>
                <CardTitle className="text-center">
                  Corporate Social Responsibility
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-300">
                <p>
                  We are committed to making a positive impact in our
                  communities through various CSR initiatives and volunteer
                  programs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 text-white border-none shadow-md">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-brand-accent" />
                </div>
                <CardTitle className="text-center">ISO Certified</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-300">
                <p>
                  We maintain the highest standards of quality and security with
                  ISO 9001 and ISO 27001 certifications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 text-white border-none shadow-md">
              <CardHeader>
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-brand-accent" />
                </div>
                <CardTitle className="text-center">
                  Staff Stack University
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-slate-300">
                <p>
                  Continuous learning and development through our comprehensive
                  training programs and educational opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Work hard, play hard
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="relative h-40 md:h-56 rounded-lg overflow-hidden shadow-sm"
                >
                  <Image
                    src={`/images/team-event-${index}.jpg`}
                    alt={`Team building event ${index}`}
                    className="object-cover"
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sky-50">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our happy staff
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={`testimonial-${testimonial.id}`}
                className="border-none shadow-sm"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 relative rounded-lg overflow-hidden shadow-lg">
            <div className="relative pt-[56.25%] bg-slate-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 bg-brand/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-brand transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-accent/5">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Recruiting the best professionals
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Exceptionally talented, highly qualified and extremely experienced
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We pride ourselves on recruiting the absolute best professionals
              of an exceptional standard for our organization. No matter if they
              are fresh graduates who have demonstrated raw talent and drive or
              seasoned veterans with years of relevant expertise under their
              belt, we only hire the best of the best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((value, index) => (
              <Card
                key={`core-value-${value.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-brand text-white border-none shadow-md"
              >
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-xs text-white/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join our growing team
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Apply today and be part of our innovative and dynamic workplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand hover:bg-white/90"
              asChild
            >
              <Link href="#openings">View Open Positions</Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact-us">Contact Recruitment</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
