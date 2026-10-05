# Arancini — Casa Arancini

React implementation of approved visual direction 01. Greek restaurant website with four separate pages, responsive from 320px upwards.

Public proposal: https://chanturia.github.io/arancini-restaurant/

## Run locally

Requires Node.js 22.18+ or 24 LTS.

```sh
npm ci
npm run dev -- --port 5174 --strictPort
```

Open http://127.0.0.1:5174. The development server listens only on this computer.

```sh
npm run check
npm run preview
```

`check` runs ESLint, strict TypeScript, the production build and Node's built-in regression checks. `preview` serves the production output after a build.

## Stack and structure

- React + TypeScript + Vite; Tailwind CSS 4 for tokens/utilities, component CSS for the approved art direction.
- Framer Motion with `LazyMotion`, compositor-friendly entrance/hover transitions and reduced-motion support.
- Local Greek/Latin Noto Serif and Noto Sans fonts; Caveat for Italian decorative annotations.
- React Router handles `/` (Home), `/menu`, `/experience` and `/contact`, with active navigation links, browser history, scroll restoration and a missing-page view. Each page has its own document title and description.
- Native HTML dialog for mobile navigation, native details for FAQs, category filter with shareable `/menu?menu=pizza` URLs. Bookmarks to the previous one-page sections redirect to the relevant page.
- `src/content.ts`: contact information, selected dishes, menu categories, FAQs.
- `src/components/`: navigation, branding, animation and menu components.
- `src/pages/`: page content. `src/App.tsx`: routes and shared layout. `src/styles.css`: responsive visual design.

The call, directions, social and delivery links use real destinations. There is no fictitious booking submission, checkout, fabricated review score or unverified opening-hours schedule. No cookies, analytics, third-party font requests or embedded maps are used.

## Photographs and publication

All displayed food and restaurant photos are actual source photos, not the generated concept. Source provenance is in [ASSETS.md](ASSETS.md). The demo preserves the existing orange ring emblem; the accompanying wordmark follows the approved proposal.

Before public launch the owner should approve photography rights and the final logo master, provide the current dine-in menu/prices and opening hours, and approve the text. Current dishes are a selection from Wolt, checked on 2026-10-05, with a link to its full live catalogue. Wolt delivery prices are deliberately not presented as dine-in prices.

The public proposal retains `noindex, nofollow` until the owner approves the final business website. This is an indexing preference, not access control: the GitHub Pages site and repository are public. No message has been sent to the restaurant.

## GitHub Pages

Pushes to `main` run `.github/workflows/pages.yml`: install from the lockfile, lint, typecheck, build, test, then publish `dist` through GitHub Actions. A failed check prevents deployment. No personal access token or additional secret is required by the workflow.

The workflow reads the Pages base path automatically. Vite, the router and public image URLs use that path. `scripts/static-pages.mjs` writes HTML entry files for `/menu/`, `/experience/` and `/contact/`, with page-specific metadata, so direct links and refreshes work without hash routing. Unknown paths show the app's recovery page and retain HTTP 404. Page content is rendered by React in the browser.

To test the deployed path locally in PowerShell:

```powershell
$env:VITE_BASE_PATH = '/arancini-restaurant/'
npm run check
npm run preview
# Open http://127.0.0.1:4173/arancini-restaurant/
```

Unset `VITE_BASE_PATH` for the normal root-path local build. Original concepts, research, prompts and local QA screenshots remain in the ignored `design/` directory; the repository contains the application and its required assets.
