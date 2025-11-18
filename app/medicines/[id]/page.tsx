'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ShoppingCart, Plus, Minus, Shield, Truck, CheckCircle, ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getMedicineById } from "../../data/medicines";

export default function ProductDetailsPage() {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [product, setProduct] = useState<ReturnType<typeof getMedicineById>>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const medicineId = params?.id as string;
    
    if (!medicineId) {
      router.push('/medicines');
      return;
    }
    
    const medicine = getMedicineById(medicineId);
    if (medicine) {
      setProduct(medicine);
    } else {
      // If medicine not found, redirect to medicines page
      router.push('/medicines');
    }
    setLoading(false);
  }, [params, router]);

  // Get cart item (even if product is not loaded yet)
  const cartItem = product ? cartItems.find(item => item.id === product.id) : undefined;
  const isInCart = !!cartItem;

  useEffect(() => {
    // Show quantity selector if item is already in cart
    if (product && isInCart && cartItem) {
      setShowQuantitySelector(true);
      setQuantity(cartItem.quantity);
    } else if (product && !isInCart) {
      // Hide quantity selector if item is not in cart
      setShowQuantitySelector(false);
      setQuantity(1);
    }
  }, [product, isInCart, cartItem?.quantity]);

  const handleAddToCart = () => {
    if (!product || isInCart) return;
    
    // Add to cart for the first time
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
    });
    setShowQuantitySelector(true);
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (!product) return;
    if (newQuantity > product.stock) return;
    
    // If quantity is 0 or less, remove from cart
    if (newQuantity <= 0) {
      if (isInCart) {
        removeFromCart(product.id);
      }
      setShowQuantitySelector(false);
      setQuantity(1);
      return;
    }
    
    setQuantity(newQuantity);
    if (isInCart) {
      updateQuantity(product.id, newQuantity);
    }
  };
  
  // Get current display quantity (from cart if in cart, otherwise from state)
  const displayQuantity = isInCart && cartItem ? cartItem.quantity : quantity;

  const discount = product?.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product?.discount || 0;

  // Conditional return AFTER all hooks
  if (loading || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading medicine details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/medicines"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Medicines</span>
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center mb-4">
                <div className="text-8xl">💊</div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
              <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-blue-600">₹{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                    <span className="text-green-600 font-semibold">{discount}% off</span>
                  </>
                )}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              {/* Product Details */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Manufacturer:</span>
                    <span className="font-medium">{product.manufacturer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expiry Date:</span>
                    <span className="font-medium">{product.expiryDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stock:</span>
                    <span className="font-medium text-green-600">{product.stock} available</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Genuine Medicine</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>20 Min Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Verified Chemist</span>
                </div>
              </div>

              {/* Action Buttons */}
              {!showQuantitySelector ? (
                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              ) : (
                <div className="flex items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center space-x-3 border-2 border-gray-200 rounded-lg bg-white">
                    <button
                      onClick={() => handleQuantityChange(displayQuantity - 1)}
                      className="p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold text-gray-900 min-w-[3rem] text-center">
                      {displayQuantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(displayQuantity + 1)}
                      className="p-3 hover:bg-gray-100 transition-colors"
                      disabled={displayQuantity >= product.stock}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* View Cart Button */}
                  <Link
                    href="/cart"
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                    <span>View Cart</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
