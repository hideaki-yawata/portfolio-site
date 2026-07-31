import Image from "next/image";
import type { PhotoCategory } from "@/types/work";

type PhotoCategoryGalleryProps = {
  category: PhotoCategory;
  /** 下層Photo一覧（Figma Photo mobile 等） */
  subPage?: boolean;
};

export function PhotoCategoryGallery({
  category,
  subPage,
}: PhotoCategoryGalleryProps) {
  const titleClassName = subPage
    ? "text-2xl font-bold leading-[1.5] text-text md:text-2xl"
    : "text-xl font-bold leading-[1.5] text-text md:text-2xl";

  const gridClassName = "grid grid-cols-2 gap-2";

  const imageWrapperClassName = subPage
    ? "relative aspect-[294/196] w-full overflow-hidden"
    : "relative aspect-[175/117] w-full overflow-hidden md:aspect-[364/164] xl:aspect-[294/196]";

  return (
    <div className={`flex flex-col ${subPage ? "gap-2" : "gap-1 md:gap-2"}`}>
      <h3 className={titleClassName}>{category.title}</h3>
      <div className={gridClassName}>
        {category.images.map((src, index) => (
          <div
            key={`${category.title}-${index}`}
            className={imageWrapperClassName}
          >
            <Image
              src={src}
              alt={`${category.title} ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 50vw, (max-width: 1279px) 50vw, 294px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
