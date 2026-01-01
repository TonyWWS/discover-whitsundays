import Link from 'next/link';
import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/home-hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-ocean/50 to-coral/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            Discover Whitsundays
          </h1>
          <p className="font-heading text-3xl text-white mb-8 drop-shadow-lg">
            Your Ultimate Guide to Paradise
          </p>
          <p className="font-body text-xl text-white drop-shadow-lg">
            Explore pristine beaches, island adventures, and tropical experiences
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl font-bold text-center text-navy mb-4">
            Explore the Whitsundays
          </h2>
          <p className="font-body text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Everything you need to plan the perfect tropical getaway
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Whitehaven Beach"
              description="Experience one of the world's most beautiful beaches with pristine white silica sand"
              image="/images/whitehaven.jpg"
              link="/whitehaven-beach"
              isImageUrl={true}
            />
            <FeatureCard
              title="The Islands"
              description="Discover 74 tropical islands, each with unique charm and experiences"
              image="🏝️"
              link="/islands"
            />
            <FeatureCard
              title="Things to Do"
              description="Sailing, diving, scenic flights, and endless island adventures"
              image="⛵"
              link="/things-to-do"
            />
            <FeatureCard
              title="What's On"
              description="Local events, festivals, and seasonal highlights in the Whitsundays"
              image="🎉"
              link="/whats-on"
            />
            <FeatureCard
              title="Plan Your Trip"
              description="Complete 3-day itinerary with tours, accommodation, and budget breakdown"
              image="📅"
              link="/itinerary-3-day"
            />
            <FeatureCard
              title="Where to Stay"
              description="From budget-friendly Airlie Beach to luxury island resorts"
              image="🏨"
              link="/where-to-stay"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-ocean py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl font-bold text-white mb-6">
            Ready to Plan Your Whitsundays Adventure?
          </h2>
          <p className="font-body text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Get insider tips, detailed itineraries, and exclusive recommendations from a local expert
          </p>
          <Link
            href="/itinerary-3-day"
            className="inline-block bg-white text-coral px-10 py-4 rounded-xl font-heading font-bold text-lg hover:bg-navy hover:text-white transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            Start Planning Now
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}