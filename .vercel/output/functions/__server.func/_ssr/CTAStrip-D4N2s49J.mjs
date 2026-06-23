import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as BlurReveal, M as MagneticButton } from "./GradientMesh-BpH_Juy_.mjs";
import { s as site } from "./router-DUQXQX5F.mjs";
import { j as CalendarClock, d as MessageCircle } from "../_libs/lucide-react.mjs";
function CTAStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", "aria-label": "Contact us", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] bg-white border border-foreground/8 p-10 md:p-16 text-center shadow-[0_40px_100px_-40px_rgba(99,102,241,0.35)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-iris-soft opacity-100" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -top-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -bottom-24 -left-24 size-72 rounded-full bg-accent/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] text-foreground", children: [
        "Have a product in mind? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic gradient-text-static", children: "Let's build it." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Tell us about your project — we'll get back within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { to: "/contact", variant: "primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "mr-1.5 size-4" }),
          " Book Free Consultation"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { href: site.whatsapp, variant: "glass", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-1.5 size-4" }),
          " WhatsApp Chat"
        ] })
      ] })
    ] })
  ] }) }) }) });
}
export {
  CTAStrip as C
};
