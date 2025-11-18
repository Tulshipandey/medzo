'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { MapPin, CreditCard, Truck, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, getTotalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If cart is empty, redirect to cart page
    if (cartItems.length === 0) {
      router.push('/cart');
      return;
    }

    // If not logged in, redirect to login but preserve cart
    if (!isAuthenticated) {
      // Store the intended destination
      localStorage.setItem('medswift_redirect_after_login', '/checkout');
      router.push('/login');
    }
  }, [cartItems.length, isAuthenticated, router]);

  // Show loading or redirect message if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Show empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Your cart is empty. Redirecting...</p>
        </div>
      </div>
    );
  }

  const addresses = [
    {
      id: "1",
      name: "Home",
      address: "123 Main Street, Apartment 4B",
      city: "Mumbai",
      pincode: "400001",
      phone: "+91 98765 43210",
      isDefault: true,
    },
  ];

  const subtotal = getTotalPrice();
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Delivery Address</span>
                </h2>
                <Link
                  href="/checkout/address"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Add New
                </Link>
              </div>

              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className={`border-2 rounded-lg p-4 ${
                    addr.isDefault ? "border-blue-500 bg-blue-50" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-gray-900">{addr.name}</span>
                        {addr.isDefault && (
                          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">Default</span>
                        )}
                      </div>
                      <p className="text-gray-700">{addr.address}</p>
                      <p className="text-gray-700">
                        {addr.city} - {addr.pincode}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">Phone: {addr.phone}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Change
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Items Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Items</h2>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity} × ₹{item.price}</p>
                    </div>
                    <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span>Payment Method</span>
              </h2>

              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 border-2 border-blue-500 rounded-lg bg-blue-50 cursor-pointer">
                  <input type="radio" name="payment" value="cod" defaultChecked className="w-5 h-5" />
                  <div>
                    <span className="font-semibold text-gray-900">Cash on Delivery</span>
                    <p className="text-sm text-gray-600">Pay when you receive</p>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                  <input type="radio" name="payment" value="upi" className="w-5 h-5" />
                  <div>
                    <span className="font-semibold text-gray-900">UPI</span>
                    <p className="text-sm text-gray-600">Pay via UPI apps</p>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                  <input type="radio" name="payment" value="card" className="w-5 h-5" />
                  <div>
                    <span className="font-semibold text-gray-900">Credit/Debit Card</span>
                    <p className="text-sm text-gray-600">Pay with card</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border-2 border-blue-100">
              <div className="flex items-center space-x-3 mb-2">
                <Truck className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Estimated Delivery</span>
              </div>
              <p className="text-gray-700">Your order will be delivered in 20 minutes</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm text-gray-600">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>Delivery</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/checkout/payment"
                className="block w-full text-center px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
