import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as GradientMesh, B as BlurReveal } from "./GradientMesh-BpH_Juy_.mjs";
import { G as GlassCard } from "./GlassCard-Ql8TqxDJ.mjs";
import { S as SectionHeading } from "./SectionHeading-CBX412u8.mjs";
import { C as CTAStrip } from "./CTAStrip-D4N2s49J.mjs";
import { C as CodeXml, e as Layers, Q as QrCode, U as Users, f as GraduationCap, g as Cloud, h as Compass, i as Pencil, H as Hammer, R as Rocket } from "../_libs/lucide-react.mjs";
import "./router-DUQXQX5F.mjs";
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
const detail = [{
  icon: CodeXml,
  title: "Web Development",
  glow: "blue",
  bullets: ["Marketing sites & landing pages", "Admin dashboards", "E-commerce", "Full-stack apps", "Performance & SEO"]
}, {
  icon: Layers,
  title: "SaaS Product Development",
  glow: "purple",
  bullets: ["Multi-tenant architecture", "Subscription billing", "Role-based access", "Realtime & analytics", "Customer onboarding flows"]
}, {
  icon: QrCode,
  title: "Restaurant QR Ordering",
  glow: "cyan",
  bullets: ["QR menu generator", "Table-wise ordering", "Live kitchen display", "Billing & invoices", "Daily reports"]
}, {
  icon: Users,
  title: "HRM Software",
  glow: "blue",
  bullets: ["Employee directory", "Attendance (biometric/manual)", "Payroll & payslips", "Leave workflow", "Performance reviews"]
}, {
  icon: GraduationCap,
  title: "School Management ERP",
  glow: "purple",
  bullets: ["Student profiles", "Attendance", "Fee collection & receipts", "Parent app", "Timetable, staff & exams"]
}, {
  icon: Cloud,
  title: "Cloud Services",
  glow: "cyan",
  bullets: ["AWS / GCP deployment", "VPS hosting", "Database scaling", "CI/CD pipelines", "Monitoring & alerts"]
}];
const process = [{
  icon: Compass,
  title: "Discover",
  text: "Workshops, scope, success metrics."
}, {
  icon: Pencil,
  title: "Design",
  text: "Flows, wireframes, brand-grade UI."
}, {
  icon: Hammer,
  title: "Build",
  text: "Weekly demos, incremental releases."
}, {
  icon: Rocket,
  title: "Launch & Scale",
  text: "Deploy, monitor, iterate."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-36 pb-20", "aria-label": "Services hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientMesh, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BlurReveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]", children: [
          "Software built to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "move your business" }),
          " forward"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: "Six focused practices. One integrated team." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pb-24", "aria-label": "Service detail", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 grid gap-5 md:grid-cols-2", children: detail.map((s, i) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { glow: s.glow, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-12 items-center justify-center rounded-xl bg-cyber/20 border border-white/10 glow-blue", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1.5 text-sm text-muted-foreground", children: s.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
          ] }, b)) })
        ] })
      ] }) }) }, s.title);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24", "aria-label": "Our process", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Process", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "From idea to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "launch" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-12 max-w-6xl px-4 grid gap-5 md:grid-cols-4", children: process.map((p, i) => {
        const Icon = p.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass gradient-border rounded-2xl p-6 h-full hover:glow-blue transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-10 items-center justify-center rounded-lg bg-cyber/20 border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs font-semibold tracking-widest text-cyan-glow uppercase", children: [
            "Step ",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-lg font-semibold", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.text })
        ] }) }, p.title);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTAStrip, {})
  ] });
}
export {
  ServicesPage as component
};
