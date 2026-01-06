import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Things to Do in the Whitsundays
          </h1>
          <p className="font-['Inter'] text-xl md:text-2xl text-white/95 drop-shadow-lg max-w-3xl mx-auto">
            From sailing and snorkeling to scenic flights and island adventures
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Inter'] text-xl text-gray-700 leading-relaxed text-center mb-12">
            The Whitsundays offer endless activities for every type of traveler. Whether you're seeking
            adventure, relaxation, or wildlife encounters, this tropical paradise delivers unforgettable
            experiences surrounded by pristine nature and crystal-clear waters.
          </p>

          {/* Quick Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-b-4 border-[#FF6B6B] p-6 rounded-2xl shadow-xl">
              <div className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-gray-900 mb-2">Water Activities</div>
              <div className="font-['Inter'] text-sm text-gray-600">Sailing, snorkeling, diving, kayaking</div>
            </div>
            <div className="bg-white border-b-4 border-[#4ECDC4] p-6 rounded-2xl shadow-xl">
              <div className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-gray-900 mb-2">Island Adventures</div>
              <div className="font-['Inter'] text-sm text-gray-600">Beach visits, hiking, wildlife encounters</div>
            </div>
            <div className="bg-white border-b-4 border-[#FFE66D] p-6 rounded-2xl shadow-xl">
              <div className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-gray-900 mb-2">Aerial Experiences</div>
              <div className="font-['Inter'] text-sm text-gray-600">Scenic flights, helicopter tours</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sailing & Boat Tours */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sailing & Boat Tours
            </h2>
            <p className="font-['Inter'] text-xl text-gray-600 mb-12">
              Experience the islands from the water — the quintessential Whitsundays adventure
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Day Sailing Tours */}
              <div className="bg-white border-b-4 border-[#FF6B6B] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                  Day Sailing Tours
                </h3>
                <p className="font-['Inter'] text-gray-700 mb-6">
                  Full-day or half-day sailing trips to Whitehaven Beach, snorkel spots, and secluded bays.
                  Perfect for experiencing multiple locations in one day.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>6-8 hours on the water</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>Lunch and snacks included</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>Snorkeling equipment provided</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>From $130-220 per person</span>
                  </div>
                </div>
                <Link 
                  href="/whitehaven-tours"
                  className="block w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white py-3 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold hover:shadow-lg transition-all text-center"
                >
                  View Day Sailing Tours
                </Link>
              </div>

              {/* Overnight Sailing */}
              <div className="bg-white border-b-4 border-[#4ECDC4] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                  Overnight Sailing Trips
                </h3>
                <p className="font-['Inter'] text-gray-700 mb-6">
                  Multi-day adventures sleeping on board. Visit more remote locations, anchor in secluded
                  bays, and experience sunset and sunrise on the water.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>2-3 day options available</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>All meals and accommodation included</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Multiple snorkel sites and islands</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>From $540-1,075 per person</span>
                  </div>
                </div>
                <Link 
                  href="/overnight-sailing"
                  className="block w-full bg-gradient-to-r from-[#4ECDC4] to-[#6ED9D1] text-white py-3 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold hover:shadow-lg transition-all text-center"
                >
                  View Overnight Sailing
                </Link>
              </div>
            </div>

            {/* Why Sailing Callout */}
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-4">
                Why Sailing is Special Here
              </h3>
              <div className="grid md:grid-cols-2 gap-6 font-['Inter']">
                <p>
                  The Whitsundays are one of the world's premier sailing destinations. Calm, protected
                  waters, consistent winds, and 74 islands to explore make it perfect for both experienced
                  sailors and complete beginners.
                </p>
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

      {/* Snorkeling & Diving */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Snorkeling & Diving
            </h2>
            <p className="font-['Inter'] text-xl text-gray-600 mb-12">
              Explore the underwater wonders of the Great Barrier Reef
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Snorkeling */}
              <div className="bg-white border-b-4 border-[#4ECDC4] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                  Snorkeling Tours
                </h3>
                <p className="font-['Inter'] text-gray-700 mb-6">
                  Perfect for all ages and skill levels. Visit vibrant coral gardens and swim with tropical fish,
                  turtles, and rays in crystal-clear waters.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Multiple reef sites per tour</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>All equipment and instruction included</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Wetsuits and flotation aids provided</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Half-day or full-day options</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>From $120-200 per person</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl">
                  <p className="font-['Inter'] text-sm text-gray-700">
                    <strong>Best Spots:</strong> Hardy Reef, Bait Reef, Hook Island fringing reefs, and sheltered
                    lagoons around the islands.
                  </p>
                </div>
              </div>

              {/* Scuba Diving */}
              <div className="bg-white border-b-4 border-[#1E3A8A] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                  Scuba Diving
                </h3>
                <p className="font-['Inter'] text-gray-700 mb-6">
                  Dive deeper into the reef ecosystem. Introductory dives for beginners and certified dives
                  for experienced divers. Multi-day liveaboard options available.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#1E3A8A] mr-3 font-bold text-lg">•</span>
                    <span>Introductory dives (no certification needed)</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#1E3A8A] mr-3 font-bold text-lg">•</span>
                    <span>Certified dive trips to 30+ sites</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#1E3A8A] mr-3 font-bold text-lg">•</span>
                    <span>Full certification courses available</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#1E3A8A] mr-3 font-bold text-lg">•</span>
                    <span>Liveaboard trips (2-3 nights)</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#1E3A8A] mr-3 font-bold text-lg">•</span>
                    <span>From $180-450 per dive/day</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <p className="font-['Inter'] text-sm text-gray-700">
                    <strong>What You'll See:</strong> Manta rays, reef sharks, sea turtles, giant clams, coral
                    gardens, and hundreds of tropical fish species.
                  </p>
                </div>
              </div>
            </div>

            {/* Marine Life Callout */}
            <div className="mt-8 bg-gradient-to-r from-[#4ECDC4] to-[#6ED9D1] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-4">
                When to See Marine Life
              </h3>
              <div className="grid md:grid-cols-3 gap-6 font-['Inter']">
                <div>
                  <p className="font-bold mb-2">Turtles</p>
                  <p className="text-sm text-white/90">Year-round, especially at Hook Island and around coral bommies</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Whales</p>
                  <p className="text-sm text-white/90">July-September (humpback whale migration season)</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Manta Rays</p>
                  <p className="text-sm text-white/90">May-August at outer reef cleaning stations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenic Flights */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Scenic Flights
            </h2>
            <p className="font-['Inter'] text-xl text-gray-600 mb-12">
              See the Whitsundays from above — the famous Heart Reef and swirling sands of Whitehaven
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Helicopter */}
              <div className="bg-white border-b-4 border-[#FFE66D] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                  Helicopter Tours
                </h3>
                <p className="font-['Inter'] text-gray-700 mb-6">
                  Intimate flights with spectacular low-level views and the ability to hover over highlights.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>10-60 minute flights</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>Heart Reef, Whitehaven, Hill Inlet</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>From $315-1,995 per person</span>
                  </div>
                </div>
              </div>

              {/* Seaplane */}
              <div className="bg-white border-b-4 border-[#4ECDC4] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                  Seaplane Tours
                </h3>
                <p className="font-['Inter'] text-gray-700 mb-6">
                  Scenic water landings and beach stops. Combines aerial views with on-ground experiences.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Land on Whitehaven Beach</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Heart Reef flybys</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>From $609-909 per person</span>
                  </div>
                </div>
              </div>

              {/* Fixed-Wing */}
              <div className="bg-white border-b-4 border-[#FF6B6B] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                  Fixed-Wing Aircraft
                </h3>
                <p className="font-['Inter'] text-gray-700 mb-6">
                  Longer flights covering more area. Great for extended reef tours and reaching outer reefs.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>Extended reef coverage</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>Higher altitude for panoramic views</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>From $295-450 per person</span>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/scenic-flights"
              className="block w-full md:w-auto md:mx-auto md:max-w-md bg-gradient-to-r from-[#FFE66D] to-[#FFD93D] text-gray-900 py-4 rounded-xl font-['Plus_Jakarta_Sans'] font-bold hover:shadow-xl transition-all text-center text-lg"
            >
              Compare All Scenic Flights
            </Link>

            {/* Photographer's Tip */}
            <div className="mt-8 bg-white border-l-4 border-[#FFE66D] p-6 rounded-xl shadow-lg">
              <p className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                Photographer's Tip
              </p>
              <p className="font-['Inter'] text-gray-700 text-sm">
                Book morning flights (before 10am) for the best lighting and contrast. The swirling sands
                of Hill Inlet are most vivid during low tide. Helicopters offer better photo opportunities
                as they can hover and fly lower than planes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Island Hopping & Beaches */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Island Hopping & Beaches
            </h2>
            <p className="font-['Inter'] text-xl text-gray-600 mb-12">
              Explore pristine beaches and discover the unique character of each island
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Whitehaven Beach */}
              <div className="bg-white border-b-4 border-[#FFE66D] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                  Whitehaven Beach
                </h3>
                <p className="font-['Inter'] text-gray-700 mb-6">
                  The crown jewel of the Whitsundays. 7km of pure white silica sand that stays cool underfoot
                  and doesn't stick to your skin. Truly one of the world's most beautiful beaches.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>98% pure silica sand</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>Hill Inlet lookout with swirling sands</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>Multiple tour options available</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>Day trips from $130-300</span>
                  </div>
                </div>
                <Link 
                  href="/whitehaven-beach"
                  className="block w-full bg-gradient-to-r from-[#FFE66D] to-[#FFD93D] text-gray-900 py-3 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold hover:shadow-lg transition-all text-center"
                >
                  Learn More About Whitehaven
                </Link>
              </div>

              {/* Island Tours */}
              <div className="bg-white border-b-4 border-[#4ECDC4] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                  Island Day Trips
                </h3>
                <p className="font-['Inter'] text-gray-700 mb-6">
                  Visit multiple islands in one day. Popular destinations include Hamilton Island, Daydream
                  Island, and Hook Island for their unique features and facilities.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Visit 2-3 islands per tour</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Swimming, snorkeling, beach time</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Often combined with sailing tours</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>From $100-250 per person</span>
                  </div>
                </div>
                <Link 
                  href="/islands"
                  className="block w-full bg-gradient-to-r from-[#4ECDC4] to-[#6ED9D1] text-white py-3 rounded-xl font-['Plus_Jakarta_Sans'] font-semibold hover:shadow-lg transition-all text-center"
                >
                  Explore the Islands
                </Link>
              </div>
            </div>

            {/* Camping */}
            <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-4">
                Island Camping
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="font-['Inter']">
                  <p className="mb-4">
                    For the ultimate escape, several islands offer designated camping areas. Whitehaven Beach's
                    southern end and Hook Island's Maureen's Cove are popular spots.
                  </p>
                  <p className="text-sm text-white/90">
                    Permits required through Queensland Parks. Water taxis provide transfers. Bring all supplies.
                  </p>
                </div>
                <div className="font-['Inter']">
                  <p className="mb-4">
                    Wake up on a deserted beach, snorkel right from your campsite, and experience the islands
                    in complete solitude under the stars.
                  </p>
                  <p className="text-sm text-white/90">
                    Best from April-October. Book permits well in advance for peak season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Land Activities */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Land-Based Activities
            </h2>
            <p className="font-['Inter'] text-xl text-gray-600 mb-12">
              Hiking, wildlife, and exploring mainland attractions
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Hiking */}
              <div className="bg-white border-b-4 border-[#228B22] p-6 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  Hiking Trails
                </h3>
                <p className="font-['Inter'] text-gray-700 text-sm mb-4">
                  Conway National Park, Whitsunday Ngaro Sea Trail, and island bushwalks offer stunning
                  viewpoints and wildlife encounters.
                </p>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Hill Inlet Lookout (must-do)</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Conway Circuit (3km loop)</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Mount Rooper Summit</span>
                  </div>
                </div>
              </div>

              {/* Wildlife */}
              <div className="bg-white border-b-4 border-[#228B22] p-6 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  Wildlife Encounters
                </h3>
                <p className="font-['Inter'] text-gray-700 text-sm mb-4">
                  Meet native Australian animals at Hamilton Island Wildlife or spot them in their natural
                  habitat throughout the islands.
                </p>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Koalas, wallabies, reptiles</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Bird watching (200+ species)</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Rock wallabies on islands</span>
                  </div>
                </div>
              </div>

              {/* Airlie Beach */}
              <div className="bg-white border-b-4 border-[#FF6B6B] p-6 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  Airlie Beach
                </h3>
                <p className="font-['Inter'] text-gray-700 text-sm mb-4">
                  The gateway town offers its own attractions: lagoon swimming, markets, boardwalk dining,
                  and vibrant nightlife.
                </p>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                    <span>Free lagoon with lifeguards</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                    <span>Saturday markets</span>
                  </div>
                  <div className="flex items-start font-['Inter']">
                    <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                    <span>Waterfront dining</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Tips */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-bold text-gray-900 mb-12 text-center">
              Booking & Planning Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* How to Save */}
              <div className="bg-white border-b-4 border-[#228B22] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-6">
                  How to Save Money
                </h3>
                <ul className="space-y-4 font-['Inter'] text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#228B22] mr-3 font-bold text-lg flex-shrink-0">$</span>
                    <span>Book combo packages (sailing + accommodation) for discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#228B22] mr-3 font-bold text-lg flex-shrink-0">$</span>
                    <span>Travel in shoulder season (Apr-May, Sep-Nov) for 20-30% savings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#228B22] mr-3 font-bold text-lg flex-shrink-0">$</span>
                    <span>Overnight sailing trips include accommodation, meals, and activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#228B22] mr-3 font-bold text-lg flex-shrink-0">$</span>
                    <span>Many free activities: lagoon, walking trails, beaches</span>
                  </li>
                </ul>
              </div>

              {/* When to Book */}
              <div className="bg-white border-b-4 border-[#1E3A8A] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-6">
                  When to Book
                </h3>
                <ul className="space-y-4 font-['Inter'] text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1E3A8A] mr-3 font-bold text-lg flex-shrink-0">→</span>
                    <span><strong>Peak Season (Jun-Aug):</strong> Book 2-3 months ahead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E3A8A] mr-3 font-bold text-lg flex-shrink-0">→</span>
                    <span><strong>Shoulder Season:</strong> Book 4-6 weeks ahead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E3A8A] mr-3 font-bold text-lg flex-shrink-0">→</span>
                    <span><strong>Low Season:</strong> Can book 1-2 weeks ahead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1E3A8A] mr-3 font-bold text-lg flex-shrink-0">→</span>
                    <span><strong>Scenic Flights:</strong> Book early - limited seats</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="mt-8 bg-gradient-to-r from-[#FFE66D] to-[#FFD93D] p-8 rounded-2xl shadow-xl">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">
                Best Time to Visit
              </h3>
              <div className="grid md:grid-cols-3 gap-6 font-['Inter'] text-gray-900">
                <div>
                  <p className="font-bold mb-2">Peak (Jun-Aug)</p>
                  <p className="text-sm">Perfect weather, dry season, whale watching. Most expensive and crowded.</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Shoulder (Apr-May, Sep-Nov)</p>
                  <p className="text-sm">Great weather, fewer crowds, better prices. Ideal balance.</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Summer (Dec-Mar)</p>
                  <p className="text-sm">Hot and humid, stinger season, occasional rain. Cheapest rates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-[#4ECDC4] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  What are the must-do activities?
                </h3>
                <p className="font-['Inter'] text-gray-700">
                  The top 3 must-do experiences are: (1) Whitehaven Beach visit, (2) Great Barrier Reef
                  snorkeling or diving, (3) Sailing through the islands. These three give you the quintessential
                  Whitsundays experience. If time allows, add a scenic flight for aerial views.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#FFE66D] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  Can I do water activities if I can't swim?
                </h3>
                <p className="font-['Inter'] text-gray-700">
                  Yes! Snorkeling tours provide flotation devices and life jackets. Many boats have viewing
                  areas underwater or glass-bottom sections. Whitehaven Beach is shallow and calm. For diving,
                  you'll need to be comfortable in water, but introductory dives are shallow with full support.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#FF6B6B] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  How many activities can I fit in 3 days?
                </h3>
                <p className="font-['Inter'] text-gray-700">
                  Comfortably 2-3 major activities plus some free time. Typical itinerary: Day 1 - arrive &
                  explore Airlie, Day 2 - Whitehaven Beach full-day tour, Day 3 - Reef snorkeling half-day
                  or scenic flight. Don't overschedule - you'll want time to relax and enjoy.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#1E3A8A] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  What activities are best for families?
                </h3>
                <p className="font-['Inter'] text-gray-700">
                  Family-friendly options include: day sailing tours (most accept kids 4+), Whitehaven Beach
                  visits, snorkeling (calm inner reef spots), Airlie Beach Lagoon, Hamilton Island Wildlife
                  Park, and scenic flights. Overnight sailing trips are better for older kids (12+). Many
                  operators offer family packages.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#4ECDC4] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  Do I need to book activities in advance?
                </h3>
                <p className="font-['Inter'] text-gray-700">
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
      <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#4ECDC4] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Book Your Activities?
          </h2>
          <p className="font-['Inter'] text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Compare tours and activities to create your perfect Whitsundays adventure
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/whitehaven-tours"
              className="bg-white text-[#1E3A8A] px-8 py-4 rounded-xl font-['Plus_Jakarta_Sans'] font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
            >
              View All Tours
            </Link>
            <Link 
              href="/about"
              className="bg-[#4ECDC4] text-white px-8 py-4 rounded-xl font-['Plus_Jakarta_Sans'] font-bold text-lg hover:bg-[#3db9b0] transition-colors shadow-xl"
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
