import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GradientMesh, B as BlurReveal } from "./GradientMesh-BpH_Juy_.mjs";
import { S as Stats } from "./Stats-CixQo6H5.mjs";
import { S as SectionHeading } from "./SectionHeading-CBX412u8.mjs";
import { a as projects } from "./router-DUQXQX5F.mjs";
import { F as FeaturedEcommerce, T as Testimonials } from "./Testimonials-DMUH54pl.mjs";
import { C as CTAStrip } from "./CTAStrip-D4N2s49J.mjs";
import "../_libs/vaul.mjs";
import { u as useScroll, d as useTransform, m as motion, A as AnimatePresence, e as useReducedMotion, c as useMotionValue, a as useSpring } from "../_libs/framer-motion.mjs";
import { S as Sparkles, r as CalendarCheck, A as ArrowRight, C as CodeXml, e as Layers, Q as QrCode, U as Users, f as GraduationCap, g as Cloud, q as ChevronDown, a as ArrowUpRight, s as ArrowDown } from "../_libs/lucide-react.mjs";
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
function ParticleField({ density = 40, className = "" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const isMobile = window.innerWidth < 768;
    const count = Math.round(density * (isMobile ? 0.35 : 1));
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    const palette = [
      "99,102,241",
      // indigo
      "139,92,246",
      // purple
      "6,182,212",
      // cyan
      "20,184,166"
      // teal
    ];
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      color: palette[Math.floor(Math.random() * palette.length)],
      a: Math.random() * 0.35 + 0.15
    }));
    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color}, ${p.a})`;
        ctx.shadowColor = `rgba(${p.color}, 0.6)`;
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref,
      "aria-hidden": true,
      className: `pointer-events-none absolute inset-0 h-full w-full ${className}`
    }
  );
}
function FloatingMock({
  className,
  delay,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 40, rotateX: -8 },
      animate: { opacity: 1, y: 0, rotateX: 0 },
      transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
      className: `absolute rounded-2xl bg-white/85 backdrop-blur-xl border border-foreground/8 p-4 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)] animate-float ${className ?? ""}`,
      style: { animationDelay: `${delay ?? 0}s`, transformStyle: "preserve-3d" },
      children
    }
  );
}
function scrollToProjects() {
  const el = document.getElementById("projects");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      className: "relative min-h-[100svh] overflow-hidden pt-28 md:pt-36 pb-24 bg-white",
      "aria-label": "Hero",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GradientMesh, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleField, { density: 40 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_72%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { opacity }, className: "relative mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { y: y1 }, className: "flex flex-col gap-6 max-w-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.span,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7 },
                className: "inline-flex w-fit items-center gap-2 rounded-full bg-white border border-foreground/8 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground/70 shadow-soft",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 text-primary" }),
                  "Modern Software Studio"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 20, filter: "blur(20px)" },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                transition: { duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                className: "font-display text-[clamp(2.5rem,6.4vw,5.25rem)] leading-[0.98] tracking-[-0.02em] text-foreground",
                children: [
                  "Building ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic gradient-text-static italic font-display", children: "Modern Digital Products" }),
                  " That Scale"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.9, delay: 0.25 },
                className: "text-sm md:text-base font-medium text-foreground/65",
                children: "Web Application Developer · SaaS Product Developer · UI/UX Designer"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.9, delay: 0.35 },
                className: "text-base md:text-lg text-muted-foreground leading-relaxed",
                children: "We create high-performance websites, SaaS platforms, business software, and digital experiences that help companies grow faster."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.9, delay: 0.45 },
                className: "flex flex-wrap items-center gap-3 pt-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      className: "group inline-flex items-center gap-1.5 rounded-full bg-cyber px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(99,102,241,0.65)] hover:shadow-[0_18px_44px_-10px_rgba(139,92,246,0.75)] transition-all hover:-translate-y-0.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "size-4" }),
                        "Book Free Consultation",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: scrollToProjects,
                      className: "inline-flex items-center gap-1.5 rounded-full bg-white border border-foreground/10 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all hover:-translate-y-0.5 shadow-soft",
                      children: "View Recent Projects"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.9, delay: 0.6 },
                className: "mt-4 flex items-center gap-5 text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-7 rounded-full border-2 border-white bg-gradient-to-br from-primary/40 to-accent/40" }, i)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-semibold", children: "50+ teams" }),
                    " shipped with us"
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              style: { y: y2 },
              className: "relative h-[440px] md:h-[520px] hidden lg:block",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FloatingMock, { delay: 0.2, className: "top-4 left-2 w-[68%]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tracking-[0.18em] uppercase text-primary", children: "Analytics" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-foreground/40", children: "Last 30d" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-end gap-1 h-24", children: [40, 65, 55, 80, 60, 90, 75, 95, 70, 88].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-sm bg-cyber", style: { height: `${v}%`, opacity: 0.55 + i * 0.04 } }, i)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-3 gap-2 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/50 text-[10px] uppercase tracking-wider", children: "MRR" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "$48k" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/50 text-[10px] uppercase tracking-wider", children: "Users" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "12.4k" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/50 text-[10px] uppercase tracking-wider", children: "Churn" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: "1.2%" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FloatingMock, { delay: 0.55, className: "top-36 right-0 w-[58%]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tracking-[0.18em] uppercase text-accent", children: "Kitchen Orders" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2.5 space-y-1.5 text-xs", children: ["#A21 · Table 4 · 3 items", "#A22 · Table 7 · 1 item", "#A23 · Takeaway · 5 items"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-lg bg-foreground/[0.03] px-2.5 py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/85 font-medium", children: t }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-cyan-glow animate-pulse" })
                  ] }, t)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(FloatingMock, { delay: 0.85, className: "bottom-2 left-10 w-[52%]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tracking-[0.18em] uppercase text-cyan-glow", children: "Attendance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative size-16", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-cyber opacity-90" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-1 rounded-full bg-white flex items-center justify-center text-sm font-bold text-foreground", children: "94%" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-primary" }),
                        " Present 188"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-accent" }),
                        " Leave 8"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-cyan-glow" }),
                        " Late 4"
                      ] })
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
const services = [
  { icon: CodeXml, title: "Web Development", desc: "Business sites, dashboards, e-commerce, full-stack apps built for scale and speed.", color: "from-indigo-500 to-blue-500" },
  { icon: Layers, title: "SaaS Products", desc: "Subscription platforms, CRMs, multi-tenant systems with billing and analytics.", color: "from-violet-500 to-fuchsia-500" },
  { icon: QrCode, title: "QR Ordering", desc: "QR menus, table ordering, kitchen dashboards and billing for restaurants.", color: "from-cyan-500 to-teal-500" },
  { icon: Users, title: "HRM Software", desc: "Employees, attendance, payroll and leave — one unified people platform.", color: "from-indigo-500 to-sky-500" },
  { icon: GraduationCap, title: "School ERP", desc: "Student portal, fees, parent app, staff and exams — one campus OS.", color: "from-purple-500 to-pink-500" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS deployment, VPS hosting, scaling, CI/CD and infra monitoring.", color: "from-teal-500 to-cyan-500" }
];
function Services() {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative py-20 md:py-28", "aria-label": "Services", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "What We Do",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Software built to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic gradient-text-static", children: "move your business" }),
          " forward"
        ] }),
        subtitle: "Six focused practices. One integrated team."
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-10 md:mt-14 grid max-w-7xl gap-3 md:gap-4 px-4 grid-cols-2 lg:grid-cols-3", children: services.map((s, i) => {
      const Icon = s.icon;
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          layout: true,
          onClick: () => setOpen(isOpen ? null : i),
          "aria-expanded": isOpen,
          className: `group relative w-full text-left rounded-2xl bg-white/80 backdrop-blur-xl border border-foreground/8 p-4 md:p-5 shadow-soft hover:shadow-[0_20px_44px_-22px_rgba(99,102,241,0.4)] hover:border-primary/25 transition-all duration-400 overflow-hidden ${isOpen ? "ring-1 ring-primary/30" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: "position", className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex size-10 md:size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-[0_10px_24px_-10px_rgba(99,102,241,0.55)]`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sans text-sm md:text-base font-semibold text-foreground leading-tight", children: s.title }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-4 shrink-0 text-foreground/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[13px] text-muted-foreground leading-relaxed", children: s.desc })
              },
              "body"
            ) })
          ]
        }
      ) }, s.title);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all", children: [
      "Explore all services ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
    ] }) })
  ] });
}
const tech = [
  { name: "Firebase", slug: "firebase", color: "#F58220" },
  { name: "AWS", slug: "amazonaws", color: "#FF9900" },
  { name: "SQL", slug: "postgresql", color: "#4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Supabase", slug: "supabase", color: "#3ECF8E" },
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "WordPress", slug: "wordpress", color: "#21759B" }
];
const orbits = tech.map((t, i) => {
  const ring = i % 2;
  const perRing = 4;
  const idxInRing = Math.floor(i / 2);
  const angle = idxInRing / perRing * Math.PI * 2 + (ring ? Math.PI / perRing : 0);
  const duration = 38 + ring * 14 + i % 3 * 4;
  const direction = ring === 0 ? 1 : -1;
  return { ...t, ring, angle, duration, direction, floatDelay: i * 0.4 % 2 };
});
function TechStack() {
  const sectionRef = reactExports.useRef(null);
  const [size, setSize] = reactExports.useState({ inner: 110, outer: 175 });
  const [active, setActive] = reactExports.useState(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const py = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const parallaxX = useTransform(px, (v) => v * 18);
  const parallaxY = useTransform(py, (v) => v * 18);
  reactExports.useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 480) setSize({ inner: 95, outer: 150 });
      else if (w < 768) setSize({ inner: 115, outer: 180 });
      else if (w < 1024) setSize({ inner: 150, outer: 230 });
      else setSize({ inner: 180, outer: 280 });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  reactExports.useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduce) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      mx.set(Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width / 2))));
      my.set(Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height / 2))));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: sectionRef, className: "relative overflow-hidden py-20 md:py-28", "aria-label": "Technology ecosystem", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl",
          style: { background: "radial-gradient(closest-side, rgba(99,102,241,0.22), transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-[15%] top-[20%] size-[280px] rounded-full opacity-50 blur-3xl",
          style: { background: "radial-gradient(closest-side, rgba(56,189,248,0.22), transparent 70%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute right-[12%] bottom-[18%] size-[300px] rounded-full opacity-50 blur-3xl",
          style: { background: "radial-gradient(closest-side, rgba(217,70,239,0.22), transparent 70%)" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0", children: Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        className: "absolute size-1 rounded-full bg-primary/40",
        style: {
          left: `${i * 53 % 100}%`,
          top: `${i * 37 % 100}%`
        },
        animate: reduce ? void 0 : { y: [0, -14, 0], opacity: [0.25, 0.7, 0.25] },
        transition: { duration: 5 + i % 4, repeat: Infinity, ease: "easeInOut", delay: i % 5 * 0.4 }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-foreground/8 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-foreground/70 uppercase shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-cyber shadow-[0_0_10px_rgba(99,102,241,0.6)]" }),
        "Tech We Love"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] text-foreground", children: [
        "Technology ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic gradient-text-static", children: "Ecosystem" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-muted-foreground", children: "Production-grade tools we trust to ship fast and scale cleanly." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.92 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: "-15% 0px" },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        className: "relative mx-auto mt-10 md:mt-14",
        style: {
          width: "100%",
          maxWidth: 720,
          height: (size.outer + 80) * 2,
          maxHeight: "min(80vh, 720px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "absolute inset-0", style: { x: parallaxX, y: parallaxY }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid place-items-center size-28 md:size-36 rounded-full bg-white/85 backdrop-blur-xl border border-white/70 shadow-[0_30px_70px_-25px_rgba(99,102,241,0.45)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "aria-hidden": true,
                className: "absolute inset-0 rounded-full",
                style: { background: "radial-gradient(closest-side, rgba(99,102,241,0.25), transparent 70%)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[15px] md:text-lg text-foreground leading-tight", children: "AMIX" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-foreground/55 mt-0.5", children: "Stack" })
            ] })
          ] }) }),
          [size.inner, size.outer].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute left-1/2 top-1/2 rounded-full border border-dashed border-foreground/10",
              style: { width: r * 2, height: r * 2, transform: "translate(-50%, -50%)" }
            },
            i
          )),
          orbits.map((o) => {
            const radius = o.ring === 0 ? size.inner : size.outer;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute left-1/2 top-1/2",
                style: { width: 0, height: 0 },
                initial: { rotate: o.angle * 180 / Math.PI },
                animate: reduce ? { rotate: o.angle * 180 / Math.PI } : { rotate: [o.angle * 180 / Math.PI, o.angle * 180 / Math.PI + 360 * o.direction] },
                transition: reduce ? void 0 : { duration: o.duration, repeat: Infinity, ease: "linear" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: `translate(${radius}px, 0)` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: reduce ? void 0 : { rotate: [0, -360 * o.direction], y: [0, -6, 0, 6, 0] },
                    transition: reduce ? void 0 : {
                      rotate: { duration: o.duration, repeat: Infinity, ease: "linear" },
                      y: { duration: 4 + o.floatDelay, repeat: Infinity, ease: "easeInOut", delay: o.floatDelay }
                    },
                    style: { x: "-50%", y: "-50%" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TechChip,
                      {
                        tech: o,
                        active: active === o.name,
                        onActivate: (v) => setActive(v ? o.name : (cur) => cur === o.name ? null : cur)
                      }
                    )
                  }
                ) })
              },
              o.name
            );
          })
        ] })
      }
    )
  ] });
}
function TechChip({
  tech: tech2,
  active,
  onActivate
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      "aria-label": tech2.name,
      onHoverStart: () => onActivate(true),
      onHoverEnd: () => onActivate(false),
      onTapStart: () => onActivate(true),
      onTap: () => onActivate(false),
      whileTap: { scale: 1.08 },
      animate: { scale: active ? 1.12 : 1 },
      transition: { type: "spring", stiffness: 240, damping: 18 },
      className: "group relative inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/70 pl-2 pr-3.5 py-1.5 md:pl-2.5 md:pr-4 md:py-2 shadow-[0_14px_30px_-14px_rgba(15,23,42,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      style: { ["--brand"]: tech2.color },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none",
            style: { boxShadow: `0 18px 44px -16px ${tech2.color}66, inset 0 0 0 1px ${tech2.color}33` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-6 md:size-7 rounded-full bg-white shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `https://cdn.simpleicons.org/${tech2.slug}/${tech2.color.replace("#", "")}`,
            alt: "",
            width: 18,
            height: 18,
            loading: "lazy",
            decoding: "async",
            className: "size-3.5 md:size-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] md:text-[12px] font-semibold text-foreground/80 whitespace-nowrap", children: tech2.name })
      ]
    }
  );
}
function ParallaxShowcase() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative overflow-hidden py-32 md:py-44 bg-surface", "aria-label": "Our approach", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 dot-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { y: y2 }, "aria-hidden": true, className: "absolute -top-10 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { y: y1 }, "aria-hidden": true, className: "absolute bottom-10 right-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { scale }, className: "relative mx-auto max-w-5xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-foreground", children: [
        "We don't just build websites.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic gradient-text-static", children: "We build digital ecosystems." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground", children: "End-to-end product engineering — from first wireframe to cloud deployment, monitoring, and scale." })
    ] })
  ] });
}
function ProjectsGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "relative py-20 md:py-28 scroll-mt-24", "aria-label": "Recent projects", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-iris-soft opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Recent Projects",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Products & platforms ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic gradient-text-static", children: "we've shipped" })
          ] }),
          subtitle: "A quick look at the systems we build for modern businesses."
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-10 md:mt-14 grid max-w-7xl gap-4 px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/projects/$slug",
          params: { slug: p.slug },
          className: "group flex h-full flex-col rounded-2xl bg-white/85 backdrop-blur-xl border border-foreground/8 shadow-soft hover:shadow-[0_24px_50px_-22px_rgba(99,102,241,0.4)] hover:border-primary/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-400 overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[5/3] overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: p.image,
                  alt: `${p.name} — ${p.category}`,
                  loading: "lazy",
                  decoding: "async",
                  className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 rounded-full bg-white/90 backdrop-blur px-2 py-0.5 text-[9px] font-semibold tracking-[0.14em] uppercase text-foreground/80 shadow-soft", children: p.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-3 md:p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[15px] md:text-base text-foreground leading-tight line-clamp-2", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all", children: [
                "View Details ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3.5" })
              ] })
            ] })
          ]
        }
      ) }, p.slug)) })
    ] })
  ] });
}
function FloatingProjectsCTA() {
  const [visible, setVisible] = reactExports.useState(false);
  const [inProjects, setInProjects] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    const target = document.getElementById("projects");
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => setInProjects(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);
  const onClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const show = visible && !inProjects;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      onClick,
      "aria-label": "View recent projects",
      initial: { opacity: 0, y: 24, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 24, scale: 0.9 },
      transition: { type: "spring", stiffness: 240, damping: 22 },
      className: "fixed z-40 bottom-5 right-5 md:bottom-7 md:right-7 group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute inset-0 rounded-full animate-pulse-ring" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex items-center gap-2 rounded-full bg-cyber px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_44px_-12px_rgba(99,102,241,0.65)] hover:shadow-[0_22px_50px_-10px_rgba(139,92,246,0.75)] transition-all hover:-translate-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "View Recent Projects" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Projects" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "size-4 transition-transform group-hover:translate-y-0.5" })
        ] })
      ]
    }
  ) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedEcommerce, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TechStack, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParallaxShowcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTAStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingProjectsCTA, {})
  ] });
}
export {
  Index as component
};
