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
            backgroundImage: "url('/images/whitehaven.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Whitehaven Beach
          </h1>
          <p className="text-2xl text-white drop-shadow-lg mb-6">
            7km of Pure White Silica Sand Paradise
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
            Book Your Visit
          </button>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Consistently ranked among the world's best beaches, Whitehaven Beach is a 7-kilometer stretch of
              pristine white silica sand on Whitsunday Island. Its crystal-clear turquoise waters and
              pure white sand create one of Australia's most photographed natural wonders.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">🏖️</div>
              <div className="font-bold text-gray-900 mb-1">7km Long</div>
              <div className="text-sm text-gray-600">Pristine coastline</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-bold text-gray-900 mb-1">98% Silica</div>
              <div className="text-sm text-gray-600">Pure white sand</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">🌡️</div>
              <div className="font-bold text-gray-900 mb-1">Cool Sand</div>
              <div className="text-sm text-gray-600">Even in summer</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">🏝️</div>
              <div className="font-bold text-gray-900 mb-1">Uninhabited</div>
              <div className="text-sm text-gray-600">National park</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Visit Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Whitehaven Beach is Special
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unique Sand Composition</h3>
                <p className="text-gray-700 mb-4">
                  The sand at Whitehaven Beach is 98% pure silica, which gives it its brilliant white
                  color and incredibly fine texture. Unlike regular beach sand, the silica doesn't retain
                  heat, so the sand stays cool even on the hottest days.
                </p>
                <p className="text-gray-700">
                  The sand is so pure that it was once used to manufacture the lenses for the Hubble
                  Space Telescope. It's also believed to be millions of years old.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Protected Paradise</h3>
                <p className="text-gray-700 mb-4">
                  Whitehaven Beach is part of the Whitsunday Islands National Park, which means it's
                  protected and undeveloped. There are no resorts, hotels, or permanent structures -
                  just pure natural beauty.
                </p>
                <p className="text-gray-700">
                  The beach is accessible only by boat, helicopter, or seaplane, which helps preserve
                  its pristine condition and limits visitor numbers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Crystal Clear Waters</h3>
                <p className="text-gray-700 mb-4">
                  The waters surrounding Whitehaven Beach are some of the clearest in the world. The
                  turquoise hues are created by the white sand reflecting through the shallow water.
                </p>
                <p className="text-gray-700">
                  Visibility can extend up to 30 meters, making it perfect for swimming, snorkeling,
                  and simply admiring the vibrant blues and greens.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hill Inlet Lookout</h3>
                <p className="text-gray-700 mb-4">
                  The famous Hill Inlet lookout offers one of Australia's most photographed views - a
                  swirling fusion of white sand and turquoise water as the tide shifts.
                </p>
                <p className="text-gray-700">
                  The 15-20 minute walk to the lookout is moderately challenging but absolutely worth
                  it for the spectacular panoramic views.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Visit Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              How to Visit Whitehaven Beach
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Choose from day tours, sailing adventures, or scenic flights
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Day Tours */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-8 rounded-xl">
                <div className="text-4xl mb-4">⛵</div>
                <h3 className="text-2xl font-bold mb-4">Day Tours</h3>
                <p className="mb-6">
                  Most popular option. Full-day tours include swimming, snorkeling, beach time, and
                  Hill Inlet lookout visit.
                </p>
                <div className="space-y-2 text-sm mb-6">
                  <div>✓ Depart from Airlie Beach</div>
                  <div>✓ 6-8 hours total</div>
                  <div>✓ Lunch included</div>
                  <div>✓ From $130-200 per person</div>
                </div>
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  View Day Tours
                </button>
              </div>

              {/* Sailing */}
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white p-8 rounded-xl">
                <div className="text-4xl mb-4">🌅</div>
                <h3 className="text-2xl font-bold mb-4">Sailing Trips</h3>
                <p className="mb-6">
                  Overnight sailing adventures include Whitehaven Beach, snorkeling the reef, and
                  sleeping under the stars.
                </p>
                <div className="space-y-2 text-sm mb-6">
                  <div>✓ 2-3 day trips</div>
                  <div>✓ All meals included</div>
                  <div>✓ Multiple stops</div>
                  <div>✓ From $400-600 total</div>
                </div>
                <button className="w-full bg-white text-cyan-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  View Sailing Trips
                </button>
              </div>

              {/* Scenic Flights */}
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white p-8 rounded-xl">
                <div className="text-4xl mb-4">🚁</div>
                <h3 className="text-2xl font-bold mb-4">Scenic Flights</h3>
                <p className="mb-6">
                  Helicopter or seaplane tours offer aerial views of Hill Inlet's swirling sands and
                  Heart Reef.
                </p>
                <div className="space-y-2 text-sm mb-6">
                  <div>✓ 30-60 minute flights</div>
                  <div>✓ Spectacular views</div>
                  <div>✓ Some include beach landing</div>
                  <div>✓ From $250-500 per person</div>
                </div>
                <button className="w-full bg-white text-orange-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  View Scenic Flights
                </button>
              </div>
            </div>

            {/* Tour Comparison */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Which Tour is Right for You?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Tour Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Time at Beach</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Price Range</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-4 font-semibold text-gray-900">Day Tour</td>
                      <td className="px-4 py-4 text-gray-700">First-time visitors, families</td>
                      <td className="px-4 py-4 text-gray-700">2-3 hours</td>
                      <td className="px-4 py-4 text-gray-700">$130-200</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-4 font-semibold text-gray-900">Sailing Trip</td>
                      <td className="px-4 py-4 text-gray-700">Adventure seekers, couples</td>
                      <td className="px-4 py-4 text-gray-700">3-4 hours</td>
                      <td className="px-4 py-4 text-gray-700">$400-600</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-4 font-semibold text-gray-900">Half-Day Tour</td>
                      <td className="px-4 py-4 text-gray-700">Time-limited visitors</td>
                      <td className="px-4 py-4 text-gray-700">1-2 hours</td>
                      <td className="px-4 py-4 text-gray-700">$100-150</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-semibold text-gray-900">Scenic Flight</td>
                      <td className="px-4 py-4 text-gray-700">Photographers, special occasions</td>
                      <td className="px-4 py-4 text-gray-700">Aerial views only*</td>
                      <td className="px-4 py-4 text-gray-700">$250-500</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 mt-2">*Some scenic flights include beach landing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Time to Visit */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Best Time to Visit
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Peak Season (June-August)</h3>
                  <p className="text-gray-700 mb-4">
                    Winter months offer the best conditions - calm seas, comfortable temperatures, and
                    clear skies perfect for photography.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Best weather and sea conditions</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Ideal for Hill Inlet photography</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span className="text-gray-700">Most crowded and expensive</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span className="text-gray-700">Book 2-3 months in advance</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Shoulder Season (April-May, Sept-Nov)</h3>
                  <p className="text-gray-700 mb-4">
                    Great weather with fewer crowds and better prices. Seas are generally calm with
                    pleasant temperatures.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Still excellent weather</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">20-30% cheaper than peak</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Fewer tourists</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">Book 2-4 weeks in advance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hill Inlet Tide Times */}
            <div className="bg-blue-500 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">📸 Photography Tip: Tide Timing</h3>
              <p className="mb-4">
                The iconic swirling sands of Hill Inlet are most dramatic during the transition between
                high and low tide - roughly 2 hours before or after high tide.
              </p>
              <p className="text-blue-100">
                Check tide times before booking your tour to maximize your chances of seeing Hill Inlet
                at its most spectacular. Most operators plan tours around optimal viewing times.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What to Bring */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              What to Bring
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">✓ Essential Items</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Reef-safe sunscreen</strong> - Chemical sunscreens damage the reef</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Hat and sunglasses</strong> - Sun protection is crucial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Water shoes or sandals</strong> - For boats and rocky areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Towel</strong> - Not always provided on tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Swimwear</strong> - Bring multiple if staying overnight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Waterproof camera/phone case</strong> - Protect electronics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Light cover-up</strong> - For sun protection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">✗ Leave Behind</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Sand/shells/coral</strong> - Taking anything from the beach is illegal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Plastic bags</strong> - Can blow into the water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Alcohol</strong> - Not permitted in national parks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Drones</strong> - Restricted without permits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">•</span>
                    <span className="text-gray-700"><strong>Pets</strong> - No dogs allowed</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-red-100 rounded-lg">
                  <p className="text-sm text-gray-800">
                    <strong>Important:</strong> Whitehaven Beach is part of a protected national park.
                    Respect the environment by taking only photos and leaving only footprints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can you stay overnight at Whitehaven Beach?
                </h3>
                <p className="text-gray-700">
                  No permanent accommodation exists, but you can camp at designated camping areas on
                  Whitsunday Island with a permit. Most visitors choose day tours or overnight sailing
                  trips that anchor nearby.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Are there facilities at Whitehaven Beach?
                </h3>
                <p className="text-gray-700">
                  Facilities are minimal - there's a basic toilet at Tongue Bay camping area, but no
                  shops, cafes, or showers. Tours typically include lunch and refreshments. Bring
                  everything you need for the day.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is Whitehaven Beach safe for swimming?
                </h3>
                <p className="text-gray-700">
                  Yes, generally very safe. There are no lifeguards, but the waters are calm and clear.
                  During stinger season (November-May), wear a stinger suit. Always swim with your tour
                  group and follow operator guidelines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long should I spend at Whitehaven Beach?
                </h3>
                <p className="text-gray-700">
                  Most day tours allow 2-3 hours on the beach, which is enough to swim, relax, walk to
                  Hill Inlet lookout, and take photos. Overnight sailing trips give you more time to
                  explore at your own pace.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I visit Whitehaven Beach on my own?
                </h3>
                <p className="text-gray-700">
                  Only if you have your own boat and required permits. For most visitors, joining an
                  organized tour is the easiest, safest, and most affordable option. Tours include
                  transport, equipment, and expert local knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Whitehaven Beach?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Book your Whitehaven Beach tour today and discover why it's consistently ranked among the
            world's most beautiful beaches
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Compare Tours
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors">
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}