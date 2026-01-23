import React from "react";
import Hero from "./_components/Hero";
import TopSelling from "./_components/TopSelling";
import Related from "./_components/Related";
import About from "./_components/About";

export default function Dashboard(){
    return(
        
        <>
            <Hero/>
            <TopSelling/>
            <Related/>
            <About/>
        </>
    )
}