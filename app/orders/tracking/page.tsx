import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Live Order Tracking</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Map View */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg h-96 flex items-center justify-center border-2 border-blue-100 relative overflow-hidden">
                {/* Simplified Map Representation */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Roads */}
                    <path
                      d="M50,200 Q200,100 350,200"
                      stroke="#cbd5e1"
                      strokeWidth="8"
                      fill="none"
                    />
                    <path
                      d="M50,250 Q200,300 350,250"
                      stroke="#cbd5e1"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Chemist Location */}
                    <circle cx="50" cy="200" r="12" fill="#10b981" />
                    <text x="50" y="180" textAnchor="middle" className="text-xs font-semibold">
                      Chemist
                    </text>
                    {/* Delivery Partner (Moving) */}
                    <circle cx="200" cy="150" r="10" fill="#2563eb" className="animate-pulse">
                      <animate
                        attributeName="cx"
                        values="50;200;350"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        values="200;150;200"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <text x="200" y="130" textAnchor="middle" className="text-xs font-semibold">
                      Delivery
                    </text>
                    {/* Your Location */}
                    <circle cx="350" cy="200" r="12" fill="#ef4444" />
                    <text x="350" y="180" textAnchor="middle" className="text-xs font-semibold">
                      You
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Route Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Route Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">ABC Pharmacy</p>
                    <p className="text-sm text-gray-600">123 Chemist Street, Mumbai</p>
                    <p className="text-xs text-gray-500 mt-1">Pickup completed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="font-semibold text-gray-900">On the way</p>
                    <p className="text-sm text-gray-600">Rahul K. is delivering your order</p>
                    <p className="text-xs text-blue-600 mt-1">ETA: 15 minutes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-400">Your Location</p>
                    <p className="text-sm text-gray-500">123 Main Street, Apartment 4B</p>
                    <p className="text-xs text-gray-400 mt-1">Destination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Info</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order ID</p>
                  <p className="font-semibold text-gray-900">MS123456</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Estimated Arrival</p>
                  <p className="font-semibold text-blue-600">15 minutes</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Delivery Partner</p>
                  <p className="font-semibold text-gray-900">Rahul K.</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Call Partner</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>Message</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  <Navigation className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

