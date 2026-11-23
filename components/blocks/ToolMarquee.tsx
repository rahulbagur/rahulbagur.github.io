import { tools } from "@/content";

export function ToolMarquee() {
  const row = (
    <div className="flex shrink-0 gap-3 pr-3">
      {tools.map((tool) => (
        <span key={tool} className="rounded-md bg-muted px-3 py-2 font-display text-[15px] whitespace-nowrap">
          {tool}
        </span>
      ))}
    </div>
  );
  return (
    <div>
      <p className="mb-3 text-[13px] leading-[18px] text-muted-foreground">Tools I've set up or run day to day</p>
      <ul className="sr-only">
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <div className="group relative overflow-hidden motion-reduce:overflow-visible">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent motion-reduce:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent motion-reduce:hidden" />
        <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:animate-none">
          <div aria-hidden="true" className="flex gap-3 motion-reduce:hidden">
            {row}
          </div>
          <div className="flex gap-3 motion-reduce:flex-wrap">{row}</div>
        </div>
      </div>
    </div>
  );
}
