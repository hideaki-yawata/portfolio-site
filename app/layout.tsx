import type { Metadata } from "next";
import { plusJakarta } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hideaki Yawata Portfolio Site",
  description: "Web design, development, and photography portfolio",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${plusJakarta.className} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
