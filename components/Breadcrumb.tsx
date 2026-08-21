import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { images } from "@/lib/images";

type BreadcrumbProps = {
  currentMobile: string;
  currentTablet: string;
};

export function Breadcrumb({ currentMobile, currentTablet }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1 text-xs leading-[1.5] md:text-base"
    >
      <Link
        href="/"
        className="shrink-0 border-b border-accent font-medium text-accent hover:border-transparent"
      >
        Home
      </Link>
      <IconImage
        src={images.icons.breadcrumbSeparator}
        width={8}
        height={8}
        className="mx-1 size-2 shrink-0 md:mx-0 md:size-3"
      />
      <span className="font-bold text-text md:hidden">{currentMobile}</span>
      <span className="hidden font-bold text-text md:inline">{currentTablet}</span>
    </nav>
  );
}
