import React from 'react'
import { getProductById, Product } from '@/lib/products'
import OrderWrapper from '../_components/OrderWrapper'
import { notFound } from 'next/navigation'

interface Params {
  id: string
}

export default async function Page({ params }: { params: Params }) {
  // unwrap params since it's a promise in this context
  const { id } = await params as Params

  const product: Product | undefined = getProductById(id)

  // debug id if needed
  // console.log('Product ID:', id)
  if (!product) {
    notFound()
  }

  return (
    <div>
      <OrderWrapper product={product} />
    </div>
  )
}
