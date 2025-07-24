import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "ISO Data Security | Offshore Staffing",
  description:
    "Learn about our ISO-certified security protocols that protect your business data and ensure compliance with international standards.",
};

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "ISO 27001 Certification",
      description:
        "Our operations are certified to ISO 27001 standards, the international benchmark for information security management systems (ISMS).",
    },
    {
      title: "Physical Security",
      description:
        "Secured facilities with 24/7 monitoring, biometric access control, CCTV surveillance, and on-site security personnel.",
    },
    {
      title: "Network Security",
      description:
        "Enterprise-grade firewalls, intrusion detection systems, end-to-end encryption, and continuous network monitoring.",
    },
    {
      title: "Access Controls",
      description:
        "Role-based access controls, multi-factor authentication, and principle of least privilege to restrict data access.",
    },
    {
      title: "Data Protection",
      description:
        "Comprehensive data encryption, secure data transfer protocols, and secure cloud storage solutions.",
    },
    {
      title: "Business Continuity",
      description:
        "Disaster recovery plans, redundant systems, and regular backups to ensure continuity of operations.",
    },
  ];

  const complianceStandards = [
    "ISO 27001 (Information Security Management)",
    "ISO 27701 (Privacy Information Management)",
    "GDPR Compliance",
    "HIPAA Compliance (for healthcare clients)",
    "PCI DSS (for payment processing)",
    "SOC 2 Type II",
    "Data Privacy Act of the Philippines",
  ];

  const securityPractices = [
    {
      title: "Regular Security Audits",
      description:
        "Comprehensive annual audits and quarterly security assessments by independent third-party security firms.",
    },
    {
      title: "Employee Security Training",
      description:
        "Mandatory security awareness training for all staff members, with regular refresher courses and simulated phishing tests.",
    },
    {
      title: "Incident Response",
      description:
        "Documented incident response procedures, dedicated security team, and 24/7 monitoring for immediate threat detection and mitigation.",
    },
    {
      title: "Secure Development",
      description:
        "Secure coding practices, regular vulnerability scanning, and penetration testing for all internal systems.",
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
              ISO-Certified Data Security
            </h1>
            <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
              Enterprise-grade security protocols to protect your business data
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
                Security Beyond Standards
              </h2>
              <p className="text-lg text-slate-700">
                At Staff Stack, we understand that data security is paramount to
                your business. Our comprehensive security framework goes beyond
                compliance with international standards to implement
                multi-layered protection for your sensitive information. From
                physical facility security to advanced digital safeguards, we've
                built our infrastructure with security as the foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {securityFeatures.map((feature) => (
                <div
                  key={`feature-${feature.title.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                >
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-700">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Compliance & Certifications
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                We maintain compliance with international security standards and
                regulations, undergoing regular audits and assessments to ensure
                our security measures meet or exceed industry requirements.
              </p>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="text-2xl font-lexend font-semibold text-[#0f2c4a] mb-4">
                  Standards We Adhere To
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {complianceStandards.map((standard) => (
                    <div
                      key={`standard-${standard.substring(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
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
                      <span className="text-lg text-slate-700">{standard}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ongoing Security Practices
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Security is not a one-time implementation but an ongoing
                commitment. We continuously enhance our security measures
                through regular assessments, training, and technological
                updates.
              </p>

              <div className="space-y-6">
                {securityPractices.map((practice) => (
                  <div
                    key={`practice-${practice.title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-100"
                  >
                    <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-slate-700">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6">
                Ready to secure your offshore operations?
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                Get started today with our expert team to build a secure
                offshore operation with enterprise-grade data protection.
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
                "Security was our top concern when considering offshore
                operations. Staff Stack's ISO-certified security protocols and
                comprehensive data protection measures gave us the confidence to
                move forward. Their transparent approach to security, including
                providing detailed documentation and allowing our team to audit
                their processes, demonstrated their commitment to protecting our
                sensitive data."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 bg-[#0f2c4a] rounded-full flex items-center justify-center text-white font-lexend font-bold">
                  NS
                </div>
                <div className="ml-4 text-left">
                  <p className="font-lexend font-medium">Nathan Singh</p>
                  <p className="text-sm text-slate-500">
                    CISO, Financial Services Group
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
