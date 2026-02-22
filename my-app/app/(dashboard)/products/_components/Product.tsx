import React from 'react'
import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'

interface ProductItemProps {
  src: string
  alt?: string
  title: string
  description: string
  price?: number
  rating?: number // out of 5
}

const ProductItem: React.FC<ProductItemProps> = ({
  src,
  alt = 'product',
  title,
  description,
  price = 0,
  rating = 5,
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating)

  return (
    <div className="bg-background rounded-lg shadow-md text-start justify-center flex flex-col items-center shadow-2xl m-2 p-2 hover:border-2 hover:border-primary hover:bg-gray-200 hover:scale-105 transition duration-300">
      <Image
        src={src}
        alt={alt}
        width={150}
        height={350}
        className="mb-4 w-[150px] h-[180px] rounded-lg"
      />
      <div className="flex flex-col items-center mr-8">
        <div className="flex flex-row items-center align-center mb-2">
          {stars.map((filled, idx) => (
            <BsStarFill
              key={idx}
              className={filled ? 'text-amber-300' : 'text-zinc-400'}
            />
          ))}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {price !== undefined && (
          <p className="text-foreground font-bold">${price.toFixed(2)}</p>
        )}
        <p className="text-zinc-400 text-xs text-center">{description}</p>
      </div>
    </div>
  )
}

export default ProductItem
