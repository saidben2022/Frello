"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputprops{
    errors?:{
        title?:string[]}
}

export const FormInput=({errors}:FormInputprops)=>{
    const {pending}=useFormStatus();
    return (
        <div>
 <Input id="title" name="title"  required placeholder="Enter a board title"
           
           className="border-input border p-1"
           disabled={pending}
           />

{errors?.title?.map((error:string)=>{
                    return  <p key={error} className="text-red-500">{error}</p>


                    
                }
                )}
        </div>
       
    )
}