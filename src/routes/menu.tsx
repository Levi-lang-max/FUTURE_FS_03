import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { MenuItem } from "@/components/MenuItem";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Maison Olive" },
      { name: "description", content: "Breakfast, mains, drinks and desserts at Maison Olive — seasonal plates and freshly baked pastries served all day." },
      { property: "og:title", content: "Menu — Maison Olive" },
      { property: "og:description", content: "Seasonal plates and freshly baked pastries served all day at Maison Olive." },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Breakfast",
    note: "Served until 11:30am",
    items: [
      { name: "Olive oil granola", description: "House-toasted oats, almonds, dried cherries, yogurt, honey.", price: "$11" },
      { name: "Soft scramble & sourdough", description: "Two eggs, cultured butter, chives, charred levain.", price: "$13" },
      { name: "Brown-butter waffle", description: "Whipped crème fraîche, seasonal compote, maple.", price: "$14" },
      { name: "Croque Olive", description: "Smoked ham, gruyère, mornay, dijon, on country bread.", price: "$15" },
    ],
  },
  {
    title: "Mains",
    note: "From 11:30am",
    items: [
      { name: "Bucatini al limone", description: "Hand-rolled pasta, brown butter, lemon, oregano.", price: "$22" },
      { name: "Roast chicken", description: "Half bird, schmaltz potatoes, jus, lemon.", price: "$28" },
      { name: "Market salad", description: "Whatever's best this week, sherry vinaigrette, soft herbs.", price: "$16" },
      { name: "Mushroom toast", description: "Wild mushrooms, taleggio, thyme, sourdough.", price: "$18" },
      { name: "Steak frites", description: "Hanger steak, herb butter, hand-cut fries.", price: "$32" },
    ],
  },
  {
    title: "Drinks",
    note: "All day",
    items: [
      { name: "House espresso", description: "Single origin, rotating each season.", price: "$4" },
      { name: "Cortado", description: "Double espresso, equal parts steamed milk.", price: "$5" },
      { name: "Pour-over", description: "Light roast, brewed to order.", price: "$6" },
      { name: "Natural wine, glass", description: "Rotating selection from small producers.", price: "$12" },
      { name: "Spritz Olive", description: "Aperol, sparkling wine, soda, olive.", price: "$13" },
    ],
  },
  {
    title: "Desserts",
    note: "Made in-house",
    items: [
      { name: "Olive oil cake", description: "Citrus glaze, crème fraîche.", price: "$9" },
      { name: "Dark chocolate pot", description: "Sea salt, almond brittle.", price: "$10" },
      { name: "Affogato", description: "Vanilla gelato, hot espresso.", price: "$8" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Menu</p>
        <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">What's on today</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
          Our menu shifts with the seasons. Below is a sample of what you might find this week.
          Ask your server about the daily specials.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <div className="space-y-14">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="mb-4 flex items-baseline justify-between border-b border-border pb-3">
                <h2 className="text-2xl font-bold text-foreground">{s.title}</h2>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{s.note}</span>
              </div>
              <div className="divide-y divide-border/60">
                {s.items.map((it) => (
                  <MenuItem key={it.name} {...it} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Vegetarian, vegan and gluten-free options available — just ask.
        </p>
      </section>
    </>
  );
}
