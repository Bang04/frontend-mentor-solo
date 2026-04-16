import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  count: number;
}

interface CartState {
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  up: (id: string) => void;
  down: (id: string) => void;
  items: CartItem[];
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (newItem: CartItem) =>
    set((state) => {
      const existingItem = state.items.find(
        (item: CartItem) => item.id === newItem.id,
      );
      const amountToAdd = newItem.count > 0 ? newItem.count : 1;

      if (existingItem) {
        return {
          items: state.items.map((item: CartItem) =>
            item.id === existingItem.id
              ? { ...item, count: item.count + amountToAdd }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, { ...newItem, count: amountToAdd }],
      };
    }),
  remove: (id: string) =>
    set((state) => ({
      items: state.items.filter((item: CartItem) => item.id !== id),
    })),
  up: (id: string) =>
    set((state) => ({
      items: state.items.map((item: CartItem) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    })),
  down: (id: string) =>
    set((state) => ({
      items: state.items.map((item: CartItem) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item,
      ),
    })),
}));
