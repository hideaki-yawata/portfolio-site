import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { PhotographyGalleries } from "@/components/PhotographyGalleries";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TimelineList } from "@/components/TimelineList";
import { WorkCard } from "@/components/WorkCard";
import {
  getPhotographyList,
  getWebDevelopmentList,
  getWebDesignList,
  toPhotoCategories,
} from "@/lib/microcms";
import { timelineEntries } from "@/lib/topPageData";

export default async function Home() {
  const [webDesignData, webDevelopmentData, photographyData] =
    await Promise.all([
      getWebDesignList({ limit: 3, depth: 1 }),
      getWebDevelopmentList({ limit: 3, depth: 1 }),
      getPhotographyList({ limit: 1 }),
    ]);

  const photoCategories = toPhotoCategories(photographyData.contents, {
    maxImagesPerCategory: 2,
  }).slice(0, 4);

  return (
    <div className="flex flex-col bg-background text-text">
      <div className="relative">
        <SiteHeader />
        <HeroSection />
      </div>

      <section
        id="web-design"
        className="flex justify-center bg-background px-4 py-8 xl:px-[120px] xl:py-16"
      >
        <div className="flex w-full max-w-[1200px] flex-col gap-6 md:gap-8">
          <SectionHeading
            number="01"
            title="Web Design"
            description="I deliver design data optimized for Design-to-Code."
            alignEnd
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {webDesignData.contents.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="web-development"
        className="flex justify-center bg-sub-background px-4 py-8 xl:px-[120px] xl:py-16"
      >
        <div className="flex w-full max-w-[1200px] flex-col gap-6 md:gap-8">
          <SectionHeading
            number="02"
            title="Web Development"
            description="I handle coding, CMS integration, maintenance, and operations."
            viewAllHref="/web-development"
            alignEnd
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {webDevelopmentData.contents.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="photography"
        className="flex justify-center bg-background px-4 py-8 xl:px-[120px] xl:py-16"
      >
        <div className="flex w-full max-w-[1200px] flex-col gap-6 md:gap-8">
          <SectionHeading
            number="03"
            title="Photography"
            description="I photograph essential visual assets for websites, including spaces and products."
            viewAllHref="/photography"
            alignEnd
          />
          <PhotographyGalleries
            categories={photoCategories}
            gridClassName="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-2 md:gap-y-4 xl:grid-cols-2 xl:gap-x-2 xl:gap-y-4"
          />
        </div>
      </section>

      <section
        id="background"
        className="flex justify-center bg-sub-background px-4 py-8 xl:px-[120px] xl:py-16"
      >
        <div className="flex w-full max-w-[1200px] flex-col gap-6 md:gap-8">
          <SectionHeading number="04" title="Background" />
          <TimelineList entries={timelineEntries} />
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
