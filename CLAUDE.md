# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# azraelsec.dev — Claude Code Context

## Commands

```sh
npm install          # install deps
npm run dev          # dev server at localhost:4321
npm run build        # production build to ./dist/
npm run preview      # preview production build locally
npm run astro check  # type-check .astro files
```

## Architecture

- **Framework:** Astro 6, ESM-only (`"type": "module"`), Node >=22.12.0
- **Routing:** File-based — `src/pages/*.astro` or `src/pages/*.md` map directly to routes
- **Config:** `astro.config.mjs` — extend here to add integrations (Tailwind, MDX, etc.)
- **Static assets:** `public/` — served at root, no processing
- **Components:** `src/components/` (conventional, not yet created)
- **Content Collections:** `src/content/` (not yet created — use for research writeups)

Astro's island architecture means JS is zero by default. Client-side interactivity requires explicit `client:*` directives on components.

## Identity
This is the Azrael Security personal site. Brand: offensive security engineering and vulnerability research. Tagline: "Below the abstraction."

## Stack
- Astro (static output, Content Collections for research writeups)
- No React unless explicitly added
- Tailwind CSS (add via `astro add tailwind` when ready)
- TypeScript strict mode

## Brand
- Primary: #8B6FEF
- Accent: #E6B450
- Background: #0D0F1A
- Primary text: #E6EAF0
- Secondary text: #8B93A6
- Heading font: Inter
- Monospace font: JetBrains Mono
- Logo concept: gate/bracket mark (two nested brackets, central vertical bar)

## Pages (locked scope)
- `/` — Home/Hero: Red Team Infrastructure + Vulnerability Research. Veil as proof point.
- `/projects` — Veil, NightForge, security-research
- `/research` — Container Boundary Research, Red Team Infrastructure
- `/about` — Azrael Security founding purpose, honest current state
- `/infrastructure` — Veil architecture diagram, node breakdown

## Rules
- No placeholder content — if copy isn't written yet, leave a clear TODO comment
- No stock photos, no generic security imagery
- CSS methodology: mobile-first. Primary viewing target: desktop.
- All commits follow conventional commits: feat: fix: docs: refactor:
- Do not push to main directly — Darrius reviews before pushing
