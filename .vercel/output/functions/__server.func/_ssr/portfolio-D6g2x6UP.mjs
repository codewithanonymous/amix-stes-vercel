import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GradientMesh, B as BlurReveal } from "./GradientMesh-BpH_Juy_.mjs";
import { S as SectionHeading } from "./SectionHeading-CBX412u8.mjs";
import { F as FeaturedEcommerce, T as Testimonials } from "./Testimonials-DMUH54pl.mjs";
import { C as CTAStrip } from "./CTAStrip-D4N2s49J.mjs";
import "../_libs/vaul.mjs";
import { a as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "./router-DUQXQX5F.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lenis.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const items = [
  { title: "Quickserve", category: "Restaurant", outcome: "QR ordering platform — 32% revenue lift.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=70" },
  { title: "PeoplePulse", category: "HRM", outcome: "Unified HR dashboard for 1,200+ employees.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=70" },
  { title: "EduCore", category: "Education", outcome: "School ERP across 14 campuses.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=70" },
  { title: "NorthRetail", category: "E-commerce", outcome: "Multi-vendor marketplace, 50k SKUs.", img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=70" },
  { title: "CloudOps", category: "Cloud", outcome: "DevOps console with one-click deploys.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=70" },
  { title: "FinLite", category: "SaaS", outcome: "Subscription CRM for SMB finance teams.", img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=70" }
];
function Portfolio({ limit }) {
  const list = limit ? items.slice(0, limit) : items;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 md:py-32", "aria-label": "Portfolio", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Selected Work",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Products & platforms ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic gradient-text-static", children: "we've shipped" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 grid max-w-7xl gap-5 px-4 md:grid-cols-2 lg:grid-cols-3", children: list.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-3xl bg-white border border-foreground/8 shadow-soft hover:shadow-[0_30px_70px_-30px_rgba(139,92,246,0.35)] hover:-translate-y-1 hover:border-accent/25 transition-all duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: it.img,
            alt: `${it.title} — ${it.category} case study preview`,
            loading: "lazy",
            decoding: "async",
            width: 900,
            height: 675,
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase text-foreground/80", children: it.category })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: it.outcome })
      ] })
    ] }) }, it.title)) }),
    limit && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all", children: [
      "See full portfolio ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
    ] }) })
  ] });
}
function PortfolioPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-36 pb-10", "aria-label": "Portfolio hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientMesh, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BlurReveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]", children: [
          "Selected ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Work" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: "Products and platforms we've shipped." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedEcommerce, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTAStrip, {})
  ] });
}
export {
  PortfolioPage as component
};
