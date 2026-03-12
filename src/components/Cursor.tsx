"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 180, mass: 0.5 });
  const ringY = useSpring(y, { damping: 28, stiffness: 180, mass: 0.5 });
  const scale = useSpring(1, { damping: 20, stiffness: 300 });

  const onMove = useCallback(
    (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    },
    [x, y]
  );

  useEffect(() => {
    setMounted(true);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hit =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        !!t.closest("a,button,[data-hover]");
      setHovering(hit);
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [onMove]);

  useEffect(() => {
    scale.set(hovering ? 2.2 : 1);
  }, [hovering, scale]);

  if (!mounted) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot hidden md:block"
        style={{ x, y, opacity: hidden ? 0 : 1 }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          scale,
          opacity: hidden ? 0 : hovering ? 0.6 : 0.35,
        }}
      />
    </>
  );
}
