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

Photos were replaced on 06-10-2026 with brighter, daytime images at the client's
request. Each was checked when selected to be a standard Unsplash License photo
(not Unsplash+ / premium) with no visible third-party company logos in frame.
Slots are in `lib/data/images.ts` (`imageSlots`, and `serviceImages` keyed by
service slug). Before launch, re-open each page link below to confirm the photo
is still available under the same licence.

## Photos in use

| Slot (`lib/data/images.ts`) | Used on | Photo | Photographer |
| --- | --- | --- | --- |
| `homeHero` | Home — hero background (decorative, `alt=""`) | [Low-angle glass office building, blue sky](https://unsplash.com/photos/low-angle-photo-of-curtain-wall-building-hN3t9Wj-bNs) | [JESHOOTS.COM](https://unsplash.com/@jeshoots) |
| `homeAbout` | Home — About section | [Two professionals shaking hands](https://unsplash.com/photos/two-men-facing-each-other-while-shake-hands-and-smiling-NbtIDoFKGO8) | [Sebastian Herrmann](https://unsplash.com/@officestock) |
| `homeFlagshipService` | Home — "Security Services" card | [Security guard in hi-vis SECURITY vest, daytime](https://unsplash.com/photos/man-in-green-and-blue-jacket-walking-on-street-during-daytime-XDBRGiRYE-I) | [Obi](https://unsplash.com/@obionyeador) |
| `aboutHero` | About — page header | [White residential high-rise](https://unsplash.com/photos/white-high-rise-building-during-daytime-0_e-H1eGf_A) | [Dylan Mullins](https://unsplash.com/@dylanmullins) |
| `aboutOperations` | About — "Who We Are" | [Bright office lobby with reception desk](https://unsplash.com/photos/modern-lobby-with-reception-desk-and-seating-area-Ypv0MH4izf8) | [Aalo Lens](https://unsplash.com/@aalolens) |
| `event-and-exhibition-security` | Services — Event Security | [Security guard at an outdoor event](https://unsplash.com/photos/security-guard-watches-over-a-gathering-under-a-tent-YQ9aFeawqeo) | [Avesta](https://unsplash.com/@avesta1) |
| `servicesHero` | Services — page header | [Office tower behind green trees](https://unsplash.com/photos/a-tall-building-with-trees-in-front-of-it-He5EjaA71zQ) | [Patrick Robert Doyle](https://unsplash.com/@teapowered) |
| `security-services` | Services — Security Services | [Uniformed guard beside a guard booth](https://unsplash.com/photos/guard-in-uniform-stands-by-a-small-booth-sAuFAr8BBZo) | [Alhasan Husni](https://unsplash.com/@hsnshutr) |
| `housekeeping-and-soft-services` | Services — Housekeeping | [Staff mopping a bright corridor](https://unsplash.com/photos/person-mopping-clinical-hallway-floor-0FTI9ceTUOc) | [Toon Lambrechts](https://unsplash.com/@mycellhub) |
| `valet-driver-services` | Services — Valet Drivers | [Car key being handed over](https://unsplash.com/photos/hands-exchanging-a-car-key-against-a-light-background-iDSsOlqFa8w) | [yahdi yasya](https://unsplash.com/@yayi1077) |
| `technical-and-non-technical-manpower` | Services — Manpower | [Workers in hard hats and safety vests](https://unsplash.com/photos/man-in-orange-vest-wearing-yellow-hard-hat-7TR0TGS7zqg) | [Mufid Majnun](https://unsplash.com/@mufidpwt) |
| `surveillance-and-risk-assessment` | Services — Surveillance | [Rows of CCTV cameras on a wall](https://unsplash.com/photos/assorted-color-security-cameras-LfaN1gswV5c) | [Lianhao Qu](https://unsplash.com/@lianhao) |

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
| Lodha | `lodha.webp` | Supplied by OSSF (09-11-2026): Lodha's current logo, grey stripes with gold wordmark. Trimmed and converted to WebP. |
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

**Trademarks and permission:** these logos are the trademarks of their
respective owners and are shown only to identify organisations OSSF provides
services to. Before launch, OSSF should confirm each client is comfortable with
its logo appearing on the OSSF website. To remove a logo, delete the `logo`
field for that client in `lib/data/clients.ts` (it then shows as a name card).

## Client logos from the OSSF presentation (added 09-11-2026)

24 logos were taken from the client slides (13–17) of `Om_Shiv_Security_Force_Presentation.pptx`,
supplied by OSSF, then trimmed and converted to WebP: Venus Nirvana, Vee Gee & Associates,
Waldorf Designs (cropped from a storefront photo), House of Hiranandani, Insignia, Agile Commercial
Real Estate, Squarefeet Group, Kalpataru Immensa, Omkareshwar Properties, Magnum Group, Charms Group
& RRC, Anant Square, Laukik Lifestyles, SBSL, Sai Tapaswi Builders, Luxora Realty, Eternia
Residences, Skycon, Clayton Homes, Balaji Annex, Siddhivinayak Builders & Developers, Balaji Builders
& Developers, GLEG and Petrox.

The presentation's image captions show several were found by web image search and may belong to an
unrelated company with the same name (for example Clayton Homes, Denver; Petrox Oy, Finland; Skycon,
Pasig; Waldorf Designs, Kozhikode). OSSF should confirm each one, or supply the client's real logo.

## AI-generated photos (added 02-11-2026)

All files in `public/images/gallery/` are AI-generated and illustrative; they do not show real OSSF
staff, clients or sites. The gallery page says so (`galleryIsIllustrative` in `lib/data/gallery.ts`).

| Files | Source |
| --- | --- |
| `01`, `07`, `08`, `12` | Generated with Gamma (prompts in `docs/gallery-prompts.md` style) |
| `02`–`06` | Generated with Canva; download pending (slots hidden until added) |
| `16`–`21` | Client-supplied set, `OSSF-AI-Generated-Photos.pdf`; Gemini watermark cropped from `18`–`20` |
| `26` | Generated with Canva (09-11-2026) |
| `public/images/hero/home-hero-building.webp` | Client-supplied AI image (09-11-2026), building signage removed by OSSF; bottom strip trimmed to remove the Gemini watermark |
| `23`–`25`, `public/images/services/services-hero-building.webp` | Cropped from client-supplied AI poster images (WhatsApp, 09-11-2026). Crops leave out the posters' made-up shield logo, banners and the unverified "20 guards deployed" claim |

Several of these are also used on the homepage, About and Services pages via `lib/data/images.ts`.
