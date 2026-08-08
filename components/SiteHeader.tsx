"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IconImage } from "@/components/IconImage";
import { MobileNavMenu } from "@/components/MobileNavMenu";
import { images } from "@/lib/images";
import { navItems } from "@/lib/topPageData";

type SiteHeaderProps = {
  /** Solid background and dark text (e.g. pages without a hero image). */
  solid?: boolean;
};

export function SiteHeader({ solid = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const useSolidStyles = solid || scrolled;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex h-12 items-center px-4 py-0 transition-colors md:justify-center xl:h-[60px] xl:px-[120px] ${
        useSolidStyles
          ? "bg-background text-text shadow-[0_1px_0_0_var(--sub-background)]"
          : "bg-transparent text-background"
      }`}
    >
      <div className="flex h-full w-full max-w-[1200px] items-center justify-between">
        <Link
          href="/"
          className="text-base font-bold leading-[1.5] xl:text-xl"
        >
          Hideaki Yawata Portfolio Site
        </Link>

        <nav
          className="hidden items-center gap-4 text-xs leading-[1.5] md:flex xl:gap-6 xl:text-base"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={"external" in item && item.external ? "_blank" : undefined}
              rel={
                "external" in item && item.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className={
                "emphasized" in item && item.emphasized
                  ? "font-bold"
                  : "font-normal"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative h-4 w-6 md:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen(true)}
        >
          <IconImage
            src={images.icons.hamburger}
            alt=""
            width={24}
            height={16}
            className={`h-full w-full object-contain ${useSolidStyles ? "invert" : ""}`}
          />
        </button>
      </div>

      <MobileNavMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
