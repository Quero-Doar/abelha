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

type PropsBase = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline";
  rounded?: "full";
  size?: "sm" | "lg";
};

type PropsWithLabel = PropsBase & { label: string; children?: never };

type PropsWithChildren = PropsBase & {
  children: React.ReactNode;
  label?: never;
};

type Props = PropsWithLabel | PropsWithChildren;

export const Button: React.FC<Props> = ({
  label,
  className,
  rounded,
  children,
  ...props
}) => (
  <ShadButton className={cn(variants({ rounded }), className)} {...props}>
    {label ? <p>{label}</p> : children}
  </ShadButton>
);
