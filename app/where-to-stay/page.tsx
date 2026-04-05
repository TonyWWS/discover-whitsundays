import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Where to Stay in the Whitsundays | Discover Whitsundays',
  description: 'Airlie Beach, island resorts, or overnight sailing — how to choose where to stay in the Whitsundays based on budget, travel style, and what you want to do.',
  openGraph: {
    title: 'Where to Stay in the Whitsundays | Discover Whitsundays',
    description: 'Airlie Beach, island resorts, or overnight sailing — how to choose where to stay in the Whitsundays.',
    url: 'https://discoverwhitsundays.com/where-to-stay',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/where-to-stay-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where to Stay in the Whitsundays | Discover Whitsundays',
    description: 'Airlie Beach, island resorts, or overnight sailing — how to choose.',
    images: ['/images/where-to-stay-hero.jpg'],
  },
};

const airlieTiers = [
  {
    tier: 'Budget',
    range: '$50–120/night',
    type: 'Hostels, budget hotels, basic motels',
    accent: '#0B6E72',
    expect: [
      'Clean, basic rooms with essential amenities',
      'Shared or private bathroom options',
      'Central location near the main street',
      'Pool and communal areas at most properties',
      'Good for meeting other travellers',
    ],
    bestFor: [
      'Backpackers and solo travellers',
      'Budget-conscious couples',
      'People who spend most time on tours',
      'Anyone who just needs somewhere to sleep',
    ],
  },
  {
    tier: 'Mid-range',
    range: '$120–250/night',
    type: 'Hotels, apartments, resort-style properties',
    accent: '#E07B39',
    expect: [
      'Private rooms with ensuite bathrooms',
      'Air conditioning, TV, WiFi',
      'Resort pools, gyms, spas at many properties',
      'Apartments with kitchens and laundry',
      'Often include breakfast or BBQ access',
    ],
    bestFor: [
      'Couples wanting comfort and privacy',
      'Families needing space',
      'Extended stays of 3+ nights',
      'Those wanting resort amenities without island prices',
    ],
  },
  {
    tier: 'Luxury',
    range: '$250–500+/night',
    type: 'Premium hotels and beachfront resorts',
    accent: '#0B6E72',
    expect: [
      'Premium rooms with ocean views',
      'High-end amenities throughout',
      'Multiple restaurants, bars, and pools',
      'Spa, concierge, room service',
      'Prime waterfront locations',
    ],
    bestFor: [
      'Honeymoons and special occasions',
      'Those wanting island-style luxury on the mainland',
      'Travellers combining tours with genuine relaxation',
      'Anyone who values top-tier service',
    ],
  },
];

const islandResorts = [
  {
    name: 'Hamilton Island',
    subtitle: 'Largest and most developed resort island',
    accent: '#0B6E72',
    features: [
      'Multiple restaurants and bars',
      'Golf course, wildlife park, marina',
      'Family-friendly with plenty of activities',
      'Direct flights from major cities',
    ],
    price: 'From $300–1,500+/night depending on room type',
  },
  {
    name: 'Daydream Island',
    subtitle: 'All-inclusive packages available',
    accent: '#E07B39',
    features: [
      'All-inclusive packages available',
      'Living Reef, outdoor cinema',
      'Multiple pools and beach access',
      '20-minute ferry from the mainland',
    ],
    price: 'From $400–800/night (packages from $600+)',
  },
  {
    name: 'Long Island',
    subtitle: 'Boutique eco-resort, quieter crowd',
    accent: '#0B6E72',
    features: [
      'Eco-certified boutique resort',
      '17km walking trails and secluded beaches',
      'Smaller, more intimate atmosphere',
      'Good snorkelling at Happy Bay',
    ],
    price: 'From $250–500/night',
  },
];

const sailingTiers = [
  {
    name: 'Budget',
    description: 'Backpacker boats with shared dorm-style bunks. Social, party atmosphere.',
    price: 'From $270/person (2D/2N trip)',
  },
  {
    name: 'Mid-range',
    description: 'Small group catamarans (10–16 guests) with a mix of private cabins and shared spaces.',
    price: 'From $370/person (2D/2N trip)',
  },
  {
    name: 'Luxury',
    description: 'Only 8 guests, private ensuite cabins, air-con, gourmet meals, romantic atmosphere.',
    price: 'From $540/person (2D/2N trip)',
  },
];

