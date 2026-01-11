import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-hero1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from- transparent via -transparent to gray-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl text-white text-center">
            <h1 className="font-heading text-7xl font-bold mb-4 drop-shadow-2xl">
              About the Whitsundays
            </h1>
            <p className="font-body text-3xl text-white mb-8 drop-shadow-lg">
              Australia's tropical paradise in the heart of the Great Barrier Reef
            </p>
            <p className="font-body text-xl text-white drop-shadow-lg">
              74 pristine islands, crystal-clear waters, and world-class sailing await you
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p className="font-body text-xl text-gray-700 leading-relaxed">
              The Whitsunday Islands are a collection of 74 tropical islands located in the heart
              of the Great Barrier Reef. With pristine beaches, crystal-clear waters, and
              world-class sailing, the Whitsundays offer an unforgettable Australian experience.
              Most islands are uninhabited national parks, preserving the natural beauty that makes
              this region one of the world's most spectacular destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Location & Geography */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-12 text-center">
              Location & Geography
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="font-body text-gray-700 mb-6 leading-relaxed">
                  Nestled off the central coast of Queensland, the Whitsundays sit perfectly
                  between Brisbane and Cairns, making them an accessible tropical escape from
                  anywhere in Australia or the world.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">📍</span>
                    <div>
                      <span className="font-heading font-semibold text-gray-900">Location:</span>
                      <span className="font-body text-gray-700"> 900km north of Brisbane, 630km south of Cairns</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🏝️</span>
                    <div>
                      <span className="font-heading font-semibold text-gray-900">Islands:</span>
                      <span className="font-body text-gray-700"> 74 islands, mostly uninhabited national parks</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🌊</span>
                    <div>
                      <span className="font-heading font-semibold text-gray-900">Marine Park:</span>
                      <span className="font-body text-gray-700"> Part of the Great Barrier Reef Marine Park</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🏖️</span>
                    <div>
                      <span className="font-heading font-semibold text-gray-900">Gateway:</span>
                      <span className="font-body text-gray-700"> Airlie Beach on the mainland</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-blue-600 p-8 rounded-2xl shadow-lg text-white">
                <h3 className="font-heading text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="border-b border-white/20 pb-4">
                    <div className="font-body text-sm text-white/80">Total Area</div>
                    <div className="font-heading text-2xl font-bold">309 km²</div>
                  </div>
                  <div className="border-b border-white/20 pb-4">
                    <div className="font-body text-sm text-white/80">Largest Island</div>
                    <div className="font-heading text-2xl font-bold">Whitsunday Island</div>
                    <div className="font-body text-sm text-white/90">109 km²</div>
                  </div>
                  <div className="border-b border-white/20 pb-4">
                    <div className="font-body text-sm text-white/80">Population</div>
                    <div className="font-heading text-2xl font-bold">~5,000</div>
                    <div className="font-body text-sm text-white/90">Airlie Beach mainland</div>
                  </div>
                  <div className="pb-4">
                    <div className="font-body text-sm text-white/80">Time Zone</div>
                    <div className="font-heading text-2xl font-bold">AEST (UTC+10)</div>
                    <div className="font-body text-sm text-white/90">No daylight saving</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Climate & Weather */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4 text-center">
              Climate & Weather
            </h2>
            <p className="font-body text-center text-gray-600 mb-12 text-lg">
              Tropical climate with warm temperatures year-round
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Summer */}
              <div className="bg-white border-2 border-orange-500 rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">☀️</div>
                <h3 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                  Summer (Dec - Feb)
                </h3>
                <div className="space-y-4 font-body text-gray-700">
                  <div>
                    <div className="font-heading font-semibold text-gray-800">Temperature</div>
                    <div>24°C - 31°C (75°F - 88°F)</div>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-gray-800">Water Temperature</div>
                    <div>26°C - 29°C (79°F - 84°F)</div>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-gray-800">Conditions</div>
                    <div>Hot, humid, occasional afternoon storms</div>
                  </div>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg text-sm">
                    <strong>⚠️ Stinger Season:</strong> Marine stingers present November-May. Wear protective stinger suits when swimming.
                  </div>
                </div>
              </div>

              {/* Winter */}
              <div className="bg-white border-2 border-cyan-500 rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">🌤️</div>
                <h3 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                  Winter (Jun - Aug)
                </h3>
                <div className="space-y-4 font-body text-gray-700">
                  <div>
                    <div className="font-heading font-semibold text-gray-800">Temperature</div>
                    <div>16°C - 25°C (61°F - 77°F)</div>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-gray-800">Water Temperature</div>
                    <div>21°C - 24°C (70°F - 75°F)</div>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-gray-800">Conditions</div>
                    <div>Mild, dry, low humidity, perfect sailing</div>
                  </div>
                  <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-lg text-sm">
                    <strong>🏆 Peak Season:</strong> Most popular time to visit. Perfect weather, calm seas, ideal for all activities. Book early!
                  </div>
                </div>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-10 text-white shadow-xl">
              <h3 className="font-heading text-3xl font-bold mb-6 text-center">When to Visit</h3>
              <p className="font-body text-xl mb-8 text-center text-white/90">
                The Whitsundays are beautiful year-round, but each season offers something unique
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="font-heading font-bold text-xl mb-3">🏆 Peak (Jun-Aug)</div>
                  <div className="font-body text-sm text-white/90">
                    Perfect weather, calm seas, ideal sailing conditions. Most expensive but worth it. Book 2-3 months ahead!
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="font-heading font-bold text-xl mb-3">💰 Value (Apr-May, Sep-Nov)</div>
                  <div className="font-body text-sm text-white/90">
                    Shoulder season with excellent weather, fewer crowds, and better prices. My personal favorite time!
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="font-heading font-bold text-xl mb-3">🌴 Tropical (Dec-Mar)</div>
                  <div className="font-body text-sm text-white/90">
                    Warm waters, lowest prices, lush landscapes. Afternoon showers and stinger suits required for swimming.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Here */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-12 text-center">
              Getting Here
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-b-4 border-orange-500">
                <div className="text-6xl mb-4">✈️</div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">By Air</h3>
                <p className="font-body text-gray-700 mb-4 leading-relaxed">
                  Fly direct to Hamilton Island (HTI) or Whitsunday Coast Airport (PPP) at Proserpine.
                  Direct flights from Sydney, Melbourne, and Brisbane.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-sm font-body text-gray-700">
                    <strong>From Brisbane:</strong> ~1.5 hours<br />
                    <strong>From Sydney:</strong> ~2.5 hours<br />
                    <strong>From Melbourne:</strong> ~3 hours
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-b-4 border-blue-600">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">By Road</h3>
                <p className="font-body text-gray-700 mb-4 leading-relaxed">
                  Scenic coastal drive along the Bruce Highway through Queensland's tropical regions.
                  Perfect road trip opportunity!
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm font-body text-gray-700">
                    <strong>From Brisbane:</strong> ~11 hours (1,100km)<br />
                    <strong>From Cairns:</strong> ~7 hours (650km)<br />
                    <strong>From Mackay:</strong> ~2 hours (150km)
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-b-4 border-cyan-500">
                <div className="text-6xl mb-4">🚂</div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">By Train</h3>
                <p className="font-body text-gray-700 mb-4 leading-relaxed">
                  Take the Queensland Rail Spirit of Queensland to Proserpine, then bus or taxi to
                  Airlie Beach (25 minutes).
                </p>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <div className="text-sm font-body text-gray-700">
                    <strong>From Brisbane:</strong> ~11 hours overnight<br />
                    <strong>From Cairns:</strong> ~8 hours<br />
                    <strong>Scenic coastal journey</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Getting Around:</h4>
              <p className="font-body text-gray-700 text-sm">
                Once you arrive, most activities are boat-based. Airlie Beach is walkable, but rental cars
                are useful for exploring the mainland. Hamilton Island uses golf buggies—no cars allowed!
                Ferry services connect Airlie Beach to Hamilton Island and Daydream Island.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Aboriginal Heritage Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-8 text-center">
              Aboriginal Heritage
            </h2>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border-l-4 border-orange-500">
              <p className="font-body text-gray-700 leading-relaxed mb-4">
                The Whitsunday Islands are the traditional lands of the Ngaro people (also known as the
                Gia and Juru people), who have lived in this region for thousands of years. The Ngaro were
                seafaring people who traveled between the mainland and islands in bark canoes.
              </p>
              <p className="font-body text-gray-700 leading-relaxed mb-4">
                Evidence of their rich history can still be found throughout the islands, including rock art,
                stone arrangements, and midden sites. The name "Whitsunday" comes from Captain Cook's 1770
                voyage, though he mistakenly thought he'd passed through the islands on Whit Sunday (he was
                actually a day off due to crossing the International Date Line).
              </p>
              <p className="font-body text-gray-700 leading-relaxed italic">
                When visiting the islands, please respect Aboriginal heritage sites and follow Leave No Trace
                principles to help preserve these culturally significant places for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marine Life Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-12 text-center">
              Marine Life & Conservation
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  What You'll See
                </h3>
                <div className="space-y-3 font-body text-gray-700">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🐢</span>
                    <div><strong>Sea Turtles:</strong> Green and Hawksbill turtles common year-round</div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🐋</span>
                    <div><strong>Humpback Whales:</strong> Migrate through June-September</div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🐠</span>
                    <div><strong>Tropical Fish:</strong> 1,500+ species of reef fish</div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🦈</span>
                    <div><strong>Reef Sharks:</strong> Whitetip and blacktip reef sharks (harmless)</div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🐙</span>
                    <div><strong>Giant Clams:</strong> Some over 100 years old</div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🪸</span>
                    <div><strong>Coral:</strong> 400+ species of hard and soft corals</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-lg text-white">
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Great Barrier Reef Marine Park
                </h3>
                <p className="font-body mb-4">
                  The Whitsundays are part of the Great Barrier Reef Marine Park, a UNESCO World Heritage
                  Site and one of the seven natural wonders of the world.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                  <div className="font-heading font-bold mb-2">By the Numbers:</div>
                  <ul className="font-body text-sm space-y-1">
                    <li>• 344,400 km² total area</li>
                    <li>• 2,900 individual reefs</li>
                    <li>• 900 islands</li>
                    <li>• Visible from space</li>
                  </ul>
                </div>
                <p className="font-body text-sm italic">
                  Marine park fees ($6.50/day) help fund conservation efforts and protect this incredible
                  ecosystem for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Explore?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start planning your Whitsundays adventure today
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/things-to-do"
              className="bg-white text-orange-500 px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Explore Activities
            </Link>
            <Link
              href="/islands"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl"
            >
              Discover the Islands
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
