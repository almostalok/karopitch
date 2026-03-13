"use client";

import { Compass, FileText, Zap } from "lucide-react";
import {
  ClipReveal,
  GradientText,
  Reveal,
  TiltCard,
} from "@/components/Animations";

/**
 * About section as a dark enclosed command-center: high contrast, low copy,
 * and data-first blocks for immediate credibility.
 */
export function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-44 overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(245,242,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,237,1) 1px, transparent 1px)", backgroundSize: "68px 68px" }} />
      <div className="absolute -top-28 right-[4%] w-[420px] h-[420px] rounded-full bg-accent/12 blur-[120px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="num-badge">01</span>
            <div className="h-px flex-1 max-w-[60px] bg-accent/30" />
            <span className="section-kicker text-accent">The Platform</span>
          </div>
        </Reveal>

        <div className="relative rounded-[2rem] border border-paper/12 bg-ink/70 backdrop-blur-sm p-5 md:p-8 lg:p-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
            <div className="absolute right-[-110px] top-[-110px] w-[280px] h-[280px] rounded-full border border-accent/20" />
            <div className="absolute right-[-40px] top-[-40px] w-[170px] h-[170px] rounded-full border border-accent/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 relative z-10">
            <Reveal className="lg:col-span-7">
              <div className="rounded-[1.5rem] border border-paper/12 bg-paper/[0.03] p-6 md:p-7">
                <ClipReveal>
                  <h2 className="font-condensed uppercase text-paper leading-[0.86] tracking-[0.03em] text-[clamp(3.2rem,8vw,6.4rem)]">
                    SIGNAL
                  </h2>
                </ClipReveal>
                <ClipReveal delay={0.1}>
                  <h2 className="font-condensed uppercase text-[clamp(3.2rem,8vw,6.4rem)] leading-[0.86] tracking-[0.03em]">
                    <GradientText>MACHINE</GradientText>
                  </h2>
                </ClipReveal>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    ["48H", "review"],
                    ["250+", "investors"],
                    ["2%", "select"],
                    ["14D", "close avg"],
                    ["38", "sectors"],
                    ["120+", "funded"],
                    ["45M", "deployed"],
                    ["12", "city nodes"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl border border-paper/10 bg-ink/50 p-3 md:p-4 text-center">
                      <div className="font-condensed text-[1.8rem] md:text-[2.2rem] leading-none text-accent">{value}</div>
                      <div className="font-mono-ui text-[10px] tracking-[0.18em] uppercase text-paper/45 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-[1.5rem] border border-paper/12 bg-paper/[0.03] p-6 h-full">
                <div className="font-mono-ui text-[11px] uppercase tracking-[0.22em] text-accent mb-5">Pipeline Health</div>
                <div className="space-y-4">
                  {[
                    ["Applications", 100],
                    ["Qualified", 34],
                    ["Matched", 16],
                    ["In Diligence", 9],
                    ["Closed", 4],
                  ].map(([label, percent]) => (
                    <div key={label as string}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono-ui text-[10px] uppercase tracking-[0.16em] text-paper/55">{label}</span>
                        <span className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-accent">{percent}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-paper/8 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-accent/70 to-amber-400/80" style={{ width: `${percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {[
              {
                icon: FileText,
                title: "Filter",
                data: "1,240 -> 248",
              },
              {
                icon: Compass,
                title: "Match",
                data: "92% fit score",
              },
              {
                icon: Zap,
                title: "Move",
                data: "3.4 intros / startup",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={0.16 + index * 0.06} className="lg:col-span-4">
                <TiltCard className="rounded-[1.35rem] border border-paper/12 bg-paper/[0.03] p-5 md:p-6 h-full card-glow">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-accent/12 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-mono-ui text-[10px] tracking-[0.18em] uppercase text-paper/40">M{index + 1}</span>
                  </div>
                  <div className="mt-7">
                    <h3 className="font-condensed uppercase text-[2.1rem] leading-[0.9] text-paper">{item.title}</h3>
                    <div className="font-mono-ui text-[12px] tracking-[0.16em] uppercase text-accent mt-2">{item.data}</div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}

            <Reveal delay={0.32} className="lg:col-span-12">
              <div className="rounded-[1.35rem] border border-paper/12 bg-paper/[0.02] p-4 md:p-5 flex flex-wrap items-center gap-4 md:gap-8">
                {[
                  ["FUNDRAISE CYCLE", "-63%"],
                  ["FOUNDER RESPONSE", "<24H"],
                  ["MATCH CONFIDENCE", "0.92"],
                  ["INTRO EFFICIENCY", "3.4X"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="font-mono-ui text-[10px] tracking-[0.16em] uppercase text-paper/45">{label}</span>
                    <span className="font-condensed text-[1.9rem] leading-none text-accent">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
