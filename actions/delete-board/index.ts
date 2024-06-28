"use server";

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-actions";
import { DeleteBoard } from "./schema";
import { redirect } from "next/navigation";


const handler=async (data:InputType):Promise<ReturnType>=>{

    const {userId,orgId}=auth();
    if(!userId || !orgId){
        return {
            error:"Unauthorized",
        };
    }
    const {id}=data;
    let Board;

    try{
        Board=await db.board.delete({
            where:{
                id,
                orgId
            },
          
        });
    }catch(err){
        return {    
            error:"Failed to delete the board ",
        };
    }
   revalidatePath(`/organization/${orgId}`);
   redirect(`/organization/${orgId}`);
}
export const deleteBoard=createSafeAction(DeleteBoard,handler);