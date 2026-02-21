import React from 'react'
import SizeSelect from './SizeSelect'
import AddToCart from './AddToCart'
import BuyProduct from './BuyProduct'

const ProductDetails = () => {
  return (
    <div className='flex flex-col items-start justify-evenly gap-3 h-100'>
        <h1 className='text-4xl font-bold '>Men Full Sleave Shirt</h1>
       
       <div className="flex flex-col justify-between gap-8">
         <SizeSelect/> 
       
        <div className="flex justify-center items-center gap-4">

            <AddToCart/>
            <BuyProduct/>
        </div>
      </div>
    </div>  

  )
}

export default ProductDetails
