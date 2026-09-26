# Image sources & licences

Every external photograph used on the site, where it came from, and the licence
it is used under. The same data lives next to each slot in `lib/data/images.ts`
(`credit` field) — keep both in sync.

**These are licensed stock photographs used as background/atmosphere only.**
They do not show OSSF employees, guards, offices, clients, sites or projects,
and must not be captioned or described as such.

## Licence

All photos below are from [Unsplash](https://unsplash.com) under the
[Unsplash License](https://unsplash.com/license):

- Free to use for commercial and non-commercial purposes.
- No permission or attribution required (credit is appreciated, not mandatory).
- Not allowed: selling unaltered copies, or compiling photos to build a competing
  image service.

Each photo was checked when selected (September 2026) to be:

- a standard Unsplash License photo (not Unsplash+ / premium);
- a real camera photograph (camera EXIF recorded by Unsplash), not AI-generated;
- free of visible third-party company logos and watermarks in the frame as cropped.

Before launch, re-open each page link below to confirm the photo is still
available under the same licence.

## Photos in use

| Slot (`lib/data/images.ts`) | Used on | Photo | Photographer | Crop applied |
| --- | --- | --- | --- | --- |
| `homeHero` | Home — hero background (decorative, `alt=""`) | [Modern dark office building (Berlin, blue hour)](https://unsplash.com/photos/modern-dark-office-building-with-many-windows-JUdN1-BssnY) | [Mariia Filonenko](https://unsplash.com/@fsmari) | Top cropped (`rect=0,560,4926,2724`) to remove rooftop flags |
| `homeAbout` | Home — About section | [Dark modern hallway with reflective floor](https://unsplash.com/photos/dark-modern-hallway-with-reflective-floor-and-windows-G8EdTmFZ138) | [Igor Saikin](https://unsplash.com/@alteredpoint) | — |
| `homeFlagshipService` | Home — featured "Security Services" card | [Person in reflective jacket outside a building at night](https://unsplash.com/photos/a-man-standing-on-a-sidewalk-in-front-of-a-building-wQ4Ae4uxfvM) | [Ben Wicks](https://unsplash.com/@profwicks) | — |
| `aboutHero` | About — page header (desktop) | [Fenced industrial facility at night](https://unsplash.com/photos/a-street-at-night-with-a-fence-and-a-building-in-the-background-nhxNv2xfatw) | [Patrick von der Wehd](https://unsplash.com/@patrick_von_der_wehd) | Right edge cropped (`rect=0,0,3800,2832`) to exclude a vehicle with third-party lettering |
| `aboutOperations` | About — "Who We Are" section | [Ceiling surveillance camera](https://unsplash.com/photos/white-security-camera-B0--kMa8BgU) | [Alex Knight](https://unsplash.com/@agk42) | — |
| `servicesHero` | Services — page header (desktop) | [Two grey CCTV cameras](https://unsplash.com/photos/two-grey-cctv-cameras-BW0d0IllW8E) | [Miłosz Klinowski](https://unsplash.com/@speedoshots) | — |

## Hosting note

The photos are currently loaded from Unsplash's CDN (`images.unsplash.com`)
and optimised by `next/image`. For a fully self-contained deployment, download
each photo from its page above, save it under `public/images/<folder>/`, and
point the slot's `src` at the local path (keeping any crop by cropping the file
itself). Once real, client-approved OSSF photography exists, replace these
stock photos slot by slot.

## Client logos

Client logos are each client's **official logo, taken from the client's own
official website** (September 2026), identified by matching them against the
client-showcase page of the OSSF company profile. They appear on the homepage
"Trusted By" section and in the filterable client grid on `/clients`. SVG
logos are byte-identical copies; raster logos were flattened onto white and
saved as small WebP files (no redrawing or recolouring). Six clients with no
official source use the logo from the company profile instead (listed below
the table).

| Client | File (`public/images/clients/`) | Official source |
| --- | --- | --- |
| Lodha | `lodha.svg` | https://www.lodhagroup.com (site header). Lodha's current wordmark — the company profile shows an older Lodha logo. |
| Kalpataru | `kalpataru.svg` | https://www.kalpataru.com (inline header SVG) |
| KIMS Hospitals | `kims-hospitals.webp` | https://www.kimshospitals.com (site header logo, resized to 280×120) |
| Runwal Realty | `runwal-realty.svg` | https://runwalrealty.com (`logo.svg`, coordinates rounded to 1 decimal) |
| Marathon Realty Advisors | `marathon-realty-advisors.webp` | https://www.marathonra.com (site logo, resized to 280×131) |
| B and R Bridge & Roof Co. (India) Ltd. | `b-and-r-bridge-roof.webp` | https://www.bridgeroof.co.in (site logo, resized to 120×150) |
| Puraniks | `puraniks.webp` | https://puranikbuilders.com (site logo, trimmed, 280×54) |
| Roma Builders & Promoters | `roma-builders.webp` | https://romabuilders.in (site logo, trimmed, 137×140) |
| Sudhir | `sudhir.webp` | https://www.sudhirpower.com (Sudhir Power Ltd site logo, 346×76). The company profile shows an older "sudhir — Powering the Nation" logo; the current official logo reads "Powering The Future". OSSF should confirm this is the same client. |
| The Blue Roof Club | `the-blue-roof-club.webp` | The Blue Roof Club official website (site logo, 203×140). No logo for this client in the company profile — **CLIENT CONFIRMATION REQUIRED** that it is the same organisation. |
| New Horizon School | `new-horizon-school.webp` | New Horizon Group of Schools official website (Thane; site logo, 142×140). No logo for this client in the company profile — **CLIENT CONFIRMATION REQUIRED** that it is the same school/branch. |
| Systematic Group of Companies | `systematic-group.webp` | https://systematicltd.com/wp-content/uploads/2025/08/systematic-logo-new.png (URL supplied by the site owner). The logo is white-on-transparent, so it was placed on a navy (`#101B2D`) tile with 14px padding, 236×78. |
| Woodstock School | `woodstock-school.webp` | https://www.woodstockschool.in/wp-content/uploads/2017/05/logo_250-150x150.png (URL supplied by the site owner; trimmed, flattened onto white, 141×141) |
| LA Homes Estates | `la-homes-estates.webp` | https://lahomesrealty.in/wp-content/uploads/2022/05/La-Homes-Logo-Horizontol.png (URL supplied by the site owner; resized to 426×141, flattened onto white) |
| Ekta Realtors Builders & Developers | `ekta-world.webp` | https://www.ektaworld.com/images/new-logo-png.png (URL supplied by the site owner; resized to 412×133, flattened onto white). The company profile spells the name "Ehta"; the site owner confirmed it is Ekta. |

**Logos taken from the company profile** (no official website or logo file
could be found): Sharma Realty (`sharma-realty.webp`), Sairaj Builders And
Developers (`sairaj-builders.webp`), Sai Balaji Enterprises
(`sai-balaji-enterprises.webp`), Shree Balaji Properties and Builders
(`shree-balaji-properties.webp`), Kaya Enterprises (`kaya-enterprises.webp`),
Gaurav Promoters and Builder (`gaurav-promoters.webp`). These are the crops
from the client-showcase page of the OSSF company profile, trimmed, enlarged 2×
and lightly sharpened — not redrawn or recoloured. They are lower resolution
than the official logos. **CLIENT CONFIRMATION REQUIRED:** replace each with
the client's original logo file when OSSF obtains it.

**Shown as name cards:** Waldorf (the company profile shows a photo of the
storefront, not a logo), Vee Gee & Associates, Venus Nirvana. To add a logo, ask OSSF for the client's original logo file
(SVG or high-resolution PNG), put it in `public/images/clients/` and add a
`logo` field in `lib/data/clients.ts`.

**Unused files:** the `*.png` files in `public/images/clients/` are the raw
crops from the company profile. The site uses the cleaned `.webp` versions
instead, so the `.png` files can be deleted.

**Trademarks and permission:** these logos are the trademarks of their
respective owners and are shown only to identify organisations OSSF provides
services to. Before launch, OSSF should confirm each client is comfortable with
its logo appearing on the OSSF website. To remove a logo, delete the `logo`
field for that client in `lib/data/clients.ts` (it then shows as a name card).
