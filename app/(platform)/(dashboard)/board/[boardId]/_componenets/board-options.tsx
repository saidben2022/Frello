"use client";
import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { Popover,PopoverClose,PopoverContent,PopoverTrigger } from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { MoreHorizontal, X } from "lucide-react";
import { toast } from "sonner";

interface BoardOptionsProps {
    id: string;
}

export const BoardOptions = ({id}: BoardOptionsProps) => {
   
   const {execute,isLoading}=useAction(deleteBoard,{
  
    onError: (error) => {       
     toast.error(error);
    }
   });
const onDelete=()=>{
    execute({id});
}

    return (    
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="transparent" size="sm" className="h-auto w-auto p-2">
           <MoreHorizontal  className="w-5 h-5"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
            <div className="text-sm font-medium text-center text-neutral-600 pb-4">
Board Actions
            </div>
          <PopoverClose asChild>
            <Button  size="sm" className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600" variant="ghost">
              <X className="w-5 h-5"/>
            </Button>
          </PopoverClose>
          <Button variant={"destructive"}  className="w-full rounded-sm h-auto p-2 px-5 justify-center font-normal text-sm " onClick={() => {}}>
            Delete this Board
          </Button>
        </PopoverContent>
      </Popover>
    )
}