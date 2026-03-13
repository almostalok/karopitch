# KaroPitch

Production-grade landing experience for founder-investor matching, built with Next.js App Router, Framer Motion, and a modular feature-first architecture.

## Tech Stack

- Framework: Next.js 16 (App Router, Turbopack)
- Language: TypeScript
- Styling: Tailwind CSS v4 + custom design tokens in `src/app/globals.css`
- Motion: Framer Motion
- Icons: Lucide React
- Fonts: Space Grotesk, Playfair Display, Cormorant Garamond, Bebas Neue, IBM Plex Mono, Inter

## Project Structure

```text
.
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ Animations.tsx
│  │  └─ Cursor.tsx
│  └─ features/
│     └─ home/
│        ├─ HomePage.tsx
│        └─ sections/
│           ├─ AboutSection.tsx
│           ├─ EligibilitySection.tsx
│           ├─ FinalCtaSection.tsx
│           ├─ FooterSection.tsx
│           ├─ HeroSection.tsx
│           ├─ InvestorsSection.tsx
│           ├─ MarqueeBand.tsx
│           ├─ NavBar.tsx
│           ├─ OriginSection.tsx
│           ├─ PortfolioSection.tsx
│           ├─ ProcessSection.tsx
│           └─ SectionDivider.tsx
├─ next.config.ts
├─ package.json
└─ tsconfig.json
```

## Architecture Notes

- `src/app/page.tsx` is intentionally thin and delegates to feature modules.
- `src/features/home/HomePage.tsx` owns page-level orchestration:
  - Scroll-derived motion values
  - Section composition order
  - Shared section divider configuration
- `src/features/home/sections/*` contains isolated, reusable section components.
- `src/components/Animations.tsx` centralizes reusable animation primitives (`Reveal`, `ClipReveal`, `CharReveal`, etc.).
- `src/components/Cursor.tsx` contains the custom cursor system.

This separation keeps routing simple while making UI modules easier to test, iterate, and scale.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start local development

```bash
npm run dev
```

App runs at `http://localhost:3000`.

### 3. Build for production

```bash
npm run build
```

### 4. Run production server locally

```bash
npm start
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create optimized production build
- `npm run start`: Run production build
- `npm run lint`: Run ESLint checks

## Production Conventions

- Keep route files (`src/app/**`) minimal; push feature logic into `src/features/**`.
- Add new homepage blocks under `src/features/home/sections/`.
- Reuse animation primitives from `src/components/Animations.tsx` before creating new ones.
- Keep visual tokens and global utilities in `src/app/globals.css`.
- Prefer declarative data maps for repeated cards and stats.

## Quality Checklist

Before merging changes:

1. Run `npm run lint`
2. Run `npm run build`
3. Verify desktop + mobile layouts for all sections
4. Verify custom cursor behavior on desktop only
5. Verify major reveal animations do not clip text

## Deployment

This app is ready for deployment on any Node-compatible platform.

Recommended flow:

1. Build using `npm run build`
2. Serve using `npm start`
3. Configure environment variables if/when backend integrations are added

For Vercel deployment, import the repo and use default Next.js build settings.

## Future Hardening (Optional)

- Add component tests for key section render paths
- Add visual regression snapshots for hero + section dividers
- Introduce CMS/content layer for copy and card data
- Add analytics + conversion event tracking for CTA buttons
