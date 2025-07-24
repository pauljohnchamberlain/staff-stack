import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Training & Development | Offshore Staffing",
  description:
    "Discover how our comprehensive training and professional development programs ensure your offshore team continuously improves and exceeds expectations.",
};

export default function TrainingPage() {
  const trainingPrograms = [
    {
      title: "Initial Skills Assessment",
      description:
        "We conduct thorough evaluations of all staff members to identify strengths and areas for improvement, creating personalized development plans.",
    },
    {
      title: "Technical Training",
      description:
        "Role-specific training programs ensure your team has the technical skills needed to excel in their positions, from software development to customer service.",
    },
    {
      title: "Communication Skills",
      description:
        "Our specialized English language and communication training ensures clear, effective interaction with your team and customers.",
    },
    {
      title: "Cultural Alignment",
      description:
        "We help your offshore staff understand your company culture, values, and expectations to ensure seamless integration with your business.",
    },
    {
      title: "Leadership Development",
      description:
        "For team leads and managers, we offer advanced leadership training to help them effectively manage and motivate their teams.",
    },
    {
      title: "Continuous Learning",
      description:
        "Regular workshops, webinars, and learning opportunities keep your team's skills current and relevant in rapidly changing industries.",
    },
  ];

  const developmentApproach = [
    "Personalized development plans for each staff member",
    "Regular skills assessments and progress tracking",
    "Certification programs for industry-recognized qualifications",
    "Internal mentoring and knowledge sharing initiatives",
    "Access to online learning platforms and resources",
    "Annual professional development budgets",
    "Cross-training opportunities to develop versatile skill sets",
    "Feedback-driven improvement processes",
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Training & Development
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Comprehensive programs to enhance the skills and capabilities of
              your offshore team
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Continuous Improvement Through Training
              </h2>
              <p className="text-lg text-slate-700">
                At Staff Stack, we believe that ongoing training and
                professional development are crucial to maintaining
                high-performing offshore teams. Our comprehensive programs
                ensure your staff continues to grow their skills, adapt to new
                technologies, and consistently exceed your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {trainingPrograms.map((program) => (
                <div
                  key={`program-${program.title.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-slate-700">{program.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Our Development Approach
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We take a structured yet flexible approach to professional
                development, focusing on both immediate skill needs and
                long-term career growth. This balanced approach ensures your
                team remains engaged, motivated, and continuously improving.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
                <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                  Key Components
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {developmentApproach.map((item) => (
                    <div
                      key={`approach-${item.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                      className="flex items-start gap-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-[#09d8f5] flex items-center justify-center shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-lg text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Measuring Success & ROI
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We believe training should deliver measurable results. Our
                programs track key performance indicators before and after
                training initiatives, allowing us to demonstrate clear return on
                investment and continually refine our approach.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-[#09d8f5] mb-2">
                      +32%
                    </div>
                    <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">
                      Productivity Increase
                    </p>
                    <p className="text-slate-700 mt-2">
                      Average improvement after specialized role training
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-[#09d8f5] mb-2">
                      85%
                    </div>
                    <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">
                      Skills Retention
                    </p>
                    <p className="text-slate-700 mt-2">
                      Knowledge retention rate from our training programs
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-[#09d8f5] mb-2">
                      95%+
                    </div>
                    <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">
                      Staff Satisfaction
                    </p>
                    <p className="text-slate-700 mt-2">
                      Team members reporting career growth opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ready to build a skilled offshore team?
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Get started today with our expert recruitment team and ongoing
                training programs to build a highly skilled, continually
                improving offshore team for your business.
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
                  className="border-[#09d8f5] text-[#0f2c4a] hover:bg-[#09d8f5]/10 font-lexend"
                  asChild
                >
                  <Link href="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-8">
              What Our Clients Say
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-xs">
              <p className="text-lg italic font-inter text-slate-600 mb-6">
                "The training programs Staff Stack has implemented for our
                offshore development team have been transformative. When we
                initially hired, our developers were good, but after six months
                of continuous development and technical training, they're
                outstanding. The personalized development plans and regular
                skill assessments have given us visibility into their progress,
                and the results speak for themselves - faster development cycles
                and higher quality code."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  MR
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Michelle Rodriguez</p>
                  <p className="text-sm text-slate-500">
                    CTO, Digital Innovations Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
