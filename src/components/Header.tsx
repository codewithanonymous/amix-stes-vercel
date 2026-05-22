"use client";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong gradient-border" : "glass gradient-border"
          )}
        >
          <Link to="/" className="group inline-flex items-center gap-2">
            <span className="relative inline-flex size-7 items-center justify-center rounded-md bg-cyber glow-blue">
              <span className="text-[11px] font-black text-primary-foreground">A</span>
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              AMIX <span className="gradient-text">SITES</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-white/5 transition-colors"
                activeProps={{
                  className:
                    "rounded-full px-4 py-1.5 text-sm font-semibold text-foreground bg-white/5",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton to="/contact" variant="primary" className="px-5 py-2">
              Get Started
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex size-9 items-center justify-center rounded-full glass"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(12px)" }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-4 mt-2 glass-strong gradient-border rounded-2xl p-3"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {site.nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/85 hover:bg-white/5"
                  activeProps={{ className: "rounded-xl px-4 py-3 text-sm font-semibold text-foreground bg-white/5" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 px-2">
                <MagneticButton to="/contact" variant="primary" className="w-full justify-center">
                  Get Started
                </MagneticButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
