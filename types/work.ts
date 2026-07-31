export type WorkTagVariant = "accent" | "subAccent1" | "subAccent2";

export type WorkTag = {
  label: string;
  variant: WorkTagVariant;
};

export type WorkItem = {
  title: string;
  imageSrc: string;
  tags: WorkTag[];
  /** External project URL */
  href: string;
};

export type PhotoCategory = {
  title: string;
  images: string[];
};

export type TimelineEntry = {
  period: string;
  description: string;
};
