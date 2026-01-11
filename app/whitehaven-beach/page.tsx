import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WhitehavenBeachPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/whitehaven-beach.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy/50 via-ocean/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            Whitehaven Beach
          </h1>
          <p className="font-heading text-3xl text-white drop-shadow-lg mb-6">
            98% Pure Silica Sand Paradise
          </p>
          <p className="font-body text-xl text-white drop-shadow-lg max-w-2xl mx-auto">
            Consistently rated as one of the world's most beautiful beaches
          </p>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-gradient-to-br from-sand/20 via-white to-coral/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-coral">
                <div className="text-4xl mb-2">📍</div>
                <div className="font-heading text-2xl font-bold text-navy mb-1">7km</div>
                <div className="font-body text-sm text-gray-600">Pristine Beach</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-ocean">
                <div className="text-4xl mb-2">⭐</div>
                <div className="font-heading text-2xl font-bold text-navy mb-1">98%</div>
                <div className="font-body text-sm text-gray-600">Pure Silica Sand</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-sand">
                <div className="text-4xl mb-2">🏝️</div>
                <div className="font-heading text-2xl font-bold text-navy mb-1">Protected</div>
                <div className="font-body text-sm text-gray-600">National Park</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-b-4 border-coral">
                <div className="text-4xl mb-2">🚤</div>
                <div className="font-heading text-2xl font-bold text-navy mb-1">Boat Only</div>
                <div className="font-body text-sm text-gray-600">No Road Access</div>
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
            <h2 className="font-heading text-4xl font-bold text-navy mb-6">
              Why Whitehaven Beach is Special
            </h2>
            <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Whitehaven Beach stretches over 7 kilometers along Whitsunday Island and is renowned for
                its brilliant white silica sand and crystal-clear turquoise waters. The sand is 98% pure
                silica, which gives it a bright white color and makes it cool to walk on even in the
                hottest weather.
              </p>
              <p>
                Located on the largest island in the Whitsundays archipelago, Whitehaven Beach has been
                consistently voted as one of the world's best beaches and is the most photographed location
                in Queensland. The northern end features Hill Inlet, where the tide shifts create a stunning
                fusion of colors that looks like an abstract painting from above.
              </p>
            </div>
          </section>

          {/* Hill Inlet */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-ocean/10 to-sand/10 p-8 rounded-2xl border-l-4 border-ocean">
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Hill Inlet Lookout
              </h2>
              <div className="font-body text-gray-700 leading-relaxed space-y-4">
                <p>
                  The Hill Inlet lookout is the most iconic viewpoint in the Whitsundays. As the tide shifts,
                  the inlet creates a stunning swirl of white sand and turquoise water that changes throughout
                  the day.
                </p>
                <p>
                  To reach the lookout, you'll take a moderate 20-30 minute walk through bushland (about 1km each way).
                  The track is well-maintained with some stairs and inclines. The view from the top is absolutely
                  worth the effort.
                </p>
                <div className="bg-white p-6 rounded-lg mt-4">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">📸 Photography Tips:</h3>
                  <ul className="space-y-2 font-body text-gray-700">
                    <li className="flex items-start">
                      <span className="text-coral mr-2 font-bold">•</span>
                      <span><strong>Best time:</strong> Mid-morning (9-11am) for optimal light and tide conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2 font-bold">•</span>
                      <span><strong>Tide:</strong> Mid-tide shows the most dramatic swirling patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2 font-bold">•</span>
                      <span><strong>What to bring:</strong> Wide-angle lens if you have one, polarizing filter</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* The Sand */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-6">
              The Famous Silica Sand
            </h2>
            <div className="font-body text-gray-700 leading-relaxed space-y-4">
              <p>
                Whitehaven's sand is 98% pure silica, one of the purest in the world. This unique composition
                creates several remarkable properties:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-sand/10 p-6 rounded-xl border-l-4 border-sand">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">Brilliant White</h3>
                  <p className="font-body text-gray-700 text-sm">
                    The high silica content reflects light, creating a dazzling white appearance that's
                    stunning in photographs.
                  </p>
                </div>
                <div className="bg-ocean/10 p-6 rounded-xl border-l-4 border-ocean">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">Stays Cool</h3>
                  <p className="font-body text-gray-700 text-sm">
                    Unlike most beach sand, silica sand doesn't retain heat. You can walk barefoot comfortably
                    even on hot days.
                  </p>
                </div>
                <div className="bg-coral/10 p-6 rounded-xl border-l-4 border-coral">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">Fine Texture</h3>
                  <p className="font-body text-gray-700 text-sm">
                    The sand is incredibly fine and soft, almost powder-like. It squeaks when you walk on it!
                  </p>
                </div>
                <div className="bg-sand/10 p-6 rounded-xl border-l-4 border-sand">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">Protected</h3>
                  <p className="font-body text-gray-700 text-sm">
                    Taking sand from the beach is illegal. This helps preserve this natural wonder for
                    future generations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Visit */}
          <section className="mb-16">
            <h2 className="font-heading text-4xl font-bold text-navy mb-6">
              How to Visit Whitehaven Beach
            </h2>
            <p className="font-body text-lg text-gray-700 mb-8">
              Whitehaven Beach is only accessible by boat, seaplane, or helicopter. There are no roads to the beach,
              which helps preserve its pristine condition.
            </p>

            <div className="space-y-8">
              {/* Day Tours */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-coral transition-all">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">⛵</span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-navy mb-2">Day Tours by Boat</h3>
                    <p className="font-body text-gray-600">Most popular and affordable option</p>
                  </div>
                </div>
                <div className="font-body text-gray-700 space-y-3">
                  <p>
                    Full-day or half-day tours depart from Airlie Beach. Most include the Hill Inlet lookout walk,
                    time on the beach, lunch, and snorkeling at other locations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <strong className="text-navy">Duration:</strong> 6-8 hours (full day) or 4 hours (half day)
                    </div>
                    <div>
                      <strong className="text-navy">Price:</strong> $130-220 per person
                    </div>
                    <div>
                      <strong className="text-navy">Includes:</strong> Lunch, snorkel gear, guided walk
                    </div>
                    <div>
                      <strong className="text-navy">Best for:</strong> Budget travelers, groups
                    </div>
                  </div>
                  <Link
                    href="/tours/whitehaven-beach-tours"
                    className="mt-6 bg-coral text-white px-8 py-3 rounded-xl font-heading font-bold hover:bg-coral/80 transition-colors shadow-lg w-full md:w-auto inline-block text-center">
                    View Day Tours
                  </Link>
                </div>
              </div>

              {/* Scenic Flights */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-ocean transition-all">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">🚁</span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-navy mb-2">Scenic Flights</h3>
                    <p className="font-body text-gray-600">See Hill Inlet from above</p>
                  </div>
                </div>
                <div className="font-body text-gray-700 space-y-3">
                  <p>
                    Helicopter or seaplane flights offer stunning aerial views of Hill Inlet's swirling sands.
                    Some include beach landings for the best of both worlds.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <strong className="text-navy">Duration:</strong> 15-60 minutes
                    </div>
                    <div>
                      <strong className="text-navy">Price:</strong> $180-650 per person
                    </div>
                    <div>
                      <strong className="text-navy">Includes:</strong> Aerial views, some include beach landing
                    </div>
                    <div>
                      <strong className="text-navy">Best for:</strong> Special occasions, photographers
                    </div>
                  </div>
                  <Link href="/tours/scenic-flights"
                    className="mt-6 bg-ocean text-white px-8 py-3 rounded-xl font-heading font-bold hover:bg-ocean-600 transition-colors shadow-lg w-full md:w-auto">
                    View Scenic Flights
                  </Link>
                </div>
              </div>

              {/* Overnight Sailing */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sand transition-all">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">🌅</span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-navy mb-2">Overnight Sailing Trips</h3>
                    <p className="font-body text-gray-600">Experience sunrise on the beach</p>
                  </div>
                </div>
                <div className="font-body text-gray-700 space-y-3">
                  <p>
                    Multi-day sailing trips include stops at Whitehaven Beach, often visiting at sunset or sunrise
                    when day-trippers are gone. You'll have the beach nearly to yourself.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <strong className="text-navy">Duration:</strong> 2-3 days
                    </div>
                    <div>
                      <strong className="text-navy">Price:</strong> $400-700 total
                    </div>
                    <div>
                      <strong className="text-navy">Includes:</strong> Accommodation, all meals, multiple stops
                    </div>
                    <div>
                      <strong className="text-navy">Best for:</strong> Adventure seekers, avoiding crowds
                    </div>
                  </div>
                  <Link href="things-to-do/overnight-sailing"
                    className="mt-6 bg-sand text-navy px-8 py-3 rounded-xl font-heading font-bold hover:bg-sand/80 transition-colors shadow-lg w-full md:w-auto">
                    View Sailing Trips
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* What to Bring */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-coral/10 to-ocean/10 p-8 rounded-2xl">
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                What to Bring
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">✅ Essential Items</h3>
                  <ul className="space-y-2 font-body text-gray-700">
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span><strong>Reef-safe sunscreen</strong> - Regular sunscreen is banned to protect the reef</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span><strong>Hat and sunglasses</strong> - Limited shade on the beach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span><strong>Water bottle</strong> - Stay hydrated in the tropical heat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span><strong>Camera/phone</strong> - You'll want to capture this!</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span><strong>Comfortable walking shoes</strong> - For the Hill Inlet walk</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">❌ Leave at Home</h3>
                  <ul className="space-y-2 font-body text-gray-700">
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span><strong>Plastic bags</strong> - Banned in the marine park</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span><strong>Regular sunscreen</strong> - Only reef-safe allowed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span><strong>Glass containers</strong> - Not permitted on most boats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-2">•</span>
                      <span><strong>Drones</strong> - Prohibited in the national park</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Important Rules */}
          <section className="mb-16">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">⚠️ Important Rules & Etiquette</h3>
              <ul className="space-y-2 font-body text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 font-bold">1.</span>
                  <span><strong>Do not take sand or shells</strong> - It's illegal and helps preserve the beach</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">2.</span>
                  <span><strong>Take all rubbish with you</strong> - Leave no trace</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">3.</span>
                  <span><strong>Stay on marked walking tracks</strong> - Protects native vegetation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">4.</span>
                  <span><strong>No dogs allowed</strong> - Protects native wildlife</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">5.</span>
                  <span><strong>No camping</strong> - Day visits only, protected national park</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-6">
              Best Time to Visit
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-ocean/10 p-6 rounded-xl border-t-4 border-ocean">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">☀️ Peak Season</h3>
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
              <div className="bg-sand/20 p-6 rounded-xl border-t-4 border-sand">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">🌤️ Shoulder Season</h3>
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
              <div className="bg-coral/10 p-6 rounded-xl border-t-4 border-coral">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">🌧️ Summer</h3>
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
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  How long should I spend at Whitehaven Beach?
                </h3>
                <p className="font-body text-gray-700">
                  Most day tours allocate 2-3 hours at the beach, which is enough time to swim, walk, take photos,
                  and do the Hill Inlet lookout walk. If you want a more relaxed pace, consider an overnight sailing
                  trip that visits at quieter times.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Can I visit Whitehaven Beach independently?
                </h3>
                <p className="font-body text-gray-700">
                  Only if you have your own boat or charter a private vessel. There's no public transport or road
                  access. Most visitors join organized tours, which handle all logistics and include additional
                  activities like snorkeling.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Are there facilities at Whitehaven Beach?
                </h3>
                <p className="font-body text-gray-700">
                  No. Whitehaven Beach is a protected national park with no permanent structures. There are composting
                  toilets at the southern end, but no shops, kiosks, or shade structures. Tour operators bring portable
                  toilets and all necessary facilities on their boats.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Is Whitehaven Beach suitable for children?
                </h3>
                <p className="font-body text-gray-700">
                  Yes! The beach is family-friendly with shallow, calm water perfect for young children. The Hill Inlet
                  lookout walk may be challenging for very young kids, but the beach itself is ideal for families.
                  Most tour operators welcome children aged 4+.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  What's the water temperature like?
                </h3>
                <p className="font-body text-gray-700">
                  The water is warm year-round, ranging from 23°C (73°F) in winter to 29°C (84°F) in summer. You won't
                  need a wetsuit - just swimmers and a rash vest for sun protection (and stinger suit in summer months).
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-ocean py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl font-bold text-white mb-6">
            Ready to Visit Whitehaven Beach?
          </h2>
          <p className="font-body text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book your tour today and experience one of the world's most beautiful beaches
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/things-to-do"
              className="bg-coral text-white px-10 py-4 rounded-xl font-heading font-bold text-lg hover:bg-white hover:text-ocean transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              View All Tours
            </Link>
            <Link
              href="/itinerary-3-day"
              className="bg-white text-ocean px-10 py-4 rounded-xl font-heading font-bold text-lg hover:bg-sand hover:text-navy transition-all duration-300 shadow-xl"
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