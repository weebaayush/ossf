# Images

No OSSF photography has been supplied yet. The photo slots currently use
**licensed Unsplash stock photographs as background/atmosphere only** — they do
not show OSSF staff, clients or sites. Sources, photographers and licence
details for every photo are in `docs/image-sources.md` (and the `credit` field
of each slot in `lib/data/images.ts`). A slot with no `src` falls back to a
labelled placeholder panel (`components/ui/PlaceholderImage.tsx`).

Suggested folders for real photography, once available:

- `hero/` — full-bleed hero background (security personnel on site, guarded
  premises, etc.)
- `about/` — team / operations imagery for the About page and homepage About
  section
- `services/` — supporting imagery per service category (optional)
- `industries/` — supporting imagery per sector (optional)
- `clients/` — approved client logos only, once explicitly cleared for
  public display

Every photography slot is listed in `lib/data/images.ts`. To replace a
stock photo with a real, client-approved OSSF photo:

1. Add the file to the matching folder here, e.g. `hero/site-01.jpg`.
2. In `lib/data/images.ts`, set that slot's `src` (e.g. `"/images/hero/site-01.jpg"`)
   and update its `alt` (describe what the photo actually shows) and `credit`.

`PlaceholderImage` then renders the photo through `next/image` in the same
frame (same aspect ratio and cropping) — no layout or component changes.
Only use photos the client has approved; do not use stock photos presented
as OSSF personnel.

`og-image.png` (1200×630) is the social share image used by every page; it is
rendered from `og-image.svg`. Replace the PNG with a branded, photo-based
version when available (keep the same file name and size).
