import Image from "next/image";
import Link from "next/link";
 
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont =localFont({
    src: "../public/fonts/font.woff2",

})
export const Logo = () => {
    return (
       <Link href="/">
                <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">  

<Image src="/logo.png" alt="logo" width={40} height={40} />

       
       <p className={cn("text-3xl font-bold text-neutral-700",headingFont.className)}>
        Frello
       </p>
       </div>

       </Link>
    );
}