const combinations = [
  { label: 'Budget + luxury', detail: '2 nights Airlie Beach + 2 nights island resort' },
  { label: 'Adventure mix', detail: '3 nights Airlie Beach + 2-night sailing trip' },
  { label: 'Full experience', detail: '1 night Airlie + 3 nights island + 1 night Airlie' },
];

const faqs = [
  {
    q: 'Is it better to stay on the mainland or an island?',
    a: 'Mainland (Airlie Beach) is better for budget, convenience, and variety of dining and activities. Islands are better for luxury, seclusion, and the resort experience. Many visitors do both — a few nights on the mainland and a few on an island. If you\'re on a budget and plan to do multiple day tours, Airlie Beach is the smarter base.',
  },
  {
    q: 'How many nights should I stay?',
    a: 'Minimum 3 nights to experience the highlights — Whitehaven Beach, snorkelling, sailing. 5–7 nights is ideal for a relaxed pace with multiple tours, an island visit, and some downtime. 2 nights works if you\'re time-limited but will feel rushed.',
  },
  {
    q: 'Do I need a car in Airlie Beach?',
    a: 'Not essential. Airlie Beach is walkable, and most tours pick up from accommodation. A car is useful for exploring nearby areas (Cedar Creek Falls, Conway National Park) or grocery shopping. Airport transfers and taxis are readily available.',
  },
  {
    q: 'Are island resorts all-inclusive?',
    a: 'Most are not. Daydream Island offers all-inclusive packages. Hamilton Island and others typically charge separately for meals, activities, and extras. Always check what\'s included when comparing prices — the base rate can be misleading.',
  },
  {
    q: 'Can I visit Whitehaven Beach from any accommodation?',
    a: 'Yes. All day tours depart from Airlie Beach. If you\'re based on an island, you\'ll need to ferry back to Airlie to join most tours — that adds time and cost. Some island resorts run their own Whitehaven trips but they\'re often more expensive.',
  },
];

