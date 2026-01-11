import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function WhereToStayPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/where-to-stay-hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Where to Stay in the Whitsundays
          </h1>
          <p className="font-['Inter'] text-xl md:text-2xl text-white/95 drop-shadow-lg max-w-3xl mx-auto">
            From budget-friendly Airlie Beach to luxury island resorts
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Inter'] text-xl text-gray-700 leading-relaxed text-center mb-12">
            Choosing where to stay in the Whitsundays depends on your budget, travel style, and what
            you want to experience. From the vibrant mainland town of Airlie Beach to secluded island
            resorts, there's accommodation to suit every traveler.
          </p>

          {/* Quick Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-b-4 border-[#FF6B6B] p-6 rounded-2xl shadow-xl">
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-gray-900 mb-2">Airlie Beach</h3>
              <p className="font-['Inter'] text-sm text-gray-600">Budget-friendly, nightlife, tour departure point</p>
            </div>
            <div className="bg-white border-b-4 border-[#4ECDC4] p-6 rounded-2xl shadow-xl">
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-gray-900 mb-2">Island Resorts</h3>
              <p className="font-['Inter'] text-sm text-gray-600">Luxury, seclusion, all-inclusive options</p>
            </div>
            <div className="bg-white border-b-4 border-[#FFE66D] p-6 rounded-2xl shadow-xl">
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-gray-900 mb-2">Overnight Sailing</h3>
              <p className="font-['Inter'] text-sm text-gray-600">Adventure, unique experience, great value</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Decision Guide */}
      <div className="bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#4ECDC4] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Quick Decision Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white border border-white/20">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-6">Choose Airlie Beach if you:</h3>
                <ul className="space-y-3 font-['Inter']">
                  <li className="flex items-start">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>Want to save money on accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>Like nightlife, restaurants, and shopping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>Plan to take multiple day tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>Prefer more dining and entertainment options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFE66D] mr-3 font-bold text-lg">•</span>
                    <span>Want easy access to the mainland</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white border border-white/20">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-6">Choose Island Resort if you:</h3>
                <ul className="space-y-3 font-['Inter']">
                  <li className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Want a luxury, all-inclusive experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Prefer seclusion and privacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Don't mind spending more on accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Want to wake up on the water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <span>Looking for a honeymoon/special occasion stay</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Airlie Beach Accommodation */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Airlie Beach Accommodation
            </h2>
            <p className="font-['Inter'] text-center text-gray-600 mb-12 text-xl max-w-3xl mx-auto">
              The mainland hub offers the best value and variety. All tours depart from here,
              and you'll find plenty of restaurants, bars, and shops.
            </p>

            {/* Budget */}
            <div className="mb-12">
              <div className="bg-white border-b-4 border-[#228B22] p-8 rounded-2xl shadow-xl mb-8">
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-gray-900">Budget ($50-120/night)</h3>
                    <p className="font-['Inter'] text-gray-600 text-lg">Hostels, budget hotels, and basic motels</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-gray-900 mb-4">What to Expect</h4>
                    <ul className="space-y-2 font-['Inter'] text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#228B22] mr-2 font-bold">•</span>
                        <span>Clean, basic rooms with essential amenities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#228B22] mr-2 font-bold">•</span>
                        <span>Shared or private bathroom options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#228B22] mr-2 font-bold">•</span>
                        <span>Central location near the main street</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#228B22] mr-2 font-bold">•</span>
                        <span>Pool and communal areas (most properties)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#228B22] mr-2 font-bold">•</span>
                        <span>Great for meeting other travelers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-gray-900 mb-4">Best For</h4>
                    <ul className="space-y-2 font-['Inter'] text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#228B22] mr-2 font-bold">•</span>
                        <span>Backpackers and solo travelers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#228B22] mr-2 font-bold">•</span>
                        <span>Budget-conscious couples</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#228B22] mr-2 font-bold">•</span>
                        <span>People who spend most time on tours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#228B22] mr-2 font-bold">•</span>
                        <span>Social atmosphere seekers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mid-Range */}
              <div className="bg-white border-b-4 border-[#FF6B6B] p-8 rounded-2xl shadow-xl mb-8">
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-gray-900">Mid-Range ($120-250/night)</h3>
                    <p className="font-['Inter'] text-gray-600 text-lg">Hotels, apartments, and resort-style properties</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl">
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-gray-900 mb-4">What to Expect</h4>
                    <ul className="space-y-2 font-['Inter'] text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                        <span>Private rooms with ensuite bathrooms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                        <span>Air conditioning, TV, WiFi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                        <span>Resort pools, gyms, spas (many properties)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                        <span>Apartments with kitchens and laundry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                        <span>Often include breakfast or access to BBQ</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl">
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-gray-900 mb-4">Best For</h4>
                    <ul className="space-y-2 font-['Inter'] text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                        <span>Couples wanting comfort and privacy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                        <span>Families needing space</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                        <span>Extended stays (3+ nights)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2 font-bold">•</span>
                        <span>Those wanting resort amenities without island prices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Luxury */}
              <div className="bg-white border-b-4 border-[#4ECDC4] p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-gray-900">Luxury ($250-500+/night)</h3>
                    <p className="font-['Inter'] text-gray-600 text-lg">Premium hotels and beachfront resorts</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl">
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-gray-900 mb-4">What to Expect</h4>
                    <ul className="space-y-2 font-['Inter'] text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                        <span>Premium rooms with ocean views</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                        <span>High-end amenities (robes, quality toiletries)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                        <span>Multiple restaurants, bars, and pools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                        <span>Spa, concierge, room service</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                        <span>Prime waterfront locations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl">
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-gray-900 mb-4">Best For</h4>
                    <ul className="space-y-2 font-['Inter'] text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                        <span>Honeymoons and special occasions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                        <span>Those wanting island-style luxury on mainland</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                        <span>People who value top-tier service</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                        <span>Travelers combining tours with relaxation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Island Resorts */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Island Resorts
            </h2>
            <p className="font-['Inter'] text-center text-gray-600 mb-12 text-xl max-w-3xl mx-auto">
              Wake up surrounded by turquoise waters. Island resorts offer the ultimate tropical escape,
              though they come at a premium price.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Hamilton Island */}
              <div className="bg-white border-b-4 border-[#4ECDC4] p-6 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-3">Hamilton Island</h3>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">The largest and most developed resort island</p>
                <div className="space-y-2 font-['Inter'] text-sm text-gray-700 mb-4">
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                    <span>Multiple restaurants and bars</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                    <span>Golf course, wildlife park, marina</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                    <span>Family-friendly with activities</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-2 font-bold">•</span>
                    <span>Direct flights from major cities</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg">
                  <p className="font-['Inter'] text-xs text-gray-700">
                    <strong>From:</strong> $300-1,500+/night depending on room type
                  </p>
                </div>
              </div>

              {/* Daydream Island */}
              <div className="bg-white border-b-4 border-[#FFE66D] p-6 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-3">Daydream Island</h3>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">All-inclusive luxury resort option</p>
                <div className="space-y-2 font-['Inter'] text-sm text-gray-700 mb-4">
                  <div className="flex items-start">
                    <span className="text-[#FFE66D] mr-2 font-bold">•</span>
                    <span>All-inclusive packages available</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#FFE66D] mr-2 font-bold">•</span>
                    <span>Living Reef, outdoor cinema</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#FFE66D] mr-2 font-bold">•</span>
                    <span>Multiple pools and beach access</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#FFE66D] mr-2 font-bold">•</span>
                    <span>20-min ferry from mainland</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 rounded-lg">
                  <p className="font-['Inter'] text-xs text-gray-700">
                    <strong>From:</strong> $400-800/night (packages from $600+)
                  </p>
                </div>
              </div>

              {/* Long Island */}
              <div className="bg-white border-b-4 border-[#228B22] p-6 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-3">Long Island</h3>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">Tranquil eco-resort experience</p>
                <div className="space-y-2 font-['Inter'] text-sm text-gray-700 mb-4">
                  <div className="flex items-start">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Eco-certified, boutique resort</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Walking trails and secluded beaches</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Smaller, more intimate atmosphere</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#228B22] mr-2 font-bold">•</span>
                    <span>Great for couples seeking quiet</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
                  <p className="font-['Inter'] text-xs text-gray-700">
                    <strong>From:</strong> $250-500/night
                  </p>
                </div>
              </div>
            </div>

            {/* Island Resort Considerations */}
            <div className="bg-white border-l-4 border-[#FF6B6B] p-6 rounded-xl shadow-lg">
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-4">
                Important Island Resort Considerations
              </h3>
              <div className="grid md:grid-cols-2 gap-6 font-['Inter'] text-gray-700">
                <div>
                  <p className="mb-3"><strong>Transfers Add Up:</strong> Ferry or helicopter transfers cost $50-200 per person each way. Factor this into your budget.</p>
                  <p className="mb-3"><strong>Limited Tour Access:</strong> Most tours depart from Airlie Beach, not islands. You'll need to ferry back for tours.</p>
                </div>
                <div>
                  <p className="mb-3"><strong>Food Costs:</strong> Island resort dining is expensive ($30-80 per meal). Most don't include meals in base rates.</p>
                  <p className="mb-3"><strong>Activities Extra:</strong> Water sports, spa treatments, and experiences cost extra on top of accommodation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overnight Sailing as Accommodation */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Overnight Sailing as Accommodation
            </h2>
            <p className="font-['Inter'] text-center text-gray-600 mb-12 text-xl max-w-3xl mx-auto">
              Sleep under the stars on a sailing adventure — one of the best-value ways to experience
              the islands with accommodation, meals, and activities included.
            </p>

            <div className="bg-white border-b-4 border-[#4ECDC4] p-8 rounded-2xl shadow-xl mb-8">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-6">
                Why Choose Overnight Sailing?
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 font-['Inter'] text-gray-700">
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <div>
                      <strong>All-Inclusive Value:</strong> Accommodation + all meals + tours + snorkel gear + Marine Park fees included
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <div>
                      <strong>Unique Experience:</strong> Sleep on the water, wake up at Whitehaven Beach
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <div>
                      <strong>Social Atmosphere:</strong> Meet fellow travelers from around the world
                    </div>
                  </div>
                </div>
                <div className="space-y-4 font-['Inter'] text-gray-700">
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <div>
                      <strong>Maximum Time on Water:</strong> 2-3 full days exploring vs single day tours
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <div>
                      <strong>Great for Budgets:</strong> $270-540/night includes everything (compare to hotel + tours + meals separately)
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#4ECDC4] mr-3 font-bold text-lg">•</span>
                    <div>
                      <strong>Adventurous Vibe:</strong> Perfect for backpackers, couples, and young-at-heart travelers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl shadow-lg">
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-gray-900 mb-3">Budget Options</h4>
                <p className="font-['Inter'] text-sm text-gray-700 mb-3">
                  Backpacker boats with shared dorm-style bunks. Social, party atmosphere.
                </p>
                <p className="font-['Inter'] text-xs text-gray-600">
                  <strong>From:</strong> $270/night (2D/2N trip)
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg">
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-gray-900 mb-3">Mid-Range Options</h4>
                <p className="font-['Inter'] text-sm text-gray-700 mb-3">
                  Small group catamarans (10-16 guests) with mix of private cabins and shared spaces.
                </p>
                <p className="font-['Inter'] text-xs text-gray-600">
                  <strong>From:</strong> $370/night (2D/2N trip)
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-lg">
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-gray-900 mb-3">Luxury Options</h4>
                <p className="font-['Inter'] text-sm text-gray-700 mb-3">
                  Only 8 guests, private ensuite cabins, air-con, gourmet meals, romantic atmosphere.
                </p>
                <p className="font-['Inter'] text-xs text-gray-600">
                  <strong>From:</strong> $540/night (2D/2N trip)
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/overnight-sailing"
                className="inline-block bg-gradient-to-r from-[#4ECDC4] to-[#6ED9D1] text-white px-8 py-4 rounded-xl font-['Plus_Jakarta_Sans'] font-bold text-lg hover:shadow-xl transition-all"
              >
                Compare Overnight Sailing Options
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Tips */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-bold text-gray-900 mb-12 text-center">
              Booking & Planning Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* When to Book */}
              <div className="bg-white border-b-4 border-[#1E3A8A] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-6">When to Book</h3>
                <div className="space-y-4 font-['Inter'] text-gray-700">
                  <div>
                    <strong>Peak (Jun-Aug):</strong> Book 3-6 months ahead. Highest prices but best weather.
                  </div>
                  <div>
                    <strong>Shoulder (Apr-May, Sep-Nov):</strong> Book 6-8 weeks ahead. Great weather, better prices, fewer crowds.
                  </div>
                  <div>
                    <strong>Summer (Dec-Mar):</strong> Can book 2-4 weeks ahead. Lowest prices but stinger season and possible rain.
                  </div>
                </div>
              </div>

              {/* Money-Saving Tips */}
              <div className="bg-white border-b-4 border-[#228B22] p-8 rounded-2xl shadow-xl">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-6">Money-Saving Tips</h3>
                <ul className="space-y-3 font-['Inter'] text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#228B22] mr-3 font-bold text-lg">$</span>
                    <span>Book direct with properties for best rates and packages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#228B22] mr-3 font-bold text-lg">$</span>
                    <span>Consider apartments with kitchens to save on dining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#228B22] mr-3 font-bold text-lg">$</span>
                    <span>Airlie Beach + day tours often cheaper than island resorts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#228B22] mr-3 font-bold text-lg">$</span>
                    <span>Overnight sailing includes accommodation + activities + meals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#228B22] mr-3 font-bold text-lg">$</span>
                    <span>Stay longer (5+ nights) for better rates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Combination Strategies */}
            <div className="bg-white border-b-4 border-[#FFE66D] p-8 rounded-2xl shadow-xl mb-8">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-4">Combination Strategies</h3>
              <p className="font-['Inter'] text-gray-700 mb-6">
                Many travelers combine accommodation types for the best experience:
              </p>
              <div className="grid md:grid-cols-3 gap-4 font-['Inter'] text-gray-700">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl">
                  <strong>Budget + Luxury:</strong> 2 nights Airlie Beach + 2 nights island resort
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl">
                  <strong>Adventure Mix:</strong> 3 nights Airlie Beach + 2-night sailing trip
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl">
                  <strong>Full Experience:</strong> 1 night Airlie + 3 nights island + 1 night Airlie
                </div>
              </div>
            </div>

            {/* What to Know */}
            <div className="bg-white border-l-4 border-[#FF6B6B] p-8 rounded-xl shadow-lg">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-gray-900 mb-6">
                What to Know Before Booking
              </h3>
              <div className="grid md:grid-cols-2 gap-6 font-['Inter'] text-gray-700">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>All tours depart from Airlie Beach (not islands)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>Island transfers add $50-200 to your costs</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>Airlie Beach has free lagoon for swimming</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#FF6B6B] mr-3 font-bold text-lg">•</span>
                    <span>Most island resorts don't include meals in base price</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-[#4ECDC4] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  Is it better to stay on the mainland or an island?
                </h3>
                <p className="font-['Inter'] text-gray-700">
                  Mainland (Airlie Beach) is better for budget, convenience, and variety of dining/activities.
                  Islands are better for luxury, seclusion, and an all-in-one resort experience. Many visitors
                  do both - a few nights on mainland and a few on an island.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#FFE66D] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  How many nights should I stay?
                </h3>
                <p className="font-['Inter'] text-gray-700">
                  Minimum 3 nights to experience the highlights (Whitehaven Beach, snorkeling, sailing).
                  5-7 nights is ideal for a relaxed pace with multiple tours, island visits, and downtime.
                  2 nights works if you're time-limited but will feel rushed.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#FF6B6B] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  Do I need a car in Airlie Beach?
                </h3>
                <p className="font-['Inter'] text-gray-700">
                  Not essential. Airlie Beach is walkable, and tours pick up from accommodations. However,
                  a car is useful for: exploring nearby areas (Cedar Creek Falls, Conway National Park),
                  grocery shopping, or staying in Cannonvale. Airport transfers and taxis are readily available.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#1E3A8A] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  Are island resorts all-inclusive?
                </h3>
                <p className="font-['Inter'] text-gray-700">
                  Most are NOT all-inclusive. Daydream Island offers all-inclusive packages. Hamilton Island
                  and others typically charge separately for meals, activities, and extras. Always check
                  what's included when comparing prices.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#4ECDC4] p-6 rounded-xl shadow-lg">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-gray-900 mb-3">
                  Can I visit Whitehaven Beach from any accommodation?
                </h3>
                <p className="font-['Inter'] text-gray-700">
                  Yes! All day tours depart from Airlie Beach. If you're on an island, you'll need to take
                  a ferry back to Airlie Beach to join tours (adds time and cost). Some island resorts offer
                  their own Whitehaven trips, but they're often more expensive.
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
            Ready to Book Your Stay?
          </h2>
          <p className="font-['Inter'] text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Compare prices and find the perfect accommodation for your Whitsundays adventure
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.booking.com/searchresults.html?ss=Airlie+Beach"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1E3A8A] px-8 py-4 rounded-xl font-['Plus_Jakarta_Sans'] font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
            >
              Search Airlie Beach Hotels
            </a>
            <a
              href="https://www.booking.com/searchresults.html?ss=Whitsunday+Islands"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4ECDC4] text-white px-8 py-4 rounded-xl font-['Plus_Jakarta_Sans'] font-bold text-lg hover:bg-[#3db9b0] transition-colors shadow-xl"
            >
              Compare Island Resorts
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
