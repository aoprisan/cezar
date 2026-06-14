# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page static memorial website for Prof. univ. dr. ing. Cezar Oprișan (1955–2018),
built with React + TypeScript + Vite and deployed as a static site to GitHub Pages at
https://aoprisan.github.io/cezar/. All user-facing copy is in Romanian.

## Commands

```bash
npm install      # install dependencies (Node 18+)
npm run dev      # local dev server with HMR
npm run build    # type-check (tsc -b) then produce dist/ for production
npm run preview  # serve the production build locally
npm run typecheck # tsc -b --noEmit (type-check only, no emit)
```

There is no test suite, linter, or test runner configured. `npm run build` runs `tsc -b`
first, so a type error fails the build.

## Architecture

- **Content is fully decoupled from presentation.** `src/data/content.ts` is the single
  source of truth for every piece of text, date, stat, tribute, and source link, exported
  as typed constants (`profile`, `hero`, `biography`, `timeline`, etc.). Components import
  these objects and render them. To change site copy, edit `content.ts` only — do not
  hardcode strings in components.
- **Composition:** `src/main.tsx` mounts `App`, which renders a fixed sequence of section
  components from `src/components/` (`Hero`, `Biography`, `Timeline`, `Research`,
  `Tributes`, `Footer`). Each component is a presentational function reading from
  `content.ts`. There is no router, state management, or data fetching.
- **Styling** is a single global stylesheet, `src/styles/global.css`, using CSS custom
  properties (academic navy/maroon/parchment palette, serif display/body fonts) and
  `className` strings on components. No CSS modules or CSS-in-JS.

## Deployment-critical details

- **`base` in `vite.config.ts` must match the repo name** (`/cezar/`). Asset URLs are
  built from `import.meta.env.BASE_URL` (see `Hero.tsx` for the portrait). If the repo is
  renamed, update `base` or all asset paths break on GitHub Pages.
- **Static assets** go in `public/` and are referenced via `import.meta.env.BASE_URL + filename`.
  The portrait is configured by the `portrait` field in `content.ts`; `Hero` falls back to
  rendered initials if the image fails to load.
- **Deploy is automatic** via `.github/workflows/deploy.yml` on push to `main` (also the
  `claude/cezar-oprisan-memorial-tjwnjy` branch). One-time setup: GitHub repo
  Settings → Pages → Source: **GitHub Actions**.
