# OSSF — Om Shiv Security Force Website

Corporate marketing / lead-generation website for Om Shiv Security Force (OSSF), built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/                Route segments (App Router). One folder per page.
components/
  layout/            Navbar, Footer
  sections/          Homepage & page section blocks (Hero, ServicesGrid, ...)
  ui/                 Small reusable primitives (Button, Card, Container, Section, Badge)
  forms/              Request-a-quote form
lib/
  data/               Static content: services, industries, nav, compliance, differentiators, clients
  utils/              cn() class helper, submitQuote() abstraction, site constants, SEO helpers
public/images/        Placeholder image slots (see below)
```

## Content status

Real business content was supplied via the client's Company Profile (confirmed 20-09-2026) and is
now wired into the site:

- **Founding year**: confirmed as **2017** (the "Trusted Since 2002" / "10 years" phrasing
  elsewhere in the source material was a typo, per the client) — set in `lib/utils/site-config.ts`.
- **Registered office, phone, email**: real values from the company profile, in
  `lib/utils/site-config.ts`. The Contact page now embeds a real Google Maps view of the address
  (no API key needed — uses the public `maps?q=...&output=embed` endpoint).
- **Compliance registrations**: real PSARA licence, GSTIN, UDYAM, PF/EPF, ESIC, Professional Tax,
  Shops & Establishment and PAN numbers are shown on `/compliance` and the homepage compliance
  section — see `lib/data/compliance.ts`.
- **Clients**: the company profile's own "client showcase" pages (Lodha, Runwal Realty, KIMS
  Hospitals, etc. — presented as external-facing collateral) are shown as a text-based client wall
  on `/clients` and the homepage teaser — see `lib/data/clients.ts`. The company profile also lists
  100+ individual residential societies/buildings with addresses; that granular list is **not**
  published on the public site (it reads as a security-sensitive disclosure of which buildings use
  which vendor, and wasn't itself presented as public collateral) — it's referenced generically
  ("100+ client relationships") with a note that references are available on request, matching the
  company profile's own line.
- **Service categories & guard duties**: expanded from the profile's "Duties of Our Security
  Guards" section into the Security Services / Electronic Surveillance / Facility Support capability
  lists on `/services`.

**Still outstanding** — not in the supplied company profile, so still marked
`[CLIENT CONFIRMATION REQUIRED]` in the UI:

- **Office/enquiry business hours** (the profile confirms 24×365 *security operations*, but not a
  reception/enquiry desk window) — Contact page and `lib/utils/site-config.ts`.
- **Real photography** — the site still uses labelled placeholder image slots (see Images below).
- **Logo image files** for the clients shown on `/clients` — currently rendered as text badges
  since only flattened screenshots (not vector/transparent logo files) were supplied.

Search the codebase for `CLIENT CONFIRMATION REQUIRED` to find every remaining instance.

## Images

No real OSSF photography was supplied, so `public/images/` contains a small placeholder SVG system
(`placeholder.tsx` component + labelled folders per section: hero, services, industries, clients,
about). Replace the referenced paths with real photography when it's available — the `<PlaceholderImage>`
component and `next/image` usage are structured so a drop-in swap doesn't require touching layout code.

## Request a Quote form

The form in `components/forms/RequestQuoteForm.tsx` posts through `lib/utils/submit-quote.ts`, a small
abstraction that currently logs the payload and simulates a network call. Wire it to your chosen
provider (e.g. an email API route, Formspree, Resend) by editing that one file — no other component
needs to change.

## Notes

This project was authored file-by-file in an environment without npm registry access, so `npm install`
was not run by the author. Package versions in `package.json` are pinned to stable releases current as
of the Next.js 14.x line. After `npm install`, run `npm run lint` and `npm run build`; if either surfaces
an error, it's most likely a small typo rather than a structural issue — report it back for a quick fix.
