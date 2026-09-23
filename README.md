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
`[CLIENT CONFIRMATION REQUIRED]` in the UI (rendered by `components/ui/PendingConfirmation.tsx`):

- **Office/enquiry business hours** (the profile confirms 24×365 *security operations*, but not a
  reception/enquiry desk window) — set `businessHours.officeEnquiries` in `lib/utils/site-config.ts`.
- **Privacy Policy and Terms & Conditions** — basic drafts are written (describing the site as currently
  built: the quote form is not connected to any provider). They are not lawyer-reviewed and await OSSF's
  approval, so they stay `noindex` and out of the sitemap (remove them from `noIndexRoutes` in
  `lib/utils/seo.ts` once approved). Update the Privacy Policy when a form/email provider is connected.
- **Official logo** — see the Logo section below.
- **Production domain** — `siteConfig.url` (`https://omshivsecurityforce.in`) drives canonical URLs,
  the sitemap and Open Graph URLs; confirm it matches the domain the site will be deployed on.
- **Real photography** — the site still uses labelled placeholder image slots (see Images below).
- **Logo image files** for the clients shown on `/clients` — currently rendered as text badges
  since only flattened screenshots (not vector/transparent logo files) were supplied.

Search the codebase for `CLIENT CONFIRMATION REQUIRED` to find every remaining instance.

## Images

No OSSF photography has been supplied yet. Every photography slot is registered in `lib/data/images.ts`
and rendered by `components/ui/PlaceholderImage.tsx`. The slots currently use **licensed Unsplash stock
photographs as background/atmosphere only** (loaded via `next/image`; `images.unsplash.com` is allowed in
`next.config.mjs`). They do not depict OSSF staff, clients or sites and must never be captioned as such.
Source, photographer and licence for each photo: `docs/image-sources.md`. To use approved OSSF photography,
drop files in `public/images/<folder>/` and update the slot's `src`/`alt`/`credit` — see `public/images/README.md`.

## Logo

The official OSSF logo has not been supplied yet; the site shows an interim text mark (red tile + "OSSF").
When the official logo arrives, replace:

| What | File | How |
| --- | --- | --- |
| Header + footer logo | `components/ui/Logo.tsx` | Add the file to `public/brand/` and set `OFFICIAL_LOGO` (src, width, height) |
| Favicon | `app/icon.svg` | Replace with the official mark (square, SVG or PNG — rename to `icon.png` if PNG) |
| Apple touch icon | `app/apple-icon.png` | 180×180 PNG of the mark on a solid background |
| Social share image | `public/images/og-image.png` (source: `og-image.svg`) | 1200×630 PNG including the official logo |

## Request a Quote form

The form in `components/forms/RequestQuoteForm.tsx` posts through `lib/utils/submit-quote.ts`, a small
abstraction that currently **does not send anything** (it returns `delivered: false`). While
`QUOTE_SUBMISSION_CONNECTED` is `false`, the form says so plainly and, after validation, gives the
visitor a pre-filled email to send to the OSSF address (plus the phone number) instead of claiming the
request was received. To go live: implement the provider call in `submitQuote` (return
`{ ok: true, delivered: true }` on success) and set `QUOTE_SUBMISSION_CONNECTED = true` — no other
component needs to change.

## SEO

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter metadata via
  `buildMetadata()` in `lib/utils/seo.ts`; site-wide defaults and LocalBusiness JSON-LD in
  `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Icons: `app/icon.svg` (favicon) and `app/apple-icon.png`; share image `public/images/og-image.png`.

