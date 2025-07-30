import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Great Place to Work | Staff Stack",
  description:
    "Discover what makes Staff Stack a great place to work with our modern facilities, exceptional work culture, and employee-focused benefits.",
};

export default function WorkplacePage() {
  const coreValues = [
    {
      id: "excellence",
      title: "Excellence",
      description:
        "We pursue excellence in all aspects of our service, from our recruitment processes to our facility management and client support.",
    },
    {
      id: "integrity",
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and ethical practices in all client and employee relationships.",
    },
    {
      id: "innovation",
      title: "Innovation",
      description:
        "We embrace technology and creative solutions to continuously improve our services and workplace environment.",
    },
    {
      id: "respect",
      title: "Respect",
      description:
        "We value diverse perspectives and treat all employees and clients with dignity and fairness.",
    },
    {
      id: "growth",
      title: "Growth Mindset",
      description:
        "We foster an environment of continuous learning and professional development for all our team members.",
    },
    {
      id: "teamwork",
      title: "Teamwork",
      description:
        "We believe in collaborative problem-solving and supporting each other to achieve exceptional results.",
    },
  ];

  const benefits = [
    { id: "healthcare", name: "Comprehensive Healthcare" },
    { id: "development", name: "Continuous Professional Development" },
    { id: "career", name: "Career Advancement Opportunities" },
    { id: "work-life", name: "Work-Life Balance Initiatives" },
    { id: "environment", name: "Modern Work Environment" },
    { id: "team-building", name: "Team Building Activities" },
    { id: "recognition", name: "Recognition Programs" },
    { id: "compensation", name: "Competitive Compensation" },
    { id: "transportation", name: "Transportation Allowance" },
    { id: "mental-health", name: "Mental Health Support" },
    { id: "fitness", name: "Fitness Programs" },
    { id: "holidays", name: "Holiday Celebrations" },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              A Great Place to Work
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Why our employees love working at Staff Stack
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Creating an Exceptional Workplace Experience
              </h2>
              <p className="text-lg font-inter text-slate-700 mb-6">
                At Staff Stack, we believe that happy, engaged employees deliver
                exceptional service to our clients. That's why we've built a
                workplace culture and environment that supports our team
                members' professional growth, work-life balance, and overall
                wellbeing.
              </p>
              <p className="text-lg font-inter text-slate-700 mb-6">
                Our commitment to creating an outstanding workplace has earned
                us recognition as a top employer in the Philippines. From our
                state-of-the-art facilities to our comprehensive benefits
                package and professional development opportunities, we invest in
                our people because they are the heart of our success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md h-64 relative">
                <Image
                  src="https://ext.same-assets.com/2688779156/3300813873.jpeg"
                  alt="Modern Staff Stack office space"
                  fill
                  className="object-cover"
                  unoptimized
                  crossOrigin="anonymous"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64 relative">
                <Image
                  src="https://ext.same-assets.com/2688779156/3300813873.jpeg"
                  alt="Staff Stack team members collaborating"
                  fill
                  className="object-cover"
                  unoptimized
                  crossOrigin="anonymous"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64 relative col-span-2">
                <Image
                  src="https://ext.same-assets.com/2688779156/3300813873.jpeg"
                  alt="Staff Stack team building activity"
                  fill
                  className="object-cover"
                  unoptimized
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Our Core Values
              </h2>
              <p className="text-lg font-inter text-slate-700 max-w-3xl mx-auto">
                These values guide how we operate our business, treat our
                employees, and serve our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value) => (
                <div key={value.id} className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-lexend font-bold text-[#0f2c4a] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 font-inter">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Employee Benefits */}
          <div className="bg-[#0f2c4a]/5 p-8 md:p-12 rounded-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Employee Benefits
              </h2>
              <p className="text-lg font-inter text-slate-700 max-w-3xl mx-auto">
                We offer a comprehensive benefits package designed to support
                our employees' well-being, professional growth, and work-life
                balance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-white p-4 rounded-lg shadow-xs flex items-center gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-[#09d8f5]/20 text-[#09d8f5] flex items-center justify-center shrink-0">
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
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="font-lexend font-medium text-[#0f2c4a]">
                    {benefit.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                asChild
              >
                <Link href="/jobs">View Current Openings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-10 text-center">
              What Our Team Members Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="italic text-slate-600 font-inter mb-6">
                  "Working at Staff Stack has been transformative for my career.
                  The supportive environment, continuous learning opportunities,
                  and work-life balance have allowed me to grow professionally
                  while maintaining my personal well-being."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                    JM
                  </div>
                  <div className="ml-4">
                    <p className="font-lexend font-medium">Janelle Martinez</p>
                    <p className="text-sm text-slate-500">
                      Senior Developer, 3 years
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="italic text-slate-600 font-inter mb-6">
                  "The culture at Staff Stack is unlike any company I've worked
                  for before. There's a genuine focus on employee wellbeing,
                  regular team building activities, and management actually
                  listens to our feedback and implements positive changes."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                    RD
                  </div>
                  <div className="ml-4">
                    <p className="font-lexend font-medium">Rafael Domingo</p>
                    <p className="text-sm text-slate-500">Team Lead, 4 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
