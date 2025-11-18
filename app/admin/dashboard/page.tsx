import { Package, Building2, Bike, DollarSign, TrendingUp, Users, CheckCircle, Clock, LogOut } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const stats = {
    totalOrders: 1250,
    activeChemists: 45,
    activePartners: 120,
    totalRevenue: 250000,
    pendingApprovals: 8,
    todayOrders: 85,
  };

  const recentOrders = [
    { id: "MS123456", customer: "John Doe", chemist: "ABC Pharmacy", amount: 165, status: "delivered" },
    { id: "MS123457", customer: "Jane Smith", chemist: "XYZ Medical", amount: 85, status: "in_transit" },
    { id: "MS123458", customer: "Mike Johnson", chemist: "Health Plus", amount: 250, status: "preparing" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-xs text-gray-500">MedSwift Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-red-600">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Orders</p>
              <Package className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Active Chemists</p>
              <Building2 className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.activeChemists}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Delivery Partners</p>
              <Bike className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.activePartners}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Revenue</p>
              <DollarSign className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Pending Approvals</p>
              <Clock className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.pendingApprovals}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Today's Orders</p>
              <TrendingUp className="w-5 h-5 text-indigo-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.todayOrders}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Link
            href="/admin/orders"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-2 border-gray-100 hover:border-blue-200"
          >
            <Package className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">View All Orders</h3>
            <p className="text-sm text-gray-600">Manage and track all orders</p>
          </Link>

          <Link
            href="/admin/chemists"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-2 border-gray-100 hover:border-green-200"
          >
            <Building2 className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Manage Chemists</h3>
            <p className="text-sm text-gray-600">View and manage chemist accounts</p>
          </Link>

          <Link
            href="/admin/partners"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-2 border-gray-100 hover:border-purple-200"
          >
            <Bike className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Manage Partners</h3>
            <p className="text-sm text-gray-600">View and manage delivery partners</p>
          </Link>

          <Link
            href="/admin/approvals"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-2 border-gray-100 hover:border-yellow-200"
          >
            <CheckCircle className="w-8 h-8 text-yellow-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Approvals</h3>
            <p className="text-sm text-gray-600">Approve new chemist onboarding</p>
          </Link>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Chemist</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{order.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{order.customer}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{order.chemist}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-gray-900">₹{order.amount}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "in_transit"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

