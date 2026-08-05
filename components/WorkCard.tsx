import Image from "next/image";
import type { WorkItem, WorkTagVariant } from "@/types/work";

/** Work タグ色（変更前の見た目: 50% アクセント / #21759B） */
const tagClassName: Record<WorkTagVariant, string> = {
  accent: "bg-accent",
  subAccent1: "bg-sub-accent-50",
  subAccent2: "bg-category-1",
};

type WorkCardProps = {
  work: WorkItem;
};

export function WorkCard({ work }: WorkCardProps) {
  const thumbnailClassName = "relative aspect-[64/35] w-full overflow-hidden";

  return (
    <a
      href={work.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2"
    >
      <div className={thumbnailClassName}>
        <Image
          src={work.imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 384px"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold leading-[1.5] text-text">
          {work.title}
        </h3>
        <ul className="flex flex-wrap gap-1">
          {work.tags.map((tag) => (
            <li
              key={tag.label}
              className={`px-1 text-xs font-bold leading-[1.5] text-background ${tagClassName[tag.variant]}`}
            >
              {tag.label}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
