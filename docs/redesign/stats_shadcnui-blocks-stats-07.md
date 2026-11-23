# stats: shadcnui-blocks stats-07

- 21st URL: https://21st.dev/@shadcnui-blocks/components/stats-07
- Source used: official public registry https://www.shadcnui-blocks.com/r/stats-07.json (same component as the 21st listing; no 21st key needed). Fetched 23 Nov 2026.
- npm deps: None
- registry deps: None
- How to use here: Bordered metric grid. Used for the proof strip under the hero and the top of the outbound case page. Make it 4 cells; the '1 paying client' cell gets the accent (Von Restorff).
- Port notes: replace `next/link` with react-router `Link` or `<a>`; rewrite `@/registry/bases/radix/ui/*` imports to `@/components/ui/*`.

## src/registry/blocks/shared/stats-07/components/stats.tsx
```tsx
import { cn } from "@/lib/utils";

function Stats() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-balance text-center font-medium text-4xl tracking-tight md:text-4xl">
        Built with scale in mind
      </h2>
      <p className="mt-3.5 text-center text-muted-foreground text-xl tracking-[-0.015em] sm:text-lg md:text-2xl">
        A quick look at the impact and adoption of our UI components
      </p>

      <div className="mt-14 rounded-2xl border bg-muted p-1">
        <div
          className={cn(
            "grid grid-cols-1 gap-1 overflow-hidden rounded-xl sm:grid-cols-2 md:grid-cols-3",
            "*:rounded *:border *:first:rounded-t-xl *:last:rounded-b-xl sm:*:nth-2:rounded-tr-xl sm:*:first:rounded-tl-xl sm:*:first:rounded-tr md:*:nth-2:rounded-tr md:*:last:rounded-e-xl md:*:last:rounded-bl md:*:first:rounded-s-xl dark:*:border-foreground/20"
          )}
        >
          <div className="bg-background p-10">
            <span className="font-medium text-5xl">70%</span>
            <p className="mt-4 text-foreground/80 text-xl">
              Faster UI development
            </p>
          </div>
          <div className="bg-background p-10">
            <span className="font-medium text-5xl">5x</span>
            <p className="mt-4 text-foreground/80 text-xl">
              Increase in productivity
            </p>
          </div>
          <div className="bg-background p-10 sm:col-span-2 md:col-span-1">
            <span className="font-medium text-5xl">98%</span>
            <p className="mt-4 text-foreground/80 text-xl">
              Customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

```
