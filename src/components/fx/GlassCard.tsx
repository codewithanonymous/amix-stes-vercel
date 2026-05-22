"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  glow?: "blue" | "purple" | "cyan" | "none";
  tilt?: boolean;
  children: React.ReactNode;
};

/** Glassmorphic card with optional 3D tilt + glow + animated gradient border. */
export function GlassCard({
  className,
  glow = "blue",
  tilt = true,
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pointerFine, setPointerFine] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  useEffect(() => {
    setPointerFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!tilt || !pointerFine) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const glowClass =
    glow === "blue" ? "hover:glow-blue" :
    glow === "purple" ? "hover:glow-purple" :
    glow === "cyan" ? "hover:glow-cyan" : "";

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={tilt && pointerFine ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      className={cn(
        "glass gradient-border rounded-2xl p-6 transition-shadow duration-500",
        glowClass,
        className
      )}
      {...(rest as any)}
    >
      {children}
    </motion.div>
  );
}
