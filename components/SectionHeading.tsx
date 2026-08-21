import { IconImage } from "@/components/IconImage";
import { PillLink } from "@/components/PillLink";
import { images } from "@/lib/images";

type SectionHeadingProps = {
  number: string;
  title: string;
  description?: string;
  viewAllHref?: string;
  alignEnd?: boolean;
};

export function SectionHeading({
  number,
  title,
  description,
  viewAllHref,
  alignEnd = false,
}: SectionHeadingProps) {
  const alignmentClass = alignEnd ? "items-end xl:items-start" : "items-start";

  return (
    <div
      className={`flex w-full flex-col ${viewAllHref ? "gap-4" : "gap-2"} ${alignmentClass}`}
    >
      <div className="flex w-full flex-col gap-4 md:gap-6">
        <div className="flex items-start gap-4 md:items-end">
          <div className="relative flex shrink-0 items-center gap-2.5">
            <IconImage
              src={images.icons.sectionHighlight}
              width={41}
              height={22}
              className="absolute -left-1 top-0 md:hidden"
            />
            <IconImage
              src={images.icons.sectionHighlight}
              width={60}
              height={32}
              className="absolute -left-2 top-0 hidden md:block"
            />
            <span className="relative text-[36px] font-bold italic leading-none text-accent md:text-[48px]">
              {number}
            </span>
          </div>
          <h2 className="min-w-0 flex-1 text-2xl font-bold leading-[1.2] text-text md:text-[32px]">
            {title}
          </h2>
        </div>
        {description ? (
          <p className="text-xs leading-[1.5] text-text md:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {viewAllHref ? (
        <PillLink href={viewAllHref} className="xl:self-start">
          View All Work
        </PillLink>
      ) : null}
    </div>
  );
}
