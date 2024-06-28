import {useState,useCallback} from "react";

import {ActionState,FieldErrors} from "@/lib/create-safe-actions";

type  Action<TInput,TOutput> = (input:TInput)=>Promise<ActionState<TInput,TOutput>>;

interface useActionoptions<Toutput>{
    onSuccess?:(data:Toutput)=>void;
    onError?:(error:string|null)=>void;
    onComplete?:()=>void;
};
export const useAction =<TInput,TOutput> (
action:Action<TInput,TOutput>,
options:useActionoptions<TOutput>={}
)=>{
    const [fieldErrors,setFieldErrors]=useState<FieldErrors<TInput> | undefined>(undefined);

const [error,setError]=useState<string|undefined>(undefined);
const [data,setData]=useState<TOutput|undefined>(undefined);
const [isLoading,setLoading]=useState<boolean>(false);


const execute=useCallback(
    async (input:TInput)=>{
    setLoading(true);
    try{
        const result=await action(input);
        if(!result)
        return;
      
            setFieldErrors(result.fieldErrors);
     
        if(result.error){
            setError(result.error);
            options.onError?.(result.error);
        }
        if(result.data){
            setData(result.data);
            options.onSuccess?.(result.data);
        }
    }
  finally{
    setLoading(false);
    options.onComplete?.();
  }
    },[action,options]
);
return {execute,fieldErrors,error,data,isLoading};
}
