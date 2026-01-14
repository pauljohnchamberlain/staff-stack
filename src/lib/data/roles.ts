export type AgencyVertical = "retention" | "paid-media" | "shopify";

export interface RoleSkill {
  name: string;
  category: "platform" | "technical" | "process";
}

export interface CertificationTask {
  description: string;
  timeLimit?: string;
}

export interface RoleData {
  id: string;
  title: string;
  vertical: AgencyVertical;
  description: string;
  skills: RoleSkill[];
  certificationTasks: CertificationTask[];
  stackCertified: boolean;
}

export const agencyVerticals: { id: AgencyVertical; name: string; color: string }[] = [
  { id: "retention", name: "Retention & Klaviyo", color: "purple" },
  { id: "paid-media", name: "Paid Media Ops", color: "blue" },
  { id: "shopify", name: "Shopify Dev", color: "green" },
];

export const availableRoles: RoleData[] = [
  // Retention & Klaviyo Roles
  {
    id: "klaviyo-email-builder",
    title: "Klaviyo Email Builder",
    vertical: "retention",
    description:
      "Build flows, campaigns, and segments in Klaviyo. Template development, A/B tests, automation setup.",
    skills: [
      { name: "Klaviyo", category: "platform" },
      { name: "HTML/CSS", category: "technical" },
      { name: "Liquid", category: "technical" },
      { name: "A/B Testing", category: "process" },
    ],
    certificationTasks: [
      { description: "Build a 3-email abandoned cart flow in Klaviyo", timeLimit: "45 min" },
      { description: "Create a segment based on purchase behavior" },
      { description: "Set up an A/B test for subject lines" },
    ],
    stackCertified: true,
  },
  {
    id: "email-designer",
    title: "Email Designer",
    vertical: "retention",
    description:
      "Transform Figma designs into pixel-perfect emails. Responsive layouts, dark mode, accessibility.",
    skills: [
      { name: "Figma", category: "platform" },
      { name: "Email HTML", category: "technical" },
      { name: "Responsive Design", category: "technical" },
      { name: "Dark Mode", category: "technical" },
    ],
    certificationTasks: [
      { description: "Convert a Figma design to responsive email HTML", timeLimit: "60 min" },
      { description: "Implement dark mode support for an email template" },
      { description: "Optimize email for mobile rendering" },
    ],
    stackCertified: true,
  },
  {
    id: "email-qa-specialist",
    title: "QA Specialist",
    vertical: "retention",
    description:
      "Links, rendering, UTMs, copy review, inbox testing. Catch errors before they reach inboxes.",
    skills: [
      { name: "Litmus/Email on Acid", category: "platform" },
      { name: "UTM Auditing", category: "process" },
      { name: "Rendering QA", category: "process" },
      { name: "Copy QA", category: "process" },
    ],
    certificationTasks: [
      { description: "QA audit an email campaign: find 10+ issues", timeLimit: "30 min" },
      { description: "Create a comprehensive QA checklist" },
      { description: "Test and document email rendering across 10 clients" },
    ],
    stackCertified: true,
  },
  {
    id: "email-copywriter",
    title: "Copywriter",
    vertical: "retention",
    description:
      "Subject lines, preview text, body copy, CTAs. Conversion-focused writing for email and SMS.",
    skills: [
      { name: "Email Copy", category: "technical" },
      { name: "SMS Copy", category: "technical" },
      { name: "A/B Headlines", category: "process" },
      { name: "Conversion Copy", category: "technical" },
    ],
    certificationTasks: [
      { description: "Write 10 subject line variants for A/B testing" },
      { description: "Create email body copy for a product launch" },
      { description: "Write SMS campaign copy within character limits" },
    ],
    stackCertified: true,
  },
  {
    id: "flow-strategist",
    title: "Flow Strategist",
    vertical: "retention",
    description:
      "Design and optimize automated flows: welcome, abandon, post-purchase, win-back, and more.",
    skills: [
      { name: "Flow Architecture", category: "process" },
      { name: "Segmentation", category: "process" },
      { name: "Timing Optimization", category: "process" },
      { name: "Revenue Attribution", category: "process" },
    ],
    certificationTasks: [
      { description: "Design a post-purchase flow with 5+ touchpoints" },
      { description: "Optimize flow timing based on engagement data" },
      { description: "Create a win-back flow strategy document" },
    ],
    stackCertified: true,
  },
  {
    id: "sms-specialist",
    title: "SMS Specialist",
    vertical: "retention",
    description:
      "SMS campaign management, compliance, segmentation, and performance optimization.",
    skills: [
      { name: "SMS Platforms", category: "platform" },
      { name: "Compliance", category: "process" },
      { name: "Segmentation", category: "process" },
      { name: "Performance", category: "process" },
    ],
    certificationTasks: [
      { description: "Set up an SMS campaign with proper compliance" },
      { description: "Create SMS segments based on engagement" },
      { description: "Analyze and report on SMS performance metrics" },
    ],
    stackCertified: true,
  },

  // Paid Media Ops Roles
  {
    id: "ad-ops-assistant",
    title: "Ad Ops Assistant",
    vertical: "paid-media",
    description:
      "Campaign setup, audience building, budget management, and day-to-day ad account maintenance.",
    skills: [
      { name: "Meta Ads", category: "platform" },
      { name: "Google Ads", category: "platform" },
      { name: "TikTok Ads", category: "platform" },
      { name: "Campaign Setup", category: "process" },
    ],
    certificationTasks: [
      { description: "Set up a Meta campaign with proper targeting", timeLimit: "45 min" },
      { description: "Build custom audiences from customer data" },
      { description: "Audit an ad account for optimization opportunities" },
    ],
    stackCertified: true,
  },
  {
    id: "reporting-analyst",
    title: "Reporting Analyst",
    vertical: "paid-media",
    description:
      "Build dashboards, automate reports, and deliver insights. Looker, Sheets, Data Studio expertise.",
    skills: [
      { name: "Looker Studio", category: "platform" },
      { name: "Google Sheets", category: "platform" },
      { name: "Data Analysis", category: "technical" },
      { name: "Automation", category: "process" },
    ],
    certificationTasks: [
      { description: "Build a client dashboard in Looker Studio from raw data", timeLimit: "60 min" },
      { description: "Create automated reporting templates in Sheets" },
      { description: "Analyze campaign data and deliver insights report" },
    ],
    stackCertified: true,
  },
  {
    id: "creative-editor",
    title: "Creative Editor",
    vertical: "paid-media",
    description:
      "Produce ad variants, hook variations, and creative iterations at scale. Fast turnaround.",
    skills: [
      { name: "Video Editing", category: "technical" },
      { name: "Static Ads", category: "technical" },
      { name: "Variant Creation", category: "process" },
      { name: "Hook Testing", category: "process" },
    ],
    certificationTasks: [
      { description: "Create 10 ad variants from a single hero creative", timeLimit: "60 min" },
      { description: "Edit hook variations for video ads" },
      { description: "Resize creatives for multiple placements" },
    ],
    stackCertified: true,
  },
  {
    id: "utm-pixel-specialist",
    title: "UTM & Pixel Specialist",
    vertical: "paid-media",
    description:
      "Attribution setup, pixel configuration, conversion tracking, and debugging.",
    skills: [
      { name: "UTM Strategy", category: "process" },
      { name: "Meta Pixel", category: "platform" },
      { name: "GA4", category: "platform" },
      { name: "Conversion API", category: "technical" },
    ],
    certificationTasks: [
      { description: "Debug a broken conversion tracking setup", timeLimit: "45 min" },
      { description: "Implement Conversion API for server-side tracking" },
      { description: "Create a UTM naming convention document" },
    ],
    stackCertified: true,
  },
  {
    id: "campaign-builder",
    title: "Campaign Builder",
    vertical: "paid-media",
    description:
      "Execute campaign builds from briefs: ad sets, targeting, creative upload, and launch.",
    skills: [
      { name: "Campaign Structure", category: "process" },
      { name: "Audience Targeting", category: "process" },
      { name: "Ad Formats", category: "technical" },
      { name: "Launch QA", category: "process" },
    ],
    certificationTasks: [
      { description: "Set up a campaign structure for a new client vertical", timeLimit: "60 min" },
      { description: "Build audiences based on a creative brief" },
      { description: "Launch and QA a multi-ad set campaign" },
    ],
    stackCertified: true,
  },
  {
    id: "ga4-analyst",
    title: "GA4 Analyst",
    vertical: "paid-media",
    description:
      "Google Analytics 4 setup, reporting, and analysis. Event tracking and custom reports.",
    skills: [
      { name: "GA4", category: "platform" },
      { name: "Event Tracking", category: "technical" },
      { name: "Custom Reports", category: "process" },
      { name: "Attribution", category: "process" },
    ],
    certificationTasks: [
      { description: "Set up custom event tracking in GA4" },
      { description: "Create a conversion funnel report" },
      { description: "Analyze attribution across channels" },
    ],
    stackCertified: true,
  },

  // Shopify Dev Roles
  {
    id: "shopify-developer",
    title: "Shopify Developer",
    vertical: "shopify",
    description:
      "Full Shopify development: theme customization, app integration, checkout extensions, and more.",
    skills: [
      { name: "Liquid", category: "technical" },
      { name: "JavaScript", category: "technical" },
      { name: "Shopify APIs", category: "platform" },
      { name: "Theme Development", category: "technical" },
    ],
    certificationTasks: [
      { description: "Fix a Shopify theme bug from a client ticket", timeLimit: "60 min" },
      { description: "Build a custom Liquid section with metafield integration" },
      { description: "Implement checkout customization" },
    ],
    stackCertified: true,
  },
  {
    id: "theme-specialist",
    title: "Theme Specialist",
    vertical: "shopify",
    description:
      "Theme customization, section development, metafields setup, and design implementation.",
    skills: [
      { name: "Liquid", category: "technical" },
      { name: "CSS", category: "technical" },
      { name: "Theme Architecture", category: "technical" },
      { name: "Metafields", category: "platform" },
    ],
    certificationTasks: [
      { description: "Build a custom section with block settings" },
      { description: "Implement metafields for product customization" },
      { description: "Style a theme to match a design mockup" },
    ],
    stackCertified: true,
  },
  {
    id: "shopify-qa-tester",
    title: "QA Tester",
    vertical: "shopify",
    description:
      "Cross-browser, mobile, checkout flow, and functionality testing. Bug documentation and regression.",
    skills: [
      { name: "Cross-browser QA", category: "process" },
      { name: "Mobile Testing", category: "process" },
      { name: "Checkout QA", category: "process" },
      { name: "Bug Tracking", category: "process" },
    ],
    certificationTasks: [
      { description: "QA a checkout flow: document all issues found", timeLimit: "30 min" },
      { description: "Test responsive layouts across devices" },
      { description: "Create bug reports with reproduction steps" },
    ],
    stackCertified: true,
  },
  {
    id: "support-developer",
    title: "Support Developer",
    vertical: "shopify",
    description:
      "Handle client support tickets, quick fixes, content updates, and maintenance tasks.",
    skills: [
      { name: "Ticket Management", category: "process" },
      { name: "Quick Fixes", category: "technical" },
      { name: "Client Communication", category: "process" },
      { name: "Documentation", category: "process" },
    ],
    certificationTasks: [
      { description: "Resolve 5 sample client tickets", timeLimit: "60 min" },
      { description: "Document a solution for a common issue" },
      { description: "Write client-facing update communication" },
    ],
    stackCertified: true,
  },
  {
    id: "app-integration-specialist",
    title: "App Integration Specialist",
    vertical: "shopify",
    description:
      "App installation, configuration, custom integrations, and third-party connections.",
    skills: [
      { name: "App Setup", category: "process" },
      { name: "API Integration", category: "technical" },
      { name: "Webhooks", category: "technical" },
      { name: "Custom Apps", category: "technical" },
    ],
    certificationTasks: [
      { description: "Set up a custom app integration with webhooks", timeLimit: "60 min" },
      { description: "Configure a third-party app for a client" },
      { description: "Document an API integration workflow" },
    ],
    stackCertified: true,
  },
  {
    id: "store-migration-specialist",
    title: "Store Migration Specialist",
    vertical: "shopify",
    description:
      "Platform migrations, data transfer, SEO preservation, and launch coordination.",
    skills: [
      { name: "Data Migration", category: "process" },
      { name: "SEO Redirects", category: "technical" },
      { name: "Platform Knowledge", category: "process" },
      { name: "Launch QA", category: "process" },
    ],
    certificationTasks: [
      { description: "Migrate product data from WooCommerce to Shopify", timeLimit: "60 min" },
      { description: "Set up 301 redirects for SEO preservation" },
      { description: "Create a migration launch checklist" },
    ],
    stackCertified: true,
  },
  {
    id: "project-manager",
    title: "Project Manager",
    vertical: "shopify",
    description:
      "Project coordination, client communication, timeline management, and resource allocation.",
    skills: [
      { name: "Project Planning", category: "process" },
      { name: "Client Management", category: "process" },
      { name: "Resource Allocation", category: "process" },
      { name: "Agile", category: "process" },
    ],
    certificationTasks: [
      { description: "Create a project plan for a store launch" },
      { description: "Write a client status update" },
      { description: "Allocate resources for a multi-week project" },
    ],
    stackCertified: true,
  },
];

// Helper functions
export function getRolesByVertical(vertical: AgencyVertical): RoleData[] {
  return availableRoles.filter((role) => role.vertical === vertical);
}

export function getRoleById(roleId: string): RoleData | undefined {
  return availableRoles.find((role) => role.id === roleId);
}

export function getVerticalInfo(verticalId: AgencyVertical) {
  return agencyVerticals.find((v) => v.id === verticalId);
}

export function getAllSkillsForVertical(vertical: AgencyVertical): string[] {
  const roles = getRolesByVertical(vertical);
  const skills = new Set<string>();
  roles.forEach((role) => {
    role.skills.forEach((skill) => skills.add(skill.name));
  });
  return Array.from(skills);
}
