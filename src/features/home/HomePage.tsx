"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { AboutSection } from "./sections/AboutSection";
import { EligibilitySection } from "./sections/EligibilitySection";
import { FinalCtaSection } from "./sections/FinalCtaSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { InvestorsSection } from "./sections/InvestorsSection";
import { MarqueeBand } from "./sections/MarqueeBand";
import { NavBar } from "./sections/NavBar";
import { OriginSection } from "./sections/OriginSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ProcessSection } from "./sections/ProcessSection";
import { SectionDivider } from "./sections/SectionDivider";

/**
 * Home page composition root.
 * Owns scroll-driven values and delegates UI to section-level components.
 */
export function HomePage() {
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

  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);

  return (
    <main className="grain">
      <NavBar navBg={navBg} navBlur={navBlur} navBorder={navBorder} />
      <HeroSection heroRef={heroRef} heroY={heroY} heroOpacity={heroOpacity} />
      <MarqueeBand />
      <AboutSection />

      <SectionDivider
        sectionNumber="§02"
        title="Process"
        subtitle="How It Works"
      />
      <ProcessSection />

      <SectionDivider
        sectionNumber="§03"
        title="Eligibility"
        subtitle="Who Can Apply"
      />
      <EligibilitySection />

      <SectionDivider
        sectionNumber="§04"
        title="Network"
        subtitle="Top Investors"
        dark
        useReveal={false}
      />
      <InvestorsSection />

      <SectionDivider
        sectionNumber="§05"
        title="Portfolio"
        subtitle="Funded Startups"
      />
      <PortfolioSection />

      <SectionDivider
        sectionNumber="§06"
        title="Origin"
        subtitle="Our Story"
        backgroundClassName="bg-elevated"
      />
      <OriginSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
