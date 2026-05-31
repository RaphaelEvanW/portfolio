const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RaphaelEvanW",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raphael-e-wijayanto/",
  },
  {
    label: "Email",
    href: "mailto:raphael.wijayanto@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-[1440px] border-t border-white/[0.08] px-6 py-8 sm:px-10 lg:px-14 xl:px-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Raphael Evan Wijayanto
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <span className="hidden h-4 w-px bg-white/[0.12] md:block" />

          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}