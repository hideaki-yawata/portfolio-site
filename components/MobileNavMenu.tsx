"use client";

import Link from "next/link";
import { useEffect } from "react";
import { IconImage } from "@/components/IconImage";
import { images } from "@/lib/images";
import { githubHref, linkedInHref, navItems } from "@/lib/topPageData";

type MobileNavMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavMenu({ open, onClose }: MobileNavMenuProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      id="mobile-nav-menu"
      className="fixed inset-0 z-[60] bg-background md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <button
        type="button"
        className="absolute right-4 top-[15px] h-[18px] w-[26px]"
        aria-label="Close menu"
        onClick={onClose}
      >
        <IconImage
          src={images.icons.menuClose}
          width={26}
          height={18}
          className="h-full w-full object-contain"
        />
      </button>

      <div className="flex h-full flex-col items-center justify-center">
        <nav
          className="flex flex-col items-center gap-12 text-2xl leading-[1.5] text-text"
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
              onClick={onClose}
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

        <div className="mt-12 flex items-center gap-2">
          <Link
            href={linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onClick={onClose}
          >
            <IconImage
              src={images.icons.linkedinMenu}
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
            onClick={onClose}
          >
            <IconImage
              src={images.icons.githubMenu}
              width={24}
              height={24}
              className="size-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
