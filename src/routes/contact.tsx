import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Maison Olive" },
      { name: "description", content: "Visit Maison Olive in Brookside. Reservations, private events, and questions — get in touch." },
      { property: "og:title", content: "Contact & Reservations — Maison Olive" },
      { property: "og:description", content: "Reservations, private events, and questions — get in touch with Maison Olive." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Get in touch</p>
        <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">Come say hello.</h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground">
          Reservations are encouraged on weekends. For private events of 12+ guests, please use
          the form below and we'll be in touch within 24 hours.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 sm:px-6 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <InfoRow icon={MapPin} title="Visit us" lines={["42 Rue des Oliviers", "Brookside, CA 94110"]} />
          <InfoRow icon={Phone} title="Call" lines={["(415) 555-0142"]} />
          <InfoRow icon={Mail} title="Email" lines={["hello@maisonolive.cafe"]} />
          <InfoRow
            icon={Clock}
            title="Hours"
            lines={["Mon – Thu · 8am – 9pm", "Fri – Sat · 8am – 11pm", "Sunday · 9am – 4pm"]}
          />

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Maison Olive map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4204%2C37.7549%2C-122.4104%2C37.7649&layer=mapnik"
              className="h-64 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="rounded-full bg-primary/10 p-3 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{title}</h3>
        <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
          {lines.map((l) => <p key={l}>{l}</p>)}
        </div>
      </div>
    </div>
  );
}
