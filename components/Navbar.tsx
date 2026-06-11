"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import ThemedIcon from "@/components/ThemedIcon";

const THEME_STORAGE_KEY = "rew-portfolio-theme";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#project", id: "project" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
];

const sectionIds = ["about", "project", "experience", "skills", "contact"];

function getThemeSnapshot(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
}

function getServerThemeSnapshot(): "dark" | "light" {
  return "dark";
}

function subscribeTheme(callback: () => void) {
  window.addEventListener("rew-theme-change", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("rew-theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

export default function Navbar() {
  const storedTheme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    document.documentElement.classList.toggle("light", storedTheme === "light");
    document.documentElement.style.colorScheme = storedTheme;
  }, [storedTheme]);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition =
        window.scrollY + (window.innerWidth < 640 ? 120 : 150);

      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 140;

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = storedTheme === "dark" ? "light" : "dark";

    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event("rew-theme-change"));
  };

  const isLightTheme = storedTheme === "light";

  const mobileThemeIconSrc = isLightTheme
    ? "/logos/icon/sun_light_theme.png"
    : "/logos/icon/moon_dark_theme.png";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/65 backdrop-blur-xl transition-colors duration-300">
      <nav className="flex h-12 w-full items-center justify-between px-3.5 sm:h-16 sm:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <a href="#about" aria-label="Go to homepage" className="shrink-0">
          <ThemedIcon
            darkSrc="/logos/Transparent_REW_Dark_Theme.svg"
            lightSrc="/logos/Transparent_REW_Light_Theme.svg"
            alt="REW logo"
            width={200}
            height={54}
            priority
            className="h-auto w-[74px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
          />
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2.5 sm:flex-none sm:gap-5 lg:gap-8">
          <div className="flex min-w-0 flex-1 items-center justify-end gap-4 text-[8.5px] font-medium sm:flex-none sm:gap-5 sm:text-sm md:gap-6 lg:gap-8 lg:text-[16px]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group relative shrink-0 py-2 transition-all duration-300 ${
                    isActive
                      ? "text-[var(--blue)]"
                      : "text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-1 left-0 h-px bg-[var(--blue)] transition-all duration-300 ${
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
              className={`hidden h-7 shrink-0 items-center justify-center rounded-lg border px-3 text-[8.5px] font-semibold transition min-[380px]:inline-flex sm:h-9 sm:px-4 sm:text-xs lg:h-10 lg:rounded-xl lg:px-5 lg:text-sm ${
                activeSection === "contact"
                  ? "border-[var(--blue)] bg-[var(--blue)] text-white shadow-[0_0_20px_rgba(59,130,246,0.28)]"
                  : "border-[var(--blue)] bg-[var(--card)] text-[var(--nav-text)] hover:bg-[var(--blue)]/10 hover:text-[var(--nav-text-hover)] hover:shadow-[0_0_20px_rgba(59,130,246,0.22)]"
              }`}
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--blue)] bg-[var(--surface-soft)] transition hover:bg-[var(--hover-surface)] hover:shadow-[0_0_20px_rgba(59,130,246,0.22)] sm:h-10 sm:w-[76px] sm:justify-start sm:p-1"
          >
            <span
              className={`hidden h-8 w-8 items-center justify-center rounded-full bg-[var(--blue)] shadow-[0_0_16px_rgba(29,78,216,0.45)] transition-transform duration-300 sm:absolute sm:left-1 sm:top-1 sm:flex ${
                isLightTheme ? "sm:translate-x-9" : "sm:translate-x-0"
              }`}
            />

            <span className="relative z-10 hidden w-full grid-cols-2 items-center sm:grid">
              <span className="flex h-8 items-center justify-center">
                <ThemedIcon
                  darkSrc="/logos/icon/moon_dark_theme.png"
                  lightSrc="/logos/icon/moon_light_theme.png"
                  alt="Dark mode"
                  width={15}
                  height={15}
                  className={`h-[15px] w-[15px] transition-opacity ${
                    !isLightTheme ? "opacity-100" : "opacity-45"
                  }`}
                />
              </span>

              <span className="flex h-8 items-center justify-center">
                <ThemedIcon
                  darkSrc="/logos/icon/sun_dark_theme.png"
                  lightSrc="/logos/icon/sun_light_theme.png"
                  alt="Light mode"
                  width={15}
                  height={15}
                  className={`h-[15px] w-[15px] translate-x-[3px] transition-opacity ${
                    isLightTheme ? "opacity-100" : "opacity-45"
                  }`}
                />
              </span>
            </span>

            <Image
              src={mobileThemeIconSrc}
              alt=""
              width={14}
              height={14}
              className="h-3.5 w-3.5 sm:hidden"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}