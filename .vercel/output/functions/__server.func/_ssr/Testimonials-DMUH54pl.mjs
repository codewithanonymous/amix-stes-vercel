import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as BlurReveal } from "./GradientMesh-BpH_Juy_.mjs";
import { S as SectionHeading } from "./SectionHeading-CBX412u8.mjs";
import { c as cn } from "./router-DUQXQX5F.mjs";
import { D as Drawer$1 } from "../_libs/vaul.mjs";
import { b as Dialog$1, c as DialogPortal$1, d as DialogContent$1, f as DialogClose, D as DialogTitle$1, a as DialogDescription$1, e as DialogOverlay$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { l as Quote, m as Check, E as ExternalLink, n as Info, o as ChevronLeft, p as ChevronRight, S as Sparkles, X } from "../_libs/lucide-react.mjs";
import { b as useInView, m as motion } from "../_libs/framer-motion.mjs";
const ecommerceProjects = [
  {
    slug: "cutiebox",
    name: "CutieBox",
    category: "Personalized Gifts",
    tagline: "Personalized Magazine & Gift Hamper Store",
    description: "A beautifully crafted e-commerce platform for personalized magazines and gift hampers. Features custom product builder, real-time preview, and seamless checkout experience.",
    demoUrl: "https://cutiebox.vercel.app/",
    previewImage: "/cutiebox-WEbpreview-img.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    features: [
      "Custom Product Builder",
      "Real-time Preview",
      "Gift Wrapping Options",
      "Order Tracking",
      "Wishlist & Favorites",
      "Mobile-First Design"
    ],
    achievements: [
      "95+ Lighthouse performance score",
      "Sub-2s page load time",
      "40% higher conversion vs previous site",
      "Seamless mobile checkout flow"
    ],
    accent: "purple"
  },
  {
    slug: "maison",
    name: "Maison",
    category: "Luxury Fashion",
    tagline: "Luxury Fashion E-Commerce Store",
    description: "An elevated luxury fashion e-commerce experience with editorial-grade product presentation, size guides, and a premium checkout flow designed for high-end buyers.",
    demoUrl: "https://maison-rose-six.vercel.app/",
    previewImage: "/maison-rose-web.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    features: [
      "Editorial Product Pages",
      "Advanced Filtering",
      "Size & Fit Guides",
      "Wishlist System",
      "Express Checkout",
      "Lookbook Gallery"
    ],
    achievements: [
      "Editorial-grade visual design",
      "60% lower cart abandonment",
      "Multi-currency support",
      "Premium unboxing experience integration"
    ],
    accent: "blue"
  },
  {
    slug: "shrikha-organics",
    name: "Shrikha Organics",
    category: "Organic Products",
    tagline: "Organic Products E-Commerce Store",
    description: "A clean, nature-inspired e-commerce platform for organic and natural products. Features ingredient transparency, subscription boxes, and eco-friendly packaging options.",
    demoUrl: "https://shrikha-organics.netlify.app/",
    previewImage: "/shrikha-organics-webPReview.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Ingredient Transparency",
      "Subscription Boxes",
      "Eco-Packaging Options",
      "Product Reviews",
      "Auto-Reorder",
      "Loyalty Rewards"
    ],
    achievements: [
      "100% eco-friendly digital experience",
      "35% repeat purchase rate",
      "Integrated sustainability scoring",
      "Fast mobile-native checkout"
    ],
    accent: "cyan"
  }
];
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer$1.Root, { shouldScaleBackground, ...props });
Drawer.displayName = "Drawer";
const DrawerPortal = Drawer$1.Portal;
const DrawerOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Drawer$1.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
const DrawerContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Drawer$1.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("grid gap-1.5 p-4 text-center sm:text-left", className), ...props });
DrawerHeader.displayName = "DrawerHeader";
const DrawerTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Drawer$1.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DrawerTitle.displayName = Drawer$1.Title.displayName;
const DrawerDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Drawer$1.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = Drawer$1.Description.displayName;
const Dialog = Dialog$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogContent$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogDescription$1.displayName;
function BrowserFrame({
  project,
  className
}) {
  const [loaded, setLoaded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "relative rounded-xl overflow-hidden border border-foreground/8 shadow-soft bg-white group/frame",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2.5 bg-gradient-to-b from-gray-50 to-gray-100/80 border-b border-foreground/6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2.5 rounded-full bg-red-400/80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2.5 rounded-full bg-yellow-400/80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2.5 rounded-full bg-green-400/80" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 mx-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md bg-white/90 border border-foreground/6 px-3 py-1 text-[11px] text-muted-foreground font-mono truncate", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "size-3 text-green-600 shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                clipRule: "evenodd"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: project.demoUrl.replace("https://", "") })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-gray-50", children: [
          !loaded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: project.previewImage,
              alt: `${project.name} — ${project.tagline}`,
              loading: "lazy",
              decoding: "async",
              onLoad: () => setLoaded(true),
              className: cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                loaded ? "opacity-100" : "opacity-0",
                "group-hover/frame:scale-[1.03]"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/frame:opacity-100 transition-opacity duration-500" })
        ] })
      ]
    }
  );
}
function ProjectDetailDialog({
  project,
  open,
  onClose
}) {
  if (!project) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserFrame, { project, className: "rounded-none rounded-t-2xl border-0" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-primary", children: project.category }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-2xl", children: project.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-base text-muted-foreground leading-relaxed", children: project.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Technology Stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
            children: t
          },
          t
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Key Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: project.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Achievements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2", children: project.achievements.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-accent shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a })
        ] }, a)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: project.demoUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4" }),
            " View Live Demo"
          ]
        }
      ) })
    ] })
  ] }) });
}
function ProjectDetailDrawer({
  project,
  open,
  onClose
}) {
  if (!project) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerContent, { className: "max-h-[85vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto px-4 pb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DrawerHeader, { className: "px-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-primary", children: project.category }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerTitle, { className: "font-display text-xl text-left", children: project.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerDescription, { className: "text-sm text-left text-muted-foreground leading-relaxed", children: project.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Tech Stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: project.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground",
            children: t
          },
          t
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: project.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground mb-2", children: "Achievements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-1.5", children: project.achievements.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 text-accent shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a })
        ] }, a)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: project.demoUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3.5 text-sm font-semibold text-white shadow-lg active:scale-[0.98] transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4" }),
            " View Live Demo"
          ]
        }
      )
    ] })
  ] }) }) });
}
function DesktopProjectCard({
  project,
  index,
  onViewDetails
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reversed = index % 2 === 1;
  const glowClass = project.accent === "blue" ? "hover:shadow-[0_40px_80px_-30px_rgba(99,102,241,0.3)]" : project.accent === "purple" ? "hover:shadow-[0_40px_80px_-30px_rgba(139,92,246,0.3)]" : "hover:shadow-[0_40px_80px_-30px_rgba(6,182,212,0.3)]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 60 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 },
      className: cn(
        "group grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center rounded-[2rem] p-6 lg:p-10 bg-white/60 backdrop-blur-xl border border-foreground/6 shadow-soft transition-all duration-500 hover:-translate-y-1",
        glowClass,
        reversed && "lg:grid-cols-[1fr_1.2fr]"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative", reversed && "lg:order-2"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl",
                project.accent === "blue" && "bg-primary/10",
                project.accent === "purple" && "bg-accent/10",
                project.accent === "cyan" && "bg-cyan-glow/10"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserFrame, { project, className: "relative" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("space-y-5", reversed && "lg:order-1"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase text-primary", children: project.category }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl lg:text-4xl text-foreground leading-tight", children: project.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: project.tagline })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "rounded-full bg-secondary/80 backdrop-blur px-3 py-1 text-xs font-medium text-secondary-foreground border border-foreground/5",
              children: t
            },
            t
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: project.features.slice(0, 3).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
          ] }, f)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: project.demoUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4" }),
                  "View Live Demo"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: onViewDetails,
                className: "inline-flex items-center gap-2 rounded-xl bg-white border border-foreground/10 px-6 py-3 text-sm font-semibold text-foreground shadow-soft hover:border-primary/30 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-4" }),
                  "View Project Details"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function MobileCard({
  project,
  onViewDetails
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full shrink-0 snap-center px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/80 backdrop-blur-xl border border-foreground/8 shadow-soft overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserFrame, { project, className: "rounded-none border-x-0 border-t-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-primary", children: project.category }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: project.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground line-clamp-2", children: project.tagline })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: project.demoUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-md active:scale-[0.97] transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5" }),
              "Live Demo"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onViewDetails,
            className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-white border border-foreground/10 px-4 py-3 text-sm font-semibold text-foreground shadow-soft active:scale-[0.97] transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-3.5" }),
              "Details"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function MobileCarousel({
  onViewDetails
}) {
  const scrollRef = reactExports.useRef(null);
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  const scrollToIndex = (i) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[i];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.min(index, ecommerceProjects.length - 1));
  };
  const goTo = (dir) => {
    const newIndex = dir === "prev" ? Math.max(0, activeIndex - 1) : Math.min(ecommerceProjects.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scrollRef,
        onScroll: handleScroll,
        className: "flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 px-4",
        style: { scrollPaddingInline: "1rem" },
        children: ecommerceProjects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(MobileCard, { project: p, onViewDetails: () => onViewDetails(p) }, p.slug))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => goTo("prev"),
          disabled: activeIndex === 0,
          "aria-label": "Previous project",
          className: "size-9 rounded-full bg-white border border-foreground/10 shadow-soft flex items-center justify-center disabled:opacity-30 active:scale-90 transition-all",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ecommerceProjects.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setActiveIndex(i);
            scrollToIndex(i);
          },
          "aria-label": `Go to project ${i + 1}`,
          className: cn(
            "h-2 rounded-full transition-all duration-300",
            i === activeIndex ? "w-6 bg-gradient-to-r from-primary to-accent" : "w-2 bg-foreground/15"
          )
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => goTo("next"),
          disabled: activeIndex === ecommerceProjects.length - 1,
          "aria-label": "Next project",
          className: "size-9 rounded-full bg-white border border-foreground/10 shadow-soft flex items-center justify-center disabled:opacity-30 active:scale-90 transition-all",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" })
        }
      )
    ] })
  ] });
}
function FeaturedEcommerce() {
  const [selectedProject, setSelectedProject] = reactExports.useState(null);
  const [detailOpen, setDetailOpen] = reactExports.useState(false);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const openDetails = (project) => {
    setSelectedProject(project);
    setDetailOpen(true);
  };
  const closeDetails = () => {
    setDetailOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "featured-ecommerce",
      className: "relative py-20 md:py-32 overflow-hidden scroll-mt-24",
      "aria-label": "Featured E-Commerce Projects",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-iris-soft opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 via-accent/5 to-cyan-glow/5 blur-3xl opacity-60 pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              eyebrow: "Featured Stores",
              title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "E-Commerce ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic gradient-text-static", children: "Projects" })
              ] }),
              subtitle: "Live stores we've designed and built — click through to experience them yourself."
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex flex-col gap-10 lg:gap-14 mx-auto mt-14 max-w-7xl px-4", children: ecommerceProjects.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            DesktopProjectCard,
            {
              project,
              index: i,
              onViewDetails: () => openDetails(project)
            },
            project.slug
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileCarousel, { onViewDetails: openDetails }) })
        ] }),
        isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectDetailDrawer, { project: selectedProject, open: detailOpen, onClose: closeDetails }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectDetailDialog, { project: selectedProject, open: detailOpen, onClose: closeDetails })
      ]
    }
  );
}
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
  FeaturedEcommerce as F,
  Testimonials as T
};
