import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function IslandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/islands-hero1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from- transparent via-transparent to-gray-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl text-white text-center">
            <h1 className="font-heading text-7xl font-bold mb-4 drop-shadow-2xl">
              The Whitsunday Islands
            </h1>
            <p className="font-body text-2xl mb-4 leading-relaxed">
              74 tropical islands scattered across the turquoise waters of the Great Barrier Reef
            </p>
            <p className="font-body text-lg opacity-90">
              Each island offers something unique—from luxurious resorts to uninhabited national parks,
              world-famous beaches to secluded anchorages.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-orange-500 p-8 rounded-lg mb-12">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-4">
              🏝️ Only 8 Islands Are Inhabited
            </h2>
            <p className="font-body text-gray-700 leading-relaxed">
              While there are 74 islands in the Whitsundays, only 8 have resorts or permanent settlements.
              The rest are protected national parks with pristine beaches, walking trails, and camping grounds.
              As an Airlie Beach local, I've explored many of these islands—here are the ones worth visiting.
            </p>
          </div>

          {/* Island 1: Hamilton Island */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-orange-500">
            <div
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-gray-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    MOST DEVELOPED
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Hamilton Island</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                The largest inhabited island in the Whitsundays and the only one with its own commercial airport.
                Hamilton is essentially a self-contained resort island with hotels, restaurants, marina, shops,
                golf course, and wildlife park. It's popular with families and those wanting resort amenities
                combined with island beauty.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">🎯 Key Features:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Own commercial airport (direct flights from Sydney, Melbourne, Brisbane)</li>
                    <li>• Multiple accommodation options (budget to luxury)</li>
                    <li>• Main marina hub for sailing charters</li>
                    <li>• Hamilton Island Golf Club (on Dent Island)</li>
                    <li>• Wildlife Hamilton Island (koalas, kangaroos)</li>
                    <li>• 6+ restaurants and bars</li>
                    <li>• Catseye Beach for swimming</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Families with kids</li>
                    <li>• First-time Whitsundays visitors</li>
                    <li>• Those wanting resort amenities + island life</li>
                    <li>• Convenient base for day trips</li>
                    <li>• Couples and honeymooners (qualia resort)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Hamilton Island operates on "island time" with golf buggies as the main transport. The island
                  is cashless—everything goes on your room charge or credit card. Book restaurants in advance
                  during peak season (June-August). The sunset from One Tree Hill is spectacular.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/where-to-stay"
                  className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-orange-600 transition-colors"
                >
                  View Accommodation
                </Link>
                <Link
                  href="/things-to-do"
                  className="flex-1 border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-heading font-bold text-center hover:bg-orange-50 transition-colors"
                >
                  Activities & Tours
                </Link>
              </div>
            </div>
          </div>

          {/* Island 2: Daydream Island */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-blue-600">
            <div
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-blue-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    FAMILY FAVORITE
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Daydream Island</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                A small island (1km long) just 5km from Airlie Beach, making it the closest resort island
                to the mainland. Daydream is known for its Living Reef—an outdoor aquarium where you can
                snorkel with tropical fish, rays, and even reef sharks. It's incredibly family-friendly
                and more affordable than Hamilton.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">🎯 Key Features:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Living Reef (outdoor aquarium with 80+ species)</li>
                    <li>• 20-minute ferry from Airlie Beach ($72 return)</li>
                    <li>• 3 pools including kids' pool</li>
                    <li>• Spa and wellness center</li>
                    <li>• Multiple dining options</li>
                    <li>• Water sports and activities</li>
                    <li>• Kids' club</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Families with young children</li>
                    <li>• Budget-conscious travelers</li>
                    <li>• Day trippers from Airlie Beach</li>
                    <li>• Those who want island experience without flying</li>
                    <li>• Snorkeling enthusiasts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Even if you're not staying on Daydream, you can take a day trip via ferry and use the resort
                  facilities for a day-use fee. The Living Reef fish feeding at 10am is a must-see. Book the
                  ferry in advance during school holidays—it fills up quickly.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/where-to-stay"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-blue-700 transition-colors"
                >
                  View Accommodation
                </Link>
                <Link
                  href="/things-to-do"
                  className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-heading font-bold text-center hover:bg-blue-50 transition-colors"
                >
                  Day Trip Options
                </Link>
              </div>
            </div>
          </div>

          {/* Island 3: Whitsunday Island */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-teal-500">
            <div
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-teal-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-teal-500 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    MOST FAMOUS
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Whitsunday Island</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                The largest island in the group and home to Whitehaven Beach—consistently rated one of the
                world's best beaches. The entire island is uninhabited national park. There are no resorts,
                shops, or facilities—just pristine wilderness. You can only visit via day tour, sailing charter,
                or camping permit.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">🎯 Key Features:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Whitehaven Beach (7km of pure silica sand)</li>
                    <li>• Hill Inlet lookout (Instagram-famous swirling sands)</li>
                    <li>• Walking trails through national park</li>
                    <li>• Multiple camping spots (permit required)</li>
                    <li>• Completely undeveloped—pristine nature</li>
                    <li>• Snorkeling spots around the island</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Beach lovers and photographers</li>
                    <li>• Day trippers from Airlie Beach</li>
                    <li>• Sailing charter guests</li>
                    <li>• Adventurous campers</li>
                    <li>• Nature enthusiasts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Visit Hill Inlet at low tide for the best view of the swirling sand patterns. The northern
                  end of Whitehaven Beach is usually less crowded. The sand is 98% pure silica—so fine it
                  doesn't retain heat and squeaks when you walk on it. Don't forget reef-safe sunscreen!
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/things-to-do"
                  className="flex-1 bg-teal-500 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-teal-600 transition-colors"
                >
                  Book Whitehaven Tour
                </Link>
                <Link
                  href="/whitehaven-beach"
                  className="flex-1 border-2 border-teal-500 text-teal-500 py-3 rounded-xl font-heading font-bold text-center hover:bg-teal-50 transition-colors"
                >
                  Complete Beach Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Island 4: Long Island */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-green-600">
            <div
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')",
              }}
            >
              <div className="h-full bg-gradient-to-br from-green-900/60 to-transparent flex items-end p-8">
                <div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    QUIET ESCAPE
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Long Island</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Just 9km from Airlie Beach, Long Island is the closest resort island and one of the least
                developed. Most of the island is national park with walking trails. It offers a more intimate,
                peaceful experience compared to Hamilton or Daydream. Perfect if you want to disconnect and
                experience raw island nature while still having resort comforts.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">🎯 Key Features:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Paradise Bay Resort (intimate accommodation)</li>
                    <li>• 13km of walking trails through rainforest</li>
                    <li>• Sandy Bay (secluded beach)</li>
                    <li>• 20-minute ferry from Shute Harbour</li>
                    <li>• Mostly national park</li>
                    <li>• Limited phone/internet (digital detox!)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-800 mb-3">👥 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Couples seeking peace and quiet</li>
                    <li>• Bush walkers and nature lovers</li>
                    <li>• Those wanting to disconnect</li>
                    <li>• Budget-conscious travelers</li>
                    <li>• People who want "real" island experience</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-gray-800 mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Long Island is for people who want nature over nightlife. The 20km Ngaro Sea Trail walk
                  to Sandy Bay takes you through dense jungle teeming with birds, butterflies, and wallabies.
                  If you want peace, nature, and isolation while still being close to Airlie Beach, this is your island.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/where-to-stay"
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-green-700 transition-colors"
                >
                  View Accommodation
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Reference - Other Islands */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-8">
              Other Notable Islands
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">🏝️ Hayman Island</h3>
                <p className="font-body text-gray-700 text-sm mb-4">
                  The most northern island and formerly home to the ultra-luxury Hayman resort (currently closed
                  for renovations). When open, this is THE luxury destination in the Whitsundays. Beautiful beaches
                  and reef surrounding the island make it popular for day trips even while the resort is closed.
                </p>
                <p className="text-sm text-gray-600 italic">Status: Resort closed for renovations (2024/2025)</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">🏝️ Hook Island</h3>
                <p className="font-body text-gray-700 text-sm mb-4">
                  The second-largest island (after Whitsunday Island) and entirely national park. Famous for
                  excellent snorkeling sites like Manta Ray Bay, Maureen's Cove, and Stonehaven Bay. Most day
                  tours stop here for snorkeling. Camping available at several bays.
                </p>
                <p className="text-sm text-gray-600 italic">Access: Day tours or bareboat charter</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">🏝️ South Molle Island</h3>
                <p className="font-body text-gray-700 text-sm mb-4">
                  Large island mostly covered in national park. Previously had a resort (now closed). Popular with
                  bareboaters for anchorage. Good walking trails to Mt. Jeffreys summit (194m) with panoramic
                  views. Sandy Bay is great for swimming.
                </p>
                <p className="text-sm text-gray-600 italic">Access: Bareboat charter or day tours</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">🏝️ Langford Island</h3>
                <p className="font-body text-gray-700 text-sm mb-4">
                  A tiny sand cay perfect for snorkeling. At low tide, you can walk around the entire island
                  in 5 minutes! The surrounding reef is spectacular with abundant fish. Popular stop on sailing
                  tours. No facilities—just pristine sand and turquoise water.
                </p>
                <p className="text-sm text-gray-600 italic">Access: Day tours or bareboat charter</p>
              </div>
            </div>
          </div>

          {/* Planning Your Island Visit */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl mb-16">
            <h2 className="font-heading text-2xl font-bold text-gray-800 mb-6">
              🗺️ Planning Your Island Visit
            </h2>

            <div className="grid md:grid-cols-3 gap-6 font-body text-gray-700">
              <div>
                <h3 className="font-heading font-bold text-gray-800 mb-3">Stay on an Island:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Hamilton Island (full resort)</li>
                  <li>✓ Daydream Island (family resort)</li>
                  <li>✓ Long Island (quiet retreat)</li>
                  <li>✓ Hayman (luxury - currently closed)</li>
                </ul>
                <Link
                  href="/where-to-stay"
                  className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                >
                  View Accommodation →
                </Link>
              </div>

              <div>
                <h3 className="font-heading font-bold text-gray-800 mb-3">Day Trip from Airlie:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Whitsunday Island (tours only)</li>
                  <li>✓ Daydream Island (ferry)</li>
                  <li>✓ Hamilton Island (ferry)</li>
                  <li>✓ Hook Island (snorkel tours)</li>
                </ul>
                <Link
                  href="/things-to-do"
                  className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                >
                  View Tours →
                </Link>
              </div>

              <div>
                <h3 className="font-heading font-bold text-gray-800 mb-3">Bareboat Charter:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Access all uninhabited islands</li>
                  <li>✓ Secluded anchorages</li>
                  <li>✓ Camping spots</li>
                  <li>✓ Ultimate flexibility</li>
                </ul>
                <Link
                  href="/tours/bareboating-and-private-charters"
                  className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                >
                  Learn About Bareboating →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Explore the Islands?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From luxury resorts to uninhabited national parks, find your perfect island escape
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/where-to-stay"
              className="bg-white text-orange-500 px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Find Accommodation
            </Link>
            <Link
              href="/things-to-do"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl"
            >
              Book Island Tours
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
