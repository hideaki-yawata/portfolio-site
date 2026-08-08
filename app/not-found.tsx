import type { Metadata } from "next";
import { HomeLink } from "@/components/HomeLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "404 | Hideaki Yawata Portfolio Site",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col bg-background text-text">
      <SiteHeader solid />

      <main className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 pt-12 xl:pt-[60px]">
        <div className="flex flex-col items-center">
          <p className="text-[32px] font-bold leading-[1.5] text-text md:text-[48px]">
            404
          </p>
          <div className="flex flex-col items-center gap-8">
            <p className="text-base font-normal leading-[1.5] text-text md:text-[24px]">
              This page could not be found.
            </p>
            <HomeLink />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
