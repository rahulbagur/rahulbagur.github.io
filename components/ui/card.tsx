import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("rounded-[10px] border border-border bg-card text-foreground", className)}
      {...props}
    />
  );
}

export { Card };
