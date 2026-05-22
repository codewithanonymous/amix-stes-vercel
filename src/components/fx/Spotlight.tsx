"use client";
import { useEffect, useRef, useState } from "react";

/** Cursor-following radial spotlight. Pointer devices only. */
export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    const parent = el.parentElement;
    parent?.addEventListener("mousemove", onMove);
    return () => parent?.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background:
          "radial-gradient(600px circle at var(--x,50%) var(--y,50%), oklch(0.82 0.16 200 / 0.12), transparent 60%)",
      }}
    />
  );
}
