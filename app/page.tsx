import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/Project";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
          {/* HERO LIGHTING */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            {/* spotlight kiri atas ke area foto */}
            <div className="absolute -left-28 -top-4 h-[760px] w-[1150px] rotate-[20deg] bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.20)_0%,rgba(59,130,246,0.105)_32%,rgba(15,23,42,0.045)_62%,transparent_88%)] blur-2xl" />

            {/* spotlight kanan atas ke area text*/}
            <div className="absolute -right-28 -top-4 h-[740px] w-[1120px] -rotate-[20deg] bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.22)_0%,rgba(59,130,246,0.11)_32%,rgba(15,23,42,0.045)_62%,transparent_88%)] blur-2xl" />

            {/* ambient glow tengah */}
            <div className="absolute left-1/2 top-[40%] h-[520px] w-[1180px] -translate-x-1/2 rounded-full bg-[var(--blue)]/8 blur-[110px]" />

            {/* oval bawah, lebih lebar dan sedikit lebih naik */}
            <div className="absolute bottom-[192px] left-1/2 h-[220px] w-[126%] -translate-x-1/2 rounded-[50%] border border-[var(--blue)]/42 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.18)_0%,rgba(29,78,216,0.10)_40%,rgba(29,78,216,0.03)_72%,transparent_100%)] shadow-[0_0_46px_rgba(29,78,216,0.24),inset_0_0_30px_rgba(96,165,250,0.10)]" />
            {/* glow lembut di atas oval */}
            <div className="absolute bottom-[148px] left-1/2 h-[210px] w-[102%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.14)_0%,rgba(29,78,216,0.08)_36%,rgba(5,7,13,0.22)_68%,transparent_100%)] blur-[64px]" />

            {/* haze gelap tipis buat nyaruin transisi bawah */}
            <div className="absolute bottom-[138px] left-1/2 h-[140px] w-[98%] -translate-x-1/2 rounded-full bg-[#05070D]/36 blur-3xl" />
                      </div>
          {/* LEFT */}
          <div className="relative max-w-3xl pt-4 lg:-translate-x-10">
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

            <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-3.5 py-1.5 text-sm text-[#ffffff]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/45" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-medium">Currently Open to Work, Hit me Up!</span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#project"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--blue)] px-7 text-sm font-medium text-white transition hover:bg-[var(--blue-hover)] hover:shadow-[0_0_24px_rgba(59,130,246,0.22)]"
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
            <span>Find me here :</span>

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
            <div className="absolute right-24 top-28 grid grid-cols-4 gap-5 opacity-85">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]"
                />
              ))}
            </div>

            <div className="absolute right-32 top-[52%] h-5 w-5 rounded-full bg-[var(--blue)] shadow-[0_0_24px_rgba(29,78,216,0.7)]" />

            {/* foto */}
            <div className="relative z-10 h-[780px] w-[610px] -translate-y-22">
              <Image
                src="/profile_pict.png"
                alt="Raphael Evan Wijayanto"
                fill
                priority
                className="object-contain object-bottom"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.75) 3%, black 8%, black 100%)",
                  maskImage:
                    "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.75) 3%, black 8%, black 100%)",
                }}
              />
            </div>

            {/* foreground haze: ini yang bikin badan keliatan keluar dari oval, bukan tembus oval */}
            <div className="pointer-events-none absolute bottom-[118px] z-20 h-[115px] w-[620px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(7,16,29,0.92)_0%,rgba(7,16,29,0.72)_36%,rgba(7,16,29,0.34)_62%,transparent_100%)] blur-[34px]" />


          </div>
        </section>
        <ProjectSection/>
        <Experience/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}