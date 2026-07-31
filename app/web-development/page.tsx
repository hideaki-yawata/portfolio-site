import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HomeLink } from "@/components/HomeLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SubPageHero } from "@/components/SubPageHero";
import { WorkCard } from "@/components/WorkCard";
import { images } from "@/lib/images";
import { webPortfolioWorks } from "@/lib/topPageData";

export const metadata: Metadata = {
  title: "Web Design / Development | Hideaki Yawata Portfolio Site",
  description: "Web design and development portfolio works",
};

export default function WebDevelopmentPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-text">
      <div className="relative">
        <SiteHeader />
        <SubPageHero
          title="Web Development"
          imageSrc={images.webSubHero}
        />
      </div>

      <div className="px-4 pb-6 pt-4 xl:px-[120px] xl:pb-8 xl:pt-6">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 xl:gap-12">
          <Breadcrumb
            currentMobile="Web Design / Development"
            currentTablet="Web Development"
          />

          <div className="flex flex-col items-center gap-12 xl:gap-16">
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {webPortfolioWorks.map((work, index) => (
                <div
                  key={`web-portfolio-${index}`}
                  className={index === 9 ? "md:hidden" : undefined}
                >
                  <WorkCard work={work} listing />
                </div>
              ))}
            </div>
            <HomeLink />
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
