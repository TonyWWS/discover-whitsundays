import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '3-Day Whitsundays Itinerary | Discover Whitsundays',
  description: 'Only have a long weekend? Here\'s exactly how I\'d spend three days in the Whitsundays — Whitehaven Beach, reef snorkelling, and Airlie Beach done properly.',
  openGraph: {
    title: '3-Day Whitsundays Itinerary | Discover Whitsundays',
    description: 'Only have a long weekend? Here\'s exactly how I\'d spend three days in the Whitsundays.',
    url: 'https://discoverwhitsundays.com/itinerary-3-day',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/itinerary-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3-Day Whitsundays Itinerary | Discover Whitsundays',
    description: 'Only have a long weekend? Here\'s exactly how I\'d spend three days in the Whitsundays.',
    images: ['/images/itinerary-hero.jpg'],
  },
};

const budgets = [
  {
    label: 'Budget',
    range: '$600–790 per person',
    accent: '#0B6E72',
    bg: '#E8F4F5',
    note: 'Hostels, budget tours, self-catering, limited dining out',
    items: [
      { label: 'Accommodation (3 nights)', value: '$180–240' },
      { label: 'Whitehaven Beach tour', value: '$130–180' },
      { label: 'Reef snorkelling tour', value: '$150–200' },
      { label: 'Meals (simple/self-catering)', value: '$90–120' },
      { label: 'Airport transfers', value: '$50' },
      { label: 'Total per person', value: '$600–790', bold: true },
    ],
  },
  {
    label: 'Mid-range',
    range: '$1,110–1,410 per person',
    accent: '#E07B39',
    bg: '#F5F0E8',
    note: 'Comfortable hotel, premium tours, dining out, some extras',
    items: [
      { label: 'Accommodation (3 nights)', value: '$450–600' },
      { label: 'Whitehaven Beach tour', value: '$180–220' },
      { label: 'Reef snorkelling tour', value: '$200–250' },
      { label: 'Meals (restaurants)', value: '$180–240' },
      { label: 'Extras and activities', value: '$100' },
      { label: 'Total per person', value: '$1,110–1,410', bold: true },
    ],
  },
];

const faqs = [
  {
    q: 'Is 3 days enough for the Whitsundays?',
    a: 'Yes. Three days lets you experience the main highlights without feeling rushed. You\'ll see Whitehaven Beach, snorkel the reef, and have time to enjoy Airlie Beach. If you have more time, 5–7 days allows for an overnight sailing trip or an island resort stay.',
  },
  {
    q: 'Should I book tours before arriving?',
    a: 'Yes, especially in peak season (June–August). Popular tours sell out days or weeks ahead. Book at least 2–4 weeks in advance. Shoulder and low season you can often book closer to the date, but you\'ll have more limited options.',
  },
  {
    q: 'What if the weather is bad?',
    a: 'Most reputable operators will reschedule you at no charge if weather is unsafe. Rain doesn\'t necessarily cancel tours — check with operators. This is why Whitehaven Beach is on Day 2, giving Day 3 as a fallback if needed.',
  },
  {
    q: 'Can I do this itinerary if I can\'t swim?',
    a: 'Yes. Whitehaven Beach is shallow and calm — you can enjoy it without swimming. For snorkelling, most tours provide flotation devices and guides who help beginners. The beach and lookout walk alone are worth the trip.',
  },
  {
    q: 'Is this suitable for families with kids?',
    a: 'Yes, with some caveats. Most tours are family-friendly. Some have minimum age requirements (typically 4–6 years) — check before booking. ZigZag Whitsundays and Whitehaven Xpress are the most family-oriented Whitehaven day trip operators.',
  },
];

