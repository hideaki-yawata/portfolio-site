"use client";

import Image from "next/image";
import type { PhotoCategory } from "@/types/work";

type PhotoCategoryGalleryProps = {
  category: PhotoCategory;
  /** 下層Photo一覧（Figma Photo mobile 等） */
  subPage?: boolean;
  onOpenPhoto: (indexInCategory: number) => void;
};

export function PhotoCategoryGallery({
  category,
  subPage,
  onOpenPhoto,
}: PhotoCategoryGalleryProps) {
  const titleClassName = subPage
    ? "text-2xl font-bold leading-[1.5] text-text md:text-2xl"
    : "text-xl font-bold leading-[1.5] text-text md:text-2xl";

  const gridClassName = "grid grid-cols-2 gap-2";

  const imageWrapperClassName =
    "relative aspect-[4/3] w-full overflow-hidden";

  return (
    <div className={`flex flex-col ${subPage ? "gap-2" : "gap-1 md:gap-2"}`}>
      <h3 className={titleClassName}>{category.title}</h3>
      <div className={gridClassName}>
        {category.images.map((src, index) => (
          <button
            key={`${category.title}-${index}`}
            type="button"
            className={`${imageWrapperClassName} cursor-pointer border-0 bg-transparent p-0`}
            aria-label={`View ${category.title} ${index + 1}`}
            onClick={() => onOpenPhoto(index)}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 767px) 50vw, (max-width: 1279px) 50vw, 294px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
