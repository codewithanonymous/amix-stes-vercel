import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as GradientMesh, B as BlurReveal } from "./GradientMesh-FQe_XZYy.mjs";
import { G as GlassCard } from "./GlassCard-hTALr0SD.mjs";
import { S as SectionHeading } from "./SectionHeading-D6KnOJMa.mjs";
import { S as Stats } from "./Stats-BA5VBDuy.mjs";
import { C as CTAStrip } from "./CTAStrip-DSRm-_o7.mjs";
import "./router-DnDmU8V7.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
const techs = [
  "React",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "AWS",
  "Firebase",
  "Docker",
  "GitHub Actions"
];
function LogoMarquee() {
  const row = [...techs, ...techs];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative overflow-hidden py-8 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]",
      "aria-label": "Technology stack",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-6", children: row.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "glass gradient-border rounded-full px-6 py-3 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors whitespace-nowrap",
          children: t
        },
        i
      )) })
    }
  );
}
const values = [{
  title: "Build for real users",
  text: "Every screen ships with intent."
}, {
  title: "Engineer for scale",
  text: "Cloud-native from day one."
}, {
  title: "Move with speed",
  text: "Weekly releases, not yearly rewrites."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-36 pb-16", "aria-label": "About hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientMesh, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BlurReveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]", children: [
          "We're ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "AMIX SITES." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: "A modern software studio building products that businesses actually use." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-12", "aria-label": "Story", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass gradient-border rounded-3xl p-8 md:p-10 space-y-4 text-foreground/90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We started AMIX SITES with one belief: software should pull its weight. Not just look modern — actually move the numbers that matter for the business behind it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today we build full-stack web apps, multi-tenant SaaS platforms, and operational software for restaurants, HR teams, schools, and cloud-first startups. Same studio, same standards, from a marketing site to a 10-screen ERP." })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20", "aria-label": "Values", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "What we stand for", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Principles that ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "ship" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-12 grid max-w-5xl gap-5 px-4 md:grid-cols-3", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { glow: i === 0 ? "blue" : i === 1 ? "purple" : "cyan", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.text })
      ] }) }, v.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-12", "aria-label": "Tech we love", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Tech we love", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Built on a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "modern stack" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-8 max-w-7xl px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMarquee, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTAStrip, {})
  ] });
}
export {
  AboutPage as component
};
