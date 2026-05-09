import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cafe.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Warm interior of Maison Olive café at golden hour"
        width={1536}
        height={1024}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-start justify-center px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-background/80">
          Café · Bistro · Bakery
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-background sm:text-6xl">
          Warm food, slow mornings, & a table that feels like home.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-background/85">
          Maison Olive is a neighborhood kitchen serving seasonal plates, fresh pastries,
          and small-batch coffee — all day, every day.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/menu"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
          >
            Explore the menu
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-background/40 bg-background/10 px-6 py-3 text-sm font-semibold text-background backdrop-blur transition-colors hover:bg-background/20"
          >
            Reserve a table
          </Link>
        </div>
      </div>
    </section>
  );
}
