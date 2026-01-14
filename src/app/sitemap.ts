import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://staffstack.com";
  const currentDate = new Date();

  // Main pages with highest priority
  const mainPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact-us", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    {
      path: "/how-it-works",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/jobs", priority: 0.6, changeFrequency: "weekly" as const },
    {
      path: "/privacy-policy",
      priority: 0.4,
      changeFrequency: "yearly" as const,
    },
  ];

  // Stack mechanism pages - core differentiators
  const stackPages = [
    {
      path: "/stackcertified",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/stackops",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/stackguarantee",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  // Agency vertical pages - primary landing pages
  const agencyPages = [
    {
      path: "/agencies",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/agencies/retention",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/agencies/paid-media",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/agencies/shopify",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  ];

  // About sub-pages
  const aboutPages = [
    {
      path: "/about/core-values",
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about/our-people",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about/social-responsibility",
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about/testimonials",
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/about/timeline",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
  ];

  // Location pages
  const locationPages = [
    {
      path: "/locations/manila",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/locations/cebu",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/locations/davao",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
  ];

  // Combine all pages
  const allPages = [
    ...mainPages,
    ...stackPages,
    ...agencyPages,
    ...aboutPages,
    ...locationPages,
  ];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
