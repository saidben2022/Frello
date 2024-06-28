"use server";

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-actions";
import { UpdateBoard } from "./schema";


const handler=async (data:InputType):Promise<ReturnType>=>{

    const {userId,orgId}=auth();
    if(!userId || !orgId){
        return {
            error:"Unauthorized",
        };
    }
    const {title,id}=data;
    let Board;

    try{
        Board=await db.board.update({
            where:{
                id,
                orgId
            },
            data:{
                title
            }
        });
    }catch(err){
        return {    
            error:"Failed to update the board name",
        };
    }
   revalidatePath(`/organization/${id}`);
    return {
        data:Board
    }
}
export const updateBoard=createSafeAction(UpdateBoard,handler);