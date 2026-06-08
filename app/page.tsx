import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/Project";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const cvDownloadUrl =
  "https://docs.google.com/document/d/1sE3iVw4tDQXasHTtrjlYV9iAkNZH3syEk4LLC9J9JSs/export?format=pdf";

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
    <main className="relative min-h-screen overflow-x-hidden bg-[#05070D] text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_72%_18%,rgba(29,78,216,0.05),transparent_30%),radial-gradient(circle_at_18%_8%,rgba(96,165,250,0.024),transparent_26%),linear-gradient(180deg,#05070D_0%,#070B14_48%,#05070D_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.58)_100%)]" />

      <div className="relative z-10">
        <Navbar />

        {/* MOBILE / TABLET HERO - desktop feel, scaled down */}
        <section
          id="about"
          className="relative min-h-[760px] overflow-hidden px-5 pb-10 pt-20 lg:hidden"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(147,197,253,0.07)_22%,rgba(29,78,216,0.035)_45%,transparent_70%),linear-gradient(180deg,#07101F_0%,#05070D_62%,#05070D_100%)]" />

          <div className="pointer-events-none absolute left-1/2 top-11 -z-10 h-[270px] w-[560px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.11)_0%,rgba(147,197,253,0.07)_34%,transparent_78%)] blur-[36px]" />
          <div className="pointer-events-none absolute left-[62%] top-[250px] -z-10 h-[260px] w-[330px] -translate-x-1/2 rounded-full bg-[var(--blue)]/10 blur-[70px]" />

          <div className="pointer-events-none absolute right-5 top-[255px] z-20 h-3.5 w-3.5 rounded-full bg-[var(--blue)] shadow-[0_0_22px_rgba(29,78,216,0.9),0_0_48px_rgba(29,78,216,0.5)] sm:right-[16%] sm:top-[300px]" />

          <div className="relative mx-auto h-[650px] max-w-[760px]">
            <div className="absolute left-0 top-[138px] z-20 w-[61%] max-w-[330px] sm:top-[175px] sm:max-w-[390px]">
              <p className="text-[21px] font-medium text-[var(--muted)] sm:text-3xl">
                Hi, I&apos;m
              </p>

              <h1 className="mt-2 text-[39px] font-semibold leading-[0.98] tracking-tight text-white min-[390px]:text-[44px] sm:text-[64px]">
                Raphael Evan
                <br />
                Wijayanto<span className="text-[var(--blue)]">.</span>
              </h1>

              <p className="mt-5 max-w-[210px] text-[11px] leading-[1.75] text-[var(--muted)] min-[390px]:max-w-[230px] min-[390px]:text-xs sm:max-w-[340px] sm:text-sm sm:leading-7">
                An Informatics fresh graduate focused on backend development,
                workflow automation, reporting pipelines, and AI. I build
                practical projects from internship work, academic projects, and
                fullstack experiments.
              </p>

              <div className="mt-5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-2.5 py-1.5 text-[9px] text-white sm:text-xs">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/45" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="truncate font-semibold">
                  Currently Open to Work, Hit me Up!
                </span>
              </div>

              <div className="mt-5 flex max-w-[260px] gap-2 sm:max-w-[360px] sm:gap-3">
                <a
                  href="#project"
                  className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[var(--blue)] px-3 text-[10px] font-semibold text-white transition hover:bg-[var(--blue-hover)] sm:h-11 sm:text-sm"
                >
                  <span>Check My Projects</span>
                  <Image
                    src="/logos/icon/right_arrow.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5"
                  />
                </a>

                <a
                  href={cvDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/[0.09] bg-white/[0.025] px-3 text-[10px] font-semibold text-white transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/10 sm:h-11 sm:text-sm"
                >
                  <span>Download CV</span>
                  <Image
                    src="/logos/icon/download.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5"
                  />
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2.5 text-[10px] text-[var(--muted)] sm:text-sm">
                <span>Find me here :</span>

                <div className="flex items-center gap-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="group inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/10 sm:h-10 sm:w-10"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="h-3.5 w-3.5 opacity-85 transition group-hover:opacity-100 sm:h-4 sm:w-4"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute right-[-56px] top-[92px] z-10 h-[488px] w-[292px] -translate-y-[42px] min-[390px]:right-[-42px] min-[390px]:top-[92px] min-[390px]:h-[505px] min-[390px]:w-[305px] min-[390px]:-translate-y-[68px] sm:right-[4%] sm:top-[118px] sm:h-[560px] sm:w-[350px] sm:-translate-y-[56px]">
              <Image
                src="/profile_pict.png"
                alt="Raphael Evan Wijayanto"
                fill
                priority
                className="object-contain object-bottom"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.34) 4%, rgba(0,0,0,0.82) 12%, black 24%, black 100%)",
                  maskImage:
                    "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.34) 4%, rgba(0,0,0,0.82) 12%, black 24%, black 100%)",
                }}
              />
            </div>

            <div className="pointer-events-none absolute bottom-[90px] left-1/2 z-0 h-[150px] w-[122vw] max-w-[720px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.09)_0%,rgba(29,78,216,0.04)_44%,rgba(29,78,216,0.012)_66%,transparent_86%)] blur-[18px] sm:bottom-[54px] sm:h-[170px]" />
            <div className="pointer-events-none absolute bottom-[70px] left-1/2 z-0 h-[92px] w-[116vw] max-w-[690px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.055)_0%,rgba(29,78,216,0.024)_52%,transparent_84%)] blur-[34px]" />
            <div className="pointer-events-none absolute bottom-[18px] left-1/2 z-[1] h-[170px] w-[104vw] max-w-[620px] -translate-x-1/2 rounded-full bg-[#05070D]/70 blur-[58px]" />
          </div>
        </section>

        {/* DESKTOP HERO */}
        <section className="relative mx-auto hidden min-h-screen max-w-[1920px] items-center gap-16 px-8 pt-10 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:px-14 xl:gap-20 2xl:px-20">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 overflow-visible">
            <div className="absolute -left-24 -top-10 h-[720px] w-[980px] rotate-[18deg] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16)_0%,rgba(147,197,253,0.12)_24%,rgba(59,130,246,0.07)_44%,rgba(15,23,42,0.03)_66%,transparent_86%)] blur-[52px]" />
            <div className="absolute -right-24 -top-10 h-[720px] w-[980px] -rotate-[18deg] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.17)_0%,rgba(147,197,253,0.12)_24%,rgba(59,130,246,0.07)_44%,rgba(15,23,42,0.03)_66%,transparent_86%)] blur-[52px]" />
            <div className="absolute left-1/2 top-[-60px] h-[320px] w-[820px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07)_0%,rgba(147,197,253,0.04)_34%,transparent_78%)] blur-[38px]" />
            <div className="absolute left-1/2 top-[42%] h-[520px] w-[1080px] -translate-x-1/2 rounded-full bg-[var(--blue)]/7 blur-[120px]" />
            <div className="absolute bottom-[206px] left-1/2 h-[210px] w-[74vw] max-w-[1780px] -translate-x-1/2 rounded-[50%] border border-[var(--blue)]/22 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.16)_0%,rgba(29,78,216,0.09)_36%,rgba(29,78,216,0.035)_64%,transparent_100%)] shadow-[0_0_42px_rgba(29,78,216,0.18),inset_0_0_20px_rgba(96,165,250,0.06)]" />
            <div className="absolute bottom-[134px] left-1/2 h-[180px] w-[66vw] max-w-[1120px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.11)_0%,rgba(29,78,216,0.06)_34%,rgba(5,7,13,0.20)_68%,transparent_100%)] blur-[70px]" />
            <div className="absolute bottom-[176px] left-1/2 h-[110px] w-[60vw] max-w-[980px] -translate-x-1/2 rounded-full bg-[#05070D]/34 blur-3xl" />
          </div>

          <div className="relative max-w-3xl lg:justify-self-center lg:pl-4 xl:pl-10">
            <p className="text-3xl text-[var(--muted)] md:text-5xl">Hi, I’m</p>

            <h1 className="mt-3 text-6xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
              Raphael Evan
              <br />
              Wijayanto<span className="text-[var(--blue)]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              An Informatics fresh graduate focused on backend development,
              workflow automation, reporting pipelines, and AI. I build
              practical projects from internship work, academic projects, and
              fullstack experiments.
            </p>

            <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-3.5 py-1.5 text-sm text-white">
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
                <Image src="/logos/icon/right_arrow.svg" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
              </a>

              <a
                href={cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)]/40 px-6 text-sm font-medium text-white transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/10"
              >
                <span>Download CV</span>
                <Image src="/logos/icon/download.svg" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
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
                    <Image src={item.icon} alt="" width={20} height={20} className="h-5 w-5 opacity-80 transition group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden h-[720px] items-end justify-center lg:flex lg:justify-self-center xl:translate-x-2">
            <div className="absolute right-28 top-[52%] h-5 w-5 rounded-full bg-[var(--blue)] shadow-[0_0_24px_rgba(29,78,216,0.7),0_0_54px_rgba(29,78,216,0.35)]" />

            <div className="relative z-10 h-[760px] w-[590px] -translate-y-16 xl:h-[790px] xl:w-[620px] xl:-translate-y-[4.5rem]">
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

            <div className="pointer-events-none absolute bottom-[108px] z-20 h-[105px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(7,16,29,0.90)_0%,rgba(7,16,29,0.70)_36%,rgba(7,16,29,0.30)_62%,transparent_100%)] blur-[32px]" />
          </div>
        </section>

        <ProjectSection />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
