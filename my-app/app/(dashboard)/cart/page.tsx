"use client";
import React from "react";
import { useCart } from "@/lib/cart";

const CartPage: React.FC = () => {
  const { cart, removeItem, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeItem(idx)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4 font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => clearCart()}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Clear cart
          </button>
        </div>
      )}
    </section>
  );
};

export default CartPage;
