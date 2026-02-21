import React from 'react'
import { Button } from '@/components/ui/button'
import ProductItem from './ProductItem'

const products = [
  {
    src: '/assets/shirt1.png',
    alt: 'Product 1',
    title: 'Women Ethnic',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio.',
    rating: 5,
  },
  {
    src: '/assets/shirt2.png',
    alt: 'Product 2',
    title: 'Women Ethnic',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio.',
    rating: 5,
  },
  {
    src: '/assets/shirt1.png',
    alt: 'Product 3',
    title: 'Women Ethnic',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio.',
    rating: 5,
  },
]

const Related = () => {
  return (
  <section className='flex justify-center align-center'>
    <div className='w-[90%] flex flex-col gap-1 flex flex-col items-start justify-start my-10'>
        <h3 className='text-md font-medium text-orange-300 '>Top Selling products for you</h3>
        <h2 className='text-2xl font-bold text-foreground'>Top Selling Products</h2>
        <p className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quo at doloremque sed itaque aliquid. Voluptas numquam vel magni fugit.</p>
        <div className=' w-full px-20 mt-4 mb-4 flex justify-evenly items-center'>
            {products.map((item, idx) => (
              <ProductItem
                key={idx}
                src={item.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
                rating={item.rating}
              />
            ))}
        </div>
        <div className="w-full flex justify-center mt-4">
            {/* <button className='bg-foreground rounded-md text-background p-2 '>Shop All Products</button> */}
            <Button>Shop All Products</Button>

        </div>
    </div>
</section>
  )
}

export default Related
