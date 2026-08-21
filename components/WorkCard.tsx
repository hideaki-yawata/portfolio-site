import Image from "next/image";
import type { MicroCMSWorkItem } from "@/lib/microcms";

type WorkCardProps = {
  item: MicroCMSWorkItem;
};

/** Category outline styles (border + text color) */
const categoryStyleMap: Record<string, string> = {
  Design: "border-accent text-accent",
  Coding: "border-sub-accent-50 text-sub-accent-50",
  WordPress: "border-category-1 text-category-1",
  "Headless CMS": "border-text text-text",
};

export function WorkCard({ item }: WorkCardProps) {
  const thumbnailClassName = "relative aspect-[384/240] w-full overflow-hidden";

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2"
    >
      <div className={thumbnailClassName}>
        <Image
          src={item.thumbnail.url}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 384px"
        />
        {item.type && (
          <span className="absolute right-0 top-0 border border-text bg-text px-1.5 py-0.5 text-sm font-bold leading-[1.5] text-background">
            {item.type.name}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold leading-[1.5] text-text">
          {item.title}
        </h3>
        <ul className="flex flex-wrap gap-1">
          {item.category.map((categoryItem) => (
            <li
              key={categoryItem.name}
              className={`border px-1 text-xs font-medium leading-[1.5] ${categoryStyleMap[categoryItem.name] ?? "border-text text-text"}`}
            >
              {categoryItem.name}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
