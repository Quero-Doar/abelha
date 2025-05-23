import { cn } from "@/lib/utils";

import { SvgProps } from "@/lib/props";

type Props = SvgProps & {
  isFilled?: boolean;
};

export const LikeIcon: React.FC<Props> = ({ isFilled, className }) => (
  <svg
    viewBox="0 0 21 20"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(
      "w-3 h-3 md:w-4 md:h-4 transition-all ease-in-out duration-1000 delay-1000",
      className
    )}
  >
    <path
      className={cn("fill-transparent stroke-2 stroke-pink-dark", {
        "stroke-none fill-pink-dark": isFilled,
      })}
      d="M10.5 1.75206C16.325 -4.33058 30.8889 6.31338 10.5 20C-9.88893 6.31471 4.67497 -4.33058 10.5 1.75206Z"
    />
  </svg>
);
