import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/about" },
      { label: "Contact Us", to: "/contact" },
      { label: "Press Release", to: "/about" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Restaurant Ordering", to: "/products" },
      { label: "HR Management", to: "/products" },
      { label: "School ERP", to: "/products" },
      { label: "Cloud Services", to: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", to: "/" },
      { label: "Documentation", to: "/" },
      { label: "Case Studies", to: "/portfolio" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Terms of Use", to: "/" },
      { label: "Privacy Policy", to: "/" },
      { label: "Terms & Conditions", to: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-cyber opacity-80"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-md bg-cyber glow-blue">
                <span className="text-xs font-black text-primary-foreground">A</span>
              </span>
              <span className="font-display text-lg font-bold">
                AMIX <span className="gradient-text">SITES</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {site.tagline}. Modern software studio building products that businesses actually use.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a aria-label="Facebook" href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex size-9 items-center justify-center rounded-full glass hover:glow-blue transition-shadow">
                <Facebook className="size-4" />
              </a>
              <a aria-label="Instagram" href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex size-9 items-center justify-center rounded-full glass hover:glow-purple transition-shadow">
                <Instagram className="size-4" />
              </a>
              <a aria-label="LinkedIn" href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex size-9 items-center justify-center rounded-full glass hover:glow-blue transition-shadow">
                <Linkedin className="size-4" />
              </a>
              <a aria-label="Twitter" href={site.socials.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex size-9 items-center justify-center rounded-full glass hover:glow-cyan transition-shadow">
                <Twitter className="size-4" />
              </a>
              <a aria-label="YouTube" href={site.socials.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex size-9 items-center justify-center rounded-full glass hover:glow-purple transition-shadow">
                <Youtube className="size-4" />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-foreground/90">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-3 rounded-2xl glass gradient-border px-5 py-4 md:grid-cols-2">
          <div className="flex items-center gap-2 text-sm text-foreground/85">
            <MapPin className="size-4 text-cyan-glow" />
            <span><strong className="font-semibold">Regd. Office —</strong> {site.location}</span>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-foreground/85 hover:text-foreground md:justify-end"
          >
            <Mail className="size-4 text-cyan-glow" />
            {site.email}
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
