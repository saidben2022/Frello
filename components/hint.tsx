import { Tooltip,TooltipContent, TooltipTrigger, TooltipProvider } from  '@/components/ui/tooltip';

interface HintProps {
    description: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
};
export const Hint = ({ description, children, side , sideOffset }: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger >
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    side={side}
                    sideOffset={sideOffset}
                    className="text-xs max-w-[220px] break-words"      
                >
                    {description}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}