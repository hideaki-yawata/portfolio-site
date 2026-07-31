/** Tailwind md=768px, xl=1280px — matches Image `sizes` elsewhere in the project. */
export const responsiveHeroFillSizes = {
  mobile: "(max-width: 767px) 100vw, 0px",
  tablet:
    "(max-width: 767px) 0px, (max-width: 1279px) 100vw, 0px",
  desktop: "(max-width: 1279px) 0px, 33vw",
} as const;

export const subPageHeroFillSizes = {
  mobile: "(max-width: 767px) 100vw, 0px",
  tablet:
    "(max-width: 767px) 0px, (max-width: 1279px) 100vw, 0px",
  desktop: "(max-width: 1279px) 0px, 100vw",
} as const;
