"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  ClipReveal,
  GradientText,
  Magnetic,
  Reveal,
  stagger,
  staggerChild,
} from "@/components/Animations";

const ELIGIBILITY_CARDS = [
  {
    icon: "💻",
    title: "SaaS",
    desc: "B2B, Developer Tools, Enterprise Workflows",
    stage: "Pre-seed -> Series A",
    check: "$150k - $2M",
    span: "sm:col-span-2",
  },
  {
    icon: "💳",
    title: "Fintech",
    desc: "Payments, Wealth, Lending Infra",
    stage: "Seed -> Series A",
    check: "$250k - $3M",
  },
  {
    icon: "🛒",
    title: "Consumer",
    desc: "D2C, Marketplaces, Commerce OS",
    stage: "Pre-seed -> Seed",
    check: "$100k - $1.2M",
  },
  {
    icon: "🤖",
    title: "AI / Deep Tech",
    desc: "GenAI, Robotics, Space, Bioengineering",
    stage: "Seed -> Series A",
    check: "$300k - $4M",
    span: "sm:row-span-2",
  },
  {
    icon: "🩺",
    title: "Health Tech",
    desc: "Digital Health, Clinical Ops, Preventive Care",
    stage: "Pre-seed -> Series A",
    check: "$150k - $2.5M",
  },
  {
    icon: "🌍",
    title: "Climate",
    desc: "Clean Energy, Mobility, Carbon Markets",
    stage: "Seed -> Series A",
    check: "$250k - $3.5M",
  },
];

/**
 * Dark eligibility section highlighting company profiles that match the thesis.
 */
export function EligibilitySection() {
  return (
    <section className="relative py-32 md:py-52 bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,242,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,237,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-wide relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span
              className="num-badge"
              style={{ borderColor: "rgba(232,101,10,0.5)", color: "var(--accent)" }}
            >
              03
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-accent/30" />
            <span className="section-kicker text-accent">Eligibility</span>
          </div>
        </Reveal>

        <div className="relative rounded-[2rem] border border-paper/12 bg-ink/55 backdrop-blur-sm p-5 md:p-8 lg:p-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
            <div className="absolute right-[-70px] top-[-70px] w-[220px] h-[220px] rounded-full border border-accent/20" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
            <div className="lg:w-[38%] lg:sticky lg:top-28">
            <ClipReveal>
              <h2 className="font-condensed uppercase leading-[0.9] tracking-[0.03em] text-[clamp(3rem,6.4vw,5.8rem)] text-paper mb-1">
                Who Gets
              </h2>
            </ClipReveal>
            <ClipReveal delay={0.1}>
              <h2 className="font-condensed uppercase leading-[0.9] tracking-[0.03em] text-[clamp(3rem,6.4vw,5.8rem)]">
                <GradientText>Priority.</GradientText>
              </h2>
            </ClipReveal>

            <Reveal delay={0.25}>
              <p className="text-paper/45 text-[15px] leading-[1.75] mt-6 mb-8 font-body max-w-sm">
                We prioritize companies with strong velocity, clear market pull, and fund-ready execution.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-paper/12 bg-paper/[0.03] p-5 space-y-4">
                {[
                  ["Stage", "Pre-seed -> Series A"],
                  ["Typical Check", "$100k -> $4M"],
                  ["Review Window", "< 48 hours"],
                  ["Selection", "Top 2%"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 border-b border-paper/10 pb-2.5 last:border-b-0 last:pb-0">
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.18em] text-paper/45">{k}</span>
                    <span className="font-mono-ui text-[11px] uppercase tracking-[0.16em] text-accent">{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <Magnetic className="group mt-7 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent/40 text-accent font-sans font-semibold text-[13px] uppercase tracking-wider hover:bg-accent hover:text-paper transition-colors duration-500">
                View Criteria
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Magnetic>
            </Reveal>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[minmax(165px,auto)]"
            >
              {ELIGIBILITY_CARDS.map((card, index) => (
                <motion.div
                  key={card.title}
                  variants={staggerChild}
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  className={`group rounded-2xl border border-paper/12 bg-paper/[0.03] p-5 md:p-6 relative overflow-hidden cursor-default ${
                    card.span ?? ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent transition-all duration-600" />
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-amber-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
                    style={{ originX: 0, width: "100%" }}
                  />

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="text-3xl">{card.icon}</div>
                        <span className="font-mono-ui text-[10px] uppercase tracking-[0.18em] text-accent/85">Sector Fit</span>
                      </div>

                      <h3 className="font-condensed uppercase text-[2rem] leading-[0.9] tracking-[0.03em] text-paper mb-2">
                        {card.title}
                      </h3>
                      <p className="text-paper/45 text-[13px] font-body leading-relaxed mb-4 max-w-[32ch]">
                        {card.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="rounded-lg border border-paper/10 bg-ink/35 p-2.5">
                        <div className="font-mono-ui text-[9px] uppercase tracking-[0.14em] text-paper/40 mb-1">Stage</div>
                        <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-accent">{card.stage}</div>
                      </div>
                      <div className="rounded-lg border border-paper/10 bg-ink/35 p-2.5">
                        <div className="font-mono-ui text-[9px] uppercase tracking-[0.14em] text-paper/40 mb-1">Check</div>
                        <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-accent">{card.check}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
