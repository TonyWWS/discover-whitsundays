import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// SEO Metadata
export const metadata = {
  title: 'Best Daydream Island Tours | Whitehaven Beach & Reef Trips',
  description: 'Top 5 tours departing from Daydream Island: Whitehaven Beach, Great Barrier Reef snorkeling, sailing adventures. Local expert recommendations with honest reviews.',
}

export default function DaydreamToursPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/daydream.jpg"
          alt="Daydream Island Resort and tours in the Whitsundays"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl text-white text-center">
            <h1 className="font-heading text-7xl font-bold mb-6 drop-shadow-2xl">
              Daydream Island Tours
            </h1>
            <p className="font-body text-2xl mb-4 leading-relaxed drop-shadow-lg">
              The best day trips and sailing adventures from Daydream Island
            </p>
            <p className="font-body text-lg opacity-90 drop-shadow-lg">
              Just 5km from the mainland, Daydream is the perfect base for exploring the Whitsundays
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-8 rounded-lg mb-12">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-4">
              🚤 Why Tour from Daydream Island?
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              Daydream Island's central location makes it an ideal departure point for Whitsundays tours. 
              You're already on the water, so you skip the ferry ride from Airlie Beach and get straight 
              to the adventure. Plus, as a resort guest, many tour operators offer special pick-ups directly 
              from the island jetty.
            </p>
            <p className="font-body text-gray-700 leading-relaxed">
              I've personally taken or researched every tour on this list. These are the operators I'd 
              recommend to friends visiting Daydream—reliable boats, experienced crew, and honest 
              value for money.
            </p>
          </div>

          {/* Tour 1: Full-Day Whitehaven Beach & Hill Inlet */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-teal-500">
            <div className="relative h-80">
              <Image
                src="/images/Whitehaven.jpg"
                alt="Whitehaven Beach pristine white silica sand"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-teal-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  MOST POPULAR
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  Whitehaven Beach Full-Day Sailing
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 7-8 hours</span>
                  <span>💰 $180-220 AUD</span>
                  <span>👥 Max 30 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                The classic Whitsundays experience—sail to the world-famous Whitehaven Beach, walk the 
                pristine silica sand, and hike to Hill Inlet lookout for those iconic swirling sand photos. 
                Includes snorkeling, lunch, and plenty of time to explore the 7km beach.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 3+ hours at Whitehaven Beach</li>
                    <li>• Hill Inlet lookout walk (best at low tide)</li>
                    <li>• Snorkeling at fringing reef</li>
                    <li>• BBQ lunch on board</li>
                    <li>• Small group sailing experience</li>
                    <li>• Morning tea and afternoon snacks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 8:30am, returns 4:30pm</li>
                    <li>• Pick-up from Daydream jetty</li>
                    <li>• Snorkel gear included</li>
                    <li>• BYO alcohol permitted</li>
                    <li>• Suitable for all ages</li>
                    <li>• Stinger suits provided (Nov-May)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Book tours that depart early to beat the crowds at Hill Inlet. The lookout walk is 
                  easiest at low tide when the sand patterns are most dramatic. Check tide times before 
                  booking—operators usually time it perfectly.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://sailing-whitsundays.com/tours/departing-daydream-island"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-teal-500 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-teal-600 transition-colors"
                >
                  Check Availability ↗
                </Link>
                <Link
                  href="/whitehaven-beach"
                  className="flex-1 border-2 border-teal-500 text-teal-500 py-3 rounded-xl font-heading font-bold text-center hover:bg-teal-50 transition-colors"
                >
                  Whitehaven Beach Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 2: Great Barrier Reef Snorkeling */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-blue-600">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200"
                alt="Great Barrier Reef snorkeling and coral"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  BEST SNORKELING
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  Outer Reef Snorkel Adventure
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 6-7 hours</span>
                  <span>💰 $190-240 AUD</span>
                  <span>👥 Max 35 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Venture to the outer Great Barrier Reef for world-class snorkeling. Visit 2-3 pristine 
                reef sites teeming with tropical fish, sea turtles, and vibrant coral gardens. This is 
                the real reef experience—far from crowds, with crystal-clear water and incredible visibility.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 2-3 snorkel locations on outer reef</li>
                    <li>• Guided snorkel tours with marine biologist</li>
                    <li>• High chance of seeing sea turtles</li>
                    <li>• Hot buffet lunch</li>
                    <li>• All snorkel equipment included</li>
                    <li>• Optional introductory dive ($80 extra)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 9:00am, returns 4:00pm</li>
                    <li>• Pick-up from Daydream jetty</li>
                    <li>• Prescription masks available</li>
                    <li>• Underwater camera rental ($50)</li>
                    <li>• Marine park fees included</li>
                    <li>• Wetsuit/stinger suit provided</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  June to September offers the best visibility (20-30m) and you might spot migrating 
                  humpback whales on the way to the reef. Book afternoon return times if you're prone 
                  to seasickness—mornings can be choppier.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.getyourguide.com/daydream-island-l128942/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-blue-700 transition-colors"
                >
                  Book This Tour ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 3: Half-Day Sailing & Snorkel */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-cyan-500">
            <div className="relative h-80">
              <Image
                src="/images/Things-to-do.jpg"
                alt="Sailing catamaran in the Whitsundays"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  BUDGET FRIENDLY
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  Morning Sail & Snorkel
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 4 hours</span>
                  <span>💰 $90-120 AUD</span>
                  <span>👥 Max 25 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Perfect for families or those short on time. Sail around the inner islands, stop at a 
                secluded bay for snorkeling, and return to Daydream by lunch. Great value and you still 
                get the sailing experience plus a snorkel stop at a beautiful reef.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Relaxed sailing through calm waters</li>
                    <li>• Snorkel at fringing reef</li>
                    <li>• Morning tea included</li>
                    <li>• Small group experience</li>
                    <li>• Back by lunchtime</li>
                    <li>• Suitable for young children</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 8:30am, returns 12:30pm</li>
                    <li>• Pick-up from Daydream jetty</li>
                    <li>• All equipment included</li>
                    <li>• Calm waters—great for beginners</li>
                    <li>• Often see dolphins</li>
                    <li>• Free time at Living Reef after</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  This is perfect if you're staying at Daydream and want to experience sailing without 
                  losing a whole day. You'll be back in time for lunch at the resort and afternoon at 
                  the Living Reef or pool.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://sailing-whitsundays.com/tours/departing-daydream-island"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-cyan-500 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-cyan-600 transition-colors"
                >
                  Check Availability ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 4: Sunset Sailing */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-orange-500">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                alt="Sunset sailing in the Whitsundays"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  ROMANTIC
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  Sunset Cruise with Champagne
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 2.5 hours</span>
                  <span>💰 $120-150 AUD</span>
                  <span>👥 Max 20 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                There's nothing quite like watching the sun set over the Whitsundays from a sailing 
                catamaran. This adults-only cruise includes champagne, cheese platters, and the most 
                spectacular sunset views you'll ever see. Perfect for couples or a special celebration.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Sail through the islands at golden hour</li>
                    <li>• Complimentary champagne & wine</li>
                    <li>• Gourmet cheese & antipasto platter</li>
                    <li>• Adults-only (18+) experience</li>
                    <li>• Premium catamaran with comfortable seating</li>
                    <li>• Stunning photo opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 1 hour before sunset</li>
                    <li>• Pick-up from Daydream jetty</li>
                    <li>• Smart casual dress code</li>
                    <li>• Bring a light jacket (can get breezy)</li>
                    <li>• Camera essential!</li>
                    <li>• Popular—book in advance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  June through August offers the most reliable clear skies for sunset viewing. The 
                  captain usually anchors near the northern islands for the best unobstructed views. 
                  This is THE romantic experience in the Whitsundays.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.getyourguide.com/daydream-island-l128942/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-orange-600 transition-colors"
                >
                  Book This Experience ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 5: Island Hopping Adventure */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-green-600">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=1200"
                alt="Island hopping tour in the Whitsundays"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  ADVENTUROUS
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  3-Island Explorer Tour
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 7 hours</span>
                  <span>💰 $160-200 AUD</span>
                  <span>👥 Max 30 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Explore three different islands in one day—each with its own character and beauty. Visit 
                secluded beaches, snorkel at pristine reefs, and discover hidden bays that most tourists 
                never see. This is for those who want to experience the diversity of the Whitsundays.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Visit 3 uninhabited islands</li>
                    <li>• Multiple snorkel locations</li>
                    <li>• Beach walks and bushwalking</li>
                    <li>• BBQ lunch on a private beach</li>
                    <li>• Small group with local guide</li>
                    <li>• Learn about island ecology & history</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 8:00am, returns 3:00pm</li>
                    <li>• Pick-up from Daydream jetty</li>
                    <li>• Moderate fitness required for walks</li>
                    <li>• All equipment & lunch included</li>
                    <li>• Chance to see wildlife</li>
                    <li>• Sun protection essential</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  This tour often includes Hook Island (Maureen's Cove for snorkeling), South Molle Island 
                  (bushwalk to viewpoint), and Langford Island (tiny sand cay). You'll see sides of the 
                  Whitsundays that day-trippers to Whitehaven miss entirely.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://sailing-whitsundays.com/tours/departing-daydream-island"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-green-700 transition-colors"
                >
                  Check Availability ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Booking Tips Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl mb-16 border-l-4 border-orange-500">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-6">
              💡 Booking Tips for Daydream Island Tours
            </h2>
            <div className="space-y-4 font-body text-gray-700">
              <div>
                <strong className="font-heading text-gray-800">Book in Advance:</strong> Tours from 
                Daydream fill up quickly, especially June-September (peak season). Book at least 2-3 days 
                ahead, or longer during school holidays.
              </div>
              <div>
                <strong className="font-heading text-gray-800">Check Weather:</strong> Tours run in most 
                conditions, but heavy rain or strong winds can affect snorkel visibility. Check forecasts 
                and ask operators about conditions.
              </div>
              <div>
                <strong className="font-heading text-gray-800">Resort Packages:</strong> If you're staying 
                at Daydream Resort, ask about bundled tour packages—you can often save 10-15% by booking 
                through the resort concierge.
              </div>
              <div>
                <strong className="font-heading text-gray-800">Jetty Pick-ups:</strong> All tours listed 
                here pick up directly from Daydream Island jetty. Confirm pick-up times the day before and 
                arrive 10 minutes early.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Explore the Whitsundays?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Daydream Island is your gateway to paradise. Book your perfect adventure today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/islands"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Explore More Islands
            </Link>
            <Link
              href="/where-to-stay"
              className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-cyan-600 transition-all duration-300 shadow-xl"
            >
              Find Accommodation
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
