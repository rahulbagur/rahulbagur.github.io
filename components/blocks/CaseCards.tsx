import { Link } from "react-router-dom";
import { cases } from "@/content";
import { Badge } from "@/components/ui/badge";
import { Picture } from "./Picture";

export function CaseCards({ items = cases }: { items?: typeof cases }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((item) => {
        const cover = item.cover ? item.shots.find((shot) => shot.file === item.cover) ?? cases.flatMap((entry) => entry.shots).find((shot) => shot.file === item.cover) : undefined;
        return (
          <article key={item.slug} className="overflow-hidden rounded-[10px] border border-border bg-card">
            <Link to={`/work/${item.slug}`} className="block">
              {cover ? (
                <Picture shot={cover} className="aspect-[16/10] w-full object-cover" />
              ) : (
                <div className="flex aspect-[16/10] items-center bg-muted px-6">
                  <p className="font-display text-[28px] leading-[34px] font-medium">{item.coverLabel}</p>
                </div>
              )}
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <h3 className="mt-3 font-display text-[19px] leading-[26px] font-medium text-pretty md:text-[21px] md:leading-7">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[22px] text-muted-foreground">{item.line}</p>
                <p className="mt-3 font-display text-[15px]">Read the case</p>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
