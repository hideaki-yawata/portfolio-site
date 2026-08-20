"use client";

const SITE_START_YEAR = 2020;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-2 bg-text p-4 text-background md:px-[120px] md:py-4 xl:px-[120px] xl:py-4">
      <p className="text-xs leading-[1.5]">
        © Hideaki Yawata {SITE_START_YEAR}-{currentYear}
      </p>
    </footer>
  );
}
