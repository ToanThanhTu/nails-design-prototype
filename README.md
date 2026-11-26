# Lumi Nails – design prototypes

Three website directions for a freelance nail artist, in one Vite + React app.
A top bar switches between them:

| | Design | Feel |
|---|---|---|
| A | Gallery Minimal | White, black type, cherry-red accent. Lets the photos lead. |
| B | Candy Pop | Pink, chunky type, outlines and tilted cards. Playful nail art. |
| C | Soft Luxe | Nude and mauve, serif type, arch-shaped photos. Calm and premium. **Chosen direction: full multi-page site.** |

A and B are one-page concepts. Link to one with `?design=minimal` or `?design=candy`.

### Soft Luxe pages

| Page | Link | Sections |
|---|---|---|
| Home | `?design=luxe` | Hero, statement, signature treatments, the experience, meet the artist, recent work, testimonials, booking band |
| About | `?design=luxe&page=about` | Story, philosophy, the studio, credentials |
| Services | `?design=luxe&page=services` | Full price menu by category, booking policies |
| Gallery | `?design=luxe&page=gallery` | Filterable portfolio, Instagram band |
| Contact | `?design=luxe&page=contact` | Booking request form, studio details and hours, how booking works, FAQ |

The Soft Luxe pages are design-only: the form does not send anywhere yet.

## Run it

```bash
npm install
npm run dev
```

## Where things live

- `src/shared/content.ts` – studio details (name, city, email, hours...). **Fill in the `[PLACEHOLDERS]` here once**; all three designs read from it.
- `src/shared/hooks.ts` – gallery filter and booking form state. The form is prototype-only: `onSubmit` just shows a thank-you. Post `values` to a form service or API there to receive real requests.
- `src/designs/<Name>/` – one component + CSS module per design.
- `src/designs/SoftLuxe/` – the full site: `content.ts` (menu, prices, gallery, FAQ, hours, policies), `parts.tsx` (header, footer, shared blocks), `pages/` (one file per page) and `SoftLuxe.module.css`.
- `src/App.tsx` – the design switcher.

## Photos

Gallery tiles are coloured placeholders. Add images under `public/gallery/` and set `image: 'gallery/your-photo.jpg'` on items in `content.ts` (for Soft Luxe: `works` in `src/designs/SoftLuxe/content.ts`).

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
Enable it once in the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
