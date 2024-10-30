import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-dark md:hover:bg-blue text-white shadow disabled:bg-gray-darklight disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-darklight",
        destructive: "bg-destructive text-destructive-foreground shadow-sm",
        outline: "border border-blue text-blue md:hover:opacity-70 bg-background shadow-sm",
        secondary: "bg-secondary text-secondary-foreground shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4",
      },
      size: {
        sm: "h-8 rounded-md px-6 text-xs",
        default: "h-9 px-8 py-5",
        lg: "h-12 rounded-md px-14",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
