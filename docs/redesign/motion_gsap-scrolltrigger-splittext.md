# GSAP: ScrollTrigger timeline line + SplitText headline reveal

- Source URLs: https://gsap.com/resources/React/ (useGSAP), https://gsap.com/docs/v3/Plugins/SplitText/, https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/ , https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Packages: `gsap@3.15.1` (Standard "no charge" license, https://gsap.com/standard-license; ScrollTrigger and SplitText ship inside the gsap package and are free), `@gsap/react@2.1.2` (peer: gsap ^3.12.5, react >=17). Fits React 19 + Vite 6.
- This is the ONLY animation library in the build. Do not add framer-motion or motion.

## Verbatim from the GSAP docs

useGSAP (gsap.com/resources/React):
```js
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
const container = useRef();
useGSAP(() => {
  // gsap code here...
  gsap.to('.box', { x: 360 }); // <-- automatically reverted
},{ scope: container }); // <-- scope is for selector text (optional)
```

SplitText with onSplit (v3.13+):
```js
SplitText.create(".split", {
  type: "lines, words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.words, { duration: 1, y: 100, autoAlpha: 0, stagger: 0.05 });
  }
});
```
Docs tips kept: split only what you need; use autoSplit so fonts loading does not break lines; avoid `text-wrap: balance` on split text; SplitText adds aria-label automatically.

matchMedia with reduced motion:
```js
let mm = gsap.matchMedia(), breakPoint = 800;
mm.add({
  isDesktop: `(min-width: ${breakPoint}px)`,
  isMobile: `(max-width: ${breakPoint - 1}px)`,
  reduceMotion: "(prefers-reduced-motion: reduce)",
}, (context) => {
  let { isDesktop, isMobile, reduceMotion } = context.conditions;
  gsap.to(".box", { rotation: isDesktop ? 360 : 180, duration: reduceMotion ? 0 : 2 });
});
```

## Site code built from those docs (written for this redesign, not copied from a library)

`components/motion/useHeroReveal.ts`: one-time headline reveal on load, lines only, 0.6s, skipped for reduced motion.
```tsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, SplitText);

export function useHeroReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      SplitText.create("[data-reveal]", {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, { yPercent: 100, duration: 0.6, ease: "power3.out", stagger: 0.08 });
        },
      });
    });
  }, { scope });
}
```

`components/motion/useTimelineDraw.ts`: the experience timeline's vertical line fills as you scroll and each role fades up once. Scrub only on the line (cheap transform), not on text.
```tsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useTimelineDraw(scope: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo("[data-tl-line]", { scaleY: 0 }, {
        scaleY: 1, ease: "none", transformOrigin: "top center",
        scrollTrigger: { trigger: "[data-tl]", start: "top 70%", end: "bottom 60%", scrub: 0.4 },
      });
      gsap.utils.toArray<HTMLElement>("[data-tl-item]").forEach((el) => {
        gsap.from(el, { y: 16, autoAlpha: 0, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      });
    });
  }, { scope });
}
```
Markup contract for timeline-02: wrapper gets `data-tl`, the absolutely positioned line div gets `data-tl-line` (keep the static border underneath so the line exists with JS off), each role block gets `data-tl-item`.

Rules: no scroll-jacking, no pinning, no smooth-scroll library (no Lenis), nothing animates on the case-study pages except the lightbox. Content must be fully visible with JS disabled or reduced motion on.
