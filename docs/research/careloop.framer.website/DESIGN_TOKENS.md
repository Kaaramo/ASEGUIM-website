# Careloop — Design Tokens (extracted via getComputedStyle)

Source: https://careloop.framer.website/ — Framer "Non Profit Organization Template".
Smooth scroll: **Lenis active** (`html.lenis`, scroll-behavior auto, JS-driven).

## Typography
- **Display / headings:** `Bayon` (Google Font), weight 400, condensed display face.
  - h1 hero: 130px / line-height 117px / letter-spacing -2px (color cream `#EAEBDB` over dark hero)
  - h2 section titles: 80px / 80px / -1px / color `#112A20`
  - very large stat numerals: up to ~260px Bayon
- **Body / UI:** `Manrope` (Google Font). Body paragraphs 16px / 24px, weight 700 common; also 400/500 for longer copy.
- Minor: `Inter` appears on a few labels (fallback-ish).
- Always include CSS fallback chain `..., sans-serif`.

## Color palette (CSS variables to define)
| Token | RGB | Hex | Role |
|---|---|---|---|
| `--cream` | 234 235 219 | `#EAEBDB` | page background, light text on dark |
| `--ink` / dark green | 17 42 32 | `#112A20` | primary text, dark sections |
| `--green-700` | 43 97 74 | `#2B614A` | green accents |
| `--green-600` | 52 74 65 | `#344A41` | muted green surfaces |
| `--orange` | 239 86 44 | `#EF562C` | primary accent / CTA highlight |
| `--yellow` | 253 219 34 | `#FDDB22` | secondary accent |
| `--green-200` | 198 222 173 | `#C6DEAD` | soft green surface |
| `--green-300` | 180 205 153 | `#B4CD99` | soft green surface |
| `--olive` | 137 165 107 | `#89A56B` | tag/badge |
| `--white` | 255 255 255 | `#FFFFFF` | cards / surfaces |
| `--gray` | 118 118 118 | `#767676` | secondary text |

> Note: `rgb(0,0,238)` appeared frequently but is the browser default un-styled anchor color leaking into computed styles — NOT a brand color. Ignore.

## Spacing / layout
- Content container max-width ≈ **1340px** (centered), full-bleed section backgrounds at 1425px viewport.
- Generous vertical rhythm; section heights large (hero ~1129px).
- Card grids: 2-col (programs, testimonials), 3-col (blog, contributions), with rounded corners + soft surfaces.

## Global behaviors
- **Lenis smooth scroll** (install `lenis`, init at root).
- Framer Motion-style appear-on-scroll (fade/slide-up, staggered) — implement with IntersectionObserver + CSS or `motion`.
- Sticky top nav with announcement bar above it.
- Marquee/ticker on testimonials (auto-scrolling horizontal).
- Animated count-up numerals ("0+" placeholders that count to target on view).

## Assets host
All images/favicons on `framerusercontent.com`. OG image + 2 favicons identified.
