# hero: shadcnui-blocks hero-07

- 21st URL: https://21st.dev/@shadcnui-blocks/components/hero-07 (21st id 27704)
- Source used: official public registry https://www.shadcnui-blocks.com/r/hero-07.json (same component as the 21st listing; no 21st key needed). Fetched 23 Nov 2026.
- npm deps: ['lucide-react']
- registry deps: ['badge', 'button', 'https://www.shadcnui-blocks.com/r/animated-grid-pattern.json']
- How to use here: Badge + headline + subtext + two CTAs. Use the structure only: left-align it, drop AnimatedGridPattern and motion/react, so no motion dependency.
- Port notes: replace `next/link` with react-router `Link` or `<a>`; rewrite `@/registry/bases/radix/ui/*` imports to `@/components/ui/*`.

## src/registry/blocks/radix/hero-07/components/hero.tsx
```tsx
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/registry/blocks/radix/hero-07/components/ui/animated-grid-pattern";
import { Badge } from "@/registry/bases/radix/ui/badge";
import { Button } from "@/registry/bases/radix/ui/button";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AnimatedGridPattern
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
      />
      <div className="relative z-10 max-w-3xl text-center">
        <Badge
          asChild
          className="rounded-full border-border py-1"
          variant="secondary"
        >
          <Link href="#">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mx-auto mt-6 max-w-xl font-medium text-4xl tracking-tight sm:text-[2.75rem] md:text-6xl/[1.2]">
          Ship better UI without&nbsp;the&nbsp;hassle
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-xl md:text-2xl/normal">
          Instead of starting from scratch every time, use thoughtfully designed
          blocks that give you a solid foundation for any UI.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full" size="lg">
            Get Started <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <Button
            className="rounded-full shadow-none"
            size="lg"
            variant="outline"
          >
            <CirclePlay className="h-5! w-5!" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

```

## src/registry/blocks/radix/hero-07/components/ui/animated-grid-pattern.tsx
```tsx
"use client";

import { motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
}

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  function getPos() {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }

  // Adjust the generateSquares function to return objects with an id, x, and y
  function generateSquares(count: number) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }

  // Function to update a single square's position
  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq
      )
    );
  };

  // Update squares to animate in
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  // Resize observer to update container dimensions
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      ref={containerRef}
      {...props}
    >
      <defs>
        <pattern
          height={height}
          id={id}
          patternUnits="userSpaceOnUse"
          width={width}
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} height="100%" width="100%" />
      <svg className="overflow-visible" x={x} y={y}>
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            animate={{ opacity: maxOpacity }}
            fill="currentColor"
            height={height - 1}
            initial={{ opacity: 0 }}
            key={`${x}-${y}-${index}`}
            onAnimationComplete={() => updateSquarePosition(id)}
            strokeWidth="0"
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            width={width - 1}
            x={x * width + 1}
            y={y * height + 1}
          />
        ))}
      </svg>
    </svg>
  );
}

```
