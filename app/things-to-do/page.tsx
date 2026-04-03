import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Things to Do in the Whitsundays | Discover Whitsundays',
  description: 'The Whitsundays is a playground for all things aquatic — and a few things that aren\'t. Here\'s what to book and what to skip.',
}

export default function ThingsToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920')" }}
        />
        <div className="absolute inset-0 bg-[#1A2E35]/60"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Things to Do
          </h1>
          <p className="font-body text-2xl text-white/90 drop-shadow-lg max-w-3xl mx-auto">
            The Whitsundays is a playground for all things aquatic — and a few things that aren't. Here's what to book and what to skip.
          </p>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="bg-[#F5F0E8] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-b-4 border-[#0B6E72] p-6 rounded-2xl shadow-md text-center">
                <div className="font-heading text-lg font-bold text-[#1A2E35] mb-2">On the Water</div>
                <div className="font-body text-sm text-[#6B7C80]">Sailing, snorkelling, diving, island hopping</div>
              </div>
              <div className="bg-white border-b-4 border-[#E07B39] p-6 rounded-2xl shadow-md text-center">
                <div className="font-heading text-lg font-bold text-[#1A2E35] mb-2">From Above</div>
                <div className="font-body text-sm text-[#6B7C80]">Helicopter, seaplane, scenic flights</div>
              </div>
              <div className="bg-white border-b-4 border-[#0B6E72] p-6 rounded-2xl shadow-md text-center">
                <div className="font-heading text-lg font-bold text-[#1A2E35] mb-2">Further Out</div>
                <div className="font-body text-sm text-[#6B7C80]">Island camping, bareboat charters</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Time Here */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-[#1A2E35] mb-4">
              First time here?
            </h2>
            <p className="font-body text-xl text-[#6B7C80] mb-12">
              Two experiences that cover the essentials — pick one or do both.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Whitehaven Day Tour */}
              <div className="bg-white border-b-4 border-[#0B6E72] p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
                  Whitehaven Beach Day Tour
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  The starting point for most visitors and rightly so. A full day on the water gets you to
                  Whitehaven Beach, up to the Hill Inlet lookout, and usually to a snorkel spot on the way
                  back. Lunch included on most tours.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>6-8 hours on the water</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Lunch and snorkel gear included</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Hill Inlet lookout walk</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Prices typically from around $150 per person — check current availability</span>
                  </div>
                </div>
                <Link
                  href="/tours/whitehaven-beach-tours"
                  className="block w-full bg-[#0B6E72] text-white py-3 rounded-xl font-heading font-bold hover:bg-[#1A2E35] transition-colors text-center"
                >
                  View Day Tours
                </Link>
              </div>

              {/* Overnight Sailing */}
              <div className="bg-white border-b-4 border-[#E07B39] p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
                  Overnight Sailing Trip
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  If you have the time, this is how to do it properly. Two or three days sleeping on board,
                  anchoring in secluded bays, visiting Whitehaven at sunrise when the day-trippers aren't
                  there yet. All meals included.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>2-3 day options available</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>All meals and accommodation included</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Multiple snorkel sites and islands</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Prices typically from around $550 per person — check current availability</span>
                  </div>
                </div>
                <Link
                  href="/tours/bareboating-and-private-charters"
                  className="block w-full bg-[#E07B39] text-white py-3 rounded-xl font-heading font-bold hover:bg-[#1A2E35] transition-colors text-center"
                >
                  View Overnight Sailing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Want to Get on the Water */}
      <div className="bg-[#E8F4F5] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-[#1A2E35] mb-4">
              Want to get on the water?
            </h2>
            <p className="font-body text-xl text-[#6B7C80] mb-12">
              Sailing is the heart of it. June to August the winds are consistent and the rain rare — that's when to book.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Snorkelling */}
              <div className="bg-white border-b-4 border-[#0B6E72] p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
                  Snorkelling Tours
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  Suitable for all ages and skill levels. Most day sailing tours include snorkelling as
                  part of the itinerary — Hook Island and Hardy Reef are the standout spots.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Multiple reef sites per tour</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>All equipment and instruction included</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Flotation aids available</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Prices typically from around $150 per person — check current availability</span>
                  </div>
                </div>
                <div className="bg-[#E8F4F5] p-4 rounded-xl">
                  <p className="font-body text-sm text-gray-700">
                    <strong>Best spots:</strong> Hardy Reef, Bait Reef, Hook Island fringing reefs, and sheltered lagoons around the islands.
                  </p>
                </div>
              </div>

              {/* Scuba Diving */}
              <div className="bg-white border-b-4 border-[#0B6E72] p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
                  Scuba Diving
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  Introductory dives for beginners, certified dives for experienced divers, and multi-day
                  liveaboard options. The reef here rewards the extra effort of going deeper.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Introductory dives — no certification needed</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Certified dive trips to 30+ sites</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Full certification courses available</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Prices typically from around $200 per person — check current availability</span>
                  </div>
                </div>
                <div className="bg-[#E8F4F5] p-4 rounded-xl">
                  <p className="font-body text-sm text-gray-700">
                    <strong>What you'll see:</strong> Manta rays, reef sharks, sea turtles, giant clams, and hundreds of tropical fish species.
                  </p>
                </div>
              </div>
            </div>

            {/* Marine Life */}
            <div className="bg-[#1A2E35] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-heading text-2xl font-bold mb-6">When to See Marine Life</h3>
              <div className="grid md:grid-cols-3 gap-6 font-body">
                <div>
                  <p className="font-bold text-[#E07B39] mb-2">Turtles</p>
                  <p className="text-sm text-white/80">Year-round, especially at Hook Island and around coral bommies</p>
                </div>
                <div>
                  <p className="font-bold text-[#E07B39] mb-2">Humpback Whales</p>
                  <p className="text-sm text-white/80">July to September during migration season</p>
                </div>
                <div>
                  <p className="font-bold text-[#E07B39] mb-2">Manta Rays</p>
                  <p className="text-sm text-white/80">May to August at outer reef cleaning stations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Want to See it From Above */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-[#1A2E35] mb-4">
              Want to see it from above?
            </h2>
            <p className="font-body text-xl text-[#6B7C80] mb-4">
              Scenic flights are a popular choice for special occasions — anniversaries, proposals, honeymoons. The aerial view of Hill Inlet is genuinely one of those moments.
            </p>
            <p className="font-body text-[#6B7C80] mb-12">
              Book morning flights before 10am for the best light and contrast.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Helicopter */}
              <div className="bg-white border-b-4 border-[#E07B39] p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
                  Helicopter Tours
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  Intimate flights with low-level views. The ability to hover over Hill Inlet makes these
                  the best option for photography.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>10-60 minute flights</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Heart Reef, Whitehaven, Hill Inlet</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Prices typically from around $350 per person</span>
                  </div>
                </div>
              </div>

              {/* Seaplane */}
              <div className="bg-white border-b-4 border-[#0B6E72] p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
                  Seaplane Tours
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  Aerial views combined with a beach landing. The best of both — you see it from above
                  and then you're standing on it.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Land on Whitehaven Beach</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Heart Reef flybys</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Prices typically from around $650 per person</span>
                  </div>
                </div>
              </div>

              {/* Fixed Wing */}
              <div className="bg-white border-b-4 border-[#E07B39] p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
                  Fixed-Wing Aircraft
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  Longer flights covering more ground. Good for extended reef tours and reaching the
                  outer reef formations.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Extended reef coverage</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Higher altitude panoramic views</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Prices typically from around $300 per person</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/tours/scenic-flights"
              className="block w-full md:w-auto md:mx-auto md:max-w-md bg-[#0B6E72] text-white py-4 rounded-xl font-heading font-bold hover:bg-[#1A2E35] transition-all text-center text-lg"
            >
              Compare All Scenic Flights
            </Link>
          </div>
        </div>
      </div>

      {/* Want to Go Further */}
      <div className="bg-[#F5F0E8] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-[#1A2E35] mb-4">
              Want to go further?
            </h2>
            <p className="font-body text-xl text-[#6B7C80] mb-12">
              For those who want to get properly off the beaten track.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Island Camping */}
              <div className="bg-white border-b-4 border-[#0B6E72] p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
                  Island Camping
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  Several islands have designated camping areas — Whitehaven Beach's southern end and
                  Hook Island's Maureen's Cove are the picks. Wake up on a deserted beach with no one
                  else around. Worth the logistics.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Permits through Queensland Parks — book well ahead</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Water taxis provide transfers</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Bring all supplies — no facilities</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#0B6E72] mr-3 font-bold">•</span>
                    <span>Best April to October</span>
                  </div>
                </div>
              </div>

              {/* Bareboat Charters */}
              <div className="bg-white border-b-4 border-[#E07B39] p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-[#1A2E35] mb-4">
                  Bareboat Charters
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  Hire a yacht and skipper it yourself — no prior experience needed for the inner islands.
                  Access secluded anchorages and uninhabited beaches that tour boats never reach.
                  Ultimate flexibility.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>No experience required for inner waters</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Access all 74 islands on your own terms</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Secluded anchorages and camping spots</span>
                  </div>
                  <div className="flex items-start font-body">
                    <span className="text-[#E07B39] mr-3 font-bold">•</span>
                    <span>Full briefing and support provided</span>
                  </div>
                </div>
                <Link
                  href="/tours/bareboating-and-private-charters"
                  className="block w-full bg-[#E07B39] text-white py-3 rounded-xl font-heading font-bold hover:bg-[#1A2E35] transition-colors text-center"
                >
                  Learn About Bareboating
                </Link>
              </div>
            </div>

            {/* Future Landing Pages Note - hidden from visitors */}
            {/* TODO: Airlie Beach town guide and mainland activities (Conway NP, hiking, wildlife) are good candidates for future landing pages */}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-[#1A2E35] mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-[#0B6E72] p-6 rounded-xl shadow-lg">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  What are the must-do activities?
                </h3>
                <p className="font-body text-gray-700">
                  Whitehaven Beach and a reef snorkel cover the essentials for most visitors. Add an overnight
                  sailing trip if you have the time — it changes the experience completely. A scenic flight
                  is worth it for the Hill Inlet aerial view if the budget allows.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#E07B39] p-6 rounded-xl shadow-lg">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  Can I do water activities if I can't swim well?
                </h3>
                <p className="font-body text-gray-700">
                  Yes — snorkelling tours provide flotation devices and life jackets, and most operators
                  are experienced with non-swimmers. Whitehaven Beach has calm, shallow water. For diving,
                  introductory dives are shallow and fully supervised.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#0B6E72] p-6 rounded-xl shadow-lg">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  How many activities can I fit in 3 days?
                </h3>
                <p className="font-body text-gray-700">
                  Two or three major activities is realistic — and probably enough. A typical three days:
                  arrive and settle in, full-day Whitehaven tour, half-day reef snorkel or scenic flight.
                  Don't overschedule — the Whitsundays reward a slower pace.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#E07B39] p-6 rounded-xl shadow-lg">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  What's best for families?
                </h3>
                <p className="font-body text-gray-700">
                  Day sailing tours (most accept kids 4+), Whitehaven Beach, snorkelling on calm inner
                  reef spots, and the Airlie Beach lagoon are all solid family options. Overnight sailing
                  works better for older kids (12+). Many operators offer family packages.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#0B6E72] p-6 rounded-xl shadow-lg">
                <h3 className="font-heading text-xl font-bold text-[#1A2E35] mb-3">
                  Do I need to book ahead?
                </h3>
                <p className="font-body text-gray-700">
                  In peak season (June to August) — yes, well ahead. Popular Whitehaven tours and sailing
                  trips fill weeks out. Shoulder season gives you more flexibility but booking ahead still
                  secures better pricing. Scenic flights have limited seats year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0B6E72] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Book Your Activities?
          </h2>
          <p className="font-body text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Compare tours and find what suits your trip.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/tours/whitehaven-beach-tours"
              className="bg-[#E07B39] text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-[#1A2E35] transition-all duration-300 shadow-xl"
            >
              View All Tours
            </Link>
            <Link
              href="/itinerary-3-day"
              className="bg-white text-[#0B6E72] px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-[#F5F0E8] transition-all duration-300 shadow-xl"
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
