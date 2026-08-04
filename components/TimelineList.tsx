import type { TimelineEntry } from "@/types/work";

type TimelineListProps = {
  entries: TimelineEntry[];
};

const timelineDotSmClassName =
  "size-2 shrink-0 rounded-full bg-accent";
const timelineDotLgClassName =
  "size-4 shrink-0 rounded-full bg-accent";

function TimelineEntryTablet({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="relative flex min-w-0 flex-col pt-[7px] pb-0.5">
      <div className="relative w-full">
        <span className="block h-px w-full bg-accent" aria-hidden />
        <span
          className={`absolute left-0 top-0 -translate-y-1/2 ${timelineDotSmClassName}`}
          aria-hidden
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
        <span
          className={`absolute left-0 top-0 -translate-y-1/2 ${timelineDotLgClassName}`}
          aria-hidden
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
          <div key={entry.period} className="flex items-stretch">
            <div className="relative mr-4 flex w-2 shrink-0 self-stretch flex-col items-center">
              {index < entries.length - 1 ? (
                <span
                  className="absolute left-1/2 top-3 -bottom-3 z-0 w-px -translate-x-1/2 bg-accent"
                  aria-hidden
                />
              ) : null}
              <span
                className={`relative z-10 mt-2 ${timelineDotSmClassName}`}
                aria-hidden
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1 pb-4 text-text">
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
