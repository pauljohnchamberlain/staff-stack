import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "How to Succeed Offshore | Offshore Staffing",
  description: "Discover proven strategies and best practices for building successful offshore teams that drive business growth and operational excellence.",
};

export default function SucceedOffshorePage() {
  const successStrategies = [
    {
      title: "Clear Communication Protocols",
      description: "Establish structured communication channels, regular check-ins, and detailed documentation to ensure alignment across time zones and cultures."
    },
    {
      title: "Thorough Onboarding Process",
      description: "Invest time in comprehensive onboarding with detailed training on your business, products, processes, and team culture to set clear expectations."
    },
    {
      title: "Defined Success Metrics",
      description: "Establish clear KPIs and performance metrics for your offshore team, with regular performance reviews and feedback mechanisms."
    },
    {
      title: "Cultural Integration",
      description: "Foster a unified company culture that embraces diversity and includes your offshore team in company events, decisions, and celebrations."
    },
    {
      title: "Technology Enablement",
      description: "Utilize collaboration tools, project management software, and communication platforms to bridge physical distance and facilitate seamless teamwork."
    },
    {
      title: "Leadership Engagement",
      description: "Regular involvement from senior leadership demonstrates commitment to your offshore strategy and builds stronger relationships with remote team members."
    }
  ];

  const commonChallenges = [
    {
      challenge: "Time Zone Differences",
      solution: "Establish core overlap hours, use asynchronous communication effectively, and rotate meeting times to share the burden."
    },
    {
      challenge: "Cultural Misunderstandings",
      solution: "Provide cultural awareness training for all team members and create opportunities for cross-cultural team building."
    },
    {
      challenge: "Knowledge Transfer",
      solution: "Create comprehensive documentation, recorded training sessions, and knowledge sharing platforms."
    },
    {
      challenge: "Quality Control",
      solution: "Implement robust quality assurance processes, regular reviews, and clear quality standards."
    }
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              How to Succeed Offshore
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Proven strategies for building and managing successful offshore teams
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
                Keys to Offshore Success
              </h2>
              <p className="text-lg text-slate-700">
                Building a successful offshore team requires more than just hiring talent. Based on our experience with hundreds of successful client partnerships, we've identified key strategies that consistently lead to positive outcomes and long-term success with offshore teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {successStrategies.map((strategy) => (
                <div
                  key={`strategy-${strategy.title.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {strategy.title}
                  </h3>
                  <p className="text-slate-700">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Overcoming Common Challenges
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Every offshore operation faces challenges. The difference between success and failure often lies in how these challenges are anticipated and addressed. Here are proven solutions to common offshore challenges:
              </p>

              <div className="space-y-6">
                {commonChallenges.map((item) => (
                  <div
                    key={`challenge-${item.challenge.replace(/\s+/g, "-").toLowerCase()}`}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                  >
                    <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                      {item.challenge}
                    </h3>
                    <div className="flex items-start gap-3 mt-3">
                      <div className="h-6 w-6 rounded-full bg-[#09d8f5] flex items-center justify-center shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-lg text-slate-700">
                        <span className="font-medium">Solution:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Our Support Structure
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                When you partner with Staff Stack, you're not just hiring offshore talent – you're gaining a comprehensive support structure that helps ensure your offshore strategy succeeds.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-[#09d8f5] flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">Account Management</p>
                    <p className="text-slate-700 mt-2">Dedicated account managers to oversee your offshore operations</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-[#09d8f5] flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">Onboarding Support</p>
                    <p className="text-slate-700 mt-2">Expert guidance for smooth team integration</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-[#09d8f5] flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">Best Practices</p>
                    <p className="text-slate-700 mt-2">Ongoing advice from offshore management experts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ready to build your successful offshore team?
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Get started today with our expert guidance to create an offshore team that drives business growth and operational excellence.
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
                "Staff Stack's guidance on managing offshore teams has been invaluable. Their structured approach to onboarding, communication protocols, and performance management helped us avoid common pitfalls and quickly establish a productive relationship with our Philippine team. Five years later, many of our original offshore hires are still with us, and they've become an integral part of our global operations."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  TM
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Thomas Miller</p>
                  <p className="text-sm text-slate-500">COO, Global Innovations Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
