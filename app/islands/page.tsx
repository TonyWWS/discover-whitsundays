import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function IslandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            The Whitsunday Islands
          </h1>
          <p className="text-2xl text-white drop-shadow-lg">
            74 Tropical Islands in the Heart of the Great Barrier Reef
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The Whitsunday archipelago consists of 74 continental islands, most of which are
            uninhabited national parks with pristine beaches, walking trails, and fringing coral reefs.
            Each island offers unique experiences, from luxury resorts to secluded camping spots.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🏝️</div>
              <div className="font-bold text-gray-900 mb-1">74 Islands</div>
              <div className="text-sm text-gray-600">In the archipelago</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🏕️</div>
              <div className="font-bold text-gray-900 mb-1">8 Inhabited</div>
              <div className="text-sm text-gray-600">Only 8 have residents</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🌳</div>
              <div className="font-bold text-gray-900 mb-1">National Parks</div>
              <div className="text-sm text-gray-600">Most are protected</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🏖️</div>
              <div className="font-bold text-gray-900 mb-1">Whitehaven Beach</div>
              <div className="text-sm text-gray-600">World-famous beach</div>
            </div>
          </div>
        </div>
      </div>

      {/* Island Types */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Types of Islands
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🏨</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Resort Islands</h3>
                <p className="text-gray-700 mb-4">
                  Islands with accommodation options ranging from budget to ultra-luxury.
                  Offer restaurants, activities, and facilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Hamilton Island</li>
                  <li>• Daydream Island</li>
                  <li>• Hayman Island</li>
                  <li>• Long Island</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-4xl mb-4">⛺</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Camping Islands</h3>
                <p className="text-gray-700 mb-4">
                  Uninhabited national park islands with designated camping areas.
                  Permits required, basic facilities only.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Whitsunday Island</li>
                  <li>• Hook Island</li>
                  <li>• Border Island</li>
                  <li>• Henning Island</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🚶</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Day Visit Islands</h3>
                <p className="text-gray-700 mb-4">
                  Popular for day trips and tours. Accessible by boat with beaches,
                  snorkeling, and walking trails.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Whitsunday Island (Whitehaven)</li>
                  <li>• Hook Island</li>
                  <li>• South Molle Island</li>
                  <li>• Langford Island</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Major Islands - Detailed */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Major Islands
            </h2>

            {/* Hamilton Island */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-300 h-80 rounded-xl flex items-center justify-center">
                  <span className="text-8xl">🏝️</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Hamilton Island</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The most developed and accessible island in the Whitsundays. Hamilton Island has
                    its own commercial airport with direct flights from major Australian cities, making
                    it the easiest island to reach.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Own airport, marina, and accommodation options</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Multiple restaurants, bars, and shops</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Activities: golf, spa, wildlife park, water sports</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Family-friendly with kids club</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      View Accommodation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Whitsunday Island */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Whitsunday Island</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The largest island in the group and home to the world-famous Whitehaven Beach.
                    This uninhabited national park island is accessible only by boat and offers some
                    of the most pristine beaches and bushwalking in Australia.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Home to 7km Whitehaven Beach</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Hill Inlet lookout with stunning views</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Camping permitted at designated sites</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Multiple walking trails and secluded beaches</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Whitehaven Beach Guide
                    </button>
                    <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                      Book Tour
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-teal-300 h-80 rounded-xl flex items-center justify-center order-1 md:order-2">
                  <span className="text-8xl">🏖️</span>
                </div>
              </div>
            </div>

            {/* Daydream Island */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-300 h-80 rounded-xl flex items-center justify-center">
                  <span className="text-8xl">🌴</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Daydream Island</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A compact resort island known for its all-inclusive packages and family-friendly
                    atmosphere. Just a 30-minute ferry ride from Airlie Beach, Daydream offers a
                    more intimate island experience.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-cyan-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">All-inclusive resort packages available</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-cyan-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Living Reef - outdoor aquarium with marine life</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-cyan-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Kids club, water sports, spa, and pools</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-cyan-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Easy 30-minute ferry from Airlie Beach</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                      Learn More
                    </button>
                    <button className="border-2 border-cyan-600 text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                      Check Availability
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hayman Island */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Hayman Island</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The most northern island in the Whitsundays and home to one of Australia's most
                    luxurious resorts. Hayman Island offers an exclusive, ultra-premium island experience
                    with impeccable service and facilities.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-purple-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">InterContinental 5-star luxury resort</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Fine dining restaurants and premium spa</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Helicopter or private launch access</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Perfect for honeymoons and special occasions</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      Learn More
                    </button>
                    <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                      View Packages
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-pink-300 h-80 rounded-xl flex items-center justify-center order-1 md:order-2">
                  <span className="text-8xl">👑</span>
                </div>
              </div>
            </div>

            {/* Hook Island */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-orange-400 to-red-300 h-80 rounded-xl flex items-center justify-center">
                  <span className="text-8xl">🤿</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Hook Island</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The second-largest island and a favorite for camping, snorkeling, and diving.
                    Hook Island is mostly uninhabited national park with some of the best fringing
                    coral reefs in the Whitsundays.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Excellent snorkeling at Nara Inlet and Butterfly Bay</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Camping available with permits</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Aboriginal cave paintings at Nara Inlet</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Popular stop on sailing tours</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                      Snorkeling Tours
                    </button>
                    <button className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                      Camping Info
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Long Island */}
            <div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Long Island</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A mostly undeveloped island with rainforest walks and quiet beaches. Long Island
                    offers budget-friendly resort accommodation and is ideal for those seeking nature
                    and tranquility.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">20km of walking trails through rainforest</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Budget and mid-range resort options</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Paradise Bay eco-resort with glamping</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-teal-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700">Peaceful, nature-focused experience</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                      Learn More
                    </button>
                    <button className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                      View Resorts
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-400 to-green-300 h-80 rounded-xl flex items-center justify-center order-1 md:order-2">
                  <span className="text-8xl">🌳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Notable Islands */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Other Notable Islands
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">South Molle Island</h3>
                <p className="text-gray-700 mb-4">
                  Former resort island now open for day visits and camping. Great walking trails
                  with panoramic views from Mount Jeffreys.
                </p>
                <div className="text-sm text-gray-600">
                  <div>• Walking trails</div>
                  <div>• Camping available</div>
                  <div>• Day trip destination</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Langford Island</h3>
                <p className="text-gray-700 mb-4">
                  Tiny sand cay with a stunning sandbar at low tide. Popular snorkeling spot
                  surrounded by vibrant coral.
                </p>
                <div className="text-sm text-gray-600">
                  <div>• Sandbar at low tide</div>
                  <div>• Excellent snorkeling</div>
                  <div>• Day tours only</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Border Island</h3>
                <p className="text-gray-700 mb-4">
                  Small island with secluded beaches and good snorkeling. Popular camping
                  destination accessible by boat.
                </p>
                <div className="text-sm text-gray-600">
                  <div>• Camping permitted</div>
                  <div>• Quiet and secluded</div>
                  <div>• Good snorkeling</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Henning Island</h3>
                <p className="text-gray-700 mb-4">
                  Beautiful beaches and crystal-clear waters. Camping available with permits.
                  Less visited, offering solitude.
                </p>
                <div className="text-sm text-gray-600">
                  <div>• Camping sites</div>
                  <div>• Peaceful beaches</div>
                  <div>• Less crowded</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dent Island</h3>
                <p className="text-gray-700 mb-4">
                  Connected to Hamilton Island and home to Hamilton Island Golf Club.
                  Championship golf course with stunning ocean views.
                </p>
                <div className="text-sm text-gray-600">
                  <div>• Golf course</div>
                  <div>• Accessed from Hamilton</div>
                  <div>• Day visitors welcome</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pine Island</h3>
                <p className="text-gray-700 mb-4">
                  Quiet camping island with walking trails and secluded coves. Good for
                  kayaking and exploring.
                </p>
                <div className="text-sm text-gray-600">
                  <div>• Camping available</div>
                  <div>• Walking trails</div>
                  <div>• Kayaking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Island Hopping Guide */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Island Hopping Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Island Hop</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <strong>Day Tours:</strong> Most common way to visit multiple islands. Tours typically
                    visit 2-3 islands/beaches in one day.
                  </div>
                  <div>
                    <strong>Sailing Trips:</strong> 2-3 day trips anchor at different islands each night.
                    Great for exploring at your own pace.
                  </div>
                  <div>
                    <strong>Ferry Services:</strong> Regular ferries connect Hamilton and Daydream to
                    Airlie Beach. Can combine resort stays.
                  </div>
                  <div>
                    <strong>Private Charters:</strong> Hire a boat for custom island-hopping itinerary.
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Island Combinations</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Whitehaven Beach + Hill Inlet + Langford Island (classic day tour)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Hook Island snorkeling + Whitehaven Beach (full day)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Hamilton Island (2 nights) + Daydream Island (2 nights)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Airlie Beach base + different island day trips each day</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Sailing trip hitting Whitsunday, Hook, and Border Islands</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">💡 Insider Tip</h4>
              <p className="text-gray-700">
                Most islands look similar from the boat. The real differences are: Whitehaven's unique
                sand, Hamilton's facilities and accessibility, Hayman's luxury, and Hook's snorkeling.
                Don't try to visit every island - focus on 3-4 that match your interests.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Which island should I visit?
                </h3>
                <p className="text-gray-700">
                  It depends on your priorities: Whitehaven Beach for the iconic experience (everyone
                  should visit!), Hamilton for convenience and facilities, Daydream for all-inclusive
                  resort, Hayman for luxury, Hook for snorkeling, Long for nature and budget.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I visit multiple islands in one day?
                </h3>
                <p className="text-gray-700">
                  Yes! Most day tours visit 2-3 islands/locations. Typical combinations include
                  Whitehaven Beach + Hill Inlet + a snorkeling spot at Langford or Hook Island.
                  Sailing trips visit multiple islands over 2-3 days.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Are all islands accessible to the public?
                </h3>
                <p className="text-gray-700">
                  Most are national parks and accessible, but you need a boat to reach them. Some
                  islands like Hayman are private resort islands - you can only visit if you're a
                  resort guest. Camping requires permits for designated islands.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do I need to stay on an island to experience them?
                </h3>
                <p className="text-gray-700">
                  No! Most visitors stay in Airlie Beach and take day tours to the islands. This is
                  often more economical and gives you flexibility to visit different islands on
                  different days. Island stays are great for luxury or seclusion.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Which island has the best snorkeling?
                </h3>
                <p className="text-gray-700">
                  Hook Island has some of the best fringing reefs, particularly at Nara Inlet and
                  Butterfly Bay. Langford Island is also excellent. For outer reef snorkeling, tours
                  go beyond the islands to the Great Barrier Reef.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore the Islands?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Book your island adventure and discover the beauty of the Whitsundays
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              View Island Tours
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors">
              Compare Resorts
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}