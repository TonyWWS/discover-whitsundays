import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// SEO Metadata
export const metadata = {
  title: 'Whitsundays Local Guide | Plan Your Perfect Island Getaway',
  description: 'Resident-led guide to the Whitsundays. Insider tips on Whitehaven Beach, Great Barrier Reef tours, and Airlie Beach accommodation from someone who lives here.',
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/images/home-hero.jpg"
          alt="Whitsundays tropical paradise with pristine beaches and turquoise waters"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-ocean/50 to-coral/40"></div>

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
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/Whitehaven.jpg"
                  alt="Whitehaven Beach with pristine white silica sand and turquoise waters"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
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
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=1200"
                  alt="Aerial view of tropical islands in the Whitsundays"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
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
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/Things-to-do.jpg"
                  alt="Marina at sunset with sailing boats in the Whitsundays"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
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
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200"
                  alt="Beach festival and events in the Whitsundays"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
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
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200"
                  alt="Planning your Whitsundays itinerary and vacation"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
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
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/accom-hero.jpg"
                  alt="Luxury waterfront accommodation in the Whitsundays"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
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
