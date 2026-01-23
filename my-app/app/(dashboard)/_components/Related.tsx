import React from 'react'
import { BiStar } from 'react-icons/bi'
import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'

const Related = () => {
  return (
  <section className='flex justify-center align-center'>
    <div className='w-[90%] flex flex-col gap-1 flex flex-col items-start justify-start my-10'>
        <h3 className='text-md font-medium text-orange-300 '>Top Selling products for you</h3>
        <h2 className='text-2xl font-bold text-foreground'>Top Selling Products</h2>
        <p className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quo at doloremque sed itaque aliquid. Voluptas numquam vel magni fugit.</p>
        <div className=' w-full px-20 mt-4 mb-4 flex justify-evenly items-center'>
            {/* Product Item */}
            
            <div className='bg-background rounded-lg shadow-md text-start justify-center flex flex-col items-center shadow-2xl m-2 p-2'>
               <Image src='/assets/shirt1.png' alt='Product 1' width={150} height={350} className='mb-4 w-[150px] h-[180px] rounded-lg ' />
                 <div className="
                 flex flex-col items-center mr-8
                 ">
                    <div className="
                    flex flex-row items-center align-center mb-2
                    ">
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                    </div>
                    <h3 className=' text-lg font-semibold text-foreground'>Women Ethnic</h3>
                     <p className='text-zinc-400 text-xs text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio.</p>
                    
                     
                 </div>
            </div>
          
              <div className='bg-background rounded-lg shadow-md text-start justify-center flex flex-col items-center shadow-2xl m-2 p-2'>
               <Image src='/assets/shirt2.png' alt='Product 1' width={150} height={350} className='mb-4 w-[150px] h-[180px] rounded-lg ' />
                 <div className="
                 flex flex-col items-center mr-8
                 ">
                    <div className="
                    flex flex-row items-center align-center mb-2
                    ">
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                    </div>
                    <h3 className=' text-lg font-semibold text-foreground'>Women Ethnic</h3>
                     <p className='text-zinc-400 text-xs text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio.</p>
                    
                     
                 </div>
            </div>

              <div className='bg-background rounded-lg shadow-md text-start justify-center flex flex-col items-center shadow-2xl m-2 p-2'>
               <Image src='/assets/shirt1.png' alt='Product 1' width={150} height={350} className='mb-4 w-[150px] h-[180px] rounded-lg ' />
                 <div className="
                 flex flex-col items-center mr-8
                 ">
                    <div className="
                    flex flex-row items-center align-center mb-2
                    ">
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                        <BsStarFill className='text-amber-300'/>
                    </div>
                    <h3 className=' text-lg font-semibold text-foreground'>Women Ethnic</h3>
                     <p className='text-zinc-400 text-xs text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio.</p>
                    
                     
                 </div>
            </div>
        </div>
        <div className="w-full flex justify-center mt-4">
            <button className='bg-foreground rounded-md text-background p-2 '>Shop All Products</button>


        </div>
    </div>
</section>
  )
}

export default Related
