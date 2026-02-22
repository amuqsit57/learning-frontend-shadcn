"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import ProductItem from './_components/Product'
import { products } from '@/lib/products'

const page = () => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<'none' | 'low' | 'high'>('none')

  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  )

  if (sort === 'low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  } else if (sort === 'high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price)
  }

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <input
          type="text"
          placeholder="Search by name or description"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded w-full max-w-sm mb-6"
        />
        <select
          value={sort}
          onChange={e => setSort(e.target.value as 'none' | 'low' | 'high')}
          className="border p-2 rounded max-w-xs mb-6"
        >
          <option value="none">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item, idx) => (
          <Link href={`/buy/${idx}`} key={idx}>
            <ProductItem
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
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
