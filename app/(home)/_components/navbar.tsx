import { Logo } from "@/components/logo";

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-shadow-sm bg-white flex items-center">
         <div className="md:max-w-screen-3xl mx-auto flex items-center w-full justify-between"></div>
       
       <Logo />
        </div>
    );
}