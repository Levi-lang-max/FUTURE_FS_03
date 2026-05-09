import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import chefImg from "@/assets/about-chef.jpg";
import detailImg from "@/assets/interior-detail.jpg";
import dishImg from "@/assets/dish-signature.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Olive" },
      { name: "description", content: "Meet the team behind Maison Olive: a neighborhood kitchen built on seasonal ingredients, slow mornings, and good company." },
      { property: "og:title", content: "About — Maison Olive" },
      { property: "og:description", content: "Meet the team behind Maison Olive — a neighborhood kitchen built on seasonal ingredients and good company." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Seasonal first", body: "Menus change with what's growing nearby. If a tomato isn't great this week, you won't see it on a plate." },
  { title: "Slow craft", body: "Bread is proofed overnight. Stocks simmer for hours. Coffee is dialed in every morning." },
  { title: "Neighborhood-owned", body: "We're a family-run café — not a chain. Most of our team lives within ten blocks." },
];

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Story</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          A neighborhood kitchen, built on patience and good ingredients.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Maison Olive started in 2017 as a six-table corner café. Today it's a full bistro and
          bakery — but the heart of it hasn't changed. We still bake bread every morning, still
          greet most regulars by name, and still believe a meal should feel a little like home.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <img
          src={chefImg}
          alt="Chef Marco plating a seasonal dish at Maison Olive"
          width={1024}
          height={1024}
          loading="lazy"
          className="h-72 w-full rounded-2xl object-cover shadow-warm sm:h-[28rem]"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="What We Believe" title="Three things we won't compromise on" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <img src={detailImg} alt="Morning coffee at Maison Olive" width={1024} height={1024} loading="lazy" className="h-full w-full rounded-2xl object-cover" />
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Meet Chef Marco</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Born in Liguria and trained in Lyon, Marco brought his grandmother's recipes — and
              her insistence on butter, not margarine — to Brookside in 2016. He runs the kitchen
              with quiet authority and an open door for any cook who wants to learn.
            </p>
            <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-foreground">
              "Hospitality isn't a job. It's how we say thank you for choosing us."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <img src={dishImg} alt="A signature pasta dish at Maison Olive" width={1024} height={1024} loading="lazy" className="h-72 w-full rounded-2xl object-cover sm:h-96" />
      </section>
    </>
  );
}
