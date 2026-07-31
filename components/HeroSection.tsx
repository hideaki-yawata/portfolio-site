import Image from "next/image";
import { images } from "@/lib/images";

type HeroPanelProps = {
  title: string;
  titleLines?: string[];
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
  imageSrc,
  href,
}: HeroPanelProps) {
  return (
    <a
      href={href}
      className="relative flex min-h-[233px] flex-1 flex-col items-center justify-center overflow-hidden md:min-h-[200px] xl:min-h-[800px]"
    >
      <Image
        src={imageSrc.mobile}
        alt=""
        fill
        className="object-cover md:hidden"
        sizes="100vw"
        priority
      />
      <Image
        src={imageSrc.tablet}
        alt=""
        fill
        className="hidden object-cover md:block xl:hidden"
        sizes="100vw"
      />
      <Image
        src={imageSrc.desktop}
        alt=""
        fill
        className="hidden object-cover xl:block"
        sizes="33vw"
      />
      <span
        className="pointer-events-none absolute inset-0 bg-[rgba(44,44,42,0.25)]"
        aria-hidden
      />

      <div className="relative z-10 flex items-end justify-center gap-3 text-center font-bold text-background md:items-center md:gap-3 xl:w-full xl:justify-center">
        <HeroTitle title={title} titleLines={titleLines} />
        <span className="inline-flex rotate-180 xl:hidden">
          <Image
            src={images.icons.heroArrowTablet}
            alt=""
            width={32}
            height={58}
            className="h-[38px] w-[22px] md:h-[58px] md:w-8"
          />
        </span>
      </div>

      <span className="absolute bottom-[52px] left-1/2 hidden -translate-x-1/2 rotate-180 xl:inline-flex">
        <Image
          src={images.icons.heroArrowDesktop}
          alt=""
          width={32}
          height={20}
        />
      </span>
    </a>
  );
}

export function HeroSection() {
  return (
    <section className="flex w-full flex-col xl:flex-row">
      <HeroPanel
        title="WEB DESIGN"
        imageSrc={images.heroWebDesign}
        href="#web-design"
      />
      <HeroPanel
        title="WEB DEVELOPMENT"
        titleLines={["WEB ", "DEVELOPMENT"]}
        imageSrc={images.heroWebDevelopment}
        href="#web-development"
      />
      <HeroPanel
        title="PHOTOGRAPHY"
        imageSrc={images.heroPhotography}
        href="#photography"
      />
    </section>
  );
}
