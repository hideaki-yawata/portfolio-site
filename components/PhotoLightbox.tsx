"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { IconImage } from "@/components/IconImage";
import { images } from "@/lib/images";

export type PhotoLightboxItem = {
  src: string;
  alt: string;
};

type PhotoLightboxProps = {
  items: PhotoLightboxItem[];
  activeIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function PhotoLightbox({
  items,
  activeIndex,
  onClose,
  onIndexChange,
}: PhotoLightboxProps) {
  const item = items[activeIndex];
  const count = items.length;

  const goPrev = useCallback(() => {
    onIndexChange((activeIndex - 1 + count) % count);
  }, [activeIndex, count, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((activeIndex + 1) % count);
  }, [activeIndex, count, onIndexChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        goPrev();
      } else if (event.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [goNext, goPrev, onClose]);

  if (!item) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-overlay-75 px-4 xl:px-[120px]"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      <button
        type="button"
        className="absolute inset-0 z-0 cursor-default"
        aria-label="Close photo viewer"
        onClick={onClose}
      />

      <div className="relative z-10 aspect-[3/2] w-full max-w-[1200px] shrink-0">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 768px, 1200px"
          priority
        />
      </div>

      <button
        type="button"
        className="absolute right-4 top-[15px] z-20 h-[18px] w-[26px] cursor-pointer"
        aria-label="Close"
        onClick={onClose}
      >
        <IconImage
          src={images.icons.modalClose}
          width={26}
          height={18}
          className="h-full w-full object-contain"
        />
      </button>

      {count > 1 ? (
        <>
          <button
            type="button"
            className="absolute left-4 top-1/2 z-20 h-8 w-5 -translate-y-1/2 cursor-pointer"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
          >
            <IconImage
              src={images.icons.modalArrowPrev}
              width={20}
              height={32}
              className="h-full w-full object-contain"
            />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-20 h-8 w-5 -translate-y-1/2 cursor-pointer"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
          >
            <IconImage
              src={images.icons.modalArrowNext}
              width={20}
              height={32}
              className="h-full w-full object-contain"
            />
          </button>
        </>
      ) : null}
    </div>
  );
}
