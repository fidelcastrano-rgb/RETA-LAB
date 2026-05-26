"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Research", href: "/blog" },
    { label: "COAs", href: "/coa" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(248,250,252,0.85)] backdrop-blur-lg border-b border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Reta Lab UK Logo" width={180} height={48} className="object-contain" priority />
          </Link>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`text-sm font-medium transition-colors hover:text-[#2563EB] ${pathname === item.href ? "text-[#2563EB]" : "text-[#475569]"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/products" 
              className="px-5 py-2 rounded text-sm font-bold bg-[#FF6B1A] text-white hover:bg-opacity-90 transition-opacity"
            >
              Order Now
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#0F172A]" aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#F8FAFC] z-40 overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
             {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`block px-4 py-3 text-lg font-medium rounded ${pathname === item.href ? "bg-[#EEF2F7] text-[#2563EB]" : "text-[#0F172A]"}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/products" 
              className="mt-4 block w-full text-center px-4 py-3 rounded text-lg font-bold bg-[#FF6B1A] text-white"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
