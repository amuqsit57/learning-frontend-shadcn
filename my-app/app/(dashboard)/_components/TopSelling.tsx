import Image from 'next/image'
import React from 'react'
import { BiStar } from 'react-icons/bi'
import { FcRating } from 'react-icons/fc'

const TopSelling = () => {
  return (
    <section>
        <div className='w-full flex flex-col gap-1 flex flex-col items-center justify-center my-10'>
            <h3 className='text-md font-medium text-orange-300 '>Top Selling products for you</h3>
            <h2 className='text-2xl font-bold text-foreground'>Top Selling Products</h2>
            <p className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quo at doloremque sed itaque aliquid. Voluptas numquam vel magni fugit.</p>
            <div className='w-[80%] mt-4 mb-4 grid grid-cols-4 gap-4'>
                {/* Product Item */}
                <div className='bg-background rounded-lg shadow-md text-start  flex flex-col items-center'>
                   <Image src='/assets/shop1.jpg' alt='Product 1' width={150} height={350} className='mb-4 w-[150px] h-[180px] rounded-lg ' />
                     <div className="
                     flex flex-col items-start mr-8
                     ">
                        <h3 className='text- start text-lg font-semibold text-foreground'>Women Ethnic</h3>
                         <p className='text-zinc-400'>white</p>
                         <div className="
                            flex
                            flex-row
                            text-start
                        
                         ">
                            <BiStar size={20} className='text-amber-300 mr-2 mt-1'/>
                            <p>4.5</p>



                     </div>
                     
                     </div>
                </div>
                <div className='bg-background rounded-lg shadow-md text-start  flex flex-col items-center'>
                   <Image src='/assets/shop2.jpg' alt='Product 1' width={150} height={350} className='mb-4 w-[150px] h-[180px] rounded-lg ' />
                     <div className="
                     flex flex-col items-start mr-8
                     ">
                        <h3 className='text- start text-lg font-semibold text-foreground'>Women Ethnic</h3>
                         <p className='text-zinc-400'>white</p>
                         <div className="
                            flex
                            flex-row
                            text-start
                        
                         ">
                            <BiStar size={20} className='text-amber-300 mr-2 mt-1'/>
                            <p>4.5</p>



                     </div>
                     
                     </div>
                </div>
                <div className='bg-background rounded-lg shadow-md text-start  flex flex-col items-center'>
                   <Image src='/assets/shop3.jpg' alt='Product 1' width={150} height={350} className='mb-4 w-[150px] h-[180px] rounded-lg ' />
                     <div className="
                     flex flex-col items-start mr-8
                     ">
                        <h3 className='text- start text-lg font-semibold text-foreground'>Women Ethnic</h3>
                         <p className='text-zinc-400'>white</p>
                         <div className="
                            flex
                            flex-row
                            text-start
                        
                         ">
                            <BiStar size={20} className='text-amber-300 mr-2 mt-1'/>
                            <p>4.5</p>



                     </div>
                     
                     </div>
                </div>
                <div className='bg-background rounded-lg shadow-md text-start  flex flex-col items-center'>
                   <Image src='/assets/shop1.jpg' alt='Product 1' width={150} height={350} className='mb-4 w-[150px] h-[180px] rounded-lg ' />
                     <div className="
                     flex flex-col items-start mr-8
                     ">
                        <h3 className='text- start text-lg font-semibold text-foreground'>Women Ethnic</h3>
                         <p className='text-zinc-400'>white</p>
                         <div className="
                            flex
                            flex-row
                            text-start
                        
                         ">
                            <BiStar size={20} className='text-amber-300 mr-2 mt-1'/>
                            <p>4.5</p>



                     </div>
                     
                     </div>
                </div>
             
            </div>
            <button className='bg-foreground rounded-md text-background p-2 '>Shop All Products</button>
        </div>
    </section>
  )
}

export default TopSelling
