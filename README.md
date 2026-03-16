<div align="center">

# KaroPitch

**India's most exclusive founder-investor matching platform**

*Curated dealflow. Zero noise. Maximum conviction.*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## Overview

**KaroPitch** is a production-grade landing page and platform that connects startup founders with India's top vetted investors. It presents a curated dealflow experience—founders submit their pitches, investors get access to high-signal, pre-screened opportunities, and the entire process is designed to eliminate noise and maximize conviction on both sides.

The site features a rich, scroll-driven visual experience with parallax effects, character reveals, magnetic buttons, animated counters, and a custom cursor—all engineered for an Awwwards-level presentation.

---

## Features

- 🎯 **Curated Dealflow** — Only the highest-quality startups reach investors; rigorous eligibility criteria ensure signal over noise
- 🏦 **Vetted Investor Network** — Showcases India's leading angels, funds, and family offices
- 📊 **Live Metrics** — Animated counters displaying real-time platform statistics
- 🎨 **Premium Animations** — Scroll-driven parallax, clip-path reveals, character-level stagger, tilt cards, and magnetic interactions
- 🖱️ **Custom Cursor** — Three-layer spring-physics cursor (dot, pointer, aura) with hover states; desktop-only
- 📱 **Responsive Design** — Pixel-perfect layouts across desktop and mobile
- ⚡ **Performance-First** — Next.js 16 with Turbopack, automatic code splitting, and tree-shakeable Framer Motion
- 🔡 **Editorial Typography** — Six curated Google Fonts forming a cohesive type hierarchy (Playfair, Cormorant, Space Grotesk, Bebas Neue, IBM Plex Mono, Inter)

---

## Tech Stack

| Category | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router, Turbopack) | 16 |
| Language | TypeScript (strict) | 5 |
| Styling | Tailwind CSS + custom design tokens | v4 |
| Animation | Framer Motion | 12 |
| Icons | Lucide React | 0.577 |
| Utilities | clsx, tailwind-merge | latest |
| Linting | ESLint (Next.js flat config) | 9 |

---

## Project Structure

```text
karopitch/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, global utilities, animations
│   │   ├── layout.tsx           # Root layout — font loading & <head> metadata
│   │   └── page.tsx             # Thin route entry — delegates to HomePage
│   ├── components/
│   │   ├── Animations.tsx       # 15+ reusable animation primitives
│   │   └── Cursor.tsx           # Custom three-layer cursor system
│   └── features/
│       └── home/
│           ├── HomePage.tsx     # Page orchestration, scroll values, section order
│           └── sections/
│               ├── NavBar.tsx
│               ├── HeroSection.tsx
│               ├── MarqueeBand.tsx
│               ├── AboutSection.tsx
│               ├── ProcessSection.tsx
│               ├── EligibilitySection.tsx
│               ├── InvestorsSection.tsx
│               ├── PortfolioSection.tsx
│               ├── OriginSection.tsx
│               ├── FinalCtaSection.tsx
│               ├── SectionDivider.tsx
│               └── FooterSection.tsx
├── public/                      # Static assets
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

### Architecture

The project follows a **feature-first** structure:

- **`src/app/`** — Next.js routing only; route files are intentionally thin.
- **`src/features/home/`** — All page-level logic: scroll-derived motion values, section composition, and shared divider configuration.
- **`src/features/home/sections/`** — Self-contained, independently testable section components.
- **`src/components/Animations.tsx`** — Single source of truth for animation primitives (`ClipReveal`, `CharReveal`, `WordReveal`, `Reveal`, `Counter`, `Magnetic`, `Parallax`, `Marquee`, `TiltCard`, `GradientText`, etc.).
- **`src/app/globals.css`** — Design tokens (colors, spacing, typography) as CSS custom properties.

This separation keeps routing simple and makes UI modules straightforward to test, iterate on, and scale.

---

## Getting Started

### Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/almostalok/karopitch.git
cd karopitch

# 2. Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server supports hot module replacement via Turbopack.

### Production Build

```bash
# Create an optimized production build
npm run build

# Run the production server locally
npm start
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with hot reload (Turbopack) |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the codebase |

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `#e8650a` | Brand orange, CTAs, highlights |
| `--color-ink` | `#0a0a0a` | Primary text, dark backgrounds |
| `--color-paper` | `#f5f2ed` | Light background |
| `--color-dim` | `#888888` | Secondary / muted text |
| `--color-ghost` | `#c8c4bd` | Subtle borders, dividers |

### Typography

| Role | Font | Style |
|---|---|---|
| Display / headlines | Playfair Display | Serif |
| Editorial / body | Cormorant Garamond | Serif |
| UI / labels | Space Grotesk | Sans-serif |
| Body fallback | Inter | Sans-serif |
| Monospace | IBM Plex Mono | Monospace |
| Impact / condensed | Bebas Neue | Condensed |

### Animation Primitives

All animation components live in `src/components/Animations.tsx` and are built with Framer Motion. Key primitives:

| Component | Effect |
|---|---|
| `ClipReveal` | Clip-path wipe reveal from bottom |
| `CharReveal` | Character-by-character stagger with rotation |
| `WordReveal` | Word-level staggered reveal |
| `Reveal` | Generic fade + translate (up/down/left/right) |
| `Counter` | Spring-physics animated number counter |
| `Magnetic` | Element that magnetically follows the cursor |
| `Parallax` | Scroll-driven depth parallax |
| `TiltCard` | 3D tilt on mouse move (perspective 800px) |
| `GradientText` | Animated gradient text (6s cycle) |
| `ImageReveal` | Image wipe with zoom effect |

> All primitives share a custom easing curve `[0.16, 1, 0.3, 1]` for a consistent, premium feel.

---

## Deployment

KaroPitch is ready to deploy on any Node-compatible platform.

### Vercel (Recommended)

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Vercel auto-detects Next.js — no additional configuration is required.
3. Click **Deploy**.

### Other Platforms

```bash
# Build
npm run build

# Serve
npm start
```

Configure any environment variables (analytics, backend APIs) in your platform's dashboard as integrations are added.

---

## Contributing

Contributions, bug reports, and feature requests are welcome!

1. Fork the repository and create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes and follow the conventions below.
3. Run `npm run lint` and `npm run build` to verify your changes.
4. Open a pull request with a clear description of what you changed and why.

### Conventions

- Keep route files (`src/app/**`) minimal; push feature logic into `src/features/**`.
- Add new page sections under `src/features/home/sections/`.
- Reuse animation primitives from `src/components/Animations.tsx` before creating new ones.
- Keep visual tokens and global utilities in `src/app/globals.css`.
- Use declarative data maps for repeated card/stat content.

### Pre-merge Checklist

- [ ] `npm run lint` passes with no errors
- [ ] `npm run build` completes successfully
- [ ] Desktop and mobile layouts verified for all affected sections
- [ ] Custom cursor behavior verified on desktop
- [ ] Reveal animations do not clip or overflow text

---

## Roadmap

- [ ] Backend integration for founder application submissions
- [ ] CMS/content layer for copy, card data, and investor profiles
- [ ] Analytics and conversion event tracking on CTA interactions
- [ ] Component tests for key section render paths
- [ ] Visual regression snapshots for hero and section dividers
- [ ] Email notifications and investor matching workflow

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  Built with ❤️ for India's builder ecosystem
</div>
