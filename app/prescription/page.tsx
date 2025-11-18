import Header from "../components/Header";
import Footer from "../components/Footer";
import { Upload, Shield, CheckCircle, Clock, FileText } from "lucide-react";
import Link from "next/link";

export default function PrescriptionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upload Your Prescription</h1>
          <p className="text-xl text-gray-600">
            Our chemist verifies your prescription instantly and prepares your order
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer mb-6">
            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-700 font-medium mb-2">Click to upload or drag and drop</p>
            <p className="text-sm text-gray-500 mb-4">PNG, JPG, PDF up to 10MB</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Choose File
            </button>
          </div>

          {/* Uploaded File Preview (if any) */}
          <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200 hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">prescription.jpg</p>
                  <p className="text-sm text-gray-600">2.5 MB</p>
                </div>
              </div>
              <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border-2 border-blue-100 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Trust Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Verified Chemists</h3>
              <p className="text-sm text-gray-600">All our partner chemists are licensed and verified</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Instant Verification</h3>
              <p className="text-sm text-gray-600">Your prescription is verified within minutes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Secure & Private</h3>
              <p className="text-sm text-gray-600">Your prescription data is encrypted and secure</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How It Works</h2>
          <ol className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Upload Prescription</h3>
                <p className="text-gray-600">Take a clear photo or scan your prescription</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Instant Verification</h3>
                <p className="text-gray-600">Our licensed chemist verifies your prescription</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Order Confirmation</h3>
                <p className="text-gray-600">Get your medicines delivered in 20 minutes</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/medicines"
            className="inline-block px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Browse Medicines Instead
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

