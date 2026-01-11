import Link from 'next/link';
import Navbar from './components/Navbar';
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
            
            {/* Whitehaven Beach Card */}
            <Link href="/whitehaven-beach" className="group">
              <div className="relative h-80 bg-cover bg-center rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/Whitehaven.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-blue-900/50 to-gray-900/80"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-coral/90 text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit">
                    MUST-SEE
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-coral transition-colors">
                    Whitehaven Beach
                  </h3>
                  <p className="font-body text-lg opacity-90">
                    Experience one of the world's most beautiful beaches with pristine white silica sand
                  </p>
                </div>
              </div>
            </Link>

            {/* The Islands Card */}
            <Link href="/islands" className="group">
              <div className="relative h-80 bg-cover bg-center rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=1200')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-teal-900/40 via-ocean/50 to-gray-900/80"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-teal-500/90 text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit">
                    74 ISLANDS
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-teal-300 transition-colors">
                    The Islands
                  </h3>
                  <p className="font-body text-lg opacity-90">
                    Discover 74 tropical islands, each with unique charm and experiences
                  </p>
                </div>
              </div>
            </Link>

            {/* Things to Do Card */}
            <Link href="/things-to-do" className="group">
              <div className="relative h-80 bg-cover bg-center rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-ocean/50 to-gray-900/80"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-blue-500/90 text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit">
                    ADVENTURES
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                    Things to Do
                  </h3>
                  <p className="font-body text-lg opacity-90">
                    Sailing, diving, scenic flights, and endless island adventures
                  </p>
                </div>
              </div>
            </Link>

            {/* What's On Card */}
            <Link href="/whats-on" className="group">
              <div className="relative h-80 bg-cover bg-center rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-pink-900/50 to-gray-900/80"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-pink-500/90 text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit">
                    EVENTS
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-pink-300 transition-colors">
                    What's On
                  </h3>
                  <p className="font-body text-lg opacity-90">
                    Local events, festivals, and seasonal highlights in the Whitsundays
                  </p>
                </div>
              </div>
            </Link>

            {/* Plan Your Trip Card */}
            <Link href="/itinerary-3-day" className="group">
              <div className="relative h-80 bg-cover bg-center rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-blue-900/50 to-gray-900/80"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-indigo-500/90 text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit">
                    ITINERARY
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
                    Plan Your Trip
                  </h3>
                  <p className="font-body text-lg opacity-90">
                    Complete 3-day itinerary with tours, accommodation, and budget breakdown
                  </p>
                </div>
              </div>
            </Link>

            {/* Where to Stay Card */}
            <Link href="/where-to-stay" className="group">
              <div className="relative h-80 bg-cover bg-center rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/accom-hero.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 via-amber-900/50 to-gray-900/80"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-orange-500/90 text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit">
                    ACCOMMODATION
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                    Where to Stay
                  </h3>
                  <p className="font-body text-lg opacity-90">
                    From budget-friendly Airlie Beach to luxury island resorts
                  </p>
                </div>
              </div>
            </Link>

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
