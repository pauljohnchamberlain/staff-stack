import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://staffstack.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://staffstack.com/faq",
      },
    ],
  };

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is offshore staffing and how does it work?",
          answer:
            "Offshore staffing involves hiring employees who work for your company from a different country, typically at a lower cost than hiring locally. With Staff Stack, we handle the recruitment, office facilities, HR management, and legal compliance in the Philippines, while you manage the day-to-day work of your offshore team members. They work exclusively for your business, just like your local employees, but are legally employed through our entity in the Philippines.",
        },
        {
          question:
            "How do I determine if offshore staffing is right for my business?",
          answer:
            "Offshore staffing works best for businesses that: 1) Need skilled professionals in roles that can be performed remotely, 2) Want to reduce operational costs without sacrificing quality, 3) Are looking to scale their team efficiently, or 4) Need to extend service hours to provide coverage across different time zones. We recommend scheduling a consultation with our team to assess your specific needs and determine if offshore staffing aligns with your business goals.",
        },
        {
          question:
            "What are the first steps to start building an offshore team?",
          answer:
            "The process begins with a consultation to understand your business needs and requirements. After this, we create detailed job profiles, begin recruiting candidates that match your criteria, and present you with pre-screened candidates for interviews. Once you select your preferred candidate(s), we handle all aspects of onboarding and provide ongoing support. Most clients can have their first team member onboarded within 4-6 weeks from the initial consultation.",
        },
        {
          question:
            "What roles can be effectively offshored to the Philippines?",
          answer:
            "The Philippines has a strong talent pool for various roles including customer service, administrative support, data entry, accounting, IT and development, digital marketing, design, engineering, healthcare support, and many other professional services. Roles that require strong English communication skills, computer proficiency, and can be performed remotely are particularly well-suited for offshoring to the Philippines. Visit our Roles page for a comprehensive list of positions we commonly staff.",
        },
      ],
    },
    {
      title: "Recruitment & Staffing",
      faqs: [
        {
          question: "How do you ensure quality talent selection?",
          answer:
            "Our recruitment process involves multiple stages of screening, including skills assessments, English proficiency tests, behavioral interviews, and background checks. We typically present only the top 3% of applicants for your consideration, ensuring that you interview only highly qualified candidates. Additionally, our recruiters specialize in specific industries, allowing them to effectively evaluate technical capabilities and job-specific skills.",
        },
        {
          question: "How long does it take to hire offshore staff?",
          answer:
            "The typical timeframe from initial requirements gathering to having a new team member start is 4-6 weeks. However, this can vary based on the specificity of your requirements, the role's complexity, and current market conditions. For common roles with larger talent pools, we can often present initial candidates within 1-2 weeks from finalizing requirements. More specialized positions may take longer to source properly qualified candidates.",
        },
        {
          question: "Can I interview candidates before hiring them?",
          answer:
            "Absolutely! We believe it's essential for you to have full control over who joins your team. After our initial screening process, we'll present you with a shortlist of qualified candidates. You'll conduct interviews just as you would with local employees, and the final hiring decision rests entirely with you. We can facilitate any type of interview format you prefer, including technical assessments, panel interviews, or multiple rounds of interviews.",
        },
        {
          question:
            "What happens if a hired staff member doesn't meet expectations?",
          answer:
            "We provide a replacement guarantee for the first month of employment. If a staff member doesn't meet expectations during this period, we'll find a replacement at no additional recruitment cost. Beyond this period, we work closely with both you and the employee to address any performance issues through our performance management process. If necessary, we can initiate replacement recruitment while ensuring a smooth transition to minimize disruption to your operations.",
        },
      ],
    },
    {
      title: "Operations & Management",
      faqs: [
        {
          question: "How do we handle time zone differences?",
          answer:
            "Most of our clients opt for one of three approaches: 1) Filipino staff work during your business hours for real-time collaboration, 2) Establish core overlap hours for meetings and collaborative work, with independent work during non-overlapping hours, or 3) Staff work during Philippines business hours to provide round-the-clock coverage. Filipino professionals are often flexible with their working hours, and we can discuss the best arrangement for your specific needs during our consultation.",
        },
        {
          question:
            "What kind of equipment and technology do offshore staff use?",
          answer:
            "Staff Stack provides enterprise-grade equipment, including modern computers, dual monitors, high-speed internet with backup connections, UPS systems for power outages, and VoIP phone systems when needed. All staff have access to standard productivity software, and we can install any specific software your business requires. For specialized hardware needs, we can either procure them or facilitate using client-provided equipment.",
        },
        {
          question: "How do you ensure data security and confidentiality?",
          answer:
            "We implement comprehensive security measures including: 1) ISO 27001 certified information security management systems, 2) Secure physical facilities with restricted access controls, 3) Network security with firewalls, encryption, and monitoring, 4) Regular security training for all staff, 5) Strict confidentiality agreements, 6) Background checks for all employees, and 7) Regular security audits and assessments. We can also implement client-specific security protocols as needed.",
        },
        {
          question:
            "What is your approach to performance management and quality control?",
          answer:
            "We implement structured performance management systems, including regular performance reviews, KPI tracking, and quality monitoring. Our approach combines client feedback with proactive performance monitoring by our management team. We believe in addressing any issues quickly and constructively, providing necessary training and support to help staff meet expectations. You maintain direct day-to-day work management while we handle the HR aspects of performance management.",
        },
      ],
    },
    {
      title: "Costs & Contracts",
      faqs: [
        {
          question: "How does the pricing work for Staff Stack operators?",
          answer:
            "We provide transparent pricing with a simple monthly fee structure. This includes the operator's salary, our management fee, StackCertified onboarding, weekly performance check-ins, QA systems, and our replacement guarantee. Pricing varies based on role complexity and experience level. Contact us for a detailed quote based on your specific requirements — we focus on delivering capacity that actually ships work, not just filling seats.",
        },
        {
          question: "Are there any hidden costs or setup fees?",
          answer:
            "No, we pride ourselves on transparent pricing. Our monthly fee is all-inclusive, covering recruitment, employee salary, benefits, office space, equipment, HR management, and ongoing support. There are no setup fees or hidden charges. The only potential additional costs would be for any specialized equipment or software that your specific operations might require beyond our standard provisions, which we would discuss and agree upon in advance.",
        },
        {
          question: "What types of contracts do you offer?",
          answer:
            "We offer flexible contract terms with a standard minimum commitment of 6 months, which allows sufficient time for team integration and value realization. After this initial period, contracts typically continue on a rolling basis with a 30-day notice period. For larger teams or specialized roles requiring significant investment in training or equipment, we may recommend longer initial terms. All contract terms are customizable based on your business needs.",
        },
        {
          question: "How are payments handled?",
          answer:
            "Payments are typically made monthly in advance via bank transfer, credit card, or other electronic payment methods. We invoice in USD, AUD, GBP, EUR, or other major currencies as needed. For multi-year contracts, we can discuss quarterly or semi-annual payment options, potentially with preferential rates. We provide detailed invoices and can accommodate specific billing requirements for your accounting processes.",
        },
      ],
    },
    {
      title: "Legal & Compliance",
      faqs: [
        {
          question: "Who is the legal employer of the offshore staff?",
          answer:
            "Staff Stack (or our local entity in the Philippines) is the legal employer of record. We handle all employment contracts, legal compliance, tax withholding, and mandatory benefits in accordance with Philippine labor laws. Your company maintains a client relationship with Staff Stack rather than direct employment of the offshore staff, eliminating the need to establish a legal entity in the Philippines while still maintaining full day-to-day work direction of your team members.",
        },
        {
          question: "How are intellectual property rights protected?",
          answer:
            "All staff sign comprehensive IP agreements ensuring that any work created during their employment belongs to your company. These agreements include confidentiality clauses, non-disclosure provisions, and explicit assignment of all intellectual property rights to your business. Additionally, we can implement any specific IP protection measures your business requires, such as restricting access to sensitive information or limiting the use of personal devices for work purposes.",
        },
        {
          question: "What happens in case of disputes or issues?",
          answer:
            "Our client agreements include clear dispute resolution procedures, typically starting with good-faith negotiations, then moving to mediation if necessary, and finally arbitration as a last resort. We have a proven track record of resolving any issues cooperatively with our clients, focusing on fair and practical solutions. Our account management team serves as your primary point of contact for addressing and resolving any concerns that may arise during our partnership.",
        },
        {
          question:
            "Are there specific regulations I need to be aware of when hiring Filipino staff?",
          answer:
            "One of the main benefits of our service is that we handle all regulatory compliance in the Philippines, so you don't need to become an expert in local labor laws. We ensure compliance with all relevant regulations, including working hours, minimum wage requirements, mandatory benefits, tax withholding, data privacy laws, and other employment regulations. We stay current on all legislative changes and adjust our practices accordingly to maintain full compliance.",
        },
      ],
    },
  ];

  // Generate FAQ schema for all questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    ),
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-[#0f2c4a] to-[#0a2240] text-white py-16 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl font-lexend font-light max-w-3xl">
                Find answers to common questions about offshore staffing with
                Staff Stack
              </p>
            </div>
          </div>
        </section>

        {/* Categories Navigation Section */}
        <section className="bg-white border-b border-slate-200 sticky top-28 z-20">
          <div className="container mx-auto py-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {faqCategories.map((category) => (
                <a
                  key={category.title}
                  href={`#${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-[#0f2c4a] rounded-full font-medium text-sm transition-colors"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category) => (
                <div
                  key={category.title}
                  id={category.title.toLowerCase().replace(/\s+/g, "-")}
                  className="mb-20 scroll-mt-40"
                >
                  <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-6 pb-2 border-b border-slate-200">
                    {category.title}
                  </h2>

                  <div className="space-y-8">
                    {category.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="bg-slate-50 rounded-xl p-6 border border-slate-100"
                      >
                        <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                          {faq.question}
                        </h3>
                        <div className="text-slate-700 space-y-4">
                          {faq.answer.split("\n\n").map((paragraph) => (
                            <p key={paragraph.slice(0, 50)}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-[#0f2c4a]/5 p-8 rounded-xl text-center mt-12">
                <h3 className="text-2xl font-lexend font-bold text-[#0f2c4a] mb-4">
                  Still have questions?
                </h3>
                <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
                  Our team is ready to help you understand how offshore staffing
                  can benefit your business and answer any specific questions
                  you may have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-[#e60b8a] hover:bg-[#e60b8a]/90 text-white font-lexend"
                    asChild
                  >
                    <Link href="/contact-us">Contact Us</Link>
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

        {/* Related Resources Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-lexend font-bold text-[#0f2c4a] mb-10 text-center">
                Related Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-100">
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    How It Works
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Learn about our end-to-end process for building and managing
                    your offshore team.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#09d8f5] text-[#0f2c4a] hover:bg-[#09d8f5]/10 font-medium"
                    asChild
                  >
                    <Link href="/how-it-works">Explore Process</Link>
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-100">
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    Roles We Staff
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Browse the wide range of positions and skill sets available
                    for your offshore team.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#09d8f5] text-[#0f2c4a] hover:bg-[#09d8f5]/10 font-medium"
                    asChild
                  >
                    <Link href="/roles">View Roles</Link>
                  </Button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-100">
                  <h3 className="text-xl font-lexend font-semibold text-[#0f2c4a] mb-3">
                    Client Testimonials
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Read success stories from businesses that have partnered
                    with Staff Stack.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#09d8f5] text-[#0f2c4a] hover:bg-[#09d8f5]/10 font-medium"
                    asChild
                  >
                    <Link href="/about/testimonials">Read Stories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
