"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const pointerX = useSpring(x, { damping: 28, stiffness: 180, mass: 0.5 });
  const pointerY = useSpring(y, { damping: 28, stiffness: 180, mass: 0.5 });
  const auraX = useSpring(x, { damping: 34, stiffness: 140, mass: 0.9 });
  const auraY = useSpring(y, { damping: 34, stiffness: 140, mass: 0.9 });
  const dotScale = useSpring(1, { damping: 20, stiffness: 300 });
  const pointerScale = useSpring(1, { damping: 22, stiffness: 260 });

  const onMove = useCallback(
    (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    },
    [x, y]
  );

  useEffect(() => {
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
    dotScale.set(hovering ? 1.45 : 1);
    pointerScale.set(hovering ? 1.18 : 1);
  }, [hovering, dotScale, pointerScale]);

  return (
    <>
      {/* Aura */}
      <motion.div
        className="cursor-aura hidden md:block"
        style={{
          x: auraX,
          y: auraY,
          scale: pointerScale,
          opacity: hidden ? 0 : hovering ? 0.5 : 0.28,
        }}
      />
      {/* Dot */}
      <motion.div
        className="cursor-dot hidden md:block"
        style={{ x, y, scale: dotScale, opacity: hidden ? 0 : 1 }}
      />
      {/* Pointer */}
      <motion.div
        className="cursor-pointer hidden md:block"
        style={{
          x: pointerX,
          y: pointerY,
          scale: pointerScale,
          opacity: hidden ? 0 : hovering ? 0.95 : 0.75,
        }}
      />
    </>
  );
}
