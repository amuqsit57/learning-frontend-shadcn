import React from 'react'
import ProductDisplay from './ProductDisplay'
import ProductDetails from './ProductDetails'
import Description from './Description'

interface Product {
  src?: string
  title?: string
  description?: string
  price?: number
  rating?: number
}

interface OrderWrapperProps {
  product: Product
}

const OrderWrapper: React.FC<OrderWrapperProps> = ({ product }) => {
  return (
    <div className=' flex flex-col justify-start items-center gap-8 py-8'>
      <div className='flex flex-row justify-center items-start px-8'>
        <div className="flex justify-between items-center  ">
            <ProductDisplay product={product}/>
        </div>
        <div className='flex justify-start items-start px-8'>
            <ProductDetails product={product}/>
        </div>
      </div>

      <div className="">
        <Description/>
      </div>
    </div>
  )
}

export default OrderWrapper