export default function ThreeDayItineraryPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/itinerary-hero.jpg"
            alt="Sailing through the Whitsunday Islands on a clear day"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/60 via-[#1A2E35]/40 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
                3-Day Whitsundays Itinerary
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-lg">
                Only have a long weekend? Here&apos;s what I&apos;d do.
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl">
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
              Three days is enough to see the things that actually matter here — if you use the time
              well. Whitehaven Beach on Day 2 is non-negotiable. The reef on Day 3 rounds it out.
              Day 1 is arrival and orientation. The order matters: scheduling Whitehaven early means
              if weather forces a reschedule, Day 3 is your fallback.
            </p>
          </div>
        </div>

        {/* Quick info strip */}
        <div style={{ backgroundColor: '#F5F0E8', borderColor: '#D1E8E8' }} className="py-8 md:py-10 border-b">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 md:gap-6">
              {[
                { label: 'Budget', value: '$600–900', sub: 'per person' },
                { label: 'Best for', value: 'First-timers', sub: 'couples & families' },
                { label: 'Pace', value: 'Balanced', sub: 'active but relaxed' },
              ].map((fact) => (
                <div key={fact.label} className="text-center">
                  <div className="font-heading text-lg md:text-2xl font-bold" style={{ color: '#1A2E35' }}>
                    {fact.value}
                  </div>
                  <div className="font-body text-xs" style={{ color: '#0B6E72' }}>{fact.label}</div>
                  <div className="font-body text-xs" style={{ color: '#4A5C61' }}>{fact.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Days */}
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 max-w-3xl space-y-16">

          {/* Day 1 */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-white shrink-0"
                style={{ backgroundColor: '#0B6E72' }}
                aria-hidden="true"
              >
                1
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold" style={{ color: '#1A2E35' }}>
                  Arrival & Airlie Beach
                </h2>
                <p className="font-body text-sm" style={{ color: '#4A5C61' }}>Settle in and get your bearings</p>
              </div>
            </div>

            <div className="space-y-4">

              {/* Morning */}
              <div className="bg-white rounded-xl border p-6" style={{ borderColor: '#D1E8E8' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#E8F4F5', color: '#0B6E72' }}
                >
                  Morning
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Arrive & check in
                </h3>
                <div className="font-body text-sm leading-relaxed space-y-3" style={{ color: '#1A2E35' }}>
                  <p>
                    Fly into Whitsunday Coast Airport (Proserpine) or Hamilton Island, then transfer
                    to Airlie Beach — about 25 minutes from Proserpine, or a 30-minute ferry from
                    Hamilton.
                  </p>
                  <div
                    className="p-4 rounded-lg border-l-2"
                    style={{ backgroundColor: '#F4FAFA', borderColor: '#0B6E72' }}
                  >
                    <p className="font-bold mb-1" style={{ color: '#1A2E35' }}>Accommodation</p>
                    <p style={{ color: '#4A5C61' }}>
                      Stay in Airlie Beach for all three nights. Mid-range hotels ($150–250/night)
                      near the main street or waterfront offer the best balance of value and
                      convenience. Everything is walkable from here.
                    </p>
                    <Link
                      href="/where-to-stay"
                      className="inline-flex items-center mt-3 px-4 py-2 rounded-lg font-heading font-bold text-xs min-h-[36px] transition-opacity hover:opacity-80"
                      style={{ backgroundColor: '#0B6E72', color: '#fff' }}
                    >
                      Find accommodation
                    </Link>
                  </div>
                  <p>
                    After checking in, walk through town to get your bearings. Pick up reef-safe
                    sunscreen if you haven&apos;t already — you&apos;ll need it from tomorrow.
                  </p>
                </div>
              </div>

              {/* Afternoon */}
              <div className="bg-white rounded-xl border p-6" style={{ borderColor: '#D1E8E8' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#F5F0E8', color: '#E07B39' }}
                >
                  Afternoon
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Airlie Beach Lagoon
                </h3>
                <div className="font-body text-sm leading-relaxed space-y-3" style={{ color: '#1A2E35' }}>
                  <p>
                    Head to the Airlie Beach Lagoon — a free saltwater swimming pool on the
                    waterfront. Good for a swim after travelling. Lifeguarded, open 6am–7pm,
                    surrounded by cafes and restaurants.
                  </p>
                  <p>
                    Alternatively: walk the Bicentennial Walkway, wander the marina, or book your
                    tours in person with the operators on the main strip if you haven&apos;t done
                    it online already.
                  </p>
                </div>
              </div>

              {/* Evening */}
              <div className="bg-white rounded-xl border p-6" style={{ borderColor: '#D1E8E8' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#E8F4F5', color: '#0B6E72' }}
                >
                  Evening
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Sunset & dinner
                </h3>
                <div className="font-body text-sm leading-relaxed space-y-3" style={{ color: '#1A2E35' }}>
                  <p>
                    Watch the sunset from the marina — the Whitsundays sunsets over the islands are
                    genuinely good. Then an early dinner and an early night. You have a 7:30am start tomorrow.
                  </p>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#F4FAFA' }}
                  >
                    <p className="font-bold text-xs mb-2" style={{ color: '#1A2E35' }}>Dinner options</p>
                    <div className="space-y-1">
                      {[
                        { name: 'Fish D\'vine', note: 'Waterfront, fresh seafood, rum bar' },
                        { name: 'Coca Chu', note: 'Asian fusion, popular with locals' },
                        { name: 'Déjà Vu', note: 'Modern Australian, marina views' },
                        { name: 'Airlie Beach Hotel bistro', note: 'Budget option, reliable' },
                      ].map(({ name, note }) => (
                        <p key={name} style={{ color: '#4A5C61' }}>
                          <span className="font-bold" style={{ color: '#1A2E35' }}>{name}</span> — {note}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Day 2 */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-white shrink-0"
                style={{ backgroundColor: '#E07B39' }}
                aria-hidden="true"
              >
                2
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold" style={{ color: '#1A2E35' }}>
                  Whitehaven Beach
                </h2>
                <p className="font-body text-sm" style={{ color: '#4A5C61' }}>The main event</p>
              </div>
            </div>

            {/* Why Day 2 callout */}
            <div
              className="rounded-xl p-5 mb-6 border-l-4"
              style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
            >
              <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                <span className="font-bold">Why Whitehaven is on Day 2:</span> If weather forces a
                tour reschedule, you have Day 3 as a fallback. Most operators will move you at no
                charge. Scheduling it Day 3 means you&apos;re relying on luck with no buffer.
              </p>
            </div>

            <div className="space-y-4">

              <div className="bg-white rounded-xl border border-l-4 p-6" style={{ borderColor: '#D1E8E8', borderLeftColor: '#E07B39' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#F5F0E8', color: '#E07B39' }}
                >
                  6:30–7:30am
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Pickup & departure
                </h3>
                <div className="font-body text-sm leading-relaxed space-y-3" style={{ color: '#1A2E35' }}>
                  <p>
                    Most tours depart 7:30–8:30am with pickup from your accommodation. Have breakfast
                    beforehand or bring something quick.
                  </p>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#F4FAFA' }}>
                    <p className="font-bold text-xs mb-2" style={{ color: '#1A2E35' }}>What to bring</p>
                    {['Swimwear, towel, change of clothes', 'Reef-safe sunscreen and hat', 'Camera or phone in a waterproof case', 'Light jacket for the boat ride', 'Water bottle (refills usually provided)'].map((item) => (
                      <div key={item} className="flex items-start gap-2 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: '#0B6E72' }} aria-hidden="true" />
                        <span style={{ color: '#4A5C61' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-l-4 p-6" style={{ borderColor: '#D1E8E8', borderLeftColor: '#E07B39' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#F5F0E8', color: '#E07B39' }}
                >
                  8:30–11:00am
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Sail to Whitehaven Beach
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                  Enjoy the boat ride through the islands — most tours provide morning tea and
                  commentary about the region. First stop is usually Hill Inlet Lookout (weather
                  and tide permitting). The 20–30 minute uphill walk rewards you with the famous
                  swirling sands view. Do it. Don&apos;t skip it to stay on the boat.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-l-4 p-6" style={{ borderColor: '#D1E8E8', borderLeftColor: '#E07B39' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#F5F0E8', color: '#E07B39' }}
                >
                  11:00am–2:00pm
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Whitehaven Beach time
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                  Around 2–3 hours on the beach. Swim, walk the sand, find a quiet spot away from
                  the tour group. Most tours provide a buffet lunch — eat it on the beach if you
                  can. There are no facilities here — no kiosks, no shade structures — which is
                  exactly the point.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-l-4 p-6" style={{ borderColor: '#D1E8E8', borderLeftColor: '#E07B39' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#F5F0E8', color: '#E07B39' }}
                >
                  2:00–4:00pm
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Snorkelling stop
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                  After Whitehaven, most tours include a snorkelling stop — Langford Island or a
                  fringing reef around Hook Island. Equipment provided. Usually 45–60 minutes in
                  the water. Guides point out highlights and help beginners.
                </p>
              </div>

              <div className="bg-white rounded-xl border p-6" style={{ borderColor: '#D1E8E8' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#E8F4F5', color: '#0B6E72' }}
                >
                  Evening
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Back in Airlie, early night
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                  Tours return around 5:00–5:30pm. You&apos;ll be tired. Keep the evening low-key —
                  shower, casual dinner on the main street, early night. You have the reef tomorrow.
                </p>
              </div>

            </div>
          </section>

          {/* Day 3 */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-heading text-xl md:text-2xl font-bold text-white shrink-0"
                style={{ backgroundColor: '#0B6E72' }}
                aria-hidden="true"
              >
                3
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold" style={{ color: '#1A2E35' }}>
                  Great Barrier Reef snorkelling
                </h2>
                <p className="font-body text-sm" style={{ color: '#4A5C61' }}>Experience the reef & depart</p>
              </div>
            </div>

            <div className="space-y-4">

              <div className="bg-white rounded-xl border border-l-4 p-6" style={{ borderColor: '#D1E8E8', borderLeftColor: '#0B6E72' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#E8F4F5', color: '#0B6E72' }}
                >
                  Morning
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Outer reef tour
                </h3>
                <div className="font-body text-sm leading-relaxed space-y-3" style={{ color: '#1A2E35' }}>
                  <p>
                    Day 2 covered inner reefs around the islands. Today, an outer Great Barrier Reef
                    tour visits Hardy Reef or similar — different marine life, more impressive coral.
                    Similar early departure (7:30–8:00am), full-day return around 4:00–5:00pm.
                  </p>
                  <p>
                    Expect 2–3 snorkelling sessions at different reef sites, lunch on board, and
                    marine naturalist commentary. Some tours offer diving for certified divers
                    (extra cost). If you have an afternoon flight, choose a half-day option.
                  </p>
                  <div
                    className="p-4 rounded-lg border-l-2"
                    style={{ backgroundColor: '#F4FAFA', borderColor: '#E07B39' }}
                  >
                    <p className="font-body text-xs" style={{ color: '#1A2E35' }}>
                      <span className="font-bold">Check-out is typically 10am.</span> You may need to
                      store luggage at your accommodation or a tour office. Most are happy to do this —
                      confirm when you check in.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-l-4 p-6" style={{ borderColor: '#D1E8E8', borderLeftColor: '#0B6E72' }}>
                <div
                  className="inline-block px-3 py-1 rounded-full font-heading font-bold text-xs mb-4"
                  style={{ backgroundColor: '#E8F4F5', color: '#0B6E72' }}
                >
                  Afternoon
                </div>
                <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Departure options
                </h3>
                <div className="font-body text-sm leading-relaxed space-y-3" style={{ color: '#1A2E35' }}>
                  <p>
                    <span className="font-bold">Evening flight:</span> Full-day reef tour, return
                    around 5pm, dinner in town, transfer to airport.
                  </p>
                  <p>
                    <span className="font-bold">Afternoon flight:</span> Half-day reef tour or skip
                    it. Spend the morning at the lagoon or do a 60-minute scenic flight over Heart Reef
                    before heading to the airport.
                  </p>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#F4FAFA' }}
                  >
                    <p className="font-bold text-xs mb-2" style={{ color: '#1A2E35' }}>Alternative Day 3 if you prefer slower pace</p>
                    {['Morning scenic flight over Heart Reef and the islands', 'Cedar Creek Falls (30 minutes from Airlie)', 'Kayak rental and explore the coastline', 'Walk the Bicentennial Walkway one more time'].map((item) => (
                      <div key={item} className="flex items-start gap-2 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: '#0B6E72' }} aria-hidden="true" />
                        <span style={{ color: '#4A5C61' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Budget breakdown */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1A2E35' }}>
              Budget breakdown
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {budgets.map((budget) => (
                <div
                  key={budget.label}
                  className="p-6 rounded-2xl border-t-4"
                  style={{ backgroundColor: budget.bg, borderColor: budget.accent }}
                >
                  <h3 className="font-heading text-lg font-bold mb-1" style={{ color: '#1A2E35' }}>
                    {budget.label}
                  </h3>
                  <p className="font-body text-xs mb-5" style={{ color: '#4A5C61' }}>{budget.note}</p>
                  <div className="space-y-2">
                    {budget.items.map((item) => (
                      <div
                        key={item.label}
                        className={`flex justify-between font-body text-sm ${item.bold ? 'font-bold border-t pt-2 mt-2' : ''}`}
                        style={{ borderColor: '#D1E8E8', color: '#1A2E35' }}
                      >
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-5 rounded-xl border-l-4"
              style={{ backgroundColor: '#fff', borderColor: '#0B6E72' }}
            >
              <p className="font-heading font-bold text-sm mb-3" style={{ color: '#1A2E35' }}>
                Money-saving tips
              </p>
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  'Book tours online in advance for best availability',
                  'Stay in apartments with kitchen to save on meals',
                  'Shoulder season (Apr–May, Sep–Nov) means cheaper prices across the board',
                  'The free lagoon means you don\'t need to pay for resort pool access',
                  'Overnight sailing includes accommodation + activities + meals — often better value than this itinerary for 2+ nights',
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: '#0B6E72' }} aria-hidden="true" />
                    <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Customisation */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1A2E35' }}>
              Customise this itinerary
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'More beach time',
                  body: 'Skip the Day 3 reef tour. Spend the morning at the lagoon or take a half-day scenic flight instead.',
                  note: 'Good for: relaxed travellers, afternoon flights',
                },
                {
                  title: 'Replace with overnight sailing',
                  body: 'Swap Days 2–3 for a 2-day/1-night sailing trip. Includes Whitehaven, snorkelling, accommodation, and meals.',
                  note: 'Good for: adventure seekers, social travellers',
                },
                {
                  title: 'Add a scenic flight',
                  body: 'Add a morning scenic flight over Heart Reef and the islands on Day 1 or Day 3. 60–70 minutes.',
                  note: 'Good for: photography, special occasions',
                },
              ].map(({ title, body, note }) => (
                <div key={title} className="bg-white p-5 rounded-xl border" style={{ borderColor: '#D1E8E8' }}>
                  <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#1A2E35' }}>{title}</h3>
                  <p className="font-body text-sm leading-relaxed mb-3" style={{ color: '#1A2E35' }}>{body}</p>
                  <p className="font-body text-xs" style={{ color: '#4A5C61' }}>{note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1A2E35' }}>
              Tips for the trip
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl border-l-4" style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}>
                <h3 className="font-heading font-bold text-sm mb-3" style={{ color: '#1A2E35' }}>Do this</h3>
                <div className="space-y-2">
                  {[
                    'Book tours 2–4 weeks ahead (peak season)',
                    'Use reef-safe sunscreen — reef regulations, not optional',
                    'Take seasickness tablets the night before if prone',
                    'Bring a reusable water bottle',
                    'Check weather forecasts and tide times before Whitehaven',
                  ].map((tip) => (
                    <div key={tip} className="flex items-start gap-2">
                      <span style={{ color: '#0B6E72' }} aria-hidden="true">&#10003;</span>
                      <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl border-l-4" style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}>
                <h3 className="font-heading font-bold text-sm mb-3" style={{ color: '#1A2E35' }}>Avoid this</h3>
                <div className="space-y-2">
                  {[
                    'Don\'t overpack activities — leave time to sit with it',
                    'Don\'t touch coral or marine life when snorkelling',
                    'Don\'t take sand, shells, or coral from beaches (illegal)',
                    'Don\'t book two big tours on back-to-back days if you fatigue easily',
                    'Don\'t expect mobile coverage on the islands',
                  ].map((tip) => (
                    <div key={tip} className="flex items-start gap-2">
                      <span style={{ color: '#E07B39' }} aria-hidden="true">&#10007;</span>
                      <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1A2E35' }}>
              Common questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white p-6 rounded-xl border" style={{ borderColor: '#D1E8E8' }}>
                  <h3 className="font-heading text-base font-bold mb-3" style={{ color: '#1A2E35' }}>
                    {faq.q}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to book it?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Start with the thing that matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours/whitehaven-beach-tours"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                Book Whitehaven Tour
              </Link>
              <Link
                href="/where-to-stay"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#fff', color: '#0B6E72' }}
              >
                Find Accommodation
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
