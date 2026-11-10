import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/Project";
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
      <div className="site-atmosphere" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />
        <section id="about" className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="hero-intro">Hi, I’m Raphael.</p>
            <h1 id="hero-heading" className="hero-name">
              Raphael Evan<br />Wijayanto<span className="text-[var(--accent)]">.</span>
            </h1>
            <p className="hero-role">Software development.<br />Automation. Applied AI.</p>
            <p className="hero-description">
              IT Programmer at PT Sari Tirta Group and Informatics graduate.
              I build business tools, reporting pipelines, and digital workflows
              that make everyday work easier.
            </p>
            <div className="hero-actions">
              <a href="#project" className="hero-primary">
                Explore projects
                <Image src="/logos/icon/right_arrow.svg" alt="" width={18} height={18} className="hero-action-icon" />
              </a>
              <a href={cvDownloadUrl} target="_blank" rel="noopener noreferrer" className="hero-secondary">
                Download CV
                <Image src="/logos/icon/download.svg" alt="" width={17} height={17} className="hero-download-icon" />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <span>Find me here</span>
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label} title={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <ThemedIcon darkSrc={item.darkIcon} lightSrc={item.lightIcon}
                    alt="" width={17} height={17} className="h-[17px] w-[17px]" />
                  <span className="sr-only">{item.label}</span>
                </a>
              ))}
            </div>
            <div className="hero-stack" aria-label="Core technologies">
              {["Python", "Go", "React / Next.js", "Camunda BPMN", "n8n", "PostgreSQL"].map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>
          </div>
          <figure className="hero-figure" aria-label="Raphael and areas of work">
            <div className="hero-stage">
              <div className="hero-watermark" aria-hidden="true">REW</div>
              <div className="hero-ring" aria-hidden="true" />
              <Image src="/profile_pict.png" alt="Raphael Evan Wijayanto"
                fill preload sizes="(min-width: 1440px) 600px, (min-width: 901px) 48vw, (min-width: 640px) 560px, 95vw"
                className="hero-photo" />
              <div className="hero-chip hero-chip-automation">
                <strong>Automation pipelines</strong>
                <span>KNIME, n8n, Camunda</span>
              </div>
              <div className="hero-chip hero-chip-fullstack">
                <strong>Fullstack projects</strong>
                <span>Web apps from DB to UI</span>
              </div>
              <div className="hero-chip hero-chip-availability">
                <span className="hero-status-dot" aria-hidden="true" />
                <strong>Open to opportunities</strong>
              </div>
            </div>
          </figure>
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
