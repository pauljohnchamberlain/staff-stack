import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "What Our Clients Say | Staff Stack",
  description:
    "Read testimonials from businesses who've partnered with Staff Stack for offshore staffing solutions in the Philippines.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: "testimonial-1",
      quote:
        "Staff Stack has been a game-changer for our business. The quality of talent they've provided has exceeded our expectations, and their comprehensive management approach has made the entire offshore staffing process seamless. In just 18 months, we've been able to scale our development team from 3 to 15 professionals, while maintaining exceptional quality and significantly reducing our operational costs.",
      name: "Michael Kerrigan",
      title: "CTO, InnovateTech Solutions",
      industry: "Software Development",
      results: "60% cost reduction, 300% team growth",
    },
    {
      id: "testimonial-2",
      quote:
        "After trying several offshore providers, we found Staff Stack to be in a different league altogether. Their attention to cultural fit and team integration has resulted in staff that feels like a natural extension of our company. The retention rates are impressive – we've had the same core team for over three years now, which has created incredible continuity and institutional knowledge.",
      name: "Jennifer Wilson",
      title: "Operations Director, Global Finance Group",
      industry: "Financial Services",
      results: "95% staff retention, 24/7 customer support",
    },
    {
      id: "testimonial-3",
      quote:
        "The recruiting process at Staff Stack is remarkably thorough. They took the time to deeply understand our business needs, technical requirements, and company culture before presenting candidates. This upfront investment paid off – every team member they've brought on has been not just technically qualified, but a perfect fit for our team dynamics and work style.",
      name: "David Chen",
      title: "CEO, PacificEcom",
      industry: "E-commerce",
      results: "Reduced hiring time by 65%, eliminated bad hires",
    },
    {
      id: "testimonial-4",
      quote:
        "We were initially hesitant about managing remote team members across time zones, but Staff Stack's infrastructure and support systems made it a non-issue. Their team members are equipped with enterprise-grade technology, redundant internet connections, and 24/7 IT support. In three years, we've never experienced significant downtime or connectivity issues.",
      name: "Rebecca Martinez",
      title: "Head of Customer Experience, ConsumerFirst",
      industry: "Retail",
      results: "99.9% uptime, seamless communication",
    },
    {
      id: "testimonial-5",
      quote:
        "The quality control and performance management at Staff Stack has been exceptional. Our dedicated account manager provides monthly performance reviews, identifies training opportunities, and ensures our staff is continuously improving. This proactive approach to management has resulted in steadily increasing productivity and quality metrics quarter over quarter.",
      name: "Thomas Wright",
      title: "Managing Director, Wright & Partners",
      industry: "Professional Services",
      results: "42% productivity increase, improved quality metrics",
    },
    {
      id: "testimonial-6",
      quote:
        "What impresses me most about Staff Stack is their ability to find specialized talent. We needed professionals with very specific industry knowledge and technical skills – a combination that was nearly impossible to find locally. Staff Stack not only found qualified candidates but gave us multiple options to choose from, all within our budget constraints.",
      name: "Sarah Patel",
      title: "VP of Engineering, MedTech Innovations",
      industry: "Healthcare Technology",
      results: "Filled 12 specialized roles in 3 months",
    },
  ];

  const videoTestimonials = [
    {
      id: "video-1",
      title: "How We Scaled Our Development Team",
      client: "TechSolutions Inc.",
      thumbnail: "https://same-assets.com/e4d2ce5d-0bc0-41ec-9262-cf6e6ebb33af",
      duration: "3:42",
    },
    {
      id: "video-2",
      title: "Transforming Customer Support with Offshore Teams",
      client: "Global Retail Group",
      thumbnail: "https://same-assets.com/4f662ea7-9dda-4097-9a39-e70bec65b3a1",
      duration: "4:15",
    },
    {
      id: "video-3",
      title: "Building a 24/7 Technical Support Team",
      client: "CloudServe Technologies",
      thumbnail: "https://same-assets.com/3bc9f9f7-9d93-40c7-9e7d-9f61a4e97b2a",
      duration: "5:08",
    },
  ];

  const clientLogos = [
    {
      id: "client-1",
      name: "TechNova",
      industry: "Software",
    },
    {
      id: "client-2",
      name: "Global Finance",
      industry: "Financial Services",
    },
    {
      id: "client-3",
      name: "MediCare Plus",
      industry: "Healthcare",
    },
    {
      id: "client-4",
      name: "RetailPro",
      industry: "Retail",
    },
    {
      id: "client-5",
      name: "ConstructWorks",
      industry: "Construction",
    },
    {
      id: "client-6",
      name: "EduLearn",
      industry: "Education",
    },
    {
      id: "client-7",
      name: "TravelWise",
      industry: "Travel",
    },
    {
      id: "client-8",
      name: "LegalEdge",
      industry: "Legal Services",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Real experiences from businesses who've partnered with Staff Stack
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-slate-700 mb-10">
              Our clients come from diverse industries and backgrounds, but they
              share a common experience – successful partnerships with Staff
              Stack that have transformed their businesses. Here are their
              stories in their own words.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="text-4xl font-bold text-[#09d8f5]">250+</div>
                <p className="text-[#0f2c4a] font-medium">Active Clients</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="text-4xl font-bold text-[#09d8f5]">18</div>
                <p className="text-[#0f2c4a] font-medium">Countries Served</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="text-4xl font-bold text-[#09d8f5]">96%</div>
                <p className="text-[#0f2c4a] font-medium">
                  Client Satisfaction
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="text-4xl font-bold text-[#09d8f5]">92%</div>
                <p className="text-[#0f2c4a] font-medium">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 rounded-xl shadow-xs"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl text-[#09d8f5] font-serif">"</div>
                    <p className="text-lg italic text-slate-700">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="font-lexend font-medium text-lg text-[#0f2c4a]">
                        {testimonial.name}
                      </p>
                      <p className="text-slate-600">{testimonial.title}</p>
                      <p className="text-sm text-slate-500">
                        {testimonial.industry}
                      </p>
                    </div>
                    <div>
                      <span className="bg-[#09d8f5]/20 text-[#0f2c4a] text-sm font-medium py-2 px-4 rounded-full">
                        {testimonial.results}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-10 text-center">
              Video Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoTestimonials.map((video) => (
                <div
                  key={video.id}
                  className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-[#e60b8a] flex items-center justify-center pl-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white"
                            stroke="none"
                          >
                            <polygon points="5 3 19 12 5 21" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-lexend font-medium text-[#0f2c4a]">
                      {video.title}
                    </h3>
                    <p className="text-sm text-slate-600">{video.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-16">
              Trusted By Companies Worldwide
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clientLogos.map((client) => (
                <div
                  key={client.id}
                  className="bg-white p-6 rounded-xl shadow-xs flex flex-col items-center justify-center"
                >
                  <div className="h-16 w-16 bg-[#0f2c4a]/10 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-[#0f2c4a]">
                      {client.name.substring(0, 2)}
                    </span>
                  </div>
                  <p className="font-lexend font-medium text-[#0f2c4a]">
                    {client.name}
                  </p>
                  <p className="text-sm text-slate-500">{client.industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0f2c4a] text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl font-light mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses who have transformed their operations
              with Staff Stack offshore staffing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                asChild
              >
                <Link href="/contact-us">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-lexend"
                asChild
              >
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
