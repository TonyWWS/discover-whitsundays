import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ThingsToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Things to Do in the Whitsundays
          </h1>
          <p className="text-2xl text-white drop-shadow-lg">
            From sailing and snorkeling to scenic flights and island adventures
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The Whitsundays offer endless activities for every type of traveler. Whether you're seeking
            adventure, relaxation, or wildlife encounters, this tropical paradise delivers unforgettable
            experiences surrounded by pristine nature and crystal-clear waters.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">⛵</div>
              <div className="font-bold text-gray-900 mb-1">Water Activities</div>
              <div className="text-sm text-gray-600">Sailing, snorkeling, diving, kayaking</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🏝️</div>
              <div className="font-bold text-gray-900 mb-1">Island Adventures</div>
              <div className="text-sm text-gray-600">Beach visits, hiking, camping</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🚁</div>
              <div className="font-bold text-gray-900 mb-1">Aerial Experiences</div>
              <div className="text-sm text-gray-600">Scenic flights, helicopter tours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sailing & Boat Tours */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="text-6xl mr-6">⛵</div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Sailing & Boat Tours</h2>
                <p className="text-gray-600 text-lg">Experience the islands from the water</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Day Sailing Tours</h3>
                <p className="text-gray-700 mb-4">
                  Full-day or half-day sailing trips to Whitehaven Beach, snorkel spots, and secluded bays.
                  Perfect for experiencing multiple locations in one day.
                </p>
                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>6-8 hours on the water</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Lunch and snacks included</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Snorkeling equipment provided</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>From $130-220 per person</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  View Day Sailing Tours
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overnight Sailing Trips</h3>
                <p className="text-gray-700 mb-4">
                  Multi-day adventures sleeping on board. Visit more remote locations, anchor in secluded
                  bays, and experience sunset/sunrise on the water.
                </p>
                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div className="flex items-start">
                    <span className="text-cyan-600 mr-2">✓</span>
                    <span>2-3 day options available</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-600 mr-2">✓</span>
                    <span>All meals and accommodation included</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-600 mr-2">✓</span>
                    <span>Multiple snorkel sites and islands</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-600 mr-2">✓</span>
                    <span>From $400-700 total</span>
                  </div>
                </div>
                <button className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                  View Sailing Trips
                </button>
              </div>
            </div>

            <div className="bg-blue-500 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Why Sailing is Special</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">
                    The Whitsundays are one of the world's premier sailing destinations. Calm, protected
                    waters, consistent winds, and 74 islands to explore make it perfect for both experienced
                    sailors and complete beginners.
                  </p>
                </div>
                <div>
                  <p>
                    Most tours use modern catamarans or yachts with experienced crews. You can help sail
                    if you want, or simply relax and enjoy the ride. It's the quintessential Whitsundays
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Snorkeling & Diving */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="text-6xl mr-6">🤿</div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Snorkeling & Diving</h2>
                <p className="text-gray-600 text-lg">Explore the Great Barrier Reef</p>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">The Great Barrier Reef</h3>
                <p className="mb-4">
                  The Whitsundays sit within the Great Barrier Reef Marine Park. You'll find incredible
                  coral gardens, tropical fish, sea turtles, rays, and diverse marine life. Both inner
                  fringing reefs and outer reef locations are accessible.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <strong>Inner Reefs:</strong>
                    <p className="text-sm mt-2">Around the islands, easier access, good for beginners,
                      included on most sailing tours.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <strong>Outer Reef:</strong>
                    <p className="text-sm mt-2">Spectacular coral formations, more diverse marine life,
                      dedicated reef tours, deeper waters.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Snorkeling Tours</h4>
                  <p className="text-gray-700 mb-4 text-sm">
                    Perfect for everyone - no experience needed. Equipment provided, guides point out
                    highlights, suitable for all ages.
                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    <div>• Half or full day options</div>
                    <div>• Equipment & instruction included</div>
                    <div>• From $150-250</div>
                  </div>
                  <button className="w-full bg-cyan-600 text-white py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                    Book Snorkeling
                  </button>
                </div>

                <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Introductory Diving</h4>
                  <p className="text-gray-700 mb-4 text-sm">
                    Try scuba diving for the first time with instructor guidance. No certification needed.
                    Go deeper and see more than snorkeling allows.
                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    <div>• No experience required</div>
                    <div>• Full instruction & equipment</div>
                    <div>• From $200-300 (extra to snorkel tour)</div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Try Diving
                  </button>
                </div>

                <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Certified Diving</h4>
                  <p className="text-gray-700 mb-4 text-sm">
                    For certified divers, explore deeper sites with more advanced dive profiles. Multiple
                    dive sites, longer bottom times.
                  </p>
                  <div className="text-sm text-gray-600 mb-4">
                    <div>• Certification required</div>
                    <div>• 2-3 dive sites per day</div>
                    <div>• From $250-400</div>
                  </div>
                  <button className="w-full bg-blue-800 text-white py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                    Dive Tours
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">🐢 What You Might See:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-sm">
                <div>
                  <strong>Common Sightings:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Colorful coral gardens</li>
                    <li>• Tropical fish (hundreds of species)</li>
                    <li>• Sea turtles (green and hawksbill)</li>
                    <li>• Stingrays and eagle rays</li>
                  </ul>
                </div>
                <div>
                  <strong>Possible Encounters:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Reef sharks (harmless)</li>
                    <li>• Giant clams</li>
                    <li>• Moray eels</li>
                    <li>• Manta rays (seasonal)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenic Flights */}
      <div className="bg-gradient-to-br from-orange-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="text-6xl mr-6">🚁</div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Scenic Flights</h2>
                <p className="text-gray-600 text-lg">See the islands from above</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Helicopter Tours</h3>
                <p className="text-gray-700 mb-4">
                  Soar over the swirling sands of Hill Inlet, the white perfection of Whitehaven Beach,
                  and the iconic Heart Reef. Helicopter tours offer flexibility with various flight paths.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-gray-700">
                    <span className="text-orange-600 mr-2 font-bold">→</span>
                    <span><strong>15-minute flight:</strong> Whitehaven Beach & Hill Inlet (~$180)</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <span className="text-orange-600 mr-2 font-bold">→</span>
                    <span><strong>30-minute flight:</strong> + Heart Reef & outer reef (~$350)</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <span className="text-orange-600 mr-2 font-bold">→</span>
                    <span><strong>60-minute flight:</strong> Extended reef & island tour (~$550)</span>
                  </div>
                </div>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Book Helicopter Tour
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seaplane Tours</h3>
                <p className="text-gray-700 mb-4">
                  Float planes offer a unique perspective, landing on the water at remote locations.
                  Some include beach landings at Whitehaven or reef pontoon visits.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-sm text-gray-700">
                    <span className="text-pink-600 mr-2 font-bold">→</span>
                    <span><strong>Scenic flight only:</strong> Aerial views, no landing (~$300)</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <span className="text-pink-600 mr-2 font-bold">→</span>
                    <span><strong>With Whitehaven landing:</strong> Fly & beach time (~$500)</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <span className="text-pink-600 mr-2 font-bold">→</span>
                    <span><strong>Reef & beach combo:</strong> Full experience (~$650)</span>
                  </div>
                </div>
                <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                  Book Seaplane Tour
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">📸 Photography Tips</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <strong className="block mb-2">Best Times:</strong>
                  <ul className="space-y-1 text-sm">
                    <li>• Early morning: best light, less haze</li>
                    <li>• Around high tide: Hill Inlet swirls most dramatic</li>
                    <li>• Avoid midday: harsh light, washed out colors</li>
                  </ul>
                </div>
                <div>
                  <strong className="block mb-2">Camera Tips:</strong>
                  <ul className="space-y-1 text-sm">
                    <li>• Use polarizing filter to reduce glare</li>
                    <li>• Fast shutter speed for clear shots</li>
                    <li>• Most operators allow GoPros mounted outside</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beach & Island Activities */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="text-6xl mr-6">🏖️</div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Beach & Island Activities</h2>
                <p className="text-gray-600 text-lg">Explore on land</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Island Hopping</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Visit multiple islands in one day. Most tours combine Whitehaven Beach with other
                  islands like Langford, Hook, or Hamilton.
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                  View Island Tours
                </button>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hiking & Bushwalking</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Many islands have walking trails. Hill Inlet lookout is the most famous, but Long Island
                  and Hook Island offer longer bush walks.
                </p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm">
                  Trail Information
                </button>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Camping</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Camp on uninhabited islands like Whitsunday, Hook, or Border Island. Permits required.
                  Basic facilities only - true wilderness experience.
                </p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm">
                  Camping Permits
                </button>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Activities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Water Sports</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Kayaking:</strong> Explore coastlines and bays at your own pace</li>
                    <li>• <strong>Stand-Up Paddleboarding:</strong> Calm waters perfect for SUP</li>
                    <li>• <strong>Jet Skiing:</strong> Available from Airlie Beach marina</li>
                    <li>• <strong>Parasailing:</strong> See the islands from above</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Land-Based</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Skydiving:</strong> Tandem jumps with beach/reef views</li>
                    <li>• <strong>Golf:</strong> Championship course on Dent Island (Hamilton)</li>
                    <li>• <strong>Wildlife:</strong> Koala & wildlife park on Hamilton Island</li>
                    <li>• <strong>Spa Treatments:</strong> Resort and day spas available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mainland Activities */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="text-6xl mr-6">🌴</div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Airlie Beach & Mainland</h2>
                <p className="text-gray-600 text-lg">Activities on shore</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">In Airlie Beach</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">→</span>
                    <div>
                      <strong>Airlie Beach Lagoon:</strong> Free saltwater pool on the waterfront,
                      open daily 6am-7pm
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">→</span>
                    <div>
                      <strong>Bicentennial Walkway:</strong> Scenic coastal walk with lookout points
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">→</span>
                    <div>
                      <strong>Markets:</strong> Airlie Beach markets every Saturday, Lions Park
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">→</span>
                    <div>
                      <strong>Marina Village:</strong> Shopping, dining, evening entertainment
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nearby Attractions</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <div>
                      <strong>Cedar Creek Falls:</strong> 30-min drive, natural swimming hole and waterfall
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <div>
                      <strong>Conway National Park:</strong> Rainforest walks and lookouts
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <div>
                      <strong>Shute Harbour:</strong> Historic port, walking trails, boat ramp
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <div>
                      <strong>Coral Sea Marina:</strong> Luxury marina with restaurants and shops
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Time for Activities */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Best Time for Each Activity
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">☀️ Dry Season (Jun-Aug)</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Peak season with best weather conditions
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Best for:</strong> All activities</li>
                  <li>• <strong>Sailing:</strong> Perfect winds & calm seas</li>
                  <li>• <strong>Snorkeling:</strong> Best visibility</li>
                  <li>• <strong>Flights:</strong> Clear skies</li>
                  <li>• <strong>Downside:</strong> Most expensive, crowded</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🌤️ Shoulder (Apr-May, Sep-Nov)</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Great weather, fewer crowds, good value
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Best for:</strong> All activities</li>
                  <li>• <strong>Sailing:</strong> Still excellent conditions</li>
                  <li>• <strong>Snorkeling:</strong> Great visibility</li>
                  <li>• <strong>Diving:</strong> Good conditions, less crowded sites</li>
                  <li>• <strong>Benefit:</strong> 20-30% cheaper</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🌧️ Summer (Dec-Mar)</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Warm, humid, afternoon storms, stinger season
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Best for:</strong> Budget travelers</li>
                  <li>• <strong>Sailing:</strong> Still possible, check forecasts</li>
                  <li>• <strong>Snorkeling:</strong> Stinger suits required</li>
                  <li>• <strong>Flights:</strong> Can be affected by weather</li>
                  <li>• <strong>Benefit:</strong> Lowest prices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Tips */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Booking & Planning Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 How to Save</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">$</span>
                    <span>Book combo packages (sailing + accommodation) for discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">$</span>
                    <span>Travel in shoulder season (Apr-May, Sep-Nov) for 20-30% savings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">$</span>
                    <span>Book direct with operators or through local booking agents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">$</span>
                    <span>Overnight sailing trips include accommodation + activities + meals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">$</span>
                    <span>Many free activities: lagoon, walking trails, beaches</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📅 When to Book</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">→</span>
                    <span><strong>Peak Season (Jun-Aug):</strong> Book 2-3 months ahead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">→</span>
                    <span><strong>Shoulder Season:</strong> Book 4-6 weeks ahead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">→</span>
                    <span><strong>Low Season:</strong> Can book 1-2 weeks ahead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">→</span>
                    <span><strong>Scenic Flights:</strong> Book early - limited seats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">→</span>
                    <span><strong>Last-Minute:</strong> Sometimes deals available, but risky</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What are the must-do activities?
                </h3>
                <p className="text-gray-700">
                  The top 3 must-do experiences are: (1) Whitehaven Beach visit, (2) Great Barrier Reef
                  snorkeling or diving, (3) Sailing through the islands. These three give you the quintessential
                  Whitsundays experience. If time allows, add a scenic flight for aerial views.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I do water activities if I can't swim?
                </h3>
                <p className="text-gray-700">
                  Yes! Snorkeling tours provide flotation devices and life jackets. Many boats have viewing
                  areas underwater or glass-bottom sections. Whitehaven Beach is shallow and calm. For diving,
                  you'll need to be comfortable in water, but introductory dives are shallow with full support.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How many activities can I fit in 3 days?
                </h3>
                <p className="text-gray-700">
                  Comfortably 2-3 major activities plus some free time. Typical itinerary: Day 1 - arrive &
                  explore Airlie, Day 2 - Whitehaven Beach full-day tour, Day 3 - Reef snorkeling half-day
                  or scenic flight. Don't overschedule - you'll want time to relax and enjoy.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What activities are best for families?
                </h3>
                <p className="text-gray-700">
                  Family-friendly options include: day sailing tours (most accept kids 4+), Whitehaven Beach
                  visits, snorkeling (calm inner reef spots), Airlie Beach Lagoon, Hamilton Island Wildlife
                  Park, and scenic flights. Overnight sailing trips are better for older kids (12+). Many
                  operators offer family packages.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do I need to book activities in advance?
                </h3>
                <p className="text-gray-700">
                  Highly recommended, especially in peak season (June-August). Popular tours like Whitehaven
                  Beach and sailing trips sell out weeks ahead. Booking in advance also secures better prices.
                  You can sometimes find last-minute availability in shoulder/low season, but it's risky.
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
            Ready to Book Your Activities?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Compare tours and activities to create your perfect Whitsundays adventure
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              View All Tours
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors">
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}