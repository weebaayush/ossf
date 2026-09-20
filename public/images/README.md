# Image placeholders

No real OSSF photography was supplied, so the site currently renders labelled
placeholder boxes (see `components/ui/PlaceholderImage.tsx`) instead of actual
photos. This keeps layout, aspect ratios and responsive behaviour final while
making it obvious, in the UI itself, exactly which slots still need real
images.

Suggested folders for real photography, once available:

- `hero/` — full-bleed hero background (security personnel on site, guarded
  premises, etc.)
- `about/` — team / operations imagery for the About page and homepage About
  section
- `services/` — supporting imagery per service category (optional)
- `industries/` — supporting imagery per sector (optional)
- `clients/` — approved client logos only, once explicitly cleared for
  public display

To swap a placeholder for a real photo, replace the `<PlaceholderImage />`
usage with `next/image`, e.g.:

```tsx
import Image from "next/image";

<Image
  src="/images/hero/site-01.jpg"
  alt="OSSF security personnel on patrol at a client site"
  fill
  className="object-cover"
  priority
/>
```

`og-image.svg` is a simple generated placeholder for social share previews —
replace with a real branded 1200×630 image when available.
