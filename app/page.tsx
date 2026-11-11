import Image from "next/image";
import "./hero.css";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
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
  { label: "GitHub", href: "https://github.com/RaphaelEvanW", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raphael-e-wijayanto/", icon: "linkedin" },
  { label: "Email", href: "mailto:raphael.wijayanto@gmail.com", icon: "email" },
];

const stack = ["Python", "Go", "React / Next.js", "Camunda BPMN", "n8n", "PostgreSQL"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="site-atmosphere" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />
        <section id="about" className="rew-hero" aria-labelledby="rew-hero-title">
          <div className="rew-hero-layout">
            <div className="rew-hero-copy">
              <p className="rew-hero-greeting">Hi, I&apos;m</p>
              <h1 id="rew-hero-title">Raphael Evan<br className="rew-hero-desktop-break" /> Wijayanto<span>.</span></h1>
              <p className="rew-hero-tagline">Software development.<br className="rew-hero-desktop-break" /> <span>Automation. Applied AI.</span></p>
              <p className="rew-hero-description">
                An Informatics graduate focused on backend development, workflow
                automation, reporting pipelines, and AI. I build practical tools
                from internship work, academic projects, and fullstack experiments.
              </p>
              <div className="rew-hero-actions">
                <a href="#project" className="rew-hero-button rew-hero-button-primary">
                  Explore projects <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a href={cvDownloadUrl} target="_blank" rel="noopener noreferrer" className="rew-hero-button rew-hero-button-secondary">
                  Download CV <ArrowDownToLine size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="rew-hero-socials">
                <span>Find me here</span>
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} aria-label={item.label}>
                    <ThemedIcon
                      darkSrc={`/logos/icon/${item.icon}_dark_theme.svg`}
                      lightSrc={`/logos/icon/${item.icon}_light_theme.svg`}
                      alt="" width={18} height={18}
                    />
                  </a>
                ))}
              </div>
              <ul className="rew-hero-stack" aria-label="Technologies I work with">
                {stack.map((name) => <li key={name}>{name}</li>)}
              </ul>
            </div>
            <div className="rew-hero-stage">
              <div className="rew-hero-watermark" aria-hidden="true">REW</div>
              <div className="rew-hero-ring" aria-hidden="true" />
              <div className="rew-hero-portrait">
                <Image src="/profile_pict.png" alt="Raphael Evan Wijayanto" fill preload sizes="(max-width: 600px) 90vw, (max-width: 900px) 440px, 46vw" />
              </div>
              <div className="rew-hero-chip rew-hero-chip-automation">
                <strong>Automation pipelines</strong>
                <span>KNIME, n8n, Camunda</span>
              </div>
              <div className="rew-hero-chip rew-hero-chip-fullstack">
                <strong>Fullstack projects</strong>
                <span>Web apps from DB to UI</span>
              </div>
              <a href="#contact" className="rew-hero-chip rew-hero-chip-availability">
                <span className="availability-dot" aria-hidden="true" />
                <strong>Open to opportunities</strong>
              </a>
            </div>
          </div>
        </section>
        <ProjectSection />
        <Experience />
        <Skills />
        <div className="bg-[radial-gradient(ellipse_100vw_85%_at_75%_100%,var(--section-green-light),transparent_72%)] [&>footer]:border-t-0">
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
