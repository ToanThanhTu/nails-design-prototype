# Lumi Nails – design prototypes

Three website directions for a freelance nail artist, in one Vite + React app.
A top bar switches between them:

| | Design | Feel |
|---|---|---|
| A | Gallery Minimal | White, black type, cherry-red accent. Lets the photos lead. |
| B | Candy Pop | Pink, chunky type, outlines and tilted cards. Playful nail art. |
| C | Soft Luxe | Nude and mauve, serif type, arch-shaped photos. Calm and premium. |

Each design has a home section, about + services, a filterable gallery and a booking form.
Link to a specific one with `?design=minimal`, `?design=candy` or `?design=luxe`.

## Run it

```bash
npm install
npm run dev
```

## Where things live

- `src/shared/content.ts` – studio details, services, prices and gallery items. **Fill in the `[PLACEHOLDERS]` here once**; all three designs read from it.
- `src/shared/hooks.ts` – gallery filter and booking form state. The form is prototype-only: `onSubmit` just shows a thank-you. Post `values` to a form service or API there to receive real requests.
- `src/designs/<Name>/` – one component + CSS module per design.
- `src/App.tsx` – the design switcher.

## Photos

Gallery tiles are coloured placeholders. Add images under `public/gallery/` and set `image: 'gallery/your-photo.jpg'` on items in `content.ts`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
Enable it once in the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
