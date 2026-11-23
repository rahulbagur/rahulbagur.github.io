import type { Metric } from "@/content";
import { cn } from "@/lib/utils";

const cells = [
  { value: "9,874", label: "cold emails run since Feb 2026", highlight: false },
  { value: "6", label: "meetings booked from cold outbound, Aug to Nov 2026 (4 held)", highlight: false },
  { value: "1", label: "paying client from that outbound", highlight: true },
  { value: "$30M+", label: "monthly trading volume across CoinDCX's Business Partner vertical", highlight: false },
];

export function ProofStrip({ items = cells, caption }: { items?: Metric[]; caption?: string }) {
  return (
    <div>
      <div className="rounded-[10px] border border-border bg-muted p-1">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className={cn(
                "rounded-md border border-border p-4 md:p-6",
                item.highlight ? "bg-primary-soft" : "bg-card"
              )}
            >
              <p
                className={cn(
                  "font-display text-[36px] leading-[40px] font-medium tabular-nums md:text-[44px] md:leading-[48px]",
                  item.highlight && "text-primary"
                )}
              >
                {item.value}
              </p>
              <p className="mt-2 text-[15px] leading-[22px]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {caption ? <p className="mt-3 text-[13px] leading-[18px] text-muted-foreground">{caption}</p> : null}
    </div>
  );
}
