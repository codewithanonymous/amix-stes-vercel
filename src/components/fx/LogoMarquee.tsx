const techs = [
  "React", "Next.js", "Tailwind", "TypeScript", "Node.js", "Express",
  "MongoDB", "MySQL", "AWS", "Firebase", "Docker", "GitHub Actions",
];

export function LogoMarquee() {
  const row = [...techs, ...techs];
  return (
    <div
      className="relative overflow-hidden py-8 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
      aria-label="Technology stack"
    >
      <div className="flex w-max animate-marquee gap-6">
        {row.map((t, i) => (
          <div
            key={i}
            className="glass gradient-border rounded-full px-6 py-3 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors whitespace-nowrap"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
