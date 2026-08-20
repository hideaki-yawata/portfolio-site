import type { ButtonHTMLAttributes, ReactNode } from "react";
import { IconImage } from "@/components/IconImage";
import { plusJakartaItalic } from "@/lib/fonts";
import { images } from "@/lib/images";

type PillButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function PillButton({
  children,
  className = "",
  type = "button",
  ...props
}: PillButtonProps) {
  return (
    <button
      type={type}
      className={`${plusJakartaItalic.className} bg-pill-link relative inline-flex cursor-pointer items-center gap-1 rounded-3xl pb-[3px] pl-4 pr-3 pt-0.5 text-xl font-bold italic leading-[1.5] text-background disabled:cursor-not-allowed disabled:opacity-50 md:gap-2 md:text-2xl ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <IconImage
        src={images.icons.contactSubmitArrow}
        width={24}
        height={24}
        className="relative z-10 size-5 shrink-0 md:size-6"
        alt=""
      />
    </button>
  );
}
