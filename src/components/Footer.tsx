import { Link } from "@tanstack/react-router";
import { KnightMark } from "./Header";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <KnightMark />
          <span className="font-display text-base text-foreground">Grey Knight Services LLP</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link to="/privacy-policy" className="hover:text-gold transition">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="hover:text-gold transition">
            Terms & Conditions
          </Link>
        </div>
        <div>© {new Date().getFullYear()} Grey Knight Services LLP · UDYAM-MH-32-0015138</div>
      </div>
    </footer>
  );
}
