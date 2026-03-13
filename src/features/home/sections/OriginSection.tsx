"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  ClipReveal,
  Counter,
  GradientText,
  Reveal,
  stagger,
  staggerChild,
} from "@/components/Animations";

const ORIGIN_METRICS = [
  {
    value: 50000,
    suffix: "+",
    label: "Community Members",
    color: "from-accent/8",
    note: "India's most active founder community",
  },
  {
    value: 300,
    suffix: "+",
    label: "Ecosystem Partners",
    color: "from-amber-500/8",
    note: "Funds, operators, and ecosystem builders",
  },
  {
    value: 50,
    suffix: "+",
    label: "Cities Reached",
    color: "from-orange-400/8",
    note: "A distributed network with local density",
  },
  {
    value: 100,
    prefix: "$",
    suffix: "M",
    label: "Value Created",
    color: "from-accent/10",
    note: "Measured across capital and company outcomes",
  },
];

/**
 * Origin story section with sticky narrative and stat strips.
 */
export function OriginSection() {
  return (
    <section className="relative py-32 md:py-52 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="num-badge">06</span>
            <div className="h-px flex-1 max-w-[60px] bg-accent/30" />
            <span className="section-kicker text-accent">Origin</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ClipReveal>
              <h2 className="font-editorial font-semibold leading-[0.88] tracking-tight text-[clamp(3rem,6vw,5.5rem)] mb-2">
                Built by
              </h2>
            </ClipReveal>
            <ClipReveal delay={0.1}>
              <h2 className="font-display italic font-bold leading-[0.88] tracking-tight text-[clamp(3.1rem,6.4vw,5.8rem)] mb-10">
                <GradientText>KaroStartup.</GradientText>
              </h2>
            </ClipReveal>
            <Reveal delay={0.15}>
              <p className="text-dim text-[17px] leading-[1.85] mb-6 font-body">
                Karo Pitch is an initiative by KaroStartup, India&rsquo;s most active founder community. We understand fundraising challenges because we&rsquo;ve lived them.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-dim text-[17px] leading-[1.85] mb-10 font-body">
                Our mission: democratize access to capital by replacing warm introductions with meritocratic matching — driven by data, guided by operators.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 font-sans font-bold text-[15px] text-ink border-b-2 border-ink/15 pb-1 hover:text-accent hover:border-accent transition-colors duration-300"
              >
                Visit KaroStartup <ExternalLink className="w-4 h-4" />
              </a>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-10 section-frame rounded-[1.75rem] bg-card p-7">
                <div className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-accent mb-4">Operating Thesis</div>
                <p className="font-editorial text-[2rem] leading-[1.04] tracking-tight text-ink">
                  Access should be earned by signal, not inherited by network.
                </p>
              </div>
            </Reveal>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="lg:col-span-6 lg:col-start-7 space-y-4"
          >
            {ORIGIN_METRICS.map((metric) => (
              <motion.div
                key={metric.label}
                variants={staggerChild}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-[1.75rem] border border-ink/6 bg-gradient-to-r ${metric.color} via-card to-card p-7 md:p-8 overflow-hidden card-glow section-frame`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/8 group-hover:to-transparent transition-all duration-700" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-center">
                  <div>
                    <div className="font-display italic text-[clamp(2.2rem,3.5vw,3rem)] text-ink mb-2">
                      <Counter
                        target={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    </div>
                    <div className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-dim">
                      {metric.label}
                    </div>
                  </div>
                  <p className="text-dim text-[14px] leading-relaxed font-body max-w-[34ch]">{metric.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
