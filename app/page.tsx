import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/Project";

const cvDownloadUrl = "https://docs.google.com/document/d/1sE3iVw4tDQXasHTtrjlYV9iAkNZH3syEk4LLC9J9JSs/export?format=pdf";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RaphaelEvanW",
    icon: "/logos/icon/github_dark_theme.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raphael-e-wijayanto/",
    icon: "/logos/icon/linkedin_dark_theme.svg",
  },
  {
    label: "Email",
    href: "mailto:raphael.wijayanto@gmail.com",
    icon: "/logos/icon/email_dark_theme.svg",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06090F] text-foreground">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_72%_18%,rgba(29,78,216,0.045),transparent_30%),radial-gradient(circle_at_18%_8%,rgba(96,165,250,0.018),transparent_26%),linear-gradient(180deg,#05070D_0%,#070B14_48%,#05070D_100%)]" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.58)_100%)]" />
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
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--blue)] px-7 text-sm font-medium text-white transition hover:bg-[var(--blue-hover)]"
              >
                <span>Check My Projects</span>
                <Image
                  src="/logos/icon/right_arrow.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
              </a>

              <a
                href={cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)]/40 px-6 text-sm font-medium text-white transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/10"
              >
                <span>Download CV</span>
                <Image
                  src="/logos/icon/download.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm font-medium text-[var(--muted)]">
            <span>Let’s connect</span>

            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/10"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 opacity-80 transition group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden h-[720px] translate-x-20 items-end justify-center lg:flex">
            <div className="absolute bottom-16 h-[560px] w-[560px] rounded-full bg-[var(--blue)]/10 blur-3xl" />

            <div className="absolute bottom-16 h-[580px] w-[430px] rotate-[-12deg] rounded-[50%] border border-white/[0.055]" />
            <div className="absolute bottom-24 h-[520px] w-[380px] rotate-[18deg] rounded-[50%] border border-white/[0.04]" />

            <div className="absolute right-24 top-28 grid grid-cols-4 gap-5 opacity-85">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]"
                />
              ))}
            </div>

            <div className="absolute right-32 top-[52%] h-5 w-5 rounded-full bg-[var(--blue)] shadow-[0_0_24px_rgba(29,78,216,0.7)]" />
            <div className="absolute bottom-8 h-24 w-[460px] rounded-full bg-[black]/45 blur-2xl" />
            <div className="relative -translate-y-16 h-[760px] w-[600px]">
            <Image
              src="/profile_pict.png"
              alt="Raphael Evan Wijayanto"
              fill
              priority
              className="object-contain object-bottom"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070D] via-[#05070D]/15 to-transparent" />
          </div>
          </div>
        </section>
        <ProjectSection/>
      </div>
    </main>
  );
}