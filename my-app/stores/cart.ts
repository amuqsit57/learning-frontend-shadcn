import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/lib/products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (product: Product) =>
        set((state) => {
          const existing = state.cart.find((item) => item.title === product.title);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.title === product.title
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
      removeItem: (index: number) =>
        set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "shopping-cart", // name of item in storage
      storage: createJSONStorage<CartState>(() => {
        if (typeof window === "undefined") {
          // dummy storage for server-side rendering
          const noop: Storage = {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
            clear: () => {},
            key: () => null,
            length: 0,
          };
          return noop;
        }
        return localStorage;
      }),
    }
  )
);
