import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal"],
  adjustFontFallback: false,
  preload: false,
});

/** Italic — below the fold on many routes. */
export const plusJakartaItalic = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "variable",
  style: ["italic"],
  adjustFontFallback: false,
  preload: false,
});
