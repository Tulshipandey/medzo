import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2024</p>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Due to the sensitive nature of medicines and health products, we have a strict refund policy. Refunds are only processed in specific circumstances as outlined below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligible for Refund</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Refunds may be issued in the following cases:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Damaged or defective products received</li>
              <li>Expired medicines delivered</li>
              <li>Wrong product delivered (different from what was ordered)</li>
              <li>Order cancelled by chemist before preparation</li>
              <li>Order not delivered within promised timeframe (subject to verification)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Not Eligible for Refund</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Refunds will not be issued for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Change of mind after delivery</li>
              <li>Prescription medicines that were correctly dispensed</li>
              <li>Products opened or used after delivery</li>
              <li>Orders cancelled by customer after chemist has prepared them</li>
              <li>Allergic reactions or side effects (please consult your doctor)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Process</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Contact our customer support within 24 hours of delivery</li>
              <li>Provide order ID and reason for refund request</li>
              <li>Submit photos if product is damaged or incorrect</li>
              <li>Our team will review and verify the claim</li>
              <li>If approved, refund will be processed within 5-7 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refund Method</h2>
            <p className="text-gray-700 leading-relaxed">
              Refunds will be processed to the original payment method used for the order. For cash on delivery orders, refunds will be transferred to your registered bank account or UPI ID.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For refund requests or questions, contact us at{" "}
              <a href="mailto:support@medswift.com" className="text-blue-600 hover:text-blue-700">
                support@medswift.com
              </a>{" "}
              or call our helpline: +91 1800-XXX-XXXX
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

