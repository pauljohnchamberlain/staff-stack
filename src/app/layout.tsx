import type { Metadata } from "next";
import { Inter, Lexend, Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const siteConfig = {
  name: "Staff Stack",
  url: "https://staffstack.co",
  ogImage: "https://staffstack.co/og-image.jpg",
  description:
    "Staff Stack helps businesses build remote and offshore teams in the Philippines with talented professionals across IT, creative, customer service, and more.",
  keywords: [
    "offshore staffing",
    "remote teams Philippines",
    "Philippines outsourcing",
    "IT outsourcing",
    "hire remote developers",
    "offshore development team",
    "virtual assistants Philippines",
    "BPO services",
    "remote staffing solutions",
    "dedicated offshore teams",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Staff Stack | Build Your Remote Team in the Philippines",
    template: "%s | Staff Stack",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Staff Stack" }],
  creator: "Staff Stack",
  publisher: "Staff Stack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Staff Stack | Build Your Remote Team in the Philippines",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Staff Stack - Remote Teams in the Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Staff Stack | Build Your Remote Team in the Philippines",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@staffstack",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Staff Stack",
  url: "https://staffstack.co",
  logo: "https://staffstack.co/logo.png",
  description: "Leading offshore staffing provider in the Philippines",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PH",
    addressLocality: "Manila",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+63 2 8791 7462",
    contactType: "sales",
    availableLanguage: ["English", "Filipino"],
  },
  sameAs: [
    "https://www.facebook.com/staffstack",
    "https://www.linkedin.com/company/staffstack",
    "https://twitter.com/staffstack",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lexend.variable} ${montserrat.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P4CG45RW');`,
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4CG45RW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
