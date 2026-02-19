"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Direction to animate from. Defaults to "up". */
  from?: "up" | "left" | "none";
}

/**
 * Wraps children in a scroll-triggered fade-in animation.
 * Subtle by design — 16px translate, 0.5s ease.
 * Use `delay` (in seconds) to stagger sibling elements.
 */
export function FadeIn({
  children,
  delay = 0,
  className = "",
  from = "up",
}: FadeInProps) {
  const ref = useRef(null);
  // once: true — only animate in, never reverses on scroll-up
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const initialY = from === "up" ? 20 : 0;
  const initialX = from === "left" ? -20 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}