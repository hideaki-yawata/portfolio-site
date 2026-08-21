import { Plus_Jakarta_Sans } from "next/font/google";

/** Single instance — avoids duplicate variable WOFF2 downloads and OTS parse errors. */
export const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});
