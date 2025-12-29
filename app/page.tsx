import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/discover-whitsunday-hero1.jpg')",
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Discover Whitsundays
          </h1>
          <p className="text-2xl text-white mb-8 drop-shadow-lg">
            Your Ultimate Guide to Paradise
          </p>
          <p className="text-lg text-white/90 drop-shadow-lg">
            Explore pristine beaches, island adventures, and tropical experiences
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Explore the Whitsundays
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Whitehaven Beach"
              description="Experience one of the world's most beautiful beaches with pristine white silica sand"
              image="🏖️"
              link="/whitehaven-beach"
            />
            <FeatureCard
              title="Island Hopping"
              description="Discover 74 tropical islands, each with unique charm and experiences"
              image="🏝️"
              link="/islands"
            />
            <FeatureCard
              title="Sailing Adventures"
              description="Sail through crystal clear waters on luxury yachts or traditional vessels"
              image="⛵"
            />
            <FeatureCard
              title="Snorkeling & Diving"
              description="Explore the Great Barrier Reef's incredible marine life and coral gardens"
              image="🤿"
            />
            <FeatureCard
              title="Scenic Flights"
              description="Take in breathtaking aerial views of Heart Reef and the islands"
              image="🚁"
            />
            <FeatureCard
              title="Luxury Resorts"
              description="Stay at world-class resorts with stunning views and premium amenities"
              image="🏨"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Plan Your Whitsundays Adventure?
          </h2>
          <p className="text-xl text-white mb-8">
            Get insider tips, itineraries, and exclusive recommendations
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
            Start Planning Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}