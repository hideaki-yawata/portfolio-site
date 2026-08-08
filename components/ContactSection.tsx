import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/lib/images";

export function ContactSection() {
  return (
    <section id="contact" className="w-full px-4 py-8 md:px-4 md:py-8 xl:px-[120px] xl:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 md:gap-8">
        <SectionHeading
          number="05"
          title="Contact"
          description="Feel free to get in touch."
        />

        <div className="flex w-full flex-col xl:flex-row xl:items-start">
          <ContactForm className="xl:min-w-0 xl:flex-1 xl:pr-4" />

          <div className="relative hidden w-full xl:block xl:flex-1 xl:pt-8">
            <div className="relative h-[312px] w-full overflow-hidden">
              <Image
                src={images.contactPhoto.desktop}
                alt="Workspace with laptop and camera"
                fill
                className="object-cover object-bottom"
                sizes="(min-width: 1280px) 584px, 0px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
