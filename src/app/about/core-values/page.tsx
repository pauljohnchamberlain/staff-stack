import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Core Values | Staff Stack",
  description:
    "Discover the core values that guide Staff Stack's approach to offshore staffing and shape our company culture.",
};

export default function CoreValuesPage() {
  const coreValues = [
    {
      id: "excellence",
      title: "Excellence",
      description:
        "We are committed to delivering exceptional quality in everything we do. From talent selection to infrastructure management, we pursue excellence in every aspect of our service. This means continuously raising our standards, seeking feedback, and implementing best practices to ensure our clients receive the highest level of service possible.",
      commitments: [
        "Rigorous quality control processes",
        "Continuous performance improvement",
        "Regular client satisfaction assessments",
        "Industry-leading standards and certifications",
      ],
    },
    {
      id: "integrity",
      title: "Integrity",
      description:
        "We conduct our business with the highest standards of honesty, transparency, and ethical behavior. Our clients trust us with critical aspects of their operations, and we honor that trust by acting with integrity in all interactions, being forthright about challenges, and always prioritizing our clients' best interests.",
      commitments: [
        "Transparent communication",
        "Honest business practices",
        "Ethical decision-making",
        "Accountability at all levels",
      ],
    },
    {
      id: "innovation",
      title: "Innovation",
      description:
        "We embrace innovation and continuous improvement in our processes, services, and solutions. By staying at the forefront of industry developments and technology trends, we help our clients navigate change and leverage new opportunities for growth and efficiency.",
      commitments: [
        "Investment in emerging technologies",
        "Continuous process improvement",
        "Creative problem-solving",
        "Forward-thinking approach to challenges",
      ],
    },
    {
      id: "respect",
      title: "Respect",
      description:
        "We value and respect every individual, celebrating diversity of thought, background, and experience. We create an inclusive environment where all team members feel valued, heard, and empowered to contribute their unique perspectives. This culture of respect extends to our clients, partners, and the communities we serve.",
      commitments: [
        "Inclusive workplace policies",
        "Cultural sensitivity and awareness",
        "Recognition of diverse perspectives",
        "Equal opportunity and fair treatment",
      ],
    },
    {
      id: "collaboration",
      title: "Collaboration",
      description:
        "We believe in the power of collaboration to achieve extraordinary results. By fostering strong partnerships with our clients and promoting teamwork within our organization, we create synergies that drive success for everyone involved. Our collaborative approach ensures that our clients' goals become our shared mission.",
      commitments: [
        "Client-centric partnership model",
        "Cross-functional teamwork",
        "Open communication channels",
        "Shared goals and aligned incentives",
      ],
    },
    {
      id: "responsibility",
      title: "Responsibility",
      description:
        "We take responsibility for our actions and their impact on our clients, employees, and the broader community. This includes business responsibility through reliable service delivery, social responsibility through community engagement, and environmental responsibility through sustainable practices.",
      commitments: [
        "Sustainable business practices",
        "Community development initiatives",
        "Environmental stewardship",
        "Accountability for commitments made",
      ],
    },
  ];

  const applications = [
    {
      area: "Client Relationships",
      description:
        "Our values guide how we interact with clients, from transparent communication to collaborative problem-solving. We view each client relationship as a partnership built on trust, mutual respect, and shared success.",
    },
    {
      area: "Talent Management",
      description:
        "We apply our values in how we recruit, develop, and support our team members. This includes fair hiring practices, ongoing professional development, and creating a respectful workplace where everyone can thrive.",
    },
    {
      area: "Service Delivery",
      description:
        "Our commitment to excellence and innovation shapes our approach to service delivery, driving us to continuously improve our processes, infrastructure, and management systems for optimal client outcomes.",
    },
    {
      area: "Community Impact",
      description:
        "Our values of responsibility and respect extend to how we engage with local communities, supporting education, economic development, and environmental sustainability in the regions where we operate.",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Our Core Values
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              The principles that guide our actions and define our company
              culture
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-slate-700 mb-10">
              At Staff Stack, our core values aren't just words on a wall –
              they're the foundation of our culture and the principles that
              guide every decision we make. These values reflect who we are as
              an organization and what we stand for in our relationships with
              clients, employees, and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {coreValues.map((value, index) => (
                <div key={value.id} className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex justify-center md:justify-start">
                    <div className="w-40 h-40 relative">
                      <div className="absolute inset-0 bg-[#09d8f5]/20 rounded-full" />
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <div className="bg-[#0f2c4a] text-white h-14 w-14 rounded-full flex items-center justify-center text-2xl font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-[#0f2c4a] text-xl font-lexend font-bold absolute top-24">
                          {value.title}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="bg-white p-6 rounded-xl shadow-xs">
                      <p className="text-lg text-slate-700 mb-6">
                        {value.description}
                      </p>
                      <div>
                        <h4 className="text-[#0f2c4a] font-lexend font-medium mb-3">
                          Our commitment to {value.title}:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                          {value.commitments.map((commitment) => (
                            <li
                              key={commitment}
                              className="flex items-start gap-2"
                            >
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
                              <span className="text-slate-700">
                                {commitment}
                              </span>
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

      {/* Values in Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-10 text-center">
              Our Values in Action
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((item) => (
                <div
                  key={item.area}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {item.area}
                  </h3>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-6">
                Experience Our Values Firsthand
              </h3>
              <p className="text-lg text-slate-700 mb-8">
                When you partner with Staff Stack, you'll experience our values
                in every interaction. We're committed to building meaningful
                relationships based on these principles and delivering value
                that extends beyond typical business transactions.
              </p>
              <Button
                size="lg"
                className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                asChild
              >
                <Link href="/contact-us">Start Your Journey With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-10 text-center">
              Our Team on Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-xs">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl text-[#09d8f5] font-serif">"</div>
                  <p className="italic text-slate-700">
                    The commitment to excellence here is real. We're constantly
                    encouraged to improve our skills and deliver our absolute
                    best. It creates an environment where everyone is motivated
                    to grow and exceed expectations.
                  </p>
                </div>
                <div className="pl-7">
                  <p className="font-lexend font-medium text-[#0f2c4a]">
                    Maria Santos
                  </p>
                  <p className="text-sm text-slate-600">
                    Senior Developer, 4 years at Staff Stack
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xs">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl text-[#09d8f5] font-serif">"</div>
                  <p className="italic text-slate-700">
                    The respect shown to every team member, regardless of role
                    or background, makes Staff Stack special. I've worked in
                    many companies, but the inclusive culture here is truly
                    exceptional.
                  </p>
                </div>
                <div className="pl-7">
                  <p className="font-lexend font-medium text-[#0f2c4a]">
                    James Rivera
                  </p>
                  <p className="text-sm text-slate-600">
                    HR Manager, 3 years at Staff Stack
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xs">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl text-[#09d8f5] font-serif">"</div>
                  <p className="italic text-slate-700">
                    Innovation isn't just encouraged here—it's expected. We're
                    constantly looking for better ways to serve our clients,
                    which keeps the work interesting and impactful.
                  </p>
                </div>
                <div className="pl-7">
                  <p className="font-lexend font-medium text-[#0f2c4a]">
                    Anita Reyes
                  </p>
                  <p className="text-sm text-slate-600">
                    Client Success Manager, 5 years at Staff Stack
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xs">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl text-[#09d8f5] font-serif">"</div>
                  <p className="italic text-slate-700">
                    Our community initiatives aren't just for show—they make a
                    real difference. Being part of a company that takes its
                    responsibility to society seriously gives my work additional
                    meaning and purpose.
                  </p>
                </div>
                <div className="pl-7">
                  <p className="font-lexend font-medium text-[#0f2c4a]">
                    Raj Kumar
                  </p>
                  <p className="text-sm text-slate-600">
                    Operations Coordinator, 2 years at Staff Stack
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
