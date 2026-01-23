import React from "react";

export default function Nav(){
    return(
        <>
        <nav className="flex justify-center items-center p-2 px-8 bg-background shadow-lg">
            <ul className="flex w-[80%] justify-evenly items-center gap-2">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>    
            </ul>
        </nav>
        </>
    )
}