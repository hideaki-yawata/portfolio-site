import Image from "next/image";
import type { WorkItem, WorkTagVariant } from "@/types/work";

const tagClassName: Record<WorkTagVariant, string> = {
  accent: "bg-accent",
  subAccent1: "bg-sub-accent-1",
  subAccent2: "bg-sub-accent-2",
};

type WorkCardProps = {
  work: WorkItem;
  /** 下層Web一覧は全ブレークポイントで 384×210（Figma Web Gallery） */
  listing?: boolean;
};

export function WorkCard({ work, listing }: WorkCardProps) {
  const thumbnailClassName = listing
    ? "relative aspect-[384/210] w-full overflow-hidden"
    : "relative aspect-[384/210] w-full overflow-hidden md:aspect-[356/254] xl:aspect-[384/210]";

  return (
    <article className="flex flex-col gap-2">
      <div className={thumbnailClassName}>
        <Image
          src={work.imageSrc}
          alt={work.title}
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
    </article>
  );
}
