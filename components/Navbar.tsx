import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-background/80 backdrop-blur-md">
      <nav className="relative flex h-16 w-full items-center px-8">
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

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <a href="#work" className="transition hover:text-foreground">
            Work
          </a>
          <a href="#experience" className="transition hover:text-foreground">
            Experience
          </a>
          <a href="#contact" className="transition hover:text-foreground">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}