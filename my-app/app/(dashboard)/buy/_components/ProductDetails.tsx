import React from 'react'
import SizeSelect from './SizeSelect'
import AddToCart from './AddToCart'
import BuyProduct from './BuyProduct'
import { Product } from '@/lib/products'

interface ProductDetailsProps {
  product: Product
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className='flex flex-col items-start justify-evenly gap-3 h-100'>
        <h1 className='text-4xl font-bold '>{product.title || 'Product'}</h1>
        {product.price !== undefined && (
          <p className="text-2xl font-semibold text-primary">${product.price.toFixed(2)}</p>
        )}
       
       <div className="flex flex-col justify-between gap-8">
         <SizeSelect/> 
       
        <div className="flex justify-center items-center gap-4">

            <AddToCart product={product} />
            <BuyProduct price={product.price} />
        </div>
      </div>
    </div>  

  )
}

export default ProductDetails
