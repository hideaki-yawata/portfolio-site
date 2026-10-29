import type { TimelineEntry } from "@/types/work";

export const aboutIntroParagraphs = [
  "During the COVID-19 pandemic, I began learning web programming independently and later became a freelance web engineer. Over the past 5 years, I have worked on the development, maintenance, and management of over 100 websites, primarily using WordPress. I have also explored modern web technologies such as TypeScript, React, and Next.js.",
  "In addition to web development, I have experience in web design and photography. This has given me an interest not only in the technical aspects of web development, but also in how information is communicated to users through websites.",
] as const;

export const timelineEntries: TimelineEntry[] = [
  {
    period: "2025-2026",
    description:
      "Completed the German B2 course at VICTORIA | Academy of Languages in Berlin.",
  },
  {
    period: "2020-2025",
    description:
      "Worked as a freelance web developer, developing and maintaining numerous WordPress websites.",
  },
  {
    period: "2013-2020",
    description:
      "Worked at Yuinchu Inc. as marketing staff in the rental space division, handling photography for website and social media content.",
  },
  {
    period: "2009",
    description:
      "Graduated from Kanazawa Gakuin University, Department of Fine Arts and Crafts, majoring in Oil Painting.",
  },
];

export const linkedInHref =
  "https://www.linkedin.com/in/hideaki-yawata-84054b3a5/";
export const githubHref = "https://github.com/hideaki-yawata";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Web Development / Design", href: "/web-development" },
  { label: "Photography", href: "/photography" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const webDevelopmentDesignDescription =
  "I handle everything from design to coding, CMS implementation, maintenance, and operations. I create structured, implementation-ready design data for smooth, efficient development.";
