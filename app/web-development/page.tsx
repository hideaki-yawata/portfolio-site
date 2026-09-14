import type { Metadata } from "next";
import { HomeLink } from "@/components/HomeLink";
import { HomeSidebar } from "@/components/HomeSidebar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SubPageHeader } from "@/components/SubPageHeader";
import { WorkCard } from "@/components/WorkCard";
import {
  MICROCMS_CATEGORY_DEPTH,
  SUBPAGE_MICROCMS_LIST_LIMIT,
} from "@/lib/contentLimits";
import { getWebDevelopmentList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "Web Development / Design | Hideaki Yawata Portfolio Site",
  description: "Web design and development portfolio works",
};

export default async function WebDevelopmentPage() {
  const data = await getWebDevelopmentList({
    limit: SUBPAGE_MICROCMS_LIST_LIMIT,
    depth: MICROCMS_CATEGORY_DEPTH,
  });

  return (
    <div className="flex min-h-full flex-col bg-background pt-12 text-text xl:pt-0 xl:pl-[400px]">
      <div className="xl:hidden">
        <SiteHeader />
      </div>
      <HomeSidebar />

      <div className="xl:hidden">
        <SubPageHeader title="Web Development / Design" />
      </div>

      <main className="flex flex-col">
        <div className="flex flex-col items-center px-6 pb-6 pt-8 md:pb-6 md:pt-8 xl:px-12 xl:pb-6 xl:pt-16">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-8 md:gap-12 xl:max-w-none xl:gap-12">
            <h1 className="hidden w-full text-[32px] font-bold leading-[1.2] text-text xl:block">
              Web Development / Design
            </h1>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {data.contents.map((item) => (
                <WorkCard key={item.id} item={item} />
              ))}
            </div>
            <HomeLink />
          </div>
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
