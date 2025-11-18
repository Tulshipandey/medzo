import Header from "../components/Header";
import Footer from "../components/Footer";
import { Search, Package } from "lucide-react";
import Link from "next/link";

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Track Your Order</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Enter your order ID to track the status of your delivery
        </p>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order ID
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your order ID (e.g., MS123456)"
                />
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Track Order
            </button>
          </div>

          {/* Example Order Status */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center mb-6">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">Enter an order ID above to track your order</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border-2 border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-4">
            Can't find your order ID? Check your email or SMS for the order confirmation. 
            You can also view all your orders from your account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Login to View Orders
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

