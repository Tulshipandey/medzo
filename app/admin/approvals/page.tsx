import { ArrowLeft, Building2, CheckCircle, X, FileText, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function AdminApprovalsPage() {
  const pendingApprovals = [
    {
      id: "APP001",
      name: "New Health Pharmacy",
      owner: "Rajesh Kumar",
      phone: "+91 98765 43210",
      address: "123 Medical Street, Mumbai - 400001",
      license: "MH/PH/2024/001",
      submittedDate: "2024-01-10",
    },
    {
      id: "APP002",
      name: "City Medical Store",
      owner: "Priya Sharma",
      phone: "+91 98765 43211",
      address: "456 Health Road, Mumbai - 400070",
      license: "MH/PH/2024/002",
      submittedDate: "2024-01-12",
    },
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
            <h1 className="text-xl font-bold text-gray-900">Pending Approvals</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {pendingApprovals.map((approval) => (
            <div key={approval.id} className="bg-white rounded-xl shadow-sm p-6 border-2 border-yellow-200">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{approval.name}</h2>
                  <p className="text-gray-600">Application ID: {approval.id}</p>
                </div>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg font-semibold">
                  Pending Review
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <span>Chemist Information</span>
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">Owner Name</p>
                      <p className="font-medium text-gray-900">{approval.owner}</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Phone className="w-4 h-4 text-gray-600 mt-0.5" />
                      <div>
                        <p className="text-gray-600 mb-1">Phone</p>
                        <p className="font-medium text-gray-900">{approval.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-gray-600 mt-0.5" />
                      <div>
                        <p className="text-gray-600 mb-1">Address</p>
                        <p className="font-medium text-gray-900">{approval.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <span>License Information</span>
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">License Number</p>
                      <p className="font-medium text-gray-900">{approval.license}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Submitted Date</p>
                      <p className="font-medium text-gray-900">{approval.submittedDate}</p>
                    </div>
                    <div>
                      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                        View Documents
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-6 border-t border-gray-200">
                <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  <CheckCircle className="w-5 h-5" />
                  <span>Approve</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  <X className="w-5 h-5" />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          ))}

          {pendingApprovals.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All Caught Up!</h2>
              <p className="text-gray-600">No pending approvals at the moment</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

