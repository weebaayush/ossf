# Gallery image prompts

Suggested prompts for the 15 gallery slots on `/gallery` (`lib/data/gallery.ts`).
Generate each image, save it in `public/images/gallery/` with the file name
shown, then set that slot's `src` to `"/images/gallery/<file name>"`.

**Use the same style line on every prompt** so the gallery looks consistent:

> Photorealistic, natural daylight, bright and clean, Indian setting (Thane / Mumbai), 4:3 landscape, 1600×1200. Plain uniforms with no logos, badges with readable text, brand names or written words anywhere in the image. No real or recognisable people.

**Honesty note:** these images are AI-generated, so the gallery shows a note
saying the images are illustrative (`galleryIsIllustrative` in
`lib/data/gallery.ts`). Don't caption them as real OSSF staff, clients or sites.
When real OSSF photos are available, replace them and set
`galleryIsIllustrative` to `false`.

| # | File name | Category | What to generate |
| --- | --- | --- | --- |
| 01 | `01-security-guard-training.webp` | security | **Security guard training session** — Indoor training room; 6–8 Indian security guards in navy-blue uniform shirts, dark trousers and caps seated at desks, an instructor pointing at a whiteboard with simple diagrams (no text). |
| 02 | `02-security-grooming-inspection.webp` | security | **Uniform and grooming inspection** — Outdoor courtyard; a supervisor walking along a straight line of Indian security guards in identical navy-blue uniforms and polished black shoes, checking grooming and posture. |
| 03 | `03-security-drill.webp` | security | **Security drill and discipline** — Early morning open ground; a squad of Indian security guards in navy-blue uniforms standing in formation at attention during a discipline drill. |
| 04 | `04-fire-safety-training.webp` | fire-safety | **Fire extinguisher training** — Open area beside a building; a trainer in a safety vest demonstrating a red fire extinguisher on a small controlled fire tray to a group of security staff watching. |
| 05 | `05-fire-mock-drill.webp` | fire-safety | **Fire safety mock drill** — Residential or office building forecourt; staff gathered at an assembly point during a fire safety mock drill, one person in a reflective vest guiding them. |
| 06 | `06-housekeeping-office.webp` | housekeeping | **Office housekeeping** — Bright modern office; housekeeping staff in light-blue or grey uniforms wiping glass partitions and desks, a cleaning trolley nearby. |
| 07 | `07-housekeeping-deep-cleaning.webp` | housekeeping | **Deep cleaning** — Long office or hospital corridor; housekeeping worker operating a floor-scrubbing machine on a shiny floor, a second worker placing a wet-floor sign with a pictogram only. |
| 08 | `08-gardener-landscaping.webp` | gardening | **Garden maintenance** — Green landscaped garden of an Indian residential society; gardener in a simple uniform and cap trimming hedges with shears. |
| 09 | `09-gardener-watering.webp` | gardening | **Landscape upkeep** — Building compound with potted plants and lawn; gardener watering plants with a hose in morning light. |
| 10 | `10-driver-valet.webp` | drivers | **Valet driver service** — Hotel porch entrance; uniformed valet driver in a dark blazer opening the rear door of a white sedan for a guest. |
| 11 | `11-driver-corporate.webp` | drivers | **Corporate driver** — Office building drop-off area; professional driver in a white shirt and dark trousers standing beside a clean company car, hands folded. |
| 12 | `12-electrician.webp` | technical | **Electrician at work** — Electrical room; electrician wearing a helmet and insulated gloves testing an electrical panel with a multimeter. |
| 13 | `13-plumber.webp` | technical | **Plumbing maintenance** — Clean bathroom or pantry; plumber in work clothes kneeling and fixing pipes under a sink with a wrench. |
| 14 | `14-maintenance-technician.webp` | technical | **Maintenance technician** — Office or rooftop; technician in a uniform servicing a wall-mounted air-conditioning unit on a ladder. |
| 15 | `15-non-technical-staff.webp` | non-technical | **Office and facility support staff** — Corporate office; office support staff in neat uniforms carrying files, arranging chairs in a meeting room and serving water. |

**Tips**

- Keep uniforms the same colour across all security images so they look like one company.
- Check every image for warped hands, faces or extra fingers before using it.
- Export at 1600×1200 and convert to `.webp` (any online converter works) to keep the site fast.
