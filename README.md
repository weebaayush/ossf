# OSSF — Om Shiv Security Force Website

Corporate website for Om Shiv Security Force (OSSF), a PSARA-licensed security and facility management
company in Thane (est. 2017). Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

- **Live site:** https://omshivsecurityforce.in
- **Hosting:** Netlify (free plan), deployed automatically from this GitHub repo
- **Domain:** GoDaddy · **Email:** Zoho Mail (`info@`, `accounts@` + staff mailboxes)

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About OSSF |
| `/services` | Security, surveillance and facility services |
| `/industries` | Sectors served |
| `/why-ossf` | Why choose OSSF |
| `/clients` | Filterable client logo grid |
| `/compliance` | Licences and registrations |
| `/contact` | Address, phones, email, hours, map |
| `/request-a-quote` | Quote request form |
| `/terms-of-service`, `/privacy-policy` | Legal pages (awaiting OSSF approval, `noindex`) |

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run before every push)
npm run start    # serve the production build
npm run lint
```

Code style: Prettier settings are in `.prettierrc` (print width 100). Use the VS Code Prettier
extension with "format on save".

## Project structure

```
app/                  One folder per page (App Router), plus sitemap.ts, robots.ts, icons
components/
  layout/             Navbar, Footer
  sections/           Page sections (Hero, ServicesGrid, ClientDirectory, ...)
  ui/                 Small building blocks (Button, Container, Section, Badge, Logo, ...)
  forms/              Request-a-quote form
lib/
  data/               Site content: services, industries, nav, compliance, clients, images
  utils/              Company facts (site-config.ts), SEO helpers, quote submission, cn()
public/brand/         Official OSSF logo files
public/images/        Client logos, social share image, folders for future photography
docs/                 Image and logo sources and licences
```

## Common updates

| To change | Edit |
| --- | --- |
| Phone, email, address, office hours, service areas | `lib/utils/site-config.ts` |
| Services / industries / "Why OSSF" text | `lib/data/services.ts`, `industries.ts`, `differentiators.ts` |
| Licence and registration numbers | `lib/data/compliance.ts` |
| Add or remove a client | `lib/data/clients.ts` (logo file goes in `public/images/clients/`; record its source in `docs/image-sources.md`) |
| A photo | `lib/data/images.ts` (see `public/images/README.md`) |
| Header / footer logo | `components/ui/Logo.tsx` + files in `public/brand/` |

## Deployment

Every push to the `main` branch on GitHub triggers a new Netlify build and deploy. Netlify detects
Next.js automatically (build command `npm run build`), so no extra configuration is needed. If a
build fails, the site keeps serving the last good version — check the deploy log in Netlify.

DNS lives at **GoDaddy** (the domain's nameservers were not moved):

| Type | Name | Value | Purpose |
| --- | --- | --- | --- |
| A | `@` | `75.2.60.5` | Website (Netlify) |
| CNAME | `www` | `<site-name>.netlify.app` | Website (Netlify) |
| MX / TXT | as set by Zoho | — | Email (Zoho Mail) — **do not change** |

`omshivsecurityforce.in` is the primary domain; `www` redirects to it. HTTPS certificates are issued
and renewed by Netlify automatically.

**Accounts:** GitHub, Netlify, GoDaddy and Zoho are all registered to OSSF (`info@omshivsecurityforce.in`).
Logins are held by the OSSF owner — never commit passwords or keys to this repo.

## Content status

All business content comes from the client's Company Profile (confirmed 20-09-2026) or was
confirmed by the client since. Company facts live in `lib/utils/site-config.ts`:

- **Founding year** 2017 (the "Trusted Since 2002" / "10 years" phrasing in the source material was
  a typo, per the client).
- **Office address, phones, email** (`info@omshivsecurityforce.in`) and **domain**
  (`https://omshivsecurityforce.in`, which drives canonical URLs, the sitemap and Open Graph URLs).
- **Hours**: security operations 24×365; office enquiries 10:00 AM – 6:00 PM, Monday to Saturday
  (confirmed 26-09-2026 as "6 days a week"; the days are assumed).
