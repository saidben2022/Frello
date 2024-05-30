"use client";
import Link from "next/link";
import {Plus} from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization,useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

interface SidebarProps{
    storageKey?:string;

}
export const Sidebar=({
    storageKey="f-sidebar-state"
}:SidebarProps)=>{
    const [expanded,setExpanded]=useLocalStorage<Record<string,any>>(storageKey,{});
    const {organization:activeOrganization,isLoaded:isLoadedOrg}=useOrganization();
    const {userMemberships,isLoaded:isLoadedOrganizationList}=useOrganizationList({
        userMemberships:{
            infinite:true
        }
    });

    const defaultAccordionValue:string[]=Object.keys(expanded).reduce((acc:string[],key)=>{
        if(expanded[key]===true){
            acc.push(key);
        }
        return acc;
    },[]);
    return(
<div>
    Sidebar
</div>
    );
}