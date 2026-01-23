import React from 'react'
import Image from 'next/image'
export default function Hero(){
    return(
    <>
      <section>

        <div className='absolute top-[-90px] left-1/2 z-[-1000] rotate-45 bg-primary w-[450px] h-[450px] rounded-[20px]'></div>
        <div className='w-full relative z-10 flex flex-row items-center justify-evenly text-center  px-20'>
          
          <div className='flex w-[40%] items-center flex-col justify-center gap-4'>
            <div className="text-start ">
              <h1 className=' text-5xl font-bold text-foreground'>
              30% off On All Womens Wear</h1>
            </div>

            <p className='text-xs text-start py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sint et minima id corporis sequi assumenda nesciunt quasi laudantium dolorum.</p>
            
            <div className="
            text-start 
            w-full
            ">
              <button className='bg-foreground text-background px-4 py-2 rounded-2xl'>Shop Now</button>

            </div>
            
          </div>
          <div className='flex items-center justify-center'>
              <Image
              src='/assets/heroImage.png'
              width={250}
              height={250}
              alt='Hero Image' 
              />
          </div>
        </div>
      </section>  
    </>

    )
}