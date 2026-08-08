"use client";

import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { images } from "@/lib/images";
import { githubHref, linkedInHref } from "@/lib/topPageData";

const SITE_START_YEAR = 2020;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-2 bg-text p-4 text-background md:px-[120px] md:py-4 xl:px-[120px] xl:py-4">
      <div className="flex items-center gap-2">
        <Link
          href={linkedInHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <IconImage
            src={images.icons.linkedinFooter}
            width={24}
            height={24}
            className="size-6"
          />
        </Link>
        <Link
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <IconImage
            src={images.icons.githubFooter}
            width={24}
            height={24}
            className="size-6"
          />
        </Link>
      </div>
      <p className="text-xs leading-[1.5]">
        © Hideaki Yawata {SITE_START_YEAR}-{currentYear}
      </p>
    </footer>
  );
}
