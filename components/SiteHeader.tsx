import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { navItems } from "@/lib/topPageData";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-[15px] text-background md:justify-center md:px-4 md:py-0 xl:px-[120px]">
      <div className="flex h-12 w-full max-w-[1200px] items-center justify-between md:h-[60px]">
        <p className="text-xs font-bold leading-[1.5] md:text-base">
          Hideaki Yawata Portfolio Site
        </p>

        <nav
          className="hidden items-center gap-4 text-xs leading-[1.5] md:flex"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
        >
          <Image
            src={images.icons.hamburger}
            alt=""
            fill
            className="object-contain"
          />
        </button>
      </div>
    </header>
  );
}
