# Magic UI Marquee

- 21st URL: https://21st.dev/@magicui/components/marquee
- Source used: official public registry `npx shadcn@latest add https://magicui.design/r/marquee.json` (same component as the 21st listing; no 21st key needed)
- npm deps: None
- registry deps: None
- Pure CSS animation, no motion library. Add the keyframes below to index.css (Tailwind v4 @theme).

## cssVars
```json
{
  "theme": {
    "animate-marquee": "marquee var(--duration) infinite linear",
    "animate-marquee-vertical": "marquee-vertical var(--duration) linear infinite"
  }
}
```

## css
```json
{
  "@keyframes marquee": {
    "from": {
      "transform": "translateX(0)"
    },
    "to": {
      "transform": "translateX(calc(-100% - var(--gap)))"
    }
  },
  "@keyframes marquee-vertical": {
    "from": {
      "transform": "translateY(0)"
    },
    "to": {
      "transform": "translateY(calc(-100% - var(--gap)))"
    }
  }
}
```

## registry/magicui/marquee.tsx
```tsx
import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around gap-(--gap)", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}

```
