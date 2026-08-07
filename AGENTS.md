# AGENTS.md

Coding conventions and rules for this project. Coding agents (Cursor, Claude Code, etc.) should follow this file.

Write new comments and documentation in English.

## Project overview

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Headless CMS: microCMS
- Deploy target: Vercel

## Directory layout

- `app/` — Pages and routing (App Router)
- `components/` — Reusable UI components
- `lib/` — CMS fetch logic and utilities
- `types/` — TypeScript type definitions

## Coding rules

- Use function components with TypeScript (no class components)
- Style with Tailwind CSS utility classes only; do not use CSS Modules or styled-components
- Use the theme colors below (see `@theme` in global CSS):
  - Background: `#FEFEFE`
  - Sub-background: `#F8F8F8`
  - Accent: `#2059A6`
  - Sub-accent: `#2059A6` at 50% / 25% opacity (`sub-accent-50`, `sub-accent-25`)
  - Text: `#2C2C2A`
  - Overlay: `#2C2C2A` at 25% / 50% / 75% opacity
  - Category (work tags, etc.): `#21759B` / `#2B2C30` (`category-1`, `category-2`)
- Always use `next/image` `<Image>` for images (no raw `<img>` tags)
- Prefer Server Components for data fetching; add `"use client"` only when needed
- Centralize microCMS fetch logic in `lib/microcms.ts`

## Naming

- Component files: PascalCase (e.g. `WorkCard.tsx`)
- Functions and variables: camelCase
- Types live under `types/`; do not use an `I` prefix on interface names (e.g. `PhotoCategory`)

## Do not

- Use the legacy Pages Router (`pages/` directory)
- Use inline styles (`style={{}}`) except when unavoidable
- Hard-code API keys or secrets (use `.env.local`)
