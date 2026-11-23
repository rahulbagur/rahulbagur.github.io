# rahulbagur.github.io redesign spec

Prepared 23 Nov 2026 (IST) for the coding agent. Build from this file and `components/`. Do not invent any fact, number, logo, quote or client name that is not in this file. Anything marked **[CONFIRM]** needs Rahul's yes before it ships; if he hasn't answered, use the fallback given next to it.

Repo today: Vite 6 + React 19 + react-router-dom 7 + TypeScript, plain CSS (`index.css`, 890 lines), no Tailwind, fonts Familjen Grotesk + Petrona via Fontsource, BrowserRouter with `dist/404.html` copied from `index.html` for deep links, GitHub Actions deploy to Pages. 17 proof PNGs in `public/proof/`, resume at `public/Rahul_Bagur_Resume.pdf`.

---

## 1. What the research says

### How hiring managers read a portfolio

1. **They skim first, fast, down the left edge.** Ladders' 2018 eye-tracking study put the first resume screen at 7.4 seconds, with most attention on job titles and a summary at the top; F/E-pattern layouts with bold titles and short bullets did best, and cluttered multi-column layouts did worst ([Ladders PDF](https://www.theladders.com/static/images/basicSite/pdfs/TheLadders-EyeTracking-StudyC2.pdf)). NN/g's F-pattern work says the first words of each line and heading carry the scan ([summary](https://showproof.io/guides/how-recruiters-read-developer-portfolios/)). So: name, role and 3 to 4 numbers above the fold, left-aligned, and headings that start with the noun ("Team Counsel", "Outbound engine").
2. **Tools lists don't separate candidates; proof does.** "Ninety of them list Clay, Instantly and n8n." Put a proof strip at the very top, show the whole funnel per campaign, use unedited screenshots with names hidden, include one thing that broke, and make contact findable in five seconds ([Malik Sahal](https://maliksahal.com/blog/gtm-engineer-portfolio)).
3. **Numbers need context to count as evidence.** Use Situation, Change, Result and "what did not move". Three to five case studies in that format beat ten resume bullets, and a diagram of a real system is the highest-signal artifact ([MOps Portfolio Playbook](https://strutsynska.substack.com/p/the-mops-portfolio-playbook-how-to)).
4. **Show what you switched off.** Strong candidates show the segment they dropped, the campaign they killed, the number they judged it by (meetings held beat reply rates), who used the system and whether it still runs ([Marketsplash](https://marketsplash.com/hiring-gtm-engineer-judgment/)).
5. **RevOps managers test for cross-functional judgment, not tool skill alone.** Name the teams a project touched, sanitize names and say that you did ([RevOps Function](https://revopsfunction.com/posts/building-a-revops-portfolio-for-job-applications)). Sales Ops interviewers look for a baseline, specific steps, a measured change and adoption ([ZYTHR](https://zythr.com/resources/hiring-guides/sales-hiring-guides/sales-operations-manager-hiring-guide)).

### 12 reference sites

| Site | What it does well | What we take |
|---|---|---|
| [Malik Sahal, Work](https://maliksahal.com/work) | Every campaign card has dates, contacts, reply rate, positive rate and an unedited dashboard screenshot. Shows a low 1.47% reply rate because positives were high. | Screenshot next to every claim; show weak numbers honestly. |
| [Jan Berning](https://jan-berning-gtm.vercel.app/) | Each case reads Problem, Approach, numbered Build steps, Result. | Numbered "what I did" steps on case pages. |
| [Karl Kyamko](https://karlkyamko.com/) | Card headline is the outcome ("547 Emails → Closed $5K MRR Retainer"); one-line method under it. | Outcome-first card titles. |
| [Inam Taha](https://inamtaha.systems/) | Opens with aggregate totals, then a case index that admits "a few show a market that turned out to be the wrong one." | Aggregate line in the hero; a failure case on the index. |
| [Mike Cofone](https://mikecofone.com/) | Three big numbers, then a 4-step "how I work" (Learn, Build, Run, Scale), then roles with outcomes. | The How I work section. |
| [Patrick Hillstrom, About](https://www.patrickhillstrom.com/about) | One-paragraph intro, then roles with a one-line company context and 2 to 4 outcome bullets. Says plainly he "builds with AI hands-on". | Company context line per role; honest AI-builder framing. |
| [Nick Coetzee](https://nicholasbcoetzee.com/bio) | Bio timeline listing the functions owned in each role. | "What I owned" line per role. |
| [Colin Budries](https://www.colinbudries.com/) | One line per role ("Taking support automation from 0 to 30%"). | Short summary line above bullets in the timeline. |
| [Vaish Srivathsan](https://www.vsrivathsan.com/) | Company, years, title, then exactly two outcome bullets. | Home-page timeline shows 2 bullets; full list on /experience. |
| [Growack, Work](https://growack.com/work/) | Anchor case first, before→after numbers, and a caveat that results are representative. | Lead with the strongest case; add the sourcing note. |
| [The RevOps Company](https://www.therevopscompany.com/case-studies) | "What was broken, what we built, and the numbers the system produces now." Metric chips per case. | Case template and metric chips. |
| [RevOps Impact, Gallery](https://www.revopsimpact.com/gallery) | Case index with category filters, 2 metrics and tool tags per card. | Tool tags on each case card. |

### Earlier "less AI-looking" research (TC-3), still applies
From `resume_site/design_refs/README.md` (Anthropic frontend-design, avoid-ai-design, unslop-ui, impeccable, taste-skill):
- No purple/blue gradients, glows, glassmorphism, gradient text, floating blobs, emoji icons.
- No tracked ALL-CAPS eyebrow over every heading, no `01 / 02 / 03` markers unless it is a real sequence (How I work is one), no trailing arrow on every button, no one-word-in-a-different-colour headlines.
- One accent colour, used for actions and the single highlighted number. Real type scale. Body lines under about 75 characters. Left-aligned body.
- No invented testimonials, logos or stats.

### Design laws from Rahul's reel (t40u), applied
Von Restorff (one highlighted number: 1 paying client), serial position (result first, contact last on every page), progressive disclosure (3 screenshots, "See all" for the rest), cognitive load (case page = context, problem, what I did, result, proof), peak-end (end each case on the best outcome and a contact button, not on redaction notes).

### What was wrong with the current site
It reads like a resume: one hero line, a card list and an About block. Experience is two sentences. No timeline, no CoinDCX or Pickcel detail, no events/partnerships work, no "how I work", no failure story, proof only on two inner pages, and no 21st.dev components.

---

## 2. Stack changes

Install:
```
npm i tailwindcss @tailwindcss/vite clsx tailwind-merge class-variance-authority lucide-react \
  @radix-ui/react-dialog @radix-ui/react-slot @radix-ui/react-separator @radix-ui/react-visually-hidden \
  gsap @gsap/react @fontsource/ibm-plex-sans
```
- Tailwind v4 through `@tailwindcss/vite` in `vite.config.ts`; keep the `github-pages-spa` 404 plugin and `base: "/"`.
- Add `resolve.alias { "@": path.resolve(__dirname, ".") }` to match the existing tsconfig `@/*` path.
- Add shadcn `components.json` (style new-york, baseColor neutral, css `index.css`, aliases `@/components`, `@/lib/utils`). Pull primitives with `npx shadcn@latest add button badge dialog sheet separator card`.
- `lib/utils.ts` with `cn()` (clsx + tailwind-merge).
- Replace every `next/link` with react-router `Link` (internal) or `<a>` (external). Rewrite `@/registry/bases/radix/ui/*` imports to `@/components/ui/*`.
- **One animation library: GSAP.** Do not install framer-motion or motion. Drop hero-07's AnimatedGridPattern (it needs motion). Swap `@remixicon/react` in how-it-works-2 for lucide icons.
- Remove `@fontsource/petrona`. Keep `@fontsource/familjen-grotesk`.
- Delete `_legacy/` only if Rahul agrees [CONFIRM]; fallback: leave it, it isn't built.
- Light theme only. No theme toggle.

File layout (root-level, as the repo is today):
```
components/ui/*            shadcn primitives
components/blocks/*        Nav, Hero, ProofStrip, ToolMarquee, CaseCards, ExperienceTimeline,
                           HowIWork, WhatBroke, ProofGallery, ContactCTA, Footer, Callout
components/motion/*        useHeroReveal.ts, useTimelineDraw.ts (code in components/motion_gsap-*.md)
pages/*                    Home, Experience, WorkIndex, CasePage, About, Contact, NotFound
content.ts                 all copy and data (rewrite from section 5 of this spec)
```

---

## 3. Design tokens

Restrained "operator's ledger" look: warm off-white paper, near-black ink, one deep green accent. Not purple, not blue SaaS, not dark neon.

### Colour (CSS variables in `index.css`, mapped to shadcn names)
| Token | Hex | Use |
|---|---|---|
| --background | #F7F7F4 | Page |
| --card | #FFFFFF | Cards, stat cells, lightbox |
| --foreground | #15181B | Text, headings |
| --muted | #EEEEE9 | Badge fill, tool chips, image placeholder |
| --muted-foreground | #565E66 | Dates, captions, metadata (about 6:1 on background) |
| --border | #DEDED7 | 1px rules, card borders |
| --primary | #1F4D3F | Primary button, links on hover, highlighted stat, focus ring, timeline line |
| --primary-foreground | #FFFFFF | Text on primary |
| --primary-soft | #E3EEE8 | Highlighted stat cell fill, callout fill |
| --ring | #1F4D3F | Focus |
No other colours. No gradients. Chart PNGs keep their own colours.

### Type
- Display and UI: **Familjen Grotesk** 500/700 (already installed). Name, headings, nav, buttons, all numbers (`font-variant-numeric: tabular-nums`).
- Body: **IBM Plex Sans** 400/500 (`@fontsource/ibm-plex-sans`).
- Scale (desktop / mobile, size/line-height px): display 56/60 / 38/42; h2 34/40 / 28/34; h3 21/28 / 19/26; stat number 44/48 / 36/40; body 17/28 / 16/26; small 15/22; caption 13/18.
- Max body width 68ch. Headings `text-wrap: pretty` (not balance; SplitText dislikes balance).

### Space, shape, motion
- 4px base. Section padding 96px desktop / 64px mobile. Container max 1120px, gutter 24px (16px under 400px).
- Radius: cards 10px, buttons 8px (change the blocks' `rounded-full` to `rounded-md`), badges 6px. Borders 1px. No shadows except the lightbox.
- Motion (GSAP only, all off under `prefers-reduced-motion`): hero headline line reveal once (0.6s); hero proof stack fans out on hover (desktop); experience timeline line fills on scroll and roles fade up once; marquee at 60s per loop, pauses on hover/focus. Nothing else moves. No scroll-jacking, pinning or Lenis.
- Focus: 2px --ring outline, 2px offset, on every link and button.

---

## 4. Sitemap and layouts

```
/                         Home
/experience               Full experience, skills, tools, education
/work                     Case-study index
/work/outbound-engine            (existing slug, keep)
/work/multichannel-tests         (existing, keep)
/work/retargeting-a-failed-offer (existing, keep)
/work/internal-tools             (existing, keep)
/work/events-and-partnerships    (new)
/work/coindcx-partner-vertical   (new)
/about
/contact
*                         NotFound (links home and to /work)
```
Nav (all pages): wordmark "Rahul Bagur" (left) · Work · Experience · How I work (`/#how-i-work`) · About · Contact · outline button "Resume" (PDF). Mobile: wordmark + Resume button + menu Sheet.

### Home, top to bottom
1. **Nav**: navbar-02, sticky, white, bottom border.
2. **Hero**: hero-07 structure, left-aligned, two columns at ≥1024px (copy 7 cols, proof stack 5 cols), stacked on mobile with the proof stack below the buttons. SplitText reveal on the H1.
   - Right column: Componentry LayeredStack with 3 cards (`salesforge-all-time-email-funnel.png`, `outbound-volume.png`, `ab-ecp-india-replies.png`), white card frame, caption under the stack. Clicking a card opens the gallery lightbox at that image.
3. **Proof strip**: stats-07, 4 cells in one row (2×2 on mobile). The "1 paying client" cell uses --primary-soft fill and a --primary number. Footnote line under the grid.
4. **Tool marquee**: Magic UI Marquee, one row of text chips (no brand logos), edge fade mask, pause on hover. Under reduced motion it renders as a static wrapped row.
5. **Selected work**: blog7 card grid, 3 columns desktop / 1 column mobile, 6 cards. Cover = proof image (object-fit cover, 16:10) or, where there is no honest image, a typographic cover (big metric on --muted). Card: tags, outcome title, one line, "Read the case".
6. **Experience (short)**: timeline-02 with GSAP line draw. 4 roles, 2 bullets each, link "Full experience".
7. **How I work**: how-it-works-2, 5 numbered steps (a real sequence, so numbers are fine), each with one real example.
8. **What didn't work**: a bordered note block (Callout style), 3 short items, link to the retargeting case.
9. **Contact CTA**: cta-04 without the circuit pattern.
10. **Footer**: footer-05.

### Case page template (all /work/:slug)
1. Breadcrumb "Work / {title}".
2. H1 = outcome title; one-line summary; tag chips (offer, region, tools); period and role line.
3. Metric row (stats-07, 3 or 4 cells, one highlighted).
4. Context (2 to 3 sentences) · Problem (1 to 2 sentences).
5. What I did: numbered steps.
6. Result: bullets, full funnel.
7. Note (Callout) where the case uses Salesforge screenshots: the zeros explanation, verbatim from section 6.
8. What didn't move / what I'd change: 1 to 3 bullets.
9. Proof: gallery-4. Show first 3 (mosaic: first tile 2×2), button "See all N screenshots" reveals the rest in the same grid. Lightbox: image at natural aspect (`object-contain`, max-h 80vh), caption under it, prev/next buttons, ←/→ keys, Esc closes, counter "3 of 9". Remove the grayscale filter and the zoom icon overlay; keep a visible "Enlarge" label for screen readers.
10. Peak-end close: one strongest line + buttons "Email me" and "Next case".

### /experience
Full timeline-02 (all bullets), then Skills (3 groups as plain lists), Tools by function (table), Building with AI (one paragraph), Education. Download resume button at top and bottom.

### /work
H1, one line, 6 blog7 cards (same as home) with a small filter row (All · Outbound · RevOps · Events · Builds), plain buttons, no animation.

### /about and /contact
About: text page, 68ch column, no photo. Contact: one card with email, LinkedIn, resume, location. No form (no backend on Pages), no phone.

### Mobile notes
- Test at 360, 390 and 414px wide. Hero H1 at 38px must fit "Rahul Bagur" on one line and the positioning line in 3 to 4 lines.
- Above the fold on a 390×844 phone: nav, H1, positioning line, both buttons, and the top of the proof strip. The proof stack sits below.
- LayeredStack: no hover on touch, so it stays stacked; tap opens lightbox. Height capped at 260px on mobile.
- Proof strip 2×2; numbers 36px. Case cards single column. Timeline line on the left edge with 12px indent.
- Lightbox full-screen under 640px, swipe not required (prev/next buttons 44px tap targets).
- Images: add `loading="lazy"` and `decoding="async"` everywhere except the 3 hero images; give width/height to stop layout shift. Generate 1280px-wide WebP copies of the PNGs at build time or by hand and use `<picture>` with PNG fallback.
- Budget: JS under 150 KB gzip for the home route (React + router + GSAP core/ScrollTrigger/SplitText is about 100 KB). Lazy-load the case pages with `React.lazy`.
- Lighthouse mobile target: Performance ≥ 90, Accessibility ≥ 95.

---

## 5. Final copy

Writing rules: plain, answer-first, few em dashes. Never use: crucial, robust, seamless, delve, landscape, pivotal, foundational, vibrant, groundbreaking, testament, realm, tapestry, underscore. Never say Rahul hand-writes code; say he builds tools with AI. Never name Blume, any client, any prospect person, or any fee. No salary, no phone, no photo.

### Global
- `<title>`: Rahul Bagur | GTM and revenue operations
- Meta description: Rahul Bagur builds outbound, CRM and reporting systems for sales teams. First GTM hire at Team Counsel, Bengaluru. Open to GTM Strategy & Ops, RevOps, Growth Ops and Sales Ops roles.
- OG image: regenerate. The current `og.png` says "7,681 emails" and "69.3% open rate"; replace with: "Rahul Bagur · GTM and revenue operations · 6 meetings booked · 1 paying client · 26.9% LinkedIn acceptance". Update `og:image:alt` to match.
- Public email: rahulbagur@gmail.com **[CONFIRM]** (fallback: use it; it is on the live site and resume).
- LinkedIn: https://www.linkedin.com/in/rahulbagur · GitHub: https://github.com/rahulbagur

### Nav
Work · Experience · How I work · About · Contact · [Resume]

### Hero
- Badge: Open to GTM, RevOps, Growth Ops and Sales Ops roles · Bengaluru
- H1: Rahul Bagur
- Positioning (large body, 21px): I build the outbound, CRM and reporting systems a sales team runs on, and I count what they actually produce.
- Support line: First GTM hire at Team Counsel, a legal consulting practice for startups. From August to November 2026 my outbound booked 6 meetings and won a paying client. Before that, sales and partnerships at CoinDCX and Pickcel.
- Buttons: [See the work] (primary, → /work) · [Download resume] (outline, PDF)
- Proof stack caption: Real dashboards, names hidden. Tap to enlarge.

### Proof strip
| Number | Label |
|---|---|
| 11,246 | cold emails run across Instantly and Salesforge in 2026 |
| 6 | meetings booked from cold outbound, Aug to Nov 2026 (4 held) |
| **1** (highlighted) | paying client from that outbound |
| $30M+ | monthly trading volume across CoinDCX's Business Partner vertical |
Footnote (caption): Team Counsel numbers are hand-counted from the inbox and read from Salesforge and Instantly. CoinDCX figure is from my own records.

**[CONFIRM] 11,246:** that is 7,623 Instantly + 3,623 Salesforge. 1,372 of the Instantly emails went out before 16 Feb 2026, Rahul's first Slack day, in pilots already in the workspace. Fallback if he doesn't confirm those were his: show "9,874 cold emails run since Feb 2026" (11,246 − 1,372).

### Tool marquee
Label (small, left): Tools I've set up or run day to day
Chips: Instantly · Salesforge · Apollo.io · LinkedIn Sales Navigator · Zoho CRM · Zoho SalesIQ · Zoho Vault · Google Workspace · Databricks · MoEngage · Claude · Gemini CLI

### Selected work (H2: Selected work · intro: Six pieces of work, each with the numbers and the screenshots behind them.)
| Slug | Card title (outcome) | One line | Tags | Cover |
|---|---|---|---|---|
| outbound-engine | 6 meetings and a paying client from an outbound stack built from zero | Domains, 13 mailboxes, Instantly, Salesforge, LinkedIn and Zoho CRM for a practice that had no CRM. | Outbound · RevOps · India, US, UK | salesforge-all-time-email-funnel.png |
| multichannel-tests | First-email reply rate up from 1.0% to 3.9% | A/B tests on live email and LinkedIn sequences, and the segment that won. | Testing · Email · LinkedIn | ab-ecp-india-replies.png |
| retargeting-a-failed-offer | An offer that failed, and what I changed | 644 emails and no replies, read honestly, then a new list and shorter emails. | Diagnosis · Lists | retarget-seed-funded.png |
| internal-tools | A daily account brief instead of manual research | A GTM intelligence dashboard, funding alerts and lead tools, built with AI. | Automation · Built with AI | typographic: "Daily brief" |
| events-and-partnerships | Event meetings that turned into clients | Follow-ups, minutes and CRM capture across Bengaluru startup events. | Events · Partnerships · CRM | typographic: "2 clients from events" [CONFIRM] |
| coindcx-partner-vertical | A partner channel at $30M+ monthly volume | Business Partner vertical, sub-broker campaigns and earn products at CoinDCX. | Partnerships · Lifecycle · Crypto | typographic: "$30M+" |

### Experience (H2: Experience · link: Full experience →/experience)
Home shows the first 2 bullets per role; /experience shows all.

**Team Counsel · Growth & Strategy Lead (GTM) [CONFIRM title; fallback "GTM Strategy Lead"] · Feb 2026 to now · Bengaluru**
Context: Legal consulting practice for startups and scale-ups, nine people. First GTM hire, reporting to the founder.
Owned: outbound, CRM, GTM tooling, SDR direction, events follow-up, workspace ops.
- Built the outbound and CRM stack from nothing: sending domains, 13 mailboxes across 4 domains, Instantly, Apollo, Salesforge, LinkedIn automation capped at 30 requests a day, and Zoho CRM with event and landing-page leads flowing in.
- Aug to Nov 2026, hand-counted from the inbox: 53 replies, 22 positive, 6 meetings booked from cold outbound (4 held) and 1 paying client.
- Ran the Salesforge workspace: 24 sequences, 3,623 emails at a 69.3% open rate and 0.6% bounce, plus 778 LinkedIn requests with 209 accepted (26.9%).
- Ran the Instantly workspace Jan to Jun: 7,623 emails across 26 campaigns. [CONFIRM: 1,372 were pre-16 Feb pilots]
- A/B tested live sequences: first-email variant A replied at 3.9% against 1.0%; a LinkedIn variant lifted acceptance from 9.5% to 22.0%. Incubators were the best segment at 8.1% reply.
- Built a daily GTM intelligence dashboard, a funding-alert automation and a landing page that writes leads into Zoho, all with AI coding tools.
- Onboarded and directed an SDR: tools, ICP filters, messaging, a meeting-notes framework and daily lead priorities.
- Moved the team to Google Workspace and a shared Drive, set up Zoho Vault for shared logins, and ran domain choice and reputation checks.
Badges: Instantly · Salesforge · Apollo · Zoho CRM · LinkedIn · Google Workspace

**CoinDCX · Analyst, Wealth Management (Business & Strategic Alliances) · Aug 2024 to Jun 2025**
Context: One of India's largest crypto exchanges.
- Built and managed the Business Partner vertical to $30M+ in monthly trading volume across partners, and ran its first partner webinar.
- Led sub-broker acquisition campaigns: 250+ interested leads [CONFIRM: manager's review says "first 100+ inbound leads"; fallback "100+ inbound leads"].
- Scaled Advanced Earn to $8M+ AUC, with about $1M deployed in the Oct to Dec festive campaigns; drove $2M+ in monthly fresh AUC for Prime through activation funnels and lifecycle campaigns.
- Won "Whale of the Quarter" twice in a row and the monthly "Super Satoshi" award for campaign results.
Badges: Databricks · MoEngage · Partner programmes

**CoinDCX · Business & Strategic Alliances Intern · Feb 2024 to Jul 2024**
- Built the Prime sales funnel and onboarded $150,000+ AUC.
- Found ICP prospects in Databricks, ran targeted MoEngage campaigns, and set up the MIS reporting for sales performance and pipeline.

**Pickcel · Business Development (Sales) Intern · Jul 2023 to Dec 2023 · Bengaluru**
Context: Digital signage software.
- Ran 50+ demos, qualified 30+ leads, closed 15+ deals and built a $100,000+ pipeline.
- Onboarded Vestel as a channel partner; built outbound through Apollo and LinkedIn and kept the CRM clean.

**Education:** B.Tech, Aerospace Engineering, Jain University, 2022.

(CoinDCX and Pickcel numbers come from Rahul's own resumes; titles and dates are backed by his relieving and experience letters. CoinDCX "one of India's largest crypto exchanges" and Pickcel "digital signage software" are public company descriptions; drop them if the agent can't confirm on the companies' own sites.)

### How I work (H2: How I work · intro: The same five steps on every motion I've run.)
1. **Read the numbers before changing anything.** Every week I read stand-up notes next to campaign data. In April that showed the ECP offer failing on lead quality, so I changed the list instead of the subject lines.
2. **Set up the plumbing first.** Separate sending domains, 13 mailboxes with a daily cap of 30 each, and LinkedIn capped at 30 requests a day, before any volume. Bounce stayed at 0.6%.
3. **Test on live sequences and keep the winner.** One first email replied at 3.9% and the other at 1.0%. I kept A and dropped B.
4. **Count outcomes by hand when the tool can't.** Salesforge showed 0 meetings because they were booked outside it. I counted them from the inbox: 6 booked, 4 held, 1 paying client.
5. **Hand it to the team.** Rolled Zoho CRM out to the team, set the rule that every event lead goes straight into it, and trained the SDR to run the daily list.

### What didn't work (H3: What didn't work, and what I changed)
- Instantly ECP: 644 emails across three versions, 0 replies. I stopped rewriting subject lines and changed the list.
- A WhatsApp-community campaign opened at 34% and got 0 replies. I didn't repeat it.
- After March, 3,183 Instantly emails brought 6 replies. I moved outbound to Salesforge in August and rewrote sequences as short, trigger-based emails with a one-word reply ask.
Link: Read the full story → /work/retargeting-a-failed-offer

### Contact CTA (home and end of every page)
- H2: Hiring for GTM, RevOps, Growth Ops or Sales Ops?
- Line: I'm in Bengaluru and open to full-time roles. Email is fastest; I reply within a day.
- Buttons: [Email me] (mailto) · [LinkedIn] · text link "Download resume"
**[CONFIRM]** "open to full-time roles", "reply within a day", and remote/relocation preference. Fallback: "I'm in Bengaluru. Email is fastest."

### Footer
Rahul Bagur · Bengaluru · Work · Experience · About · Contact · Resume · icons: LinkedIn, GitHub, Email · © 2026 Rahul Bagur

### Case: outbound-engine
- Title: 6 meetings and a paying client from an outbound stack built from zero
- Summary: Team Counsel had no CRM, no sending domains and no sequencing tool. I set all of it up and ran it.
- Meta line: Team Counsel · Feb to Nov 2026 · First GTM hire, reporting to the founder
- Metrics: 53 replies · 22 positive · 6 meetings booked (4 held) · **1 paying client** (highlighted). Caption: Hand-counted from the inbox, 11 Aug to 20 Nov 2026.
- Context: Team Counsel is a nine-person legal consulting practice for startups and scale-ups in Bengaluru. It sells startup legal retainers, fractional general counsel and contract support in India, the US and the UK. I joined in February 2026 as the first GTM hire.
- Problem: In February there was no CRM, no dedicated sending domains and no sequencing tool.
- What I did:
  1. Picked and checked sending domains, then set up 13 mailboxes across 4 domains with a daily cap of 30 each.
  2. Ran campaigns in Instantly until mid-June, then moved to Salesforge in August for email and LinkedIn in one place. Apollo fed the lists.
  3. Turned on LinkedIn automation on 14 October, capped at 30 requests a day.
  4. Rolled Zoho CRM out to the team in late October, with event and landing-page leads going straight in.
  5. Handed replies to the SDR with daily priorities, and counted every reply and meeting by hand from the inbox.
- Result:
  - 53 replies (13 email, at least 40 LinkedIn), 22 positive, 6 meetings booked from cold outbound with 4 held, and 1 paying client, 11 Aug to 20 Nov 2026.
  - Salesforge: 1,658 of 2,099 contacts reached, 3,623 emails, 69.3% open, 0.6% bounce; 778 LinkedIn requests, 209 accepted (26.9%).
  - Instantly, Jan to Jun: 7,623 emails across 26 campaigns. [CONFIRM pre-start share, see proof strip]
- Note: Salesforge zeros note (section 6).
- What didn't move: Email reply rates stayed low (1.5% on Salesforge email); most replies came from LinkedIn. The founder led the sales calls, so the client is a shared win.
- Proof (9): outbound-domains-mailboxes, outbound-volume, outbound-instantly-salesforge first; then salesforge-sender-profiles, salesforge-sequences-list, salesforge-all-time-email-funnel, salesforge-all-time-linkedin-funnel, salesforge-analytics-6-20-nov, salesforge-early-craas-ny. Captions: use the existing `alt`/`caption` strings in the repo's `content.ts` (they match `resume_site/proof/CAPTIONS.md`).
- Close: "From no CRM in February to a paying client in November." [Email me] [Next case: Multichannel tests]

### Case: multichannel-tests
- Title: First-email reply rate up from 1.0% to 3.9%
- Summary: Live A/B tests on email and LinkedIn, and the segment that came out ahead.
- Metrics: **3.9% vs 1.0%** first-email reply (highlighted) · 22.0% vs 9.5% LinkedIn acceptance · 8.1% reply from incubators · 60% of ECP replies positive.
- Context: Sequences were already running on email and LinkedIn. I read the stand-up notes and campaign data each week and tested on live sequences, not drafts.
- Problem: Early campaigns got opens but few replies.
- What I did: 1) Rewrote sequences into short, trigger-based emails ("closed its last round about N months ago") with a reply-"yes" ask. 2) Split-tested the first email on ECP India Runway Ending. 3) Split-tested the LinkedIn connection note on US UK New GC. 4) Compared segments and moved effort to incubators.
- Result: Variant A replied at 3.9%, B at 1.0%. LinkedIn variant B was accepted at 22.0%, A at 9.5%. All LinkedIn: 209 of 778 accepted (26.9%). Incubators India replied at 8.1% (3 of 37). Hand-counted, 12 of 20 ECP replies were positive (60%).
- Optional line [CONFIRM, it is on the live site but not in today's approved list]: "On LinkedIn, about 21% of people who received a message replied." Fallback: leave it out.
- What didn't move: Small samples. 37 contacts in the incubator test, so I treat 8.1% as a lead to follow, not a rule.
- Note: Salesforge zeros note.
- Proof (7): ab-ecp-india-replies, ab-us-uk-new-gc-linkedin, linkedin-acceptance-778 first; then salesforge-ecp-india-runway-ending, salesforge-us-uk-new-gc-linkedin, salesforge-incubators-india, salesforge-linkedin-previous-fgc-ecp-craas.
- Close: "Keep the winner, drop the loser, and say how small the sample was." [Email me] [Next case]

### Case: retargeting-a-failed-offer
- Title: An offer that failed, and what I changed
- Summary: ECP got opens and no replies. The list was the problem, not the copy.
- Metrics: 644 Instantly emails, 0 replies · 22 Apr post-mortem · **60% of later ECP replies positive** (highlighted) · 5 replies from 205 on the Salesforge rerun.
- Context: April 2026, early in the outbound year. ECP is a legal retainer for early-stage startups.
- Problem: Two subject-line tests on the same 43 people got 0 replies (86 emails at 8.1% open, then 128 at 3.1%).
- What I did: 1) Called it in the 22 Apr stand-up: the leads were wrong, not the subject lines. 2) Moved the offer to seed-funded companies (ECP Manual Campaign, 430 emails, 32.8% open). 3) It still got 0 replies and ended on 11 May. 4) Relaunched in October on Salesforge with short, trigger-based emails about runway.
- Result: The October sequence, ECP India Runway Ending, sent 661 emails to 205 people, 75.1% open, 5 replies (2.4%). Hand-counted, 60% of ECP replies were positive (12 of 20).
- What didn't move: The April retarget itself still got 0 replies. Replies came only after the October rewrite, so I can't credit the list change alone.
- Proof (1): retarget-seed-funded.png.
- Close: "Stop, say why, change one thing, measure again." [Email me] [Next case]

### Case: internal-tools
- Title: A daily account brief instead of manual research
- Summary: Tools I built with AI coding agents to cut research time and find accounts.
- Metrics: 1 brief a day · funding alerts into account selection · landing-page leads straight into Zoho.
- Context: Choosing who to contact depended on reading legal-tech and funding news by hand.
- What I built (with AI coding tools; I direct the agents, debug with them and learn how each part works):
  1. GTM intelligence dashboard: a scheduled task researches legal-tech and funding news each morning and publishes a brief to an internal site (announced 1 Oct 2026).
  2. Funding-alert automation that flags recently funded companies for account selection (5 Aug 2026).
  3. Founders Room landing page whose form writes leads into Zoho CRM (12 to 13 Nov 2026).
  4. ChatbotIDer: finds which chatbot and support tools a website runs and exports a CSV lead list (Python, Playwright).
  5. Competitor User Finder: finds companies using a competitor's product and exports a lead list (Python, Playwright).
  6. Crypto futures research simulator: LSTM, CNN and tree models vote through a weighted ensemble on Binance Futures data, with walk-forward tests, fee and slippage modelling and hard risk limits. Paper trading only (React, TensorFlow.js).
  7. LinkedIn outreach tool that runs in the user's own browser session [CONFIRM keep; some recruiters see LinkedIn automation as against LinkedIn's terms. Fallback: leave it out].
- Result: The team gets a fresh brief every day without manual research. The tools are private builds with no public demo.
- Proof: none. Do not add a fake screenshot. Use a typographic cover.
- Close: "When a tool doesn't exist, I build it with AI and learn how it works." [Email me] [Next case]

### Case: events-and-partnerships (new)
- Title: Event meetings that turned into clients
- Summary: How I turned startup events in Bengaluru into booked meetings, CRM records and two paying clients. [CONFIRM count and Rahul's share]
- Metrics: 13 accounts met at events and followed up (Aug to Nov) · 8 meetings held · 5 meetings booked at Bengaluru Tech Summit 2026 · **2 clients** (highlighted) [CONFIRM].
- Context: Team Counsel meets founders at ecosystem events: eChai, CEDAT, an India–Germany startup bridge event and Bengaluru Tech Summit.
- What I did: 1) Wrote meeting minutes for each event and turned them into follow-up lists. 2) Booked follow-up calls and logged every event lead into Zoho CRM (rule set on 17 Nov). 3) Planned Bengaluru Tech Summit meetings and stall coverage for partnerships. 4) Wrote go/no-go briefs on two legal-tech partnership offers.
- Result: 13 event-sourced accounts followed up before BTS, with 8 meetings held; 5 confirmed meetings at BTS (18 to 19 Nov); 2 event leads converted to paid work [CONFIRM].
- What didn't move: Some event follow-ups were no-shows.
- Attribution note: the SDR sourced part of the event pipeline; keep "we" wording where it was shared.
- Rules: no client, person or fee names. Event names are fine.
- Fallback if Rahul doesn't confirm: drop the "2 clients" metric and title, use "Event follow-ups that became meetings", metrics 13 / 8 / 5.
- Proof: none public. Typographic cover.

### Case: coindcx-partner-vertical (new)
- Title: A partner channel at $30M+ monthly volume
- Summary: I built and ran CoinDCX's Business Partner vertical and the campaigns around it.
- Metrics: **$30M+ monthly partner trading volume** (highlighted) · $8M+ AUC in Advanced Earn · $2M+ monthly fresh AUC for Prime · 2× Whale of the Quarter.
- Context: CoinDCX, Business & Strategic Alliances, Feb 2024 to Jun 2025, intern then Analyst.
- What I did: 1) Built the Business Partner vertical and ran its first partner webinar. 2) Led sub-broker acquisition campaigns [CONFIRM 250+ vs 100+]. 3) Found ICP prospects in Databricks and ran MoEngage lifecycle campaigns. 4) Set up MIS reporting for sales performance and pipeline. 5) Ran the Oct to Dec festive Advanced Earn campaigns (about $1M deployed).
- Result: As in metrics, plus $150,000+ AUC onboarded through the Prime funnel as an intern.
- Proof: none (company data). Typographic cover. Add a caption: "Figures from my own records at CoinDCX."
- Close: [Email me] [Back to all work]

### /about
- H1: About
- I'm Rahul, a GTM and revenue operations person in Bengaluru. I like the unglamorous part of growth: lists, sending setup, CRM rules and the weekly numbers that say whether any of it works.
- At Team Counsel I'm the first GTM hire. I set up the outbound stack, ran the campaigns, onboarded the SDR and counted every meeting by hand when the tools couldn't. Before that I spent about two years in sales and partnerships at CoinDCX and Pickcel.
- I don't hand-write code. I build working tools by directing AI coding agents, debug with them, and make sure I understand how each part works. That's how the daily research brief and the lead tools on this site got made.
- I studied aerospace engineering at Jain University (B.Tech, 2022).
- I'm looking for GTM Strategy & Ops, RevOps, Growth Ops or Sales Ops roles.
- [See the work] [Download resume]

### /contact
- H1: Contact
- Email: rahulbagur@gmail.com [CONFIRM] · LinkedIn: linkedin.com/in/rahulbagur · Resume: PDF · Location: Bengaluru, India
- Line: Email is fastest.

### /experience extras
- **Skills.** GTM and RevOps: outbound sequencing, A/B testing, ICP and list building, CRM design and hygiene, funnel reporting and MIS, SDR enablement, partner programmes.
- **Tools by function:** Sequencing: Instantly, Salesforge · CRM: Zoho CRM, Zoho SalesIQ · Enrichment and outreach: Apollo.io, LinkedIn Sales Navigator · Data and campaigns: Databricks, MoEngage · Workspace: Google Workspace, Zoho Vault.
- **Building with AI:** I ship working tools by directing AI coding agents (Claude, Gemini CLI), debug with them, and learn the concepts underneath. SQL for data pulls.

---

## 6. Salesforge zeros note (keep verbatim)

Put this in a Callout on outbound-engine and multichannel-tests, and keep it in the lightbox caption of the 8 Salesforge screenshots that show 0 Positive / 0 Meetings (wording from `resume_site/proof/CAPTIONS.md`):

> Positive and Meetings booked read 0 because replies were handled and meetings booked outside Salesforge, so they were never tagged in the tool. Actual outcomes, hand-counted from the inbox for 11 Aug to 20 Nov 2026: 53 replies (13 email, at least 40 LinkedIn), 22 positive, 6 meetings booked from cold outbound (4 held), 1 paying client.

The tiles stay visible in the images. Never black them out.

## 7. Proof images (all 17 in `public/proof/`, keep every one)

The brief said 16; the repo has 17 PNGs (plus `.gitkeep`). All stay.
- outbound-engine (9): outbound-domains-mailboxes, outbound-volume, outbound-instantly-salesforge, salesforge-sender-profiles, salesforge-sequences-list, salesforge-all-time-email-funnel, salesforge-all-time-linkedin-funnel, salesforge-analytics-6-20-nov, salesforge-early-craas-ny
- multichannel-tests (7): ab-ecp-india-replies, ab-us-uk-new-gc-linkedin, linkedin-acceptance-778, salesforge-ecp-india-runway-ending, salesforge-us-uk-new-gc-linkedin, salesforge-incubators-india, salesforge-linkedin-previous-fgc-ecp-craas
- retargeting-a-failed-offer (1): retarget-seed-funded
- Hero stack reuses 3 of these. Never use leads.csv data or the Primebox screenshot.

## 8. Component map

| Where | Component | URL | Changes |
|---|---|---|---|
| Nav | shadcnui-blocks navbar-02 | https://21st.dev/@shadcnui-blocks/components/navbar-02 | Sticky; drop Sign In/Sign Up/theme toggle; plain links (skip navigation-menu dropdowns); Sheet on mobile; Skiper Link000 underline on links. |
| Hero copy block | shadcnui-blocks hero-07 | https://21st.dev/@shadcnui-blocks/components/hero-07 | Left-align; drop AnimatedGridPattern and motion; buttons rounded-md; GSAP SplitText on H1. |
| Hero proof visual | Componentry layered-stack | https://componentry.dev (r/layered-stack.json) | 3 proof images; rotation ±4°; reduced motion = static fan; click opens lightbox. |
| Proof strip, case metrics | shadcnui-blocks stats-07 | https://21st.dev/@shadcnui-blocks/components/stats-07 | 4 cells; one highlighted with --primary-soft. No count-up. |
| Tool marquee | Magic UI marquee | https://21st.dev/@magicui/components/marquee | Text chips, 60s, pauseOnHover, edge mask, static under reduced motion; `aria-hidden` duplicates and a visually-hidden plain list for screen readers. |
| Case cards | shadcnblocks blog7 | https://21st.dev/@shadcnblockscom/components/blog7 | Cover = proof image or typographic cover; outcome title; tags; "Read the case". |
| Experience | shadcnui-blocks timeline-02 | https://21st.dev/@shadcnui-blocks/components/timeline-02 | Add context/owned lines and bullet list; GSAP line draw via `useTimelineDraw`. |
| How I work | olewandowski1 how-it-works-2 | https://21st.dev/@olewandowski1/components/how-it-works-2 | Lucide icons or step numbers 1 to 5; copy from section 5. |
| Proof gallery | olewandowski1 gallery-4 | https://21st.dev/@olewandowski1/components/gallery-4 | No grayscale; data from content.ts; first 3 + "See all"; lightbox with caption, prev/next, keys, counter. |
| Inline/nav/footer links | Skiper UI skiper40 | https://skiper-ui.com/v1/skiper40 | Link000 internal, Link001 external; pure CSS. |
| Motion hooks | GSAP useGSAP + SplitText + ScrollTrigger | https://gsap.com/docs/v3/Plugins/SplitText/ | Code in `components/motion_gsap-scrolltrigger-splittext.md`. |
| Contact CTA | shadcnui-blocks cta-04 | https://21st.dev/@shadcnui-blocks/components/cta-04 | Remove circuit background; copy from section 5. |
| Footer | shadcnui-blocks footer-05 | https://21st.dev/@shadcnui-blocks/components/footer-05 | Wordmark instead of SVG logo; LinkedIn, GitHub, Email icons only. |
| Callout | built with shadcn card tokens | n/a | --primary-soft fill, 1px --primary left border, "Why Salesforge shows 0" heading. |

## 9. Acceptance checklist

- [ ] Every number on the site appears in section 5 or 6 of this spec. No new numbers.
- [ ] No client, prospect or person names; no fees; no salary; no phone; no photo; no "Blume".
- [ ] No banned words (list in section 5). Search the built HTML.
- [ ] Nothing says Rahul hand-writes code.
- [ ] All 17 proof images load on their case pages; lightbox works by mouse, touch and keyboard.
- [ ] The Salesforge note is on both case pages and in the 8 relevant captions.
- [ ] Deep links (/work/outbound-engine etc.) load directly (404.html fallback still built).
- [ ] With `prefers-reduced-motion: reduce`, nothing animates and all content is visible.
- [ ] Mobile 390×844: name, positioning, both buttons and the top of the proof strip are above the fold.
- [ ] Lighthouse mobile Performance ≥ 90, Accessibility ≥ 95.
- [ ] All [CONFIRM] items either confirmed by Rahul or set to their fallback.

## 10. [CONFIRM] list for Rahul

1. Title: "Growth & Strategy Lead (GTM)" (Slack shows "GTM Strategy" hire).
2. 11,246 emails / 7,623 Instantly: 1,372 Instantly emails were sent before 16 Feb. Were those yours? If not, use 9,874 since Feb.
3. Events case: "2 clients from events" and how much of the event pipeline was yours vs the SDR's.
4. CoinDCX sub-broker leads: 250+ interested or 100+ inbound.
5. LinkedIn ~21% reply rate among messaged people (live today, not in the latest approved list).
6. Keep the LinkedIn outreach tool in the builds list?
7. Public email: rahulbagur@gmail.com?
8. Contact line: open to full-time roles, reply within a day, remote/relocation.
9. OK to delete `_legacy/` from the repo?
