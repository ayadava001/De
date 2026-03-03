import { useState, useCallback, useEffect } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('flavour-verse-cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('flavour-verse-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((item: any) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, delta: number) => {
    setCart((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          const newQty = Math.max(1, i.quantity + delta);
          return { ...i, quantity: newQty };
        }
        return i;
      })
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const deliveryFee = subtotal > 0 ? 5 : 0;
  const total = subtotal + tax + deliveryFee;

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    tax,
    deliveryFee,
    total
  };
};
