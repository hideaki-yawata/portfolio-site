import Image from "next/image";
import Link from "next/link";
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
      <Link href="/" className="shrink-0 font-normal text-accent">
        Home
      </Link>
      <Image
        src={images.icons.breadcrumbSeparator}
        alt=""
        width={8}
        height={8}
        className="mx-1 size-2 shrink-0 md:mx-0 md:size-3"
      />
      <span className="font-bold text-text md:hidden">{currentMobile}</span>
      <span className="hidden font-bold text-text md:inline">{currentTablet}</span>
    </nav>
  );
}
