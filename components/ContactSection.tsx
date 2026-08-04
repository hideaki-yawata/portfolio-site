import Image from "next/image";
import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { plusJakartaItalic } from "@/lib/fonts";
import { images } from "@/lib/images";
import { contactFormHref, githubHref, linkedInHref } from "@/lib/topPageData";

export function ContactSection() {
  return (
    <section id="contact" className="w-full px-4 xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col xl:flex-row">
        <div className="flex w-full flex-col items-end gap-8 py-8 md:gap-12 md:py-12 xl:w-1/2 xl:items-start xl:gap-12 xl:py-12 xl:pr-4">
          <div className="flex w-full flex-col gap-4 text-text">
            <h2 className="text-[32px] font-bold leading-[1.2] md:text-[48px]">
              Contact
            </h2>
            <p className="text-xs leading-[1.5] md:text-base">
              Feel free to get in touch.
            </p>
          </div>

          <div className="flex w-fit max-w-full flex-col items-end gap-4 xl:items-start">
            <Link
              href={contactFormHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${plusJakartaItalic.className} inline-flex w-fit items-center gap-1 bg-accent py-0.5 pl-3 pr-2 text-base font-bold leading-[1.5] text-background md:gap-2 md:py-1 md:pl-4 md:pr-2 md:text-2xl`}
            >
              Contact Me
              <IconImage
                src={images.icons.contactArrowUp}
                width={24}
                height={24}
                className="size-6 shrink-0 md:size-[30px]"
              />
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href={linkedInHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconImage
                  src={images.icons.linkedin}
                  width={16}
                  height={16}
                  className="md:h-6 md:w-6"
                />
              </Link>
              <Link
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <IconImage
                  src={images.icons.github}
                  width={16}
                  height={16}
                  className="md:h-6 md:w-6"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="relative h-[328px] w-full overflow-hidden">
            <Image
              src={images.contactPhoto}
              alt="Workspace with laptop and camera"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
