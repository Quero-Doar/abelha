import { TooltipContent, Tooltip as ShadTooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { DetailedHTMLProps, HTMLAttributes } from "react"

type Props = Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> & {
    content: string
}

export const Tooltip: React.FC<Props> = ({ content, children }) => {
    return (
        <TooltipProvider>
            <ShadTooltip>
                <TooltipTrigger asChild>
                    <div>
                        { children }
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{ content }</p>
                </TooltipContent>
            </ShadTooltip>
        </TooltipProvider>
    )
}