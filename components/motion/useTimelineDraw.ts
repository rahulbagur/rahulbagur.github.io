import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useTimelineDraw(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-tl-line]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: { trigger: "[data-tl]", start: "top 70%", end: "bottom 60%", scrub: 0.4 },
          }
        );
        gsap.utils.toArray<HTMLElement>("[data-tl-item]").forEach((el) => {
          gsap.from(el, {
            y: 16,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });
      });
    },
    { scope }
  );
}
