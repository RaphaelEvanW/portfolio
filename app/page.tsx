import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06090F] text-foreground">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_72%_18%,rgba(59,130,246,0.055),transparent_30%),radial-gradient(circle_at_18%_8%,rgba(96,165,250,0.025),transparent_26%),linear-gradient(180deg,#06090F_0%,#0A0F1C_48%,#06090F_100%)]" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.42)_100%)]" />

      <div className="relative z-10">
        <Navbar />

        <section className="relative mx-auto flex min-h-screen max-w-[1536px] items-center px-8 pt-16">
          <div className="relative max-w-4xl">
            <p className="mb-6 text-sm tracking-[0.28em] text-[var(--muted)]">
              PORTFOLIO / 2026
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
              Raphael Evan Wijayanto
              <span className="text-[var(--blue)]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              An Informatics fresh graduate focused on backend development,
              workflow automation, reporting pipelines, and AI-based research.
              I build practical projects from internship work, academic
              projects, and fullstack experiments.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--blue)] bg-[var(--blue)] px-6 text-sm font-medium text-white transition hover:bg-[var(--blue-hover)]"
              >
                View Selected Work
              </a>

              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--blue)] bg-[var(--blue)]/10 px-6 text-sm font-medium text-white transition hover:bg-[var(--blue)]/20 hover:shadow-[0_0_24px_rgba(29,78,216,0.22)]"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}