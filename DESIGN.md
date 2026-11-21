# Design

Personal site for Rahul Bagur, a GTM and revenue-operations hire in Bengaluru. The page is a working record: who he is, the numbers a hiring manager can check, and the work behind them. It is not a sales pitch and not a software-product landing page.

Audience: a hiring manager for GTM Strategy & Ops, RevOps, Growth Ops, or Sales Ops. They skim, then they read.

## Plan

The page is a dossier on cool office paper. The first screen is his name, one positioning line, and links to the work and the resume. Selected work opens a case page each. One accent, used for the action, the rule above the work list, and focus. No second theme.

Rejected, because they are defaults rather than a choice for this brief:

- Azure Slate, Inter, and a floating pill nav (the attached component theme).
- Count-up stats, a bento grid, and a round avatar hero.
- Cream paper with a terracotta accent, near-black with neon, or a navy slate page.
- A newspaper masthead. The content is a record, not a publication.

## Colour

Six colours. Paper is the dominant surface. Pen is the only saturated colour.

| Token | Hex | Role |
| --- | --- | --- |
| Paper | `#EEF0EA` | Page ground. Cool grey-green sheet (green channel highest). Not warm cream. |
| Ink | `#1B221E` | Headings, body, wordmark. |
| Graphite | `#3C4941` | Metadata only: dates, places, tool stacks. Still above 7:1 on paper. |
| Pen | `#B42318` | Primary button, the rule on the results list, "Result" labels, keyboard focus. |
| Pen dark | `#86160F` | Button hover and pressed state. |
| Line | `#CDD4CE` | Rules between records. |

White `#FFFFFF` is reserved for text on the pen button. No gradients, glows, or extra status colours.

## Type

Two faces, from Google Fonts, self-hosted through Fontsource.

- **Familjen Grotesk** (400, 500, 700): name, headings, navigation, buttons, numbers, tables. A grotesque with a slightly square, form-like cut. Not Inter, Geist, Space Grotesk, or a geometric startup face.
- **Petrona** (400): paragraphs, case-study narrative, list items. A screen serif used only for reading text, so the pairing is a system and not a one-word accent.

Scale:

- Name: `clamp(3rem, 8vw, 6.5rem)`, weight 700, line-height 0.9, tracking `-0.03em`
- Positioning line (same `h1`): `clamp(1.6rem, 2.5vw, 2.15rem)`, weight 700
- Section heading: `clamp(1.7rem, 2.4vw, 2.15rem)`, weight 700
- Lead: 1.35rem / 1.45 Petrona
- Body: 1.0625rem / 1.6 Petrona
- UI and metadata: 0.95rem Familjen Grotesk
- Result figures: 1.75rem Familjen Grotesk, tabular numbers

Body measure stays under 80 characters (52ch in Petrona, whose zero is wider than a typical letter). Text is left-aligned. Headings are sentence case. No all-caps labels, no monospace chrome, no italic accent word.

## Layout

One column width: `min(70rem, 100% - 2rem)`, equal left and right edges.

```
Desktop, first screen
+------------------------------------------------------+
| Rahul Bagur                              Work About Contact |
| RAHUL BAGUR                                          |
| I build the outbound, CRM and reporting              |
| systems a sales team runs on.                        |
| [See the work]  Download resume                      |
+------------------------------------------------------+

Selected work: four ruled rows. Each row opens /work/<slug>.
Case page: context, problem, what I did, results, then a proof gallery.
About: one column, degree, tools by function, building with AI. No photo.
Contact: email, resume, LinkedIn, GitHub.
```

The name, the positioning line, and the two links sit in the first view. Navigation collapses to a Menu button. Case routes are real paths. GitHub Pages gets a copy of `index.html` at `404.html` so those paths resolve.

Radius is 0. Elevation is a 1px line, not a shadow. The red rule sits on the work list. Proof images open in a dialog. A missing file stays a labelled slot at `public/proof/`, not a fake chart.

## Motion

Anchor jumps use `scroll-behavior: smooth`. Buttons change fill in 120ms. Nothing else moves. `prefers-reduced-motion: reduce` turns both off.

## Voice

Plain sentences. Concrete verbs. Button and link labels say what happens: "Download resume", "See the work", "Email". No slogan, no invented proof.

## Do

- Keep new UI on these tokens, these two faces, and this record layout.
- Put real figures in the results list or in a case-study result. Do not add a second stat treatment.
- Use Petrona for sentences and Familjen Grotesk for interface and numbers.
- Keep the pen colour on actions, focus, the results rule, and Result labels.

## Don't

- Inter, Geist, Space Grotesk, Instrument Serif, Fraunces, or the neon BAGUR mark.
- Purple, cream and terracotta, black and acid green, navy slate, espresso and orange.
- Glass, gradient meshes, dotted grids, blobs, count-up numbers, fade-up sections.
- Pill eyebrows, tracked all-caps labels, decorative 01/02/03, a single coloured word in the headline.
- Icon tiles, emoji, card grids, soft shadows, a floating pill nav, a four-column footer.
- A phone number, private repo links, client names, or any figure that is not already in the copy sources.
