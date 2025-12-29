import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Cannon.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            About the Whitsundays
          </h1>
          <p className="text-2xl text-white drop-shadow-lg">
            Australia's tropical paradise in the heart of the Great Barrier Reef
          </p>
        </div>
      </div>

      {/* Main Content - White Background */}
      <div className="bg-white">

        {/* Intro Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              The Whitsunday Islands are a collection of 74 tropical islands located in the heart
              of the Great Barrier Reef. With pristine beaches, crystal-clear waters, and
              world-class sailing, the Whitsundays offer an unforgettable Australian experience.
            </p>
          </div>
        </div>

        {/* Location Section - Light Background */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Location & Geography
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Nestled off the central coast of Queensland, the Whitsundays sit perfectly
                    between Brisbane and Cairns, making them an accessible tropical escape.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">📍</span>
                      <div>
                        <span className="font-semibold text-gray-900">Location:</span>
                        <span className="text-gray-700"> 900km north of Brisbane, 630km south of Cairns</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">🏝️</span>
                      <div>
                        <span className="font-semibold text-gray-900">Islands:</span>
                        <span className="text-gray-700"> 74 islands, mostly uninhabited national parks</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">🌊</span>
                      <div>
                        <span className="font-semibold text-gray-900">Marine Park:</span>
                        <span className="text-gray-700"> Part of the Great Barrier Reef Marine Park</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 font-semibold mr-2">🏖️</span>
                      <div>
                        <span className="font-semibold text-gray-900">Gateway:</span>
                        <span className="text-gray-700"> Airlie Beach on the mainland</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <div className="text-sm text-gray-600">Total Area</div>
                      <div className="text-lg font-semibold text-gray-900">309 km²</div>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <div className="text-sm text-gray-600">Largest Island</div>
                      <div className="text-lg font-semibold text-gray-900">Whitsunday Island (109 km²)</div>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <div className="text-sm text-gray-600">Population</div>
                      <div className="text-lg font-semibold text-gray-900">~5,000 (Airlie Beach)</div>
                    </div>
                    <div className="pb-3">
                      <div className="text-sm text-gray-600">Time Zone</div>
                      <div className="text-lg font-semibold text-gray-900">AEST (UTC+10)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Climate Section - White Background */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Climate & Weather
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Tropical climate with warm temperatures year-round
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {/* Summer */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
                  <div className="text-4xl mb-3">☀️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Summer (Dec - Feb)
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <div className="font-semibold">Temperature</div>
                      <div>24°C - 31°C (75°F - 88°F)</div>
                    </div>
                    <div>
                      <div className="font-semibold">Water Temperature</div>
                      <div>26°C - 29°C (79°F - 84°F)</div>
                    </div>
                    <div>
                      <div className="font-semibold">Conditions</div>
                      <div>Hot, humid, occasional afternoon storms</div>
                    </div>
                    <div className="bg-orange-200/50 p-3 rounded-lg text-sm">
                      <strong>Note:</strong> Stinger season - wear protective suits when swimming
                    </div>
                  </div>
                </div>

                {/* Winter */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-xl">
                  <div className="text-4xl mb-3">🌤️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Winter (Jun - Aug)
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <div className="font-semibold">Temperature</div>
                      <div>16°C - 25°C (61°F - 77°F)</div>
                    </div>
                    <div>
                      <div className="font-semibold">Water Temperature</div>
                      <div>21°C - 24°C (70°F - 75°F)</div>
                    </div>
                    <div>
                      <div className="font-semibold">Conditions</div>
                      <div>Mild, dry, low humidity, perfect sailing</div>
                    </div>
                    <div className="bg-blue-200/50 p-3 rounded-lg text-sm">
                      <strong>Peak Season:</strong> Most popular time to visit
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Time to Visit */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-10 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">When to Visit</h3>
                <p className="text-xl mb-6">
                  The Whitsundays are beautiful year-round, but each season offers something unique
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="font-bold text-lg mb-2">🏆 Peak (Jun-Aug)</div>
                    <div className="text-sm">Perfect weather, calm seas, ideal sailing. Book early!</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="font-bold text-lg mb-2">💰 Value (Apr-May, Sep-Nov)</div>
                    <div className="text-sm">Great weather, fewer crowds, better prices</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="font-bold text-lg mb-2">🌴 Tropical (Dec-Mar)</div>
                    <div className="text-sm">Warm waters, lowest prices, afternoon showers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting There Section - Light Background */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Getting Here
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">✈️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">By Air</h3>
                  <p className="text-gray-700 mb-4">
                    Fly to Hamilton Island (HTI) or Whitsunday Coast Airport (PPP) with connections from major cities.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">
                    Flight time from Brisbane: ~1.5 hours
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">🚗</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">By Road</h3>
                  <p className="text-gray-700 mb-4">
                    Scenic drive along the Bruce Highway through Queensland's coastal regions.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">
                    Drive from Brisbane: ~11 hours
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">🚂</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">By Train</h3>
                  <p className="text-gray-700 mb-4">
                    Take the Queensland Rail Tilt Train to Proserpine, then bus to Airlie Beach.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">
                    Scenic coastal journey
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Explore?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Start planning your Whitsundays adventure today
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                  Plan Your Trip
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                  View Islands
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}