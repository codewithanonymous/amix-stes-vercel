import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route, a as projects } from "./router-DUQXQX5F.mjs";
import { G as GradientMesh, B as BlurReveal } from "./GradientMesh-BpH_Juy_.mjs";
import { C as CTAStrip } from "./CTAStrip-D4N2s49J.mjs";
import { t as ArrowLeft, S as Sparkles, u as CircleCheck, e as Layers, E as ExternalLink, r as CalendarCheck, a as ArrowUpRight, X } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lenis.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ProjectDetail() {
  const {
    project
  } = Route.useLoaderData();
  const [showcaseOpen, setShowcaseOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-32 pb-10 bg-white", "aria-label": `${project.name} hero`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientMesh, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BlurReveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
          " All Projects"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white border border-foreground/8 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/70 shadow-soft", children: project.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
            " Case Study"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-foreground max-w-3xl", children: project.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base md:text-lg text-muted-foreground", children: project.tagline })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pb-20 bg-surface", "aria-label": "Project details", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 pt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-foreground/8 p-7 md:p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground", children: "Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm md:text-base text-muted-foreground leading-relaxed", children: [
            project.tagline,
            " Built end-to-end by AMIX SITES, this ",
            project.category.toLowerCase(),
            " platform is designed to be fast, secure, and easy to operate — engineered for real businesses, not demos."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-foreground/8 p-7 md:p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground", children: "Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3", children: project.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 rounded-2xl bg-foreground/[0.03] border border-foreground/5 px-3.5 py-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-primary mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85 font-medium", children: f })
          ] }, f)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-foreground/8 p-7 md:p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground", children: "Business Benefits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: project.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-cyber" }),
            b
          ] }, b)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 md:sticky md:top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden border border-foreground/8 shadow-[0_30px_80px_-30px_rgba(99,102,241,0.45)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.image, alt: `${project.name} screenshot`, loading: "eager", decoding: "async", className: "block w-full h-auto object-cover aspect-[4/3]" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-foreground/8 p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/55", children: "Tech Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: project.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-foreground/[0.04] border border-foreground/8 px-2.5 py-1 text-[11px] font-semibold text-foreground/75", children: t }, t)) })
        ] }) }),
        project.showcase && /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
          y: -4
        }, transition: {
          type: "spring",
          stiffness: 240,
          damping: 22
        }, className: "relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-6 shadow-[0_24px_60px_-24px_rgba(99,102,241,0.35)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -top-16 -right-16 size-48 rounded-full bg-gradient-to-br from-primary/30 via-fuchsia-400/20 to-cyan-400/20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 rounded-full bg-foreground/[0.04] border border-foreground/8 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "size-3" }),
              " Interactive Showcase"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl text-foreground", children: project.showcase.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: project.showcase.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground/85", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-primary shrink-0" }),
              " ",
              h
            ] }, h)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { whileTap: {
              scale: 0.97
            }, onClick: () => setShowcaseOpen(true), className: "mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(168,85,247,0.6)] hover:shadow-[0_22px_50px_-18px_rgba(168,85,247,0.75)] transition-shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" }),
              " ",
              project.showcase.ctaLabel
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-cyber p-6 text-white shadow-[0_24px_60px_-20px_rgba(99,102,241,0.55)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: "Like what you see?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-white/85", children: "Let's build something similar — or even better — for your business." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-2.5", children: [
            project.demoUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { whileHover: {
              y: -2
            }, whileTap: {
              scale: 0.97
            }, href: project.demoUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-white via-cyan-100 to-fuchsia-100 text-foreground px-5 py-3 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(255,255,255,0.6)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4" }),
              " View Live Demo"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center justify-center gap-1.5 rounded-full bg-white/15 border border-white/30 text-white px-5 py-3 text-sm font-semibold hover:bg-white/25 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "size-4" }),
              " Book Free Consultation"
            ] })
          ] })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pb-20 bg-surface", "aria-label": "More projects", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-foreground", children: "More projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: projects.filter((p) => p.slug !== project.slug).slice(0, 3).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$slug", params: {
        slug: p.slug
      }, className: "group block rounded-3xl bg-white border border-foreground/8 shadow-soft hover:shadow-[0_24px_60px_-24px_rgba(99,102,241,0.35)] hover:-translate-y-1 transition-all overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground line-clamp-1", children: p.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary", children: [
            "View Details ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
          ] })
        ] })
      ] }, p.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTAStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: project.showcase && showcaseOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-foreground/40 backdrop-blur-sm p-0 md:p-6", onClick: () => setShowcaseOpen(false), role: "dialog", "aria-modal": "true", "aria-label": `${project.showcase.title} showcase`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      y: 80,
      opacity: 0,
      scale: 0.98
    }, animate: {
      y: 0,
      opacity: 1,
      scale: 1
    }, exit: {
      y: 80,
      opacity: 0,
      scale: 0.98
    }, transition: {
      type: "spring",
      stiffness: 260,
      damping: 28
    }, onClick: (e) => e.stopPropagation(), className: "relative w-full md:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/60 shadow-[0_40px_120px_-30px_rgba(99,102,241,0.45)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-foreground/8 bg-white/85 backdrop-blur-xl px-5 md:px-7 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/55", children: "Showcase" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-2xl text-foreground", children: project.showcase.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowcaseOpen(false), className: "rounded-full p-2 hover:bg-foreground/[0.06] transition-colors", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 md:px-7 py-6 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-2xl border border-foreground/8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.image, alt: project.name, className: "block w-full h-auto aspect-[16/9] object-cover" }) }),
        project.showcase.sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-foreground/8 bg-white p-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg text-foreground", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2", children: s.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 rounded-xl bg-foreground/[0.03] border border-foreground/5 px-3 py-2 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-primary mt-0.5 shrink-0" }),
            " ",
            it
          ] }, it)) })
        ] }, s.title)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", onClick: () => setShowcaseOpen(false), className: "inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(168,85,247,0.6)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "size-4" }),
          " Request a personalized walkthrough"
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  ProjectDetail as component
};
