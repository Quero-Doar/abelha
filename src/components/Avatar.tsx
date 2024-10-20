import { cva } from "class-variance-authority";
import { Avatar as ShadAvatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const variants = cva("", {
    variants: {
        size: { 
            sm: "w-12 h-12 text-xl",
            md: "w-24 h-24 text-3xl",
            lg: "w-32 h-32 text-5xl"
        }
    }
});

type Props = {
    image: string,
    fallback: string,
    size?: "sm" | "md" | "lg"
}

export const getInitials = (fullName: string) => fullName.trim().split(" ").map((name, index, arr) => {
    if (index === 0 || index == arr.length - 1) {
        return name.charAt(0).toUpperCase();
    }
}).join('');

export const Avatar: React.FC<Props> = ({ fallback, image, size = "sm" }) => (
    <ShadAvatar className={variants({ size })}>
      <AvatarImage src={image} alt={`${getInitials(fallback)} Image`} />
      <AvatarFallback>{ getInitials(fallback) }</AvatarFallback>
    </ShadAvatar>
)
