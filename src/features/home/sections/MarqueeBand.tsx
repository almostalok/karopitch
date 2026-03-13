"use client";

import { Marquee } from "@/components/Animations";

const INVESTOR_BRANDS = [
  "YC Alumni",
  "Sequoia Surge",
  "Peak XV",
  "Lightspeed",
  "Accel",
  "Blume Ventures",
  "Matrix India",
  "Nexus VP",
  "Elevation Capital",
  "Kalaari",
];

/**
 * High-contrast marquee strip used as a visual rhythm break below hero.
 */
export function MarqueeBand() {
  return (
    <div className="relative py-5 bg-ink overflow-hidden">
      <Marquee>
        {INVESTOR_BRANDS.map((name) => (
          <span
            key={name}
            className="mx-8 text-[13px] font-sans font-semibold tracking-[0.15em] uppercase text-paper/30 whitespace-nowrap"
          >
            {name}
            <span className="mx-8 text-accent/50">◆</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
