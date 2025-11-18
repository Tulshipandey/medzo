import Header from "../components/Header";
import Footer from "../components/Footer";
import { Heart, Shield, Clock, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your health and convenience are our top priorities",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "100% genuine medicines from verified licensed chemists",
    },
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description: "20-minute delivery promise with reliable service",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Serving communities with accessible healthcare",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Partner Chemists" },
    { number: "1M+", label: "Orders Delivered" },
    { number: "20 min", label: "Average Delivery" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About MedSwift</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing medicine delivery by connecting customers with their nearest 
            trusted chemists, ensuring fast, reliable, and safe access to medicines.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At MedSwift, our mission is to make healthcare accessible to everyone. We believe that 
            getting medicines should be fast, convenient, and trustworthy. By connecting customers 
            directly with licensed chemists in their area, we eliminate the need for inventory 
            management while ensuring genuine medicines reach you within 20 minutes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How We Work */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">No Inventory System</h3>
                <p className="text-gray-700">
                  Unlike traditional e-commerce, we don't store medicines. Orders go directly to 
                  your nearest licensed chemist, ensuring fresh stock and genuine products.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Verified Chemists</h3>
                <p className="text-gray-700">
                  All our partner chemists are licensed and verified. We maintain strict quality 
                  standards to ensure you receive authentic medicines.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery Network</h3>
                <p className="text-gray-700">
                  Our network of delivery partners ensures your medicines reach you within 20 minutes 
                  from the nearest chemist to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join the MedSwift Family</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience fast, reliable medicine delivery. Your health is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/medicines"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Order Now
            </a>
            <a
              href="/partner"
              className="px-8 py-4 bg-white/20 text-white border-2 border-white rounded-xl font-semibold hover:bg-white/30 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

