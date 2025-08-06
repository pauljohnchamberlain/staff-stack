import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://staffstack.com";
  const currentDate = new Date();

  // Main pages with highest priority
  const mainPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    {
      path: "/how-it-works",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/team-builder",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/jobs", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/offices", priority: 0.6, changeFrequency: "monthly" as const },
    {
      path: "/recruitment",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/training", priority: 0.7, changeFrequency: "monthly" as const },
    {
      path: "/human-resources",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    { path: "/security", priority: 0.6, changeFrequency: "monthly" as const },
    {
      path: "/privacy-policy",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/succeed-offshore",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ];

  // Why Outsourced section
  const whyOutsourcedPages = [
    {
      path: "/why-outsourced/reasons",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/why-outsourced/workplace",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/why-outsourced/philippines",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/why-outsourced/benefits",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  // Industries pages
  const industriesPages = [
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/industries/overview",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/industries/administration",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/industries/hospitality",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/industries/real-estate",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ];

  // Roles/Services pages
  const rolesPages = [
    {
      path: "/roles/it-development",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/roles/contact-center",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  // Staff arrangement pages
  const staffPages = [
    {
      path: "/staff/home-based",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/staff/hybrid",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/staff/office-based",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  // About sub-pages
  const aboutPages = [
    {
      path: "/about/core-values",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about/our-people",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about/social-responsibility",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about/testimonials",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/about/timeline",
      priority: 0.6,
      changeFrequency: "yearly" as const,
    },
  ];

  // Location pages
  const locationPages = [
    {
      path: "/locations/manila",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/locations/cebu",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/locations/davao",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  // Combine all pages
  const allPages = [
    ...mainPages,
    ...whyOutsourcedPages,
    ...industriesPages,
    ...rolesPages,
    ...staffPages,
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
