import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { plusJakartaItalic } from "@/lib/fonts";
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
    <div className={`flex w-full flex-col gap-2 ${alignmentClass}`}>
      <div className="flex w-full flex-col gap-4 md:gap-6">
        <div className="flex items-start gap-4 md:items-end">
          <div className="relative flex shrink-0 items-center gap-2.5">
            <IconImage
              src={images.icons.sectionHighlight}
              width={41}
              height={22}
              className="absolute -left-1 top-0 h-[22px] w-[41px] md:-left-2 md:h-8 md:w-[60px]"
            />
            <span
              className={`${plusJakartaItalic.className} relative text-[36px] font-bold leading-none text-accent md:text-[48px]`}
            >
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
        <Link
          href={viewAllHref}
          className={`${plusJakartaItalic.className} inline-flex items-end gap-0.5 border-b border-accent text-xs font-bold leading-[1.5] text-accent md:text-base xl:self-start`}
        >
          View All Work
          <IconImage
            src={images.icons.viewAllArrow}
            width={16}
            height={16}
            className="rotate-90 md:h-[22px] md:w-[22px]"
          />
        </Link>
      ) : null}
    </div>
  );
}
