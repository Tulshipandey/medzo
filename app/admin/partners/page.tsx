import { ArrowLeft, Bike, Search, CheckCircle, X, Eye } from "lucide-react";
import Link from "next/link";

export default function AdminPartnersPage() {
  const partners = [
    { id: "DP001", name: "Rahul Kumar", phone: "+91 98765 43210", status: "online", deliveries: 125, earnings: 5000 },
    { id: "DP002", name: "Priya Sharma", phone: "+91 98765 43211", status: "offline", deliveries: 98, earnings: 3920 },
    { id: "DP003", name: "Amit Patel", phone: "+91 98765 43212", status: "online", deliveries: 150, earnings: 6000 },
    { id: "DP004", name: "Sneha Desai", phone: "+91 98765 43213", status: "online", deliveries: 76, earnings: 3040 },
    { id: "DP005", name: "Vikram Singh", phone: "+91 98765 43214", status: "offline", deliveries: 45, earnings: 1800 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/admin/dashboard"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Manage Delivery Partners</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search delivery partners..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Partners Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Partner ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Phone</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Deliveries</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Earnings</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((partner) => (
                  <tr key={partner.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900 font-medium">{partner.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{partner.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{partner.phone}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{partner.deliveries}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-gray-900">₹{partner.earnings}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            partner.status === "online" ? "bg-green-500" : "bg-gray-400"
                          }`}
                        ></span>
                        <span className="text-sm text-gray-700 capitalize">{partner.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <button className="p-1 text-blue-600 hover:text-blue-700">
                        <Eye className="w-4 h-4" />
                      </button>
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

