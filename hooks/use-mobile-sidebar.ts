import {create} from "zustand";

type MobileSiteBarStore={
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
   
}
export const useMobileSidebar=create<MobileSiteBarStore>((set)=>({
    isOpen:false,
    onOpen:()=>set((state)=>({isOpen:true})),
    onClose:()=>set((state)=>({isOpen:false}))
}))