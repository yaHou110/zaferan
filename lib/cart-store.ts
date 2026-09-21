import { useSyncExternalStore } from 'react';
import { CartItem, SaffronProduct } from './types';
import { SAFFRON_PRODUCTS } from './saffron-data';

const STORAGE_KEY = 'zarrin_cart';
const DEFAULT_ITEMS: CartItem[] = [{ product: SAFFRON_PRODUCTS[0], quantity: 1 }];

let listeners: Array<() => void> = [];
let memoryCart: CartItem[] = DEFAULT_ITEMS;
let isInitialized = false;

function getClientCart(): CartItem[] {
  if (typeof window === 'undefined') return DEFAULT_ITEMS;
  if (!isInitialized) {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        memoryCart = JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    isInitialized = true;
  }
  return memoryCart;
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const cartStore = {
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot(): CartItem[] {
    return getClientCart();
  },
  getServerSnapshot(): CartItem[] {
    return DEFAULT_ITEMS;
  },
  setCart(items: CartItem[]) {
    memoryCart = items;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        // ignore
      }
    }
    emitChange();
  },
  addItem(product: SaffronProduct, quantity: number = 1) {
    const current = getClientCart();
    const existing = current.find((item) => item.product.id === product.id);
    let next: CartItem[];
    if (existing) {
      next = current.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      next = [...current, { product, quantity }];
    }
    this.setCart(next);
  },
  updateQuantity(productId: string, quantity: number) {
    const current = getClientCart();
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }
    const next = current.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    this.setCart(next);
  },
  removeItem(productId: string) {
    const current = getClientCart();
    const next = current.filter((item) => item.product.id !== productId);
    this.setCart(next);
  },
  clearCart() {
    this.setCart([]);
  },
};

export function useCart() {
  return useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getSnapshot,
    cartStore.getServerSnapshot
  );
}
