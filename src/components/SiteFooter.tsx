import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary">Maison Olive</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            A neighborhood café and bistro serving honest, seasonal food in a warm setting.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="mailto:hello@maisonolive.cafe" aria-label="Email" className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Visit</h4>
          <p className="mt-3 text-sm text-muted-foreground">
            42 Rue des Oliviers<br />
            Brookside, CA 94110
          </p>
          <p className="mt-3 text-sm text-muted-foreground">(415) 555-0142</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>Mon – Thu · 8am – 9pm</li>
            <li>Fri – Sat · 8am – 11pm</li>
            <li>Sunday · 9am – 4pm</li>
          </ul>
          <Link to="/menu" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
            View the menu →
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Maison Olive. All rights reserved.
      </div>
    </footer>
  );
}
