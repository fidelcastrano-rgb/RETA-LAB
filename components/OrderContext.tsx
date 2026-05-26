"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface OrderItem {
  key: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
  slug: string;
}

interface OrderContextProps {
  items: OrderItem[];
  addToOrder: (item: Omit<OrderItem, "key" | "qty">) => void;
  removeItem: (key: string) => void;
  clearOrder: () => void;
  totalItems: number;
  totalPrice: number;
  sendWA: () => void;
  sendEmail: () => void;
  whatsappNumber: string;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const whatsappNumber = "447341056054"; // Active WhatsApp number

  // Optionally load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("reta_order");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTimeout(() => {
            setItems(parsed);
          }, 0);
        }
      } catch (e) {}
    }
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("reta_order", JSON.stringify(items));
    }
  }, [items, mounted]);

  const addToOrder = (newItem: Omit<OrderItem, "key" | "qty">) => {
    const key = `${newItem.slug}_${newItem.variant.replace(/\s+/g, "")}`;
    setItems((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...newItem, key, qty: 1 }];
    });
  };

  const removeItem = (key: string) => {
    setItems((prev) => prev.filter((item) => item.key !== key));
  };

  const clearOrder = () => setItems([]);

  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const formatOrderText = () => {
    return items.map(item => `${item.qty}x ${item.name} (${item.variant}) - £${item.price * item.qty}`).join("%0A");
  };

  const sendWA = () => {
    const text = `Hello RETA LAB UK, I'd like to place an order:%0A%0A${formatOrderText()}%0A%0ATotal: £${totalPrice}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const sendEmail = () => {
    const text = `Hello RETA LAB UK,\n\nI'd like to place an order:\n\n${items.map(item => `${item.qty}x ${item.name} (${item.variant}) - £${item.price * item.qty}`).join("\n")}\n\nTotal: £${totalPrice}`;
    window.open(`mailto:sales@reta-lab.co.uk?subject=New Order Enquiry&body=${encodeURIComponent(text)}`);
  };

  return (
    <OrderContext.Provider value={{ items, addToOrder, removeItem, clearOrder, totalItems, totalPrice, sendWA, sendEmail, whatsappNumber }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
