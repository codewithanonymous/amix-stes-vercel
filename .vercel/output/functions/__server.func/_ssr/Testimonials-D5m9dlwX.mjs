import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as BlurReveal } from "./GradientMesh-FQe_XZYy.mjs";
import { S as SectionHeading } from "./SectionHeading-D6KnOJMa.mjs";
import { l as Quote } from "../_libs/lucide-react.mjs";
const reviews = [
  { quote: "AMIX rebuilt our ordering flow and revenue jumped 32% in two months.", name: "Aarav Mehta", role: "Owner, Spice Route" },
  { quote: "Our HR team finally has one dashboard instead of five spreadsheets.", name: "Neha Sharma", role: "Head of People, Verdant Co" },
  { quote: "The school portal cut our admin time in half.", name: "Mr. Rao", role: "Principal, Sunrise Academy" },
  { quote: "Top-tier engineering. Felt like an in-house product team.", name: "James L.", role: "Founder, CloudOps" },
  { quote: "Ship velocity is unreal. Weekly releases, zero drama.", name: "Priya K.", role: "CTO, FinLite" }
];
function Testimonials() {
  const row = [...reviews, ...reviews];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24", "aria-label": "Testimonials", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Loved by teams",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "What our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic gradient-text-static", children: "clients say" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max gap-5 animate-marquee", style: { animationDuration: "55s" }, children: row.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "w-[320px] md:w-[380px] rounded-3xl bg-white border border-foreground/8 p-7 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-5 text-primary/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-3 text-foreground/90 leading-relaxed", children: [
        '"',
        r.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-9 rounded-full bg-gradient-to-br from-primary to-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: r.role })
        ] })
      ] })
    ] }, i)) }) })
  ] });
}
export {
  Testimonials as T
};
