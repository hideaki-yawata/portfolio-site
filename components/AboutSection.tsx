import { TimelineList } from "@/components/TimelineList";
import type { TimelineEntry } from "@/types/work";

type AboutSectionProps = {
  paragraphs: readonly string[];
  entries: TimelineEntry[];
};

export function AboutSection({ paragraphs, entries }: AboutSectionProps) {
  return (
    <section id="about" className="flex justify-center px-6 py-8 md:py-8 xl:px-0 xl:py-16">
      <div className="flex w-full max-w-[1200px] flex-col gap-8 md:gap-16 xl:max-w-none">
        <div className="flex flex-col gap-4 text-text md:gap-6 xl:px-32">
          <h2 className="text-2xl font-bold leading-[1.2] md:text-[32px]">
            About
          </h2>
          <div className="flex flex-col gap-4 text-xs leading-[1.5] md:text-base">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="xl:px-12">
          <TimelineList entries={entries} />
        </div>
      </div>
    </section>
  );
}
