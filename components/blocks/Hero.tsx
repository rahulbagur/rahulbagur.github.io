import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { heroShots, resumeHref, type Shot } from "@/content";
import { useHeroReveal } from "@/components/motion/useHeroReveal";
import { cn } from "@/lib/utils";
import { Lightbox } from "./Lightbox";
import { Picture } from "./Picture";

function ProofStack({ onOpen }: { onOpen: (index: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  const place = (spread: boolean, animate: boolean) => {
    const container = ref.current;
    if (!container) return;
    const cards = Array.from(container.children) as HTMLElement[];
    cards.forEach((card, i) => {
      const rotate = spread || reduce ? [-4, 0, 4][i] ?? 0 : gsap.utils.random(-4, 4);
      const x = spread || reduce ? 0 : container.clientWidth / 2 - card.offsetWidth / 2 - card.offsetLeft;
      const y = spread || reduce ? (reduce ? i * 12 : 0) : container.clientHeight / 2 - card.offsetHeight / 2 - card.offsetTop;
      const vars = { x, y, rotate, zIndex: 10 - i, duration: animate && !reduce ? 0.6 : 0, ease: "expo.out", overwrite: true };
      if (animate && !reduce) gsap.to(card, vars);
      else gsap.set(card, vars);
    });
  };

  return (
    <div
      ref={ref}
      className="relative mx-auto h-[180px] w-full max-w-md lg:h-[340px]"
      onMouseEnter={() => {
        if (!coarse && !reduce) place(true, true);
      }}
      onMouseLeave={() => {
        if (!coarse && !reduce) place(false, true);
      }}
    >
      {heroShots.map((shot, index) => (
        <button
          key={shot.file}
          type="button"
          onClick={() => onOpen(index)}
          className={cn(
            "absolute top-6 left-6 w-[78%] overflow-hidden rounded-[10px] border border-border bg-card text-left",
            index === 0 && "top-0 left-0",
            index === 2 && "top-12 left-12"
          )}
        >
          <Picture shot={shot} eager className="aspect-[16/10] w-full object-cover" />
          <span className="sr-only">Enlarge</span>
        </button>
      ))}
    </div>
  );
}

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);
  useHeroReveal(scope);

  return (
    <section ref={scope} className="mx-auto grid max-w-[1120px] items-start gap-8 px-4 pt-8 pb-6 sm:px-6 lg:grid-cols-12 lg:items-center lg:py-24">
      <div className="lg:col-span-7">
        <p className="mb-4 inline-flex rounded-md bg-muted px-2 py-1 font-display text-[13px] leading-[18px]">
          Open to GTM, RevOps, Growth Ops and Sales Ops roles · Bengaluru
        </p>
        <h1 data-reveal className="font-display text-[38px] leading-[42px] font-medium text-pretty md:text-[56px] md:leading-[60px]">
          Rahul Bagur
        </h1>
        <p className="mt-4 max-w-[68ch] text-[21px] leading-[30px]">
          I build the outbound, CRM and reporting systems a sales team runs on, and I count what they actually produce.
        </p>
        <p className="mt-4 max-w-[68ch] text-[17px] leading-[28px] text-muted-foreground">
          First GTM hire at Team Counsel, a legal consulting practice for startups. From August to November 2026 my outbound booked 6 meetings and won a paying client. Before that, sales and partnerships at CoinDCX and Pickcel.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/work">See the work</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href={resumeHref}>Download resume</a>
          </Button>
        </div>
      </div>
      <div className="lg:col-span-5">
        <ProofStack onOpen={setActive} />
        <p className="mt-3 text-[13px] leading-[18px] text-muted-foreground">Real dashboards, names hidden. Tap to enlarge.</p>
      </div>
      <Lightbox
        shots={heroShots}
        index={active ?? 0}
        onIndex={(index) => setActive(index)}
        open={active !== null}
        onOpenChange={(next) => {
          if (!next) setActive(null);
        }}
      />
    </section>
  );
}
