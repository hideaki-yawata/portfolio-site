import { images } from "@/lib/images";
import type { PhotoCategory, TimelineEntry, WorkItem } from "@/types/work";

const sampleWorkTags: WorkItem["tags"] = [
  { label: "Design", variant: "accent" },
  { label: "Coding", variant: "subAccent1" },
  { label: "WordPress", variant: "subAccent2" },
];

export const webDesignWorks: WorkItem[] = Array.from({ length: 3 }, () => ({
  title: "Japan Mobility Data Space",
  imageSrc: images.workThumbnail,
  tags: sampleWorkTags,
}));

export const webDevelopmentWorks: WorkItem[] = Array.from({ length: 6 }, () => ({
  title: "Japan Mobility Data Space",
  imageSrc: images.workThumbnail,
  tags: sampleWorkTags,
}));

export const webPortfolioWorks: WorkItem[] = Array.from({ length: 10 }, () => ({
  title: "Japan Mobility Data Space",
  imageSrc: images.workThumbnail,
  tags: sampleWorkTags,
}));

export const photoCategories: PhotoCategory[] = [
  { title: "Coworking Space", images: [images.photoSample, images.photoSample] },
  { title: "Cafe", images: [images.photoSample, images.photoSample] },
  { title: "Food / Drinks", images: [images.photoSample, images.photoSample] },
  { title: "Accomodation", images: [images.photoSample, images.photoSample] },
  { title: "Restaurant", images: [images.photoSample, images.photoSample] },
  { title: "Gym", images: [images.photoSample, images.photoSample] },
  { title: "Yoga Studio", images: [images.photoSample, images.photoSample] },
  { title: "Animals", images: [images.photoSample, images.photoSample] },
];

export const timelineEntries: TimelineEntry[] = [
  {
    period: "2025-2026",
    description:
      "Completed the German B2 course at VICTORIA | Academy of Languages in Berlin.",
  },
  {
    period: "2024-2025",
    description:
      "Worked as a manager at API BECI City Campus language school in the Philippines, overseeing student management and photography for website and social media content.",
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
      "Graduated from Kanazawa Gakuin University, Department of Fine Arts and Crafts, majoring in Western Painting.",
  },
];

export const navItems = [
  { label: "Web Design", href: "/#web-design" },
  { label: "Web Development", href: "/#web-development" },
  { label: "Photography", href: "/#photography" },
  { label: "Background", href: "/#background" },
  { label: "Contact", href: "/#contact", emphasized: true },
] as const;
