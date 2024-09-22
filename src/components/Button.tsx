import { cn } from "@/lib/utils";
import { Button as ShadButton } from "./ui/button";
import { cva } from "class-variance-authority";

const variants = cva("", {
  variants: {
    rounded: {
      default: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "default",
  },
});

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "outline";
  rounded?: "full";
  size?: "sm" | "lg";
};

export const Button: React.FC<Props> = ({
  label,
  className,
  rounded,
  ...props
}) => (
  <ShadButton className={cn(variants({ rounded }), className)} {...props}>
    {label}
  </ShadButton>
);
