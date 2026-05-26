"use client";

import { useState } from "react";
import { ProductVariant, Product } from "@/lib/types";
import { useOrder } from "@/components/OrderContext";

export function ProductOrderActions({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [showAdded, setShowAdded] = useState(false);
  const { addToOrder, sendWA } = useOrder();

  const handleAdd = () => {
    addToOrder({
      name: product.name,
      slug: product.slug,
      variant: selectedVariant.name,
      price: selectedVariant.price,
    });
    
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);
  };

  const handleWAOrderInfo = () => {
    // Generate simple intent to order this specific item.
    const text = `Hello RETA LAB UK, I'd like to order: ${product.name} - ${selectedVariant.name} - £${selectedVariant.price}`;
    window.open(`https://wa.me/440123456789?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="space-y-6">
      <div className="text-3xl font-heading font-bold text-[#0F172A]">
        From £{product.variants[0].price}
      </div>

      <div className="space-y-3">
        <label className="text-sm font-bold text-[#475569] block">Select Package Size</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {product.variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVariant(v)}
              className={`p-3 rounded border text-left flex justify-between items-center transition-all ${
                selectedVariant.id === v.id 
                  ? "border-[#2563EB] bg-[#EEF2F7] shadow-inner" 
                  : "border-[#CBD5E1] bg-white hover:border-[#1D4ED8]"
              }`}
            >
              <div>
                <div className={`font-bold ${selectedVariant.id === v.id ? 'text-[#2563EB]' : 'text-[#0F172A]'}`}>{v.name}</div>
                <div className="text-sm text-[#475569]">£{v.price}</div>
              </div>
              {v.savingsLabel && (
                <span className="bg-[#10B981] text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                  {v.savingsLabel}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-[#CBD5E1]">
        <button
          onClick={handleAdd}
          className={`w-full py-4 rounded font-bold text-lg flex items-center justify-center transition-all ${
            showAdded ? 'bg-[#10B981] text-white' : 'bg-[#FF6B1A] text-white hover:bg-opacity-90'
          }`}
        >
          {showAdded ? '✓ Added to Order' : 'Add to Order Builder'}
        </button>
        
        <button
           onClick={handleWAOrderInfo}
           className="w-full py-3 bg-[#25D366] text-white rounded font-bold hover:bg-opacity-90 transition-opacity"
        >
           Order directly via WhatsApp
        </button>
      </div>
    </div>
  );
}
