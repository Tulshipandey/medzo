import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CreditCard, Smartphone, Wallet, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <span>Cart</span>
            <span>→</span>
            <span>Checkout</span>
            <span>→</span>
            <span className="text-blue-600 font-semibold">Payment</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Payment</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Payment Options */}
          <div className="md:col-span-2 space-y-6">
            {/* Order Summary Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Paracetamol 500mg x 2</span>
                  <span>₹50</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>ORS Powder x 1</span>
                  <span>₹30</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Cough Syrup x 1</span>
                  <span>₹85</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>Total Amount</span>
                    <span>₹165</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Select Payment Method</h2>

              <div className="space-y-4">
                {/* Cash on Delivery */}
                <label className="flex items-start space-x-4 p-4 border-2 border-blue-500 rounded-xl bg-blue-50 cursor-pointer">
                  <input type="radio" name="payment" value="cod" defaultChecked className="w-5 h-5 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Wallet className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">Cash on Delivery</span>
                    </div>
                    <p className="text-sm text-gray-600">Pay when you receive your order</p>
                  </div>
                </label>

                {/* UPI */}
                <label className="flex items-start space-x-4 p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 cursor-pointer">
                  <input type="radio" name="payment" value="upi" className="w-5 h-5 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Smartphone className="w-5 h-5 text-gray-600" />
                      <span className="font-semibold text-gray-900">UPI</span>
                    </div>
                    <p className="text-sm text-gray-600">Pay via PhonePe, Google Pay, Paytm</p>
                    <div className="mt-3">
                      <input
                        type="text"
                        placeholder="Enter UPI ID"
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                </label>

                {/* Card */}
                <label className="flex items-start space-x-4 p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 cursor-pointer">
                  <input type="radio" name="payment" value="card" className="w-5 h-5 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                      <span className="font-semibold text-gray-900">Credit/Debit Card</span>
                    </div>
                    <p className="text-sm text-gray-600">Pay with your card</p>
                    <div className="mt-3 space-y-3">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Details Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Delivery Details</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Address</p>
                  <p className="text-gray-900 font-medium">123 Main Street, Apartment 4B</p>
                  <p className="text-gray-900">Mumbai - 400001</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Phone</p>
                  <p className="text-gray-900 font-medium">+91 98765 43210</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Estimated Delivery</p>
                  <p className="text-gray-900 font-medium">20 minutes</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                  <span>Total</span>
                  <span>₹165</span>
                </div>
                <Link
                  href="/orders/status"
                  className="block w-full text-center px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Confirm Payment
                </Link>
                <Link
                  href="/checkout"
                  className="block w-full text-center mt-3 px-6 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

