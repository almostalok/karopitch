"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  ClipReveal,
  GradientText,
  Magnetic,
  Reveal,
  TiltCard,
  stagger,
  staggerChild,
} from "@/components/Animations";

const PORTFOLIO_CARDS = [
  {
    tag: "SaaS",
    num: "02",
    name: "Lumina",
    desc: "AI-led customer expansion engine for enterprise software teams.",
    m1: "15K Users",
    m2: "98% NRR",
    m3: "6.1x YoY",
    raised: "$1.8M",
    score: "91",
  },
  {
    tag: "Climate",
    num: "03",
    name: "Aero",
    desc: "Distributed energy storage networks for dense urban centers.",
    m1: "22 Sites",
    m2: "Patent Filed",
    m3: "42 LOIs",
    raised: "$2.5M",
    score: "88",
  },
];

const LIVE_TICKER = [
  "PIPELINE +18%",
  "AVG CLOSE 14 DAYS",
  "TOP DECILE CONVICTION 0.91",
  "DILIGENCE CYCLE -37%",
  "INTRO TO TERM SHEET 21 DAYS",
  "FOUNDER RESPONSE <24H",
];

/**
 * Portfolio section rendered as a bold deal-board to stand apart from other sections.
 */
export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-32 md:py-52 bg-[#11100f] text-paper overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,242,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,237,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(232,101,10,0.16),transparent_45%),radial-gradient(circle_at_88%_75%,rgba(255,146,70,0.14),transparent_48%)] pointer-events-none" />

      <div className="container-wide relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="num-badge">05</span>
            <div className="h-px flex-1 max-w-[60px] bg-accent/30" />
            <span className="section-kicker text-accent">Portfolio</span>
          </div>
        </Reveal>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <ClipReveal>
              <h2 className="font-condensed uppercase leading-[0.9] tracking-[0.03em] text-[clamp(3.3rem,6vw,5.8rem)] text-paper">
                Deal
              </h2>
            </ClipReveal>
            <ClipReveal delay={0.12}>
              <h2 className="font-condensed uppercase leading-[0.9] tracking-[0.03em] text-[clamp(3.3rem,6vw,5.8rem)] text-accent">
                <GradientText>Board.</GradientText>
              </h2>
            </ClipReveal>
          </div>
          <Reveal delay={0.2}>
            <Magnetic className="hidden md:inline-flex items-center gap-2 text-[13px] font-sans font-bold uppercase tracking-widest text-paper/55 hover:text-accent transition-colors duration-300 group">
              View All
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Magnetic>
          </Reveal>
        </div>

        <div className="relative rounded-[2rem] border border-paper/12 bg-[#171412]/80 backdrop-blur-sm p-5 md:p-7 lg:p-8 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/85 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <Reveal className="lg:col-span-8 h-full">
              <TiltCard className="relative h-full rounded-[1.75rem] border border-paper/12 bg-[#0f0d0c] overflow-hidden card-glow flex flex-col">
                <div className="relative min-h-[240px] bg-gradient-to-br from-accent/20 via-amber-500/8 to-transparent px-7 md:px-9 py-7 flex flex-col justify-between border-b border-paper/10">
                  <span className="absolute top-2 right-5 font-condensed text-[150px] leading-none text-paper/[0.06]">
                    01
                  </span>
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-accent/20 font-mono-ui text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Fintech
                    </span>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-paper/45">
                      Spotlight
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-condensed uppercase text-[clamp(3rem,6vw,5.4rem)] leading-[0.88] tracking-[0.03em] text-paper">
                      NovaPay
                    </h3>
                    <p className="text-paper/55 text-[14px] leading-relaxed font-body mt-3 max-w-[40ch]">
                      Cross-border B2B payments infrastructure with compounding enterprise retention and strong margin architecture.
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    ["ARR", "$2.0M"],
                    ["Margin", "70%"],
                    ["YoY", "12x"],
                    ["Round", "$3.2M"],
                    ["Score", "94"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-paper/10 bg-paper/[0.02] p-3 text-center">
                      <div className="font-condensed text-[1.7rem] leading-none text-accent">{value}</div>
                      <div className="font-mono-ui text-[9px] uppercase tracking-[0.16em] text-paper/45 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4 h-full">
              <div className="h-full rounded-[1.75rem] border border-paper/12 bg-[#0f0d0c] p-6 md:p-7">
                <div className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
                  Selection Matrix
                </div>
                <div className="space-y-4">
                  {[
                    ["Market Size", 92],
                    ["Growth Velocity", 89],
                    ["Unit Economics", 87],
                    ["Founder-Market Fit", 95],
                    ["Execution Readiness", 90],
                  ].map(([label, val]) => (
                    <div key={label as string}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-paper/50">
                          {label}
                        </span>
                        <span className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-accent">
                          {val}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-paper/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent/70 to-amber-400/85"
                          style={{ width: `${val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-paper/10">
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.16em] text-paper/45 mb-2">
                    Decision Signal
                  </div>
                  <div className="font-condensed text-[3rem] leading-none text-accent">A+</div>
                  <p className="text-paper/45 text-[12px] font-body mt-2">
                    High-conviction fit for growth-focused funds.
                  </p>
                </div>
              </div>
            </Reveal>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {PORTFOLIO_CARDS.map((startup) => (
                <motion.div key={startup.name} variants={staggerChild}>
                  <TiltCard className="relative rounded-[1.55rem] border border-paper/12 bg-[#0f0d0c] overflow-hidden card-glow p-6 md:p-7">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-60" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-7">
                        <div>
                          <div className="px-3 py-1 rounded-full bg-accent/18 font-mono-ui text-[10px] font-bold uppercase tracking-[0.22em] text-accent w-fit mb-3">
                            {startup.tag}
                          </div>
                          <h3 className="font-condensed uppercase text-[2.8rem] leading-[0.88] tracking-[0.03em] text-paper">
                            {startup.name}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="font-condensed text-[72px] leading-none text-paper/[0.08]">{startup.num}</div>
                          <div className="font-mono-ui text-[10px] uppercase tracking-[0.16em] text-accent">
                            score {startup.score}
                          </div>
                        </div>
                      </div>

                      <p className="text-paper/55 text-[14px] leading-relaxed font-body mb-6 max-w-[34ch]">
                        {startup.desc}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                        <div className="rounded-lg border border-paper/10 bg-paper/[0.03] p-2.5">
                          <div className="font-mono-ui text-[9px] uppercase tracking-[0.14em] text-paper/40 mb-1">Raised</div>
                          <div className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-accent">{startup.raised}</div>
                        </div>
                        <div className="rounded-lg border border-paper/10 bg-paper/[0.03] p-2.5">
                          <div className="font-mono-ui text-[9px] uppercase tracking-[0.14em] text-paper/40 mb-1">Metric 01</div>
                          <div className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-accent">{startup.m1}</div>
                        </div>
                        <div className="rounded-lg border border-paper/10 bg-paper/[0.03] p-2.5">
                          <div className="font-mono-ui text-[9px] uppercase tracking-[0.14em] text-paper/40 mb-1">Metric 02</div>
                          <div className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-accent">{startup.m2}</div>
                        </div>
                        <div className="rounded-lg border border-paper/10 bg-paper/[0.03] p-2.5">
                          <div className="font-mono-ui text-[9px] uppercase tracking-[0.14em] text-paper/40 mb-1">Metric 03</div>
                          <div className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-accent">{startup.m3}</div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            <Reveal delay={0.24} className="lg:col-span-12">
              <div className="rounded-xl border border-paper/10 bg-[#0f0d0c] overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-2.5 border-b border-paper/10">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-paper/45">
                    Live Signal Feed
                  </span>
                </div>
                <div className="overflow-hidden">
                  <div className="flex animate-marquee whitespace-nowrap py-3">
                    {[...LIVE_TICKER, ...LIVE_TICKER].map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className="inline-flex items-center gap-3 mx-5 font-mono-ui text-[10px] uppercase tracking-[0.18em] text-paper/55"
                      >
                        <span>{item}</span>
                        <span className="text-accent/70">◆</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
