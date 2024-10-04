import { cn } from "@/lib/utils";

type Props = Pick<React.SVGProps<SVGSVGElement>, "className"> & {
    isFilled?: boolean
}

export const LikeIcon: React.FC<Props> = ({ isFilled, className }) => (
    <svg className={cn("w-6 h-6", className )} width="0" height="0" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
        <path className={cn("fill-transparent stroke-pink-dark", { "fill-pink-dark": isFilled })} fill-rule="evenodd" clip-rule="evenodd" d="M10.5 1.75206C16.325 -4.33058 30.8889 6.31338 10.5 20C-9.88893 6.31471 4.67497 -4.33058 10.5 1.75206Z"/>
    </svg>
);