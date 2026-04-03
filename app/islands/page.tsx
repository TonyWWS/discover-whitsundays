import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'The Whitsunday Islands | Discover Whitsundays',
  description: '74 tropical islands in the Great Barrier Reef. Find out which island suits you — from Hamilton\'s resort amenities to uninhabited national park wilderness.',
}

export default function IslandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/islands-hero1.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1A2E35]/60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-3xl text-white text-center">
            <h1 className="font-heading text-7xl font-bold mb-4 drop-shadow-2xl">
              The Whitsunday Islands
            </h1>
            <p className="font-body text-2xl text-white/90 drop-shadow-lg">
              Mostly untouched national park. But there's an island to suit your vibe — find it here.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#E8F4F5] border-l-4 border-[#0B6E72] p-8 rounded-lg mb-12">
            <h2 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
              🏝️ Only 8 Islands Are Inhabited
            </h2>
            <p className="font-body text-[#1A2E35] leading-relaxed">
              While there are 74 islands in the Whitsundays, only 8 have resorts or permanent settlements.
              The rest are protected national parks with pristine beaches, walking trails, and camping grounds.
              As an Airlie Beach local, I've explored many of these islands — here are the ones worth visiting.
            </p>
          </div>

          {/* Hamilton Island */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-[#0B6E72]">
            <div
              className="h-80 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=1200')" }}
            >
              <div className="h-full bg-[#1A2E35]/50 flex items-end p-8">
                <div>
                  <div className="bg-[#0B6E72] text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
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
                  <h4 className="font-heading text-lg font-bold text-[#1A2E35] mb-3">🎯 Key Features:</h4>
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
                  <h4 className="font-heading text-lg font-bold text-[#1A2E35] mb-3">👥 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Families with kids</li>
                    <li>• First-time Whitsundays visitors</li>
                    <li>• Those wanting resort amenities + island life</li>
                    <li>• Convenient base for day trips</li>
                    <li>• Couples and honeymooners (qualia resort)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5F0E8] border-l-4 border-[#E07B39] p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-[#1A2E35] mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Hamilton Island operates on "island time" with golf buggies as the main transport. The island
                  is cashless — everything goes on your room charge or credit card. Book restaurants in advance
                  during peak season (June-August). The sunset from One Tree Hill is spectacular.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/where-to-stay"
                  className="flex-1 bg-[#0B6E72] text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-[#1A2E35] transition-colors"
                >
                  View Accommodation
                </Link>
                <Link
                  href="/things-to-do"
                  className="flex-1 border-2 border-[#0B6E72] text-[#0B6E72] py-3 rounded-xl font-heading font-bold text-center hover:bg-[#E8F4F5] transition-colors"
                >
                  Activities & Tours
                </Link>
              </div>
            </div>
          </div>

          {/* Daydream Island */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-[#0B6E72]">
            <div
              className="h-80 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200')" }}
            >
              <div className="h-full bg-[#1A2E35]/50 flex items-end p-8">
                <div>
                  <div className="bg-[#E07B39] text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    FAMILY FAVOURITE
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Daydream Island</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                A small island (1km long) just 5km from Airlie Beach, making it the closest resort island
                to the mainland. Daydream is known for its Living Reef — an outdoor aquarium where you can
                snorkel with tropical fish, rays, and even reef sharks. It's incredibly family-friendly
                and more affordable than Hamilton.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#1A2E35] mb-3">🎯 Key Features:</h4>
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
                  <h4 className="font-heading text-lg font-bold text-[#1A2E35] mb-3">👥 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Families with young children</li>
                    <li>• Budget-conscious travellers</li>
                    <li>• Day trippers from Airlie Beach</li>
                    <li>• Those who want island experience without flying</li>
                    <li>• Snorkelling enthusiasts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5F0E8] border-l-4 border-[#E07B39] p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-[#1A2E35] mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Even if you're not staying on Daydream, you can take a day trip via ferry and use the resort
                  facilities for a day-use fee. The Living Reef fish feeding at 10am is a must-see. Book the
                  ferry in advance during school holidays — it fills up quickly.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/where-to-stay"
                  className="flex-1 bg-[#0B6E72] text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-[#1A2E35] transition-colors"
                >
                  View Accommodation
                </Link>
                <Link
                  href="/things-to-do"
                  className="flex-1 border-2 border-[#0B6E72] text-[#0B6E72] py-3 rounded-xl font-heading font-bold text-center hover:bg-[#E8F4F5] transition-colors"
                >
                  Day Trip Options
                </Link>
              </div>
            </div>
          </div>

          {/* Whitsunday Island */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-[#0B6E72]">
            <div
              className="h-80 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')" }}
            >
              <div className="h-full bg-[#1A2E35]/50 flex items-end p-8">
                <div>
                  <div className="bg-[#0B6E72] text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    MOST FAMOUS
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Whitsunday Island</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                The largest island in the group and home to Whitehaven Beach — consistently rated one of the
                world's best beaches. The entire island is uninhabited national park. There are no resorts,
                shops, or facilities — just pristine wilderness. You can only visit via day tour, sailing charter,
                or camping permit.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#1A2E35] mb-3">🎯 Key Features:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Whitehaven Beach (7km of pure silica sand)</li>
                    <li>• Hill Inlet lookout (swirling sands, best before 11am)</li>
                    <li>• Walking trails through national park</li>
                    <li>• Multiple camping spots (permit required)</li>
                    <li>• Completely undeveloped — pristine nature</li>
                    <li>• Snorkelling spots around the island</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#1A2E35] mb-3">👥 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Beach lovers and photographers</li>
                    <li>• Day trippers from Airlie Beach</li>
                    <li>• Sailing charter guests</li>
                    <li>• Adventurous campers</li>
                    <li>• Nature enthusiasts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5F0E8] border-l-4 border-[#E07B39] p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-[#1A2E35] mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  Visit Hill Inlet at low tide for the best view of the swirling sand patterns. The northern
                  end of Whitehaven Beach is usually less crowded. The sand is 98% pure silica — so fine it
                  doesn't retain heat and squeaks when you walk on it. Don't forget reef-safe sunscreen.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/things-to-do"
                  className="flex-1 bg-[#0B6E72] text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-[#1A2E35] transition-colors"
                >
                  Book Whitehaven Tour
                </Link>
                <Link
                  href="/whitehaven-beach"
                  className="flex-1 border-2 border-[#0B6E72] text-[#0B6E72] py-3 rounded-xl font-heading font-bold text-center hover:bg-[#E8F4F5] transition-colors"
                >
                  Complete Beach Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Long Island */}
          <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-[#0B6E72]">
            <div
              className="h-80 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200')" }}
            >
              <div className="h-full bg-[#1A2E35]/50 flex items-end p-8">
                <div>
                  <div className="bg-[#E07B39] text-white px-4 py-2 rounded-lg font-heading font-bold inline-block mb-2">
                    QUIET ESCAPE
                  </div>
                  <h3 className="font-heading text-5xl font-bold text-white">Long Island</h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-lg">
                Long Island sits 9km from the mainland — the closest Whitsunday island to Airlie Beach.
                At 9km long and just 400m wide, over 80% is national park. It's quieter than Hamilton
                and Daydream, with 17km of walking trails, fringing reefs, and two very different
                accommodation options depending on what you're after.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#1A2E35] mb-3">🎯 Key Features:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• 17km of walking trails through national park</li>
                    <li>• Excellent snorkelling 150m off the beach at Happy Bay</li>
                    <li>• Secluded bays and dense rainforest</li>
                    <li>• 20-minute transfer from Shute Harbour or Airlie Beach</li>
                    <li>• Palm Bay Resort — adults 16+, Balinese-inspired villas</li>
                    <li>• Elysian Retreat — eco-luxury boutique (Booking.com)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-[#1A2E35] mb-3">👥 Perfect For:</h4>
                  <ul className="space-y-2 font-body text-gray-700 text-sm">
                    <li>• Couples and adults seeking quiet</li>
                    <li>• Bush walkers and snorkellers</li>
                    <li>• Those wanting nature without sacrificing comfort</li>
                    <li>• Eco-conscious travellers</li>
                    <li>• Anyone who wants to actually switch off</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F5F0E8] border-l-4 border-[#E07B39] p-6 rounded-lg mb-6">
                <h4 className="font-heading font-bold text-[#1A2E35] mb-2">💡 Local Tip:</h4>
                <p className="font-body text-gray-700 text-sm">
                  I haven't made it to Long Island yet — it's on my list. What I hear from locals is that
                  Happy Bay has some of the best accessible snorkelling in the Whitsundays. Palm Bay suits
                  adults who want a relaxed retreat. Elysian Retreat sits at a higher level — eco-luxury
                  done properly, and worth it if the budget allows. July is the sweet spot — cooler, sunny,
                  and quiet.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/where-to-stay"
                  className="flex-1 bg-[#0B6E72] text-white py-3 rounded-xl font-heading font-bold text-center hover:bg-[#1A2E35] transition-colors"
                >
                  View Accommodation
                </Link>
              </div>
            </div>
          </div>

          {/* Other Notable Islands */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-[#1A2E35] mb-8">
              Other Notable Islands
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#E8F4F5] p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">🏝️ Hayman Island</h3>
                <p className="font-body text-gray-700 text-sm mb-4">
                  The Whitsundays' most exclusive destination. Hayman operates at a different level to the
                  other islands — private, premium, and worth its own dedicated guide. Bookings are direct
                  only.
                </p>
                <p className="text-sm text-[#6B7C80] italic">
                  Full coverage coming soon in our luxury travel guide.
                </p>
              </div>

              <div className="bg-white border-2 border-[#E8F4F5] p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">🏝️ Hook Island</h3>
                <p className="font-body text-gray-700 text-sm mb-4">
                  The second-largest island and entirely national park. Famous for excellent snorkelling sites
                  like Manta Ray Bay, Maureen's Cove, and Stonehaven Bay. Most day tours stop here for
                  snorkelling. Camping available at several bays.
                </p>
                <p className="text-sm text-[#6B7C80] italic">Access: Day tours or bareboat charter</p>
              </div>

              <div className="bg-white border-2 border-[#E8F4F5] p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">🏝️ South Molle Island</h3>
                <p className="font-body text-gray-700 text-sm mb-4">
                  Large island mostly covered in national park. Previously had a resort (now closed). Popular
                  with bareboaters for anchorage. Good walking trails to Mt. Jeffreys summit (194m) with
                  panoramic views. Sandy Bay is great for swimming.
                </p>
                <p className="text-sm text-[#6B7C80] italic">Access: Bareboat charter or day tours</p>
              </div>

              <div className="bg-white border-2 border-[#E8F4F5] p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">🏝️ Langford Island</h3>
                <p className="font-body text-gray-700 text-sm mb-4">
                  A tiny sand cay perfect for snorkelling. At low tide, you can walk around the entire island
                  in 5 minutes. The surrounding reef is spectacular with abundant fish. Popular stop on sailing
                  tours. No facilities — just pristine sand and turquoise water.
                </p>
                <p className="text-sm text-[#6B7C80] italic">Access: Day tours or bareboat charter</p>
              </div>
            </div>
          </div>

          {/* Planning Your Island Visit */}
          <div className="bg-[#E8F4F5] p-8 rounded-xl mb-16">
            <h2 className="font-heading text-2xl font-bold text-[#1A2E35] mb-6">
              🗺️ Planning Your Island Visit
            </h2>

            <div className="grid md:grid-cols-3 gap-6 font-body text-gray-700">
              <div>
                <h3 className="font-heading font-bold text-[#1A2E35] mb-3">Stay on an Island:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Hamilton Island (full resort)</li>
                  <li>✓ Daydream Island (family resort)</li>
                  <li>✓ Long Island (quiet retreat)</li>
                  <li>✓ Hayman (luxury — direct booking only)</li>
                </ul>
                <Link
                  href="/where-to-stay"
                  className="inline-block mt-4 text-[#0B6E72] font-semibold hover:underline"
                >
                  View Accommodation →
                </Link>
              </div>

              <div>
                <h3 className="font-heading font-bold text-[#1A2E35] mb-3">Day Trip from Airlie:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Whitsunday Island (tours only)</li>
                  <li>✓ Daydream Island (ferry)</li>
                  <li>✓ Hamilton Island (ferry)</li>
                  <li>✓ Hook Island (snorkel tours)</li>
                </ul>
                <Link
                  href="/things-to-do"
                  className="inline-block mt-4 text-[#0B6E72] font-semibold hover:underline"
                >
                  View Tours →
                </Link>
              </div>

              <div>
                <h3 className="font-heading font-bold text-[#1A2E35] mb-3">Bareboat Charter:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Access all uninhabited islands</li>
                  <li>✓ Secluded anchorages</li>
                  <li>✓ Camping spots</li>
                  <li>✓ Ultimate flexibility</li>
                </ul>
                <Link
                  href="/tours/bareboating-and-private-charters"
                  className="inline-block mt-4 text-[#0B6E72] font-semibold hover:underline"
                >
                  Learn About Bareboating →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0B6E72] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Explore the Islands?
          </h2>
          <p className="font-body text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            From luxury resorts to uninhabited national parks — find your island.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/where-to-stay"
              className="bg-[#E07B39] text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-[#1A2E35] transition-all duration-300 shadow-xl"
            >
              Find Accommodation
            </Link>
            <Link
              href="/things-to-do"
              className="bg-white text-[#0B6E72] px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-[#F5F0E8] transition-all duration-300 shadow-xl"
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
