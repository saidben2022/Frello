import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { Medal } from "lucide-react";
import { cn } from "@/lib/utils";


const headingFont = localFont({
    src: "../../public/fonts/font.woff2",
})
const HomePage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center flex-col">
<div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
    <Medal className="h-6 w-6 mr-2" />
    No 1 task management
</div>
          <h1 className={cn("text-3xl md:text-6xl text-center text-neutral-800 mb-6", headingFont.className)}>
            Freetello helps team move forward
            </h1>
            <div className="text-2xl md:text-6xl bg-gradient-to-r from-blue-400  to-fuchsia-500 text-white px-4 py-2 rounded-md pb-4 w-fit">
            Move forward
            </div>
            </div>
            <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tempore, eaque aliquam nemo minus odit accusamus exercitationem, ea expedita delectus amet, totam similique assumenda. A, aliquid. Illum quae odit accusantium!
            </div>
            <Button className="mt-6 " size={"lg"}>Get Started</Button>
        </div>
       
      
    );
};  

export default HomePage;