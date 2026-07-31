import Image from "next/image";
import { subPageHeroFillSizes } from "@/lib/imageSizes";

type SubPageHeroProps = {
  title: string;
  imageSrc: { mobile: string; tablet: string; desktop: string };
};

export function SubPageHero({ title, imageSrc }: SubPageHeroProps) {
  return (
    <section className="relative flex h-[200px] w-full items-center px-4 xl:px-[120px]">
      <Image
        src={imageSrc.mobile}
        alt=""
        fill
        className="object-cover md:hidden"
        priority
        sizes={subPageHeroFillSizes.mobile}
      />
      <Image
        src={imageSrc.tablet}
        alt=""
        fill
        className="hidden object-cover md:block xl:hidden"
        priority
        sizes={subPageHeroFillSizes.tablet}
      />
      <Image
        src={imageSrc.desktop}
        alt=""
        fill
        className="hidden object-cover xl:block"
        priority
        sizes={subPageHeroFillSizes.desktop}
      />
      <span
        className="pointer-events-none absolute inset-0 bg-[rgba(44,44,42,0.25)]"
        aria-hidden
      />
      <h1 className="relative z-10 mx-auto w-full max-w-[1200px] text-[32px] font-bold leading-[1.2] text-background md:text-[48px]">
        {title}
      </h1>
    </section>
  );
}
