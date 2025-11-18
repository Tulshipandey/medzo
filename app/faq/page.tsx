'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How fast is the delivery?",
      answer: "We guarantee delivery within 20 minutes from the time your order is accepted by the chemist. Delivery times may vary slightly based on location and traffic conditions.",
    },
    {
      question: "Do I need a prescription for all medicines?",
      answer: "No, only prescription medicines require a valid prescription from a licensed medical practitioner. Over-the-counter (OTC) medicines can be ordered without a prescription.",
    },
    {
      question: "How do I upload my prescription?",
      answer: "You can upload your prescription during checkout or from the 'Upload Prescription' page. Simply take a clear photo or scan your prescription and upload it. Our licensed chemist will verify it before preparing your order.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept cash on delivery (COD), UPI payments (PhonePe, Google Pay, Paytm), and credit/debit cards. All payments are secure and encrypted.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order is confirmed, you'll receive a tracking link. You can track your order in real-time from the chemist to your doorstep on our order tracking page.",
    },
    {
      question: "What if I receive wrong or damaged medicines?",
      answer: "If you receive wrong or damaged medicines, please contact our customer support within 24 hours. We'll arrange a replacement or full refund as per our refund policy.",
    },
    {
      question: "Are the medicines genuine?",
      answer: "Absolutely! All our partner chemists are licensed and verified. We source medicines directly from licensed chemists, ensuring 100% genuine products. We have a strict no-fake-medicines policy.",
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order before it's accepted by the chemist. Once the chemist starts preparing your order, cancellation may not be possible. Contact customer support for assistance.",
    },
    {
      question: "Is there a minimum order value?",
      answer: "No, there's no minimum order value. You can order medicines of any value. Delivery is free for all orders.",
    },
    {
      question: "How do I become a partner chemist?",
      answer: "You can apply to become a partner chemist by visiting our 'Partner With Us' page. Fill out the application form with your pharmacy details and license information. Our team will review and get back to you within 24-48 hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Find answers to common questions about MedSwift
        </p>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border-2 border-blue-100 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please contact our friendly team.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

