import React from 'react'

const SizeSelect = () => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">Size:</span>
      <div className="flex gap-2">
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <button
            key={size}
            type="button"
            className="px-3 py-1 border border-primary bg-primary rounded-md text-sm text-primaryForeground font-medium hover:bg-primary/30 hover:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SizeSelect
