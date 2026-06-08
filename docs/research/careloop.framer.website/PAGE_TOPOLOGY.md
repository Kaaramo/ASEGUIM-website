# Careloop — Page Topology

## Site routes (App Router targets)
| Route | Source path | Notes |
|---|---|---|
| `/` | `/` | Home (this doc) |
| `/about-us` | `/about-us` | About |
| `/causes` | `/causes` | Causes list |
| `/causes/[slug]` | 3 detail pages | Cause detail template |
| `/donation` | `/donation` | Donations |
| `/become-a-volunteer` | `/become-a-volunteer` | Volunteers |
| `/blog` | `/blog` | Blog list |
| `/blog/[slug]` | 3 posts | Blog post template |
| `/contact-us` | `/contact-us` | Contact |
| `/legal/privacy-policy`, `/legal/terms-and-conditions` | legal | Legal pages |
| `/404` | not-found | 404 |

Skipped: `/product/careloop`, `/all-access` (Framer template marketing pages, not part of the site).

## Shared chrome
- **AnnouncementBar** — top strip: "...delivered 99+ donation packages..." + "See here".
- **Navbar** (sticky) — logo + links: About `/about-us`, Causes `/causes`, Donations `/donation`, Volunteers `/become-a-volunteer`, "All Pages" dropdown, + `donate now` button → `/donation`.
- **Footer** — columns Get Involved (Donate/Volunteer/Causes), Learn More (About/Blog/Contact), Policies & Terms (Privacy/Terms/404) + copyright "© 2026 Careloop".

## Home sections (top → bottom, desktop heights @1440)
1. **Hero** (~1129px) — h1 "Building Brighter, Safe Future." (Bayon 130px, cream) over dark/image bg, intro paragraph, CTA(s). Background hero image layer.
2. **DonateSpotlight** (~399px) — split: left card "Emergency Food Aid in South Africa" Raised $1,280,000 / Goal $2,000,000 + progress bar + "learn more"; right "Make A Donation today!" panel (donations from $20).
3. **AboutSection** (~925px) — left image, right "About careloop" tag + h2 "Real change happens with consistency." + paragraph + 2-item list (food/nutrition, education) + "learn more".
4. **ProgramSection** (~1504px) — h2 "Our programs are designed to empower" + 4 CampaignProgressCards (Food/nutrition $3.5M/$5.6M, Health/medical $1.75M/$2.4M, Education $2.95M/$1.8M, Disaster relief $4.1M/$3.75M). Background shape layer.
5. **ImpactSection** (~1182px) — "our impact" tag + h2, 3 StatCounter cards (count-up "0+"): children in programs / seniors supported / job-training participants.
6. **DifferenceSection** (~1305px) — h2 "Ways you can make a difference" + 6 ContributionCards (Make a donation, Become a volunteer, Sponsor a child, Organize a fundraiser, Share your story, Attend an event).
7. **CaseStudy** (~1228px) — "Building A Better Tomorrow" + featured causes (youth fitness) with progress + "support us".
8. **OurNumberSection** (~891px) — h2 "One action. One number. Real impact." + big count-up "0+ lives changed for the better" + Donate now.
9. **TestimonialSection** (~872px) — h2 "What people say about OUR WORK" + horizontal auto-scrolling ticker of 3 testimonial cards.
10. **GuidingStarSection** (~806px) — image + "Our Guiding Star" + h2 "Consistency drives real change." + copy (NB: live site has leftover "Kindora" text — replace with Careloop).
11. **BlogSection** (~1076px) — h2 "Stories from the Careloop community" + 3 BlogCards (env/humanitarian, Mar–May 2026).
12. **FaqSection** (~604px) — h2 "questions and answers" + accordion (purpose, donation usage, security, volunteering).
13. **CtaBanner** (~553px) — h2 "Want to make a difference in your community?" + "support us".
14. **Footer** (~763px).

## Interaction models
- Hero/section content: **scroll-driven appear** (fade/slide-up, staggered).
- Navbar: sticky; verify scroll state change (shadow/bg) during interaction sweep.
- Testimonials: **time-driven** marquee ticker (continuous).
- Stat counters: **scroll-driven** count-up on enter viewport.
- FAQ: **click-driven** accordion expand/collapse.
- Global: **Lenis** smooth scroll.

## Breakpoints to verify (Framer defaults)
Desktop ≥1200 · Tablet ~810/768 · Phone ~390. Confirm during responsive sweep.
