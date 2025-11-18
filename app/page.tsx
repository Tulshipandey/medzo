import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { Search, Upload, MapPin, Clock, Shield, Truck, CheckCircle, TrendingUp, DollarSign, Zap } from "lucide-react";
import Link from "next/link";
import { medicines } from "./data/medicines";

export default function Home() {
  // Get first 6 medicines for popular section
  const popularMedicines = medicines.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get Medicines in{" "}
                <span className="text-blue-600">20 Minutes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Delivered from your nearest trusted chemist. Fast, reliable, and safe.
              </p>

              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search medicine..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg"
                  />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/medicines"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center shadow-lg hover:shadow-xl"
                >
                  Order Now
                </Link>
                <Link
                  href="/prescription"
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Prescription
                  </span>
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-12 relative overflow-hidden">
                    {/* Map Background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="50" cy="50" r="3" fill="currentColor" />
                        <circle cx="150" cy="80" r="3" fill="currentColor" />
                        <circle cx="100" cy="150" r="3" fill="currentColor" />
                        <path d="M50,50 L150,80 L100,150" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    {/* Scooter Icon */}
                    <div className="relative z-10 text-center">
                      <div className="text-6xl mb-4">🛵</div>
                      <div className="text-2xl font-bold text-gray-800">Fast Delivery</div>
                      <div className="text-gray-600 mt-2">20 Minutes Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Get your medicines in 3 simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-blue-600" />
              </div>
              <div className="bg-blue-50 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search / Upload Prescription
              </h3>
              <p className="text-gray-600">
                Search for medicines or upload your prescription. Our system finds the nearest chemist instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-green-600" />
              </div>
              <div className="bg-green-50 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-green-600 font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nearby Chemist Accepts Order
              </h3>
              <p className="text-gray-600">
                Your nearest licensed chemist receives and verifies your order. They prepare it for pickup.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-blue-600" />
              </div>
              <div className="bg-blue-50 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Delivery Partner Brings in 20 Minutes
              </h3>
              <p className="text-gray-600">
                Our delivery partner picks up from the chemist and delivers to your doorstep in 20 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular OTC Medicines */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Popular OTC Medicines
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Quick access to commonly needed medicines
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularMedicines.map((medicine) => (
              <ProductCard key={medicine.id} {...medicine} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/medicines"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Medicines
            </Link>
          </div>
        </div>
      </section>

      {/* Prescription Upload Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 border-2 border-blue-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Upload Your Prescription
              </h2>
              <p className="text-gray-600 text-lg">
                Our chemist verifies your prescription instantly
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 mb-6">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Choose File
                </button>
              </div>
            </div>

            {/* Security Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Verified Chemists</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Instant Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose MedSwift
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            We make medicine delivery simple, fast, and trustworthy
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">20-Minute Delivery</h3>
              <p className="text-gray-600">Get your medicines delivered in just 20 minutes from your nearest chemist.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Chemists</h3>
              <p className="text-gray-600">All our partner chemists are licensed and verified for your safety.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Tracking</h3>
              <p className="text-gray-600">Track your order in real-time from chemist to your doorstep.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Fake Medicines</h3>
              <p className="text-gray-600">100% genuine medicines sourced directly from licensed chemists.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your queries and concerns.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">Lightning-fast service with reliable delivery partners you can trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join as a Partner Chemist</h2>
          <p className="text-xl mb-8 text-blue-100">
            Grow your business with MedSwift. No setup fee, fast payouts.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 text-left">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-lg">Increase daily orders with our platform</span>
              </li>
              <li className="flex items-start space-x-3">
                <DollarSign className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-lg">No setup fee or hidden charges</span>
              </li>
              <li className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-lg">Fast payouts directly to your account</span>
              </li>
              <li className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <span className="text-lg">Verified platform with secure transactions</span>
              </li>
            </ul>
          </div>

          <Link
            href="/partner/apply"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Admin & Partner Access */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-gray-600">Access:</span>
            <Link
              href="/admin/login"
              className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-200"
            >
              Admin Panel
            </Link>
            <Link
              href="/chemist/login"
              className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors border border-gray-200"
            >
              Chemist Login
            </Link>
            <Link
              href="/delivery/login"
              className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors border border-gray-200"
            >
              Delivery Login
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
