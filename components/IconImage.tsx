import Image, { type ImageProps } from "next/image";

type IconImageProps = Omit<ImageProps, "alt"> & {
  alt?: string;
};

/** Decorative SVG/icon images sized via width/height props and/or Tailwind classes. */
export function IconImage({
  alt = "",
  className,
  style,
  ...props
}: IconImageProps) {
  return (
    <Image alt={alt} className={className} style={style} {...props} />
  );
}
