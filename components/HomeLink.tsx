import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { plusJakartaItalic } from "@/lib/fonts";
import { images } from "@/lib/images";

export function HomeLink() {
  return (
    <Link
      href="/"
      className={`${plusJakartaItalic.className} inline-flex items-end gap-0.5 border-b border-accent text-xs font-bold leading-[1.5] text-accent md:text-base`}
    >
      <IconImage
        src={images.icons.homeLinkArrow}
        width={16}
        height={16}
        className="-rotate-90 md:h-[22px] md:w-[22px]"
      />
      Home
    </Link>
  );
}
