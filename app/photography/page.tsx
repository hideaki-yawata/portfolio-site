import type { Metadata } from "next";
import { HomeLink } from "@/components/HomeLink";
import { HomeSidebar } from "@/components/HomeSidebar";
import { PhotographyGalleries } from "@/components/PhotographyGalleries";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SubPageHeader } from "@/components/SubPageHeader";
import { SUBPAGE_MICROCMS_LIST_LIMIT } from "@/lib/contentLimits";
import { getPhotographyList, toPhotoCategories } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "Photography | Hideaki Yawata Portfolio Site",
  description: "Photography portfolio by category",
};

export default async function PhotographyPage() {
  const photographyData = await getPhotographyList({
    limit: SUBPAGE_MICROCMS_LIST_LIMIT,
  });
  const photoCategories = toPhotoCategories(photographyData.contents);

  return (
    <div className="flex min-h-full flex-col bg-background pt-12 text-text xl:pt-0 xl:pl-[400px]">
      <div className="xl:hidden">
        <SiteHeader />
      </div>
      <HomeSidebar />

      <div className="xl:hidden">
        <SubPageHeader title="Photography" />
      </div>

      <main className="flex flex-col">
        <div className="flex flex-col items-center px-6 pb-6 pt-8 md:pb-6 md:pt-8 xl:px-12 xl:pb-6 xl:pt-16">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-8 md:gap-12 xl:max-w-none xl:gap-12">
            <h1 className="hidden w-full text-[32px] font-bold leading-[1.2] text-text xl:block">
              Photography
            </h1>
            <PhotographyGalleries
              categories={photoCategories}
              subPage
              gridClassName="flex w-full flex-col gap-6 md:gap-8 xl:gap-8"
            />
            <HomeLink />
          </div>
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
