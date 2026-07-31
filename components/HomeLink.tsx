import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export function HomeLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-end gap-0.5 border-b border-accent text-xs font-bold italic leading-[1.5] text-accent md:text-base"
    >
      <Image
        src={images.icons.homeLinkArrow}
        alt=""
        width={16}
        height={16}
        className="-rotate-90 md:h-[22px] md:w-[22px]"
      />
      Home
    </Link>
  );
}
