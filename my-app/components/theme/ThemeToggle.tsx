'use client';
import React from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";
import { useState } from "react";

export default function ThemeToggle(){

    const {theme,setTheme} = useTheme();
    
    return(
        <>
        <button onClick={
           ()=> setTheme(theme=='dark'?'light':'dark')
           
        }
        className="flex items-center justify-center gap-2 bg-background p-2 rounded-full"
        >
            {theme==='dark'?
            <BsMoon className="text-foreground"/>:
            <BsSun className="text-foreground"/>}
        </button>
        </>
    )
}