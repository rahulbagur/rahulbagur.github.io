import { useRef } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
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
            {role.place ? ` · ${role.place}` : ""}
          </p>
          <h3 className="mt-1 font-display text-[19px] leading-[26px] font-medium md:text-[21px] md:leading-7">
            {role.company}
          </h3>
          <p className="font-display text-[15px]">{role.title}</p>
          {role.context ? <p className="mt-2 max-w-[68ch] text-[15px] leading-[22px]">{role.context}</p> : null}
          {role.owned ? <p className="mt-1 max-w-[68ch] text-[15px] leading-[22px]">Owned: {role.owned}</p> : null}
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-[22px]">
            {(full ? role.bullets : role.bullets.slice(0, 2)).map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {role.badges ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {role.badges.map((badge) => (
                <Badge key={badge} variant="outline">
                  {badge}
                </Badge>
              ))}
            </div>
          ) : null}
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
