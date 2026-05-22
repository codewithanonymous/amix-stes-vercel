"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0 0" }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-cyber"
      aria-hidden
    />
  );
}
