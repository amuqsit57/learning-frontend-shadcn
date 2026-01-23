import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import  ThemeToggle from "../theme/ThemeToggle";

export default function Header(){
    return(
        <>
        <header>
            <div className="flex items-center justify-between bg-primary p-2">
                {/* Logo */}
                <div className="flex items-center justify-center gap-2">
                    <Image 
                    src='/assets/logo.png'
                    width={24}
                    height={24}
                    alt="Logo"
                    />
                    <h1 className="text-foreground text-lg font-bold">Shopsy</h1>
                </div>
                {/* Options */}
                <div className=" flex items-center justify-center gap-2 rounded-md">
  
                        <div className="flex items-center justify-center bg-background rounded-md p-[4px] ">
                            <input type="text"  className=" outline-none" />
                            <BiSearch 
                            />
                        </div>
                    <div className=" p-2 rounded-full bg-background">
                              <CiShoppingCart 
                            className="w-5 h-5 text-foreground"
                            />
                      
                        </div>
                        <ThemeToggle/>

                        
                        
                </div>
            </div>
        </header>
        </>
    )
}