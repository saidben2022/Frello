import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { FormDelete } from "./form-delete";

interface Boardprops{
   
        id:string
        title:string

}
export const Board =  ({title,id}:Boardprops) => {
    
const deleteBoardWithId=deleteBoard.bind(null,id);

        return (
            <form action={deleteBoardWithId} className="flex items-center gap-x-2">
               <p>
               Board title:{title}

               </p>
               <FormDelete/>
            </form>
        );
    };

