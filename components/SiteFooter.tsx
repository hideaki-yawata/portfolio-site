"use client";

const SITE_START_YEAR = 2020;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex h-12 items-center justify-center bg-text px-4 text-background md:h-[60px]">
      <p className="text-xs leading-[1.5]">
        © Hideaki Yawata {SITE_START_YEAR}-{currentYear}
      </p>
    </footer>
  );
}
