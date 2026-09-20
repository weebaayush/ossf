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

## Content that needs client confirmation

Several facts in the source company material are incomplete or contradictory. These are marked
`[CLIENT CONFIRMATION REQUIRED]` directly in the UI (and as `// TODO(client):` comments in the
data files) rather than guessed:

- **Founding year** — company material states both "established 2017" and "Trusted Since 2002".
  Neither is used until the client confirms which is correct.
- **Client names / logos** — the company profile references 100+ clients, but no approved public
  list of names/logos was supplied. The `/clients` page and homepage teaser use placeholder slots.
- **Registration / license numbers** — PSARA, GST, UDYAM, PF/EPF, ESIC, Professional Tax and
  Shops & Establishment are listed as compliance *categories* only; no numbers are published
  until the client explicitly approves showing them.
- **Business hours** — office hours are shown as a placeholder on the Contact page.
- **Google Maps embed** — the Contact page has a placeholder map slot; needs the real address/pin.
- **Phone / email / registered office address** — placeholder values pulled from the reference
  brief are marked clearly; replace with the verified values in `lib/utils/site-config.ts`.

Search the codebase for `CLIENT CONFIRMATION REQUIRED` to find every instance.

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
