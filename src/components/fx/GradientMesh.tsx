/** Animated mesh gradient — pure CSS, GPU-friendly. */
export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-1/3 -left-1/4 h-[60vmax] w-[60vmax] rounded-full bg-primary/30 blur-[120px] animate-glow-pulse" />
      <div
        className="absolute -bottom-1/3 -right-1/4 h-[60vmax] w-[60vmax] rounded-full bg-accent/30 blur-[120px] animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-[40vmax] w-[40vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow/20 blur-[120px] animate-glow-pulse"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute -inset-[20%] opacity-60 animate-aurora"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, oklch(0.68 0.22 265 / 0.4), oklch(0.65 0.27 305 / 0.4), oklch(0.82 0.16 200 / 0.4), oklch(0.68 0.22 265 / 0.4))",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
