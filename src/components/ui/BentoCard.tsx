import * as React from "react";
import { cn } from "@/lib/utils";

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientGlow?: boolean;
}

export const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  ({ className, gradientGlow = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-xl bg-white p-5 md:p-8",
          "border border-zinc-200 transition-colors duration-500 shadow-sm",
          gradientGlow && "bento-glow",
          className
        )}
        {...props}
      >
        {/* Subtle background gradient overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-zinc-50/[0.5] to-transparent opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    );
  }
);
BentoCard.displayName = "BentoCard";
