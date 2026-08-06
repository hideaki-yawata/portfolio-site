import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type WebDevelopment = {
  title: string;
  thumbnail: MicroCMSImage;
  url: string;
  category: string[];
} & MicroCMSListContent;

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
