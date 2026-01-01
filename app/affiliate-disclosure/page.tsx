import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Affiliate Disclosure
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-gray-800">
                <strong>Important:</strong> Discover Whitsundays contains affiliate links. When you book
                accommodations, tours, or activities through links on this site, we may earn a commission
                at no additional cost to you. This helps us maintain and improve this free resource.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Affiliate Links?</h2>
              <p className="text-gray-700 mb-4">
                Affiliate links are special tracking links that allow us to earn a small commission when
                you make a purchase or booking after clicking through from our site. These commissions
                come from the companies we partner with, not from you. You pay exactly the same price
                whether you use our affiliate links or go directly to the provider's website.
              </p>
              <p className="text-gray-700">
                For example, if you click on a link to book a Whitehaven Beach tour through our recommended
                tour operator and complete your booking, we may receive a small percentage of that sale as
                a commission from the tour operator.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Affiliate Partners</h2>
              <p className="text-gray-700 mb-4">
                We participate in affiliate programs with the following companies and booking platforms:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Booking.com</strong> - Hotel and accommodation bookings</li>
                <li><strong>Viator</strong> - Tours and activities</li>
                <li><strong>GetYourGuide</strong> - Tours and experiences</li>
                <li><strong>Agoda</strong> - Accommodation bookings</li>
                <li><strong>Klook</strong> - Activities and attractions</li>
                <li>Other tourism and travel service providers as partnerships develop</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise to You</h2>

              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Genuine Recommendations</h3>
                <p className="text-gray-700">
                  We only recommend tours, accommodations, and activities that we genuinely believe offer
                  value to visitors to the Whitsundays. Our recommendations are based on:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                  <li>Personal experience and local knowledge</li>
                  <li>Reputation and customer reviews</li>
                  <li>Quality of service and value for money</li>
                  <li>Suitability for our readers</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Extra Cost to You</h3>
                <p className="text-gray-700">
                  Using our affiliate links does not increase the price you pay. In many cases, we negotiate
                  special deals or discounts that are only available through our links, potentially saving
                  you money.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Editorial Independence</h3>
                <p className="text-gray-700">
                  Our editorial content is not influenced by affiliate relationships. We maintain complete
                  independence in our recommendations and will always disclose when content contains affiliate
                  links. If a product or service doesn't meet our standards, we won't recommend it regardless
                  of potential commission.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Affiliate Commissions Work</h2>
              <p className="text-gray-700 mb-4">
                When you click on an affiliate link:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>You're redirected to the partner's website (e.g., Booking.com, Viator)</li>
                <li>A tracking cookie is placed in your browser (this is standard practice)</li>
                <li>If you make a purchase within the cookie duration (typically 24-30 days), we may earn a commission</li>
                <li>The commission percentage varies by partner and product type (typically 3-10%)</li>
                <li>Commissions help us maintain this free resource and create more helpful content</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Affiliate Content</h2>
              <p className="text-gray-700">
                Not all links on this website are affiliate links. We also link to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Official tourism websites and government resources</li>
                <li>Local businesses and services we recommend</li>
                <li>Free attractions and activities</li>
                <li>Transportation and public service information</li>
              </ul>
              <p className="text-gray-700 mt-4">
                These links are provided purely for your convenience and we receive no compensation for them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Choices</h2>
              <p className="text-gray-700 mb-4">
                You are never obligated to use our affiliate links. You can always:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Search for providers directly</li>
                <li>Visit websites directly by typing the URL</li>
                <li>Compare prices across multiple platforms</li>
                <li>Book through other channels if you prefer</li>
              </ul>
              <p className="text-gray-700 mt-4">
                However, if you find our content helpful and choose to book through our links, we sincerely
                appreciate your support. It helps us continue providing free, comprehensive travel information
                about the Whitsundays.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Regulations</h2>
              <p className="text-gray-700 mb-4">
                Discover Whitsundays complies with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Australian Competition and Consumer Commission (ACCC)</strong> guidelines on disclosure</li>
                <li><strong>US Federal Trade Commission (FTC)</strong> guidelines for international visitors</li>
                <li><strong>Affiliate program terms and conditions</strong> of our partners</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We are committed to transparency and will always clearly identify affiliate content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions or Concerns?</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our affiliate relationships or how we earn commissions,
                please don't hesitate to contact us. We're committed to transparency and happy to answer
                any questions you may have.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Contact:</strong> [Your email address - add this when you have one]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Disclosure</h2>
              <p className="text-gray-700">
                We may update this affiliate disclosure from time to time to reflect changes in our affiliate
                partnerships or legal requirements. The "Last Updated" date at the top of this page indicates
                when this disclosure was last revised.
              </p>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
              <p className="text-gray-800">
                <strong>Thank you for supporting Discover Whitsundays!</strong> Your bookings through our
                affiliate links help us continue creating free, comprehensive travel guides to help you plan
                the perfect Whitsundays adventure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}