"use client";

import { motion } from "framer-motion";
import { ArrowRight, Handshake, Rocket, Search, Send } from "lucide-react";
import {
  ClipReveal,
  HorizontalScroll,
  Magnetic,
  Reveal,
  TiltCard,
} from "@/components/Animations";

const STEPS = [
  {
    num: "01",
    icon: Send,
    title: "Apply",
    desc: "Submit your key metrics, pitch deck, and one-line thesis. Takes under 5 minutes.",
    accent: "bg-orange-500",
  },
  {
    num: "02",
    icon: Search,
    title: "Review",
    desc: "Our analyst team reviews every application. We respond within 48 hours, always.",
    accent: "bg-amber-500",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Go Live",
    desc: "Your investor-ready profile goes live to a curated selection of matched partners.",
    accent: "bg-orange-400",
  },
  {
    num: "04",
    icon: Handshake,
    title: "Connect",
    desc: "Receive direct intro requests, schedule meetings, and close your round.",
    accent: "bg-orange-600",
  },
];

/**
 * Horizontal storytelling section that maps the 4-step funnel.
 */
export function ProcessSection() {
  return (
    <section id="process" className="relative paper-grid">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-accent/40 to-transparent pointer-events-none" />

      <div className="container-wide py-24">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <span className="num-badge">02</span>
            <div className="h-px flex-1 max-w-[60px] bg-accent/30" />
            <span className="section-kicker text-accent">Process</span>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          <div>
            <ClipReveal>
              <h2 className="font-condensed uppercase leading-[0.9] text-[clamp(3rem,6vw,5.4rem)] text-ink/90">
                Four steps to your
              </h2>
            </ClipReveal>
            <ClipReveal delay={0.1}>
              <h2 className="font-condensed uppercase leading-[0.9] text-[clamp(3rem,6vw,5.4rem)] text-accent">
                next round.
              </h2>
            </ClipReveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-dim text-[15px] font-body max-w-sm leading-relaxed">
              Our process is designed to be fast, transparent, and bias-free. No warm intros required.
            </p>
          </Reveal>
        </div>
      </div>

      <HorizontalScroll>
        {STEPS.map((step, index) => (
          <TiltCard
            key={step.num}
            intensity={6}
            className="relative shrink-0 w-[78vw] md:w-[38vw] h-[62vh] rounded-3xl border border-ink/8 bg-card p-10 flex flex-col justify-between overflow-hidden group card-glow section-frame"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/6 group-hover:via-amber-500/4 group-hover:to-transparent transition-all duration-700" />

            <div className="relative z-10 flex items-center gap-3 mb-8">
              <div className={`w-1.5 h-1.5 rounded-full ${step.accent} opacity-60`} />
              <div className="h-px flex-1 bg-ink/8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-accent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                  style={{ originX: 0 }}
                />
              </div>
              <span className="font-mono-ui text-[11px] font-bold tracking-[0.22em] text-ink/25">
                {step.num}/04
              </span>
            </div>

            <div className="relative z-10 flex-1">
              <div className="absolute -top-4 -right-3 font-condensed text-[clamp(120px,16vw,210px)] leading-none text-ink/[0.03] select-none group-hover:text-accent/[0.08] transition-colors duration-700">
                {step.num}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-condensed uppercase text-[clamp(2.2rem,4vw,3.2rem)] leading-[0.95] mb-4 tracking-[0.02em]">
                {step.title}
              </h3>
              <p className="text-dim text-[15px] leading-relaxed font-body max-w-[300px]">{step.desc}</p>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-3">
              <span className="section-kicker text-accent">Step {step.num}</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent/50" />
            </div>
          </TiltCard>
        ))}
      </HorizontalScroll>

      <Reveal y={12}>
        <div className="mt-10 flex justify-center pb-6">
          <Magnetic className="inline-flex items-center gap-2 text-[12px] font-mono-ui tracking-[0.22em] uppercase text-dim hover:text-accent transition-colors duration-300">
            Drag / Scroll Through Steps
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
