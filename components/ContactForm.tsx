"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { IconImage } from "@/components/IconImage";
import { plusJakartaItalic } from "@/lib/fonts";
import { images } from "@/lib/images";
import { CONTACT_HONEYPOT_FIELD } from "@/lib/contactHoneypot";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const fieldLabelClassName =
  "text-base font-bold leading-[1.2] text-text md:text-xl";
const fieldControlClassName =
  "w-full rounded border border-overlay bg-background text-xs leading-[1.5] text-text outline-none focus-visible:ring-2 focus-visible:ring-accent md:text-base";

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className }: ContactFormProps) {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function resetTurnstile() {
    setTurnstileToken(null);
    turnstileRef.current?.reset();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (turnstileSiteKey && !turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the verification check.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          [CONTACT_HONEYPOT_FIELD]: website,
          turnstileToken,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again.",
        );
        resetTurnstile();
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
      setStatus("success");
      resetTurnstile();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      resetTurnstile();
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex w-full flex-col items-end gap-4 xl:items-start xl:gap-8 ${className ?? ""}`}
    >
      <div
        className="absolute h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name={CONTACT_HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="contact-name" className={fieldLabelClassName}>
            Name<span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={isSubmitting}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={`${fieldControlClassName} h-[34px] px-2 md:h-10 md:px-3 disabled:opacity-50`}
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="contact-email" className={fieldLabelClassName}>
            Email Address<span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={isSubmitting}
            placeholder="example@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`${fieldControlClassName} h-[34px] px-2 placeholder:text-overlay md:h-10 md:px-3 disabled:opacity-50`}
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="contact-message" className={fieldLabelClassName}>
            Message<span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            disabled={isSubmitting}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${fieldControlClassName} h-[104px] resize-none px-2 py-2 md:h-[136px] md:px-3 md:py-2 disabled:opacity-50`}
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-end gap-2 xl:items-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${plusJakartaItalic.className} inline-flex items-center gap-1 bg-accent py-0.5 pl-3 pr-2 text-base font-bold leading-[1.5] text-background disabled:cursor-not-allowed disabled:opacity-50 md:gap-2 md:py-1 md:pl-4 md:pr-2 md:text-2xl`}
        >
          {isSubmitting ? "Sending…" : "Submit"}
          <IconImage
            src={images.icons.contactArrowUp}
            width={24}
            height={24}
            className="size-6 shrink-0 md:size-[30px]"
            alt=""
          />
        </button>

        {status === "success" ? (
          <p
            className="text-xs leading-[1.5] text-text md:text-base"
            role="status"
          >
            Thank you. Your message has been sent.
          </p>
        ) : null}
        {status === "error" ? (
          <p
            className="text-xs leading-[1.5] text-text md:text-base"
            role="alert"
          >
            {errorMessage}
          </p>
        ) : null}

        {turnstileSiteKey ? (
          <Turnstile
            ref={turnstileRef}
            siteKey={turnstileSiteKey}
            options={{ action: "contact", theme: "light" }}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken(null)}
            onError={() => {
              setTurnstileToken(null);
              setErrorMessage("Verification failed. Please try again.");
              setStatus("error");
            }}
          />
        ) : null}
      </div>
    </form>
  );
}
