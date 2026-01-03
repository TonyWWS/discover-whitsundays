import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BareboatPrivateChartersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gradient-to-br from-blue-600 via-blue-800 to-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-6xl font-bold mb-4">
              Bareboating & Private Charters
            </h1>
            <p className="font-heading text-2xl mb-6">
              Explore Whitehaven Your Way
            </p>
            <p className="font-body text-lg opacity-90">
              Detailed guide coming soon! Information on renting your own yacht or booking a private skippered charter.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xl text-gray-700 mb-8">
            This page is under construction. Check back soon for comprehensive information on bareboating and private charters in the Whitsundays.
          </p>
          <Link
            href="/tours/whitehaven-beach-tours"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            ← Back to Tour Recommendations
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}