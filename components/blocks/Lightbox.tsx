import { useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { salesforgeZeros, type Shot } from "@/content";
import { Picture } from "./Picture";

export function Lightbox({
  shots,
  index,
  onIndex,
  open,
  onOpenChange,
}: {
  shots: Shot[];
  index: number;
  onIndex: (index: number) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const shot = shots[index];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onIndex((index + 1) % shots.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + shots.length) % shots.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, onIndex, shots.length]);

  if (!shot) return null;
  const caption = shot.zeros ? `${shot.caption} ${salesforgeZeros}` : shot.caption;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby="lightbox-caption">
        <DialogTitle className="sr-only">{shot.alt}</DialogTitle>
        <div className="mt-10 flex items-center justify-between gap-3">
          <button
            type="button"
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-md border border-border px-3 font-display"
            onClick={() => onIndex((index - 1 + shots.length) % shots.length)}
          >
            Previous
          </button>
          <p className="font-display text-[13px] tabular-nums text-muted-foreground">
            {index + 1} of {shots.length}
          </p>
          <button
            type="button"
            className="inline-flex h-11 min-w-11 items-center justify-center rounded-md border border-border px-3 font-display"
            onClick={() => onIndex((index + 1) % shots.length)}
          >
            Next
          </button>
        </div>
        <Picture shot={shot} eager className="mx-auto mt-3 max-h-[80vh] w-auto max-w-full object-contain" />
        <DialogDescription id="lightbox-caption" className="mt-3 max-w-[68ch] text-[15px] leading-[22px] text-foreground">
          {caption}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
