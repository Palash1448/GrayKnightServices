import { Link } from "@tanstack/react-router";

export function KnightMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" stroke="url(#g)" strokeWidth="1" />
      <path
        d="M11 22 L11 17 C11 13 14 11 16 10 L14 8 L17 8 L20 11 C22 13 22 15 21 17 L21 22 Z"
        fill="url(#g)"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="oklch(0.88 0.12 85)" />
          <stop offset="1" stopColor="oklch(0.62 0.13 78)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface HeaderProps {
  isHome?: boolean;
}

export function Header({ isHome = false }: HeaderProps) {
  const getHref = (hash: string) => {
    return isHome ? `#${hash}` : `/#${hash}`;
  };

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <KnightMark />
          <span className="font-display text-lg tracking-wide text-foreground">Grey Knight</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href={getHref("services")} className="hover:text-foreground transition">Services</a>
          <a href={getHref("approach")} className="hover:text-foreground transition">Approach</a>
          <a href={getHref("about")} className="hover:text-foreground transition">About</a>
          <a href={getHref("contact")} className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href={getHref("contact")}
          className="text-sm font-medium text-primary-foreground bg-primary px-4 py-2 rounded-sm hover:opacity-90 transition"
        >
          Engage us
        </a>
      </div>
    </header>
  );
}
