import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06090F] text-foreground">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_72%_18%,rgba(59,130,246,0.055),transparent_30%),radial-gradient(circle_at_18%_8%,rgba(96,165,250,0.025),transparent_26%),linear-gradient(180deg,#06090F_0%,#0A0F1C_48%,#06090F_100%)]" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.42)_100%)]" />

      <div className="relative z-10">
        <Navbar />

        <section
          id="about"
          className="relative mx-auto grid min-h-screen max-w-[1760px] items-center gap-24 px-12 pt-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* LEFT */}
          <div className="relative max-w-3xl pt-4 lg:-translate-x-20">
            <p className="text-3xl text-[var(--muted)] md:text-5xl">
              Hi, I’m
            </p>

            <h1 className="mt-3 text-6xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
              Raphael Evan
              <br />
              Wijayanto
              <span className="text-[var(--blue)]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              An Informatics fresh graduate focused on backend development,
              workflow automation, reporting pipelines, and AI.
              I build practical projects from internship work, academic projects,
              and fullstack experiments.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--blue)] px-6 text-sm font-medium text-white transition hover:bg-[var(--blue-hover)]"
              >
                View My Projects
              </a>

              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]/40 px-6 text-sm font-medium text-white transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/10"
              >
                Download CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-sm text-[var(--muted)]">
              <span>Let’s connect</span>

              <a href="#" className="transition hover:text-white">
                GitHub
              </a>
              <a href="#" className="transition hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-white">
                Email
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden h-[720px] translate-x-20 items-end justify-center lg:flex">
            <div className="absolute bottom-16 h-[560px] w-[560px] rounded-full bg-[var(--blue)]/10 blur-3xl" />

            <div className="absolute bottom-16 h-[580px] w-[430px] rotate-[-12deg] rounded-[50%] border border-[rgba(59,130,246,0.12)]" />
            <div className="absolute bottom-24 h-[520px] w-[380px] rotate-[18deg] rounded-[50%] border border-[rgba(59,130,246,0.08)]" />

            <div className="absolute right-24 top-28 grid grid-cols-4 gap-5 opacity-70">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]"
                />
              ))}
            </div>

            <div className="absolute right-32 top-[52%] h-5 w-5 rounded-full bg-[var(--blue)] shadow-[0_0_24px_rgba(29,78,216,0.7)]" />

            <div className="relative -translate-y-15 h-[800px] w-[690px]">
              <Image
                src="/profile_pict.png"
                alt="Raphael Evan Wijayanto"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}