- **Compliance registrations** (PSARA, GSTIN, UDYAM, PF/EPF, ESIC, etc.) on `/compliance`, from
  `lib/data/compliance.ts`.
- **Clients** on `/clients` and the homepage teaser, from `lib/data/clients.ts`. Logo sources are in
  `docs/image-sources.md`. The profile's list of 100+ individual residential societies is deliberately
  **not** published (it would disclose which buildings use which security vendor); the site says
  references are available on request instead.

Awaiting OSSF approval before launch:

- **Client logos**: OSSF should confirm each client is happy to be shown (see the notes in
  `lib/data/clients.ts`).
- **Privacy Policy and Terms of Service**: drafted, not lawyer-reviewed. They stay `noindex` and out
  of the sitemap until approved; then remove them from `noIndexRoutes` in `lib/utils/seo.ts`. Update
  the Privacy Policy if a form provider is connected.

If a new fact is missing later, render `<PendingConfirmation />` (`components/ui/PendingConfirmation.tsx`)
in its place rather than guessing, and mark the code `CLIENT CONFIRMATION REQUIRED`; searching for that
phrase lists every open item. There are none at the moment.

## Images

No OSSF photography has been supplied yet. Every photography slot is registered in `lib/data/images.ts`
and rendered by `components/ui/PlaceholderImage.tsx`. The slots currently use **licensed Unsplash stock
photographs as background/atmosphere only** (loaded via `next/image`; `images.unsplash.com` is allowed in
`next.config.mjs`). They do not depict OSSF staff, clients or sites and must never be captioned as such.
Source, photographer and licence for each photo: `docs/image-sources.md`. To use approved OSSF photography,
drop files in `public/images/<folder>/` and update the slot's `src`/`alt`/`credit` — see `public/images/README.md`.

## Logo

The official OSSF logo (approved by the client, 26-09-2026) is in `public/brand/`:

| File | What |
| --- | --- |
| `ossf-logo-original.png` | The supplied file, 500×500 on the brand blue (`#3E5F79`) |
| `ossf-mark.png` | The square mark, transparent background |
| `ossf-wordmark.png` | "OM SHIV / SECURITY FORCE", transparent background |
| `ossf-logo-stacked.png` | Mark + name + tagline, transparent background |

The transparent files were cut from the original with only the blue background removed (no redrawing).
Where it is used:

| What | File |
| --- | --- |
| Header (mark + name) and footer (stacked logo) | `components/ui/Logo.tsx` |
| Favicon | `app/icon.svg` (the mark, embedded as PNG) |
| Apple touch icon | `app/apple-icon.png` (mark on brand blue, 180×180) |
| Social share image | `public/images/og-image.png` (stacked logo on brand blue, 1200×630) |

The source file is only 500px, so the header logo is slightly soft on high-density screens. For the
sharpest result, re-export the mark and name from the design file at 2–3× size (or as SVG) with a
transparent background, replace the files above, and update the sizes in `Logo.tsx`.

## Request a Quote form

The form (`components/forms/RequestQuoteForm.tsx`) works by email: after checking the fields,
**Email this request** opens the visitor's email app with the request filled in and addressed to
`info@omshivsecurityforce.in`; the visitor presses Send. A confirmation panel then shows a summary,
an "Open email again" button, the phone number and an "Edit details" link. The website itself stores
and sends nothing.

To switch to online submission later (e.g. Formspree, Resend or an API route), implement the call in
`submitQuote` in `lib/utils/submit-quote.ts` (return `{ ok: true, delivered: true }` on success), set
`QUOTE_SUBMISSION_CONNECTED = true`, and update the Privacy Policy — no other component needs to change.

## SEO

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter metadata via
  `buildMetadata()` in `lib/utils/seo.ts`; site-wide defaults and LocalBusiness JSON-LD in
  `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Icons: `app/icon.svg` (favicon) and `app/apple-icon.png`; share image `public/images/og-image.png`.

