"use client";

import { useRef, useState } from "react";
import { IconImage } from "@/components/IconImage";
import { plusJakartaItalic } from "@/lib/fonts";
import { images } from "@/lib/images";
import {
  contactFormAction,
  contactFormEntryMessage,
  contactFormEntryName,
} from "@/lib/topPageData";

const fieldLabelClassName =
  "text-base font-bold leading-[1.2] text-text md:text-xl";
const fieldControlClassName =
  "w-full rounded border border-overlay bg-background text-xs leading-[1.5] text-text outline-none focus-visible:ring-2 focus-visible:ring-accent md:text-base";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const hiddenMessageRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action={contactFormAction}
      method="POST"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full flex-col items-end gap-4 xl:items-start xl:gap-8 ${className ?? ""}`}
      onSubmit={() => {
        if (hiddenMessageRef.current) {
          hiddenMessageRef.current.value = `Email: ${email}\n\n${message}`;
        }
      }}
    >
      <input
        ref={hiddenMessageRef}
        type="hidden"
        name={contactFormEntryMessage}
        defaultValue=""
      />
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="contact-name" className={fieldLabelClassName}>
            Name<span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name={contactFormEntryName}
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={`${fieldControlClassName} h-[34px] px-2 md:h-10 md:px-3`}
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="contact-email" className={fieldLabelClassName}>
            Email Address<span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            placeholder="example@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`${fieldControlClassName} h-[34px] px-2 placeholder:text-overlay md:h-10 md:px-3`}
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="contact-message" className={fieldLabelClassName}>
            Message<span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${fieldControlClassName} h-[104px] resize-none px-2 py-2 md:h-[136px] md:px-3 md:py-2`}
          />
        </div>
      </div>

      <button
        type="submit"
        className={`${plusJakartaItalic.className} inline-flex items-center gap-1 bg-accent py-0.5 pl-3 pr-2 text-base font-bold leading-[1.5] text-background md:gap-2 md:py-1 md:pl-4 md:pr-2 md:text-2xl`}
      >
        Submit
        <IconImage
          src={images.icons.contactArrowUp}
          width={24}
          height={24}
          className="size-6 shrink-0 md:size-[30px]"
          alt=""
        />
      </button>
    </form>
  );
}
