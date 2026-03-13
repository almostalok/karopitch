"use client";

import { motion } from "framer-motion";
import {
  ClipReveal,
  Counter,
  GradientText,
  Reveal,
  TiltCard,
  stagger,
  staggerChild,
} from "@/components/Animations";

const INVESTOR_CARDS = [
  {
    name: "Arjun Mehta",
    fund: "Sequoia Surge",
    image: "/founders/arjun-mehta.svg",
    note: "Fintech, B2B infra, fast diligence",
  },
  {
    name: "Priya Nair",
    fund: "Lightspeed",
    image: "/founders/priya-nair.svg",
    note: "Consumer behavior and GTM depth",
  },
  {
    name: "Vikram Rao",
    fund: "Accel India",
    image: "/founders/vikram-rao.svg",
    note: "Developer tools, SaaS, infra layers",
  },
  {
    name: "Sanya Gupta",
    fund: "Peak XV",
    image: "/founders/sanya-gupta.svg",
    note: "Category-defining early bets",
  },
];

/**
 * Investor network section with a featured panel plus curated partner cards.
 */
export function InvestorsSection() {
  return (
    <section id="network" className="relative py-32 md:py-52 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="num-badge">04</span>
            <div className="h-px flex-1 max-w-[60px] bg-accent/30" />
            <span className="section-kicker text-accent">Network</span>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <ClipReveal>
              <h2 className="font-display italic font-semibold leading-[0.92] tracking-tight text-[clamp(3rem,5.8vw,5.4rem)]">
                Backed by the
              </h2>
            </ClipReveal>
            <ClipReveal delay={0.12}>
              <h2 className="font-editorial font-semibold leading-[0.92] tracking-tight text-[clamp(3rem,6vw,5.6rem)] text-ink">
                <GradientText>best in the game.</GradientText>
              </h2>
            </ClipReveal>
          </div>
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-3 border border-ink/10 bg-card rounded-full px-5 py-2.5 text-[13px] font-sans shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-medium">250+ Active Investors</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-16 items-stretch">
          <Reveal className="lg:col-span-5 h-full">
            <TiltCard className="section-frame card-glow rounded-[2rem] h-full border border-ink/8 bg-gradient-to-br from-accent/10 via-card to-card overflow-hidden p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-accent mb-5">Featured Network</div>
                <h3 className="font-editorial text-[clamp(2.4rem,4vw,3.8rem)] leading-[0.94] tracking-tight text-ink mb-5">
                  Capital partners who back operators, not just decks.
                </h3>
                <p className="text-dim text-[15px] leading-[1.9] font-body max-w-[34ch]">
                  From angels to institutional funds, this is a room designed for decisive conversations and founder fit.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-10">
                {[
                  ["250+", "investors"],
                  ["38", "sectors"],
                  ["12", "city nodes"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-ink/8 bg-paper/80 p-4 text-center">
                    <div className="font-condensed text-[2rem] leading-none text-accent">{value}</div>
                    <div className="font-mono-ui text-[10px] uppercase tracking-[0.16em] text-dim mt-2">{label}</div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {INVESTOR_CARDS.map((investor) => (
              <motion.div
                key={investor.name}
                variants={staggerChild}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-[1.75rem] overflow-hidden border border-ink/8 bg-card card-glow section-frame p-6 flex gap-5"
              >
                <div className="w-20 h-24 shrink-0 rounded-2xl overflow-hidden border border-ink/10 bg-elevated">
                  <img
                    src={investor.image}
                    alt={`${investor.name} portrait`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-editorial text-[1.65rem] leading-none tracking-tight text-ink">
                    {investor.name}
                  </div>
                  <div className="font-mono-ui text-dim text-[11px] mt-2 tracking-[0.18em] uppercase">
                    {investor.fund}
                  </div>
                  <p className="text-dim text-[14px] leading-relaxed font-body mt-5">{investor.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-ink/6 rounded-2xl overflow-hidden bg-card">
            {[
              { value: 250, suffix: "+", label: "Active Investors" },
              { value: 45, prefix: "$", suffix: "M+", label: "Deployed" },
              { value: 120, suffix: "+", label: "Funded Startups" },
              { value: 2, prefix: "<", suffix: "%", label: "Acceptance Rate" },
            ].map((metric, index) => (
              <div key={metric.label} className={`px-8 py-7 ${index !== 0 ? "border-l border-ink/6" : ""}`}>
                <div className="font-display italic text-[clamp(1.8rem,3vw,2.5rem)] text-ink">
                  <Counter
                    target={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </div>
                <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-dim mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
