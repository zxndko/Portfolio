# Chompoonuch Tubtimsri — Portfolio

Next.js (App Router) + React + TypeScript + Tailwind CSS + Lucide. Fonts are self-hosted (Bricolage Grotesque, Instrument Sans).

    npm install
    npm run dev     # http://localhost:3000
    npm run build && npm start

All content is in `lib/data.ts`. Set `profile.linkedin` there to turn the "coming soon" text into a real link.

## Motion (all off or simplified with prefers-reduced-motion)
- Hero name: letters resolve on load; with a mouse, weight and width react to the pointer (`components/HeroName.tsx`).
- Blueprint grid lights up around the cursor; scroll progress bar (`components/PageEffects.tsx`).
- Orbit rings in the hero, skills ribbon (pauses on hover), project wireframe tilt and scan line.
- Scroll reveals use `data-reveal` and only hide content when JavaScript is running.
- "Drag to resize" layout demo in About uses CSS container queries (`components/ResizeDemo.tsx`).

Project visuals are a labelled wireframe illustration (PawPlan) and a text list (GPOS). No screenshots or metrics are invented.

## Colours (light theme)
Background `#EEF7FB`, ink `#15123B`, muted text `#4A4870`, accents `#FF5C93` (pink) and `#8EF0FF` (ice blue).
Pink and ice blue are too light for small text on this background, so text and focus rings use the darker
`#D6256B` and `#00778C` (`signalText` / `ionText` in `tailwind.config.ts`, `--signal-text` / `--ion-text` in `app/globals.css`).
