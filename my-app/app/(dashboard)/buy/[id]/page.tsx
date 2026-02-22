import React from 'react'
import { getProductById, Product } from '@/lib/products'
import OrderWrapper from '../_components/OrderWrapper'
import { notFound } from 'next/navigation'

interface Params {
  id: string
}

export default function Page({ params }: { params: Params }) {
  const product: Product | undefined = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div>
      <OrderWrapper product={product} />
    </div>
  )
}
