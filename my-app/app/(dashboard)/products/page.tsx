"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import ProductItem from '../_components/ProductItem'

interface Product {
  src: string
  alt?: string
  title: string
  description: string
  rating?: number
}


const products: Product[] = [
  {
    src: '/assets/shirt1.png',
    alt: 'Shirt 1',
    title: 'Women Ethnic',
    description: 'Comfortable and stylish ethnic wear for women.',
    rating: 5,

  },
  {
    src: '/assets/shirt2.png',
    alt: 'Shirt 2',
    title: 'Men Casual',
    description: 'Casual shirts for everyday wear.',
    rating: 4,
  },
  {
    src: '/assets/shirt3.png',
    alt: 'Shirt 3',
    title: 'Kids Fun Tee',
    description: 'Bright tees for active kids.',
    rating: 3,
  },
  // add more sample items if desired
]

const page = () => {
  const [search, setSearch] = useState('')

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <input
        type="text"
        placeholder="Search by name or description"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 rounded w-full max-w-sm mb-6"
      />

      <div className="flex flex-wrap justify-evenly">
        {filtered.map((item, idx) => (
          <Link href="/buy" key={idx} className="m-2">
            <a>
              <ProductItem
                src={item.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
                rating={item.rating}
              />
            </a>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500">No products match your search.</p>
        )}
      </div>
    </section>
  )
}

export default page
