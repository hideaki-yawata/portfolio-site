import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { images } from "@/lib/images";

type PillLinkProps = {
  href: string;
  children: string;
  direction?: "forward" | "back";
  className?: string;
};

export function PillLink({
  href,
  children,
  direction = "forward",
  className = "",
}: PillLinkProps) {
  const isBack = direction === "back";

  return (
    <Link
      href={href}
      className={`bg-pill-link relative inline-flex items-center gap-1 rounded-2xl pb-[3px] pt-0.5 text-xs font-bold italic leading-[1.5] text-background md:text-base ${
        isBack ? "pl-2 pr-3" : "pl-3 pr-2"
      } ${className}`}
    >
      {isBack ? (
        <IconImage
          src={images.icons.pillLinkArrowRight}
          width={16}
          height={16}
          className="relative z-10 size-4 shrink-0 -scale-x-100"
        />
      ) : null}
      <span className="relative z-10">{children}</span>
      {!isBack ? (
        <IconImage
          src={images.icons.pillLinkArrowRight}
          width={16}
          height={16}
          className="relative z-10 size-4 shrink-0"
        />
      ) : null}
    </Link>
  );
}
