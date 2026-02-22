export interface Product {
  src: string
  alt?: string
  title: string
  description: string
  price: number
  rating?: number
}

export const products: Product[] = [
  {
    src: '/assets/shirt1.png',
    alt: 'Shirt 1',
    title: 'Women Ethnic',
    description: 'Comfortable and stylish ethnic wear for women.',
    price: 49.99,
    rating: 5,
  },
  {
    src: '/assets/shirt2.png',
    alt: 'Shirt 2',
    title: 'Men Casual',
    description: 'Casual shirts for everyday wear.',
    price: 29.99,
    rating: 4,
  },
  {
    src: '/assets/shirt3.png',
    alt: 'Shirt 3',
    title: 'Kids Fun Tee',
    description: 'Bright tees for active kids.',
    price: 19.99,
    rating: 3,
  },
  // add more sample items if desired
]

export function getProductById(id: string): Product | undefined {
  const index = parseInt(id, 10)
  if (isNaN(index) || index < 0 || index >= products.length) return undefined
  return products[index]
}
