import React from 'react'
import ProductDisplay from './ProductDisplay'
import ProductDetails from './ProductDetails'
import Description from './Description'

const OrderWrapper = () => {
  return (
    <div className=' flex flex-col'>
   
     <div className='flex flex-row justify-center items-start px-8'>
        <div className="flex justify-between items-center  ">
            <ProductDisplay/>
        </div>
        <div className='h-200 w-[40%] '>
            <ProductDetails/>

        </div>
      </div>

      <div className="">
        <Description/>
      </div>
   
        

    </div>
  )
}

export default OrderWrapper
