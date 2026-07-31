import Image from "next/image";
import { images } from "@/lib/images";
import type { TimelineEntry } from "@/types/work";

type TimelineListProps = {
  entries: TimelineEntry[];
};

function TimelineEntryTablet({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="relative flex min-w-0 flex-col pt-[7px] pb-0.5">
      <div className="relative w-full">
        <span className="block h-px w-full bg-accent" aria-hidden />
        <Image
          src={images.icons.timelineDot}
          alt=""
          width={8}
          height={8}
          className="absolute left-0 top-1"
        />
      </div>
      <div className="flex flex-col gap-2 pr-4 pt-4 text-text">
        <p className="text-xl font-bold leading-[1.5]">{entry.period}</p>
        <p className="text-xs leading-[1.5]">{entry.description}</p>
      </div>
    </div>
  );
}

function TimelineEntryDesktop({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="relative flex min-w-0 flex-col pt-[7px] pb-0.5">
      <div className="relative w-full">
        <span className="block h-px w-full bg-accent" aria-hidden />
        <Image
          src={images.icons.timelineDot}
          alt=""
          width={16}
          height={16}
          className="absolute left-0 top-0"
        />
      </div>
      <div className="flex flex-col gap-2 pr-4 pt-6 text-text">
        <p className="text-2xl font-bold leading-[1.5]">{entry.period}</p>
        <p className="text-base leading-[1.5]">{entry.description}</p>
      </div>
    </div>
  );
}

export function TimelineList({ entries }: TimelineListProps) {
  return (
    <>
      <div className="flex w-full flex-col md:hidden">
        {entries.map((entry, index) => (
          <div key={entry.period} className="relative flex items-start">
            <div className="mr-4 flex w-2 shrink-0 flex-col items-center">
              <Image
                src={images.icons.timelineDot}
                alt=""
                width={8}
                height={8}
                className="relative -left-[3.5px]"
              />
              {index < entries.length - 1 ? (
                <span className="min-h-[70px] w-px flex-1 bg-accent" />
              ) : null}
            </div>
            <div className="flex flex-col gap-1 pb-4 text-text">
              <p className="text-xl font-bold leading-[1.5]">{entry.period}</p>
              <p className="text-xs leading-[1.5]">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden w-full grid-cols-4 gap-0 md:grid xl:hidden">
        {entries.map((entry) => (
          <TimelineEntryTablet key={entry.period} entry={entry} />
        ))}
      </div>

      <div className="hidden w-full grid-cols-4 gap-0 xl:grid">
        {entries.map((entry) => (
          <TimelineEntryDesktop key={entry.period} entry={entry} />
        ))}
      </div>
    </>
  );
}
