import { cn } from "@/lib/utils"
import Image from "next/image"
import { LikeIcon } from "./icons/Like"

type Props =  {
    category: string,
    ngoName: string,
    isLiked: boolean,
    picture?: string
}

export const NgoCard: React.FC<Props> = ({ picture, ngoName, category }) => (
    <div className="rounded-lg flex flex-col">
        <div className={cn("bg-black py-20 px-32 rounded-t-lg opacity-70", { "bg-transparent p-0": picture })}>
            <LikeIcon className="justify-self-start h-full w-full z-10 bg-gray" />
            <Image src={picture || ""} alt={ngoName} className={cn({ hidden: !picture })} />
        </div>
        
        <div className="flex flex-col justify-center items-center space-y-2 bg-gray rounded-b-lg p-4 border border-t-0 border-gray-darklight">
            <h2 className="captalize font-medium text-xl md:text-2xl opacity-50">{ ngoName }</h2>

            <div className="rounded-full bg-blue py-2 px-8 text-white">
                <span>{ category }</span>
            </div>
        </div>
    </div>
)