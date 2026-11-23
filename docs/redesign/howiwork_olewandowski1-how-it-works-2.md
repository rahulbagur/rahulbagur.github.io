# How It Works Timeline (21st.dev id 19863)

- 21st URL: https://21st.dev/@olewandowski1/components/how-it-works-2
- Install: `npx shadcn@latest add "https://21st.dev/r/olewandowski1/how-it-works-2?api_key=$API_KEY_21ST"`
- Retrieved via 21st MCP get_component on 23 Nov 2026 (free tier, 1 of 2 daily retrievals).
- npm deps: {"class-variance-authority": "latest"}

## Component
```tsx
import {
  RiUserAddLine,
  RiSettings4Line,
  RiTeamLine,
  RiRocketLine,
} from "@remixicon/react";

import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: RiUserAddLine,
    title: "Create your account",
    copy: "Sign up in under two minutes, no credit card required. Your workspace is ready the moment you confirm your email.",
  },
  {
    icon: RiSettings4Line,
    title: "Configure your workflow",
    copy: "Choose from pre-built templates or define your own pipeline. Acme adapts to how your team already works.",
  },
  {
    icon: RiTeamLine,
    title: "Invite your team",
    copy: "Send role-based invites in bulk. Colleagues join with a single click and inherit the right permissions automatically.",
  },
  {
    icon: RiRocketLine,
    title: "Ship with confidence",
    copy: "Run automated checks, review the audit trail, and deploy, knowing Acme has your back at every stage.",
  },
];

export default function HowItWorksBlock() {
  return (
    <section className="flex w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-14">
          <Badge variant="outline" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Up and running in four steps
          </h2>
          <p className="mt-3 text-muted-foreground">
            Acme is designed for momentum. Go from sign-up to full team
            collaboration without a single support ticket.
          </p>
        </div>

        <ol className="flex flex-col">
          {steps.map(({ icon: Icon, title, copy }, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li key={title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-muted">
                    <Icon
                      className="size-4 text-foreground"
                      aria-hidden="true"
                    />
                  </span>
                  {!isLast && <span className="mt-1 w-px flex-1 bg-border" />}
                </div>

                <div className={isLast ? "pb-0" : "pb-10"}>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{copy}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

```

## Demo
```tsx
import HowItWorksBlock from "@/components/ui/how-it-works-2";

export default function Demo() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <HowItWorksBlock />
    </div>
  );
}

```

## Registry dependency /components/ui/badge.tsx
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```
