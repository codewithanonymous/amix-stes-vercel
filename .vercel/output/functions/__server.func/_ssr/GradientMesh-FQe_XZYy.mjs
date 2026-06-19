import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as cn } from "./router-DnDmU8V7.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as useInView, m as motion, a as useSpring, c as useMotionValue } from "../_libs/framer-motion.mjs";
function BlurReveal({
  children,
  className,
  delay = 0,
  y = 24
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, filter: "blur(16px)", y },
      animate: inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {},
      transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
      className: cn(className),
      children
    }
  );
}
const variants = {
  primary: "bg-cyber text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_14px_36px_-8px_rgba(139,92,246,0.7)]",
  glass: "bg-white border border-foreground/8 text-foreground hover:border-primary/30 hover:text-primary shadow-soft",
  ghost: "text-foreground/75 hover:text-foreground hover:bg-foreground/5"
};
function useMagnetic() {
  const ref = reactExports.useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const [enabled, setEnabled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);
  const onMove = (e) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.2);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { ref, x, y, onMove, onLeave };
}
function MagneticButton(props) {
  const { variant = "primary", className, children } = props;
  const m = useMagnetic();
  const base = "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 will-change-transform hover:-translate-y-0.5";
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      ref: m.ref,
      style: { x: m.x, y: m.y },
      onMouseMove: m.onMove,
      onMouseLeave: m.onLeave,
      className: cn(base, variants[variant], className),
      children
    }
  );
  if ("to" in props && props.to) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: props.to, children: inner });
  }
  if ("href" in props && props.href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: props.href, target: props.target, rel: props.rel, children: inner });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: props.type ?? "button", onClick: props.onClick, children: inner });
}
function GradientMesh({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-hidden": true,
      className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1/3 -left-1/4 h-[55vmax] w-[55vmax] rounded-full bg-primary/25 blur-[120px] animate-glow-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -bottom-1/3 -right-1/4 h-[55vmax] w-[55vmax] rounded-full bg-accent/22 blur-[120px] animate-glow-pulse",
            style: { animationDelay: "1.5s" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/2 left-1/2 h-[40vmax] w-[40vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow/20 blur-[140px] animate-glow-pulse",
            style: { animationDelay: "3s" }
          }
        )
      ]
    }
  );
}
export {
  BlurReveal as B,
  GradientMesh as G,
  MagneticButton as M
};
