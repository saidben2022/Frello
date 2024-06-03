"use client";
import { OrganizationProfile } from "@clerk/nextjs";
const SettingsPage = () => {
    return (<div className="w-full items-center ">
<OrganizationProfile  
routing="hash"
appearance={{
    elements: {
        rootBox: {
        boxShadow: "none",
           width: "100%",
           
          
        },
        card: {
            width: "100%",

            border: "1px solid #e5e5e5",
            boxShadow: "none",
        },
    },
}}

/>
    </div>)
};
export default SettingsPage;