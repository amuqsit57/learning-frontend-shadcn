"use client";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import  ThemeToggle from "../theme/ThemeToggle";

export default function Header(){
    const { cart } = useCart();

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
                    <div className="relative p-2 rounded-full bg-background">
                              <Link href="/cart">
                                <CiShoppingCart 
                                  className="w-5 h-5 text-foreground"
                                />
                              </Link>
                              {cart.length > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                                  {cart.length}
                                </span>
                              )}
                        </div>
                        <ThemeToggle/>

                        
                        
                </div>
            </div>
        </header>
        </>
    )
}