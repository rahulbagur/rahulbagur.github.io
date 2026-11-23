import { useEffect, useState } from "react";
import { CaseCards } from "@/components/blocks/CaseCards";
import { cases } from "@/content";
import { cn } from "@/lib/utils";

const filters = ["All", "Outbound", "RevOps", "Events", "Builds"] as const;

export default function WorkIndex() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  useEffect(() => {
    document.title = "Work | Rahul Bagur";
    return () => {
      document.title = "Rahul Bagur | GTM and revenue operations";
    };
  }, []);
  const items = filter === "All" ? cases : cases.filter((item) => item.category === filter || item.tags.includes(filter));
  return (
    <article className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
      <h1 className="font-display text-[38px] leading-[42px] font-medium md:text-[56px] md:leading-[60px]">Work</h1>
      <p className="mt-3 max-w-[68ch] text-[17px] leading-[28px]">
        Six pieces of work. The numbers and the screenshots are on each page.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              "h-11 rounded-md border border-border px-3 font-display text-[15px]",
              filter === item ? "bg-primary text-primary-foreground" : "bg-card"
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <CaseCards items={items} />
      </div>
    </article>
  );
}
