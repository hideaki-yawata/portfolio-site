import Image from "next/image";
import { getWebDevelopmentList, getWebDesignList } from "@/lib/microcms";

type WorkListProps = {
  fetchData: () => Promise<{ contents: WebDevelopment[] | WebDesign[] }>;
};

/** Category Color Map */
const categoryColorMap: Record<string, string> = {
  Design: "bg-accent",
  Coding: "bg-sub-accent-50",
  WordPress: "bg-category-1",
  microCMS: "bg-category-2",
};

export async function WorkCard({ fetchData }: WorkListProps) {
  const data = await fetchData();
  const thumbnailClassName = "relative aspect-[64/35] w-full overflow-hidden";

  return (
    <>
      {data.contents.map((item) => (
        <a
          key={item.id}
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
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold leading-[1.5] text-text">
              {item.title}
            </h3>
            <ul className="flex flex-wrap gap-1">
              {item.category.map((categoryItem) => (
                <li
                  key={categoryItem.name}
                  className={`px-1 text-xs font-bold leading-[1.5] text-background ${categoryColorMap[categoryItem.name]}`}
                >
                  {categoryItem.name}
                </li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </>
  );
}
