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
              I've researched the best tours to help you experience Whitehaven Beach without the overwhelm
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sand/20 border-l-4 border-sand p-8 rounded-lg mb-12">
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
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
            <h2 className="font-heading text-3xl font-bold text-navy mb-8 text-center">
              Quick Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-ocean text-white">
                  <tr>
                    <th className="font-heading p-4 text-left">Tour Type</th>
                    <th className="font-heading p-4 text-left">Price</th>
                    <th className="font-heading p-4 text-left">Duration</th>
                    <th className="font-heading p-4 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody className="font-body">
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-navy">Budget Day Sail</td>
                    <td className="p-4">$140-160</td>
                    <td className="p-4">Full Day (8hrs)</td>
                    <td className="p-4">Budget travelers</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-navy">Premium Catamaran</td>
                    <td className="p-4">$200-230</td>
                    <td className="p-4">Full Day (8hrs)</td>
                    <td className="p-4">Quality seekers</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold text-navy">Half-Day Express</td>
                    <td className="p-4">$120-140</td>
                    <td className="p-4">4-5 hours</td>
                    <td className="p-4">Time-limited</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold text-navy">Helicopter + Beach</td>
                    <td className="p-4">$450-550</td>
                    <td className="p-4">3 hours</td>
                    <td className="p-4">Special occasions</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-navy">Luxury Experience</td>
                    <td className="p-4">$600-800</td>
                    <td className="p-4">Full Day</td>
                    <td className="p-4">Ultimate luxury</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tour 1: Budget Day Sail */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-coral">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-navy/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-coral text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    BEST VALUE
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Budget Day Sail to Whitehaven</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-coral mb-2">$140-160</div>
                  <div className="font-body text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-navy">Full Day</div>
                  <div className="font-body text-gray-600">8 hours</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                The most affordable way to experience Whitehaven Beach. This full-day sailing tour includes
                everything you need: 2-3 hours at Whitehaven Beach, Hill Inlet lookout walk, snorkeling at a
                fringing reef, and a buffet lunch onboard. While boats can be larger (25-35 passengers),
                operators are reliable and the experience is excellent for the price.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 2-3 hours at Whitehaven Beach</li>
                    <li>• Hill Inlet lookout walk (30 mins)</li>
                    <li>• Snorkeling at fringing reef</li>
                    <li>• Buffet lunch and refreshments</li>
                    <li>• All snorkel equipment provided</li>
                    <li>• Transfers from Airlie Beach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Budget-conscious travelers</li>
                    <li>• Backpackers and solo travelers</li>
                    <li>• Groups and families</li>
                    <li>• First-time visitors</li>
                    <li>• Those who don't mind larger groups</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-navy mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Book the earliest departure time available. You'll reach Whitehaven before most other tours,
                  giving you prime time on the beach with fewer crowds. The light is also better for photos
                  in the morning.
                </p>
              </div>

              <button className="w-full bg-coral text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-coral-600 transition-colors shadow-lg">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Tour 2: Premium Catamaran */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-ocean">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-ocean/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-ocean text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    MOST POPULAR
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Premium Catamaran Experience</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-ocean mb-2">$200-230</div>
                  <div className="font-body text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-navy">Full Day</div>
                  <div className="font-body text-gray-600">8 hours</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Step up to a premium experience with smaller group sizes (12-18 passengers), modern catamarans,
                and upgraded service. More personal attention from crew, better quality food, and extra time at
                the best spots. This is the sweet spot between budget and luxury - the best overall value.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 3+ hours at Whitehaven Beach</li>
                    <li>• Hill Inlet lookout (guided)</li>
                    <li>• Premium snorkel locations</li>
                    <li>• Restaurant-quality lunch</li>
                    <li>• Beer, wine, and soft drinks</li>
                    <li>• Smaller group (max 18)</li>
                    <li>• Boom netting (weather permitting)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Couples and honeymooners</li>
                    <li>• Quality-conscious travelers</li>
                    <li>• Those wanting more beach time</li>
                    <li>• Photography enthusiasts</li>
                    <li>• People who value comfort</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-navy mb-2">⭐ Why I Recommend This:</h4>
                <p className="font-body text-gray-700 text-sm">
                  This is what I'd book for friends visiting. The extra $50-70 over budget tours buys you
                  significantly more beach time, better food, smaller crowds, and a more relaxed pace. Best
                  bang for your buck if you can stretch the budget slightly.
                </p>
              </div>

              <button className="w-full bg-ocean text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-ocean-600 transition-colors shadow-lg">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Tour 3: Half-Day Express */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-sand">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-navy/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-sand text-navy px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    QUICK OPTION
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Half-Day Express Tour</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-sand mb-2">$120-140</div>
                  <div className="font-body text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-navy">Half Day</div>
                  <div className="font-body text-gray-600">4-5 hours</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Short on time? This half-day option gets you to Whitehaven Beach and back in 4-5 hours.
                You'll spend about 1.5 hours at the beach with a quick Hill Inlet lookout visit. Perfect
                for cruise ship passengers or those with limited time in the Whitsundays.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 1.5 hours at Whitehaven Beach</li>
                    <li>• Hill Inlet lookout walk</li>
                    <li>• Light refreshments</li>
                    <li>• Transfers included</li>
                    <li>• Morning or afternoon departure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Cruise ship passengers</li>
                    <li>• Time-limited visitors</li>
                    <li>• Those combining with other activities</li>
                    <li>• Quick Whitehaven tick-off</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-navy mb-2">⚠️ Honest Take:</h4>
                <p className="font-body text-gray-700 text-sm">
                  If you have the time, I'd recommend the full-day tour instead. You'll feel rushed on the
                  half-day option. But if it's this or nothing, absolutely do it - even 1.5 hours at Whitehaven
                  is magical.
                </p>
              </div>

              <button className="w-full bg-sand text-navy py-4 rounded-xl font-heading font-bold text-lg hover:bg-sand/80 transition-colors shadow-lg">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Tour 4: Helicopter + Beach Landing */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-coral">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-coral/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-white text-coral px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    BUCKET LIST
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Helicopter & Beach Landing</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-coral mb-2">$450-550</div>
                  <div className="font-body text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-navy">3 Hours</div>
                  <div className="font-body text-gray-600">Total experience</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                The ultimate Whitehaven experience. Helicopter flight over Hill Inlet (you'll get THE photo),
                land directly on the beach for 1-2 hours, then scenic flight back over the reef. This is a
                once-in-a-lifetime experience that combines aerial views with beach time.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 30-minute scenic helicopter flight</li>
                    <li>• Aerial views of Hill Inlet</li>
                    <li>• 1-2 hours on Whitehaven Beach</li>
                    <li>• Champagne and refreshments</li>
                    <li>• Return flight over reef/islands</li>
                    <li>• Small group (2-6 passengers)</li>
                    <li>• Pilot commentary</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Special occasions</li>
                    <li>• Proposals/honeymoons</li>
                    <li>• Photography enthusiasts</li>
                    <li>• Bucket list travelers</li>
                    <li>• Those wanting VIP experience</li>
                    <li>• Time-rich, budget-flexible visitors</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-navy mb-2">📸 Photo Opportunity:</h4>
                <p className="font-body text-gray-700 text-sm">
                  The aerial view of Hill Inlet from a helicopter is THE iconic Whitsundays photo. You'll
                  circle multiple times so everyone gets the shot. Worth every cent if photography or a
                  special occasion is important to you.
                </p>
              </div>

              <button className="w-full bg-coral text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-coral-600 transition-colors shadow-lg">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Tour 5: Luxury Private Charter */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-navy">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-navy/70 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-sand text-navy px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    ULTIMATE LUXURY
                  </div>
                  <h3 className="font-heading text-4xl font-bold text-white">Private Luxury Charter</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-navy mb-2">$600-800</div>
                  <div className="font-body text-gray-600">per person (min 4)</div>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-navy">Full Day</div>
                  <div className="font-body text-gray-600">Flexible timing</div>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6">
                The absolute pinnacle of Whitehaven Beach experiences. Private yacht or catamaran, dedicated
                crew, gourmet catering, and complete flexibility in itinerary. Visit Whitehaven at your own
                pace, snorkel pristine reefs, and enjoy 5-star service throughout. This is how celebrities
                experience the Whitsundays.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">✓ What's Included</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Private yacht/catamaran charter</li>
                    <li>• Dedicated crew (captain + host)</li>
                    <li>• Gourmet meals and premium drinks</li>
                    <li>• Flexible itinerary and timing</li>
                    <li>• Water toys and equipment</li>
                    <li>• Multiple snorkel locations</li>
                    <li>• Privacy and exclusivity</li>
                    <li>• Champagne and premium spirits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-navy mb-3">👥 Perfect For</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Luxury travelers</li>
                    <li>• Special celebrations</li>
                    <li>• Families wanting privacy</li>
                    <li>• Corporate groups</li>
                    <li>• VIPs and celebrities</li>
                    <li>• Those who value exclusivity</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-navy mb-2">💎 The Ultimate Experience:</h4>
                <p className="font-body text-gray-700 text-sm">
                  With a private charter, you control everything. Want to arrive at Whitehaven before anyone
                  else? Done. Want to spend 4 hours there instead of 2? No problem. This is for those who
                  want the absolute best and have the budget to match.
                </p>
              </div>

              <button className="w-full bg-navy text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-navy/90 transition-colors shadow-lg">
                Enquire About Private Charter
              </button>
            </div>
          </div>

          {/* Decision Guide */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8 text-center">
              Which Tour Should You Choose?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-coral/10 to-sand/10 p-6 rounded-xl border-l-4 border-coral">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Choose Budget Sail if you:</h3>
                <ul className="space-y-2 font-body text-gray-700">
                  <li>✓ Are on a tight budget</li>
                  <li>✓ Don't mind larger groups (25-35 people)</li>
                  <li>✓ Want all the essentials covered</li>
                  <li>✓ Are backpacking or traveling long-term</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-ocean/10 to-sand/10 p-6 rounded-xl border-l-4 border-ocean">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Choose Premium Catamaran if you:</h3>
                <ul className="space-y-2 font-body text-gray-700">
                  <li>✓ Want the best overall value</li>
                  <li>✓ Prefer smaller groups and better service</li>
                  <li>✓ Can stretch the budget slightly</li>
                  <li>✓ Value quality food and more beach time</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sand/20 to-coral/10 p-6 rounded-xl border-l-4 border-sand">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Choose Half-Day Express if you:</h3>
                <ul className="space-y-2 font-body text-gray-700">
                  <li>✓ Are on a cruise ship</li>
                  <li>✓ Have very limited time</li>
                  <li>✓ Want to see other things same day</li>
                  <li>✓ Just need to "tick off" Whitehaven</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-coral/20 to-pink/10 p-6 rounded-xl border-l-4 border-coral">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Choose Helicopter if you:</h3>
                <ul className="space-y-2 font-body text-gray-700">
                  <li>✓ Are celebrating something special</li>
                  <li>✓ Want THE iconic aerial photo</li>
                  <li>✓ Have the budget for a splurge</li>
                  <li>✓ Love unique experiences</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-navy/10 to-ocean/10 p-8 rounded-xl border-l-4 border-navy">
              <h3 className="font-heading text-xl font-bold text-navy mb-4">Choose Luxury Charter if you:</h3>
              <ul className="space-y-2 font-body text-gray-700">
                <li>✓ Want complete privacy and flexibility</li>
                <li>✓ Are traveling with family/group (4+ people)</li>
                <li>✓ Celebrating a major milestone</li>
                <li>✓ Value 5-star service and exclusivity</li>
                <li>✓ Have a comfortable budget for the best</li>
              </ul>
            </div>
          </div>

          {/* Booking Tips */}
          <div className="mb-16">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                💡 Booking Tips from a Local
              </h2>
              <div className="grid md:grid-cols-2 gap-6 font-body text-gray-700">
                <div>
                  <h3 className="font-heading font-bold text-navy mb-3">When to Book:</h3>
                  <ul className="space-y-2">
                    <li>• Peak season (Jun-Aug): Book 4-6 weeks ahead</li>
                    <li>• Shoulder (Apr-May, Sep-Nov): 2-3 weeks ahead</li>
                    <li>• Summer (Dec-Mar): 1-2 weeks usually fine</li>
                    <li>• Last-minute: Sometimes available but risky</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy mb-3">What to Know:</h3>
                  <ul className="space-y-2">
                    <li>• Tours reschedule in bad weather (not refund)</li>
                    <li>• Bring reef-safe sunscreen only</li>
                    <li>• Seasickness tablets if prone to it</li>
                    <li>• Camera/phone in waterproof case</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Can I book these tours last minute?
                </h3>
                <p className="font-body text-gray-700">
                  Sometimes, yes - especially in low season. But peak season (June-August), most tours sell
                  out 2-4 weeks ahead. If you have fixed dates, book as early as possible.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  What if the weather is bad?
                </h3>
                <p className="font-body text-gray-700">
                  Tours will reschedule rather than refund. If you have flexible dates, this works fine. If
                  you can't reschedule, most operators offer credit for future use. Weather cancellations are
                  rare but do happen, especially in summer.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Are these affiliate links?
                </h3>
                <p className="font-body text-gray-700">
                  Yes - when you book through the links on this page, I may earn a small commission at no extra
                  cost to you. This helps me maintain this free guide. I only recommend tours I genuinely believe
                  offer good value. See my <Link href="/affiliate-disclosure" className="text-coral hover:underline">affiliate disclosure</Link> for more details.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-ocean py-16">
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
              className="bg-coral text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-white hover:text-ocean transition-all duration-300 shadow-xl"
            >
              Read Full Beach Guide
            </Link>
            <Link
              href="/contact"
              className="bg-white text-ocean px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-sand hover:text-navy transition-all duration-300 shadow-xl"
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