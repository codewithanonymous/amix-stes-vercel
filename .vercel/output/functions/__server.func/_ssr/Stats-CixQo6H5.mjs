import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { B as BlurReveal } from "./GradientMesh-BpH_Juy_.mjs";
import { b as useInView } from "../_libs/framer-motion.mjs";
function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.6
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min((t - start) / (duration * 1e3), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "SaaS Products" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 24, suffix: "/7", label: "Support" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20", "aria-label": "By the numbers", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-foreground/8 p-6 md:p-8 text-center shadow-soft hover:shadow-[0_24px_60px_-24px_rgba(99,102,241,0.30)] hover:-translate-y-1 transition-all duration-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl md:text-5xl gradient-text-static", children: s.value % 1 === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: s.value, suffix: s.suffix }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "99.9",
      s.suffix.replace("%", ""),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "%" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[11px] md:text-xs text-muted-foreground tracking-[0.18em] uppercase font-semibold", children: s.label })
  ] }) }, s.label)) }) }) });
}
export {
  Stats as S
};
