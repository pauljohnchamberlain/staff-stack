import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | Staff Stack",
  description:
    "Staff Stack's Privacy Policy regarding the collection, use, and handling of your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-24 pb-10 bg-linear-to-b from-sky-50 to-background">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-center">
            Last Updated: May 1, 2025
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              At Staff Stack, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>
            <p>
              By accessing our website or using our services, you agree to the
              terms and practices described in this policy.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <h3>Personal Information</h3>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number, and postal address.
              </li>
              <li>
                <strong>Business Information:</strong> Company name, job title,
                and industry.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, and
                account preferences.
              </li>
              <li>
                <strong>Payment Information:</strong> Credit card details,
                billing address, and other financial information necessary for
                services.
              </li>
            </ul>

            <h3>Non-Personal Information</h3>
            <ul>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website and services, including pages visited, time spent, and
                features used.
              </li>
              <li>
                <strong>Device Information:</strong> IP address, browser type,
                operating system, and device identifiers.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> Information
                collected through cookies, web beacons, and similar technologies
                to enhance your experience on our website.
              </li>
            </ul>

            <h2>How We Collect Information</h2>
            <p>We collect information through various methods, including:</p>
            <ul>
              <li>
                <strong>Direct Interactions:</strong> Information you provide
                when filling out forms, creating an account, or communicating
                with us.
              </li>
              <li>
                <strong>Automated Technologies:</strong> Information collected
                automatically when you visit our website through cookies, web
                beacons, and server logs.
              </li>
              <li>
                <strong>Third-Party Sources:</strong> Information from business
                partners, service providers, and publicly available sources.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To process and fulfill your requests for services</li>
              <li>
                To communicate with you about our services, updates, and
                promotions
              </li>
              <li>To improve our website and services</li>
              <li>
                To personalize your experience and deliver content relevant to
                your interests
              </li>
              <li>
                To protect our rights, property, and safety, as well as those of
                our users and the public
              </li>
              <li>To comply with legal obligations and enforce our policies</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party companies that
                perform services on our behalf, such as payment processing, data
                analysis, email delivery, and customer service.
              </li>
              <li>
                <strong>Business Partners:</strong> Companies with whom we
                collaborate to offer certain services or promotions.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court
                order, or government regulation, or to protect our rights,
                property, or safety.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets, your information may be
                transferred as a business asset.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access, loss,
              misuse, or alteration. Our security practices include:
            </p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure network infrastructures</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal information, we cannot
              guarantee its absolute security.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. When we
              no longer need your personal information, we will securely delete
              or anonymize it.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul>
              <li>
                The right to access and receive a copy of your personal
                information
              </li>
              <li>The right to rectify or update your personal information</li>
              <li>
                The right to request deletion of your personal information
              </li>
              <li>
                The right to restrict or object to processing of your personal
                information
              </li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided in the "Contact Us" section below.
            </p>

            <h2>Cookies Policy</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your
              browsing experience, analyze website traffic, and personalize
              content. You can control cookies through your browser settings,
              although disabling cookies may limit your ability to use certain
              features of our website.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, services,
              or applications that are not operated by us. We have no control
              over and assume no responsibility for the content, privacy
              policies, or practices of any third-party websites or services. We
              encourage you to review the privacy policies of all third-party
              websites you visit.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16.
              We do not knowingly collect personal information from children. If
              you are a parent or guardian and believe your child has provided
              us with personal information, please contact us, and we will
              delete such information from our systems.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your personal information may be transferred to and processed in
              countries other than your country of residence, including the
              Philippines and the United States, where our servers and offices
              are located. These countries may have different data protection
              laws than your country. By using our services, you consent to
              these transfers.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the updated policy on our website with a revised "Last
              Updated" date. We encourage you to review this Privacy Policy
              periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at:
            </p>
            <address>
              <strong>Staff Stack</strong>
              <br />
              Email: privacy@staffstack.com
              <br />
              Phone: +1 (800) 123-4567
              <br />
              Address: 18th Floor, Citibank Square
              <br />
              Eastwood City, Quezon City
              <br />
              Philippines
            </address>
          </div>

          <div className="mt-12 border-t pt-8">
            <p className="text-center text-muted-foreground mb-6">
              For more information about how we handle your data or to exercise
              your rights, please contact our data protection team.
            </p>
            <div className="flex justify-center">
              <Button className="bg-brand hover:bg-brand/90" asChild>
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
