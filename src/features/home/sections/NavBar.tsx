"use client";

import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/Animations";

const NAV_LINKS = ["About", "Process", "Portfolio", "Network"];

/**
 * Top navigation with scroll-reactive glass background.
 */
export function NavBar({
  navBg,
  navBlur,
  navBorder,
}: {
  navBg: MotionValue<string>;
  navBlur: MotionValue<string>;
  navBorder: MotionValue<string>;
}) {
  return (
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
      <div className="container-wide flex h-16 pb-2 items-center justify-between">
        <a href="#" className="font-sans text-lg font-semibold tracking-tight text-ink">
          Karo<span className="font-display italic text-accent">Pitch</span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-[13px] tracking-wide uppercase text-dim">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group hover:text-ink transition-colors duration-300"
            >
              {link}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <Magnetic className="relative overflow-hidden rounded-full border border-ink/15 px-6 py-2.5 text-[13px] font-medium uppercase tracking-wider transition-colors hover:bg-ink hover:text-paper duration-500">
          Apply Now
        </Magnetic>
      </div>
    </motion.nav>
  );
}
