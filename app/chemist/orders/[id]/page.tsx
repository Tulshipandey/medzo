import { ArrowLeft, CheckCircle, X, Package, FileText, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function ChemistOrderDetailsPage({ params }: { params: { id: string } }) {
  const order = {
    id: params.id,
    customer: "John Doe",
    phone: "+91 98765 43210",
    address: "123 Main Street, Apartment 4B, Mumbai - 400001",
    items: [
      { name: "Paracetamol 500mg", quantity: 2, price: 25 },
      { name: "ORS Powder", quantity: 1, price: 30 },
      { name: "Cough Syrup 100ml", quantity: 1, price: 85 },
    ],
    total: 165,
    hasPrescription: true,
    prescriptionUrl: "/prescriptions/sample.jpg",
    orderTime: "10:30 AM",
    status: "new", // new, accepted, preparing, ready
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/chemist/dashboard"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Order #{order.id}</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Order Info */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Details</h2>
              <p className="text-gray-600">Placed at {order.orderTime}</p>
            </div>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold">
              New Order
            </span>
          </div>

          {/* Customer Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Customer Information</h3>
              <p className="text-gray-700">{order.customer}</p>
              <p className="text-gray-700">{order.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Delivery Address</span>
              </h3>
              <p className="text-gray-700">{order.address}</p>
            </div>
          </div>

          {/* Items */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{order.total}</span>
            </div>
          </div>

          {/* Prescription */}
          {order.hasPrescription && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Prescription</span>
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">prescription.jpg</p>
                      <p className="text-sm text-gray-600">Click to view full prescription</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    View Prescription
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
              <CheckCircle className="w-5 h-5" />
              <span>Accept Order</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors">
              <X className="w-5 h-5" />
              <span>Reject Order</span>
            </button>
          </div>
        </div>

        {/* Status Timeline (if accepted) */}
        {order.status !== "new" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Order Status</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Order Accepted</span>
              </div>
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Preparing Order</span>
              </div>
            </div>
            <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Mark as Ready for Pickup
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

