import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CheckCircle, Clock, Package, Truck, MapPin } from "lucide-react";
import Link from "next/link";

export default function OrderStatusPage() {
  const orderStatus = {
    orderId: "MS123456",
    status: "out_for_delivery", // placed, confirmed, preparing, ready, out_for_delivery, delivered
    estimatedTime: "15 minutes",
    items: [
      { name: "Paracetamol 500mg", quantity: 2 },
      { name: "ORS Powder", quantity: 1 },
      { name: "Cough Syrup 100ml", quantity: 1 },
    ],
    total: 165,
    address: "123 Main Street, Apartment 4B, Mumbai - 400001",
    chemist: "ABC Pharmacy",
    deliveryPartner: "Rahul K.",
  };

  const steps = [
    { id: "placed", label: "Order Placed", icon: CheckCircle, completed: true },
    { id: "confirmed", label: "Confirmed", icon: CheckCircle, completed: true },
    { id: "preparing", label: "Preparing", icon: Package, completed: true },
    { id: "ready", label: "Ready for Pickup", icon: CheckCircle, completed: true },
    { id: "out_for_delivery", label: "Out for Delivery", icon: Truck, completed: true, active: true },
    { id: "delivered", label: "Delivered", icon: CheckCircle, completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Status</h1>
          <p className="text-gray-600">Order ID: {orderStatus.orderId}</p>
        </div>

        {/* Status Timeline */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <div className="relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = step.completed;
              const isActive = step.active;

              return (
                <div key={step.id} className="flex items-start mb-8 last:mb-0">
                  <div className="flex flex-col items-center mr-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isActive
                          ? "bg-blue-600 text-white animate-pulse"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-0.5 h-16 mt-2 ${
                          isCompleted ? "bg-green-500" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3
                      className={`font-semibold ${
                        isCompleted || isActive ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </h3>
                    {isActive && (
                      <p className="text-sm text-blue-600 mt-1">
                        Estimated time: {orderStatus.estimatedTime}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-3">
              {orderStatus.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.name} x {item.quantity}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹{orderStatus.total}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Info</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-600 mb-1">Address</p>
                <p className="text-gray-900 font-medium">{orderStatus.address}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Chemist</p>
                <p className="text-gray-900 font-medium">{orderStatus.chemist}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Delivery Partner</p>
                <p className="text-gray-900 font-medium">{orderStatus.deliveryPartner}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Tracking */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Live Tracking</span>
            </h2>
            <Link
              href="/orders/tracking"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              View Full Map
            </Link>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 border-2 border-blue-100">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-gray-700 font-medium mb-2">Your order is on the way!</p>
              <p className="text-sm text-gray-600">
                {orderStatus.deliveryPartner} is delivering your order
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold">
                  ETA: {orderStatus.estimatedTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/orders"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Orders
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

