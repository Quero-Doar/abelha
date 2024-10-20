import {
  TooltipContent,
  Tooltip as ShadTooltip,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type Props = {
  content: string;
  children: React.ReactNode;
};

export const Tooltip: React.FC<Props> = ({ content, children }) => {
  return (
    <TooltipProvider>
      <ShadTooltip>
        <TooltipTrigger asChild>
          <div>{children}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </ShadTooltip>
    </TooltipProvider>
  );
};
