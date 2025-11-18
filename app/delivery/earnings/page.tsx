import { ArrowLeft, DollarSign, TrendingUp, Calendar, Download, Package } from "lucide-react";
import Link from "next/link";

export default function DeliveryEarningsPage() {
  const earnings = {
    today: 320,
    thisWeek: 2100,
    thisMonth: 8500,
    total: 45000,
    todayDeliveries: 8,
  };

  const recentDeliveries = [
    { id: "MS123456", amount: 40, date: "2024-01-15", time: "10:30 AM", status: "completed" },
    { id: "MS123457", amount: 50, date: "2024-01-15", time: "11:15 AM", status: "completed" },
    { id: "MS123458", amount: 35, date: "2024-01-15", time: "12:00 PM", status: "completed" },
    { id: "MS123459", amount: 45, date: "2024-01-15", time: "1:30 PM", status: "completed" },
    { id: "MS123460", amount: 60, date: "2024-01-15", time: "2:45 PM", status: "completed" },
  ];

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
            <h1 className="text-xl font-bold text-gray-900">Earnings</h1>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Earnings Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Today</p>
              <DollarSign className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{earnings.today}</p>
            <p className="text-xs text-gray-500 mt-1">{earnings.todayDeliveries} deliveries</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">This Week</p>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{earnings.thisWeek}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">This Month</p>
              <Calendar className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{earnings.thisMonth}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Earnings</p>
              <DollarSign className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{earnings.total}</p>
          </div>
        </div>

        {/* Recent Deliveries */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Deliveries</h2>
            <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>All Time</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date & Time</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentDeliveries.map((delivery) => (
                  <tr key={delivery.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{delivery.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {delivery.date} • {delivery.time}
                    </td>
                    <td className="py-3 px-4 text-sm font-semibold text-gray-900">₹{delivery.amount}</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {delivery.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border-2 border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Information</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600 mb-1">Bank Account</p>
              <p className="font-semibold text-gray-900">****5678</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Next Payout</p>
              <p className="font-semibold text-gray-900">Every Monday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

