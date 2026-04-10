import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// SEO Metadata
export const metadata = {
  title: 'Best Hamilton Island Tours & Activities | Reef, Sailing & Flights',
  description: 'Top 8 tours from Hamilton Island: Whitehaven Beach, Great Barrier Reef diving, scenic flights, sunset sails. Complete guide from a Whitsundays local.',
}

export default function HamiltonToursPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/hamilton-island-marina.jpg"
          alt="Hamilton Island marina with sailing tours and activities"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl text-white text-center">
            <h1 className="font-heading text-7xl font-bold mb-6 drop-shadow-2xl">
              Hamilton Island Tours
            </h1>
            <p className="font-body text-2xl mb-4 leading-relaxed drop-shadow-lg">
              The ultimate departure point for Whitsundays adventures
            </p>
            <p className="font-body text-lg opacity-90 drop-shadow-lg">
              From reef diving to scenic flights—explore the best tours from Australia's premier island resort
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-8 rounded-lg mb-12">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-4">
              ✈️ Why Hamilton Island is the Best Tour Base
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              With its own commercial airport and marina, Hamilton Island is the gateway to the Whitsundays. 
              You have access to more tour operators, more departure times, and more variety than anywhere 
              else in the region. Whether you want to dive the Great Barrier Reef, see Whitehaven from the 
              air, or sail into the sunset, it all starts here.
            </p>
            <p className="font-body text-gray-700 leading-relaxed">
              As a local, I've personally vetted every tour on this list. These are the operators I trust—
              professional crews, well-maintained vessels, and honest value. No tourist traps, just genuine 
              Whitsundays experiences.
            </p>
          </div>

          {/* Tour 1: Whitehaven Beach Full-Day */}
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
                  Whitehaven Beach Full-Day Cruise
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 8 hours</span>
                  <span>💰 $200-250 AUD</span>
                  <span>👥 Max 40 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                The classic Whitsundays experience—cruise to world-famous Whitehaven Beach, walk the 7km of 
                pure silica sand, hike to Hill Inlet lookout for those Instagram-worthy swirling sand photos, 
                and snorkel the fringing reef. This is THE must-do tour in the Whitsundays.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 4+ hours at Whitehaven Beach</li>
                    <li>• Hill Inlet lookout walk (1km return)</li>
                    <li>• Guided snorkel session at fringing reef</li>
                    <li>• Hot buffet lunch on board</li>
                    <li>• Modern air-conditioned vessel</li>
                    <li>• Morning tea and afternoon snacks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs Hamilton Marina 8:00am</li>
                    <li>• Returns 4:00pm</li>
                    <li>• All snorkel equipment included</li>
                    <li>• Stinger suits provided (Nov-May)</li>
                    <li>• Suitable for all ages and abilities</li>
                    <li>• Wheelchair accessible vessel</li>
                  </ul>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  The Hill Inlet lookout walk is moderate fitness—if you have mobility issues, you can skip 
                  it and spend more time on the beach instead. The best photos happen at low tide when the 
                  sand patterns are most dramatic. Operators time the visit perfectly.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.getyourguide.com/hamilton-island-l3219/"
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
                  Beach Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 2: Whitehaven Half-Day */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-cyan-500">
            <div className="relative h-80">
              <Image
                src="/images/whitehaven-tree.jpg"
                alt="Whitehaven Beach with iconic tree silhouette"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  QUICK ESCAPE
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  Whitehaven Express Half-Day
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 4 hours</span>
                  <span>💰 $130-160 AUD</span>
                  <span>👥 Max 35 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Short on time but don't want to miss Whitehaven? This express tour gets you there fast on 
                a high-speed vessel, gives you 2-3 hours on the beach, and returns you to Hamilton by lunch. 
                Perfect for cruise ship passengers or those with tight schedules.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Fast transfer to Whitehaven (30 mins)</li>
                    <li>• 2-3 hours beach time</li>
                    <li>• Morning tea included</li>
                    <li>• Small group experience</li>
                    <li>• Walk to Hill Inlet (optional)</li>
                    <li>• Beach towels provided</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 8:00am OR 12:00pm</li>
                    <li>• Returns 12:00pm OR 4:00pm</li>
                    <li>• Afternoon tour often less crowded</li>
                    <li>• No snorkeling on this tour</li>
                    <li>• Great for cruise passengers</li>
                    <li>• Photography focused</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  The afternoon departure (12pm-4pm) is ideal if you want Whitehaven almost to yourself. 
                  Most tours leave in the morning, so afternoon visitors often have the northern end of the 
                  beach virtually deserted.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.getyourguide.com/hamilton-island-l3219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-cyan-500 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-cyan-600 transition-colors"
                >
                  Book This Tour ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 3: Great Barrier Reef Dive & Snorkel */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-blue-600">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200"
                alt="Scuba diving on the Great Barrier Reef"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  BUCKET LIST
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  Outer Reef Dive & Snorkel
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 8 hours</span>
                  <span>💰 $220-280 AUD</span>
                  <span>👥 Max 50 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Dive or snorkel the Great Barrier Reef—one of the seven natural wonders of the world. Visit 
                Hardy Reef's pontoon platform with underwater observatory, multiple snorkel sites, and 
                certified scuba diving opportunities. This is THE ultimate Great Barrier Reef experience.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Hardy Reef pontoon platform</li>
                    <li>• 3-4 hours at reef sites</li>
                    <li>• Certified scuba diving ($120 extra)</li>
                    <li>• Intro dive available ($150 extra)</li>
                    <li>• Underwater observatory</li>
                    <li>• Semi-submersible tours</li>
                    <li>• Hot buffet lunch</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 8:00am, returns 4:30pm</li>
                    <li>• High-speed catamaran</li>
                    <li>• All snorkel gear included</li>
                    <li>• Wetsuit hire ($15)</li>
                    <li>• Marine biologist on board</li>
                    <li>• Underwater camera rental ($60)</li>
                    <li>• Marine park fees included</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  If you've never dived before, book the introductory dive in advance—spots fill up fast. 
                  June-September offers the best visibility (20-30m) and you might see humpback whales on 
                  the journey. Take seasickness tablets if prone—it's a 90-minute trip to the outer reef.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.getyourguide.com/hamilton-island-l3219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-blue-700 transition-colors"
                >
                  Book Reef Adventure ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 4: Reef Snorkel Day Trip */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-indigo-600">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200"
                alt="Snorkeling with sea turtles on the reef"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  SNORKEL FOCUS
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  Fringing Reef Snorkel Safari
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 5 hours</span>
                  <span>💰 $140-180 AUD</span>
                  <span>👥 Max 25 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Explore the inner fringing reefs around the Whitsunday Islands—less travel time means more 
                snorkel time. Visit 3 different reef sites including Blue Pearl Bay and Maureen's Cove, both 
                known for incredible coral gardens and abundant marine life. High chance of seeing sea turtles!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 3 premium snorkel locations</li>
                    <li>• Blue Pearl Bay & Maureen's Cove</li>
                    <li>• Guided snorkel tours</li>
                    <li>• Sea turtle encounters common</li>
                    <li>• Light lunch & refreshments</li>
                    <li>• Small group—max 25 people</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 9:00am, returns 2:00pm</li>
                    <li>• Less travel time = more snorkeling</li>
                    <li>• All equipment included</li>
                    <li>• Beginner-friendly calm waters</li>
                    <li>• Better for seasick-prone guests</li>
                    <li>• Prescription masks available</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  This tour is perfect if you get seasick or have young kids—the fringing reefs are in 
                  protected waters, so it's much calmer than outer reef trips. The coral diversity is 
                  actually better than some outer reef sites, and you're more likely to see turtles.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.getyourguide.com/hamilton-island-l3219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-indigo-700 transition-colors"
                >
                  Book Snorkel Tour ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 5: Scenic Helicopter Flight */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-purple-600">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200"
                alt="Helicopter scenic flight over Whitsundays and Heart Reef"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  ONCE-IN-A-LIFETIME
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  Heart Reef Helicopter Tour
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 60 mins</span>
                  <span>💰 $350-450 AUD</span>
                  <span>👥 Max 6 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                See the Whitsundays from above—the ONLY way to truly appreciate the scale and beauty. Fly 
                over Whitehaven Beach's swirling sands, the turquoise waters of Hill Inlet, and the iconic 
                Heart Reef. This 60-minute flight is the ultimate Whitsundays photography experience.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Fly over Heart Reef (natural wonder)</li>
                    <li>• Aerial views of Whitehaven Beach</li>
                    <li>• Hill Inlet's swirling sand patterns</li>
                    <li>• All 74 Whitsunday Islands</li>
                    <li>• Great Barrier Reef from above</li>
                    <li>• Window seat guaranteed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Multiple departures daily</li>
                    <li>• Departs Hamilton Island Airport</li>
                    <li>• Weight restrictions apply</li>
                    <li>• Doors-off option available</li>
                    <li>• Weather dependent</li>
                    <li>• GoPro rental available</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Early morning flights (7-9am) offer the best light and calmest conditions. Heart Reef is 
                  protected—you can't snorkel or dive there, so aerial viewing is the ONLY way to see it. 
                  This is expensive but worth every dollar for the photos alone. Book 2-3 days ahead.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.getyourguide.com/hamilton-island-l3219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-purple-700 transition-colors"
                >
                  Book Helicopter Tour ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 6: Sunset Sailing */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-orange-500">
            <div className="relative h-80">
              <Image
                src="/images/Things-to-do.jpg"
                alt="Sunset sailing cruise in the Whitsundays"
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
                  Champagne Sunset Sail
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 3 hours</span>
                  <span>💰 $140-180 AUD</span>
                  <span>👥 Max 20 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Watch the sun set over the Whitsunday Islands from the deck of a luxury sailing catamaran. 
                Sip champagne, enjoy gourmet canapés, and sail through the calm evening waters as the sky 
                turns orange and pink. The most romantic experience in the Whitsundays.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Sail at golden hour</li>
                    <li>• Premium champagne & wine</li>
                    <li>• Gourmet canapés & cheese boards</li>
                    <li>• Adults-only (18+)</li>
                    <li>• Luxurious catamaran</li>
                    <li>• Professional photographer on board</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 1.5 hours before sunset</li>
                    <li>• Timing varies by season</li>
                    <li>• Smart casual dress code</li>
                    <li>• Bring warm jacket (sea breeze)</li>
                    <li>• Popular—book well in advance</li>
                    <li>• Perfect for proposals!</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Winter months (June-August) offer the most reliable clear skies for spectacular sunsets. 
                  The captain usually anchors near Dent Island for unobstructed views. Bring your camera—
                  the lighting during golden hour is incredible for photos.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.getyourguide.com/hamilton-island-l3219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-orange-600 transition-colors"
                >
                  Book Sunset Sail ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 7: 2-Day/2-Night Sailing Adventure */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-green-600">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200"
                alt="Overnight sailing adventure in the Whitsundays"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  ULTIMATE ADVENTURE
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  2D/2N Sailing Expedition
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ 2 days</span>
                  <span>💰 $450-600 AUD</span>
                  <span>👥 Max 26 guests</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                The ultimate Whitsundays experience—sleep under the stars on a sailing vessel, wake up at 
                Whitehaven Beach, snorkel multiple reef sites, and explore hidden bays. This 2-day adventure 
                covers more ground than any day trip and lets you experience the islands like a true sailor.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Highlights:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Whitehaven Beach at sunrise (crowd-free)</li>
                    <li>• Hill Inlet lookout</li>
                    <li>• 3+ snorkel locations</li>
                    <li>• Sleep on deck under stars</li>
                    <li>• All meals & snacks included</li>
                    <li>• Paddle boarding & water sports</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Departs 2:00pm Day 1</li>
                    <li>• Returns 3:00pm Day 3</li>
                    <li>• Shared cabin accommodation</li>
                    <li>• BYO alcohol permitted</li>
                    <li>• Ages 18+ (some tours 12+)</li>
                    <li>• Limited luggage space</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  This is the best way to experience the Whitsundays—waking up at Whitehaven before the day 
                  tours arrive is magical. Pack light (soft bags only), bring reef-safe sunscreen, and 
                  prepare for an adventure. Most vessels have charging points but no Wi-Fi (digital detox!).
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.getyourguide.com/hamilton-island-l3219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-green-700 transition-colors"
                >
                  Book Sailing Adventure ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Tour 8: Hamilton Island Activity Pass */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-pink-500">
            <div className="relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200"
                alt="Hamilton Island resort activities and facilities"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75"></div>
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="bg-pink-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2 w-fit">
                  ISLAND ACTIVITIES
                </div>
                <h3 className="font-heading text-5xl font-bold text-white mb-2">
                  Island Explorer Pass
                </h3>
                <div className="flex gap-4 text-white font-body text-sm">
                  <span>⏱️ Full day</span>
                  <span>💰 $120-150 AUD</span>
                  <span>👥 Individual</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Not every day needs to be on a boat! This all-inclusive activity pass lets you explore 
                Hamilton Island itself—wildlife encounters with koalas, water sports at Catseye Beach, 
                golf buggy tours, and access to premium facilities. Perfect for a relaxation day between 
                big adventures.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ Activities Included:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Wildlife Hamilton Island (koalas, kangaroos)</li>
                    <li>• Non-motorized water sports</li>
                    <li>• Golf buggy hire (2 hours)</li>
                    <li>• Gym & spa access</li>
                    <li>• Catseye Beach facilities</li>
                    <li>• Tennis courts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📋 Good to Know:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Valid for 24 hours</li>
                    <li>• Purchase at resort reception</li>
                    <li>• Great for families</li>
                    <li>• Koala holding extra ($20)</li>
                    <li>• Restaurant discounts included</li>
                    <li>• Can be added to room charge</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Hamilton Island operates on "island time"—everything is walkable or accessible by golf 
                  buggy (cars aren't allowed on the island). The sunset from One Tree Hill is spectacular 
                  and free. Wildlife Hamilton Island opens at 9am—go early to avoid crowds.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.hamiltonisland.com.au/things-to-do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-pink-500 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-pink-600 transition-colors"
                >
                  View Island Activities ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Booking Tips Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl mb-16 border-l-4 border-orange-500">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-6">
              💡 Hamilton Island Booking Tips
            </h2>
            <div className="space-y-4 font-body text-gray-700">
              <div>
                <strong className="font-heading text-gray-800">Book Early (Especially Peak Season):</strong> June 
                to September is peak season. Tours sell out weeks in advance. Book major tours (Whitehaven, 
                Reef, Helicopters) before you arrive. Shoulder season (April-May, October-November) offers 
                better availability and often better weather.
              </div>
              <div>
                <strong className="font-heading text-gray-800">Multi-Day Packages Save Money:</strong> If staying 
                3+ nights, look for package deals that bundle accommodation with tours. Hamilton Island Resort 
                packages can save 15-20% compared to booking separately.
              </div>
              <div>
                <strong className="font-heading text-gray-800">Weather Considerations:</strong> Tours run in most 
                conditions, but heavy rain affects visibility for scenic flights and snorkeling. Check forecasts 
                and consider travel insurance if visiting during cyclone season (Dec-March).
              </div>
              <div>
                <strong className="font-heading text-gray-800">Marina Pick-ups:</strong> All tours depart from 
                Hamilton Island Marina (5-minute buggy ride from most accommodations). Arrive 15 minutes before 
                departure. Resort guests can charge tours to room.
              </div>
              <div>
                <strong className="font-heading text-gray-800">Tour Sequencing:</strong> Do Whitehaven first 
                (it's THE must-do), then reef/snorkel tours, then scenic flights if budget allows. Save sunset 
                sails and island activities for your last days when you're more relaxed.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready for Your Hamilton Island Adventure?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From world-class diving to scenic flights—Hamilton Island offers the most diverse range of 
            experiences in the Whitsundays
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/islands"
              className="bg-white text-orange-500 px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Explore More Islands
            </Link>
            <Link
              href="https://www.hamiltonisland.com.au/accommodation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl"
            >
              Book Accommodation ↗
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
