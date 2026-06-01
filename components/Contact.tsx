import Image from "next/image";

const contactLinks = [
  {
    label: "Email",
    value: "raphael.wijayanto@gmail.com",
    href: "mailto:raphael.wijayanto@gmail.com",
    icon: "/logos/icon/email_dark_theme.svg",
  },
  {
    label: "LinkedIn",
    value: "Raphael Evan Wijayanto",
    href: "https://www.linkedin.com/in/raphael-e-wijayanto/",
    icon: "/logos/icon/linkedin_dark_theme.svg",
  },
  {
    label: "GitHub",
    value: "RaphaelEvanW",
    href: "https://github.com/RaphaelEvanW",
    icon: "/logos/icon/github_dark_theme.svg",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-20 sm:px-10 lg:px-14 xl:px-16"
    >
      <div className="pointer-events-none absolute bottom-16 right-20 hidden h-72 w-72 rounded-full bg-[var(--blue)]/7 blur-3xl lg:block" />

      <div className="relative border-t border-white/[0.08] pt-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>

            <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Let’s Work Together
            <span className="text-[var(--blue)]"> !</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              I’m open to fresh graduate opportunities around software development,
              workflow automation, reporting systems, and AI-related engineering work.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between gap-6 border-b border-white/[0.08] py-5 transition hover:border-[var(--blue)]/40"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] transition group-hover:border-[var(--blue)]/40 group-hover:bg-[var(--blue)]/10">
                    <Image
                      src={link.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 opacity-80 transition group-hover:opacity-100"
                    />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white">
                      {link.label}
                    </p>
                    <p className="mt-1 truncate text-sm text-[var(--muted)]">
                      {link.value}
                    </p>
                  </div>
                </div>

                <Image
                  src="/logos/icon/right_arrow.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] shrink-0 opacity-55 transition group-hover:translate-x-1 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}