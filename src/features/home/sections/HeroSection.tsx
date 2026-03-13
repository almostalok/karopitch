"use client";

import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  CharReveal,
  ClipReveal,
  Counter,
  LineReveal,
  Magnetic,
  Reveal,
} from "@/components/Animations";

/**
 * Landing hero with parallax headline, primary CTAs, and live metrics.
 */
export function HeroSection({
  heroRef,
  heroY,
  heroOpacity,
}: {
  heroRef: React.RefObject<HTMLElement | null>;
  heroY: MotionValue<number>;
  heroOpacity: MotionValue<number>;
}) {
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden mt-10 pb-16"
    >
      <div className="absolute top-[8%] right-[5%] big-number text-[clamp(200px,30vw,500px)]">
        &rsquo;26
      </div>

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container-wide relative z-10">
        <Reveal delay={0.1} y={30}>
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
            </span>
          </div>
        </Reveal>

        <CharReveal
          text="Pitch Your Startup"
          as="h1"
          className="font-sans text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95] tracking-tighter text-ink"
          delay={0.2}
        />
        <CharReveal
          text="to India's Top"
          as="h1"
          className="font-sans text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95] tracking-tighter text-ink"
          delay={0.4}
        />

        <div className="flex items-end gap-5 flex-wrap">
          <ClipReveal delay={0.6} className="pb-[0.12em] pr-[0.03em]">
            <h1 className="inline-block font-display italic text-[clamp(3rem,9vw,8rem)] font-bold leading-[1.06] tracking-tight text-accent">
              Investors
            </h1>
          </ClipReveal>
          <Reveal delay={1} y={20}>
            <span className="text-dim text-[clamp(0.9rem,1.5vw,1.15rem)] font-body max-w-[360px] inline-block leading-relaxed mb-[0.5em]">
              A curated platform connecting ambitious founders with leading angels &amp; venture funds.
            </span>
          </Reveal>
        </div>

        <Reveal delay={1.1} y={30}>
          <div className="flex flex-wrap gap-4 mt-12">
            <Magnetic className="group flex items-center gap-2 bg-ink text-paper rounded-full px-8 py-4 text-[15px] font-sans font-medium tracking-wide uppercase hover:bg-accent transition-colors duration-500">
              Apply to Pitch
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
            </Magnetic>
            <Magnetic className="flex items-center gap-2 border border-ink/15 rounded-full px-8 py-4 text-[15px] font-sans font-medium tracking-wide uppercase hover:border-ink/60 transition-colors duration-500">
              Explore Startups
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={1.3} y={30}>
          <LineReveal className="mt-20 mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
            {[
              { value: 250, suffix: "+", label: "Active Investors" },
              { value: 45, prefix: "$", suffix: "M+", label: "Capital Deployed" },
              { value: 120, suffix: "+", label: "Funded Startups" },
              { value: 2, prefix: "<", suffix: "%", label: "Acceptance Rate" },
            ].map((metric, index) => (
              <div
                key={metric.label}
                className={`pr-8 ${index !== 0 ? "md:border-l md:border-ink/6 md:pl-8" : ""}`}
              >
                <div className="font-display italic text-[clamp(2rem,4vw,3rem)] text-ink">
                  <Counter
                    target={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </div>
                <div className="text-[12px] uppercase tracking-[0.15em] text-dim mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-ink/20 mx-auto"
        />
        <span className="text-[10px] uppercase tracking-[0.3em] text-dim mt-2 block">Scroll</span>
      </motion.div>
    </section>
  );
}
