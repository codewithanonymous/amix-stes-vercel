import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-DnDmU8V7.mjs";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col gap-4 max-w-3xl px-4",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      ),
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white border border-foreground/8 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-foreground/70 uppercase shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-cyber shadow-[0_0_10px_rgba(99,102,241,0.6)]" }),
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] text-foreground", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-muted-foreground max-w-2xl", children: subtitle })
      ]
    }
  );
}
export {
  SectionHeading as S
};
