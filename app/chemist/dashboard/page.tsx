import { Package, Clock, CheckCircle, DollarSign, Bell, LogOut, FileText } from "lucide-react";
import Link from "next/link";

export default function ChemistDashboardPage() {
  const stats = {
    newOrders: 5,
    preparing: 3,
    ready: 2,
    todayEarnings: 1250,
  };

  const newOrders = [
    {
      id: "MS123456",
      customer: "John Doe",
      items: 3,
      total: 165,
      time: "2 min ago",
      hasPrescription: true,
    },
    {
      id: "MS123457",
      customer: "Jane Smith",
      items: 2,
      total: 85,
      time: "5 min ago",
      hasPrescription: false,
    },
    {
      id: "MS123458",
      customer: "Mike Johnson",
      items: 1,
      total: 45,
      time: "8 min ago",
      hasPrescription: true,
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
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ABC Pharmacy</h1>
                <p className="text-xs text-gray-500">Chemist Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">New Orders</p>
                <p className="text-3xl font-bold text-gray-900">{stats.newOrders}</p>
              </div>
              <Package className="w-10 h-10 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Preparing</p>
                <p className="text-3xl font-bold text-gray-900">{stats.preparing}</p>
              </div>
              <Clock className="w-10 h-10 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Ready</p>
                <p className="text-3xl font-bold text-gray-900">{stats.ready}</p>
              </div>
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Today's Earnings</p>
                <p className="text-3xl font-bold text-gray-900">₹{stats.todayEarnings}</p>
              </div>
              <DollarSign className="w-10 h-10 text-purple-500" />
            </div>
          </div>
        </div>

        {/* New Orders */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">New Orders</h2>
          <div className="space-y-4">
            {newOrders.map((order) => (
              <div
                key={order.id}
                className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                      {order.hasPrescription && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded flex items-center space-x-1">
                          <FileText className="w-3 h-3" />
                          <span>Prescription</span>
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Customer: {order.customer}</p>
                    <p className="text-sm text-gray-600 mb-1">{order.items} items • ₹{order.total}</p>
                    <p className="text-xs text-gray-500">{order.time}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      href={`/chemist/orders/${order.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/chemist/orders"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-2 border-gray-100 hover:border-blue-200"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">View All Orders</h3>
            <p className="text-gray-600 text-sm">See all your orders and their status</p>
          </Link>

          <Link
            href="/chemist/earnings"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-2 border-gray-100 hover:border-blue-200"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Earnings Summary</h3>
            <p className="text-gray-600 text-sm">View your earnings and payment history</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

