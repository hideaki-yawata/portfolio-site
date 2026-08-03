"use client";

import { useMemo, useState } from "react";
import { PhotoCategoryGallery } from "@/components/PhotoCategoryGallery";
import {
  PhotoLightbox,
  type PhotoLightboxItem,
} from "@/components/PhotoLightbox";
import type { PhotoCategory } from "@/types/work";

type PhotographyGalleriesProps = {
  categories: PhotoCategory[];
  subPage?: boolean;
  /** Grid wrapper class (TOP vs sub-page layout) */
  gridClassName?: string;
};

export function PhotographyGalleries({
  categories,
  subPage,
  gridClassName,
}: PhotographyGalleriesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { items, categoryOffsets } = useMemo(() => {
    const flat: PhotoLightboxItem[] = [];
    const offsets: number[] = [];

    categories.forEach((category) => {
      offsets.push(flat.length);
      category.images.forEach((src, index) => {
        flat.push({
          src,
          alt: `${category.title} ${index + 1}`,
        });
      });
    });

    return { items: flat, categoryOffsets: offsets };
  }, [categories]);

  return (
    <>
      <div className={gridClassName}>
        {categories.map((category, categoryIndex) => (
          <PhotoCategoryGallery
            key={category.title}
            category={category}
            subPage={subPage}
            onOpenPhoto={(indexInCategory) => {
              setActiveIndex(categoryOffsets[categoryIndex] + indexInCategory);
            }}
          />
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
