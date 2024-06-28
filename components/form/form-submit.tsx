'use client';

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import {Button} from "@/components/ui/button";

interface FormSubmitProps {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
}
export const FormSubmit=({children,disabled,variant="primary",className}:FormSubmitProps)=>{
    const {pending}=useFormStatus();
    return(
        <Button
        size="sm"
        variant={variant}
        disabled={pending || disabled}
        className={cn(className)}
        >
            {children}
        </Button> 
    )
}