import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { HomeSidebar } from "@/components/HomeSidebar";
import { PhotographyHomeGrid } from "@/components/PhotographyHomeGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkCard } from "@/components/WorkCard";
import {
  HOME_PHOTO_CATEGORY_COUNT,
  HOME_PHOTOGRAPHY_ENTRY_LIMIT,
  HOME_PHOTOS_PER_CATEGORY,
  HOME_WEB_DEVELOPMENT_LIMIT,
  MICROCMS_CATEGORY_DEPTH,
} from "@/lib/contentLimits";
import {
  getPhotographyList,
  getWebDevelopmentList,
  toPhotoCategories,
} from "@/lib/microcms";
import {
  aboutIntroParagraphs,
  timelineEntries,
  webDevelopmentDesignDescription,
} from "@/lib/topPageData";

export default async function Home() {
  const [webDevelopmentData, photographyData] = await Promise.all([
    getWebDevelopmentList({
      limit: HOME_WEB_DEVELOPMENT_LIMIT,
      depth: MICROCMS_CATEGORY_DEPTH,
    }),
    getPhotographyList({ limit: HOME_PHOTOGRAPHY_ENTRY_LIMIT }),
  ]);

  const photoCategories = toPhotoCategories(photographyData.contents, {
    maxImagesPerCategory: HOME_PHOTOS_PER_CATEGORY,
  }).slice(0, HOME_PHOTO_CATEGORY_COUNT);

  return (
    <div className="flex min-h-full flex-col bg-background pt-12 text-text xl:pt-0 xl:pl-[400px]">
      <div className="xl:hidden">
        <SiteHeader />
      </div>
      <HomeSidebar />

      <div className="xl:hidden">
        <HeroSection />
      </div>

      <main className="flex flex-col">
        <section
          id="work"
          className="flex justify-center px-6 py-8 md:py-8 xl:px-12 xl:pb-16 xl:pt-16"
        >
          <div className="flex w-full max-w-[1200px] flex-col gap-4 md:gap-6 xl:max-w-none">
            <SectionHeading
              title="Web Development / Design"
              description={webDevelopmentDesignDescription}
              viewAllHref="/web-development"
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
          className="flex justify-center px-6 py-8 md:py-8 xl:px-12 xl:py-16"
        >
          <div className="flex w-full max-w-[1200px] flex-col gap-4 md:gap-6 xl:max-w-none">
            <SectionHeading
              title="Photography"
              description="I photograph essential visual assets for websites, including spaces and products."
              viewAllHref="/photography"
            />
            <PhotographyHomeGrid categories={photoCategories} />
          </div>
        </section>

        <AboutSection
          paragraphs={aboutIntroParagraphs}
          entries={timelineEntries}
        />

        <ContactSection />
        <SiteFooter />
      </main>
    </div>
  );
}
