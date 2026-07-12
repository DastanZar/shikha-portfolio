# Dr. Shikha Soni — Clinical Psychologist Portfolio

Production portfolio for **Dr. Shikha Soni, Ph.D.** — RCI Licensed Clinical
Psychologist (Bengaluru & Online). Built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router) — SEO-friendly, easy Vercel deploy
- **TypeScript**
- **Tailwind CSS** — custom sage / terracotta / sand palette
- **Framer Motion** — scroll progress, reveal animations, magnetic buttons,
  overlays (all `AnimatePresence`-driven, escape-to-close)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Environment

Copy `.env.example` → `.env.local` and fill in your values:

| Var | Purpose |
| --- | --- |
| `NEXT_PUBLIC_PRIVATE_BOOKING` | Private practice booking URL (Calendly / Cal.com / DocVita). Defaults to Topmate if unset. |

Other links (Topmate, email, site URL) live in `lib/content.ts` + `lib/config`.

## Easter eggs (all keyboard / interaction based)

1. **Scroll progress** — terracotta bar fixed top.
2. **Magnetic buttons** — hero + booking CTAs follow the cursor.
3. **Konami code** — `↑ ↑ ↓ ↓ ← → ← → b a` toggles the *Resilience Garden*
   (20 drifting fireflies).
4. **Logo ritual** — click the logo **5× within 3s** opens the *Breathing*
   overlay (4s inhale / 7s hold / 8s exhale loop).
5. **Flourish** — type the word `flourish` anywhere → confetti words fall.
6. **Idle booking nudge** — on the #booking section, 8s without scrolling
   shows a paper-plane toast.
7. **Death Cafe hover** — hover a Death Cafe card for 2.5s for a gentle hint.
8. **Console message** — styled greeting in devtools.

All overlays close on `Escape`. Respects `prefers-reduced-motion`.

## Visual variants (A/B/C)

Switch the look with the `?v=` query param:

| URL | Variant |
| --- | --- |
| `/` or `/?v=a` | **A — Sage** (calm, default) |
| `/?v=b` | **B — Editorial** (serif-heavy, large quote band) |
| `/?v=c` | **C — Warm** (peach `#FFF1E6` accents) |

## Pre-launch checklist

- [ ] Replace `/public/images/shikha.jpg` with the real portrait (≈700×900, compressed).
- [ ] Set `NEXT_PUBLIC_PRIVATE_BOOKING` to your real booking link.
- [ ] Add real publication / Google Scholar links in `components/Publications.tsx`.
- [ ] Add RCI registration number in `components/Footer.tsx`.
- [ ] Test all easter eggs on mobile + desktop.
- [ ] Lighthouse > 90.

## Deploy to Vercel

```bash
npx vercel --prod
# Vercel Dashboard → Settings → Domains → add shikhasoni.in → update GoDaddy DNS
```

## Project structure

```
app/
  layout.tsx      # SEO metadata + JSON-LD (Person + ProfessionalService)
  page.tsx        # reads ?v= variant, renders <Portfolio />
  globals.css     # fonts, palette, reduced-motion
  robots.ts        # /robots.txt
  sitemap.ts       # /sitemap.xml
components/        # all sections + widgets (BreathingOverlay, NightGarden, GroundingTool, Toast)
lib/
  content.ts       # all real copy + data
  config.ts        # LINKS (env-driven)
  motion.ts        # fadeUp / staggerContainer / wordStagger
  hooks.ts         # useCountUp / useMagnetic / useScrollSpy / useIdleTimer / useEscape
  easterEggs.ts    # konami / logo-tap / flourish / console
  variants.ts      # A/B/C theme
reference/          # original HTML artifacts (unchanged)
```
