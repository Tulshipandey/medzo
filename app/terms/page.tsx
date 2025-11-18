import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2024</p>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using MedSwift's platform, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-700 leading-relaxed">
              MedSwift is a medicine delivery platform that connects customers with licensed chemists. We facilitate the ordering and delivery of medicines but do not store inventory. All medicines are sourced directly from licensed partner chemists.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Prescription Requirements</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For prescription medicines:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>You must provide a valid prescription from a licensed medical practitioner</li>
              <li>Prescriptions are verified by licensed chemists before fulfillment</li>
              <li>We reserve the right to reject orders with invalid or expired prescriptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Order Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Orders are processed as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Orders are sent to the nearest licensed chemist</li>
              <li>Chemist verifies prescription (if applicable) and prepares order</li>
              <li>Delivery partner picks up and delivers within 20 minutes</li>
              <li>Orders may be cancelled if chemist cannot fulfill the order</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Payment can be made through cash on delivery, UPI, or credit/debit cards. All prices are in Indian Rupees (₹) and are inclusive of applicable taxes. Payment must be completed before or at the time of delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Delivery</h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to deliver all orders within 20 minutes. Delivery times may vary based on location, traffic, and availability. We are not liable for delays caused by factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Returns and Refunds</h2>
            <p className="text-gray-700 leading-relaxed">
              Due to the nature of medicines, returns are generally not accepted unless the product is damaged, expired, or incorrect. Please refer to our{" "}
              <a href="/refund" className="text-blue-600 hover:text-blue-700">Refund Policy</a> for details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              MedSwift acts as an intermediary platform. We are not responsible for the quality, authenticity, or efficacy of medicines, which are the responsibility of licensed chemists. We are not liable for any health-related issues arising from medicine consumption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms & Conditions, contact us at{" "}
              <a href="mailto:legal@medswift.com" className="text-blue-600 hover:text-blue-700">
                legal@medswift.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

