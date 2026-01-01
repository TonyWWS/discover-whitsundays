import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl">
              Have questions about the Whitsundays? I'd love to hear from you!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Whether you have questions about planning your trip, need local recommendations,
              or want to share feedback about the site, I'm here to help.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <div className="text-center">
                <div className="text-5xl mb-4">📧</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Me</h2>
                <p className="text-gray-700 mb-4">
                  The best way to reach me is via email. I typically respond within 24-48 hours.
                </p>
                <a
                  href="mailto:info@discoverwhitsundays.com"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  info@discoverwhitsundays.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl border-2 border-green-200">
              <div className="text-center">
                <div className="text-5xl mb-4">📍</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Based in Airlie Beach</h2>
                <p className="text-gray-700 mb-4">
                  I'm a local resident of Airlie Beach, Queensland, in the heart of the Whitsundays.
                </p>
                <div className="text-gray-700 font-semibold">
                  <p>Airlie Beach</p>
                  <p>Queensland, Australia</p>
                </div>
              </div>
            </div>
          </div>

          {/* What to Contact About */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Can I Help With?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trip Planning</h3>
                <p className="text-gray-700 text-sm">
                  Questions about itineraries, which tours to book, where to stay, or how to make
                  the most of your time in the Whitsundays.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Local Advice</h3>
                <p className="text-gray-700 text-sm">
                  Insider tips, local recommendations, best times to visit, weather concerns,
                  or anything else only a local would know.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Feedback</h3>
                <p className="text-gray-700 text-sm">
                  Suggestions for improving the site, corrections to information, or sharing
                  your Whitsundays experience.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Partnerships</h3>
                <p className="text-gray-700 text-sm">
                  Tourism businesses, tour operators, or accommodation providers interested
                  in collaboration opportunities.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <div className="text-3xl mb-3">📰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Media Inquiries</h3>
                <p className="text-gray-700 text-sm">
                  Press requests, interview opportunities, or content collaboration from
                  travel publications.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <div className="text-3xl mb-3">❓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">General Questions</h3>
                <p className="text-gray-700 text-sm">
                  Anything else! If you're not sure, just reach out. I'm happy to help
                  however I can.
                </p>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">⏱️ Response Time</h3>
            <p className="text-gray-700">
              I aim to respond to all emails within 24-48 hours. During peak tourist season
              (June-August), responses may take slightly longer, but I'll get back to you as
              soon as possible. If your question is time-sensitive, please mention that in your
              subject line.
            </p>
          </div>

          {/* Before You Contact */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Before You Email</h3>
            <p className="text-gray-700 mb-4">
              Your question might already be answered! Check out these helpful resources:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/itinerary-3-day"
                className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <strong className="text-gray-900">3-Day Itinerary</strong>
                <p className="text-sm text-gray-600 mt-1">Complete planning guide for first-time visitors</p>
              </Link>
              <Link
                href="/where-to-stay"
                className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <strong className="text-gray-900">Where to Stay</strong>
                <p className="text-sm text-gray-600 mt-1">Accommodation options and recommendations</p>
              </Link>
              <Link
                href="/things-to-do"
                className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <strong className="text-gray-900">Things to Do</strong>
                <p className="text-sm text-gray-600 mt-1">Activities, tours, and experiences</p>
              </Link>
              <Link
                href="/about"
                className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <strong className="text-gray-900">About the Whitsundays</strong>
                <p className="text-sm text-gray-600 mt-1">Essential information about the region</p>
              </Link>
            </div>
          </div>

          {/* FAQ Teaser */}
          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Many common questions are answered throughout the site. Here are some of the most popular:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <strong className="text-gray-900">How many days do I need in the Whitsundays?</strong>
                <p className="text-gray-700 text-sm mt-2">
                  Minimum 3 days to see the highlights. 5-7 days is ideal for a relaxed pace.
                  Check out our <Link href="/itinerary-3-day" className="text-blue-600 hover:underline">3-day itinerary</Link> for details.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <strong className="text-gray-900">When is the best time to visit?</strong>
                <p className="text-gray-700 text-sm mt-2">
                  June-August for best weather (peak season). April-May and September-November for
                  great weather with fewer crowds and better prices. See our <Link href="/about" className="text-blue-600 hover:underline">About page</Link> for seasonal details.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <strong className="text-gray-900">Should I stay on the mainland or an island?</strong>
                <p className="text-gray-700 text-sm mt-2">
                  Mainland (Airlie Beach) is better for budget and variety. Islands are better for
                  luxury and seclusion. Many do both! See <Link href="/where-to-stay" className="text-blue-600 hover:underline">Where to Stay</Link> for a detailed comparison.
                </p>
              </div>
            </div>
          </div>

          {/* Business Inquiries */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Business & Partnership Inquiries
            </h3>
            <p className="text-gray-700 text-center mb-6">
              I'm open to collaborations with tourism businesses, tour operators, accommodation
              providers, and travel brands that align with the Whitsundays experience.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Interested In:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ Featured listings and reviews</li>
                  <li>✓ Sponsored content opportunities</li>
                  <li>✓ Affiliate partnerships</li>
                  <li>✓ Content collaboration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">What I Offer:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>✓ Genuine local expertise</li>
                  <li>✓ Growing audience of Whitsundays visitors</li>
                  <li>✓ High-quality, detailed content</li>
                  <li>✓ Professional web development skills</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <a
                href="mailto:info@discoverwhitsundays.com?subject=Partnership Inquiry"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Email for Partnerships
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Plan Your Whitsundays Adventure?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            While you're here, explore our comprehensive guides to start planning your trip
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/itinerary-3-day"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
            >
              View 3-Day Itinerary
            </Link>
            <Link
              href="/where-to-stay"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors"
            >
              Where to Stay
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}