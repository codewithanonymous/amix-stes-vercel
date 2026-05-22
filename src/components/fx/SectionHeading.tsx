import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-foreground/80 uppercase">
          <span className="size-1.5 rounded-full bg-cyan-glow shadow-[0_0_10px_var(--cyan-glow)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
