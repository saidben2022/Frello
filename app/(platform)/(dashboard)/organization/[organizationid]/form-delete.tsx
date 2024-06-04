"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useFormStatus } from "react-dom";

export const FormDelete = () => {
    const {pending}=useFormStatus();
    return <Button variant="destructive" disabled={pending} size={"sm"} className="rounded-sm"><Trash></Trash>Delete</Button>
    ;
}