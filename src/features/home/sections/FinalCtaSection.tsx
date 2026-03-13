"use client";

import { ArrowUpRight } from "lucide-react";
import {
  ClipReveal,
  FloatingElement,
  GradientText,
  Magnetic,
  Reveal,
} from "@/components/Animations";

/**
 * Final conversion section focused on application submission.
 */
export function FinalCtaSection() {
  return (
    <section className="relative py-44 md:py-64 bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,242,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,237,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display italic text-[clamp(80px,18vw,260px)] text-paper/[0.018] whitespace-nowrap">
          Karo Pitch
        </span>
      </div>

      <FloatingElement className="absolute top-[15%] left-[8%] pointer-events-none" duration={7} range={20}>
        <div className="w-32 h-32 rounded-full bg-accent/8 blur-3xl" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-[20%] right-[6%] pointer-events-none" duration={9} range={15}>
        <div className="w-48 h-48 rounded-full bg-accent/5 blur-3xl" />
      </FloatingElement>

      <div className="container-narrow text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 border border-accent/25 rounded-full px-5 py-2 mb-10 section-kicker text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Applications Now Open
          </div>
        </Reveal>

        <div className="mb-8">
          <ClipReveal>
            <h2 className="font-condensed uppercase leading-[0.9] text-[clamp(3.8rem,9vw,7.6rem)] text-paper">
              Ready to
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.12}>
            <h2 className="font-editorial italic font-semibold leading-[0.88] tracking-tight text-[clamp(4rem,9vw,8rem)] text-paper">
              <GradientText>scale?</GradientText>
            </h2>
          </ClipReveal>
        </div>

        <Reveal delay={0.35}>
          <p className="text-paper/35 text-[18px] font-body font-light max-w-md mx-auto mb-14 leading-relaxed">
            Join 120+ startups that have already secured funding through our platform. Your next round starts here.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Magnetic className="group relative overflow-hidden flex items-center justify-center gap-2 bg-accent text-paper rounded-full px-10 py-5 font-sans font-bold text-[16px] tracking-wide uppercase hover:bg-paper hover:text-ink transition-colors duration-500">
              <span className="relative z-10 flex items-center gap-2">
                Submit Your Deck
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </Magnetic>
            <Magnetic className="flex items-center justify-center gap-2 border border-paper/12 text-paper/70 rounded-full px-10 py-5 font-sans font-semibold text-[16px] tracking-wide uppercase hover:border-paper/40 hover:text-paper transition-colors duration-500">
              Join as Investor
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
