import { useState } from "react";
import type { Shot } from "@/content";
import { Picture } from "./Picture";
import { Lightbox } from "./Lightbox";

export function ProofGallery({ shots }: { shots: Shot[] }) {
  const [openAll, setOpenAll] = useState(shots.length <= 3);
  const [active, setActive] = useState<number | null>(null);
  const visible = openAll ? shots : shots.slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {visible.map((shot, index) => (
          <figure key={shot.file} className={index === 0 ? "sm:col-span-2" : ""}>
            <button
              type="button"
              className="block w-full overflow-hidden rounded-[10px] border border-border bg-card text-left"
              onClick={() => setActive(index)}
            >
              <Picture shot={shot} className="aspect-[16/10] w-full object-cover" />
              <span className="sr-only">Enlarge</span>
            </button>
            <figcaption className="mt-2 max-w-[68ch] text-[13px] leading-[18px] text-muted-foreground">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      {!openAll ? (
        <button
          type="button"
          className="mt-4 inline-flex h-11 items-center rounded-md border border-border px-4 font-display"
          onClick={() => setOpenAll(true)}
        >
          See all {shots.length} screenshots
        </button>
      ) : null}
      <Lightbox
        shots={shots}
        index={active ?? 0}
        onIndex={setActive}
        open={active !== null}
        onOpenChange={(next) => {
          if (!next) setActive(null);
        }}
      />
    </div>
  );
}
