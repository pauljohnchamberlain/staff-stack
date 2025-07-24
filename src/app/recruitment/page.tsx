import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Recruitment Process | Offshore Staffing",
  description:
    "Learn about Staff Stack's comprehensive recruitment process that identifies and attracts the best offshore talent for your business needs.",
};

export default function RecruitmentPage() {
  const processSteps = [
    {
      id: "step-1",
      number: "01",
      title: "Requirements Analysis",
      description:
        "We begin by thoroughly understanding your business needs, technical requirements, and team culture. This detailed analysis forms the foundation for our targeted recruitment strategy.",
      keyPoints: [
        "In-depth consultation with your team",
        "Technical and cultural requirements identification",
        "Job profile and specification development",
        "Long-term staffing strategy planning",
      ],
    },
    {
      id: "step-2",
      number: "02",
      title: "Candidate Sourcing",
      description:
        "Our specialized recruitment team leverages multiple channels to identify qualified candidates who match your specific requirements. We tap into our extensive talent network and use advanced sourcing techniques.",
      keyPoints: [
        "Proprietary candidate database access",
        "Targeted industry recruitment campaigns",
        "Professional network referrals",
        "Advanced Boolean search techniques",
      ],
    },
    {
      id: "step-3",
      number: "03",
      title: "Comprehensive Screening",
      description:
        "Candidates undergo a rigorous multi-stage screening process to assess technical skills, communication abilities, and cultural fit. Only the top 3% of applicants advance to client interviews.",
      keyPoints: [
        "Technical skills assessment",
        "English proficiency evaluation",
        "Behavioral and situational interviews",
        "Background and reference verification",
      ],
    },
    {
      id: "step-4",
      number: "04",
      title: "Client Interviews",
      description:
        "We present you with a shortlist of pre-qualified candidates. You interview and select the perfect match for your team, with full control over the final hiring decision.",
      keyPoints: [
        "Detailed candidate profiles with assessment results",
        "Coordinated interview scheduling",
        "Technical environment setup for practical tests",
        "Structured feedback collection and analysis",
      ],
    },
    {
      id: "step-5",
      number: "05",
      title: "Onboarding & Integration",
      description:
        "Once you've selected your preferred candidate, we handle all administrative aspects of hiring and create a comprehensive onboarding plan to ensure a smooth transition into your team.",
      keyPoints: [
        "Employment contract administration",
        "Equipment and workspace setup",
        "System access and security protocols",
        "Initial training and orientation",
      ],
    },
    {
      id: "step-6",
      number: "06",
      title: "Ongoing Support",
      description:
        "Our commitment extends beyond placement. We provide continuous support to ensure your offshore team member integrates successfully, performs optimally, and grows with your business.",
      keyPoints: [
        "Regular performance reviews",
        "Professional development opportunities",
        "Technical and administrative support",
        "Retention and engagement programs",
      ],
    },
  ];

  const differentiators = [
    {
      title: "Role-Specific Technical Assessments",
      description:
        "We use tailored technical evaluations designed specifically for each role, enabling us to accurately assess candidates' actual capabilities rather than relying solely on credentials.",
    },
    {
      title: "Cultural Compatibility Profiling",
      description:
        "Our proprietary cultural alignment methodology helps identify candidates who will thrive in your specific company culture, resulting in better team integration and higher retention.",
    },
    {
      title: "Extensive Background Verification",
      description:
        "We conduct thorough background checks, including employment history validation, credential verification, and professional reference assessments for every candidate.",
    },
    {
      title: "English Proficiency Guarantee",
      description:
        "All candidates undergo comprehensive language assessments, ensuring exceptional verbal and written communication skills for seamless collaboration with your team.",
    },
  ];

  const metrics = [
    {
      value: "3%",
      label: "Selection Rate",
      description:
        "Only the top 3% of applicants make it through our rigorous screening process",
    },
    {
      value: "48hrs",
      label: "Initial Response",
      description:
        "Average time to present the first qualified candidates after requirements are finalized",
    },
    {
      value: "95%+",
      label: "Retention Rate",
      description:
        "First-year retention rate for staff placed through our recruitment process",
    },
    {
      value: "92%",
      label: "Client Satisfaction",
      description:
        "Percentage of clients who rate our recruitment process as 'excellent'",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Our Recruitment Process
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Finding and securing exceptional talent for your offshore team
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6 text-center">
              Strategic Talent Acquisition
            </h2>
            <p className="text-lg text-slate-700 mb-10 text-center">
              At Staff Stack, we understand that the success of your offshore
              team depends on having the right people with the right skills,
              mindset, and cultural alignment. Our comprehensive recruitment
              process is designed to identify and attract exceptional
              professionals who will seamlessly integrate with your business and
              deliver outstanding results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              {metrics.map((metric) => (
                <div
                  key={metric.label.replace(/\s+/g, "-").toLowerCase()}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center"
                >
                  <div className="text-3xl font-bold text-[#09d8f5] mb-2">
                    {metric.value}
                  </div>
                  <p className="text-[#0f2c4a] font-lexend font-semibold mb-2">
                    {metric.label}
                  </p>
                  <p className="text-sm text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-16 text-center">
              Our Recruitment Process
            </h2>

            <div className="space-y-16">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col md:flex-row gap-8 relative"
                >
                  {/* Step number and connector line */}
                  <div className="md:w-1/4 flex flex-col items-center">
                    <div className="bg-[#0f2c4a] text-white text-2xl font-bold h-16 w-16 rounded-full flex items-center justify-center relative z-10">
                      {step.number}
                    </div>
                    {/* Vertical connector line except for last item */}
                    {step.id !== "step-6" && (
                      <div className="hidden md:block h-full w-1 bg-[#09d8f5]/30 absolute top-16 bottom-0 z-0" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="md:w-3/4">
                    <div className="bg-white p-6 rounded-xl shadow-xs">
                      <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-700 mb-4">{step.description}</p>
                      <div>
                        <h4 className="text-[#09d8f5] font-lexend font-medium mb-2">
                          Key aspects:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                          {step.keyPoints.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-[#09d8f5] flex items-center justify-center shrink-0 mt-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
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
                              <span className="text-slate-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-10 text-center">
              The Staff Stack Difference
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-6">
                Ready to build your offshore team?
              </h3>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Our recruitment specialists are ready to help you find
                exceptional talent that perfectly matches your requirements.
                Start your journey to a high-performing offshore team today.
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
                "Staff Stack's recruitment process impressed us from day one.
                The quality of candidates they presented was exceptional - each
                person was not only technically qualified but also aligned with
                our company culture. Their thorough screening process saved us
                countless hours and helped us build a high-performing offshore
                team faster than we thought possible."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  SR
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Samantha Reyes</p>
                  <p className="text-sm text-slate-500">
                    Director of Operations, TechGrowth Solutions
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
