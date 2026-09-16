"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  PhotoLightbox,
  type PhotoLightboxItem,
} from "@/components/PhotoLightbox";
import type { PhotoCategory } from "@/types/work";

type PhotographyHomeGridProps = {
  categories: PhotoCategory[];
};

export function PhotographyHomeGrid({ categories }: PhotographyHomeGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    const flat: PhotoLightboxItem[] = [];

    categories.forEach((category) => {
      category.images.forEach((src, index) => {
        flat.push({
          src,
          alt: `${category.title} ${index + 1}`,
        });
      });
    });

    return flat;
  }, [categories]);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className="relative aspect-[3/2] w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0"
            aria-label={item.alt}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={item.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 767px) 50vw, (max-width: 1279px) 25vw, 218px"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <PhotoLightbox
          items={items}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onIndexChange={setActiveIndex}
        />
      ) : null}
    </>
  );
}
