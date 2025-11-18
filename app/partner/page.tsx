import Header from "../components/Header";
import Footer from "../components/Footer";
import { Building2, TrendingUp, DollarSign, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PartnerPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Daily Orders",
      description: "Join thousands of customers ordering medicines through our platform",
    },
    {
      icon: DollarSign,
      title: "No Setup Fee",
      description: "Start selling immediately with zero setup costs or hidden charges",
    },
    {
      icon: Zap,
      title: "Fast Payouts",
      description: "Get paid quickly with direct bank transfers every week",
    },
    {
      icon: Shield,
      title: "Verified Platform",
      description: "Secure transactions and verified customer base",
    },
  ];

  const requirements = [
    "Valid pharmacy license",
    "Registered business address",
    "Bank account for payments",
    "Basic inventory management",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partner With MedSwift
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Grow your pharmacy business with our fast-growing medicine delivery platform. 
            No setup fee, fast payouts, and a steady stream of orders.
          </p>
          <Link
            href="/partner/apply"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Join the fastest-growing medicine delivery network
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Get started in 3 simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600">
                Fill out a simple application form with your pharmacy details and license information
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Verified</h3>
              <p className="text-gray-600">
                Our team reviews your application and verifies your pharmacy license (usually within 24-48 hours)
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Receiving Orders</h3>
              <p className="text-gray-600">
                Once approved, start receiving orders from customers in your area immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Requirements
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            What you need to get started
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border-2 border-blue-100">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of pharmacies already partnering with MedSwift
          </p>
          <Link
            href="/partner/apply"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

