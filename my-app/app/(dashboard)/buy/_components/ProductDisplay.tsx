import React from 'react'
import Image from 'next/image'


interface ProductDisplayProps {
  product: {
    src?: string
  }
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const mainSrc = product.src || '/assets/shirt1.png'

  return (
    <div className='flex flex-col justify-between items-center '>
      <div className="hover:border-2 border-primary rounded-md p-8 flex justify-center items-center hover:bg-gray-200 hover:scale-105 transition duration-300">
        <Image
          src={mainSrc}
          alt="Product Image"
          width={300}
          height={300} />
      </div>
      <div className='w-full mt-4 flex flex-wrap flex-row justify-center items-center '>
        {/* thumbnails could come from additional images; reusing mainSrc for now */}
        <div className="border-2 border-primary rounded-md p-2 m-2 flex justify-center items-center hover:bg-gray-200 hover:scale-105 transition duration-300">
          <Image
            src={mainSrc}
            alt="Product Image"
            width={80}
            height={80} />
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
