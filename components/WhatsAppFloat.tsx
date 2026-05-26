"use client";

import { useOrder } from "./OrderContext";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const { whatsappNumber } = useOrder();

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all font-medium text-sm md:text-base"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline">Chat with us</span>
    </a>
  );
}
