'use server';
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from "zod";


export type State={
  errors?:{
    title?:string[];
  },
  message?:string | null;
}
const createBoardSchema = z.object({
    title: z.string().min(3,{
        message:"Field Length must be at least 3 characters"
    }),  
  });

export async function create(prevState: State,formData: FormData) {
const valitedfields = createBoardSchema.safeParse({title:formData.get("title") });
if(!valitedfields.success){ 
  return {
    errors:valitedfields.error.flatten().fieldErrors,
    message:"Missing fields",
   

  }
 } 
 const {title} = valitedfields.data;
try{
  await db.board.create({
    data: {
     title
    }
   });
}
catch(eroor){
return{

  message:"Database Error",
}

}

 revalidatePath("/organization/org_2hBVfQkZ851IbGXSyOrVZxk8J74");
 redirect("/organization/org_2hBVfQkZ851IbGXSyOrVZxk8J74");
  

}