import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Our People | Staff Stack",
  description:
    "Meet the talented team behind Staff Stack. Our diverse professionals are dedicated to your offshore staffing success.",
};

export default function OurPeoplePage() {
  const leadershipTeam = [
    {
      name: "Michael Fernandez",
      role: "Chief Executive Officer",
      description:
        "With over 20 years of experience in international business and outsourcing, Michael founded Staff Stack with a vision to create meaningful employment opportunities in the Philippines while helping global businesses access world-class talent.",
      education: "MBA, Harvard Business School",
      experience:
        "Former Head of APAC Operations at Global Outsourcing Solutions",
    },
    {
      name: "Sarah Chen",
      role: "Chief Operations Officer",
      description:
        "Sarah oversees all operational aspects of Staff Stack, ensuring our facilities, systems, and processes consistently deliver exceptional service to clients while providing an outstanding work environment for our staff.",
      education: "MSc International Business, London School of Economics",
      experience: "15+ years in operations management across APAC",
    },
    {
      name: "David Rodriguez",
      role: "Chief Technology Officer",
      description:
        "David leads our technology infrastructure and security systems, ensuring enterprise-grade connectivity, data protection, and technical support for both our clients and staff members.",
      education: "Computer Science, Stanford University",
      experience: "Former CIO at Enterprise Tech Solutions",
    },
    {
      name: "Sophia Reyes",
      role: "Chief Human Resources Officer",
      description:
        "Sophia directs our talent acquisition, retention, and development programs. Her innovative approach to HR has been instrumental in achieving our industry-leading 95%+ staff retention rate.",
      education: "MA Human Resource Management, University of the Philippines",
      experience: "20+ years in HR leadership roles",
    },
  ];

  const teamCategories = [
    {
      title: "Recruitment Specialists",
      description:
        "Our recruitment team combines deep industry knowledge with advanced talent acquisition strategies to identify and attract the best professionals across every field. Through rigorous screening and assessment, they ensure only the top 3% of applicants become part of your dedicated team.",
      count: "35+ specialists",
    },
    {
      title: "Human Resource Professionals",
      description:
        "Our HR team provides comprehensive support throughout the employment lifecycle, from onboarding and training to performance management and career development. Their holistic approach creates an environment where talent thrives and contributes meaningfully to your business.",
      count: "40+ professionals",
    },
    {
      title: "Client Success Managers",
      description:
        "Your dedicated Client Success Manager serves as your primary point of contact, ensuring seamless communication, addressing specific needs, and helping you maximize the value of your offshore team. They bring deep industry expertise and experience in managing international teams.",
      count: "25+ managers",
    },
    {
      title: "Technical Support Team",
      description:
        "Our 24/7 technical support team provides immediate assistance for any technology-related needs, from workstation troubleshooting to connectivity issues. Their proactive approach to infrastructure management ensures minimal disruptions and maximum productivity.",
      count: "30+ technicians",
    },
    {
      title: "Administrative Staff",
      description:
        "Our administrative professionals handle everything from facility management to employee services, creating a smooth and efficient working environment that allows your offshore team to focus entirely on delivering results for your business.",
      count: "45+ staff members",
    },
    {
      title: "Training & Development Specialists",
      description:
        "Our training team designs and delivers customized learning programs to enhance skills, improve performance, and facilitate career growth for your offshore staff, ensuring they continuously add increasing value to your operations.",
      count: "20+ specialists",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              Our People
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Meet the dedicated team that makes your offshore staffing success
              possible
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
              The Staff Stack Family
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              At Staff Stack, our people are our greatest asset. We've built a
              diverse team of over 500 professionals dedicated to supporting
              both our clients and the staff members we employ. From recruitment
              specialists who find the perfect talent for your team to HR
              professionals who ensure high retention and satisfaction, every
              member of our organization plays a crucial role in your offshore
              success.
            </p>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#09d8f5] mb-2">
                    500+
                  </div>
                  <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">
                    Team Members
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#09d8f5] mb-2">
                    15+
                  </div>
                  <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">
                    Nationalities
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#09d8f5] mb-2">
                    95%
                  </div>
                  <p className="text-xl font-lexend font-semibold text-[#0f2c4a]">
                    Staff Retention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-10 text-center">
              Leadership Team
            </h2>

            <div className="space-y-8">
              {leadershipTeam.map((leader) => (
                <div
                  key={`leader-${leader.name.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-white p-6 rounded-xl shadow-xs"
                >
                  <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#09d8f5] font-lexend font-medium mb-4">
                    {leader.role}
                  </p>
                  <p className="text-slate-700 mb-4">{leader.description}</p>
                  <div className="flex flex-col sm:flex-row sm:gap-8 text-sm text-slate-600">
                    <p className="mb-1 sm:mb-0">
                      <span className="font-medium">Education:</span>{" "}
                      {leader.education}
                    </p>
                    <p>
                      <span className="font-medium">Experience:</span>{" "}
                      {leader.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-8 text-center">
              Our Specialized Teams
            </h2>
            <p className="text-lg text-slate-700 mb-10 text-center">
              Beyond your dedicated offshore staff, these are the Staff Stack
              professionals who work behind the scenes to ensure your success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamCategories.map((category) => (
                <div
                  key={`category-${category.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a]">
                      {category.title}
                    </h3>
                    <span className="bg-[#09d8f5]/20 text-[#0f2c4a] text-sm font-medium py-1 px-3 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  <p className="text-slate-700">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-8">
              Our Company Culture
            </h2>
            <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto">
              At Staff Stack, we've cultivated a workplace environment that
              values collaboration, innovation, and personal growth. Our culture
              is built on respect for diverse perspectives, commitment to
              excellence, and a genuine passion for connecting global businesses
              with exceptional talent.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-xl shadow-xs">
                <div className="h-14 w-14 bg-[#0f2c4a] rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#09d8f5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                  Work-Life Balance
                </h3>
                <p className="text-slate-700">
                  We promote a healthy balance between professional achievement
                  and personal well-being through flexible work arrangements and
                  wellness programs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xs">
                <div className="h-14 w-14 bg-[#0f2c4a] rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#09d8f5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                  Continuous Learning
                </h3>
                <p className="text-slate-700">
                  We invest in ongoing professional development through training
                  programs, mentorship opportunities, and clear career
                  advancement pathways.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-xs">
                <div className="h-14 w-14 bg-[#0f2c4a] rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#09d8f5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                  Community Spirit
                </h3>
                <p className="text-slate-700">
                  We foster genuine connections within our team through
                  collaborative projects, team-building activities, and
                  community service initiatives.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                asChild
              >
                <Link href="/contact-us">Work With Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
