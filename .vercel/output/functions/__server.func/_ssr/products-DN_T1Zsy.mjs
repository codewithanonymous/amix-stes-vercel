import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { p as products } from "./router-DnDmU8V7.mjs";
import { G as GradientMesh, B as BlurReveal } from "./GradientMesh-FQe_XZYy.mjs";
import { G as GlassCard } from "./GlassCard-hTALr0SD.mjs";
import { C as CTAStrip } from "./CTAStrip-DSRm-_o7.mjs";
import { E as ExternalLink, k as Play } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lenis.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
function ProductEmbed({ product }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { glow: product.accent, className: "p-5 md:p-6 h-full", tilt: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl text-foreground leading-tight", children: product.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: product.tagline })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: product.embedUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1.5 text-xs text-foreground/60 hover:text-primary transition-colors shrink-0",
          children: [
            "Open ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-5", children: product.features.slice(0, 4).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "rounded-full bg-foreground/[0.04] border border-foreground/8 px-2.5 py-1 text-[11px] font-medium text-foreground/75",
        children: f
      },
      f
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-foreground/8 bg-surface", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        src: product.embedUrl,
        title: `${product.title} live demo`,
        loading: "lazy",
        sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
        allow: "fullscreen",
        referrerPolicy: "no-referrer",
        className: "absolute inset-0 h-full w-full"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen(true),
        className: "group absolute inset-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "aria-label": `Launch ${product.title} live demo`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.thumbnail,
              alt: `${product.title} preview`,
              className: "absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105",
              loading: "lazy",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/10 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-[0_14px_36px_-12px_rgba(15,23,42,0.4)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-4 text-primary" }),
            " Launch live demo"
          ] }) })
        ]
      }
    ) })
  ] });
}
function ProductsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-36 pb-16", "aria-label": "Products hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientMesh, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BlurReveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]", children: [
          "Live Products. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Real demos." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: [
          "Three flagship platforms you can try right now. Replace the embed URL in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-cyan-glow", children: "src/config/products.ts" }),
          " to point at your own."
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pb-24 space-y-10", "aria-label": "Live products", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 space-y-10", children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductEmbed, { product: p }) }, p.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTAStrip, {})
  ] });
}
export {
  ProductsPage as component
};
