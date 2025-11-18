import Header from "../components/Header";
import Footer from "../components/Footer";
import { HelpCircle, Book, MessageSquare, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn how to place your first order",
      link: "/faq",
    },
    {
      icon: HelpCircle,
      title: "Order Help",
      description: "Track orders, cancellations, and returns",
      link: "/faq",
    },
    {
      icon: MessageSquare,
      title: "Account Support",
      description: "Manage your account and preferences",
      link: "/contact",
    },
    {
      icon: Phone,
      title: "Contact Support",
      description: "Get in touch with our support team",
      link: "/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Help Center</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Find answers and get the support you need
        </p>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {helpCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                href={category.link}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-2 border-gray-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  How to place an order?
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  How to upload prescription?
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  Track my order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  Payment methods
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  Return and refund policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Options</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Phone Support</p>
                  <p className="text-sm text-gray-600">+91 1800-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Email Support</p>
                  <p className="text-sm text-gray-600">support@medswift.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Live Chat</p>
                  <p className="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border-2 border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
              → FAQ
            </Link>
            <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
              → Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
              → Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

