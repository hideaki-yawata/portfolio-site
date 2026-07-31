"use client";

import Image from "next/image";
import { IconImage } from "@/components/IconImage";
import { responsiveHeroFillSizes } from "@/lib/imageSizes";
import { images } from "@/lib/images";

const transitionClass = "duration-300 ease-in-out";

type HeroPanelProps = {
  title: string;
  titleLines?: string[];
  description: string;
  imageSrc: { mobile: string; tablet: string; desktop: string };
  href: string;
};

function HeroTitle({
  title,
  titleLines,
}: Pick<HeroPanelProps, "title" | "titleLines">) {
  if (titleLines) {
    return (
      <>
        <span className="block text-[32px] leading-[1.2] tracking-[1.28px] md:hidden">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
        <span className="hidden text-[48px] leading-[1.2] tracking-[1.92px] md:inline xl:text-center">
          {title}
        </span>
      </>
    );
  }

  return (
    <span className="text-[32px] leading-[1.2] tracking-[1.28px] md:text-[48px] md:tracking-[1.92px] xl:text-center">
      {title}
    </span>
  );
}

export function HeroPanel({
  title,
  titleLines,
  description,
  imageSrc,
  href,
}: HeroPanelProps) {
  return (
    <a
      href={href}
      className="group relative flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden"
    >
      <Image
        src={imageSrc.mobile}
        alt=""
        fill
        className="object-cover md:hidden"
        sizes={responsiveHeroFillSizes.mobile}
        priority
      />
      <Image
        src={imageSrc.tablet}
        alt=""
        fill
        className="hidden object-cover md:block xl:hidden"
        sizes={responsiveHeroFillSizes.tablet}
      />
      <Image
        src={imageSrc.desktop}
        alt=""
        fill
        className="hidden object-cover xl:block"
        sizes={responsiveHeroFillSizes.desktop}
      />
      <span
        className={`pointer-events-none absolute inset-0 bg-[rgba(44,44,42,0.25)] transition-colors ${transitionClass} group-hover:bg-[rgba(44,44,42,0.5)] group-focus-visible:bg-[rgba(44,44,42,0.5)]`}
        aria-hidden
      />

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-end px-4 pb-12 md:justify-center md:gap-3 md:pb-0 xl:justify-center">
        <div className="relative grid w-full max-w-[1200px] place-items-center">
          <div
            className={`col-start-1 row-start-1 w-full text-center font-bold text-background transition-opacity ${transitionClass} group-hover:opacity-0 group-focus-visible:opacity-0`}
          >
            <HeroTitle title={title} titleLines={titleLines} />
          </div>
          <p
            className={`col-start-1 row-start-1 w-full px-2 text-center text-xl font-normal leading-[1.5] text-background opacity-0 transition-opacity ${transitionClass} group-hover:opacity-100 group-focus-visible:opacity-100 md:text-2xl`}
          >
            {description}
          </p>
        </div>
        <span
          className={`inline-flex rotate-180 transition-transform ${transitionClass} group-hover:translate-y-4 group-focus-visible:translate-y-4 xl:hidden`}
        >
          <IconImage
            src={images.icons.heroArrowTablet}
            width={22}
            height={38}
            className="h-[38px] w-[22px] md:h-[58px] md:w-8"
          />
        </span>
      </div>

      <span
        className={`absolute bottom-[52px] left-1/2 hidden -translate-x-1/2 rotate-180 transition-transform ${transitionClass} group-hover:translate-x-[-50%] group-hover:translate-y-4 group-focus-visible:translate-x-[-50%] group-focus-visible:translate-y-4 xl:inline-flex`}
      >
        <IconImage
          src={images.icons.heroArrowDesktop}
          width={32}
          height={20}
        />
      </span>
    </a>
  );
}

export function HeroSection() {
  return (
    <section className="flex h-screen w-full flex-col xl:flex-row">
      <HeroPanel
        title="WEB DESIGN"
        description="I deliver design data optimized for Design-to-Code."
        imageSrc={images.heroWebDesign}
        href="#web-design"
      />
      <HeroPanel
        title="WEB DEVELOPMENT"
        titleLines={["WEB ", "DEVELOPMENT"]}
        description="I handle coding, CMS integration, maintenance, and operations."
        imageSrc={images.heroWebDevelopment}
        href="#web-development"
      />
      <HeroPanel
        title="PHOTOGRAPHY"
        description="I photograph essential visual assets for websites, including spaces and products."
        imageSrc={images.heroPhotography}
        href="#photography"
      />
    </section>
  );
}
