import { useRef } from "react";
import { Link } from "react-router-dom";
import { roles } from "@/content";
import { useTimelineDraw } from "@/components/motion/useTimelineDraw";

export function ExperienceTimeline({ full = false }: { full?: boolean }) {
  const scope = useRef<HTMLDivElement>(null);
  useTimelineDraw(scope);
  return (
    <div ref={scope} data-tl className="relative ml-3">
      <div className="absolute inset-y-0 left-0 border-l border-border" />
      <div data-tl-line className="absolute inset-y-0 left-0 origin-top border-l-2 border-primary" />
      {roles.map((role) => (
        <article key={`${role.company}-${role.period}`} data-tl-item className="relative pb-12 pl-8 last:pb-0">
          <div className="absolute top-1 left-px size-3 -translate-x-1/2 rounded-full border border-primary bg-card" />
          <p className="text-[13px] leading-[18px] text-muted-foreground">
            {role.period}
            {role.place ? `, ${role.place}` : ""}
          </p>
          <h3 className="mt-1 font-display text-[19px] leading-[26px] font-medium md:text-[21px] md:leading-7">
            {role.company}
          </h3>
          <p className="font-display text-[15px]">{role.title}</p>
          <div className="mt-3 max-w-[68ch] space-y-3 text-[15px] leading-[22px]">
            {(full ? role.paragraphs : role.paragraphs.slice(0, 1)).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
      {full ? null : (
        <p className="mt-8 pl-8">
          <Link to="/experience" className="font-display underline-offset-4 hover:underline">
            Full experience
          </Link>
        </p>
      )}
    </div>
  );
}
