export type ExperienceLevel = "Junior" | "Intermediate" | "Senior";

export interface RoleCost {
  hireOnshore: number;
  hireWithStaffStack: number;
}

export interface RoleData {
  id: string;
  name: string;
  costs: Record<ExperienceLevel, RoleCost>;
  description?: string;
}

export const experienceLevels: ExperienceLevel[] = [
  "Junior",
  "Intermediate",
  "Senior",
];

// Placeholder data - replace with actual data later
export const availableRoles: RoleData[] = [
  {
    id: "amazon-fba",
    name: "Amazon FBA Specialist",
    description:
      "Manages Amazon FBA accounts, listings, inventory, and advertising campaigns.",
    costs: {
      Junior: { hireOnshore: 4500, hireWithStaffStack: 1500 },
      Intermediate: { hireOnshore: 5655, hireWithStaffStack: 1958 },
      Senior: { hireOnshore: 7000, hireWithStaffStack: 2500 },
    },
  },
  {
    id: "web-dev",
    name: "Web Developer",
    description:
      "Develops and maintains websites and web applications using various technologies.",
    costs: {
      Junior: { hireOnshore: 5000, hireWithStaffStack: 1800 },
      Intermediate: { hireOnshore: 6500, hireWithStaffStack: 2200 },
      Senior: { hireOnshore: 8000, hireWithStaffStack: 3000 },
    },
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer",
    description:
      "Creates visual concepts, using computer software or by hand, to communicate ideas.",
    costs: {
      Junior: { hireOnshore: 4000, hireWithStaffStack: 1400 },
      Intermediate: { hireOnshore: 5200, hireWithStaffStack: 1800 },
      Senior: { hireOnshore: 6500, hireWithStaffStack: 2300 },
    },
  },
  {
    id: "virtual-assistant",
    name: "Virtual Assistant",
    description:
      "Provides administrative, technical, or creative assistance to clients remotely.",
    costs: {
      Junior: { hireOnshore: 3500, hireWithStaffStack: 1200 },
      Intermediate: { hireOnshore: 4500, hireWithStaffStack: 1600 },
      Senior: { hireOnshore: 5500, hireWithStaffStack: 2000 },
    },
  },
  {
    id: "accountant",
    name: "Accountant",
    description:
      "Prepares and examines financial records, ensuring accuracy and compliance.",
    costs: {
      Junior: { hireOnshore: 5500, hireWithStaffStack: 1900 },
      Intermediate: { hireOnshore: 7000, hireWithStaffStack: 2400 },
      Senior: { hireOnshore: 9000, hireWithStaffStack: 3200 },
    },
  },
  {
    id: "bookkeeper",
    name: "Bookkeeper",
    description:
      "Records daily financial transactions and manages financial data entry.",
    costs: {
      Junior: { hireOnshore: 4200, hireWithStaffStack: 1450 },
      Intermediate: { hireOnshore: 5300, hireWithStaffStack: 1850 },
      Senior: { hireOnshore: 6800, hireWithStaffStack: 2350 },
    },
  },
  {
    id: "customer-service-rep",
    name: "Customer Service Representative",
    description:
      "Handles customer inquiries, complaints, and provides information about products/services.",
    costs: {
      Junior: { hireOnshore: 3800, hireWithStaffStack: 1300 },
      Intermediate: { hireOnshore: 4800, hireWithStaffStack: 1700 },
      Senior: { hireOnshore: 6000, hireWithStaffStack: 2100 },
    },
  },
  {
    id: "data-entry-specialist",
    name: "Data Entry Specialist",
    description:
      "Enters and updates data into databases and computer systems accurately and efficiently.",
    costs: {
      Junior: { hireOnshore: 3200, hireWithStaffStack: 1100 },
      Intermediate: { hireOnshore: 4000, hireWithStaffStack: 1400 },
      Senior: { hireOnshore: 5000, hireWithStaffStack: 1800 },
    },
  },
  {
    id: "digital-marketer",
    name: "Digital Marketer",
    description:
      "Develops and implements online marketing strategies including SEO, SEM, and social media.",
    costs: {
      Junior: { hireOnshore: 5200, hireWithStaffStack: 1850 },
      Intermediate: { hireOnshore: 6800, hireWithStaffStack: 2350 },
      Senior: { hireOnshore: 8500, hireWithStaffStack: 3100 },
    },
  },
  {
    id: "seo-specialist",
    name: "SEO Specialist",
    description:
      "Optimizes websites and content to improve search engine rankings and visibility.",
    costs: {
      Junior: { hireOnshore: 4800, hireWithStaffStack: 1700 },
      Intermediate: { hireOnshore: 6200, hireWithStaffStack: 2100 },
      Senior: { hireOnshore: 7800, hireWithStaffStack: 2800 },
    },
  },
  {
    id: "social-media-manager",
    name: "Social Media Manager",
    description:
      "Manages social media presence, content creation, and engagement strategies.",
    costs: {
      Junior: { hireOnshore: 4500, hireWithStaffStack: 1600 },
      Intermediate: { hireOnshore: 5800, hireWithStaffStack: 2000 },
      Senior: { hireOnshore: 7200, hireWithStaffStack: 2600 },
    },
  },
  {
    id: "content-writer",
    name: "Content Writer",
    description:
      "Creates engaging and informative written content for websites, blogs, and marketing.",
    costs: {
      Junior: { hireOnshore: 4300, hireWithStaffStack: 1500 },
      Intermediate: { hireOnshore: 5500, hireWithStaffStack: 1900 },
      Senior: { hireOnshore: 7000, hireWithStaffStack: 2500 },
    },
  },
  {
    id: "project-manager",
    name: "Project Manager",
    description:
      "Plans, executes, and oversees projects to ensure they are completed on time and within budget.",
    costs: {
      Junior: { hireOnshore: 6000, hireWithStaffStack: 2200 },
      Intermediate: { hireOnshore: 8000, hireWithStaffStack: 3000 },
      Senior: { hireOnshore: 10000, hireWithStaffStack: 3800 },
    },
  },
  {
    id: "hr-specialist",
    name: "HR Specialist",
    description:
      "Manages recruitment, employee relations, benefits administration, and HR policies.",
    costs: {
      Junior: { hireOnshore: 5300, hireWithStaffStack: 1900 },
      Intermediate: { hireOnshore: 6800, hireWithStaffStack: 2400 },
      Senior: { hireOnshore: 8500, hireWithStaffStack: 3100 },
    },
  },
  {
    id: "recruiter",
    name: "Recruiter",
    description:
      "Sources, screens, and interviews candidates to fill job openings.",
    costs: {
      Junior: { hireOnshore: 5000, hireWithStaffStack: 1800 },
      Intermediate: { hireOnshore: 6500, hireWithStaffStack: 2300 },
      Senior: { hireOnshore: 8200, hireWithStaffStack: 2900 },
    },
  },
  {
    id: "sales-representative",
    name: "Sales Representative",
    description:
      "Sells products or services to businesses or consumers, managing customer relationships.",
    costs: {
      Junior: { hireOnshore: 4500, hireWithStaffStack: 1600 },
      Intermediate: { hireOnshore: 6000, hireWithStaffStack: 2100 },
      Senior: { hireOnshore: 8000, hireWithStaffStack: 2800 },
    },
  },
  {
    id: "executive-assistant",
    name: "Executive Assistant",
    description:
      "Provides high-level administrative support to executives and managers.",
    costs: {
      Junior: { hireOnshore: 4800, hireWithStaffStack: 1700 },
      Intermediate: { hireOnshore: 6200, hireWithStaffStack: 2150 },
      Senior: { hireOnshore: 7500, hireWithStaffStack: 2700 },
    },
  },
  {
    id: "it-support-specialist",
    name: "IT Support Specialist",
    description:
      "Provides technical assistance and support for computer systems, hardware, and software.",
    costs: {
      Junior: { hireOnshore: 4600, hireWithStaffStack: 1650 },
      Intermediate: { hireOnshore: 5900, hireWithStaffStack: 2050 },
      Senior: { hireOnshore: 7400, hireWithStaffStack: 2650 },
    },
  },
  {
    id: "ui-ux-designer",
    name: "UI/UX Designer",
    description:
      "Designs user interfaces and user experiences for websites and applications.",
    costs: {
      Junior: { hireOnshore: 5500, hireWithStaffStack: 1950 },
      Intermediate: { hireOnshore: 7200, hireWithStaffStack: 2550 },
      Senior: { hireOnshore: 9500, hireWithStaffStack: 3500 },
    },
  },
  {
    id: "video-editor",
    name: "Video Editor",
    description:
      "Assembles recorded raw material into a finished product suitable for broadcasting.",
    costs: {
      Junior: { hireOnshore: 4400, hireWithStaffStack: 1550 },
      Intermediate: { hireOnshore: 5700, hireWithStaffStack: 1950 },
      Senior: { hireOnshore: 7100, hireWithStaffStack: 2500 },
    },
  },
  {
    id: "3d-artist",
    name: "3D Artist",
    description:
      "Creates 3D models, animations, and visual effects for various media.",
    costs: {
      Junior: { hireOnshore: 5800, hireWithStaffStack: 2000 },
      Intermediate: { hireOnshore: 7500, hireWithStaffStack: 2700 },
      Senior: { hireOnshore: 9800, hireWithStaffStack: 3600 },
    },
  },
  {
    id: "qa-tester",
    name: "QA Tester",
    description:
      "Tests software to identify bugs and ensure quality before release.",
    costs: {
      Junior: { hireOnshore: 4700, hireWithStaffStack: 1680 },
      Intermediate: { hireOnshore: 6000, hireWithStaffStack: 2080 },
      Senior: { hireOnshore: 7600, hireWithStaffStack: 2750 },
    },
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    description:
      "Analyzes business needs and processes, recommending solutions and improvements.",
    costs: {
      Junior: { hireOnshore: 5900, hireWithStaffStack: 2100 },
      Intermediate: { hireOnshore: 7800, hireWithStaffStack: 2900 },
      Senior: { hireOnshore: 10000, hireWithStaffStack: 3700 },
    },
  },
];

// Helper function to get cost data for a specific role and experience level
export function getRoleCosts(
  roleId: string,
  level: ExperienceLevel,
): RoleCost | undefined {
  const role = availableRoles.find((r) => r.id === roleId);
  return role?.costs[level];
}

// Function to calculate savings
export function calculateSavings(
  onshoreCost: number,
  staffStackCost: number,
): number {
  return onshoreCost - staffStackCost;
}
