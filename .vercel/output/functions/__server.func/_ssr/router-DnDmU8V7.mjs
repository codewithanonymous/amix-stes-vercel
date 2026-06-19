import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { u as useScroll, a as useSpring, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, X, M as Menu, F as Facebook, I as Instagram, L as Linkedin, T as Twitter, Y as Youtube, a as ArrowUpRight, b as MapPin, c as Mail, P as Phone, d as MessageCircle, G as Github } from "../_libs/lucide-react.mjs";
import { o as object, s as string, l as literal } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BeTd-EFu.css";
const site = {
  name: "AMIX SITES",
  legalName: "AMIX SITES Technologies Pvt. Ltd.",
  tagline: "Building Smart Digital Experiences",
  description: "AMIX SITES builds intelligent software for modern businesses — web, SaaS, restaurant QR ordering, HRM, school ERP, and cloud services.",
  email: "amixsites@gmail.com",
  location: "Telangana, India",
  whatsapp: "https://wa.me/919246891902",
  socials: {
    facebook: "https://facebook.com/amixsites",
    instagram: "https://instagram.com/amix.sites",
    linkedin: "https://linkedin.com/company/amixsites",
    twitter: "https://twitter.com/amixsites",
    youtube: "https://youtube.com/@amixsites"
  },
  nav: [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
  ]
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex items-center justify-between rounded-full pl-5 pr-2 py-2 transition-all duration-500",
              scrolled ? "glass-strong border border-foreground/5 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]" : "bg-white/55 border border-foreground/5 backdrop-blur-xl"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group inline-flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex size-8 items-center justify-center rounded-xl bg-cyber text-white shadow-[0_6px_16px_-6px_rgba(99,102,241,0.55)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold italic", children: "A" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sans text-[15px] font-semibold tracking-tight text-foreground", children: [
                  "AMIX ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-static", children: "SITES" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-0.5", "aria-label": "Main", children: site.nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: item.to,
                  activeOptions: { exact: item.to === "/" },
                  className: "rounded-full px-3.5 py-1.5 text-[13px] font-medium text-foreground/65 hover:text-foreground hover:bg-foreground/5 transition-colors",
                  activeProps: {
                    className: "rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-foreground bg-foreground/[0.06]"
                  },
                  children: item.label
                },
                item.to
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/contact",
                  className: "group inline-flex items-center gap-1.5 rounded-full bg-cyber px-4 py-2 text-[13px] font-semibold text-white shadow-[0_8px_24px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_10px_30px_-8px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-0.5",
                  children: [
                    "Book Free Consultation",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-0.5" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Toggle menu",
                  "aria-expanded": open,
                  onClick: () => setOpen((s) => !s),
                  className: "md:hidden inline-flex size-9 items-center justify-center rounded-full bg-foreground/5 text-foreground",
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-4" })
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.25 },
            className: "md:hidden fixed inset-0 top-0 z-40 bg-white/95 backdrop-blur-xl",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full pt-24 px-6 pb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-1", "aria-label": "Mobile", children: site.nav.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -16 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.05 + i * 0.05, duration: 0.4 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: item.to,
                      onClick: () => setOpen(false),
                      className: "flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-display text-foreground/85 hover:bg-foreground/5 border-b border-foreground/5",
                      activeProps: { className: "flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-display gradient-text-static border-b border-foreground/5" },
                      activeOptions: { exact: item.to === "/" },
                      children: [
                        item.label,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 text-foreground/40" })
                      ]
                    }
                  )
                },
                item.to
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-8 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/contact",
                    onClick: () => setOpen(false),
                    className: "flex items-center justify-center gap-1.5 w-full rounded-full bg-cyber px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(99,102,241,0.6)]",
                    children: [
                      "Book Free Consultation",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: site.email })
              ] })
            ] })
          }
        ) })
      ]
    }
  );
}
const cols = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Contact Us", to: "/contact" },
      { label: "Press Release", to: "/about" }
    ]
  },
  {
    title: "Products",
    links: [
      { label: "Restaurant Ordering", to: "/products" },
      { label: "HR Management", to: "/products" },
      { label: "School ERP", to: "/products" },
      { label: "Cloud Services", to: "/services" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", to: "/" },
      { label: "Documentation", to: "/" },
      { label: "Case Studies", to: "/portfolio" }
    ]
  },
  {
    title: "Policies",
    links: [
      { label: "Terms of Use", to: "/" },
      { label: "Privacy Policy", to: "/" },
      { label: "Terms & Conditions", to: "/" }
    ]
  }
];
function DesktopFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-24 bg-surface border-t border-foreground/5 hidden md:block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 -top-px h-px bg-cyber opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-9 items-center justify-center rounded-xl bg-cyber text-white shadow-[0_6px_16px_-6px_rgba(99,102,241,0.55)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base italic", children: "A" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sans text-lg font-semibold", children: [
              "AMIX ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-static", children: "SITES" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed", children: [
            site.tagline,
            ". Modern software studio building products that businesses actually use."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-center gap-2", children: [
            { Icon: Facebook, href: site.socials.facebook, label: "Facebook" },
            { Icon: Instagram, href: site.socials.instagram, label: "Instagram" },
            { Icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
            { Icon: Twitter, href: site.socials.twitter, label: "Twitter" },
            { Icon: Youtube, href: site.socials.youtube, label: "YouTube" }
          ].map(({ Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              "aria-label": label,
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex size-9 items-center justify-center rounded-full bg-white border border-foreground/8 text-foreground/70 hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" })
            },
            label
          )) })
        ] }),
        cols.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sans text-xs font-semibold tracking-[0.18em] uppercase text-foreground/55", children: col.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5 text-sm", children: col.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: l.to, className: "group inline-flex items-center gap-1 text-foreground/75 hover:text-primary transition-colors", children: [
            l.label,
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3 opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all" })
          ] }) }, l.label)) })
        ] }, col.title))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-3 rounded-2xl bg-white border border-foreground/8 px-5 py-4 md:grid-cols-2 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold", children: "Regd. Office —" }),
            " ",
            site.location
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `mailto:${site.email}`,
            className: "inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary md:justify-end",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 text-primary" }),
              site.email
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-center text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        site.legalName,
        ". All rights reserved."
      ] })
    ] })
  ] });
}
const quickActions = [
  {
    icon: Phone,
    label: "Call",
    href: "tel:+919246891902",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${site.email}`,
    gradient: "from-sky-400 to-blue-500"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: site.whatsapp,
    gradient: "from-lime-400 to-green-500"
  }
];
const socials = [
  { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: site.socials.instagram, label: "Instagram" },
  { icon: Github, href: "https://github.com/amixsites", label: "GitHub" }
];
const miniNav = [
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" }
];
function MobileFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.footer,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.5, ease: "easeOut" },
      className: "relative md:hidden overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-lg px-5 pt-8 pb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-8 items-center justify-center rounded-lg bg-cyber text-white shadow-[0_4px_12px_-4px_rgba(99,102,241,0.5)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm italic", children: "A" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sans text-base font-semibold tracking-tight", children: [
                "Amix ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-static", children: "Sites" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] text-muted-foreground leading-relaxed max-w-[260px] mx-auto", children: "Building modern websites, SaaS products, and business software." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-center justify-center gap-3", children: quickActions.map(({ icon: Icon, label, href, gradient }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.a,
            {
              href,
              target: href.startsWith("http") ? "_blank" : void 0,
              rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
              "aria-label": label,
              whileTap: { scale: 0.92 },
              className: "group relative inline-flex flex-col items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-primary/20 backdrop-blur-sm`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-[18px]", strokeWidth: 2 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-foreground/70", children: label })
              ]
            },
            label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-center justify-center gap-2.5", children: socials.map(({ icon: Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.a,
            {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": label,
              whileTap: { scale: 0.9 },
              className: "inline-flex size-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-md border border-foreground/10 text-foreground/60 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_16px_-4px_rgba(99,102,241,0.35)] transition-all duration-200",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" })
            },
            label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar", children: miniNav.map(({ label, to }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to,
              className: "shrink-0 inline-flex items-center rounded-full bg-white/60 backdrop-blur-sm border border-foreground/8 px-3.5 py-1.5 text-[12px] font-medium text-foreground/75 hover:text-primary hover:border-primary/25 hover:bg-white/90 transition-all duration-200",
              children: label
            },
            label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-foreground/5 text-center space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "© 2026 Amix Sites" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground/70", children: "Built with React, TypeScript & Coffee" })
          ] })
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileFooter, {})
  ] });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { scaleX: x, transformOrigin: "0 0" },
      className: "fixed top-0 left-0 right-0 z-[60] h-[2px] bg-cyber",
      "aria-hidden": true
    }
  );
}
function SmoothScroll() {
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    let raf = 0;
    const tick = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: "/",
  description: site.description,
  email: site.email,
  address: { "@type": "PostalAddress", addressRegion: "Telangana", addressCountry: "IN" },
  sameAs: Object.values(site.socials)
};
const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: "/"
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex min-h-screen items-center justify-center px-4 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong max-w-md rounded-3xl p-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl gradient-text-static", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-sans text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-flex items-center justify-center rounded-full bg-cyber px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(99,102,241,0.6)]",
        children: "Go home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex min-h-screen items-center justify-center px-4 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong max-w-md rounded-3xl p-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-sans text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full bg-cyber px-5 py-2.5 text-sm font-semibold text-white",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "glass rounded-full px-5 py-2.5 text-sm font-semibold", children: "Go home" })
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#ffffff" },
      { title: "AMIX SITES — Modern studio for Web, SaaS & Cloud Software" },
      { name: "description", content: site.description },
      { name: "author", content: site.name },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "AMIX SITES — Modern studio for Web, SaaS & Cloud Software" },
      { name: "twitter:title", content: "AMIX SITES — Modern studio for Web, SaaS & Cloud Software" },
      { property: "og:description", content: "AMIX SITES builds modern digital products that scale — web, SaaS, HRM, school ERP, and cloud." },
      { name: "twitter:description", content: "AMIX SITES builds modern digital products that scale — web, SaaS, HRM, school ERP, and cloud." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/mJGFwV6BcRTxsmbmqohjh4OJadE2/social-images/social-1779468098635-.AmixSitesDesktop.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/mJGFwV6BcRTxsmbmqohjh4OJadE2/social-images/social-1779468098635-.AmixSitesDesktop.webp" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://images.unsplash.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://cdn.simpleicons.org", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@400;500;600;700&display=swap"
      }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ORG_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_JSONLD) }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#main", className: "sr-only focus:not-sr-only fixed left-3 top-3 z-[100] glass-strong px-3 py-2 rounded-md text-sm", children: "Skip to content" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { id: "main", className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./services-CjwCYTHm.mjs");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Web, SaaS, HRM, School ERP & Cloud | AMIX SITES"
    }, {
      name: "description",
      content: "Six focused practices: web development, SaaS products, restaurant QR ordering, HRM, school management, and cloud services."
    }, {
      property: "og:title",
      content: "Services — AMIX SITES"
    }, {
      property: "og:description",
      content: "Web, SaaS, HRM, School ERP and Cloud — one integrated team."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const products = [
  {
    id: "restaurant-qr",
    title: "Restaurant QR Ordering",
    tagline: "Scan. Order. Serve.",
    features: ["QR Menu", "Table Ordering", "Live Kitchen Status", "Billing", "Waiter App", "Reports"],
    embedUrl: "https://demo.example.com/restaurant-qr",
    thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1280&q=70",
    accent: "blue"
  },
  {
    id: "hrm",
    title: "HR Management Dashboard",
    tagline: "Your people, one panel.",
    features: ["Employee Directory", "Attendance", "Payroll", "Leave Workflow", "Performance", "Analytics"],
    embedUrl: "https://demo.example.com/hrm",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1280&q=70",
    accent: "purple"
  },
  {
    id: "school",
    title: "School Management ERP",
    tagline: "From classroom to admin office.",
    features: ["Student Portal", "Attendance", "Fees & Receipts", "Parent App", "Timetable", "Exams"],
    embedUrl: "https://demo.example.com/school-erp",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1280&q=70",
    accent: "cyan"
  }
];
const $$splitComponentImporter$5 = () => import("./products-DN_T1Zsy.mjs");
const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.title,
      description: p.tagline,
      url: p.embedUrl
    }
  }))
};
const Route$5 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Live Products — Restaurant QR, HRM, School ERP | AMIX SITES"
    }, {
      name: "description",
      content: "Try our flagship platforms live: Restaurant QR Ordering, HR Management dashboard, and School Management ERP."
    }, {
      property: "og:title",
      content: "Live Products — AMIX SITES"
    }, {
      property: "og:description",
      content: "Three flagship SaaS platforms you can try live, right now."
    }, {
      property: "og:url",
      content: "/products"
    }],
    links: [{
      rel: "canonical",
      href: "/products"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(productSchema)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./portfolio-CoOmDIvw.mjs");
const Route$4 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Portfolio — Selected Work | AMIX SITES"
    }, {
      name: "description",
      content: "Products and platforms we've shipped — restaurants, HR, education, cloud, and SaaS."
    }, {
      property: "og:title",
      content: "Portfolio — AMIX SITES"
    }, {
      property: "og:description",
      content: "Selected work across SaaS, restaurants, HR, education and cloud."
    }, {
      property: "og:url",
      content: "/portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "/portfolio"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const faqs = [{
  q: "How long does a typical project take?",
  a: "Marketing sites in 2–4 weeks; SaaS MVPs in 6–10 weeks; ERPs in 3–4 months."
}, {
  q: "Do you work with international clients?",
  a: "Yes — we work async across time zones with overlap windows."
}, {
  q: "Can you customize one of your live products?",
  a: "Absolutely. Our Restaurant, HRM, and School platforms are designed to be branded and extended."
}, {
  q: "What does support after launch look like?",
  a: "Monthly retainers for monitoring, fixes, and feature work — or hand off cleanly to your team."
}];
const $$splitComponentImporter$3 = () => import("./contact-DzGP4xGG.mjs");
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a
    }
  }))
};
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Let's Build Something | AMIX SITES"
    }, {
      name: "description",
      content: "Tell us about your project — we'll get back within one business day. Email amixsites@gmail.com or WhatsApp us."
    }, {
      property: "og:title",
      content: "Contact AMIX SITES"
    }, {
      property: "og:description",
      content: "Let's build something. Reach the AMIX SITES team."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(faqSchema)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
object({
  name: string().min(2, "Please add your name").max(80),
  company: string().max(120).optional().or(literal("")),
  email: string().email("Enter a valid email"),
  projectType: string().min(1, "Pick a project type"),
  budget: string().min(1, "Pick a budget"),
  message: string().min(10, "A bit more detail, please").max(2e3)
});
const $$splitComponentImporter$2 = () => import("./about-BKGUzjKk.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Modern Software Studio | AMIX SITES"
    }, {
      name: "description",
      content: "AMIX SITES is a modern software studio building products businesses actually use."
    }, {
      property: "og:title",
      content: "About — AMIX SITES"
    }, {
      property: "og:description",
      content: "Modern software studio for web, SaaS, HRM, ERP and cloud."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-CighxFJh.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "AMIX SITES — Building Modern Digital Products That Scale"
    }, {
      name: "description",
      content: "Premium software studio building web apps, SaaS platforms, business software, and digital experiences that help companies grow faster."
    }, {
      property: "og:title",
      content: "AMIX SITES — Building Modern Digital Products That Scale"
    }, {
      property: "og:description",
      content: "Web, SaaS, HRM, school ERP, and cloud — built by a modern software studio."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const projects = [
  {
    slug: "e-commerce-website",
    name: "E-Commerce Website",
    tagline: "Premium online stores that convert visitors into customers.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1600&q=70",
    accent: "blue",
    tech: ["Next.js", "Stripe", "TypeScript", "Tailwind", "PostgreSQL"],
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Checkout System",
      "Payment Integration",
      "Order Management",
      "Customer Accounts",
      "Admin Dashboard",
      "Analytics"
    ],
    benefits: [
      "Mobile-optimized checkout that lifts conversion",
      "Built-in SEO + sitemap + JSON-LD product schema",
      "Plug-and-play payments (Stripe, Razorpay, PayPal)",
      "Scales from 10 to 10,000+ SKUs"
    ],
    demoUrl: "https://maison-rose-six.vercel.app/"
  },
  {
    slug: "restaurant-pos",
    name: "Restaurant POS Software",
    tagline: "QR-first ordering, kitchen display, billing — one operating system for your restaurant.",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=70",
    accent: "purple",
    tech: ["React", "Node.js", "Supabase", "WebSockets", "Tailwind"],
    features: [
      "QR Menu & Table Ordering",
      "Kitchen Display System",
      "Billing & Invoicing",
      "Waiter App",
      "Inventory Tracking",
      "Customer Loyalty",
      "Daily Reports",
      "Multi-outlet Support"
    ],
    benefits: [
      "Cuts order time by ~40% with QR self-ordering",
      "Real-time kitchen sync — no paper tickets",
      "Owner dashboard works from anywhere",
      "Reduces billing errors to near-zero"
    ],
    demoUrl: "https://dineinflowd.vercel.app/login"
  },
  {
    slug: "school-management",
    name: "School Management Software",
    tagline: "From classroom to admin office — one ERP for your entire campus.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=70",
    accent: "cyan",
    tech: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
    features: [
      "Student Management",
      "Attendance Tracking",
      "Exam Management",
      "Timetable",
      "Parent Portal",
      "Fee Management",
      "Teacher Dashboard",
      "Reports"
    ],
    benefits: [
      "Halves admin workload across departments",
      "Parents stay informed via app + SMS",
      "Centralized records — exportable any time",
      "Works across multiple branches"
    ],
    demoUrl: "https://schooldemo-amixsites.vercel.app/"
  },
  {
    slug: "hrm-software",
    name: "HRM Software",
    tagline: "Your people, your processes, your dashboards — all in one panel.",
    category: "HR Tech",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=70",
    accent: "blue",
    tech: ["Next.js", "Postgres", "Prisma", "Tailwind", "AWS"],
    features: [
      "Employee Records",
      "Attendance System",
      "Leave Management",
      "Payroll",
      "Recruitment",
      "Performance Tracking",
      "Department Management",
      "Reports"
    ],
    benefits: [
      "Replaces 5+ spreadsheets with one source of truth",
      "Automated payroll & payslip generation",
      "Self-serve leave + attendance for staff",
      "Role-based access for managers and HR"
    ],
    showcase: {
      title: "Enterprise HR Solution",
      highlights: ["Employee Management", "Attendance Tracking", "Leave Management", "Payroll Processing"],
      ctaLabel: "Explore Features",
      sections: [
        {
          title: "Product Screens",
          description: "A unified workspace for HR teams, managers, and employees.",
          items: ["Employee directory with smart filters", "Manager approval inbox", "Self-serve employee portal", "Payroll run dashboard"]
        },
        {
          title: "Core Modules",
          description: "Everything an HR team needs, modular and role-aware.",
          items: ["Attendance with geo + biometric sync", "Leave workflows with policies", "Payroll, payslips & tax reports", "Performance reviews & OKRs"]
        },
        {
          title: "Workflow",
          description: "How a leave request flows end-to-end.",
          items: ["Employee submits request", "Manager approves in inbox", "HR auto-syncs to payroll", "Notifications to all stakeholders"]
        }
      ]
    }
  },
  {
    slug: "fee-management",
    name: "Fee Management Software",
    tagline: "Online fee collection, reminders, receipts — built for schools and tuition centres.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=70",
    accent: "purple",
    tech: ["React", "Node.js", "Supabase", "Razorpay", "Tailwind"],
    features: [
      "Fee Collection",
      "Online Payments",
      "Due Reminders",
      "Receipt Generation",
      "Student Accounts",
      "Reports",
      "Payment History",
      "Dashboard"
    ],
    benefits: [
      "Collect fees online via UPI, cards, net banking",
      "Automatic due reminders via SMS + email",
      "PDF receipts generated instantly",
      "Cuts manual collection effort by 70%"
    ],
    showcase: {
      title: "Fee Management Suite",
      highlights: ["Fee Collection", "Online Payments", "Due Tracking", "Automated Receipts"],
      ctaLabel: "See Module Overview",
      sections: [
        {
          title: "Collection & Payments",
          description: "Accept fees the way parents prefer to pay.",
          items: ["UPI, cards, net banking, wallets", "Partial payments & installments", "Auto-reconciliation with ledger", "Concessions & scholarships"]
        },
        {
          title: "Due Tracking",
          description: "Never chase a payment manually again.",
          items: ["Automated SMS + email reminders", "Class / batch level dashboards", "Parent payment history", "Aging reports for finance"]
        },
        {
          title: "Receipts & Reports",
          description: "Compliance-ready paperwork, generated instantly.",
          items: ["Branded PDF receipts", "GST & tax-ready exports", "Daily collection reports", "Audit logs for every transaction"]
        }
      ]
    }
  },
  {
    slug: "saas-product-development",
    name: "SaaS Product Development",
    tagline: "From MVP to scaled platform — multi-tenant SaaS built the right way.",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70",
    accent: "cyan",
    tech: ["Next.js", "TypeScript", "Postgres", "Stripe", "AWS"],
    features: [
      "Multi-Tenant Architecture",
      "Subscription Billing",
      "User Management",
      "Analytics",
      "API Integration",
      "Cloud Hosting",
      "Security Management",
      "Admin Controls"
    ],
    benefits: [
      "Production-grade architecture from day one",
      "Stripe-powered subscriptions + dunning",
      "RBAC + audit logs out of the box",
      "Built to scale across tenants and regions"
    ],
    showcase: {
      title: "SaaS Platform Blueprint",
      highlights: ["Multi-Tenant Architecture", "Subscription Billing", "Role-Based Access", "Analytics Dashboard"],
      ctaLabel: "View Capabilities",
      sections: [
        {
          title: "SaaS Architecture",
          description: "Production-grade foundations from day one.",
          items: ["Isolated multi-tenant data model", "Edge-deployed APIs", "Background jobs & queues", "Observability + audit logs"]
        },
        {
          title: "Product Screens",
          description: "Polished UI for every persona in your platform.",
          items: ["Marketing site + pricing", "Onboarding & workspace setup", "Admin & billing console", "Customer-facing analytics"]
        },
        {
          title: "Development Process",
          description: "How we ship from idea to scaled platform.",
          items: ["Discovery & technical design", "MVP in 4–6 weeks", "Beta with real customers", "Scale, security & compliance"]
        },
        {
          title: "Technology Stack",
          description: "Modern, type-safe, and edge-ready.",
          items: ["Next.js / TanStack Start + TypeScript", "Postgres + Prisma + Row-Level Security", "Stripe billing & metering", "AWS / Cloudflare deployment"]
        }
      ]
    }
  }
];
const getProject = (slug) => projects.find((p) => p.slug === slug);
const $$splitComponentImporter = () => import("./projects._slug-Be20OfyT.mjs");
const $$splitNotFoundComponentImporter = () => import("./projects._slug-KO8-0wZ1.mjs");
const Route = createFileRoute("/projects/$slug")({
  loader: ({
    params
  }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return {
      project
    };
  },
  head: ({
    loaderData,
    params
  }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — AMIX SITES` : "Project — AMIX SITES";
    const desc = p?.tagline ?? "Detailed case study of an AMIX SITES project.";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/projects/${params.slug}`
      }, ...p?.image ? [{
        property: "og:image",
        content: p.image
      }, {
        name: "twitter:image",
        content: p.image
      }] : []],
      links: [{
        rel: "canonical",
        href: `/projects/${params.slug}`
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const ProductsRoute = Route$5.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$7
});
const PortfolioRoute = Route$4.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const ProjectsSlugRoute = Route.update({
  id: "/projects/$slug",
  path: "/projects/$slug",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  ProductsRoute,
  ServicesRoute,
  ProjectsSlugRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  projects as a,
  cn as c,
  faqs as f,
  products as p,
  router as r,
  site as s
};
