/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — components only render what is here.
 */

export const profile = {
  name: "Chompoonuch Tubtimsri",
  firstName: "Chompoonuch",
  lastName: "Tubtimsri",
  role: "Junior Frontend Developer",
  headline: "Frontend Developer crafting thoughtful digital experiences.",
  intro:
    "I build clean, intuitive, and responsive web interfaces with a strong focus on usability, visual consistency, and user experience.",
  email: "chompoonuch.tubtimsri@gmail.com",
  github: "https://github.com/zxndko",
  /**
   * LinkedIn: paste your real profile URL here (e.g. "https://www.linkedin.com/in/your-handle").
   * While this is empty, the site shows a disabled "coming soon" state instead of a fake link.
   */
  linkedin: "",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  description: string;
  contributions: string[];
  tags: string[];
  focus: string[];
  note: { label: string; text: string };
  links: { label: string; href: string; ariaLabel: string }[];
};

export const projects: Project[] = [
  {
    id: "pawplan",
    title: "PawPlan",
    subtitle: "Pet Clinic Management System",
    type: "Academic Team Project",
    description:
      "A web application for a small-animal veterinary clinic that helps pet owners explore clinic information, book appointments, and manage their appointments. Clinic staff can manage appointments, veterinarians, articles, and website content through an admin dashboard.",
    contributions: [
      "Developed frontend UI for the About Us, Appointment Booking, Shop, and Articles pages.",
      "Implemented navigation components and contributed to the Admin Dashboard interface.",
      "Focused on usability, visual consistency, and responsive layouts.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    focus: ["About Us", "Appointment Booking", "Shop", "Articles", "Navigation", "Admin Dashboard (part)"],
    note: {
      label: "Team project",
      text: "I worked on the frontend. The backend was built by another team member.",
    },
    links: [
      {
        label: "Live demo",
        href: "https://pawplan-vet-clinic.vercel.app/th",
        ariaLabel: "PawPlan live demo (opens in a new tab)",
      },
      {
        label: "GitHub",
        href: "https://github.com/zxndko/Final-Project",
        ariaLabel: "PawPlan source code on GitHub (opens in a new tab)",
      },
    ],
  },
  {
    id: "gpos",
    title: "GPOS",
    subtitle: "User Manual UI Improvements",
    type: "Frontend Developer Internship",
    description:
      "Contributed to improving the user interface and usability of the GPOS User Manual website during my frontend developer internship.",
    contributions: [
      "Redesigned User Manual pages based on Figma designs.",
      "Improved search-related UI and content presentation.",
      "Worked on component structure, category pages, and YouTube-based content interfaces.",
      "Contributed to SEO, accessibility, and Lighthouse-related improvements.",
      "Collaborated with senior developers through GitHub pull requests and review feedback.",
    ],
    focus: [
      "User Manual pages rebuilt from Figma",
      "Search UI and content presentation",
      "Component structure and category pages",
      "YouTube-based content interfaces",
      "SEO, accessibility and Lighthouse",
      "GitHub pull requests and code review",
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Git",
      "GitHub",
      "SEO",
      "Web Accessibility",
      "Google Lighthouse",
    ],
    note: {
      label: "Text case study",
      text: "Presented in words only: no screenshots or metrics are shown here.",
    },
    links: [],
  },
];

export const aboutParagraphs = [
  "I'm a junior frontend developer who enjoys turning designs into functional, responsive web interfaces. I care about the details that make a page feel right: spacing, hierarchy, and the small interactions that guide people through it.",
  "I like building reusable, consistent UI components and thinking about how real people will use them. Most of what I've learned has come from working on real projects, taking feedback in code review, and collaborating with teammates.",
  "I'm looking for a team where I can keep growing as a frontend developer while contributing to interfaces that are clear, accessible, and well made.",
];

export const aboutPoints = [
  "Turning designs into functional web interfaces",
  "Building responsive and consistent UI components",
  "Attention to spacing, hierarchy, and interaction details",
  "Learning through projects, feedback, and collaboration",
];

export const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    title: "UI/UX Design & Development",
    skills: [
      "Figma",
      "UI Implementation",
      "Component-Based Development",
      "Wireframing",
      "Prototyping",
      "User Flow",
    ],
  },
  {
    title: "Web Quality & Optimization",
    skills: ["SEO", "Web Accessibility", "Google Lighthouse", "Chrome DevTools"],
  },
  {
    title: "Tools & Version Control",
    skills: ["Git", "GitHub", "Visual Studio Code", "Node.js"],
  },
];

export const experience = {
  company: "GPOS Co., Ltd.",
  position: "Frontend Developer Intern",
  period: "May 2026 – September 2026",
  highlights: [
    "Worked on User Manual UI improvements and search interfaces.",
    "Built reusable components and implemented pages from Figma designs.",
    "Contributed to SEO, accessibility, and Lighthouse-related improvements.",
    "Collaborated with senior developers through GitHub pull requests and code review.",
  ],
};
