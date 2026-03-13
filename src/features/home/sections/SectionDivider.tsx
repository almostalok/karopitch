"use client";

import { Reveal } from "@/components/Animations";

/**
 * Reusable section separator with crop-mark corners and mono labels.
 * This keeps transitions visually consistent while allowing light/dark variants.
 */
export function SectionDivider({
  sectionNumber,
  title,
  subtitle,
  dark = false,
  useReveal = true,
  backgroundClassName = "",
}: {
  sectionNumber: string;
  title: string;
  subtitle: string;
  dark?: boolean;
  useReveal?: boolean;
  backgroundClassName?: string;
}) {
  const divider = (
    <div
      className={`relative py-7 border-y ${
        dark ? "border-paper/8 bg-ink" : "border-ink/6"
      } ${backgroundClassName}`}
    >
      <div className="flex items-center px-[clamp(1.25rem,5vw,4rem)]">
        <div
          className={`flex-1 h-px bg-gradient-to-r from-transparent ${
            dark ? "to-paper/12" : "to-ink/10"
          }`}
        />
        <div className="relative mx-8 flex-shrink-0">
          <span className="absolute -top-[3px] -left-[3px] w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-accent" />
          <span className="absolute -top-[3px] -right-[3px] w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-accent" />
          <span className="absolute -bottom-[3px] -left-[3px] w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] border-accent" />
          <span className="absolute -bottom-[3px] -right-[3px] w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-accent" />
          <div
            className={`border px-7 py-4 flex items-center gap-5 ${
              dark ? "border-paper/10 bg-ink" : "border-ink/10 bg-paper"
            }`}
          >
            <span className="font-mono-ui text-[11px] tracking-[0.32em] text-accent font-bold">
              {sectionNumber}
            </span>
            <span className={`w-px h-4 ${dark ? "bg-paper/14" : "bg-ink/12"}`} />
            <span
              className={`font-mono-ui text-[13px] tracking-[0.20em] uppercase font-semibold ${
                dark ? "text-paper/55" : "text-ink/60"
              }`}
            >
              {title}
            </span>
            <span className="hidden sm:flex items-center gap-5">
              <span className={`w-px h-4 ${dark ? "bg-paper/14" : "bg-ink/12"}`} />
              <span
                className={`font-mono-ui text-[10px] tracking-[0.18em] uppercase ${
                  dark ? "text-paper/35" : "text-dim"
                }`}
              >
                {subtitle}
              </span>
            </span>
          </div>
        </div>
        <div
          className={`flex-1 h-px bg-gradient-to-l from-transparent ${
            dark ? "to-paper/12" : "to-ink/10"
          }`}
        />
      </div>
    </div>
  );

  return useReveal ? <Reveal y={12}>{divider}</Reveal> : divider;
}
