import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function OvernightSailingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/overnight-sailing.jpg"
          alt="Overnight sailing in the Whitsundays under the stars"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-blue-900/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Overnight Sailing Trips
            </h1>
            <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto">
              Sleep under the stars and wake up in paradise
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
          <p className="font-body text-lg text-gray-800 leading-relaxed">
            An overnight sailing trip is the ultimate way to experience the Whitsundays. Instead of rushing through highlights in one 
            day, you'll live on the water for 2-3 days, visiting Whitehaven Beach, snorkeling at multiple reef sites, and exploring 
            secluded anchorages. Watch the sunset from your boat, sleep under a blanket of stars, and wake up to breathtaking island 
            views with no crowds. It's the journey AND the destination – the complete Whitsundays experience.
          </p>
        </div>

        <p className="font-body text-lg text-gray-700 leading-relaxed mb-8">
          From budget-friendly backpacker adventures to luxury romantic escapes, there's an overnight sailing experience for every style 
          and budget. All tours depart from Airlie Beach's Coral Sea Marina and include Whitehaven Beach, Hill Inlet Lookout, snorkeling, 
          meals, and accommodation aboard the boat.
        </p>
      </div>

      {/* Tour Options */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="font-heading text-4xl font-bold text-gray-900 mb-12 text-center">
          5 Best Overnight Sailing Trips
        </h2>

        {/* Option 1: Prosail Maxi Yachts - BUDGET ADVENTURE */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-pink-500">
          <div className="relative h-80 bg-gradient-to-br from-pink-500 via-pink-600 to-rose-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto mb-4 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.5 19l1.5-6L3 7l1.5-6h15L21 7l-2 6 1.5 6h-15M6.5 7L8 13l-1.5 6h11L16 13l1.5-6h-11m2.5 3h6v2h-6V10z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <span className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full font-body font-semibold text-sm mb-2">
                BUDGET ADVENTURE
              </span>
              <h3 className="font-heading text-4xl font-bold text-white">
                Prosail Maxi Yachts
              </h3>
              <p className="font-body text-white text-lg mt-2">
                Hammer, Broomstick & Condor
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-heading text-5xl font-bold text-pink-600">$699</span>
              <span className="font-body text-xl text-gray-600">per person (2D/2N)</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="font-body text-sm text-gray-700">
                <strong>Operators:</strong> Prosail Whitsundays (locally owned since 2018)
                <br />
                <strong>Boats:</strong> Three ex-racing maxi yachts (22.5-24m long)
                <br />
                <strong>Note:</strong> Current 2026 pricing. Daily departures across 3 boats.
              </p>
            </div>

            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Prosail operates three legendary ex-racing maxi yachts converted into adventure liveaboards. These boats were built for 
              speed and now offer the most popular backpacker sailing experience in the Whitsundays. With daily departures across three 
              boats, you'll find plenty of availability. The vibe is social and fun, with a young crew who genuinely love what they do. 
              You'll help hoist the sails, race other Prosail boats, and enjoy sunset drinks with your new mates.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">What's Included</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>✓ 2 nights dorm-style accommodation</li>
                  <li>✓ All meals (roast chicken, fresh bread, Tim Tams!)</li>
                  <li>✓ Whitehaven Beach & Hill Inlet Lookout</li>
                  <li>✓ 2-3 snorkel locations</li>
                  <li>✓ Snorkel gear & stinger suits</li>
                  <li>✓ Hot showers, USB charging, hammocks</li>
                  <li>✓ Marine Park fees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">Important Details</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>• Guests: 23-26 per boat</li>
                  <li>• Departures: Daily across 3 boats</li>
                  <li>• Age range: 18-45 (young at heart welcome)</li>
                  <li>• BYO alcohol (no glass or red wine)</li>
                  <li>• Dorm bunks (mix of singles & doubles)</li>
                  <li>• Social, party atmosphere</li>
                  <li>• Soft bags only (no wheels)</li>
                </ul>
              </div>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg mb-6">
              <p className="font-body text-sm text-gray-800">
                <strong>Why it stands out:</strong> Best value for money and most availability. Prosail consistently gets rave reviews 
                for their crew and the genuine adventure sailing experience. If you're looking to meet other travelers and don't mind 
                sharing space, this is unbeatable.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-4">
              <h4 className="font-heading text-lg font-bold text-gray-900 mb-2">Perfect For</h4>
              <p className="font-body text-gray-700">
                Solo travelers, backpackers, young couples, and anyone wanting a social adventure on a budget. If you like the idea 
                of making friends while sailing on a real racing yacht, this is your trip.
              </p>
            </div>

            <a
              href="https://prosail.com.au/book-now/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-pink-500 hover:bg-pink-600 text-white text-center font-heading font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Check Availability & Book
            </a>
          </div>
        </div>

        {/* Option 2: Avatar Trimaran - FASTEST & MOST SOCIAL */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-orange-500">
          <div className="relative h-80 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-700">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto mb-4 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 3L5.5 11h3.25L7 21l5.5-8h-3.25L11 3m9 0l-5.5 8h3.25L16 21l5.5-8h-3.25L20 3z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-body font-semibold text-sm mb-2">
                FASTEST & MOST SOCIAL
              </span>
              <h3 className="font-heading text-4xl font-bold text-white">
                Avatar Trimaran
              </h3>
              <p className="font-body text-white text-lg mt-2">
                The Only Trimaran in the Whitsundays
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-heading text-5xl font-bold text-orange-600">$689</span>
              <span className="font-body text-xl text-gray-600">per person (2D/2N)</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="font-body text-sm text-gray-700">
                <strong>Operator:</strong> OzSail (operating since 1985)
                <br />
                <strong>Boat:</strong> 67ft racing trimaran (3 hulls)
                <br />
                <strong>Departures:</strong> Tuesday, Thursday & Saturday at 11:30am
              </p>
            </div>

            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Avatar is the only commercial trimaran sailing in the Whitsundays, and it's genuinely special. With three hulls instead 
              of one, you get massive deck space with nets stretched across for sunbathing – imagine lying on a giant hammock while 
              flying across the water. The trimaran design means no lean when sailing, so you can walk around comfortably at all times. 
              Avatar is the fastest boat in the overnight fleet, and the vibe is definitely party-focused with a young, energetic crowd.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">What's Included</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>✓ 2 nights dorm accommodation</li>
                  <li>✓ All meals (spag bol, tacos, fresh salads)</li>
                  <li>✓ Whitehaven Beach & Hill Inlet</li>
                  <li>✓ 2-3 snorkel locations</li>
                  <li>✓ Snorkel gear & wetsuits</li>
                  <li>✓ Underwater blue lights (night viewing)</li>
                  <li>✓ Night snorkeling possible</li>
                  <li>✓ Marine Park fees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">Important Details</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>• Guests: 26 max</li>
                  <li>• Age range: 18-35 (backpacker focus)</li>
                  <li>• BYO alcohol (no glass or red wine)</li>
                  <li>• Dorm-style bunks + private doubles</li>
                  <li>• Returns 8-9am on final day</li>
                  <li>• Very social/party atmosphere</li>
                  <li>• Discount codes often available</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
              <p className="font-body text-sm text-gray-800">
                <strong>Why it stands out:</strong> The trimaran design is unique – you literally won't find this anywhere else in the 
                Whitsundays. The underwater blue lights attract marine life at night for an unforgettable viewing experience. Plus, it's 
                the cheapest option while still delivering an amazing experience.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg mb-6">
              <p className="font-body text-sm text-gray-800">
                <strong>Honest take:</strong> This is the party boat. If you want a quiet, romantic getaway, look elsewhere. But if 
                you're ready to make friends, stay up late, and sail on something truly special, Avatar delivers.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4">
              <h4 className="font-heading text-lg font-bold text-gray-900 mb-2">Perfect For</h4>
              <p className="font-body text-gray-700">
                Young backpackers, solo travelers, and anyone wanting maximum fun and social vibes. If you like the idea of sailing 
                on the fastest, most unique boat with a party atmosphere, Avatar is your jam.
              </p>
            </div>

            <a
              href="https://avatarwhitsundays.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-heading font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Check Availability & Book
            </a>
          </div>
        </div>

        {/* Option 3: Whitsunday Blue - LUXURY COUPLES */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-cyan-500">
          <div className="relative h-80 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto mb-4 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <span className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-full font-body font-semibold text-sm mb-2">
                LUXURY COUPLES
              </span>
              <h3 className="font-heading text-4xl font-bold text-white">
                Whitsunday Blue
              </h3>
              <p className="font-body text-white text-lg mt-2">
                Intimate Luxury Catamaran
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-heading text-5xl font-bold text-cyan-600">$1,075</span>
              <span className="font-body text-xl text-gray-600">per person (2D/2N)</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="font-body text-sm text-gray-700">
                <strong>Operator:</strong> Sailing Whitsundays
                <br />
                <strong>Boat:</strong> 40ft sailing catamaran (built 2004)
                <br />
                <strong>Also available:</strong> 3D/3N option for $1,372/person
              </p>
            </div>

            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Whitsunday Blue is the antidote to crowded backpacker boats. With just 8 guests total (4 couples), you get exclusive 
              comfort and genuine personal attention. Each of the four private cabins has its own ensuite bathroom, and the entire 
              boat is air-conditioned. The crew prepares delicious fresh meals, and you can choose to dine in the spacious saloon or 
              under the stars on the aft deck. This is proper luxury sailing without the megayacht price tag.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">What's Included</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>✓ Private double cabin with ensuite</li>
                  <li>✓ Air-conditioning throughout</li>
                  <li>✓ All freshly prepared meals</li>
                  <li>✓ Whitehaven Beach & Hill Inlet</li>
                  <li>✓ Multiple snorkel locations</li>
                  <li>✓ Stand-up paddleboards</li>
                  <li>✓ Marine blue lights (night viewing)</li>
                  <li>✓ Snorkel gear & stinger suits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">Important Details</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>• Guests: 8 max (4 couples)</li>
                  <li>• Age: 18+ only</li>
                  <li>• BYO alcohol allowed</li>
                  <li>• Dietary surcharge: $45pp</li>
                  <li>• Minimum 6 guests to depart</li>
                  <li>• Intimate, quiet atmosphere</li>
                  <li>• Perfect for honeymooners</li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg mb-6">
              <p className="font-body text-sm text-gray-800">
                <strong>Why it stands out:</strong> The 8-guest limit makes this feel like a private charter at a fraction of the cost. 
                Reviews consistently mention the exceptional crew (ask for Emma and Kev if you can), the quality of meals, and how 
                special it feels to have so few people aboard.
              </p>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 rounded-r-lg mb-6">
              <p className="font-body text-sm text-gray-800">
                <strong>Honest take:</strong> Yes, it's expensive – about 60% more than backpacker boats. But you're paying for 
                genuine luxury: private bathroom, air-conditioning, gourmet food, and intimacy. If your budget allows, it's worth 
                every dollar.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg p-4">
              <h4 className="font-heading text-lg font-bold text-gray-900 mb-2">Perfect For</h4>
              <p className="font-body text-gray-700">
                Couples, honeymooners, and anyone wanting privacy and comfort. If you value quality over quantity and want to avoid 
                the backpacker scene entirely, Whitsunday Blue is your boat.
              </p>
            </div>

            <a
              href="https://sailing-whitsundays.com/whitsundays/whitsunday-blue-2d2n"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-cyan-500 hover:bg-cyan-600 text-white text-center font-heading font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Check Availability & Book
            </a>
          </div>
        </div>

        {/* Option 4: Powerplay - FAMILY FUN */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-blue-600">
          <div className="relative h-80 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto mb-4 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,10A3.04,3.04 0 0,1 12,7A3.04,3.04 0 0,1 15,10A3.04,3.04 0 0,1 12,13A3.04,3.04 0 0,1 9,10M12,19L16,20V16.92A7.54,7.54 0 0,1 12,18A7.54,7.54 0 0,1 8,16.92V20M12,4A5.78,5.78 0 0,0 7.76,5.74A5.78,5.78 0 0,0 6,10A5.78,5.78 0 0,0 7.76,14.23A5.78,5.78 0 0,0 12,16A5.78,5.78 0 0,0 16.24,14.23A5.78,5.78 0 0,0 18,10A5.78,5.78 0 0,0 16.24,5.74A5.78,5.78 0 0,0 12,4M20,10A8.04,8.04 0 0,1 19.43,12.8A7.84,7.84 0 0,1 18,15.28V23L12,21L6,23V15.28A7.9,7.9 0 0,1 4,10A7.68,7.68 0 0,1 6.33,4.36A7.73,7.73 0 0,1 12,2A7.73,7.73 0 0,1 17.67,4.36A7.68,7.68 0 0,1 20,10Z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-body font-semibold text-sm mb-2">
                FAMILY FUN
              </span>
              <h3 className="font-heading text-4xl font-bold text-white">
                Powerplay
              </h3>
              <p className="font-body text-white text-lg mt-2">
                Three-Tier Catamaran with Jacuzzi
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-body text-xl text-gray-600">From</span>
              <span className="font-heading text-5xl font-bold text-blue-600">$690</span>
              <span className="font-body text-xl text-gray-600">per person</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="font-body text-sm text-gray-700">
                <strong>Operator:</strong> Explore Whitsundays
                <br />
                <strong>Boat:</strong> 45ft purpose-built catamaran
                <br />
                <strong>Options:</strong> 2D/2N or 3D/3N available
                <br />
                <strong>Note:</strong> Prices vary by cabin type. 3D/3N option also available.
              </p>
            </div>

            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Powerplay is the sweet spot between backpacker boats and luxury catamarans. With 16 guests max, it's social enough to 
              meet people but not so crowded you can't find space. The three-tier design gives everyone room to spread out, and the 
              heated jacuzzi on deck is genuinely fantastic for sunset drinks. The boat has a mix of private cabins and shared 
              accommodation, making it work for couples traveling together or small groups.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">What's Included</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>✓ Mix of private/shared cabins</li>
                  <li>✓ Heated onboard jacuzzi</li>
                  <li>✓ All freshly prepared meals</li>
                  <li>✓ North & South Whitehaven Beach</li>
                  <li>✓ Hill Inlet Lookout</li>
                  <li>✓ Multiple snorkel locations</li>
                  <li>✓ Stand-up paddleboards</li>
                  <li>✓ Marine blue lights</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">Important Details</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>• Guests: 16 max</li>
                  <li>• Age: 16+ only</li>
                  <li>• BYO alcohol (no red wine)</li>
                  <li>• Three-tier design</li>
                  <li>• Fun, social atmosphere</li>
                  <li>• Not suitable for young children</li>
                  <li>• Newly renovated</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
              <p className="font-body text-sm text-gray-800">
                <strong>Why it stands out:</strong> That jacuzzi! Seriously, watching the sunset from a heated spa while sailing through 
                the Whitsundays is magical. The boat is spacious enough that 16 people never feels crowded, and the three-level design 
                means you can always find your own spot.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
              <h4 className="font-heading text-lg font-bold text-gray-900 mb-2">Perfect For</h4>
              <p className="font-body text-gray-700">
                Older teenagers and parents, small groups of friends, or couples who want something nicer than backpacker boats but 
                more social than pure luxury. Great middle-ground option.
              </p>
            </div>

            <a
              href="https://powerplaywhitsundays.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-heading font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Check Availability & Book
            </a>
          </div>
        </div>

        {/* Option 5: Entice/O'Nice - SMALL GROUP ADVENTURE */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-purple-600">
          <div className="relative h-80 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto mb-4 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-10">
              <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full font-body font-semibold text-sm mb-2">
                SMALL GROUP ADVENTURE
              </span>
              <h3 className="font-heading text-4xl font-bold text-white">
                Entice & O'Nice
              </h3>
              <p className="font-body text-white text-lg mt-2">
                Sister Catamarans with Water Toys
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-body text-xl text-gray-600">From</span>
              <span className="font-heading text-5xl font-bold text-purple-600">$749</span>
              <span className="font-body text-xl text-gray-600">per person (2D/2N)</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="font-body text-sm text-gray-700">
                <strong>Operator:</strong> ISail Whitsundays (family-owned)
                <br />
                <strong>Boats:</strong> Two identical sister catamarans
                <br />
                <strong>Note:</strong> Prices vary by cabin type. Private ensuites from $901.
              </p>
            </div>

            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Entice and O'Nice are identical twin catamarans that represent Whitsunday Sailing Adventures' newest additions. With 
              just 10 guests, you get small group intimacy without paying luxury prices. What really sets these boats apart is the 
              incredible collection of water toys: clear-bottom canoe for reef viewing, sea scooters for underwater exploration, 
              stand-up paddleboards, and all the snorkel gear you need. Private double cabins are available.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">What's Included</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>✓ Private double cabins available</li>
                  <li>✓ Clear-bottom canoe</li>
                  <li>✓ Sea scooters</li>
                  <li>✓ Stand-up paddleboards</li>
                  <li>✓ All meals freshly prepared</li>
                  <li>✓ Whitehaven Beach & Hill Inlet</li>
                  <li>✓ Multiple snorkel locations</li>
                  <li>✓ Snorkel gear & wetsuits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-3">Important Details</h4>
                <ul className="font-body text-gray-700 space-y-2">
                  <li>• Guests: 10 max</li>
                  <li>• All ages welcome</li>
                  <li>• Mix of private/shared cabins</li>
                  <li>• State-of-the-art catamaran</li>
                  <li>• Smooth, stable ride</li>
                  <li>• Great for families</li>
                  <li>• Twin boats = more availability</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg mb-6">
              <p className="font-body text-sm text-gray-800">
                <strong>Why it stands out:</strong> The water toys are genuinely impressive. That clear-bottom canoe lets you glide 
                over the reef and see everything below without getting wet, while the sea scooters make snorkeling effortless and fun. 
                With only 10 people, you never wait for equipment.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
              <h4 className="font-heading text-lg font-bold text-gray-900 mb-2">Perfect For</h4>
              <p className="font-body text-gray-700">
                Families, small groups of friends, and couples who want more toys and activities than basic boats offer. Great choice 
                if you love water sports and want a quality catamaran experience without luxury pricing.
              </p>
            </div>

            <a
              href="https://isailwhitsundays.com/entice-catamarans"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-purple-600 hover:bg-purple-700 text-white text-center font-heading font-bold py-4 px-6 rounded-lg transition-colors duration-200"
            >
              Check Availability & Book
            </a>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-8 text-center">
            Quick Comparison
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="font-heading px-6 py-4 text-left text-sm font-bold text-gray-900">Tour</th>
                    <th className="font-heading px-6 py-4 text-left text-sm font-bold text-gray-900">Price</th>
                    <th className="font-heading px-6 py-4 text-left text-sm font-bold text-gray-900">Guests</th>
                    <th className="font-heading px-6 py-4 text-left text-sm font-bold text-gray-900">Accommodation</th>
                    <th className="font-heading px-6 py-4 text-left text-sm font-bold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="font-body divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Prosail Maxi Yachts</td>
                    <td className="px-6 py-4 text-gray-700">$699</td>
                    <td className="px-6 py-4 text-gray-700">23-26</td>
                    <td className="px-6 py-4 text-gray-700">Dorm bunks</td>
                    <td className="px-6 py-4 text-gray-700">Budget, social, backpackers</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Avatar Trimaran</td>
                    <td className="px-6 py-4 text-gray-700">$689</td>
                    <td className="px-6 py-4 text-gray-700">26</td>
                    <td className="px-6 py-4 text-gray-700">Dorm + doubles</td>
                    <td className="px-6 py-4 text-gray-700">Party, unique boat, 18-35s</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Whitsunday Blue</td>
                    <td className="px-6 py-4 text-gray-700">$1,075</td>
                    <td className="px-6 py-4 text-gray-700">8</td>
                    <td className="px-6 py-4 text-gray-700">Private ensuites</td>
                    <td className="px-6 py-4 text-gray-700">Couples, luxury, honeymooners</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Powerplay</td>
                    <td className="px-6 py-4 text-gray-700">From $690</td>
                    <td className="px-6 py-4 text-gray-700">16</td>
                    <td className="px-6 py-4 text-gray-700">Mix private/shared</td>
                    <td className="px-6 py-4 text-gray-700">Families, teens, mid-range</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Entice/O'Nice</td>
                    <td className="px-6 py-4 text-gray-700">From $749</td>
                    <td className="px-6 py-4 text-gray-700">10</td>
                    <td className="px-6 py-4 text-gray-700">Mix private/shared</td>
                    <td className="px-6 py-4 text-gray-700">Small groups, water toys</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Tips */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-heading text-4xl font-bold text-gray-900 mb-8">
          Booking Tips from a Local
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              When to Book
            </h3>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              Most boats book out 2-4 weeks in advance during peak season (June-September). If you're traveling during Australian 
              school holidays or Christmas, book even earlier – 6-8 weeks out. Shoulder seasons (April-May, September-October) usually 
              have better availability and sometimes discounted rates.
            </p>
            <p className="font-body text-gray-700 leading-relaxed">
              Prosail and Avatar have the most frequent departures (daily and 3x weekly respectively), so they're easier to book 
              last-minute. Whitsunday Blue only has one boat and fills quickly – book this one early.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              What to Pack
            </h3>
            <ul className="font-body text-gray-700 space-y-2">
              <li>✓ Soft bag only (no wheeled luggage – nowhere to store it)</li>
              <li>✓ Reef-safe sunscreen (regular sunscreen damages coral)</li>
              <li>✓ Seasickness tablets if prone to motion sickness</li>
              <li>✓ Light sweater/jacket for evenings (it can get breezy)</li>
              <li>✓ Phone charging cable (most boats have USB ports)</li>
              <li>✓ Your own alcohol if BYO (no glass, no red wine)</li>
              <li>✓ Waterproof phone case for photos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Weather Considerations
            </h3>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              <strong>Best weather:</strong> April-October (winter/spring). Calm seas, beautiful days, perfect sailing conditions.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              <strong>Stinger season:</strong> November-May. All boats provide stinger suits – wear them. Box jellyfish and irukandji 
              are rare but the suits give peace of mind.
            </p>
            <p className="font-body text-gray-700 leading-relaxed">
              <strong>Wet season:</strong> December-March. Higher chance of rain and rougher seas, but also emptier boats and better 
              prices. The Whitsundays are beautiful even in rain.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Important to Know
            </h3>
            <ul className="font-body text-gray-700 space-y-3">
              <li>• All boats have weight restrictions (usually around 110-120kg per person due to tender boat limits)</li>
              <li>• You'll need basic mobility – climbing in/out of tenders, moving around the boat</li>
              <li>• Seasickness is real even in calm waters – take medication BEFORE boarding</li>
              <li>• Shore power only at marina – limited charging while sailing</li>
              <li>• Marine Park fee ($6.50/day) helps protect this incredible ecosystem</li>
              <li>• Most boats offer luggage storage in Airlie Beach if you have excess bags</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-8">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                How much time do we actually spend at Whitehaven Beach?
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                Most overnight trips spend 2-3 hours at Whitehaven Beach, typically visiting on Day 2. However, if your main goal 
                is maximizing beach time, specialized day tours like Cruise Whitsundays Chill & Grill offer up to 6 hours there. 
                The real advantage of overnight trips isn't more beach time – it's the complete experience: sleeping under the stars, 
                exploring multiple locations, snorkeling at several reef sites, and enjoying the journey as much as the destination.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                What if I get seasick?
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                Take medication BEFORE you board – it's much more effective as prevention than treatment. The Whitsundays are 
                generally calm (protected by the reef), but some people still get queasy. Catamarans like Powerplay and Entice are 
                more stable than monohulls. Bring ginger tablets as a natural backup. Most importantly, don't let fear of seasickness 
                stop you – it's usually fine once you're moving.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Can I charge my phone/camera?
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                Most boats have USB charging ports in cabins and common areas. However, battery life is limited when not plugged into 
                shore power. Bring a fully charged power bank, and be strategic about when you charge devices. Definitely charge 
                everything the night before you board.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                What's the food like?
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                Better than you'd expect! Prosail serves proper roast dinners with fresh bread. Whitsunday Blue has gourmet meals. 
                All boats accommodate dietary requirements (vegetarian, vegan, gluten-free) if you notify them in advance – sometimes 
                with a small surcharge. You won't go hungry, and the quality is genuinely good.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Should I book backpacker boats if I'm 40+?
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                Absolutely – "young at heart" is more important than your actual age. Many 40-60 year-olds have fantastic experiences 
                on Prosail boats. However, if you value privacy and quiet, look at Whitsunday Blue or Entice instead. The key question 
                is: do you want to socialize and party, or do you want peace and comfort?
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                Are these trips safe? What about marine stingers?
              </h3>
              <p className="font-body text-gray-700 leading-relaxed">
                Yes, very safe. All operators have decades of experience, safety equipment, and crew trained in first aid. During 
                stinger season (November-May), boats provide stinger suits which you must wear when swimming. Box jellyfish and 
                irukandji are extremely rare in the Whitsundays, but the suits give 100% protection. Outside stinger season, you 
                don't need suits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            Ready to Sleep Under the Stars?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Overnight sailing trips book out fast, especially during peak season. Secure your spot now and get ready for one of 
            Australia's most incredible adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Booking Help
            </Link>
            <Link
              href="/things-to-do"
              className="inline-block bg-blue-800 text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-blue-900 transition-colors"
            >
              Explore More Tours
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
