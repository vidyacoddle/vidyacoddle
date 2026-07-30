# UI/UX Plan — B2B Infrastructure / Tech Agency Website

*Placeholder brand used throughout: **Gridline**. Swap for your real name — the system stays the same.*

## 1. Design direction

Off-white + orange was the brief. Most sites that land there default to "cream background, soft serif, terracotta accent" — warm and bakery-like. That's the wrong personality for a B2B infrastructure company, where the buyer is judging you on precision and reliability, not warmth.

So the direction here is **off-white as a blueprint canvas, not a cozy one** — schematic lines, monospace data, and a sharper burnt-orange used like a status light, not a wash of color. Structural devices (numbered steps, hairline dividers, a small pulsing "status" dot) borrow the visual language of infrastructure monitoring itself — because that's literally the product.

**Signature element:** a thin schematic grid/circuit line that runs behind the hero and threads through the process section, with small node dots at connection points. It's the one place the design gets a little clever; everywhere else stays quiet.

## 2. Colour system

| Token | Hex | Use |
|---|---|---|
| Canvas | `#F7F3EA` | Page background — warm linen, not stark white |
| Canvas Alt | `#EFEAE0` | Card / alternating section background |
| Ink | `#1E1B16` | Primary text, headlines |
| Ink Soft | `#6B6459` | Body copy, secondary text |
| Signal | `#D6491E` | Accent — CTAs, links, metrics, status dot |
| Signal Deep | `#A83916` | Text-on-light-orange, hover states |
| Carbon | `#16140F` | Contrast band (stats, final CTA) — used twice, not everywhere |
| Line | `rgba(30,27,22,0.14)` | Hairline borders/dividers |

Rule of thumb: the site stays light and off-white for ~85% of the page. Carbon (near-black) is reserved for two deliberate contrast bands — this makes them land harder than if the whole site went dark.

## 3. Typography

| Role | Typeface | Notes |
|---|---|---|
| Display/headings | Space Grotesk (500/600/700) | Geometric, technical, confident — not soft |
| Body | IBM Plex Sans (400/500) | Engineering heritage, pairs cleanly with Space Grotesk |
| Data/labels/mono | IBM Plex Mono (400/500) | Used for numbers, eyebrows, stats, footer address — reinforces the "systems" identity |

All three are free on Google Fonts. Headline sizes: H1 ~56px desktop / 34–38px mobile, H2 ~32px, body 16–18px, line-height 1.5–1.7.

## 4. Sitemap

```
Home
├── Solutions
│   ├── Infrastructure Architecture
│   ├── Platform Engineering
│   ├── Data & Integration
│   └── Managed Operations
├── Work (case studies index → individual case study pages)
├── Industries (Fintech, Retail, Healthcare, SaaS — as applicable)
├── About (team, story, values)
├── Insights (blog/technical writing)
├── Careers
└── Contact / Book a call
```

Keep top nav to 5 items max (Solutions, Work, Industries, About, Insights) — everything else lives in the footer or behind the primary CTA. This is the single biggest lever for "premium and easy to navigate": fewer choices in the header, not more.

## 5. Homepage — section by section

1. **Nav** — logo, 5 links, a small live-status line ("Booking Q4 engagements"), one solid CTA button. Sticky on scroll.
2. **Hero** — eyebrow with status dot, one confident headline (the thesis of the whole site), one-sentence subhead, primary + secondary CTA. Schematic line motif behind the text, not a stock photo.
3. **Trust bar** — "Trusted by engineering teams at" + 5 client wordmarks.
4. **Capabilities** — a numbered index (01–04), not icon cards. For a company selling engineering rigor, a spec-sheet layout reads more credible than illustrated icons.
5. **Case studies** — 3 cards, each led with one hard metric (uptime %, response-time reduction, request volume). Numbers first, story second — this is how B2B buyers actually evaluate agencies.
6. **Process** — 4 numbered steps with a connecting line. This is the one place numbering is earned: it's a real sequence a client will actually walk through.
7. **Stats band (dark)** — the first contrast moment. Big numbers on Carbon background, framed as "system status" — ties back to the infrastructure metaphor instead of being decoration.
8. **Testimonial** — one quote, real attribution, nothing else on the section.
9. **CTA band (dark)** — bookends the stats band. One headline, one line of support copy, one button.
10. **Footer** — mega-footer with columns (Solutions / Company / Resources), monospace contact line, socials, copyright.

## 6. Navigation & interaction patterns

- **Sticky nav** that gains a hairline bottom border once the user scrolls past the hero (not a full opaque bar — keep it light).
- **Mega-menu on "Solutions"** — hovering shows the 4 solution names with a one-line description each, so a visitor can jump straight to the one they need without a page load.
- **Breadcrumbs** on Work/Solutions sub-pages so deep pages never feel like a dead end.
- **One primary CTA per page** ("Start a project" / "Book a call") — repeated, never competing with a second loud button.

## 7. Motion principles

- Scroll-reveal: content fades up 12–16px on entry, staggered by ~60ms per element. Once per section, not per line.
- Hover states: buttons scale 0.98 on press, links get an underline draw-in (left to right), case-study cards lift 2px with a slightly stronger border — no shadows, no glow.
- The status dot in the nav/hero pulses gently (opacity 1 → 0.4 → 1, ~2s loop) — the one piece of ambient motion, echoing "live system."
- No parallax, no auto-playing carousels, no scroll-jacking. Respect `prefers-reduced-motion`.

## 8. Component guidelines

- **Buttons:** solid Signal-orange fill for the one primary action per screen; everything else is a text link with an underline, never a second competing solid button.
- **Cards:** flat Canvas Alt background, 1px hairline border, no shadow, no radius beyond 2–4px — keeps the "engineering spec sheet" feel rather than soft app-store cards.
- **Dividers:** hairline `1px` lines in `--line`, used generously to organize dense content instead of extra whitespace alone.
- **Forms** (contact/book-a-call): single column, generous vertical spacing, orange focus ring, plain-language labels and helper text.

## 9. Imagery & iconography

Avoid stock photos of people at laptops — for an infrastructure brand these read as filler, not credibility. Instead:
- Real product screenshots (dashboards, architecture diagrams) framed simply, no heavy device mockups.
- Abstract schematic/line-based graphics (grids, node-and-line diagrams) as the only "illustration" language.
- No icon set beyond what's structurally necessary; numbers and words carry most of the interface.

## 10. Responsive notes

- Nav links collapse to a single menu icon under ~900px; keep the CTA button visible.
- Hero headline drops to ~34–38px; stacked CTA row.
- Capability rows and process steps stack to a single column; stats grid goes 2×2.
- Case-study cards go to a single column, full width.
