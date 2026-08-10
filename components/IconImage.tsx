import Image, { type ImageProps } from "next/image";

type IconImageProps = Omit<ImageProps, "alt"> & {
  alt?: string;
};

/** Decorative SVG/icon images — h-auto w-auto avoids Next.js aspect-ratio warnings when sizing via CSS. */
export function IconImage({
  alt = "",
  className,
  style,
  ...props
}: IconImageProps) {
  const sizeClass = "h-auto w-auto";
  const mergedClassName = className
    ? `${sizeClass} ${className}`
    : sizeClass;

  return (
    <Image
      alt={alt}
      className={mergedClassName}
      style={{ width: "auto", height: "auto", ...style }}
      {...props}
    />
  );
}
