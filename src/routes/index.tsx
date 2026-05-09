import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import dishImg from "@/assets/dish-signature.jpg";
import detailImg from "@/assets/interior-detail.jpg";
import chefImg from "@/assets/about-chef.jpg";
import { Coffee, Leaf, UtensilsCrossed } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Olive — Neighborhood Café & Bistro" },
      { name: "description", content: "Seasonal plates, fresh pastries, and small-batch coffee in a warm neighborhood setting." },
      { property: "og:title", content: "Maison Olive — Neighborhood Café & Bistro" },
      { property: "og:description", content: "Seasonal plates, fresh pastries, and small-batch coffee in a warm neighborhood setting." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Leaf, title: "Seasonal & local", body: "Menus that follow the harvest, sourced from farms within an hour's drive." },
  { icon: Coffee, title: "Slow-roast coffee", body: "Beans roasted weekly in small batches, pulled by hand on our La Marzocco." },
  { icon: UtensilsCrossed, title: "Made from scratch", body: "Bread, pasta and sauces — all prepared each morning by our kitchen team." },
];

function Index() {
  return (
    <>
      <Hero />

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Why Maison Olive"
          title="Honest food, made with care"
          description="Everything we serve starts with great ingredients and the people who grow them."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-warm">
              <f.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature dish */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <img
            src={dishImg}
            alt="Hand-rolled bucatini with brown butter and herbs"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-full w-full rounded-2xl object-cover shadow-warm"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Signature</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Bucatini al limone, brown butter & oregano
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our most-loved plate. Hand-rolled bucatini tossed with cultured butter, lemon
              zest, sea salt and a flurry of fresh oregano from the kitchen garden. Simple,
              loud with flavor.
            </p>
            <Link to="/menu" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              See the full menu
            </Link>
          </div>
        </div>
      </section>

      {/* Story preview */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Story</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            A small kitchen with a big table.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Maison Olive opened in 2017 with one idea: build a place where neighbors meet,
            linger and leave a little happier. Eight years later, we still pour every coffee
            by hand and greet most of our regulars by name.
          </p>
          <Link to="/about" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
            Read our story →
          </Link>
        </div>
        <img
          src={chefImg}
          alt="Chef plating a dish in the Maison Olive kitchen"
          width={1024}
          height={1024}
          loading="lazy"
          className="order-1 h-full w-full rounded-2xl object-cover shadow-warm md:order-2"
        />
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Save your table for the weekend.</h2>
            <p className="mt-3 max-w-xl text-primary-foreground/85">
              Reservations open two weeks ahead. Walk-ins are always welcome at the bar.
            </p>
          </div>
          <Link
            to="/contact"
            className="justify-self-start rounded-full bg-background px-7 py-3 text-sm font-semibold text-primary shadow-sm transition-transform hover:scale-[1.02] md:justify-self-end"
          >
            Reserve a table
          </Link>
        </div>
      </section>

      {/* Detail strip */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <img
          src={detailImg}
          alt="Coffee and croissant on a sunny café table"
          width={1024}
          height={1024}
          loading="lazy"
          className="h-64 w-full rounded-2xl object-cover sm:h-80"
        />
      </section>
    </>
  );
}
