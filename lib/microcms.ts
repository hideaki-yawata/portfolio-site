import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";
import type { PhotoCategory } from "@/types/work";

export type MicroCMSWorkCategory = {
  name: string;
};

export type MicroCMSWorkItem = {
  title: string;
  thumbnail: MicroCMSImage;
  url: string;
  category: MicroCMSWorkCategory[];
} & MicroCMSListContent;

export type WebDesign = MicroCMSWorkItem;
export type WebDevelopment = MicroCMSWorkItem;

/** Repeater block inside a photography API entry */
export type PhotographyContentBlock = {
  fieldId: string;
  heading: string;
  image: MicroCMSImage[];
};

export type Photography = {
  contents: PhotographyContentBlock[];
} & MicroCMSListContent;

type ToPhotoCategoriesOptions = {
  /** Max images per category (TOP preview uses 2) */
  maxImagesPerCategory?: number;
};

export function toPhotoCategories(
  entries: Photography[],
  options?: ToPhotoCategoriesOptions,
): PhotoCategory[] {
  const maxImages = options?.maxImagesPerCategory;

  return entries.flatMap((entry) =>
    entry.contents.map((block) => {
      const urls = block.image.map((img) => img.url);
      return {
        title: block.heading,
        images:
          maxImages !== undefined ? urls.slice(0, maxImages) : urls,
      };
    }),
  );
}

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getWebDesignList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<WebDesign>({
    endpoint: "web-design",
    queries,
  });
  return listData;
};

export const getWebDevelopmentList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<WebDevelopment>({
    endpoint: "web-development",
    queries,
  });
  return listData;
};

export const getPhotographyList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Photography>({
    endpoint: "photography",
    queries,
  });
  return listData;
};
