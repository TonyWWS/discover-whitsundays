import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function WhitehavenBeachToursPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-800 to-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading text-6xl font-bold mb-4">
              Best Whitehaven Beach Tours
            </h1>
            <p className="font-heading text-2xl mb-6">
              Curated recommendations from a local expert
            </p>
            <p className="font-body text-lg opacity-90">
              I've researched dozens of Whitehaven Beach tours. Rather than overwhelm you with every option,
              I've hand-picked these 5 tours to cover different budgets, styles, and preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-8 rounded-lg mb-12">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-4">
              Why These 5 Tours?
            </h2>
            <p className="font-body text-gray-700 leading-relaxed">
              As an Airlie Beach local, I've researched dozens of Whitehaven Beach tours. Rather than
              overwhelm you with every option, I've hand-picked these 5 tours to cover different budgets,
              styles, and preferences. Each represents the best value in its category, with reliable
              operators and consistently great reviews.
            </p>
          </div>

          {/* Quick Comparison Table */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
              Quick Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="font-heading p-4 text-left">Tour</th>
                    <th className="font-heading p-4 text-left">Price</th>
                    <th className="font-heading p-4 text-left">Duration</th>
                    <th className="font-heading p-4 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody className="font-body">
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-gray-900">Ocean Rafting</td>
                    <td className="p-4 text-gray-800">$199-219</td>
                    <td className="p-4 text-gray-800">7 hours</td>
                    <td className="p-4 text-gray-800">Snorkelers, adventure</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Chill & Grill</td>
                    <td className="p-4 text-gray-800">$255-279</td>
                    <td className="p-4 text-gray-800">Full day</td>
                    <td className="p-4 text-gray-800">Beach lovers, families</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-gray-900">Half-Day Express</td>
                    <td className="p-4 text-gray-800">$139-159</td>
                    <td className="p-4 text-gray-800">5-6 hours</td>
                    <td className="p-4 text-gray-800">Time-limited, budget</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Whitehaven Xpress</td>
                    <td className="p-4 text-gray-800">$189-209</td>
                    <td className="p-4 text-gray-800">8.5 hours</td>
                    <td className="p-4 text-gray-800">Best value, families</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900">Helicopter + Beach</td>
                    <td className="p-4 text-gray-800">$450-550</td>
                    <td className="p-4 text-gray-800">3 hours</td>
                    <td className="p-4 text-gray-800">Special occasions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tour 1: Ocean Rafting Northern Exposure */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-orange-500">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-gray-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    ADVENTURE CHAMPION
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Ocean Rafting Northern Exposure</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-orange-500 mb-2">$199-219</div>
                  <div className="font-body text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-gray-800">7 Hours</div>
                  <div className="font-body text-gray-600">8:45am - 3:30pm</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Multi-award winning Ocean Rafting is the ONLY operator with special permits to access all areas
                of Hill Inlet—including cruising through the famous swirling sands. Their semi-rigid inflatable boats
                (originally designed as rescue crafts) reach speeds up to 35 knots, giving you an exhilarating ride
                plus maximum snorkeling time at two different pristine reef locations.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 2 premium snorkel sites (Hook Island)</li>
                    <li>• Exclusive Hill Inlet beach access</li>
                    <li>• Guided Hill Inlet lookout walk</li>
                    <li>• North Whitehaven Beach time</li>
                    <li>• All snorkel gear provided</li>
                    <li>• Afternoon tea and refreshments</li>
                    <li>• Hotel pickup from Airlie Beach</li>
                    <li>• Max 32 passengers (small groups)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Snorkel enthusiasts</li>
                    <li>• Adventure seekers</li>
                    <li>• Photographers (best Hill Inlet access)</li>
                    <li>• Active travelers</li>
                    <li>• Those wanting the thrill factor</li>
                    <li>• Ages 6 months to seniors</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Ocean Rafting is the ONLY tour that can cruise through Hill Inlet's swirling sands—not just view
                  them from the lookout. This unique access makes for incredible photos and a one-of-a-kind experience.
                  The high-speed ride is thrilling but stable—even families with young kids love it.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">⭐ Why This Tour Stands Out:</h4>
                <ul className="font-body text-gray-700 text-sm space-y-2">
                  <li>• 30+ years operating (most awarded Whitsundays operator)</li>
                  <li>• Eco-certified Advanced status</li>
                  <li>• TWO snorkel locations vs one for most tours</li>
                  <li>• Smaller groups (32 max vs 80+ on big boats)</li>
                  <li>• 4.8/5 stars from 1000+ TripAdvisor reviews</li>
                </ul>
              </div>

              <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Tour 2: Cruise Whitsundays Chill & Grill */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-blue-600">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-blue-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    MOST BEACH TIME
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Whitehaven Beach Chill & Grill</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-blue-600 mb-2">$255-279</div>
                  <div className="font-body text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-gray-800">Full Day</div>
                  <div className="font-body text-gray-600">7:15am - 2:30pm</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Cruise Whitsundays' "Chill & Grill" offers MORE time at Whitehaven Beach than any other day tour
                (4-5 hours total). You'll visit both the northern AND southern ends of the beach, enjoy a full Aussie
                BBQ lunch served right on the sand, and take a guided walk to the famous Hill Inlet lookout. This is
                the most relaxed, unhurried way to experience Whitehaven.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 4-5 hours total at Whitehaven Beach</li>
                    <li>• Visit BOTH North & South beach</li>
                    <li>• Full Aussie BBQ lunch on the beach</li>
                    <li>• Guided Hill Inlet lookout walk</li>
                    <li>• Beach games and activities</li>
                    <li>• Stinger suits (seasonal)</li>
                    <li>• Comfortable air-conditioned catamaran</li>
                    <li>• Optional snorkeling (time permitting)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Beach lovers wanting max beach time</li>
                    <li>• Families with children</li>
                    <li>• Those who prefer relaxation over adventure</li>
                    <li>• Photography enthusiasts (more time = better photos)</li>
                    <li>• People wanting a full day without rush</li>
                    <li>• Couples seeking a leisurely pace</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">⭐ Why I Recommend This:</h4>
                <p className="font-body text-gray-700 text-sm">
                  If you've come all this way to see Whitehaven Beach, why rush? This tour gives you the TIME to
                  truly experience it—walk the entire 7km stretch, swim in multiple spots, play beach cricket, find
                  the perfect photo angle. The BBQ lunch on the beach (not back on the boat) is a highlight everyone
                  loves. Best overall experience for the money.
                </p>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Tour 3: Half-Day Express */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-yellow-500">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-gray-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    BUDGET CHAMPION
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Half-Day Whitehaven Beach Cruise</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-yellow-600 mb-2">$139-159</div>
                  <div className="font-body text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-gray-800">Half Day</div>
                  <div className="font-body text-gray-600">Morning or afternoon</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Short on time or budget? Cruise Whitsundays' half-day option gets you to Whitehaven Beach and back
                in 5-6 hours. You'll spend about 2 hours on South Whitehaven Beach—enough time to swim, walk the sand,
                and appreciate why it's Australia's #1 beach. Perfect for cruise ship passengers or those combining
                multiple activities in one day.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 2 hours at South Whitehaven Beach</li>
                    <li>• Morning or afternoon tea</li>
                    <li>• Comfortable air-conditioned catamaran</li>
                    <li>• Scenic cruise through Whitsunday Passage</li>
                    <li>• Knowledgeable skipper commentary</li>
                    <li>• All ages welcome (infants free 0-3)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Cruise ship passengers (limited time)</li>
                    <li>• Budget-conscious travelers</li>
                    <li>• Those doing other activities same day</li>
                    <li>• Quick Whitehaven "tick-off"</li>
                    <li>• Families with very young children</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">⚠️ Honest Take:</h4>
                <p className="font-body text-gray-700 text-sm">
                  This tour does NOT visit Hill Inlet lookout (not enough time). You'll see Whitehaven Beach and have
                  a lovely 2 hours there, but if you have the time, I'd recommend the full-day tours instead. That said,
                  if it's this or nothing, absolutely do it—even 2 hours at Whitehaven is worth it, and $139 is the
                  cheapest way to get there.
                </p>
              </div>

              <button className="w-full bg-yellow-500 text-gray-900 py-4 rounded-xl font-heading font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Tour 4: Whitehaven Xpress */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-green-600">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-green-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    BEST VALUE
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Whitehaven Xpress Full Day Tour</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-green-600 mb-2">$189-209</div>
                  <div className="font-body text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-gray-800">Full Day</div>
                  <div className="font-body text-gray-600">8.5 hours</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Family-owned since the 1990s, Whitehaven Xpress offers the MOST time at both Whitehaven Beach AND
                Hill Inlet of any tour at this price point. Their signature feature? An authentic Aussie beach BBQ
                served right on the sand. This is the tour that best balances time, value, and experience—perfect
                for first-time visitors who want to see everything without breaking the bank.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• MOST time at Whitehaven & Hill Inlet</li>
                    <li>• Visit North AND South Whitehaven</li>
                    <li>• Aussie beach BBQ lunch (on the sand!)</li>
                    <li>• Extended Hill Inlet lookout time</li>
                    <li>• Betty's Beach visit (hidden gem)</li>
                    <li>• Optional snorkeling location</li>
                    <li>• Comfortable catamaran with toilets/bar</li>
                    <li>• Family-friendly (stroller space!)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Families with kids (very kid-friendly)</li>
                    <li>• First-time visitors wanting to see it all</li>
                    <li>• Those wanting great value for money</li>
                    <li>• People who appreciate family-owned service</li>
                    <li>• Travelers wanting max time at top spots</li>
                    <li>• Suitable from 3 months to seniors</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">⭐ Why This is Best Value:</h4>
                <p className="font-body text-gray-700 text-sm">
                  For just $30-40 more than the half-day tour, you get 6+ extra hours, full BBQ lunch, Hill Inlet
                  lookout, and visits to BOTH ends of Whitehaven. The family-owned vibe means personalized service,
                  and they genuinely care about giving you the best day possible. This is what I'd book for visiting
                  family and friends.
                </p>
              </div>

              <button className="w-full bg-green-600 text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-green-700 transition-colors shadow-lg">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Tour 5: Helicopter + Beach Landing */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-pink-500">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-pink-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-pink-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    BUCKET LIST
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Helicopter Flight & Beach Landing</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-pink-500 mb-2">$450-550</div>
                  <div className="font-body text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-gray-800">3 Hours</div>
                  <div className="font-body text-gray-600">Total experience</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                The ultimate Whitehaven experience. Soar over Hill Inlet in a helicopter for THE iconic aerial photo,
                land directly on Whitehaven Beach for 1-2 hours of exclusive beach time, then return via scenic flight
                over the Great Barrier Reef and Heart Reef. This is the experience you'll remember forever—and the
                photo you'll frame on your wall.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 30-minute scenic helicopter flight</li>
                    <li>• Aerial views of Hill Inlet (THE photo!)</li>
                    <li>• Direct beach landing on Whitehaven</li>
                    <li>• 1-2 hours private beach time</li>
                    <li>• Champagne and refreshments</li>
                    <li>• Return flight over Heart Reef</li>
                    <li>• Small group (2-6 passengers max)</li>
                    <li>• Guaranteed window seat</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Special occasions (proposals, anniversaries)</li>
                    <li>• Honeymooners</li>
                    <li>• Photography enthusiasts</li>
                    <li>• Bucket list travelers</li>
                    <li>• Those wanting VIP experience</li>
                    <li>• Time-rich, budget-flexible visitors</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">📸 The Photo Everyone Wants:</h4>
                <p className="font-body text-gray-700 text-sm">
                  You know that iconic swirling sands photo of Hill Inlet you see EVERYWHERE? This is how you get it.
                  The helicopter circles multiple times so everyone gets the perfect shot. No other vantage point comes
                  close. If photography is important to you, or this is a once-in-a-lifetime trip, this experience is
                  worth every cent.
                </p>
              </div>

              <button className="w-full bg-pink-500 text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-pink-600 transition-colors shadow-lg">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Decision Guide */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
              Which Tour Should You Choose?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-4">Choose Ocean Rafting if you:</h3>
                <ul className="space-y-2 font-body text-gray-700">
                  <li>✓ Love snorkeling (TWO sites)</li>
                  <li>✓ Want exclusive Hill Inlet access</li>
                  <li>✓ Enjoy adventure and thrills</li>
                  <li>✓ Value unique experiences</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-4">Choose Chill & Grill if you:</h3>
                <ul className="space-y-2 font-body text-gray-700">
                  <li>✓ Want MAXIMUM beach time</li>
                  <li>✓ Prefer relaxation over adventure</li>
                  <li>✓ Are traveling with family</li>
                  <li>✓ Want the full Whitehaven experience</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-4">Choose Half-Day if you:</h3>
                <ul className="space-y-2 font-body text-gray-700">
                  <li>✓ Are on a cruise ship (limited time)</li>
                  <li>✓ Have a tight budget</li>
                  <li>✓ Want to do other things same day</li>
                  <li>✓ Just need to see Whitehaven</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-600">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-4">Choose Whitehaven Xpress if you:</h3>
                <ul className="space-y-2 font-body text-gray-700">
                  <li>✓ Want best overall value</li>
                  <li>✓ Have kids (very family-friendly)</li>
                  <li>✓ Want to see everything</li>
                  <li>✓ Appreciate family-owned businesses</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl border-l-4 border-pink-500">
              <h3 className="font-heading text-xl font-bold text-gray-800 mb-4">Choose Helicopter if you:</h3>
              <ul className="space-y-2 font-body text-gray-700">
                <li>✓ Are celebrating something special</li>
                <li>✓ Want THE iconic aerial photo</li>
                <li>✓ Have the budget for a splurge</li>
                <li>✓ Love unique, once-in-a-lifetime experiences</li>
                <li>✓ Value photography and memories over time</li>
              </ul>
            </div>
          </div>

          {/* Want Your Own Boat Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
              <h2 className="font-heading text-3xl font-bold mb-4">
                🚤 Want Your Own Boat?
              </h2>
              <p className="font-body text-lg mb-6 leading-relaxed">
                If you're an experienced sailor or traveling with a larger group (8+ people), consider renting your
                own yacht or booking a private skippered charter. You'll have complete flexibility to explore Whitehaven
                at your own pace, with your own itinerary, and total privacy.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-bold mb-3">⛵ Bareboating</h3>
                  <p className="font-body text-sm mb-3">
                    Rent and captain your own yacht. Perfect for experienced sailors wanting ultimate freedom.
                  </p>
                  <p className="text-sm opacity-90">From $500/day | Sailing certification required</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-heading text-xl font-bold mb-3">🛥️ Private Charters</h3>
                  <p className="font-body text-sm mb-3">
                    Professional crew, gourmet meals, custom itinerary. Great for groups splitting costs.
                  </p>
                  <p className="text-sm opacity-90">From $2,500/charter | Works out to ~$125-250pp for groups</p>
                </div>
              </div>
              <Link
                href="/tours/bareboating-and-private-charters"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Explore Bareboating & Private Charters →
              </Link>
            </div>
          </div>

          {/* Booking Tips */}
          <div className="mb-16">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="font-heading text-2xl font-bold text-gray-800 mb-6">
                💡 Booking Tips from a Local
              </h2>
              <div className="grid md:grid-cols-2 gap-6 font-body text-gray-700">
                <div>
                  <h3 className="font-heading font-bold text-gray-800 mb-3">When to Book:</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Peak season (Jun-Aug):</strong> Book 4-6 weeks ahead</li>
                    <li>• <strong>Shoulder (Apr-May, Sep-Nov):</strong> 2-3 weeks ahead</li>
                    <li>• <strong>Summer (Dec-Mar):</strong> 1-2 weeks usually fine</li>
                    <li>• <strong>Last-minute:</strong> Sometimes available but risky in peak season</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-800 mb-3">What to Know:</h3>
                  <ul className="space-y-2">
                    <li>• Tours reschedule in bad weather (not refund)</li>
                    <li>• Bring <strong>reef-safe sunscreen only</strong></li>
                    <li>• Seasickness tablets if prone to it</li>
                    <li>• Camera/phone in waterproof case</li>
                    <li>• Cash for onboard bar purchases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  Can I book these tours last minute?
                </h3>
                <p className="font-body text-gray-700">
                  Sometimes, yes—especially in low season (December-March). But in peak season (June-August), most
                  tours sell out 2-4 weeks ahead, particularly Ocean Rafting and Chill & Grill. If you have fixed
                  dates, book as early as possible.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  What if the weather is bad?
                </h3>
                <p className="font-body text-gray-700">
                  Tours will reschedule rather than refund. If you have flexible dates, this works fine. If you can't
                  reschedule, most operators offer credit for future use or transfer to another person. Weather
                  cancellations are rare (operators sail in most conditions), but do happen especially in summer
                  cyclone season.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  Do I need to be a strong swimmer?
                </h3>
                <p className="font-body text-gray-700">
                  No! All tours provide life jackets and floatation devices. Non-swimmers can enjoy the beach, lookout
                  walks, and boat rides. If you want to snorkel but aren't confident, tell the crew—they provide pool
                  noodles and extra assistance. Ocean Rafting and Whitehaven Xpress are particularly good with
                  non-swimmers.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  Are these affiliate links?
                </h3>
                <p className="font-body text-gray-700">
                  Yes—when you book through the links on this page, I may earn a small commission at no extra cost
                  to you. This helps me maintain this free guide and keep researching the best tours. I only recommend
                  tours I genuinely believe offer good value. See my{' '}
                  <Link href="/affiliate-disclosure" className="text-orange-500 hover:underline font-semibold">
                    affiliate disclosure
                  </Link>{' '}
                  for more details.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Check out my complete Whitehaven Beach guide or get in touch
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/whitehaven-beach"
              className="bg-orange-500 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl"
            >
              Read Full Beach Guide
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 shadow-xl"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}