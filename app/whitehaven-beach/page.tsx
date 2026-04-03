import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Whitehaven Beach | Discover Whitsundays',
  description: 'Seven kilometres of 98% pure silica sand on Whitsunday Island. How to get there, what to expect, and the spots most visitors never find.',
}

export default function WhitehavenBeachPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/whitehaven-beach.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1A2E35]/50"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            Whitehaven Beach
          </h1>
          <p className="font-heading text-3xl text-white/90 drop-shadow-lg mb-4 font-light max-w-3xl mx-auto">
            Some days you won't see another soul. It almost feels like you've reached the edge of the world.
          </p>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-[#F5F0E8] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-[#E07B39]">
                <div className="text-4xl mb-2">📍</div>
                <div className="font-heading text-2xl font-bold text-[#1A2E35] mb-1">7km</div>
                <div className="font-body text-sm text-[#6B7C80]">Pristine Beach</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-[#0B6E72]">
                <div className="text-4xl mb-2">⭐</div>
                <div className="font-heading text-2xl font-bold text-[#1A2E35] mb-1">98%</div>
                <div className="font-body text-sm text-[#6B7C80]">Pure Silica Sand</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-[#0B6E72]">
                <div className="text-4xl mb-2">🏝️</div>
                <div className="font-heading text-2xl font-bold text-[#1A2E35] mb-1">Protected</div>
                <div className="font-body text-sm text-[#6B7C80]">National Park</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-[#E07B39]">
                <div className="text-4xl mb-2">🚤</div>
                <div className="font-heading text-2xl font-bold text-[#1A2E35] mb-1">Boat Only</div>
                <div className="font-body text-sm text-[#6B7C80]">No Road Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <section className="mb-16">
            <h2 className="font-heading text-4xl font-bold text-[#1A2E35] mb-6">
              If you can only see one thing while you're here, it has to be this.
            </h2>
            <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Whitehaven Beach stretches over 7 kilometres along Whitsunday Island. The sand is 98% pure
                silica — one of the purest concentrations in the world. It stays cool underfoot even in the
                height of summer, and it squeaks when you walk on it.
              </p>
              <p>
                The beach is protected national park. No roads reach it, no permanent structures sit on it,
                and no shops or kiosks break the view. You get there by boat, seaplane, or helicopter —
                and that inaccessibility is exactly what keeps it worth visiting.
              </p>
              <p>
                The northern end features Hill Inlet, where tidal shifts create a swirling pattern of white
                sand and turquoise water that changes throughout the day. It's the most photographed spot
                in Queensland — and one of those rare cases where the reality matches the photos.
              </p>
            </div>
          </section>

          {/* Hill Inlet */}
          <section className="mb-16">
            <div className="bg-[#E8F4F5] p-8 rounded-2xl border-l-4 border-[#0B6E72]">
              <h2 className="font-heading text-3xl font-bold text-[#1A2E35] mb-6">
                Hill Inlet Lookout
              </h2>
              <div className="font-body text-gray-700 leading-relaxed space-y-4">
                <p>
                  The Hill Inlet lookout is a 20-30 minute walk through bushland from where the boats anchor
                  at Tongue Bay — about 1km each way with some stairs and inclines. Do it. The view from
                  the top is the one you've seen in every Whitsundays photo ever taken.
                </p>
                <p>
                  The swirling sand patterns are created by tidal movement and change throughout the day.
                  Mid-morning gives you the best combination of light and tide.
                </p>
                <div className="bg-white p-6 rounded-lg mt-4">
                  <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">📸 Photography Tips:</h3>
                  <ul className="space-y-2 font-body text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2 font-bold">•</span>
                      <span><strong>Best time:</strong> Before 11am for optimal light and tide conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2 font-bold">•</span>
                      <span><strong>Tide:</strong> Mid-tide shows the most dramatic swirling patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2 font-bold">•</span>
                      <span><strong>What to bring:</strong> Wide-angle lens if you have one, polarising filter</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Betty's Beach */}
          <section className="mb-16">
            <div className="bg-[#F5F0E8] p-8 rounded-2xl border-l-4 border-[#E07B39]">
              <h2 className="font-heading text-3xl font-bold text-[#1A2E35] mb-2">
                Betty's Beach
              </h2>
              <p className="font-body text-[#6B7C80] text-sm mb-6 italic">
                The one most visitors walk straight past.
              </p>
              <div className="font-body text-gray-700 leading-relaxed space-y-4">
                <p>
                  From the Hill Inlet lookout, most people turn back toward Tongue Bay and the boat.
                  The ones who don't — who follow the trail down to the north end of the beach and
                  walk the coastline left until they hit rocks — find Betty's Beach on the other side.
                </p>
                <p>
                  It's a small protected cove, quieter than the main beach and largely overlooked by
                  the day tour crowd. I've been there on days when there wasn't another person in sight.
                </p>
                <p>
                  The Ngaro people used this cove for generations. Folklore suggests it served as both
                  a fishing ground — where men would dig trenches to trap fish using the tides — and a
                  gathering place for women during childbirth, woven into Dreamtime ceremony. It's a
                  place with history as well as beauty.
                </p>
                <div className="bg-white p-6 rounded-lg mt-2">
                  <h3 className="font-heading text-lg font-bold text-[#1A2E35] mb-2">💡 How to get there:</h3>
                  <p className="font-body text-gray-700 text-sm">
                    From the Hill Inlet lookout, instead of turning back toward Tongue Bay, follow the
                    trail down to the north end of Whitehaven. Walk the coastline to your left until you
                    hit rocks — Betty's Beach is over those rocks. Not every tour visits the north end,
                    so check the itinerary before you book if this is on your list.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Sand */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-[#1A2E35] mb-6">
              The Famous Silica Sand
            </h2>
            <div className="font-body text-gray-700 leading-relaxed space-y-4">
              <p>
                Whitehaven's sand is 98% pure silica — one of the purest concentrations in the world.
                This unique composition creates several remarkable properties:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-[#F5F0E8] p-6 rounded-xl border-l-4 border-[#E07B39]">
                  <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">Brilliant White</h3>
                  <p className="font-body text-gray-700 text-sm">
                    The high silica content reflects light, creating a dazzling white appearance that's
                    stunning in photographs and even more striking in person.
                  </p>
                </div>
                <div className="bg-[#E8F4F5] p-6 rounded-xl border-l-4 border-[#0B6E72]">
                  <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">Stays Cool</h3>
                  <p className="font-body text-gray-700 text-sm">
                    Unlike most beach sand, silica sand doesn't retain heat. You can walk barefoot
                    comfortably even on the hottest days.
                  </p>
                </div>
                <div className="bg-[#E8F4F5] p-6 rounded-xl border-l-4 border-[#0B6E72]">
                  <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">Fine Texture</h3>
                  <p className="font-body text-gray-700 text-sm">
                    The sand is incredibly fine and soft, almost powder-like. It squeaks when you
                    walk on it — one of those details you don't expect until you're standing on it.
                  </p>
                </div>
                <div className="bg-[#F5F0E8] p-6 rounded-xl border-l-4 border-[#E07B39]">
                  <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">Protected</h3>
                  <p className="font-body text-gray-700 text-sm">
                    Taking sand from the beach is illegal. This helps preserve one of the world's
                    genuinely rare natural environments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Visit */}
          <section className="mb-16">
            <h2 className="font-heading text-4xl font-bold text-[#1A2E35] mb-6">
              How to Visit Whitehaven Beach
            </h2>
            <p className="font-body text-lg text-gray-700 mb-8">
              Whitehaven is only accessible by boat, seaplane, or helicopter. No roads reach it —
              which is a large part of why it's still worth visiting.
            </p>

            <div className="space-y-8">
              {/* Day Tours */}
              <div className="bg-white border-2 border-[#E8F4F5] rounded-2xl p-8 hover:border-[#0B6E72] transition-all">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">⛵</span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-2">Day Tours by Boat</h3>
                    <p className="font-body text-[#6B7C80]">Most popular and accessible option</p>
                  </div>
                </div>
                <div className="font-body text-gray-700 space-y-3">
                  <p>
                    Full-day or half-day tours depart from Airlie Beach. Most include the Hill Inlet
                    lookout walk, time on the beach, lunch, and snorkelling at other locations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div><strong className="text-[#1A2E35]">Duration:</strong> 6-8 hours (full day) or 4 hours (half day)</div>
                    <div><strong className="text-[#1A2E35]">Price:</strong> $130-220 per person</div>
                    <div><strong className="text-[#1A2E35]">Includes:</strong> Lunch, snorkel gear, guided walk</div>
                    <div><strong className="text-[#1A2E35]">Best for:</strong> Most visitors, first-timers</div>
                  </div>
                  <Link
                    href="/tours/whitehaven-beach-tours"
                    className="mt-6 bg-[#0B6E72] text-white px-8 py-3 rounded-xl font-heading font-bold hover:bg-[#1A2E35] transition-colors shadow-lg inline-block text-center">
                    View Day Tours
                  </Link>
                </div>
              </div>

              {/* Scenic Flights */}
              <div className="bg-white border-2 border-[#E8F4F5] rounded-2xl p-8 hover:border-[#0B6E72] transition-all">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">🚁</span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-2">Scenic Flights</h3>
                    <p className="font-body text-[#6B7C80]">See Hill Inlet from above</p>
                  </div>
                </div>
                <div className="font-body text-gray-700 space-y-3">
                  <p>
                    Helicopter or seaplane flights offer the aerial view of Hill Inlet's swirling sands
                    that you've seen in photos. Some include beach landings.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div><strong className="text-[#1A2E35]">Duration:</strong> 15-60 minutes</div>
                    <div><strong className="text-[#1A2E35]">Price:</strong> $180-650 per person</div>
                    <div><strong className="text-[#1A2E35]">Includes:</strong> Aerial views, some include beach landing</div>
                    <div><strong className="text-[#1A2E35]">Best for:</strong> Special occasions, photographers</div>
                  </div>
                  <Link
                    href="/tours/scenic-flights"
                    className="mt-6 bg-[#0B6E72] text-white px-8 py-3 rounded-xl font-heading font-bold hover:bg-[#1A2E35] transition-colors shadow-lg inline-block">
                    View Scenic Flights
                  </Link>
                </div>
              </div>

              {/* Overnight Sailing */}
              <div className="bg-white border-2 border-[#E8F4F5] rounded-2xl p-8 hover:border-[#0B6E72] transition-all">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">🌅</span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-2">Overnight Sailing Trips</h3>
                    <p className="font-body text-[#6B7C80]">The beach at sunrise, without the crowds</p>
                  </div>
                </div>
                <div className="font-body text-gray-700 space-y-3">
                  <p>
                    Multi-day sailing trips visit Whitehaven at sunset or sunrise — when the day-trippers
                    are gone and the beach is nearly empty. If you want to understand what makes this place
                    special, this is how to do it properly.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div><strong className="text-[#1A2E35]">Duration:</strong> 2-3 days</div>
                    <div><strong className="text-[#1A2E35]">Price:</strong> $400-700 total</div>
                    <div><strong className="text-[#1A2E35]">Includes:</strong> Accommodation, all meals, multiple stops</div>
                    <div><strong className="text-[#1A2E35]">Best for:</strong> Anyone who wants to do it properly</div>
                  </div>
                  <Link
                    href="/things-to-do"
                    className="mt-6 bg-[#E07B39] text-white px-8 py-3 rounded-xl font-heading font-bold hover:bg-[#1A2E35] transition-colors shadow-lg inline-block">
                    View Sailing Trips
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* What to Bring */}
          <section className="mb-16">
            <div className="bg-[#E8F4F5] p-8 rounded-2xl">
              <h2 className="font-heading text-3xl font-bold text-[#1A2E35] mb-6">
                What to Bring
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-4">✅ Essential Items</h3>
                  <ul className="space-y-2 font-body text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2">•</span>
                      <span><strong>Reef-safe sunscreen</strong> — regular sunscreen is banned to protect the reef</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2">•</span>
                      <span><strong>Hat and sunglasses</strong> — limited shade on the beach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2">•</span>
                      <span><strong>Water bottle</strong> — stay hydrated in the tropical heat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2">•</span>
                      <span><strong>Camera</strong> — you'll want to capture this</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2">•</span>
                      <span><strong>Comfortable walking shoes</strong> — for the Hill Inlet walk</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-4">❌ Leave at Home</h3>
                  <ul className="space-y-2 font-body text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2">•</span>
                      <span><strong>Plastic bags</strong> — banned in the marine park</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2">•</span>
                      <span><strong>Regular sunscreen</strong> — only reef-safe allowed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2">•</span>
                      <span><strong>Glass containers</strong> — not permitted on most boats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E07B39] mr-2">•</span>
                      <span><strong>Drones</strong> — prohibited in the national park</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Important Rules */}
          <section className="mb-16">
            <div className="bg-[#F5F0E8] border-l-4 border-[#E07B39] p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-4">⚠️ Important Rules & Etiquette</h3>
              <ul className="space-y-2 font-body text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 font-bold">1.</span>
                  <span><strong>Do not take sand or shells</strong> — it's illegal and damages the environment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">2.</span>
                  <span><strong>Take all rubbish with you</strong> — leave no trace</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">3.</span>
                  <span><strong>Stay on marked walking tracks</strong> — protects native vegetation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">4.</span>
                  <span><strong>No dogs allowed</strong> — protects native wildlife</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">5.</span>
                  <span><strong>No camping</strong> — day visits only at Whitehaven</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-[#1A2E35] mb-6">
              Best Time to Visit
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#E8F4F5] p-6 rounded-xl border-t-4 border-[#0B6E72]">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">☀️ Peak Season</h3>
                <div className="font-body text-sm text-gray-700 mb-3">
                  <strong>June - August</strong>
                </div>
                <ul className="space-y-1 font-body text-sm text-gray-700">
                  <li>✓ Perfect weather</li>
                  <li>✓ No stingers</li>
                  <li>✓ Calm seas</li>
                  <li>✗ Most crowded</li>
                  <li>✗ Highest prices</li>
                </ul>
              </div>
              <div className="bg-[#F5F0E8] p-6 rounded-xl border-t-4 border-[#E07B39]">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">🌤️ Shoulder Season</h3>
                <div className="font-body text-sm text-gray-700 mb-3">
                  <strong>April-May, Sep-Nov</strong>
                </div>
                <ul className="space-y-1 font-body text-sm text-gray-700">
                  <li>✓ Great weather</li>
                  <li>✓ Fewer crowds</li>
                  <li>✓ Better prices</li>
                  <li>✓ Still excellent conditions</li>
                  <li>✓ Best value</li>
                </ul>
              </div>
              <div className="bg-[#E8F4F5] p-6 rounded-xl border-t-4 border-[#0B6E72]">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">🌧️ Summer</h3>
                <div className="font-body text-sm text-gray-700 mb-3">
                  <strong>December - March</strong>
                </div>
                <ul className="space-y-1 font-body text-sm text-gray-700">
                  <li>✓ Lowest prices</li>
                  <li>✓ Quieter</li>
                  <li>✗ Stinger season</li>
                  <li>✗ Humidity</li>
                  <li>✗ Possible rain</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-heading text-3xl font-bold text-[#1A2E35] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white border-2 border-[#E8F4F5] p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  How long should I spend at Whitehaven Beach?
                </h3>
                <p className="font-body text-gray-700">
                  Most day tours allocate 2-3 hours at the beach, which is enough time to swim, walk,
                  take photos, and do the Hill Inlet lookout walk. If you want a more relaxed pace,
                  an overnight sailing trip visits at quieter times and gives you the beach nearly to yourself.
                </p>
              </div>

              <div className="bg-white border-2 border-[#E8F4F5] p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  Can I visit Whitehaven Beach independently?
                </h3>
                <p className="font-body text-gray-700">
                  Only if you have your own boat or charter a private vessel. There's no public transport
                  or road access. Most visitors join organised tours, which handle all logistics and include
                  additional activities like snorkelling.
                </p>
              </div>

              <div className="bg-white border-2 border-[#E8F4F5] p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  Are there facilities at Whitehaven Beach?
                </h3>
                <p className="font-body text-gray-700">
                  No. Whitehaven Beach is protected national park with no permanent structures. There are
                  composting toilets at the southern end, but no shops, kiosks, or shade structures. Tour
                  operators bring everything you need on the boat.
                </p>
              </div>

              <div className="bg-white border-2 border-[#E8F4F5] p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  Is Whitehaven Beach suitable for children?
                </h3>
                <p className="font-body text-gray-700">
                  Yes — the beach is family-friendly with shallow, calm water perfect for young children.
                  The Hill Inlet walk may be challenging for very young kids, but the beach itself is ideal
                  for families. Most tour operators welcome children aged 4+.
                </p>
              </div>

              <div className="bg-white border-2 border-[#E8F4F5] p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  What's the water temperature like?
                </h3>
                <p className="font-body text-gray-700">
                  Warm year-round — 23°C in winter, up to 29°C in summer. No wetsuit needed. A rash vest
                  is worth bringing for sun protection, and a stinger suit is recommended during summer months
                  (November to May).
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0B6E72] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl font-bold text-white mb-6">
            Ready to Visit Whitehaven Beach?
          </h2>
          <p className="font-body text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book your tour and experience one of the world's genuinely great beaches.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/things-to-do"
              className="bg-[#E07B39] text-white px-10 py-4 rounded-xl font-heading font-bold text-lg hover:bg-[#1A2E35] transition-all duration-300 shadow-xl"
            >
              View All Tours
            </Link>
            <Link
              href="/itinerary-3-day"
              className="bg-white text-[#0B6E72] px-10 py-4 rounded-xl font-heading font-bold text-lg hover:bg-[#F5F0E8] transition-all duration-300 shadow-xl"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}