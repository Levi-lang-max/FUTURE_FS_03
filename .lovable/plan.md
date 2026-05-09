## Project: Maison Olive — Local Café & Bistro Website

A warm, inviting marketing site for a local café/restaurant, built as a live pitch project. Uses TanStack Start file-based routing with separate routes per page for proper SEO.

### Design direction
- **Mood**: Warm & inviting — earthy, cozy, friendly
- **Palette** (oklch tokens in `src/styles.css`):
  - Background: warm cream
  - Primary: deep terracotta / burnt sienna
  - Accent: olive green
  - Foreground: warm dark brown
  - Soft beige cards, subtle shadows
- **Typography**: Serif display (Playfair Display) for headings + clean sans (Inter) for body, loaded via Google Fonts
- **Imagery**: AI-generated hero/food/interior photos saved to `src/assets/`

### Pages & routes
```
src/routes/
  __root.tsx          (shared header + footer)
  index.tsx           Home — hero, intro, signature dishes, hours teaser, CTA
  about.tsx           About — story, chef, values, gallery
  menu.tsx            Menu — categorized dish list (Breakfast, Mains, Drinks, Desserts) with prices
  contact.tsx         Contact — address, hours, phone/email, contact form (frontend only), embedded map placeholder
```

Each route gets its own `head()` with unique title/description/OG tags.

### Components
- `src/components/SiteHeader.tsx` — sticky nav with brand mark + Links (active state)
- `src/components/SiteFooter.tsx` — hours, address, socials, copyright
- `src/components/Hero.tsx` — full-width hero with overlay, headline, CTAs
- `src/components/SectionHeading.tsx` — reusable eyebrow + title pattern
- `src/components/MenuItem.tsx` — name, description, dotted leader, price
- `src/components/ContactForm.tsx` — name/email/message form using shadcn inputs + sonner toast (no backend)

### Assets to generate
- `hero-cafe.jpg` — warm interior shot, golden hour
- `about-chef.jpg` — chef plating in kitchen
- `dish-signature.jpg` — signature dish overhead
- `interior-detail.jpg` — cozy table setting

### Technical notes
- Update `src/styles.css` with warm oklch tokens for both light & dark
- Add Google Fonts via `<link>` in `__root.tsx` head
- Update `__root.tsx` to render `<SiteHeader />` and `<SiteFooter />` around `<Outlet />`
- Wire `<Toaster />` from `sonner` for contact form feedback
- Replace placeholder in `index.tsx`
- All copy is restaurant-themed sample content (editable later)
- Contact form is presentation-only (no Lovable Cloud needed for the pitch demo)
