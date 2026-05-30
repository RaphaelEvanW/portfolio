import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-background/80 backdrop-blur-md">
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

        <div className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-1 py-2 font-medium text-white transition-all duration-300 hover:[text-shadow:0_0_10px_rgba(255,255,255,0.22)]"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--blue)] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_12px_rgba(29,78,216,0.85)]" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}