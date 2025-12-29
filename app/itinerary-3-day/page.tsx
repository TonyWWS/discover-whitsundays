import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ThreeDayItineraryPage() {
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
            3-Day Whitsundays Itinerary
          </h1>
          <p className="text-2xl text-white drop-shadow-lg">
            The Perfect First-Time Visitor's Guide
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Three days is the perfect amount of time to experience the highlights of the Whitsundays
              without feeling rushed. This itinerary covers the must-see attractions, best tours, and
              gives you time to relax and soak in the tropical paradise.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">This Itinerary Includes:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Whitehaven Beach & Hill Inlet</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Great Barrier Reef snorkeling</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Sailing experience</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Airlie Beach exploration</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Local dining & sunset views</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Time to relax and enjoy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-bold text-gray-900 mb-1">Budget</div>
              <div className="text-sm text-gray-600">$600-900 per person</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">⭐</div>
              <div className="font-bold text-gray-900 mb-1">Best For</div>
              <div className="text-sm text-gray-600">First-time visitors, couples</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">📅</div>
              <div className="font-bold text-gray-900 mb-1">Pace</div>
              <div className="text-sm text-gray-600">Balanced - active but relaxed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Day 1 */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-6">
                1
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Arrival & Airlie Beach</h2>
                <p className="text-gray-600 text-lg">Settle in and explore the town</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Morning */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold mr-4">
                    Morning
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Arrive & Check In</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Fly into Whitsunday Coast Airport (Proserpine)</strong> or Hamilton Island,
                    then transfer to Airlie Beach (about 25 minutes from Proserpine, or 30-minute ferry
                    from Hamilton).
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong>Accommodation Recommendation:</strong>
                    <p className="mt-2">
                      Stay in Airlie Beach for all 3 nights. Choose accommodation near the main street
                      or waterfront for convenience. Mid-range hotels ($150-250/night) offer the best
                      value with pools and modern amenities.
                    </p>
                    <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Find Accommodation
                    </button>
                  </div>
                  <p>
                    <strong>After checking in:</strong> Take a walk through town to get your bearings.
                    Pick up any supplies you need (reef-safe sunscreen, hat, water bottle).
                  </p>
                </div>
              </div>

              {/* Afternoon */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full font-bold mr-4">
                    Afternoon
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Airlie Beach Lagoon</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Head to the <strong>Airlie Beach Lagoon</strong> - a free, saltwater swimming pool
                    on the waterfront. Perfect for a refreshing swim after traveling. Surrounded by BBQ
                    areas and parkland with ocean views.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <strong>What to Know:</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Free entry and lifeguard supervised</li>
                        <li>• Open 6am-7pm (extended in summer)</li>
                        <li>• Showers and change rooms available</li>
                        <li>• Surrounded by cafes and restaurants</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <strong>Alternative:</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Stroll along the Bicentennial Walkway</li>
                        <li>• Visit the marina and watch boats</li>
                        <li>• Browse tour operators for tomorrow</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evening */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-bold mr-4">
                    Evening
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sunset & Dinner</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Watch sunset from the marina</strong> or waterfront - the Whitsundays are
                    famous for spectacular sunsets over the islands.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong>Dinner Recommendations:</strong>
                    <ul className="mt-2 space-y-2">
                      <li>• <strong>Fish D'vine:</strong> Waterfront dining, fresh seafood, rum distillery</li>
                      <li>• <strong>Coca Chu:</strong> Asian fusion, popular with locals</li>
                      <li>• <strong>Déjà Vu:</strong> Modern Australian, marina views</li>
                      <li>• <strong>Budget option:</strong> Airlie Beach Hotel bistro or main street takeaway</li>
                    </ul>
                  </div>
                  <p>
                    <strong>After dinner:</strong> Take it easy - you have an early start tomorrow for
                    Whitehaven Beach! Get a good night's sleep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day 2 */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-6">
                2
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Whitehaven Beach Full Day Tour</h2>
                <p className="text-gray-600 text-lg">The highlight of your trip!</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">🏖️ Why This is Day 2:</h3>
              <p className="mb-4">
                Whitehaven Beach is THE must-see attraction, so we schedule it early in your trip.
                If weather is poor, most tours will reschedule you for Day 3 at no charge.
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
                Book Whitehaven Beach Tour
              </button>
            </div>

            <div className="space-y-6">
              {/* Early Morning */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold mr-4">
                    6:30-7:30am
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Pickup & Departure</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Most tours depart between 7:30-8:30am with pickup from your accommodation.
                    Grab breakfast beforehand or bring something quick.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <strong>💡 What to Bring:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Swimwear, towel, change of clothes</li>
                      <li>• Reef-safe sunscreen and hat</li>
                      <li>• Camera or phone (waterproof case recommended)</li>
                      <li>• Light jacket for boat ride</li>
                      <li>• Water bottle (refills usually provided)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Morning */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full font-bold mr-4">
                    8:30-11:00am
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sail to Whitehaven Beach</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Enjoy the scenic boat ride through the islands. Most tours provide morning tea
                    and information about the region's history and marine life.
                  </p>
                  <p>
                    <strong>First stop:</strong> Usually Hill Inlet Lookout (weather permitting).
                    This 15-20 minute uphill walk rewards you with the famous swirling sands view -
                    one of the most photographed spots in Australia.
                  </p>
                </div>
              </div>

              {/* Midday */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full font-bold mr-4">
                    11:00am-2:00pm
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Whitehaven Beach Time</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Approximately 2-3 hours on Whitehaven Beach itself. This is your time to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li>• <strong>Swim</strong> in the crystal-clear waters</li>
                        <li>• <strong>Walk</strong> along the 7km beach</li>
                        <li>• <strong>Photography</strong> - the sand is incredible</li>
                        <li>• <strong>Relax</strong> and soak it in</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <strong>Lunch on the beach:</strong>
                      <p className="mt-2 text-sm">
                        Most tours provide a buffet lunch. Find a shady spot, enjoy your meal,
                        and take in the views. No facilities here - it's pristine nature!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Afternoon */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full font-bold mr-4">
                    2:00-4:00pm
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Snorkeling Stop</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    After Whitehaven, most tours include a snorkeling stop. Popular spots include
                    Langford Island or a fringing reef around Hook Island.
                  </p>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <strong>Snorkeling Experience:</strong>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li>• Equipment provided (mask, snorkel, fins, stinger suit)</li>
                      <li>• See colorful coral, tropical fish, and sometimes turtles</li>
                      <li>• Guides point out highlights and help beginners</li>
                      <li>• Usually 45-60 minutes in the water</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Return */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-bold mr-4">
                    4:00-5:30pm
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Return to Airlie Beach</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Relax on the return journey, sharing photos and experiences with other travelers.
                    Tours typically arrive back at Airlie Beach between 5:00-5:30pm.
                  </p>
                </div>
              </div>

              {/* Evening */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-bold mr-4">
                    Evening
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Relax & Dine</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    You'll be tired after a full day on the water! Keep the evening low-key:
                  </p>
                  <ul className="space-y-2">
                    <li>• Shower and rest at your accommodation</li>
                    <li>• Casual dinner on the main street</li>
                    <li>• Early night - you have snorkeling the reef tomorrow!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day 3 */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-6">
                3
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Great Barrier Reef Snorkeling</h2>
                <p className="text-gray-600 text-lg">Experience the reef & depart</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">🤿 Outer Reef vs Inner Reefs:</h3>
              <p className="mb-4">
                Day 2 covered inner reefs around the islands. Today we recommend an outer Great Barrier
                Reef tour for more impressive coral and marine life. Choose a tour that visits Hardy Reef
                or other outer reef locations.
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors">
                Book Reef Tour
              </button>
            </div>

            <div className="space-y-6">
              {/* Morning */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold mr-4">
                    Morning
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Reef Snorkeling Tour</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Similar early start (7:30-8:00am departure). Outer reef tours are typically full-day
                    experiences returning around 4:00-5:00pm.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong>What to Expect:</strong>
                    <ul className="mt-2 space-y-2">
                      <li>• 2-3 snorkeling sessions at different reef sites</li>
                      <li>• Lunch provided on board</li>
                      <li>• Marine biologist presentations</li>
                      <li>• See diverse coral, tropical fish, possible turtle sightings</li>
                      <li>• Some tours offer diving for certified divers (extra cost)</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                    <strong>⚠️ Important:</strong>
                    <p className="mt-2 text-sm">
                      Book this tour for the morning, or choose a half-day option if you have an
                      afternoon/evening flight. Check-out times are typically 10:00am, so you may
                      need to store luggage at your accommodation or a tour office.
                    </p>
                  </div>
                </div>
              </div>

              {/* Afternoon */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full font-bold mr-4">
                    Afternoon
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Departure</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Option 1 - Evening/Night Flight:</strong> If you've done a full-day reef
                    tour, you'll return around 4:00-5:00pm. Grab dinner in town and transfer to the
                    airport for your flight home.
                  </p>
                  <p>
                    <strong>Option 2 - Afternoon Flight:</strong> Skip the reef tour or do a half-day
                    version. Spend the morning relaxing, perhaps a final swim at the lagoon, lunch in
                    town, then head to the airport.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong>Alternative Day 3 Activities:</strong>
                    <p className="mt-2 mb-2">If you prefer a more relaxed final day:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Morning scenic flight over Heart Reef and the islands</li>
                      <li>• Visit Cedar Creek Falls (30 mins from Airlie)</li>
                      <li>• Kayak rental and explore the coastline</li>
                      <li>• Shopping for souvenirs on the main street</li>
                      <li>• Spa treatment before departure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Breakdown */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Budget Breakdown
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Budget Version */}
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">💰 Budget ($600-750)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between pb-2 border-b">
                    <span>Accommodation (3 nights)</span>
                    <span className="font-semibold">$180-240</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Whitehaven Beach tour</span>
                    <span className="font-semibold">$130-180</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Reef snorkeling tour</span>
                    <span className="font-semibold">$150-200</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Meals (simple/self-catering)</span>
                    <span className="font-semibold">$90-120</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Airport transfers</span>
                    <span className="font-semibold">$50</span>
                  </div>
                  <div className="flex justify-between pt-3 text-lg font-bold">
                    <span>Total per person</span>
                    <span>$600-790</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Hostels, budget tours, self-catering, limited dining out
                </p>
              </div>

              {/* Mid-Range Version */}
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🏨 Mid-Range ($850-1100)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between pb-2 border-b">
                    <span>Accommodation (3 nights)</span>
                    <span className="font-semibold">$450-600</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Whitehaven Beach tour</span>
                    <span className="font-semibold">$180-220</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Reef snorkeling tour</span>
                    <span className="font-semibold">$200-250</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Meals (restaurants)</span>
                    <span className="font-semibold">$180-240</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span>Extras & activities</span>
                    <span className="font-semibold">$100</span>
                  </div>
                  <div className="flex justify-between pt-3 text-lg font-bold">
                    <span>Total per person</span>
                    <span>$1110-1410</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Comfortable hotel, premium tours, dining out, some extras
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">💡 Money-Saving Tips:</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
                <li>• Book tours online in advance for discounts</li>
                <li>• Stay in apartments with kitchen to save on meals</li>
                <li>• Shoulder season (Apr-May, Sep-Nov) = cheaper prices</li>
                <li>• Combo packages often cheaper than booking separately</li>
                <li>• Free lagoon replaces need for resort pool access</li>
                <li>• BYO to restaurants (many allow it with corkage fee)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Customization Options */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Customize This Itinerary
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏖️ More Beach Time?</h3>
                <p className="text-gray-700 mb-4">
                  Skip the Day 3 reef tour. Spend the morning at Airlie Beach Lagoon or take a
                  half-day scenic flight instead.
                </p>
                <p className="text-sm text-gray-600">Good for: Relaxed travelers, afternoon flights</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⛵ Replace with Sailing?</h3>
                <p className="text-gray-700 mb-4">
                  Swap Days 2-3 for a 2-day/1-night sailing trip. Includes Whitehaven, snorkeling,
                  accommodation, and meals.
                </p>
                <p className="text-sm text-gray-600">Good for: Adventure seekers, social travelers</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚁 Add Scenic Flight?</h3>
                <p className="text-gray-700 mb-4">
                  Add a morning scenic flight over Heart Reef and the islands. Spectacular views
                  from above. 30-60 minutes.
                </p>
                <p className="text-sm text-gray-600">Good for: Photography, special occasions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips & Important Info */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Tips for Success
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">✓ Do This</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Book tours 2-4 weeks ahead (peak season)</li>
                    <li>• Use reef-safe sunscreen (chemical sunscreens harm coral)</li>
                    <li>• Bring seasickness tablets if prone to motion sickness</li>
                    <li>• Take a reusable water bottle - reduce plastic waste</li>
                    <li>• Download offline maps before heading out</li>
                    <li>• Check weather forecasts and tide times</li>
                    <li>• Take more photos than you think you need!</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">📅 Best Time</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Jun-Aug:</strong> Peak season, best weather, book early</li>
                    <li>• <strong>Apr-May & Sep-Nov:</strong> Great weather, fewer crowds</li>
                    <li>• <strong>Dec-Mar:</strong> Hot, humid, stinger season, cheaper</li>
                    <li>• Hill Inlet best 2 hours either side of high tide</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">✗ Avoid This</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Don't overpack activities - leave time to relax</li>
                    <li>• Don't touch coral or marine life when snorkeling</li>
                    <li>• Don't take sand, shells, or coral from beaches (illegal!)</li>
                    <li>• Don't forget to reapply sunscreen every 2 hours</li>
                    <li>• Don't book two big tours on consecutive days if prone to fatigue</li>
                    <li>• Don't expect mobile phone coverage on islands</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">⚠️ Important Notes</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Stinger suits required Nov-May (provided on tours)</li>
                    <li>• Tours can be rescheduled due to weather</li>
                    <li>• Check-out is typically 10am - plan Day 3 accordingly</li>
                    <li>• Most tours include lunch but bring extra snacks</li>
                    <li>• Credit cards accepted everywhere, but have some cash</li>
                  </ul>
                </div>
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
                  Is 3 days enough for the Whitsundays?
                </h3>
                <p className="text-gray-700">
                  Yes! Three days lets you experience the main highlights without feeling rushed. You'll
                  see Whitehaven Beach, snorkel the reef, and have time to enjoy Airlie Beach. If you have
                  more time, 5-7 days allows for a sailing trip or island resort stay.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Should I book tours before arriving?
                </h3>
                <p className="text-gray-700">
                  Yes, especially in peak season (June-August). Popular tours sell out days or weeks ahead.
                  Book at least 2-4 weeks in advance. You can book last-minute in shoulder/low season, but
                  you'll have more limited options.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What if the weather is bad?
                </h3>
                <p className="text-gray-700">
                  Most reputable operators will reschedule you at no charge if weather is unsafe. Rain
                  doesn't necessarily cancel tours - check with operators. This is why we schedule Whitehaven
                  Beach on Day 2, giving you Day 3 as a backup.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I do this itinerary if I can't swim?
                </h3>
                <p className="text-gray-700">
                  Yes! Whitehaven Beach is shallow and calm - you can enjoy it without swimming. For
                  snorkeling, many tours provide flotation devices and assistance. Alternatively, glass-bottom
                  boat tours let you see the reef without entering the water.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is this suitable for families with kids?
                </h3>
                <p className="text-gray-700">
                  Absolutely! This itinerary works well for families. Most tours are family-friendly, though
                  some have minimum age requirements (typically 4-6 years). Choose tours specifically marketed
                  as family-friendly for the best experience with young children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience This Itinerary?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Start booking your Whitsundays adventure today
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Book Whitehaven Tour
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors">
              Find Accommodation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              View All Itineraries
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}