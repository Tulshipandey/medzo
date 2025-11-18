import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MedSwift</span>
            </div>
            <p className="text-gray-600 text-sm">
              Fast, reliable medicine delivery from your nearest trusted chemist.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/medicines" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Browse Medicines
                </Link>
              </li>
              <li>
                <Link href="/prescription" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Upload Prescription
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MedSwift. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link 
                href="/admin/login" 
                className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
              >
                Admin Panel
              </Link>
              <Link 
                href="/chemist/login" 
                className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
              >
                Chemist Login
              </Link>
              <Link 
                href="/delivery/login" 
                className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
              >
                Delivery Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

