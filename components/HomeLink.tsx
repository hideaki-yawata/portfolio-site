import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { plusJakartaItalic } from "@/lib/fonts";
import { images } from "@/lib/images";

export function HomeLink() {
  return (
    <Link
      href="/"
      className={`${plusJakartaItalic.className} group inline-flex items-end gap-0.5 border-b border-accent text-xs font-bold leading-[1.5] text-accent hover:border-transparent md:text-base`}
    >
      <span className="inline-flex transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-focus-visible:-translate-x-1">
        <IconImage
          src={images.icons.homeLinkArrow}
          width={16}
          height={16}
          className="-rotate-90 md:h-[22px] md:w-[22px]"
        />
      </span>
      Home
    </Link>
  );
}
