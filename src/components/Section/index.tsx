import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  isPink?: boolean;
  isCentered?: boolean;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export const Section: React.FC<Props> = ({
  children,
  className,
  isPink = false,
  isCentered = false,
}) => (
  <div
    className={cn(
      "min-h-screen p-4",
      { "bg-pink": isPink },
      { "flex flex-col items-center justify-center": isCentered },
      className
    )}
  >
    {isCentered ? (
      <div className="-translate-y-12 text-center space-y-12">{children}</div>
    ) : (
      children
    )}
  </div>
);
