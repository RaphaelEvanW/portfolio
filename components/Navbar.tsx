"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#project", id: "project" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
];

const sectionIds = ["about", "project", "experience", "skills", "contact"];

function getInitialTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "dark";
}

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 160;

      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120;

      if (isNearBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "about";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <nav className="flex h-16 w-full items-center justify-between px-8">
        <a href="#" aria-label="Go to homepage" className="z-10">
          <Image
            src="/logos/Transparent_REW_Dark_Theme.svg"
            alt="REW logo"
            width={200}
            height={54}
            priority
            className="h-auto w-[200px]"
          />
        </a>

        <div className="hidden items-center gap-8 text-[16px] md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`group relative px-1 py-2 font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[var(--blue-soft)]"
                    : "text-white hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.22)]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-[var(--blue)] transition-all duration-300 ${
                    isActive
                      ? "w-full shadow-[0_0_12px_rgba(29,78,216,0.85)]"
                      : "w-0 group-hover:w-full group-hover:shadow-[0_0_12px_rgba(29,78,216,0.85)]"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className={`inline-flex h-10 items-center justify-center rounded-xl border px-5 text-sm font-semibold transition ${
              activeSection === "contact"
                ? "border-[var(--blue)] bg-[var(--blue)]/15 text-white shadow-[0_0_20px_rgba(59,130,246,0.28)]"
                : "border-[var(--blue)] bg-white/[0.025] text-white hover:bg-[var(--blue)]/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.22)]"
            }`}
          >
            Contact
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative inline-flex h-10 w-[76px] cursor-pointer items-center rounded-full border border-[var(--blue)] bg-white/[0.025] p-1 transition hover:bg-[var(--blue)]/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.22)]"
          >
            <span
              className={`absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--blue)] shadow-[0_0_16px_rgba(29,78,216,0.45)] transition-transform duration-300 ${
                theme === "light" ? "translate-x-9" : "translate-x-0"
              }`}
            />

            <span className="relative z-10 grid w-full grid-cols-2 items-center">
              <span className="flex h-8 items-center justify-center">
                <Image
                  src="/logos/icon/moon_dark_theme.png"
                  alt="Dark mode"
                  width={15}
                  height={15}
                  className={`h-[15px] w-[15px] transition-opacity ${
                    theme === "dark" ? "opacity-100" : "opacity-45"
                  }`}
                />
              </span>

              <span className="flex h-8 items-center justify-center">
                <Image
                  src="/logos/icon/sun_dark_theme.png"
                  alt="Light mode"
                  width={15}
                  height={15}
                  className={`h-[15px] w-[15px] translate-x-[3px] transition-opacity ${
                    theme === "light" ? "opacity-100" : "opacity-45"
                  }`}
                />
              </span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}