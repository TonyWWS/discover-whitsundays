import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ScenicFlightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-700/50 to-blue-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl text-white text-center">
            <h1 className="font-heading text-7xl font-bold mb-6">
              Scenic Flights
            </h1>
            <p className="font-body text-2xl mb-4 leading-relaxed">
              See the Whitsundays from above—the only way to truly appreciate the scale and beauty
            </p>
            <p className="font-body text-lg opacity-90">
              From helicopters to seaplanes, experience the iconic aerial views of Heart Reef, 
              Whitehaven Beach, and the 74 islands scattered across turquoise waters.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-8 rounded-lg mb-12">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-4">
              ✈️ Why Fly? The Whitsundays From Above
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              Living in Airlie Beach, I've watched countless people return from scenic flights absolutely 
              blown away. Here's why: the Whitsundays' most iconic features—the swirling sands of Hill Inlet, 
              the heart shape of Heart Reef, the contrast between deep ocean blue and shallow turquoise—can 
              only be truly appreciated from the air.
            </p>
            <p className="font-body text-gray-700 leading-relaxed">
              Every photo you've seen of the Whitsundays that made you want to come here? It was taken from 
              a scenic flight. This is where those Instagram shots come from. If you're only doing one splurge 
              activity, make it this.
            </p>
          </div>

          {/* Flight Type Comparison */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8">
              Helicopter vs Seaplane: What's the Difference?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border-2 border-orange-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                    🚁
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-800">Helicopters</h3>
                </div>
                <ul className="space-y-3 font-body text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span><strong>More maneuverable</strong> — can hover, circle back, fly lower</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span><strong>Better photo opportunities</strong> — pilot positions for shots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span><strong>Can land on Whitehaven Beach</strong> — some tours include beach time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span><strong>Smaller groups</strong> — usually 2-6 passengers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span><strong>Guaranteed window seat</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✗</span>
                    <span>More expensive ($549-$799)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-cyan-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                    ✈️
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-800">Seaplanes</h3>
                </div>
                <ul className="space-y-3 font-body text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">✓</span>
                    <span><strong>Smoother ride</strong> — like a regular plane, less turbulence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">✓</span>
                    <span><strong>Longer flights possible</strong> — can go further out to reefs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">✓</span>
                    <span><strong>Can land on water</strong> — unique takeoff/landing experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">✓</span>
                    <span><strong>More affordable</strong> — $450-$550 range</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">✗</span>
                    <span>Fixed flight path (can't circle back as easily)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-2">✗</span>
                    <span>Larger groups (middle seat possible)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-heading font-bold text-gray-800 mb-2">💡 My Honest Recommendation:</h4>
              <p className="font-body text-gray-700">
                If you're splurging anyway, go helicopter. The ability to hover over Heart Reef, circle back 
                for that perfect Hill Inlet shot, and potentially land on Whitehaven Beach is worth the extra 
                cost. But if budget is tight, seaplanes still deliver the iconic views—you'll still get 
                your Instagram photos.
              </p>
            </div>
          </div>

          {/* Top Flight Options */}
          <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8">
            Top Scenic Flight Options
          </h2>

          {/* Flight 1: Heart Reef Helicopter Scenic */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-pink-500">
            <div 
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-pink-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-pink-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    BEST VALUE
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Heart Reef Helicopter Scenic</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-800">$549 - $699</div>
                  <div className="text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-800">60 Minutes</div>
                  <div className="text-gray-600">Full hour in the air</div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700"><strong>Operators:</strong> Hamilton Island Air, Helireef, Airlie Beach Helicopters</p>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Pure scenic flight with no stops—maximum flying time for your money. This is the sweet spot: 
                you see everything (Heart Reef, Hill Inlet, Whitehaven, outer reefs) but spend the full 60 minutes 
                in the air. Best value for getting those iconic aerial shots without the beach landing premium.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✈️ Flight Route:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Depart Airlie Beach or Hamilton Island</li>
                    <li>• Fly over 74 Whitsunday Islands</li>
                    <li>• Heart Reef (hover and circle for photos)</li>
                    <li>• Hardy Reef and outer Great Barrier Reef</li>
                    <li>• Hill Inlet with swirling sands</li>
                    <li>• Whitehaven Beach's 7km stretch</li>
                    <li>• Return via scenic island route</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">🎯 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Photographers (more time = more shots)</li>
                    <li>• Those doing Whitehaven separately by boat</li>
                    <li>• Aerial view enthusiasts</li>
                    <li>• Best value helicopter option</li>
                    <li>• Time-efficient (no beach stop)</li>
                    <li>• Guaranteed window seat</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">⭐ Why This Is Best Value:</h4>
                <p className="font-body text-gray-700 text-sm">
                  If you're visiting Whitehaven Beach separately (via boat tour), this flight-only option 
                  is smarter. You get the same aerial views as the $799 beach landing tour but save $150-250. 
                  The full hour in the air means more photo opportunities and better coverage of Heart Reef 
                  and the outer reefs.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Book morning flights (8-10am) for best light. The pilot will circle Heart Reef multiple 
                  times so everyone gets perfect photos. Sit on the left side for best Heart Reef views 
                  on the outbound leg. Weight restrictions typically 110-120kg per person.
                </p>
              </div>

              <button className="w-full bg-pink-500 text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-pink-600 transition-colors">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Flight 2: Helicopter + Beach Landing */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-orange-500">
            <div 
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1512100356997-56e79f00b742?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-orange-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    MOST POPULAR
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Helicopter + Whitehaven Landing</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-800">$549 - $799</div>
                  <div className="text-gray-600">per person (from Airlie)</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-800">2 Hours Total</div>
                  <div className="text-gray-600">60-min flight + beach time</div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700"><strong>Operators:</strong> Hamilton Island Air, Helireef, Airlie Beach Helicopters | <strong>Note:</strong> Prices higher from Hamilton Island ($799-$1,200) but include resort transfers</p>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                The ultimate Whitsundays experience. Fly over Heart Reef, Hill Inlet, and the outer reef, 
                then land directly on Whitehaven Beach for 50-75 minutes of exclusive beach time with 
                champagne. This is the "once in a lifetime" option that combines the best aerial views 
                with pristine beach relaxation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✈️ What's Included:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 60-minute scenic helicopter flight</li>
                    <li>• Beach landing on Whitehaven (50-75 min)</li>
                    <li>• Sparkling wine and water on beach</li>
                    <li>• Pilot narration and local insights</li>
                    <li>• Guaranteed window seat (R44 helicopter)</li>
                    <li>• Small group (2-6 passengers max)</li>
                    <li>• Photo stops and hover time at Heart Reef</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">📸 Photo Opportunities:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Heart Reef from above (THE iconic shot)</li>
                    <li>• Hill Inlet swirling sands</li>
                    <li>• Whitehaven Beach panorama</li>
                    <li>• Outer Great Barrier Reef formations</li>
                    <li>• 74 Whitsunday Islands spread</li>
                    <li>• Beach photos with helicopter backdrop</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">🎯 Perfect For:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Proposals, honeymoons, milestone birthdays and anniversaries, photographers, bucket list 
                  travelers. This is the full Whitsundays experience in one tour—aerial views + exclusive 
                  beach time. You're essentially doing a scenic flight AND visiting Whitehaven, all in 2 hours.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Bring your own picnic or snacks from island takeaway—you're welcome to enjoy them on the 
                  beach (especially Hamilton Island guests). Wear flat shoes or thongs—no high heels. The 
                  beach landing is tide-dependent, so occasionally tours substitute with another beautiful location.
                </p>
              </div>

              <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-orange-600 transition-colors">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Flight 3: Seaplane + Whitehaven Landing */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-cyan-500">
            <div 
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-cyan-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    SMOOTH RIDE
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Seaplane + Whitehaven Landing</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-800">$450 - $550</div>
                  <div className="text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-800">2.5 Hours</div>
                  <div className="text-gray-600">50-min flight + beach time</div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700"><strong>Operator:</strong> Hamilton Island Air (departing Hamilton Island)</p>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Fly in a classic seaplane over the Whitsundays with a unique water takeoff and landing. 
                Smoother ride than a helicopter, larger windows for photography, and 75 minutes on Whitehaven 
                Beach. The water landing at Whitehaven is an experience in itself—incredibly cool!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✈️ What You'll See:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Heart Reef and Hardy Reef area</li>
                    <li>• Whitehaven Beach and Hill Inlet</li>
                    <li>• 74 Whitsunday Islands from above</li>
                    <li>• Great Barrier Reef formations</li>
                    <li>• Turquoise lagoons and coral reefs</li>
                    <li>• 75 minutes on Whitehaven Beach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Those sensitive to turbulence</li>
                    <li>• Families with kids</li>
                    <li>• Budget-conscious travelers</li>
                    <li>• Photography (large windows)</li>
                    <li>• Unique seaplane experience</li>
                    <li>• Combining aerial + beach in one tour</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Good to Know:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Seaplanes hold more passengers (7-10) than helicopters, so you might not get a window seat. 
                  Request a window seat when booking and arrive early for check-in. The trade-off is a smoother 
                  ride and lower price. The takeoff and landing on water is genuinely thrilling—kids especially 
                  love it.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">⭐ Why Choose Seaplane:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Saves $100-250 compared to helicopter beach landing, but you still get the main attractions: 
                  Heart Reef views, Whitehaven Beach time, and champagne on the sand. The seaplane experience 
                  itself is unique—many people prefer it to helicopters for the smooth ride and nostalgia factor.
                </p>
              </div>

              <button className="w-full bg-cyan-500 text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-cyan-600 transition-colors">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Flight 4: Whitehaven Helicopter (Short) */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-blue-600">
            <div 
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-blue-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    BUDGET FRIENDLY
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Whitehaven Helicopter (Short)</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-800">$350 - $450</div>
                  <div className="text-gray-600">per person</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-800">30-45 Minutes</div>
                  <div className="text-gray-600">Scenic flight only</div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700"><strong>Operators:</strong> Helireef, Airlie Beach Helicopters</p>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Short but sweet helicopter flight focused on the Whitsundays' greatest hits: Hill Inlet 
                and Whitehaven Beach. Doesn't go out to Heart Reef (too far for 30 minutes), but you still 
                get the iconic aerial views of the swirling sands. Best budget option for a helicopter experience.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✈️ What's Included:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 30-45 minute helicopter flight</li>
                    <li>• Hill Inlet swirling sands (overhead)</li>
                    <li>• Whitehaven Beach full 7km length</li>
                    <li>• Whitsunday Island coastline</li>
                    <li>• Nearby islands and fringing reefs</li>
                    <li>• Guaranteed window seat</li>
                    <li>• Small group (2-6 passengers)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">⚠️ Doesn't Include:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Heart Reef (too far for 30 min flight)</li>
                    <li>• Outer Great Barrier Reef</li>
                    <li>• Beach landing</li>
                    <li>• Extended photo time over reefs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">🎯 My Honest Take:</h4>
                <p className="font-body text-gray-700 text-sm">
                  If you're spending $350-450, I'd recommend trying to stretch to the $549-699 Heart Reef 
                  60-minute flight if possible. The difference is $100-250 but you get double the flight time 
                  and Heart Reef (the MAIN aerial attraction). That said, if budget is firm, this still gives 
                  you those postcard-perfect Hill Inlet shots and the helicopter thrill.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">👍 When This Makes Sense:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Perfect if: (1) You're on a tight budget but want a helicopter ride, (2) You're short on time, 
                  (3) You're nervous about flying and want a shorter commitment, (4) Hill Inlet is your main goal. 
                  You'll still get amazing photos and the helicopter experience.
                </p>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-blue-700 transition-colors">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Flight 5: Journey to the Heart (Ultra-Luxury) */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-purple-600">
            <div 
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-purple-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    BUCKET LIST LUXURY
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Journey to the Heart</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-800">$1,200 - $1,500</div>
                  <div className="text-gray-600">per person (min 2 pax)</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-800">3 Hours</div>
                  <div className="text-gray-600">Flight + pontoon experience</div>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700"><strong>Operators:</strong> Hamilton Island Air / Heart Reef Helicopters | <strong>Exclusivity:</strong> Maximum 6 guests per tour on private pontoon</p>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                The ultimate Great Barrier Reef experience. Fly by helicopter to a private pontoon moored 
                inside Heart Reef Lagoon—accessible only to your small group (max 6 guests). Snorkel around 
                the actual heart-shaped reef, take a glass-bottom boat tour, and enjoy beverages in one of 
                the world's most exclusive locations.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">✨ What's Included:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 60-minute helicopter scenic flight</li>
                    <li>• Landing on exclusive Heart Island Pontoon</li>
                    <li>• 90 minutes on private pontoon</li>
                    <li>• Glass-bottom boat tour around Heart Reef</li>
                    <li>• Snorkeling in Heart Reef Lagoon</li>
                    <li>• All snorkel gear provided</li>
                    <li>• Beverages and refreshments</li>
                    <li>• Maximum 6 guests (ultra-exclusive)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">🎯 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Once-in-a-lifetime splurge</li>
                    <li>• Honeymoons and proposals</li>
                    <li>• Milestone celebrations</li>
                    <li>• Serious divers/snorkelers</li>
                    <li>• Those wanting ultimate exclusivity</li>
                    <li>• Combining aerial + underwater Heart Reef</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">⭐ Why This Is Special:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Heart Reef is a protected site—you can't swim IN the heart, but this tour gets you as close 
                  as legally possible. The private pontoon sits inside the lagoon surrounding Heart Reef, giving 
                  you exclusive access that no boat tour can provide. You're literally floating above coral gardens 
                  in the middle of the Great Barrier Reef, 75km from shore, with only 5 other people.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💰 Is It Worth $1,200-$1,500?</h4>
                <p className="font-body text-gray-700 text-sm">
                  Honestly? If you can afford it, yes. This is truly a once-in-a-lifetime experience. Most people 
                  only ever see Heart Reef from the air—this lets you snorkel right next to it. The exclusivity 
                  (max 6 guests), the glass-bottom boat tour, and the location make this worth the premium. 
                  This is helicopter + reef snorkel + Heart Reef all in one. Book well in advance—limited departures.
                </p>
              </div>

              <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-purple-700 transition-colors">
                Check Availability & Book
              </button>
            </div>
          </div>

          {/* Quick Comparison Table */}
          <div className="mb-16 overflow-hidden rounded-xl border-2 border-gray-200">
            <h2 className="font-heading text-2xl font-bold text-gray-800 bg-gray-50 p-6">
              Quick Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4 font-heading font-bold text-gray-800">Flight Option</th>
                    <th className="text-left p-4 font-heading font-bold text-gray-800">Price</th>
                    <th className="text-left p-4 font-heading font-bold text-gray-800">Duration</th>
                    <th className="text-left p-4 font-heading font-bold text-gray-800">Heart Reef?</th>
                    <th className="text-left p-4 font-heading font-bold text-gray-800">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-bold text-gray-900">Heart Reef Helicopter Scenic</td>
                    <td className="p-4">$549-699</td>
                    <td className="p-4">60 min</td>
                    <td className="p-4">✅ Yes</td>
                    <td className="p-4">Best value</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-bold text-gray-900">Helicopter + Beach Landing</td>
                    <td className="p-4">$549-799</td>
                    <td className="p-4">2 hours</td>
                    <td className="p-4">✅ Yes</td>
                    <td className="p-4">Most popular</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-bold text-gray-900">Seaplane + Beach Landing</td>
                    <td className="p-4">$450-550</td>
                    <td className="p-4">2.5 hours</td>
                    <td className="p-4">✅ Yes</td>
                    <td className="p-4">Smooth ride</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-bold text-gray-900">Whitehaven Helicopter (Short)</td>
                    <td className="p-4">$350-450</td>
                    <td className="p-4">30-45 min</td>
                    <td className="p-4">❌ No</td>
                    <td className="p-4">Budget option</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-bold text-gray-900">Journey to the Heart</td>
                    <td className="p-4">$1,200-1,500</td>
                    <td className="p-4">3 hours</td>
                    <td className="p-4">✅ + Snorkel</td>
                    <td className="p-4">Bucket list luxury</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Booking Tips */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl mb-16">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-6">
              ✈️ Booking Tips from a Local
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 font-body text-gray-700">
              <div>
                <h3 className="font-heading font-bold text-gray-800 mb-3">📅 Best Time to Fly:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Morning (8-10am):</strong> Best light for photography, less wind, calmer air</li>
                  <li>• <strong>Late afternoon (3-5pm):</strong> Golden hour lighting, fewer crowds</li>
                  <li>• <strong>Avoid midday:</strong> Harsh overhead sun, more turbulence</li>
                  <li>• <strong>Peak season (June-Sept):</strong> Book 2-4 weeks ahead, perfect weather</li>
                  <li>• <strong>Shoulder season (April-May, Oct-Nov):</strong> Good deals, still great weather</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-bold text-gray-800 mb-3">💡 Pro Tips:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Request window seat when booking (helicopters automatically guarantee this)</li>
                  <li>• Wear dark clothing (reduces glare in windows for photos)</li>
                  <li>• Charge your camera/phone fully + bring backup battery</li>
                  <li>• Take motion sickness tablets if prone (especially for helicopters)</li>
                  <li>• Weight restrictions typically 110-120kg per person</li>
                  <li>• Bring sunglasses—it's bright up there!</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-bold text-gray-800 mb-3">📸 Photography Tips:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Shoot through the window, not at an angle (reduces reflections)</li>
                  <li>• Use fast shutter speed (1/500s+) to avoid blur from vibration</li>
                  <li>• Turn off flash</li>
                  <li>• Clean your camera lens before boarding</li>
                  <li>• Take LOTS of photos—you can sort later</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-bold text-gray-800 mb-3">⚠️ Important to Know:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Flights are weather-dependent (they'll reschedule if unsafe)</li>
                  <li>• Arrive 15-20 minutes early for check-in and weight balance</li>
                  <li>• Noise-canceling headsets provided for communication</li>
                  <li>• Pregnant passengers need doctor's clearance</li>
                  <li>• Children welcome (minimum age varies by operator, usually 2+)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  Is it worth the money?
                </h3>
                <p className="font-body text-gray-700">
                  Absolutely. Living here, I've watched countless visitors return from scenic flights saying 
                  it was the highlight of their trip. The Whitsundays from above is a completely different 
                  experience—Heart Reef only makes sense from the air, and the scale and color of Whitehaven 
                  Beach and Hill Inlet can't be appreciated from ground level. If you only splurge on one thing, 
                  make it this.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  Which operator should I book with?
                </h3>
                <p className="font-body text-gray-700">
                  All operators mentioned are reputable with excellent safety records. <strong>Airlie Beach 
                  Helicopters</strong> gets rave reviews for personalized service (pilot Justin is frequently 
                  mentioned!). <strong>Hamilton Island Air</strong> is the largest with most departures. 
                  <strong>Heart Reef Helicopters</strong> is premium if you want the private pontoon experience. 
                  Choose based on departure location (Airlie vs Hamilton) and budget.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  Can I see Heart Reef from boat tours?
                </h3>
                <p className="font-body text-gray-700">
                  No. Heart Reef is 75km offshore from Airlie Beach—too far for day boat tours. The only way 
                  to see Heart Reef is by scenic flight (helicopter, seaplane, or fixed-wing aircraft) or 
                  overnight liveaboard diving trip. This is why scenic flights are so valuable—they're the only 
                  practical way most visitors can see this iconic reef formation and get those famous photos.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  What if the weather is bad?
                </h3>
                <p className="font-body text-gray-700">
                  Flights are weather-dependent. If conditions aren't safe, operators will reschedule at no 
                  extra cost or provide a full refund. Morning flights have better weather reliability. During 
                  peak season (June-August), weather is typically stable with clear skies most days. The wet 
                  season (December-March) has more variable weather, but still plenty of good flying days.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  I'm nervous about flying—should I still do it?
                </h3>
                <p className="font-body text-gray-700">
                  Helicopters can be bumpy (especially on windy days), but seaplanes are much smoother—like 
                  a regular airplane. If you're nervous, consider the seaplane option or the shortest helicopter 
                  flight (20-30 minutes) to test the waters. Pilots are experienced and provide calming narration 
                  throughout. The views quickly distract you from any nervousness. Many nervous flyers say it 
                  was totally worth pushing through the fear.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  Which side should I sit on for best photos?
                </h3>
                <p className="font-body text-gray-700">
                  Helicopters guarantee window seats, so everyone gets good views. For Heart Reef on the outbound 
                  leg, sit on the <strong>left side</strong>. The pilot will circle so everyone gets photos anyway. 
                  For seaplanes, request a window seat when booking and arrive early for check-in. Don't stress too 
                  much—pilots know the best photo spots and position the aircraft accordingly.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to See the Whitsundays from Above?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your scenic flight and experience the views that define the Whitsundays
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/things-to-do"
              className="bg-white text-orange-500 px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Compare All Tours
            </Link>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl"
            >
              Get Help Booking
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
