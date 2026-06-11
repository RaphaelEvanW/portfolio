export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-[1440px] border-t border-[var(--border-soft)] px-6 py-8 sm:px-10 lg:px-14 xl:px-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--heading)]">
            Raphael Evan Wijayanto
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Portfolio 2026
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[var(--muted)] md:items-end">
          <p>
            Built with{" "}
            <span className="font-medium text-[var(--heading)]">Next.js</span>,{" "}
            <span className="font-medium text-[var(--heading)]">TypeScript</span>, and{" "}
            <span className="font-medium text-[var(--heading)]">Tailwind CSS</span>.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="#about"
              className="transition hover:text-[var(--blue)]"
            >
              Back to top
            </a>

            <span className="hidden h-4 w-px bg-[var(--border-soft)] md:block" />

            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}