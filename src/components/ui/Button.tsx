import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        outline:
          "border-border bg-transparent hover:bg-muted text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost:
          "hover:bg-muted text-foreground",
        link: "text-primary hover:text-primary-hover relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
      },
      size: {
        default: "min-h-[48px] h-auto py-3 px-6 rounded-sm touch-manipulation",
        sm: "min-h-[44px] px-4 text-xs rounded-sm touch-manipulation",
        lg: "h-12 px-8 text-base rounded-md",
        icon: "h-10 w-10 rounded-sm",
        link: "p-0 rounded-none h-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">{children}</span>
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
