# Multi-Tenant Dental Clinic Template

Production-grade static Next.js template for dental clinics. The site is content-driven, SEO-ready, and designed so a new clinic can be reskinned by changing configuration and one theme CSS file.

## Stack

- Next.js App Router with `output: "export"`
- TypeScript
- Vanilla CSS custom properties
- GSAP + ScrollTrigger wrappers
- Zod-ready data boundary through typed API/service layers

## Structure

- `src/app`: routes only. Pages fetch through services and export metadata.
- `src/views`: page-level UI composition.
- `src/components`: reusable layout, UI, and animation components.
- `src/services`: business layer consumed by views and pages.
- `src/api`: data-access layer. API functions return promises.
- `src/api/http/httpClient.ts`: switches between local mock data and live fetch via env flags.
- `src/data`: demo content shaped like future API responses.
- `src/database`: local DB simulation that reads demo data.
- `src/config`: brand, SEO, and environment config.
- `src/styles`: global CSS, tokens, and swappable themes.

## Re-theme for a New Clinic

1. Update `src/config/brand.config.ts` with clinic name, contact details, address, socials, and `themeKey`.
2. Create or edit one file in `src/styles/themes/`, for example `theme-clinicA.css`.
3. Keep the selector aligned with the configured theme key:

```css
html[data-theme="clinicA"] {
  --color-primary: #126b5d;
  --color-accent: #c77b3f;
}
```

No route or component code needs to change for a visual reskin.

## Content

Edit demo content in:

- `src/data/services.ts`
- `src/data/blog.ts`
- `src/data/shop.ts`
- `src/data/faqs.ts`
- `src/data/slots.ts`
- `src/data/home.ts`

Views and routes do not import these files directly. Data moves through:

`data -> database -> api -> services -> views/pages`

## Live API Switch

By default the template serves local mock data.

Set these env vars when a real API is ready:

```bash
NEXT_PUBLIC_USE_API=true
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

The service and view layers should not need changes when the API response shape matches the local data types.

## Commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
```

`npm run build` writes the static export to `out/`.
