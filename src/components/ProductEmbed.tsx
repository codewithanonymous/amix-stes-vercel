"use client";
import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import type { Product } from "@/config/products";
import { GlassCard } from "@/components/fx/GlassCard";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { cn } from "@/lib/utils";

const glowMap = {
  blue: "glow-blue",
  purple: "glow-purple",
  cyan: "glow-cyan",
} as const;

export function ProductEmbed({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard glow={product.accent} className="p-5 md:p-7" tilt={false}>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">{product.title}</h3>
          <p className="text-muted-foreground mt-1">{product.tagline}</p>
        </div>
        <a
          href={product.embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
        >
          Open in new tab <ExternalLink className="size-3.5" />
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {product.features.map((f) => (
          <span
            key={f}
            className="rounded-full glass px-3 py-1 text-xs font-medium text-foreground/85"
          >
            {f}
          </span>
        ))}
      </div>

      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-surface",
          glowMap[product.accent]
        )}
      >
        {open ? (
          <iframe
            src={product.embedUrl}
            title={`${product.title} live demo`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="fullscreen"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group absolute inset-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Launch ${product.title} live demo`}
          >
            <img
              src={product.thumbnail}
              alt={`${product.title} preview`}
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="glass gradient-border inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-glow-blue">
                <Play className="size-4" /> Launch live demo
              </span>
            </div>
          </button>
        )}
      </div>
    </GlassCard>
  );
}
