
"use server";
import { auth } from "@clerk/nextjs/server";
import {InputType,Returntype} from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-actions";
import { CreateBoard } from "./schema";

const handler=async (data:InputType):Promise<Returntype>=>{

  const {userId,orgId}=auth();
  if(!userId || !orgId){

    return {
      error:"Unauthorized",
    };
  }
const {title,image}=data;
const [imageId,imageThumbUrl,imageFullUrl,imageLinkHtml,imageUserName]=image.split("|");
if(!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHtml || !imageUserName){
  return{
    error:"Missing Image ,Failed to create board",
  }
}
let board;

try{
  board=await db.board.create({
    data:{
      title,  
      orgId,
      imageId,
      imageThumbUrl,
      imageFullUrl,
      imageLinkHtml,
      imageUserName,
    }
  });
  }
  catch(error){
    return {
      error:"Database Error",
    };  
  } 
  revalidatePath(`/board/${board.id}`);
  return {
    data:board,
  };
}

export const createBoard=createSafeAction(CreateBoard,handler);
