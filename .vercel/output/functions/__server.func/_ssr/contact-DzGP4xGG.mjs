import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as site, f as faqs } from "./router-DnDmU8V7.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { G as GradientMesh, B as BlurReveal, M as MagneticButton } from "./GradientMesh-FQe_XZYy.mjs";
import { c as Mail, b as MapPin, d as MessageCircle, j as CalendarClock, m as ChevronDown } from "../_libs/lucide-react.mjs";
import { o as object, s as string, l as literal } from "../_libs/zod.mjs";
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
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const Schema = object({
  name: string().min(2, "Please add your name").max(80),
  company: string().max(120).optional().or(literal("")),
  email: string().email("Enter a valid email"),
  projectType: string().min(1, "Pick a project type"),
  budget: string().min(1, "Pick a budget"),
  message: string().min(10, "A bit more detail, please").max(2e3)
});
function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: u(Schema)
  });
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("contact form submission:", data);
    toast.success("Message received — we'll be in touch within one business day.");
    reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden pt-36 pb-16", "aria-label": "Contact hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientMesh, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BlurReveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05]", children: [
          "Let's build ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "something." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: "Tell us about your project — we'll get back within one business day." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pb-24", "aria-label": "Contact form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 grid gap-6 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass gradient-border rounded-3xl p-7 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold", children: "Reach us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-9 items-center justify-center rounded-lg bg-cyber/20 border border-white/10 glow-blue", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs uppercase tracking-wider", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${site.email}`, className: "font-medium hover:text-cyan-glow", children: site.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-9 items-center justify-center rounded-lg bg-cyber/20 border border-white/10 glow-purple", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs uppercase tracking-wider", children: "Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: site.location })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { href: site.whatsapp, target: "_blank", rel: "noopener noreferrer", variant: "glass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-1.5 size-4" }),
            " WhatsApp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { href: `mailto:${site.email}`, variant: "primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "mr-1.5 size-4" }),
            " Schedule Demo"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlurReveal, { className: "lg:col-span-3", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "glass gradient-border rounded-3xl p-7 space-y-4 glow-blue", noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", error: errors.name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("name"), className: inputCls, placeholder: "Your name" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("company"), className: inputCls, placeholder: "Optional" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", ...register("email"), className: inputCls, placeholder: "you@company.com" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Project Type", error: errors.projectType?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { ...register("projectType"), options: ["Web", "SaaS", "Restaurant QR", "HRM", "School ERP", "Cloud", "Other"] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Budget", error: errors.budget?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { ...register("budget"), options: ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", error: errors.message?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ...register("message"), rows: 5, className: inputCls, placeholder: "What are you building?" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { type: "submit", variant: "primary", children: isSubmitting ? "Sending…" : "Send Message" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pb-24", "aria-label": "FAQ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-center", children: [
        "Frequently ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "asked" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "glass gradient-border rounded-2xl p-5 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer list-none items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4 transition-transform group-open:rotate-180" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: f.a })
      ] }, i)) })
    ] }) })
  ] });
}
const inputCls = "w-full rounded-xl bg-white border border-foreground/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 px-4 py-3 text-sm placeholder:text-muted-foreground/70 transition-all shadow-soft";
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold tracking-wider uppercase text-foreground/80", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-destructive", children: error })
  ] });
}
const Select = ({
  options,
  ...rest
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...rest, className: inputCls + " appearance-none", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select…" }),
  options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o }, o))
] });
export {
  ContactPage as component
};
