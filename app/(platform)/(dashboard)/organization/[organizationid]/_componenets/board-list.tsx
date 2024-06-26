import { FormPopover } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { HelpCircle, User2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const BoardList=async () => {
const {orgId}=auth();
if(!orgId){

    return redirect('/select-org');
}


const boards=await db.board.findMany({
    where:{
        orgId
    },
    orderBy:{
        createdAt:"desc"
    }
})
    return ( 
        <div className="space-y-4">
          <div className="flex items-center font-semibold text-lg text-neutral-700">
<User2 className="w-6 h-6 mr-2"/>
Your boards
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {boards.map((board)=>(
              <Link href={`/board/${board.id}`} key={board.id} style={{backgroundImage:`url(${board.imageThumbUrl})`}} className="aspect-video group relative bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition" />
<p className="relative font-semibold text-white">
    {board.title}
</p>
            
              </Link>
          ))}
<FormPopover>
        <div
        role="button"
        className="aspect-video relative h-full w-full bg-muted rouded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
        >
<p className="text-sm">Create new board</p>
<span className="text-xs">
    5 Remaining
</span>
<Hint
sideOffset={40}
description={`Free workspaces can have up to 5 free boards.For unlimited boards upgrade this workspace. `}
>
<HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]"/>
    </Hint>
   
        </div>
        </FormPopover>
          </div>
        </div>   
    );
}  
BoardList.Skeleton=function BoardListSkeleton(){
    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Skeleton className="aspect-video w-full h-full" />
        <Skeleton className="aspect-video w-full h-full" />
        <Skeleton className="aspect-video w-full h-full" />
        <Skeleton className="aspect-video w-full h-full" />

        </div>   
    );
}