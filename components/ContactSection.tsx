import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="flex justify-center px-6 py-8 md:py-8 xl:px-32 xl:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 md:gap-12 xl:max-w-none">
        <SectionHeading
          title="Contact"
          description="Feel free to get in touch."
        />
        <ContactForm />
      </div>
    </section>
  );
}
