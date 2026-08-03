import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HomeLink } from "@/components/HomeLink";
import { PhotographyGalleries } from "@/components/PhotographyGalleries";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SubPageHero } from "@/components/SubPageHero";
import { images } from "@/lib/images";
import { photoCategories } from "@/lib/topPageData";

export const metadata: Metadata = {
  title: "Photography | Hideaki Yawata Portfolio Site",
  description: "Photography portfolio by category",
};

export default function PhotographyPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-text">
      <div className="relative">
        <SiteHeader />
        <SubPageHero title="Photography" imageSrc={images.photoSubHero} />
      </div>

      <div className="px-4 pb-6 pt-4 xl:px-[120px] xl:pb-8 xl:pt-6">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 xl:gap-12">
          <Breadcrumb currentMobile="Photography" currentTablet="Photography" />

          <div className="flex flex-col items-center gap-12 xl:gap-16">
            <PhotographyGalleries
              categories={photoCategories}
              subPage
              gridClassName="grid w-full grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-2 md:gap-y-4"
            />
            <HomeLink />
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
