# Grayscale Mosaic Gallery (21st.dev id 26806)

- 21st URL: https://21st.dev/@olewandowski1/components/gallery-4
- Retrieved via 21st MCP get_component on 23 Nov 2026 (free tier). Code below is verbatim.
- Registry deps: shadcn `badge` and `dialog` (official shadcn: `npx shadcn@latest add badge dialog`), which pull @radix-ui/react-dialog, class-variance-authority, lucide-react.

# Grayscale Mosaic Gallery — Default
A four-by-two photo mosaic grid where tiles turn from grayscale to color on hover and open a lightbox dialog with the photo's caption and location.

install: npx shadcn@latest add "https://21st.dev/r/olewandowski1/gallery-4?api_key=$API_KEY_21ST"

## Component
```tsx
"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

type Photo = {
  id: number;
  src: string;
  title: string;
  location: string;
};

const photos: Photo[] = [
  {
    id: 1,
    src: "https://cdn.21st.dev/assets/mirror/a2/a2764f768efec602ba1c8326917338179218e0633c7750112b9f097be2adf089.jpg",
    title: "Financial District",
    location: "New York, USA",
  },
  {
    id: 2,
    src: "https://cdn.21st.dev/assets/mirror/cd/cd147d18aba4119bb2ff18c9a0c3d0c288e522e3f337538fce4dd65a40c6f5c4.jpg",
    title: "Alpine Fog",
    location: "Grindelwald, CH",
  },
  {
    id: 3,
    src: "https://cdn.21st.dev/assets/mirror/64/64fbb664cfbed080b6752521916411e8a512a7fe83dc88fb280ac8bea4205866.jpg",
    title: "Coastal Dunes",
    location: "Jutland, DK",
  },
  {
    id: 4,
    src: "https://cdn.21st.dev/assets/mirror/3b/3b83b6e017654aee8c1a4317adc04d73e28e65eaf2aafbbaa26f3b750275ac10.jpg",
    title: "Pine Canopy",
    location: "Bavaria, DE",
  },
  {
    id: 5,
    src: "https://cdn.21st.dev/assets/mirror/c0/c00ab4224f4dafb35957325e47f7aaad095a18ed7e535c5c08478791c73ca774.jpg",
    title: "Still Water",
    location: "Hallstatt, AT",
  },
];

export default function GalleryBlock() {
  const [active, setActive] = React.useState<Photo | null>(null);

  return (
    <section className="flex min-h-svh w-full justify-center bg-background px-6 py-16 text-foreground">
      <div className="w-full max-w-4xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <Badge variant="secondary">Field Notes</Badge>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Selected Work
            </h2>
          </div>
          <span className="text-sm text-muted-foreground tabular-nums">
            {photos.length} Photos
          </span>
        </div>

        <Dialog
          open={active !== null}
          onOpenChange={(open) => !open && setActive(null)}
        >
          <div className="grid aspect-[3/2] grid-cols-4 grid-rows-2 gap-2">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActive(photo)}
                className={
                  "group relative overflow-hidden rounded-lg border border-border bg-muted " +
                  (index === 0 ? "col-span-2 row-span-2" : "")
                }
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="size-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-opacity group-hover:bg-foreground/10 group-hover:opacity-100">
                  <span className="flex size-9 items-center justify-center rounded-md bg-background/90 text-foreground">
                    <ZoomIn className="size-4" aria-hidden="true" />
                  </span>
                </span>
              </button>
            ))}
          </div>

          <DialogContent className="overflow-hidden p-0 sm:max-w-2xl">
            {active && (
              <>
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={active.src}
                    alt={active.title}
                    className="size-full object-cover"
                  />
                </div>
                <div className="p-4 pt-0">
                  <DialogTitle className="text-base">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription>{active.location}</DialogDescription>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

```

## Demo (usage)
```tsx
import GalleryBlock from "@/components/ui/gallery-4";

export default function GalleryDemo() {
  return <GalleryBlock />;
}

```

