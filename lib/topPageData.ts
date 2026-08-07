import { images } from "@/lib/images";
import type { TimelineEntry, WorkItem } from "@/types/work";

const sampleWorkTags: WorkItem["tags"] = [
  { label: "Design", variant: "accent" },
  { label: "Coding", variant: "subAccent1" },
  { label: "WordPress", variant: "subAccent2" },
];

const sampleWorkBase = {
  title: "Japan Mobility Data Space",
  imageSrc: images.workThumbnail,
  tags: sampleWorkTags,
} as const;

/** Replace with real project URLs (microCMS or static data). */
const sampleWorkHref = "https://example.com";

function sampleWork(): WorkItem {
  return { ...sampleWorkBase, href: sampleWorkHref };
}

export const webDesignWorks: WorkItem[] = Array.from({ length: 3 }, sampleWork);

export const webDevelopmentWorks: WorkItem[] = Array.from(
  { length: 6 },
  sampleWork,
);

export const webPortfolioWorks: WorkItem[] = Array.from(
  { length: 10 },
  sampleWork,
);

export const timelineEntries: TimelineEntry[] = [
  {
    period: "2025-2026",
    description:
      "Completed the German B2 course at VICTORIA | Academy of Languages in Berlin.",
  },
  {
    period: "2020-Present",
    description:
      "Started a career as a freelance web engineer and designer. Involved in the development and maintenance of numerous WordPress sites.",
  },
  {
    period: "2012-2020",
    description:
      "Worked at Yuinchu Inc. as marketing staff in the rental space division, handling photography for website and social media content.",
  },
  {
    period: "2009",
    description:
      "Graduated from Kanazawa Gakuin University, Department of Fine Arts and Crafts, majoring in Oil Painting.",
  },
];

export const contactFormHref = "https://forms.gle/fndGvnVxW84YJi8T9";
export const linkedInHref =
  "https://www.linkedin.com/in/hideaki-yawata-84054b3a5/";
export const githubHref = "https://github.com/hideaki-yawata";

export const navItems = [
  { label: "Web Design", href: "/#web-design" },
  { label: "Web Development", href: "/web-development" },
  { label: "Photography", href: "/photography" },
  { label: "Background", href: "/#background" },
  {
    label: "Contact",
    href: contactFormHref,
    emphasized: true,
    external: true,
  },
] as const;
