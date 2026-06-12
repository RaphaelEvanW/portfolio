import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/Project";
import type { CSSProperties } from "react";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemedIcon from "@/components/ThemedIcon";

const cvDownloadUrl =
  "https://docs.google.com/document/d/1sE3iVw4tDQXasHTtrjlYV9iAkNZH3syEk4LLC9J9JSs/export?format=pdf";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RaphaelEvanW",
    darkIcon: "/logos/icon/github_dark_theme.svg",
    lightIcon: "/logos/icon/github_light_theme.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raphael-e-wijayanto/",
    darkIcon: "/logos/icon/linkedin_dark_theme.svg",
    lightIcon: "/logos/icon/linkedin_light_theme.svg",
  },
  {
    label: "Email",
    href: "mailto:raphael.wijayanto@gmail.com",
    darkIcon: "/logos/icon/email_dark_theme.svg",
    lightIcon: "/logos/icon/email_light_theme.svg",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_72%_18%,rgba(29,78,216,0.05),transparent_30%),radial-gradient(circle_at_18%_8%,rgba(96,165,250,0.024),transparent_26%),linear-gradient(180deg,var(--background)_0%,var(--background-soft)_48%,var(--background)_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--page-vignette)_100%)]" />

      <div className="relative z-10">
        <Navbar />
        <div id="about">
          {/* MOBILE / TABLET HERO - desktop feel, scaled down */}
          <section className="relative min-h-[calc(100svh+80px)] overflow-hidden px-5 pb-12 pt-20 lg:hidden">
            <div className="pointer-events-none absolute -left-32 -top-20 z-0 h-[420px] w-[520px] rotate-[18deg] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12)_0%,rgba(147,197,253,0.09)_24%,rgba(59,130,246,0.055)_44%,rgba(15,23,42,0.025)_66%,transparent_86%)] blur-[44px]" />
            <div className="pointer-events-none absolute -right-32 -top-20 z-0 h-[420px] w-[520px] -rotate-[18deg] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.13)_0%,rgba(147,197,253,0.09)_24%,rgba(59,130,246,0.055)_44%,rgba(15,23,42,0.025)_66%,transparent_86%)] blur-[44px]" />
            <div className="pointer-events-none absolute left-1/2 top-[210px] z-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[var(--blue)]/8 blur-[110px]" />


            <div className="pointer-events-none absolute right-5 top-[255px] z-20 h-3.5 w-3.5 rounded-full bg-[var(--blue)] shadow-[0_0_22px_rgba(29,78,216,0.9),0_0_48px_rgba(29,78,216,0.5)] sm:right-[16%] sm:top-[300px]" />

            <div className="relative mx-auto h-[720px] max-w-[760px]">
              <div className="absolute left-0 top-[138px] z-20 w-[61%] max-w-[330px] sm:top-[175px] sm:max-w-[390px]">
                <p className="text-[21px] font-medium text-[var(--muted)] sm:text-3xl">
                  Hi, I&apos;m
                </p>

                <h1 className="mt-2 text-[39px] font-semibold leading-[0.98] tracking-tight text-[var(--foreground)] min-[390px]:text-[44px] sm:text-[64px]">
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

                <div className="mt-5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1.5 text-[9px] text-emerald-500 sm:text-xs">
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
                    className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)]/70 px-3 text-[10px] font-semibold text-[var(--foreground)] transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/10 sm:h-11 sm:text-sm"
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
                        className="group inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-soft)] bg-[var(--icon-surface)] transition hover:border-[var(--blue)] hover:bg-[var(--hover-surface)] sm:h-10 sm:w-10"
                      >
                        <ThemedIcon
                          darkSrc={item.darkIcon}
                          lightSrc={item.lightIcon}
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
                      "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.55) 3%, rgba(0,0,0,0.9) 8%, black 16%, black 100%)",
                    maskImage:
                      "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.55) 3%, rgba(0,0,0,0.9) 8%, black 16%, black 100%)",
                  }}
                />
              </div>

              <div className="pointer-events-none absolute left-1/2 top-[490px] z-[2] h-[124px] w-[98vw] max-w-[580px] -translate-x-1/2 rounded-[50%] border border-[var(--blue)]/24 bg-[image:var(--hero-floor-bg)] shadow-[0_0_42px_rgba(29,78,216,0.2),inset_0_0_20px_rgba(96,165,250,0.08)] sm:top-[545px] sm:h-[144px]" />

              <div className="pointer-events-none absolute left-1/2 top-[506px] z-[1] h-[108px] w-[88vw] max-w-[520px] -translate-x-1/2 rounded-[50%] bg-[image:var(--hero-floor-blur)] opacity-90 blur-[26px] sm:top-[563px] sm:h-[124px]" />

              <div className="pointer-events-none absolute left-1/2 top-[528px] z-[1] h-[128px] w-[78vw] max-w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.24)_0%,rgba(29,78,216,0.13)_38%,rgba(29,78,216,0.05)_62%,transparent_84%)] opacity-90 blur-[28px] sm:top-[586px]" />
            </div>
          </section>

          {/* DESKTOP HERO */}
          <section
            className="relative mx-auto hidden min-h-[calc(88svh+180px)] w-full max-w-[1880px] items-center gap-[clamp(3rem,4vw,5rem)] px-[clamp(3.5rem,4vw,5rem)] pt-10 lg:grid lg:grid-cols-[0.92fr_1.08fr]"
            style={
              {
                "--desktop-text-y": "-2.2rem",
                "--desktop-photo-group-y": "-3.7rem",
                "--desktop-photo-inner-y": "-2rem",
              } as CSSProperties & Record<string, string>
            }
          >
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 overflow-visible">
              <div className="absolute -left-24 -top-10 h-[720px] w-[980px] rotate-[18deg] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16)_0%,rgba(147,197,253,0.12)_24%,rgba(59,130,246,0.07)_44%,rgba(15,23,42,0.03)_66%,transparent_86%)] blur-[52px]" />
              <div className="absolute -right-24 -top-10 h-[720px] w-[980px] -rotate-[18deg] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.17)_0%,rgba(147,197,253,0.12)_24%,rgba(59,130,246,0.07)_44%,rgba(15,23,42,0.03)_66%,transparent_86%)] blur-[52px]" />
              <div className="absolute left-1/2 top-[-60px] h-[320px] w-[820px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07)_0%,rgba(147,197,253,0.04)_34%,transparent_78%)] blur-[38px]" />
              <div className="absolute left-1/2 top-[42%] h-[520px] w-[1080px] -translate-x-1/2 rounded-full bg-[var(--blue)]/7 blur-[120px]" />

              <div className="absolute bottom-[clamp(206px,12vh,260px)] left-1/2 h-[clamp(170px,11vw,210px)] w-[min(72vw,1680px)] -translate-x-1/2 rounded-[50%] border border-[var(--blue)]/22 bg-[image:var(--hero-floor-bg)] shadow-[0_0_42px_rgba(29,78,216,0.18),inset_0_0_20px_rgba(96,165,250,0.06)]" />
              <div className="absolute bottom-[clamp(134px,8vh,180px)] left-1/2 h-[clamp(140px,9vw,180px)] w-[min(60vw,1120px)] -translate-x-1/2 rounded-full bg-[image:var(--hero-floor-blur)] blur-[70px]" />
              <div className="absolute bottom-[clamp(176px,10vh,220px)] left-1/2 h-[clamp(90px,6vw,110px)] w-[min(56vw,980px)] -translate-x-1/2 rounded-full bg-[var(--hero-floor-cover)] blur-3xl" />
            </div>

            <div className="relative max-w-3xl [transform:translateY(var(--desktop-text-y))] lg:justify-self-center lg:pl-[clamp(1rem,2vw,2.5rem)]">
              <p className="text-[clamp(2rem,2.4vw,3rem)] text-[var(--muted)]">
                Hi, I’m
              </p>

              <h1 className="mt-3 text-[clamp(4.5rem,5.2vw,6rem)] font-semibold leading-[1.02] tracking-tight">
                Raphael Evan
                <br />
                Wijayanto<span className="text-[var(--blue)]">.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-[clamp(1rem,0.95vw,1.125rem)] leading-8 text-[var(--muted)]">
                An Informatics fresh graduate focused on backend development,
                workflow automation, reporting pipelines, and AI. I build
                practical projects from internship work, academic projects, and
                fullstack experiments.
              </p>

              <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-sm text-emerald-600">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/45" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-medium">
                  Currently Open to Work, Hit me Up!
                </span>
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
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)]/70 px-6 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--blue)] hover:bg-[var(--blue)]/10"
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
                      className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-[var(--icon-surface)] transition hover:border-[var(--blue)] hover:bg-[var(--hover-surface)]"
                    >
                      <ThemedIcon
                        darkSrc={item.darkIcon}
                        lightSrc={item.lightIcon}
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

            <div className="relative hidden h-[clamp(650px,42vw,760px)] [transform:translateY(var(--desktop-photo-group-y))] items-end justify-center lg:flex lg:justify-self-center xl:translate-x-2">
              <div className="absolute right-[clamp(0.5rem,2vw,2.5rem)] top-[45%] z-20 h-5 w-5 rounded-full bg-[var(--blue)] shadow-[0_0_24px_rgba(29,78,216,0.7),0_0_54px_rgba(29,78,216,0.35)]" />

              <div className="relative z-10 h-[clamp(720px,43vw,790px)] w-[clamp(560px,33vw,620px)] [transform:translateY(var(--desktop-photo-inner-y))]">
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
            </div>
          </section>
        </div>
        <ProjectSection />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}