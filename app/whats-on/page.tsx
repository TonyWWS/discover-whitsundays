import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WhatsOnPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('images/whats-on-hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            What's On in the Whitsundays
          </h1>
          <p className="text-2xl text-white drop-shadow-lg">
            Events, festivals, and seasonal highlights
          </p>
        </div>
      </div>

      {/* Last Updated */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
            <p className="text-gray-800">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
              <span className="ml-4 text-sm text-gray-600">Check back regularly for the latest events and updates</span>
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            The Whitsundays come alive throughout the year with world-class sailing events, music festivals,
            community celebrations, and natural seasonal spectacles. From competitive regattas to local markets,
            there's always something happening in paradise.
          </p>
        </div>
      </div>

      {/* Major Annual Events */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Major Annual Events
            </h2>

            <div className="space-y-8">
              {/* Airlie Beach Race Week */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold">AUG</div>
                      <div className="text-lg">Annual</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Airlie Beach Race Week</h3>
                    <p className="text-gray-700 mb-4">
                      One of Australia's premier sailing regattas, attracting hundreds of yachts and thousands
                      of sailors from around the world. The week features competitive racing, social events,
                      live entertainment, and a vibrant festival atmosphere throughout Airlie Beach.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-900">When:</strong> Mid-August (usually 2nd week)
                      </div>
                      <div>
                        <strong className="text-gray-900">Duration:</strong> 7 days
                      </div>
                      <div>
                        <strong className="text-gray-900">Location:</strong> Airlie Beach & surrounding waters
                      </div>
                      <div>
                        <strong className="text-gray-900">Best for:</strong> Sailing enthusiasts, party atmosphere
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Visitor Tip:</strong> Book accommodation well in advance (6+ months). Expect
                        higher prices and a very busy town during this week. Great atmosphere even if you're
                        not sailing!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Airlie Beach Music Festival */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-purple-600 text-white p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold">NOV</div>
                      <div className="text-lg">Annual</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Airlie Beach Music Festival</h3>
                    <p className="text-gray-700 mb-4">
                      A celebration of music featuring local and national artists across multiple venues in
                      Airlie Beach. The festival showcases diverse genres from rock and pop to acoustic and
                      indie, with both free and ticketed events.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-900">When:</strong> November (dates vary annually)
                      </div>
                      <div>
                        <strong className="text-gray-900">Duration:</strong> Weekend
                      </div>
                      <div>
                        <strong className="text-gray-900">Location:</strong> Multiple venues in Airlie Beach
                      </div>
                      <div>
                        <strong className="text-gray-900">Best for:</strong> Music lovers, laid-back vibe
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hamilton Island Race Week */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold">AUG</div>
                      <div className="text-lg">Annual</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Hamilton Island Race Week</h3>
                    <p className="text-gray-700 mb-4">
                      Australia's largest offshore keelboat regatta, held in the stunning waters around Hamilton
                      Island. This prestigious event combines world-class racing with luxury hospitality and
                      spectacular scenery.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-900">When:</strong> Mid-Late August
                      </div>
                      <div>
                        <strong className="text-gray-900">Duration:</strong> 7 days
                      </div>
                      <div>
                        <strong className="text-gray-900">Location:</strong> Hamilton Island
                      </div>
                      <div>
                        <strong className="text-gray-900">Best for:</strong> Upscale sailing event, spectators welcome
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Visitor Tip:</strong> Even if you're not participating, you can watch the races
                        from various vantage points on Hamilton Island. Accommodation books out months in advance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Whitsunday Reef Festival */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-cyan-600 text-white p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold">SEP</div>
                      <div className="text-lg">Annual</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Whitsunday Reef Festival</h3>
                    <p className="text-gray-700 mb-4">
                      A community celebration of the Great Barrier Reef and marine environment. Features
                      educational activities, environmental workshops, markets, live entertainment, and
                      family-friendly events focused on reef conservation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-900">When:</strong> September
                      </div>
                      <div>
                        <strong className="text-gray-900">Duration:</strong> Weekend
                      </div>
                      <div>
                        <strong className="text-gray-900">Location:</strong> Airlie Beach foreshore
                      </div>
                      <div>
                        <strong className="text-gray-900">Best for:</strong> Families, eco-conscious travelers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Highlights */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Seasonal Highlights
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Whale Watching Season */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-8 rounded-xl">
                <div className="text-5xl mb-4">🐋</div>
                <h3 className="text-2xl font-bold mb-3">Whale Watching Season</h3>
                <p className="mb-4">
                  Humpback whales migrate through the Whitsundays on their journey from Antarctica to tropical
                  breeding grounds. This is one of the best times to see these magnificent creatures.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>When:</strong> July - September (peak August)</div>
                  <div><strong>Where:</strong> Tours depart from Airlie Beach</div>
                  <div><strong>Experience:</strong> Boat tours, potential sightings from shore</div>
                </div>
              </div>

              {/* Turtle Nesting Season */}
              <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-8 rounded-xl">
                <div className="text-5xl mb-4">🐢</div>
                <h3 className="text-2xl font-bold mb-3">Turtle Nesting Season</h3>
                <p className="mb-4">
                  Green and loggerhead turtles nest on Whitsunday beaches during summer months. While nesting
                  sites are protected, you may encounter turtles while snorkeling.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>When:</strong> November - March</div>
                  <div><strong>Where:</strong> Various Whitsunday Island beaches</div>
                  <div><strong>Note:</strong> Nesting sites are protected - observe from a distance</div>
                </div>
              </div>

              {/* Stinger Season */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-8 rounded-xl">
                <div className="text-5xl mb-4">⚠️</div>
                <h3 className="text-2xl font-bold mb-3">Stinger Season</h3>
                <p className="mb-4">
                  Marine stingers (jellyfish) are present in the waters during summer months. All tour
                  operators provide stinger suits, and it's recommended to wear them when swimming.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>When:</strong> November - May</div>
                  <div><strong>Safety:</strong> Always wear a stinger suit when provided</div>
                  <div><strong>Note:</strong> Tours still operate normally with precautions</div>
                </div>
              </div>

              {/* Peak Sailing Season */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-xl">
                <div className="text-5xl mb-4">⛵</div>
                <h3 className="text-2xl font-bold mb-3">Peak Sailing Season</h3>
                <p className="mb-4">
                  Winter months bring ideal sailing conditions with consistent southeast trade winds, calm
                  seas, and perfect weather. The busiest and most popular time for sailing tours.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>When:</strong> May - September</div>
                  <div><strong>Conditions:</strong> 15-20 knot winds, calm seas, sunny days</div>
                  <div><strong>Tip:</strong> Book sailing tours well in advance during this period</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Events */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Regular Events & Markets
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Airlie Beach Markets */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3">🛍️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Airlie Beach Markets</h3>
                <p className="text-gray-700 mb-4">
                  Local markets featuring handmade crafts, jewelry, art, clothing, and fresh produce.
                  Great for souvenirs and supporting local artisans.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>When:</strong> Every Saturday</div>
                  <div><strong>Time:</strong> 7:00am - 1:00pm</div>
                  <div><strong>Where:</strong> Lions Park, Airlie Beach</div>
                </div>
              </div>

              {/* Live Music */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3">🎸</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live Music Venues</h3>
                <p className="text-gray-700 mb-4">
                  Several venues in Airlie Beach host live music throughout the week. Check local pubs
                  and bars for current schedules.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>When:</strong> Multiple nights weekly</div>
                  <div><strong>Popular Venues:</strong> Airlie Beach Hotel, Mama Africa, local bars</div>
                  <div><strong>Style:</strong> Acoustic, rock, covers, DJs</div>
                </div>
              </div>

              {/* Sunset Sessions */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-3">🌅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sunset Celebrations</h3>
                <p className="text-gray-700 mb-4">
                  The Airlie Beach foreshore and marina come alive at sunset. Locals and visitors gather
                  to watch spectacular sunsets over the Whitsunday Islands.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>When:</strong> Every evening</div>
                  <div><strong>Best spots:</strong> Lagoon foreshore, marina, waterfront bars</div>
                  <div><strong>Free activity</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Planning Your Visit Around Events */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Planning Your Visit Around Events
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✓ Visit During Events If You:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Want a lively, festival atmosphere</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Are interested in sailing, music, or specific events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Don't mind crowds and higher prices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Book accommodation well in advance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Want to experience local culture and community</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Avoid Major Events If You:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Prefer quiet, relaxed holidays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Are on a tight budget (prices increase 30-50%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Booking last-minute (limited availability)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Want uncrowded beaches and tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Traveling with young children who need quiet time</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">💡 Local Tip</h4>
              <p className="text-gray-700">
                The shoulder months (April-May and September-November) offer the best of both worlds -
                occasional events and festivals without the extreme crowds and prices of peak season.
                You'll still get great weather and a good selection of activities and tours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Resources */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Stay Updated on Events
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Official Tourism Resources</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Tourism Whitsundays:</strong> Official destination marketing organization
                  </li>
                  <li>
                    <strong>Whitsunday Regional Council:</strong> Local government events calendar
                  </li>
                  <li>
                    <strong>Queensland Events:</strong> State-wide event listings
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Visitor Information Centre:</strong> Located in Airlie Beach
                  </li>
                  <li>
                    <strong>Local Facebook Groups:</strong> Community event announcements
                  </li>
                  <li>
                    <strong>Accommodation Concierge:</strong> Ask your hotel/resort about current events
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">
                Event dates and details can change. Always verify directly with event organizers before
                making travel plans around specific events.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Plan Your Whitsundays Adventure
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Whether you're timing your visit for a major event or seeking quieter months, we'll help
            you plan the perfect trip
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/itinerary-3-day"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
            >
              3-Day Itinerary
            </Link>
            <Link
              href="/where-to-stay"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors"
            >
              Where to Stay
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}