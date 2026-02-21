import React from 'react'
import SizeSelect from './SizeSelect'
import AddToCart from './AddToCart'
import BuyProduct from './BuyProduct'

const ProductDetails = () => {
  return (
    <div className='flex flex-col items-center justify-evenly h-full'>
        <h1 className='text-4xl font-bold '>Men Full Sleave Shirt</h1>
        <SizeSelect/>
        <div className="flex justify-center items-center">

            <AddToCart/>
            <BuyProduct/>
        </div>
    </div>  

  )
}

export default ProductDetails
