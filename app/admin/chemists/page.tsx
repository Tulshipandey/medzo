import { ArrowLeft, Building2, Search, CheckCircle, X, Eye } from "lucide-react";
import Link from "next/link";

export default function AdminChemistsPage() {
  const chemists = [
    { id: "CH001", name: "ABC Pharmacy", owner: "Rajesh Kumar", phone: "+91 98765 43210", status: "active", orders: 125 },
    { id: "CH002", name: "XYZ Medical Store", owner: "Priya Sharma", phone: "+91 98765 43211", status: "active", orders: 98 },
    { id: "CH003", name: "Health Plus Pharmacy", owner: "Amit Patel", phone: "+91 98765 43212", status: "pending", orders: 0 },
    { id: "CH004", name: "MediCare", owner: "Sneha Desai", phone: "+91 98765 43213", status: "active", orders: 76 },
    { id: "CH005", name: "Pharma Plus", owner: "Vikram Singh", phone: "+91 98765 43214", status: "inactive", orders: 45 },
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
            <h1 className="text-xl font-bold text-gray-900">Manage Chemists</h1>
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
              placeholder="Search chemists..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Chemists Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Chemist ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Owner</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Phone</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Orders</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {chemists.map((chemist) => (
                  <tr key={chemist.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900 font-medium">{chemist.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{chemist.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{chemist.owner}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{chemist.phone}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{chemist.orders}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          chemist.status === "active"
                            ? "bg-green-100 text-green-700"
                            : chemist.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {chemist.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-700">
                          <Eye className="w-4 h-4" />
                        </button>
                        {chemist.status === "pending" && (
                          <>
                            <button className="p-1 text-green-600 hover:text-green-700">
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-red-600 hover:text-red-700">
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
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

