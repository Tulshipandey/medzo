import { ArrowLeft, MapPin, Navigation, CheckCircle, Phone, MessageCircle, Key } from "lucide-react";
import Link from "next/link";

export default function DeliveryDetailsPage({ params }: { params: { id: string } }) {
  const delivery = {
    id: params.id,
    chemist: "ABC Pharmacy",
    chemistAddress: "123 Chemist Street, Mumbai - 400001",
    chemistPhone: "+91 98765 43210",
    customer: "John Doe",
    customerAddress: "123 Main Street, Apartment 4B, Mumbai - 400001",
    customerPhone: "+91 98765 43211",
    items: 3,
    payment: 40,
    distance: "2.5 km",
    status: "at_chemist", // at_chemist, picked_up, delivered
    otp: "1234",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/delivery/dashboard"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Order #{delivery.id}</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Delivery Status</h2>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold">
              {delivery.status === "at_chemist"
                ? "At Chemist"
                : delivery.status === "picked_up"
                ? "On the way"
                : "Delivered"}
            </span>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  delivery.status !== "at_chemist" ? "bg-green-500" : "bg-blue-500"
                } text-white`}
              >
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Navigate to Chemist</p>
                <p className="text-sm text-gray-600">{delivery.chemistAddress}</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm flex items-center space-x-2">
                <Navigation className="w-4 h-4" />
                <span>Navigate</span>
              </button>
            </div>

            {delivery.status !== "at_chemist" && (
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    delivery.status === "delivered" ? "bg-green-500" : "bg-blue-500"
                  } text-white`}
                >
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Pickup Confirmed</p>
                  <p className="text-sm text-gray-600">Order picked up from chemist</p>
                </div>
              </div>
            )}

            {delivery.status === "picked_up" && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500 text-white animate-pulse">
                  <Navigation className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Navigate to Customer</p>
                  <p className="text-sm text-gray-600">{delivery.customerAddress}</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm flex items-center space-x-2">
                  <Navigation className="w-4 h-4" />
                  <span>Navigate</span>
                </button>
              </div>
            )}

            {delivery.status === "delivered" && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500 text-white">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Delivered</p>
                  <p className="text-sm text-gray-600">Order successfully delivered</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Chemist */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Pickup Location</h3>
            </div>
            <p className="font-medium text-gray-900 mb-1">{delivery.chemist}</p>
            <p className="text-sm text-gray-600 mb-4">{delivery.chemistAddress}</p>
            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm">
                <Navigation className="w-4 h-4" />
                <span>Navigate</span>
              </button>
            </div>
          </div>

          {/* Customer */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900">Delivery Location</h3>
            </div>
            <p className="font-medium text-gray-900 mb-1">{delivery.customer}</p>
            <p className="text-sm text-gray-600 mb-4">{delivery.customerAddress}</p>
            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-white text-green-600 border-2 border-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors text-sm">
                <Navigation className="w-4 h-4" />
                <span>Navigate</span>
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        {delivery.status === "at_chemist" && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Pickup Confirmation</h3>
            <p className="text-sm text-gray-600 mb-4">
              Confirm that you have picked up the order from the chemist
            </p>
            <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Confirm Pickup</span>
            </button>
          </div>
        )}

        {delivery.status === "picked_up" && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Key className="w-5 h-5 text-blue-600" />
              <span>Delivery OTP</span>
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border-2 border-blue-100 mb-4">
              <p className="text-center text-4xl font-bold text-gray-900 mb-2">{delivery.otp}</p>
              <p className="text-center text-sm text-gray-600">
                Share this OTP with the customer to complete delivery
              </p>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter customer OTP"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-center text-2xl font-bold tracking-widest"
                maxLength={4}
              />
              <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Complete Delivery
              </button>
            </div>
          </div>
        )}

        {/* Order Info */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Order Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Items</span>
              <span className="font-medium text-gray-900">{delivery.items} items</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Distance</span>
              <span className="font-medium text-gray-900">{delivery.distance}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-gray-900 font-semibold">Delivery Payment</span>
              <span className="font-bold text-green-600">₹{delivery.payment}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

