'use client';

import { ShoppingCart, Check } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image?: string;
  category?: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);
  
  const isInCart = cartItems.some(item => item.id === id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id,
      name,
      price,
      image,
      category,
    });
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300 hover:border-blue-200 group">
      <Link href={`/medicines/${id}`} className="block">
        {/* Image Placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-4xl">💊</div>
          )}
        </div>

        {/* Product Info */}
        <div>
          {category && (
            <span className="text-xs text-gray-500 uppercase tracking-wide">{category}</span>
          )}
          <h3 className="font-semibold text-gray-900 mt-1 mb-2 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
        </div>
      </Link>
      
      <div className="flex items-center justify-between mt-2">
        <span className="text-lg font-bold text-blue-600">₹{price}</span>
        <button
          onClick={handleAddToCart}
          disabled={added || isInCart}
          className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
            added || isInCart
              ? "bg-green-600 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {added || isInCart ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
