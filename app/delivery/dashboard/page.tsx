import { Package, MapPin, DollarSign, Power, LogOut, Navigation, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function DeliveryDashboardPage() {
  const isOnline = true;
  const stats = {
    todayDeliveries: 8,
    todayEarnings: 320,
    activeDeliveries: 2,
  };

  const availableDeliveries = [
    {
      id: "MS123456",
      chemist: "ABC Pharmacy",
      chemistAddress: "123 Chemist Street, Mumbai",
      customer: "John Doe",
      customerAddress: "123 Main Street, Apartment 4B, Mumbai",
      distance: "2.5 km",
      payment: 40,
      items: 3,
    },
    {
      id: "MS123457",
      chemist: "XYZ Medical Store",
      chemistAddress: "456 Medical Road, Mumbai",
      customer: "Jane Smith",
      customerAddress: "789 Park Avenue, Mumbai",
      distance: "3.2 km",
      payment: 50,
      items: 2,
    },
  ];

  const activeDeliveries = [
    {
      id: "MS123458",
      chemist: "Health Plus Pharmacy",
      customer: "Mike Johnson",
      status: "picked_up",
      timeRemaining: "12 min",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Rahul K.</h1>
                <p className="text-xs text-gray-500">Delivery Partner</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Online/Offline Toggle */}
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"}`}></span>
                <span className="text-sm text-gray-600">{isOnline ? "Online" : "Offline"}</span>
              </div>
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isOnline
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {isOnline ? "Go Offline" : "Go Online"}
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Today's Deliveries</p>
                <p className="text-3xl font-bold text-gray-900">{stats.todayDeliveries}</p>
              </div>
              <Package className="w-10 h-10 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Today's Earnings</p>
                <p className="text-3xl font-bold text-gray-900">₹{stats.todayEarnings}</p>
              </div>
              <DollarSign className="w-10 h-10 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Deliveries</p>
                <p className="text-3xl font-bold text-gray-900">{stats.activeDeliveries}</p>
              </div>
              <Navigation className="w-10 h-10 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Active Deliveries */}
        {activeDeliveries.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Deliveries</h2>
            <div className="space-y-4">
              {activeDeliveries.map((delivery) => (
                <div
                  key={delivery.id}
                  className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">Order #{delivery.id}</h3>
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                          {delivery.status === "picked_up" ? "On the way" : "At Chemist"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Chemist: {delivery.chemist}</p>
                      <p className="text-sm text-gray-600 mb-1">Customer: {delivery.customer}</p>
                      <p className="text-xs text-blue-600 font-medium">ETA: {delivery.timeRemaining}</p>
                    </div>
                    <Link
                      href={`/delivery/deliveries/${delivery.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Available Deliveries */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Deliveries</h2>
          {availableDeliveries.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No deliveries available at the moment</p>
            </div>
          ) : (
            <div className="space-y-4">
              {availableDeliveries.map((delivery) => (
                <div
                  key={delivery.id}
                  className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">Order #{delivery.id}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                          {delivery.items} items
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Pickup: {delivery.chemist}</p>
                            <p className="text-gray-600 text-xs">{delivery.chemistAddress}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Delivery: {delivery.customer}</p>
                            <p className="text-gray-600 text-xs">{delivery.customerAddress}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3">
                          <span className="text-gray-600">Distance: {delivery.distance}</span>
                          <span className="font-semibold text-green-600">₹{delivery.payment}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 ml-4">
                      <Link
                        href={`/delivery/deliveries/${delivery.id}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm text-center"
                      >
                        Accept
                      </Link>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
                        View Map
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

