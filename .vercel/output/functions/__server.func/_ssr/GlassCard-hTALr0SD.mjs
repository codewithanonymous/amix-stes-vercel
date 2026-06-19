import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-DnDmU8V7.mjs";
import { c as useMotionValue, a as useSpring, d as useTransform, m as motion } from "../_libs/framer-motion.mjs";
function GlassCard({
  className,
  glow = "blue",
  tilt = true,
  children,
  ...rest
}) {
  const ref = reactExports.useRef(null);
  const [pointerFine, setPointerFine] = reactExports.useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  reactExports.useEffect(() => {
    setPointerFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);
  const onMove = (e) => {
    if (!tilt || !pointerFine) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };
  const hoverGlow = glow === "blue" ? "hover:shadow-[0_30px_70px_-30px_rgba(99,102,241,0.45)]" : glow === "purple" ? "hover:shadow-[0_30px_70px_-30px_rgba(139,92,246,0.45)]" : glow === "cyan" ? "hover:shadow-[0_30px_70px_-30px_rgba(6,182,212,0.45)]" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: tilt && pointerFine ? { rotateX: rx, rotateY: ry, transformPerspective: 1200 } : void 0,
      className: cn(
        "relative rounded-3xl bg-white/80 backdrop-blur-xl border border-foreground/8 p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/20",
        hoverGlow,
        className
      ),
      ...rest,
      children
    }
  );
}
export {
  GlassCard as G
};