export default function WhereToStayPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/where-to-stay-hero.jpg"
            alt="Waterfront accommodation and marina in Airlie Beach, Whitsundays"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/60 via-[#1A2E35]/40 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
                Where to Stay
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-lg">
                Mainland, island, or on the water — how to choose the right base for your trip.
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl">
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
              The honest answer to "where should I stay?" depends on two things: your budget and
              whether you plan to do day tours or want to be immersed on the water from day one.
              Most people underestimate how much transfers to and from island resorts affect the
              total cost — factor that in before you compare prices.
            </p>
          </div>
        </div>

        {/* Three-way overview */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
              {[
                { title: 'Airlie Beach', sub: 'Budget-friendly, central, best for day tours', accent: '#0B6E72' },
                { title: 'Island Resorts', sub: 'Luxury, seclusion, higher total cost', accent: '#E07B39' },
                { title: 'Overnight Sailing', sub: 'Adventure, great value, best experience', accent: '#0B6E72' },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-b-4"
                  style={{ borderColor: card.accent, borderTopColor: '#D1E8E8', borderLeftColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderTopWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px' }}
                >
                  <h3 className="font-heading text-lg font-bold mb-2" style={{ color: '#1A2E35' }}>
                    {card.title}
                  </h3>
                  <p className="font-body text-sm" style={{ color: '#4A5C61' }}>{card.sub}</p>
                </div>
              ))}
            </div>

            {/* Quick decision guide */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: '#1A2E35' }}
            >
              <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-6">
                Quick decision guide
              </h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-4" style={{ color: '#8BBCBC' }}>
                    Choose Airlie Beach if you
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Want to save money on accommodation',
                      'Plan to take multiple day tours',
                      'Like restaurants, nightlife, and shops nearby',
                      'Prefer more dining and entertainment options',
                      'Want easy access to the mainland',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span style={{ color: '#E07B39' }} aria-hidden="true">&#8594;</span>
                        <span className="font-body text-sm text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-4" style={{ color: '#8BBCBC' }}>
                    Choose an island resort if you
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Want a luxury, resort-style experience',
                      'Prefer seclusion and privacy',
                      'Don\'t mind spending more on accommodation',
                      'Want to wake up surrounded by water',
                      'Are celebrating something special',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span style={{ color: '#E07B39' }} aria-hidden="true">&#8594;</span>
                        <span className="font-body text-sm text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Airlie Beach section */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-3" style={{ color: '#1A2E35' }}>
              Airlie Beach Accommodation
            </h2>
            <p className="font-body text-base mb-10" style={{ color: '#4A5C61' }}>
              The mainland hub offers the best value and most flexibility. All tours depart from here.
            </p>

            <div className="space-y-6">
              {airlieTiers.map((tier) => (
                <article
                  key={tier.tier}
                  className="bg-white rounded-2xl border border-b-4 overflow-hidden"
                  style={{ borderColor: '#D1E8E8', borderBottomColor: tier.accent }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-5">
                      <h3 className="font-heading text-xl md:text-2xl font-bold" style={{ color: '#1A2E35' }}>
                        {tier.tier}
                      </h3>
                      <span
                        className="font-heading font-bold text-sm px-3 py-1 rounded-lg w-fit"
                        style={{ backgroundColor: tier.accent, color: '#fff' }}
                      >
                        {tier.range}
                      </span>
                    </div>
                    <p className="font-body text-sm mb-5" style={{ color: '#4A5C61' }}>{tier.type}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-heading font-bold text-sm mb-3" style={{ color: '#1A2E35' }}>
                          What to expect
                        </h4>
                        <div className="space-y-2">
                          {tier.expect.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                style={{ backgroundColor: tier.accent }}
                                aria-hidden="true"
                              />
                              <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm mb-3" style={{ color: '#1A2E35' }}>
                          Best for
                        </h4>
                        <div className="space-y-2">
                          {tier.bestFor.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                style={{ backgroundColor: tier.accent }}
                                aria-hidden="true"
                              />
                              <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Island resorts section */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-3" style={{ color: '#1A2E35' }}>
              Island Resorts
            </h2>
            <p className="font-body text-base mb-10" style={{ color: '#4A5C61' }}>
              Wake up surrounded by water. Island resorts offer the ultimate tropical experience —
              though the total cost is higher than it first appears once you factor in transfers and meals.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {islandResorts.map((resort) => (
                <div
                  key={resort.name}
                  className="bg-white p-6 rounded-2xl border-b-4 shadow-sm"
                  style={{ borderColor: resort.accent, borderTopColor: '#D1E8E8', borderLeftColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderTopWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px' }}
                >
                  <h3 className="font-heading text-lg font-bold mb-1" style={{ color: '#1A2E35' }}>
                    {resort.name}
                  </h3>
                  <p className="font-body text-xs mb-4" style={{ color: '#4A5C61' }}>{resort.subtitle}</p>
                  <div className="space-y-2 mb-5">
                    {resort.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: resort.accent }}
                          aria-hidden="true"
                        />
                        <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: '#F4FAFA' }}
                  >
                    <p className="font-body text-xs" style={{ color: '#4A5C61' }}>{resort.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Island considerations */}
            <div
              className="p-6 md:p-8 rounded-xl border-l-4"
              style={{ backgroundColor: '#fff', borderColor: '#E07B39' }}
            >
              <h3 className="font-heading text-lg font-bold mb-4" style={{ color: '#1A2E35' }}>
                Before you book an island resort
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { label: 'Transfers add up', detail: 'Ferry or helicopter transfers cost $50–200 per person each way. Factor this in before comparing prices with Airlie Beach.' },
                  { label: 'Tour access', detail: 'Most tours depart from Airlie Beach, not the islands. You\'ll need to ferry back for day tours, which adds time and cost.' },
                  { label: 'Food costs', detail: 'Island resort dining runs $30–80 per meal. Most don\'t include meals in base rates — check carefully.' },
                  { label: 'Activities extra', detail: 'Water sports, spa treatments, and experiences cost extra on top of accommodation at most resorts.' },
                ].map(({ label, detail }) => (
                  <div key={label}>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                      <span className="font-bold">{label}:</span> {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Overnight sailing section */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-3" style={{ color: '#1A2E35' }}>
              Overnight Sailing as Accommodation
            </h2>
            <p className="font-body text-base mb-8" style={{ color: '#4A5C61' }}>
              Sleep under the stars on a sailing adventure. Accommodation, meals, and activities
              all included — often the best-value way to experience the islands properly.
            </p>

            <div
              className="p-6 md:p-8 rounded-2xl border mb-8"
              style={{ backgroundColor: '#F4FAFA', borderColor: '#D1E8E8' }}
            >
              <h3 className="font-heading text-lg font-bold mb-5" style={{ color: '#1A2E35' }}>
                Why overnight sailing makes sense
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'All-inclusive value', detail: 'Accommodation + all meals + tours + snorkel gear + Marine Park fees included' },
                  { label: 'Unique experience', detail: 'Sleep on the water, wake up at Whitehaven Beach before the day tours arrive' },
                  { label: 'Maximum time on the water', detail: '2–3 full days exploring vs a single day tour' },
                  { label: 'Often better value', detail: '$270–540/person/night includes everything — compare that to hotel + tours + meals separately' },
                ].map(({ label, detail }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: '#0B6E72' }}
                      aria-hidden="true"
                    />
                    <p className="font-body text-sm" style={{ color: '#1A2E35' }}>
                      <span className="font-bold">{label}:</span> {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {sailingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="bg-white p-5 rounded-xl border"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  <h4 className="font-heading font-bold text-base mb-2" style={{ color: '#1A2E35' }}>
                    {tier.name}
                  </h4>
                  <p className="font-body text-sm mb-3 leading-relaxed" style={{ color: '#4A5C61' }}>
                    {tier.description}
                  </p>
                  <p className="font-body text-xs font-bold" style={{ color: '#0B6E72' }}>
                    {tier.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/tours/overnight-sailing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-heading font-bold text-sm tracking-wide transition-opacity hover:opacity-80 min-h-[44px]"
                style={{ backgroundColor: '#0B6E72', color: '#fff' }}
              >
                Compare overnight sailing options
              </Link>
            </div>
          </div>
        </section>

        {/* Booking tips */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1A2E35' }}>
              Booking & planning tips
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-2xl border-b-4 shadow-sm" style={{ borderColor: '#0B6E72', borderTopColor: '#D1E8E8', borderLeftColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderTopWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px' }}>
                <h3 className="font-heading text-lg font-bold mb-4" style={{ color: '#1A2E35' }}>When to book</h3>
                <div className="space-y-3">
                  {[
                    { season: 'Peak (Jun–Aug)', tip: 'Book 3–6 months ahead. Highest prices but best weather.' },
                    { season: 'Shoulder (Apr–May, Sep–Nov)', tip: 'Book 6–8 weeks ahead. Great weather, better prices, fewer crowds.' },
                    { season: 'Summer (Dec–Mar)', tip: 'Can book 2–4 weeks ahead. Lowest prices but stinger season and possible rain.' },
                  ].map(({ season, tip }) => (
                    <p key={season} className="font-body text-sm" style={{ color: '#1A2E35' }}>
                      <span className="font-bold">{season}:</span> {tip}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border-b-4 shadow-sm" style={{ borderColor: '#E07B39', borderTopColor: '#D1E8E8', borderLeftColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderTopWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px' }}>
                <h3 className="font-heading text-lg font-bold mb-4" style={{ color: '#1A2E35' }}>Money-saving tips</h3>
                <div className="space-y-2">
                  {[
                    'Book direct with properties for best rates',
                    'Consider apartments with kitchens to save on dining',
                    'Airlie Beach + day tours often cheaper than island resorts total',
                    'Overnight sailing includes accommodation + activities + meals',
                    'Stay longer (5+ nights) for better rates',
                  ].map((tip) => (
                    <div key={tip} className="flex items-start gap-2">
                      <span style={{ color: '#E07B39' }} aria-hidden="true">&#8594;</span>
                      <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Combination strategies */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border" style={{ borderColor: '#D1E8E8' }}>
              <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                Combination strategies
              </h3>
              <p className="font-body text-sm mb-5" style={{ color: '#4A5C61' }}>
                Many visitors combine accommodation types for the best overall experience.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {combinations.map((combo) => (
                  <div
                    key={combo.label}
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: '#F5F0E8' }}
                  >
                    <p className="font-body text-sm" style={{ color: '#1A2E35' }}>
                      <span className="font-bold">{combo.label}:</span> {combo.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1A2E35' }}>
              Common questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white p-6 rounded-xl border"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  <h3 className="font-heading text-base font-bold mb-3" style={{ color: '#1A2E35' }}>
                    {faq.q}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to start planning?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Search current availability and compare prices directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.booking.com/searchresults.html?ss=Airlie+Beach"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                Search Airlie Beach
              </a>
              <a
                href="https://www.booking.com/searchresults.html?ss=Whitsunday+Islands"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#fff', color: '#0B6E72' }}
              >
                Compare island resorts
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
