# Component pack for the rahulbagur.github.io redesign

Fetched 23 Nov 2026 (IST). Each file holds the real source plus its URL. Placement and restyling rules are in `../REDESIGN_SPEC.md`.

| Section | File | Source | URL |
|---|---|---|---|
| Nav | nav_shadcnui-blocks-navbar-02.md | shadcnui-blocks via 21st | https://21st.dev/@shadcnui-blocks/components/navbar-02 |
| Hero layout | hero_shadcnui-blocks-hero-07.md | shadcnui-blocks via 21st (id 27704) | https://21st.dev/@shadcnui-blocks/components/hero-07 |
| Hero proof visual | heroproof_componentry-layered-stack.md | Componentry (GSAP) | https://componentry.dev |
| Headline reveal + timeline draw | motion_gsap-scrolltrigger-splittext.md | GSAP docs | https://gsap.com/docs/v3/Plugins/SplitText/ |
| Proof strip / metrics | stats_shadcnui-blocks-stats-07.md | shadcnui-blocks via 21st | https://21st.dev/@shadcnui-blocks/components/stats-07 |
| Tool marquee | marquee_magicui-marquee.md | Magic UI via 21st | https://21st.dev/@magicui/components/marquee |
| Case-study cards | casecards_shadcnblocks-blog7.md | shadcnblocks via 21st (id 686) | https://21st.dev/@shadcnblockscom/components/blog7 |
| Experience timeline | experience_shadcnui-blocks-timeline-02.md | shadcnui-blocks via 21st (id 28334) | https://21st.dev/@shadcnui-blocks/components/timeline-02 |
| Proof gallery + lightbox | gallery_olewandowski1-gallery-4.md | 21st, retrieved with get_component (id 26806) | https://21st.dev/@olewandowski1/components/gallery-4 |
| How I work | howiwork_olewandowski1-how-it-works-2.md | 21st, retrieved with get_component (id 19863) | https://21st.dev/@olewandowski1/components/how-it-works-2 |
| Links (nav, footer, inline) | links_skiper-ui-skiper40.md | Skiper UI (free) | https://skiper-ui.com/v1/skiper40 |
| Contact CTA | contact_shadcnui-blocks-cta-04.md | shadcnui-blocks via 21st | https://21st.dev/@shadcnui-blocks/components/cta-04 |
| Footer | footer_shadcnui-blocks-footer-05.md | shadcnui-blocks via 21st | https://21st.dev/@shadcnui-blocks/components/footer-05 |
| Optional, not in default build | optional_componentry-flipping-word-swap.md | Componentry (GSAP) | https://componentry.dev |

Older pack (21 Nov, same 21st account) is at `../../resume_site/21st_components/`: Hero Block 10628, Expandable Skill Tags 8979, timeline-01, stats-04/05, number ticker, Azure/Clean Slate themes. Not used now except as alternates.

## How the code was obtained

- 21st.dev is on the free tier: 2 `get_component` retrievals a day. Both of today's went on gallery-4 and how-it-works-2 (21st-only listings). Quota resets 24 Nov 2026, 05:30 IST.
- Everything else listed on 21st was pulled from the author's own public shadcn registry (shadcnui-blocks.com/r, magicui.design/r, shadcnblocks.com/r). Same component, no 21st key. Page URLs were checked to return 200 on 21st.
- Componentry: public registry https://componentry.dev/r/{name}.json (56 items).
- Skiper UI: free items at https://skiper-ui.com/r/skiperN.json. Its hero sections and most showcase items are Pro (the registry returns "Missing license key"), so none were used. Free picks were limited to skiper40.
- GSAP: npm `gsap@3.15.1` (free standard license, plugins included) and `@gsap/react@2.1.2`.

## Looked at and left out

- Componentry infinite-image-field (cursor-driven photo canvas), WebGL/dither/aurora heroes, case-study-flip-stack, sticky-scroll-cards (needs Lenis + framer-motion): too much motion for a recruiter skim and heavy on mid-range Android phones.
- Skiper 16/17/19/30/31 scroll effects and 37 number counter: framer-motion based, and count-up numbers read as AI-template.
- Grayscale-on-hover in gallery-4: removed. Charts must show in colour; greyed proof looked like hiding something, the same reason Rahul rejected blacked-out tiles.
