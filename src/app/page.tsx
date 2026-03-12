"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  FileText,
  Zap,
  ExternalLink,
  Send,
  Search,
  Rocket,
  Handshake,
} from "lucide-react";
import {
  CharReveal,
  WordReveal,
  Reveal,
  ClipReveal,
  Counter,
  Magnetic,
  Parallax,
  Marquee,
  HorizontalScroll,
  LineReveal,
  ImageReveal,
  stagger,
  staggerChild,
} from "@/components/Animations";

/* ═══════════════════════════════════════════
   PAGE — Karo Pitch
   ═══════════════════════════════════════════ */

export default function Home() {
  /* Scroll-driven nav state */
  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(245,242,237,0)", "rgba(245,242,237,0.92)"]
  );
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(16px)"]);
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10,10,10,0)", "rgba(10,10,10,0.06)"]
  );

  /* Hero parallax */
  const heroRef = useRef(null);
  const { scrollYProgress: heroProg } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProg, [0, 1], [0, 200]);
  const heroOp = useTransform(heroProg, [0, 0.7], [1, 0]);

  return (
    <main className="grain">
      {/* ═══ NAV ═══ */}
      <motion.nav
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backgroundColor: navBg,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          borderBottom: "1px solid",
          borderBottomColor: navBorder,
        }}
      >
        <div className="container-wide flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-sans text-lg font-semibold tracking-tight text-ink">
            Karo<span className="font-display italic text-accent">Pitch</span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-10 text-[13px] tracking-wide uppercase text-dim">
            {["About", "Process", "Portfolio", "Network"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="relative group hover:text-ink transition-colors duration-300"
              >
                {l}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <Magnetic className="relative overflow-hidden rounded-full border border-ink/15 px-6 py-2.5 text-[13px] font-medium uppercase tracking-wider transition-colors hover:bg-ink hover:text-paper duration-500">
            Apply Now
          </Magnetic>
        </div>
      </motion.nav>

      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-16"
      >
        {/* Giant decorative number */}
        <div className="absolute top-[8%] right-[5%] big-number text-[clamp(200px,30vw,500px)]">
          &rsquo;26
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOp }}
          className="container-wide relative z-10"
        >
          {/* Eyebrow */}
          <Reveal delay={0.1} y={30}>
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-dim">
                By KaroStartup — Applications Open
              </span>
            </div>
          </Reveal>

          {/* Headline — character-stagger */}
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
          <div className="flex items-baseline gap-4 flex-wrap">
            <CharReveal
              text="Investors"
              as="h1"
              className="font-display italic text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95] tracking-tight text-accent"
              delay={0.6}
            />
            <Reveal delay={1} y={20}>
              <span className="text-dim text-[clamp(0.9rem,1.5vw,1.15rem)] font-body max-w-[360px] inline-block leading-relaxed ml-2">
                A curated platform connecting ambitious founders with leading angels &amp; venture funds.
              </span>
            </Reveal>
          </div>

          {/* Buttons */}
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

          {/* Stats */}
          <Reveal delay={1.3} y={30}>
            <LineReveal className="mt-20 mb-10" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
              {[
                { v: 250, s: "+", l: "Active Investors" },
                { v: 45, p: "$", s: "M+", l: "Capital Deployed" },
                { v: 120, s: "+", l: "Funded Startups" },
                { v: 2, p: "<", s: "%", l: "Acceptance Rate" },
              ].map((st, i) => (
                <div key={i} className={`pr-8 ${i !== 0 ? "md:border-l md:border-ink/6 md:pl-8" : ""}`}>
                  <div className="font-display italic text-[clamp(2rem,4vw,3rem)] text-ink">
                    <Counter target={st.v} prefix={st.p} suffix={st.s} />
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.15em] text-dim mt-1">
                    {st.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </motion.div>

        {/* Scroll cue */}
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-dim mt-2 block">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="py-6 border-y border-ink/5 overflow-hidden">
        <Marquee>
          {[
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
          ].map((n, i) => (
            <span key={i} className="mx-10 text-[13px] font-sans font-medium tracking-wide text-dim/60 whitespace-nowrap">
              {n}
              <span className="mx-10 text-accent/30">●</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-28 md:py-44">
        <div className="container-wide">
          {/* Section header — oversized number + label */}
          <div className="flex items-start gap-6 mb-20">
            <span className="font-display italic text-[clamp(4rem,8vw,7rem)] leading-none text-ink/[0.04]">
              01
            </span>
            <div className="pt-4">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans font-semibold">
                  The Platform
                </span>
              </Reveal>
              <WordReveal
                text="A refined experience for extraordinary founders."
                as="h2"
                className="font-sans text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.1] mt-3 max-w-2xl"
                delay={0.1}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
            {/* Text column */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <p className="text-dim text-[17px] leading-[1.8] mb-6 font-body">
                  We cut through the noise of traditional fundraising. Karo Pitch
                  restricts access to vetted investors and high-potential startups,
                  creating a high-trust environment where serious deals happen.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-dim text-[17px] leading-[1.8] mb-10 font-body">
                  Our curated approach means you spend less time on cold emails and
                  more time building your product.
                </p>
              </Reveal>
              <ClipReveal delay={0.35}>
                <blockquote className="relative pl-6 border-l-2 border-accent">
                  <p className="font-display italic text-[22px] leading-[1.5] text-ink/80">
                    &ldquo;The most frictionless fundraising experience we&rsquo;ve had.
                    We closed our seed round in 14 days.&rdquo;
                  </p>
                  <footer className="mt-4 text-[13px] tracking-wide uppercase text-dim font-sans">
                    — Founder, NovaPay
                  </footer>
                </blockquote>
              </ClipReveal>
            </div>

            {/* Cards */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-5">
              {[
                {
                  icon: FileText,
                  title: "Curated Dealflow",
                  desc: "Every startup is rigorously vetted before being presented to our investor network.",
                },
                {
                  icon: Zap,
                  title: "Direct Introductions",
                  desc: "No intermediaries. Connect face-to-face with the decision makers who write checks.",
                },
                {
                  icon: Compass,
                  title: "Strategic Matching",
                  desc: "Our algorithm only surfaces pitches to investors with relevant sector appetite.",
                },
              ].map((c, i) => (
                <Reveal key={i} delay={0.15 + i * 0.12} x={40} y={0}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className={`group flex gap-6 p-7 rounded-2xl border border-ink/6 bg-card hover:border-accent/25 transition-colors duration-500 ${
                      i === 1 ? "lg:ml-12" : ""
                    } ${i === 2 ? "lg:ml-24" : ""}`}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/8 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-500">
                      <c.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-[17px] mb-1.5">{c.title}</h3>
                      <p className="text-dim text-[14px] leading-relaxed font-body">{c.desc}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — Horizontal Scroll ═══ */}
      <section id="process">
        <div className="container-wide py-20">
          <div className="flex items-start gap-6 mb-4">
            <span className="font-display italic text-[clamp(4rem,8vw,7rem)] leading-none text-ink/[0.04]">
              02
            </span>
            <div className="pt-4">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans font-semibold">
                  Process
                </span>
              </Reveal>
              <WordReveal
                text="Four steps to your next funding round."
                as="h2"
                className="font-sans text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.1] mt-3 max-w-2xl"
                delay={0.1}
              />
            </div>
          </div>
        </div>

        <HorizontalScroll>
          {[
            {
              num: "01",
              icon: Send,
              title: "Apply",
              desc: "Submit your key metrics, pitch deck, and one-line thesis. Takes under 5 minutes.",
            },
            {
              num: "02",
              icon: Search,
              title: "Review",
              desc: "Our analyst team reviews every application. We respond within 48 hours, always.",
            },
            {
              num: "03",
              icon: Rocket,
              title: "Go Live",
              desc: "Your investor-ready profile goes live to a curated selection of matched partners.",
            },
            {
              num: "04",
              icon: Handshake,
              title: "Connect",
              desc: "Receive direct intro requests, schedule meetings, and close your round.",
            },
          ].map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative shrink-0 w-[75vw] md:w-[36vw] h-[60vh] rounded-3xl border border-ink/6 bg-card p-10 flex flex-col justify-between overflow-hidden group"
            >
              {/* Big background number */}
              <span className="absolute -top-6 -right-4 font-display italic text-[clamp(120px,15vw,200px)] text-ink/[0.025] leading-none select-none pointer-events-none group-hover:text-accent/[0.06] transition-colors duration-700">
                {step.num}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/8 flex items-center justify-center mb-8 group-hover:bg-accent/15 transition-colors duration-500">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-sans text-[clamp(1.5rem,2.5vw,2rem)] font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-dim text-[15px] leading-relaxed font-body max-w-[320px]">
                  {step.desc}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-accent font-sans font-semibold">
                Step {step.num}
                <div className="h-px flex-1 bg-accent/15" />
              </div>
            </motion.div>
          ))}
        </HorizontalScroll>
      </section>

      {/* ═══ WHO CAN APPLY ═══ */}
      <section className="py-28 md:py-44">
        <div className="container-wide">
          <div className="flex items-start gap-6 mb-20">
            <span className="font-display italic text-[clamp(4rem,8vw,7rem)] leading-none text-ink/[0.04]">
              03
            </span>
            <div className="pt-4">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans font-semibold">
                  Eligibility
                </span>
              </Reveal>
              <WordReveal
                text="Who can apply?"
                as="h2"
                className="font-sans text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.1] mt-3"
                delay={0.1}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Sticky copy */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <Reveal>
                <p className="text-dim text-[17px] leading-[1.8] mb-8 font-body">
                  We focus on early-stage, high-growth startups targeting large markets.
                  If you&rsquo;re building category-defining products, we want to hear
                  from you.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Magnetic className="group inline-flex items-center gap-2 text-accent font-sans font-semibold text-[15px] uppercase tracking-wider">
                  View criteria
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Magnetic>
              </Reveal>
            </div>

            {/* Grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { emoji: "💻", title: "SaaS", desc: "B2B, Developer Tools, Enterprise" },
                { emoji: "💳", title: "Fintech", desc: "Payments, Wealth, Infra" },
                { emoji: "🛒", title: "Consumer", desc: "D2C, Marketplaces, Social" },
                { emoji: "🤖", title: "AI / Deep Tech", desc: "GenAI, Robotics, Space" },
                { emoji: "🩺", title: "Health Tech", desc: "Digital Health, Biotech" },
                { emoji: "🌍", title: "Climate", desc: "Energy, Mobility, Carbon" },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  variants={staggerChild}
                  whileHover={{ y: -4, borderColor: "rgba(232,101,10,0.3)" }}
                  transition={{ duration: 0.25 }}
                  className="group relative p-6 rounded-2xl border border-ink/6 bg-card overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />
                  <div className="text-3xl mb-4">{c.emoji}</div>
                  <h3 className="font-sans font-semibold text-[16px] mb-1">{c.title}</h3>
                  <p className="text-dim text-[13px] font-body">{c.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ INVESTORS ═══ */}
      <section
        id="network"
        className="py-28 md:py-44 bg-ink text-paper overflow-hidden"
      >
        <div className="container-wide">
          <div className="flex items-start gap-6 mb-20">
            <span className="font-display italic text-[clamp(4rem,8vw,7rem)] leading-none text-paper/[0.04]">
              04
            </span>
            <div className="pt-4">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans font-semibold">
                  Network
                </span>
              </Reveal>
              <WordReveal
                text="Backed by the best in the business."
                as="h2"
                className="font-sans text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.1] mt-3 max-w-2xl text-paper"
                delay={0.1}
              />
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
          >
            {[
              { name: "Arjun Mehta", fund: "Sequoia Surge", initials: "AM" },
              { name: "Priya Nair", fund: "Lightspeed", initials: "PN" },
              { name: "Vikram Rao", fund: "Accel India", initials: "VR" },
              { name: "Sanya Gupta", fund: "Peak XV", initials: "SG" },
              { name: "Rajan Shah", fund: "Blume", initials: "RS" },
            ].map((inv, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-paper/6 bg-paper/[0.04]"
              >
                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display italic text-[clamp(3rem,5vw,4.5rem)] text-paper/[0.06] group-hover:text-accent/20 transition-colors duration-700">
                    {inv.initials}
                  </span>
                </div>
                {/* Info */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink via-ink/60 to-transparent">
                  <div className="font-sans font-semibold text-[14px] text-paper">{inv.name}</div>
                  <div className="text-paper/40 text-[12px] mt-0.5 font-body">{inv.fund}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Reveal>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 border border-paper/10 rounded-full px-5 py-2.5 text-[13px] font-sans">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                Applications Open — Limited Spots
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section id="portfolio" className="py-28 md:py-44">
        <div className="container-wide">
          <div className="flex items-start gap-6 mb-20">
            <span className="font-display italic text-[clamp(4rem,8vw,7rem)] leading-none text-ink/[0.04]">
              05
            </span>
            <div className="pt-4 flex-1">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans font-semibold">
                  Portfolio
                </span>
              </Reveal>
              <div className="flex items-end justify-between flex-wrap gap-4">
                <WordReveal
                  text="Featured startups"
                  as="h2"
                  className="font-sans text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.1] mt-3"
                  delay={0.1}
                />
                <Reveal delay={0.2}>
                  <Magnetic className="hidden md:inline-flex items-center gap-2 text-[13px] font-sans font-semibold uppercase tracking-wider text-dim hover:text-accent transition-colors duration-300">
                    View All <ArrowRight className="w-4 h-4" />
                  </Magnetic>
                </Reveal>
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              {
                tag: "Fintech",
                name: "NovaPay",
                desc: "Cross-border B2B payments infrastructure for emerging markets.",
                m1: "$2M ARR",
                m2: "70% Margin",
                m3: "12x YoY",
              },
              {
                tag: "SaaS",
                name: "Lumina",
                desc: "AI-driven customer success automation for enterprise software.",
                m1: "15k Users",
                m2: "98% NRR",
                m3: "Bootstrapped",
              },
              {
                tag: "Climate",
                name: "Aero",
                desc: "Distributed energy storage networks for urban centers across India.",
                m1: "Pre-seed",
                m2: "Patent Filed",
                m3: "LOIs Secured",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                className="group relative p-8 rounded-2xl border border-ink/6 bg-card overflow-hidden"
              >
                {/* Top saffron accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />

                <span className="inline-block px-3 py-1 rounded-md bg-elevated text-[11px] font-sans font-semibold uppercase tracking-wider mb-8">
                  {s.tag}
                </span>
                <h3 className="font-sans text-[24px] font-semibold mb-3">{s.name}</h3>
                <p className="text-dim text-[14px] leading-relaxed font-body mb-10 min-h-[44px]">
                  {s.desc}
                </p>

                <LineReveal className="mb-4" />
                <div className="flex items-center justify-between text-[12px] font-sans font-medium tracking-wide">
                  <span>{s.m1}</span>
                  <span className="text-ink/10">●</span>
                  <span>{s.m2}</span>
                  <span className="text-ink/10">●</span>
                  <span>{s.m3}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ ABOUT KAROSTARTUP ═══ */}
      <section className="py-28 md:py-44 bg-elevated">
        <div className="container-wide">
          <div className="flex items-start gap-6 mb-20">
            <span className="font-display italic text-[clamp(4rem,8vw,7rem)] leading-none text-ink/[0.04]">
              06
            </span>
            <div className="pt-4">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans font-semibold">
                  Origin
                </span>
              </Reveal>
              <WordReveal
                text="Built by KaroStartup"
                as="h2"
                className="font-sans text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.1] mt-3"
                delay={0.1}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-dim text-[17px] leading-[1.8] mb-6 font-body">
                  Karo Pitch is an initiative by KaroStartup, India&rsquo;s most
                  active founder community. We understand fundraising challenges
                  because we&rsquo;ve lived them.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-dim text-[17px] leading-[1.8] mb-8 font-body">
                  Our mission is to democratize access to capital by replacing warm
                  introductions with meritocratic matching — driven by data, guided by operators.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-sans font-semibold text-[15px] text-ink border-b border-ink/20 pb-1 hover:text-accent hover:border-accent transition-colors duration-300"
                >
                  Visit KaroStartup <ExternalLink className="w-4 h-4" />
                </a>
              </Reveal>
            </div>

            {/* Counters */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-4"
            >
              {[
                { v: 50000, s: "+", l: "Community Members" },
                { v: 300, s: "+", l: "Ecosystem Partners" },
                { v: 50, s: "+", l: "Cities Reached" },
                { v: 100, p: "$", s: "M", l: "Value Created" },
              ].map((st, i) => (
                <motion.div
                  key={i}
                  variants={staggerChild}
                  className="bg-paper p-8 rounded-2xl border border-ink/4"
                >
                  <div className="font-display italic text-[clamp(2rem,3.5vw,3rem)] text-ink mb-2">
                    <Counter target={st.v} prefix={st.p} suffix={st.s} />
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.15em] text-dim font-sans">
                    {st.l}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative py-40 md:py-56 bg-ink text-paper overflow-hidden">
        {/* Huge decorative text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display italic text-[clamp(100px,20vw,300px)] text-paper/[0.015] whitespace-nowrap">
            Karo Pitch
          </span>
        </div>

        {/* Radial accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

        <div className="container-narrow text-center relative z-10">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans font-semibold">
              Get Started
            </span>
          </Reveal>

          <div className="mt-6 mb-6">
            <CharReveal
              text="Ready to"
              as="h2"
              className="font-sans text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1] tracking-tighter text-paper"
              delay={0.1}
            />
            <CharReveal
              text="scale?"
              as="h2"
              className="font-display italic text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-tight text-accent"
              delay={0.3}
            />
          </div>

          <Reveal delay={0.5}>
            <p className="text-paper/40 text-[17px] font-body font-light max-w-md mx-auto mb-12 leading-relaxed">
              Join 120+ startups that have already secured funding through our
              platform. Your next round starts here.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic className="group flex items-center justify-center gap-2 bg-accent text-paper rounded-full px-10 py-5 font-sans font-semibold text-[16px] tracking-wide hover:bg-paper hover:text-ink transition-colors duration-500">
                Submit Your Deck
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Magnetic>
              <Magnetic className="flex items-center justify-center gap-2 border border-paper/15 text-paper rounded-full px-10 py-5 font-sans font-semibold text-[16px] tracking-wide hover:border-paper/50 transition-colors duration-500">
                Join as Investor
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-ink/6 py-8">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-sans text-[15px] font-semibold tracking-tight">
            Karo<span className="font-display italic text-accent">Pitch</span>
          </span>

          <div className="flex items-center gap-8 text-[12px] uppercase tracking-[0.15em] text-dim font-sans">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-ink transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>

          <span className="text-[12px] text-dim font-body">
            &copy; {new Date().getFullYear()} KaroStartup. All rights reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
