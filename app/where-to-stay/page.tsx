import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Where to Stay in the Whitsundays
          </h1>
          <p className="text-2xl text-white drop-shadow-lg">
            From budget-friendly Airlie Beach to luxury island resorts
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Choosing where to stay in the Whitsundays depends on your budget, travel style, and what
            you want to experience. From the vibrant mainland town of Airlie Beach to secluded island
            resorts, there's accommodation to suit every traveler.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🏖️</div>
              <h3 className="font-bold text-gray-900 mb-2">Airlie Beach</h3>
              <p className="text-gray-700 text-sm">Budget-friendly, nightlife, tour departure point</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">🏝️</div>
              <h3 className="font-bold text-gray-900 mb-2">Island Resorts</h3>
              <p className="text-gray-700 text-sm">Luxury, seclusion, all-inclusive options</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-2">⛵</div>
              <h3 className="font-bold text-gray-900 mb-2">Overnight Sailing</h3>
              <p className="text-gray-700 text-sm">Adventure, unique experience, great value</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Decision Guide */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Quick Decision Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Choose Airlie Beach if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Want to save money on accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Like nightlife, restaurants, and shopping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Plan to take multiple day tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Prefer more dining and entertainment options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Want easy access to the mainland</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Choose Island Resort if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Want a luxury, all-inclusive experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Prefer seclusion and privacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Don't mind spending more on accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Want to wake up on the water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Looking for a honeymoon/special occasion stay</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Airlie Beach Accommodation */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Airlie Beach Accommodation
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
              The mainland hub offers the best value and variety. All tours depart from here,
              and you'll find plenty of restaurants, bars, and shops.
            </p>

            {/* Budget */}
            <div className="mb-12">
              <div className="bg-green-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">💰</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Budget ($50-120/night)</h3>
                    <p className="text-gray-600">Hostels, budget hotels, and basic motels</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-xl text-gray-900 mb-3">What to Expect</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Clean, basic rooms with essential amenities</li>
                      <li>• Shared or private bathroom options</li>
                      <li>• Central location near the main street</li>
                      <li>• Pool and communal areas (most properties)</li>
                      <li>• Great for meeting other travelers</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-xl text-gray-900 mb-3">Best For</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Backpackers and solo travelers</li>
                      <li>• Budget-conscious couples</li>
                      <li>• People who spend most time on tours</li>
                      <li>• Social atmosphere seekers</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        View Budget Options
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid-Range */}
            <div className="mb-12">
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🏨</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Mid-Range ($120-250/night)</h3>
                    <p className="text-gray-600">Comfortable hotels and modern apartments</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-xl text-gray-900 mb-3">What to Expect</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Private balconies with views</li>
                      <li>• Modern amenities and comfortable beds</li>
                      <li>• Swimming pools and BBQ areas</li>
                      <li>• Kitchen facilities (apartments)</li>
                      <li>• Some include breakfast</li>
                      <li>• Walking distance to marina and lagoon</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-xl text-gray-900 mb-3">Best For</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Couples seeking comfort</li>
                      <li>• Families wanting space</li>
                      <li>• Longer stays (self-catering)</li>
                      <li>• Balance of comfort and value</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        View Mid-Range Hotels
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury Airlie Beach */}
            <div className="mb-12">
              <div className="bg-purple-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">⭐</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Upscale Airlie Beach ($250-400/night)</h3>
                    <p className="text-gray-600">Premium waterfront properties</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-xl text-gray-900 mb-3">What to Expect</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Waterfront or marina views</li>
                      <li>• Spacious apartments with full kitchens</li>
                      <li>• Premium finishes and furnishings</li>
                      <li>• Resort-style pools and facilities</li>
                      <li>• Concierge and tour booking services</li>
                      <li>• Close to everything but quieter locations</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-xl text-gray-900 mb-3">Best For</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Luxury travelers on mainland</li>
                      <li>• Extended stays with flexibility</li>
                      <li>• Those wanting resort feel without island prices</li>
                      <li>• Groups or families wanting space</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        View Luxury Properties
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Airlie Beach Neighborhoods */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Areas in Airlie Beach</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Main Street Area</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Heart of the action - restaurants, bars, shops, and nightlife all within walking distance.
                  </p>
                  <div className="text-sm">
                    <div className="text-green-600">✓ Most convenient</div>
                    <div className="text-green-600">✓ Walking to everything</div>
                    <div className="text-red-600">✗ Can be noisy at night</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Waterfront/Marina</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Beautiful views, upscale dining, quieter than main street but still central.
                  </p>
                  <div className="text-sm">
                    <div className="text-green-600">✓ Water views</div>
                    <div className="text-green-600">✓ More peaceful</div>
                    <div className="text-green-600">✓ Premium feel</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Cannonvale</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Residential area 5 minutes from Airlie - supermarket, quieter, good for families.
                  </p>
                  <div className="text-sm">
                    <div className="text-green-600">✓ Better value</div>
                    <div className="text-green-600">✓ Family-friendly</div>
                    <div className="text-red-600">✗ Need car/transport</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Island Resorts */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Island Resorts
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
              Wake up surrounded by turquoise waters. Island resorts offer seclusion, luxury,
              and an all-inclusive tropical experience.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Hamilton Island */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                  <span className="text-6xl">🏝️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Hamilton Island</h3>
                  <p className="text-gray-700 mb-4">
                    Most developed island with its own airport, marina village, multiple restaurants,
                    and activities. Family-friendly with resort, apartments, and luxury options.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <div><strong>Price:</strong> $300-1000+/night</div>
                    <div><strong>Best for:</strong> Families, convenience</div>
                    <div><strong>Access:</strong> Direct flights or ferry</div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    View Hamilton Island
                  </button>
                </div>
              </div>

              {/* Daydream Island */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-300 flex items-center justify-center">
                  <span className="text-6xl">🌴</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Daydream Island</h3>
                  <p className="text-gray-700 mb-4">
                    All-inclusive resort perfect for families and couples. Living Reef, water sports,
                    kids club, and multiple pools. Recently renovated with modern facilities.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <div><strong>Price:</strong> $400-700/night</div>
                    <div><strong>Best for:</strong> All-inclusive seekers</div>
                    <div><strong>Access:</strong> 30-min ferry from Airlie</div>
                  </div>
                  <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    View Daydream Island
                  </button>
                </div>
              </div>

              {/* Hayman Island */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center">
                  <span className="text-6xl">👑</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Hayman Island</h3>
                  <p className="text-gray-700 mb-4">
                    Ultra-luxury resort at the northern end of the Whitsundays. InterContinental
                    property with impeccable service, fine dining, and exclusive experiences.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    <div><strong>Price:</strong> $800-2000+/night</div>
                    <div><strong>Best for:</strong> Luxury, honeymoons</div>
                    <div><strong>Access:</strong> Helicopter or private launch</div>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    View Hayman Island
                  </button>
                </div>
              </div>
            </div>

            {/* Other Island Options */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Island Options</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Long Island</h4>
                  <p className="text-gray-700 text-sm">
                    Budget-friendly island resort with national park walks and peaceful beaches.
                    Great for nature lovers. (~$150-250/night)
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Paradise Bay Eco Resort</h4>
                  <p className="text-gray-700 text-sm">
                    Eco-friendly glamping experience on Long Island. Solar-powered, secluded,
                    and intimate. (~$200-350/night)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overnight Sailing */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Overnight Sailing Adventures
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
              A unique accommodation option - sleep on a yacht or catamaran while exploring
              multiple islands and snorkel sites.
            </p>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-8 rounded-xl mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>All meals and snacks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Snorkeling equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Visit to Whitehaven Beach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Multiple snorkel sites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Experienced crew</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Sleeping quarters on boat</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Trip Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold mb-1">Duration Options:</div>
                      <div className="text-blue-100">2 days/1 night or 3 days/2 nights</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Accommodation:</div>
                      <div className="text-blue-100">Shared cabins (2-4 people) or private cabins</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Price Range:</div>
                      <div className="text-blue-100">$400-700 total (includes everything!)</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Best For:</div>
                      <div className="text-blue-100">Adventure, meeting people, value</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/30">
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  Compare Sailing Trips
                </button>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">💡 Value Tip</h4>
              <p className="text-gray-700">
                A 2-night sailing trip (~$600) includes accommodation, all meals, tours, and activities.
                Compare this to 2 nights in a mid-range hotel ($400) + meals ($200) + Whitehaven tour ($180)
                + snorkel tour ($150) = $930. Sailing is actually better value AND a unique experience!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Accommodation Comparison
            </h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Option</th>
                      <th className="px-6 py-4 text-left">Price Range</th>
                      <th className="px-6 py-4 text-left">Best For</th>
                      <th className="px-6 py-4 text-left">Pros</th>
                      <th className="px-6 py-4 text-left">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold">Airlie Beach Budget</td>
                      <td className="px-6 py-4">$50-120</td>
                      <td className="px-6 py-4">Backpackers, budget travelers</td>
                      <td className="px-6 py-4 text-sm">Central, social, affordable</td>
                      <td className="px-6 py-4 text-sm">Basic facilities, can be noisy</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Airlie Beach Mid-Range</td>
                      <td className="px-6 py-4">$120-250</td>
                      <td className="px-6 py-4">Couples, families</td>
                      <td className="px-6 py-4 text-sm">Comfortable, good facilities, central</td>
                      <td className="px-6 py-4 text-sm">Not on an island</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Hamilton Island</td>
                      <td className="px-6 py-4">$300-1000+</td>
                      <td className="px-6 py-4">Families, convenience seekers</td>
                      <td className="px-6 py-4 text-sm">Island location, lots of amenities</td>
                      <td className="px-6 py-4 text-sm">Expensive, can feel commercial</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Daydream Island</td>
                      <td className="px-6 py-4">$400-700</td>
                      <td className="px-6 py-4">All-inclusive seekers</td>
                      <td className="px-6 py-4 text-sm">All-inclusive, family-friendly</td>
                      <td className="px-6 py-4 text-sm">Expensive, limited island to explore</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Overnight Sailing</td>
                      <td className="px-6 py-4">$400-700 total</td>
                      <td className="px-6 py-4">Adventure lovers, budget-conscious</td>
                      <td className="px-6 py-4 text-sm">Unique experience, great value, social</td>
                      <td className="px-6 py-4 text-sm">Shared spaces, not luxury</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Hayman Island</td>
                      <td className="px-6 py-4">$800-2000+</td>
                      <td className="px-6 py-4">Luxury travelers, honeymoons</td>
                      <td className="px-6 py-4 text-sm">Ultimate luxury, exclusive, pristine</td>
                      <td className="px-6 py-4 text-sm">Very expensive, requires transfers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Tips */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Booking Tips & Advice
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">When to Book</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <strong>Peak Season (June-August):</strong> Book 2-3 months ahead. Prices are highest but weather is best.
                  </div>
                  <div>
                    <strong>Shoulder Season (Apr-May, Sep-Nov):</strong> Book 4-6 weeks ahead. Best value with great weather.
                  </div>
                  <div>
                    <strong>Summer (Dec-Mar):</strong> Can book 2-4 weeks ahead. Lowest prices but stinger season and possible rain.
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Money-Saving Tips</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Book direct with properties for best rates and packages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Consider apartments with kitchens to save on dining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Airlie Beach + day tours often cheaper than island resorts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Overnight sailing includes accommodation + activities + meals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">→</span>
                    <span>Stay longer (5+ nights) for better rates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Combination Strategies</h3>
                <p className="text-gray-700 mb-4">
                  Many travelers combine accommodation types for the best experience:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 2 nights Airlie Beach + 2 nights island resort</li>
                  <li>• 3 nights Airlie Beach + 2-night sailing trip</li>
                  <li>• 1 night Airlie + 3 nights island + 1 night Airlie</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Know Before Booking</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>All tours depart from Airlie Beach (not islands)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Island transfers add $50-200 to your costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Airlie Beach has free lagoon for swimming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Most island resorts don't include meals in base price</span>
                  </li>
                </ul>
              </div>
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
                  Is it better to stay on the mainland or an island?
                </h3>
                <p className="text-gray-700">
                  Mainland (Airlie Beach) is better for budget, convenience, and variety of dining/activities.
                  Islands are better for luxury, seclusion, and an all-in-one resort experience. Many visitors
                  do both - a few nights on mainland and a few on an island.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How many nights should I stay?
                </h3>
                <p className="text-gray-700">
                  Minimum 3 nights to experience the highlights (Whitehaven Beach, snorkeling, sailing).
                  5-7 nights is ideal for a relaxed pace with multiple tours, island visits, and downtime.
                  2 nights works if you're time-limited but will feel rushed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do I need a car in Airlie Beach?
                </h3>
                <p className="text-gray-700">
                  Not essential. Airlie Beach is walkable, and tours pick up from accommodations. However,
                  a car is useful for: exploring nearby areas (Cedar Creek Falls, Conway National Park),
                  grocery shopping, or staying in Cannonvale. Airport transfers and taxis are readily available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Are island resorts all-inclusive?
                </h3>
                <p className="text-gray-700">
                  Most are NOT all-inclusive. Daydream Island offers all-inclusive packages. Hamilton Island
                  and others typically charge separately for meals, activities, and extras. Always check
                  what's included when comparing prices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I visit Whitehaven Beach from any accommodation?
                </h3>
                <p className="text-gray-700">
                  Yes! All day tours depart from Airlie Beach. If you're on an island, you'll need to take
                  a ferry back to Airlie Beach to join tours (adds time and cost). Some island resorts offer
                  their own Whitehaven trips, but they're often more expensive.
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
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Compare prices and find the perfect accommodation for your Whitsundays adventure
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Search Airlie Beach Hotels
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors">
              Compare Island Resorts
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}