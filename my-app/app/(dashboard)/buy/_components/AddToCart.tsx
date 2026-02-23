"use client";
import React from "react";
import { Product } from "@/lib/products";
import { useCart } from "@/stores/cart";

interface AddToCartProps {
  product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = React.useState(false);

  const handleClick = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Add to bag"
        onClick={handleClick}
        className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full shadow-md uppercase tracking-wider"
      >
        {/* simple shopping bag icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6 2a2 2 0 0 0-2 2v2h16V4a2 2 0 0 0-2-2H6zm0 6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8H6z" />
        </svg>
        ADD TO BAG
      </button>
      {added && (
        <span className="absolute top-0 right-0 mt-1 mr-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
          Added
        </span>
      )}
    </div>
  );
};

export default AddToCart;