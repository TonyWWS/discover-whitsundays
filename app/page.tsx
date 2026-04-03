import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Discover Whitsundays | A local\'s guide',
  description: 'Honest, curated travel guidance for the Whitsunday Islands from an Airlie Beach local.',
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/images/home-hero.jpg"
          alt="Aerial view of the Whitsunday Islands and Great Barrier Reef"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/70 via-[#1A2E35]/50 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Discover Whitsundays
          </h1>
          <p className="font-heading text-2xl text-white/90 drop-shadow-lg font-light max-w-2xl mx-auto">
            A curated guide to the Whitsunday Islands — local insight, honest recommendations.
          </p>
        </div>
      </div>

      {/* Local Voice Intro Strip */}
      <div className="bg-[#F5F0E8] py-10 border-b border-[#0B6E72]/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="font-body text-[#1A2E35]/80 text-lg leading-relaxed">
            I'm Tony. Like many before me, I visited Airlie Beach for a holiday and never left — that was seven years ago. I've picked up a few things about the Whitsundays in that time, and it felt like time to share them. Because if you've made it this far, you deserve to get the best out of it.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl font-bold text-center text-[#1A2E35] mb-4">
            Explore the Whitsundays
          </h2>
          <p className="font-body text-center text-[#6B7C80] mb-12 text-lg max-w-2xl mx-auto">
            Fewer recommendations, covered properly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Whitehaven Beach Card */}
            <Link href="/whitehaven-beach" className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/Whitehaven.jpg"
                  alt="Whitehaven Beach white silica sand and Hill Inlet"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-[#0B6E72] text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit text-sm">
                    MUST-SEE
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-[#E07B39] transition-colors">
                    Whitehaven Beach
                  </h3>
                  <p className="font-body text-base opacity-90">
                    If you can only see one thing while you're here, it has to be this.
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
                  <div className="bg-[#0B6E72] text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit text-sm">
                    74 ISLANDS
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-[#E07B39] transition-colors">
                    The Islands
                  </h3>
                  <p className="font-body text-base opacity-90">
                    Mostly untouched national park. But there's an island to suit your vibe — find it here.
                  </p>
                </div>
              </div>
            </Link>

            {/* Things to Do Card */}
            <Link href="/things-to-do" className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/Things-to-do.jpg"
                  alt="Sailing boats at sunset in the Whitsundays"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-[#0B6E72] text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit text-sm">
                    ADVENTURES
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-[#E07B39] transition-colors">
                    Things to Do
                  </h3>
                  <p className="font-body text-base opacity-90">
                    The Whitsundays is a playground for all things aquatic — and a few things that aren't. Here's what to book and what to skip.
                  </p>
                </div>
              </div>
            </Link>

            {/* What's On Card */}
            <Link href="/whats-on" className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200"
                  alt="Events and festivals in the Whitsundays"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-[#E07B39] text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit text-sm">
                    EVENTS
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-[#E07B39] transition-colors">
                    What's On
                  </h3>
                  <p className="font-body text-base opacity-90">
                    Local events and festivals in the Whitsundays.
                  </p>
                </div>
              </div>
            </Link>

            {/* Plan Your Trip Card */}
            <Link href="/itinerary-3-day" className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200"
                  alt="Planning a Whitsundays itinerary"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-[#E07B39] text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit text-sm">
                    ITINERARY
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-[#E07B39] transition-colors">
                    Plan Your Trip
                  </h3>
                  <p className="font-body text-base opacity-90">
                    Only have a long weekend? Here's what I'd see first.
                  </p>
                </div>
              </div>
            </Link>

            {/* Where to Stay Card */}
            <Link href="/where-to-stay" className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/accom-hero.jpg"
                  alt="Waterfront accommodation in the Whitsundays"
                  fill
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
                <div className="relative p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-[#E07B39] text-white px-3 py-1 rounded-lg font-heading font-bold inline-block mb-3 w-fit text-sm">
                    ACCOMMODATION
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-[#E07B39] transition-colors">
                    Where to Stay
                  </h3>
                  <p className="font-body text-base opacity-90">
                    Mainland or islands? Make your choice here.
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0B6E72] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl font-bold text-white mb-4">
            Only have time for the greatest hits?
          </h2>
          <p className="font-body text-xl text-white/80 mb-10">
            Here's how I'd do it.
          </p>
          <Link
            href="/itinerary-3-day"
            className="inline-block bg-[#E07B39] text-white px-10 py-4 rounded-xl font-heading font-bold text-lg hover:bg-[#1A2E35] transition-all duration-300 shadow-2xl"
          >
            Read the Itinerary
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}