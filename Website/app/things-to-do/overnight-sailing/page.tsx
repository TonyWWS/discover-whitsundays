import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Overnight Sailing in the Whitsundays | Discover Whitsundays',
  description: 'The best way to experience the Whitsundays — wake up at Whitehaven before the crowds, access anchorages day tours never reach. Honest guide to choosing the right vessel.',
  openGraph: {
    title: 'Overnight Sailing in the Whitsundays | Discover Whitsundays',
    description: 'Wake up at Whitehaven before the crowds. Honest guide to choosing the right vessel.',
    url: 'https://discoverwhitsundays.com/tours/overnight-sailing',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/overnight-sailing-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overnight Sailing in the Whitsundays | Discover Whitsundays',
    description: 'Wake up at Whitehaven before the crowds. Honest guide to choosing the right vessel.',
    images: ['/images/overnight-sailing-hero.jpg'],
  },
};

const tiers = [
  {
    title: 'Party and adventure',
    subtitle: 'Ages 18–35 — social, high-energy, great value',
    accentColor: '#E07B39',
    bg: '#F5F0E8',
    priceRange: 'From $755 per person — 2 days, 2 nights',
    description: 'The most popular overnight sailing category in the Whitsundays, and the most reviewed. Large vessels, big groups, BYO alcohol, waterslides, scuba diving add-ons, and an atmosphere designed around meeting people. The crew handles everything — you just show up and have fun. Genuinely excellent value when you factor in all meals, snorkelling gear, and accommodation.',
    whoFor: 'Solo travellers on the east coast circuit, groups of friends, couples who want a social atmosphere. Not the right pick if you want quiet anchorages and small numbers.',
    worthNoting: 'Atlantic Clipper is the most reviewed boat in the Whitsundays by a significant margin — 54 passengers, 111 feet, 3 levels, waterslides, heated spa. If you\'re 18–35 and want the experience everyone on the east coast talks about, this is it. New Horizon (same operator, True Blue Sailing) is smaller and slightly more laid-back if 54 people sounds like too many.',
    vessels: ['Atlantic Clipper — 54 guests, True Blue Sailing', 'New Horizon — smaller, same company, more relaxed', 'OzSail vessels (Spank Me, Avatar trimaran, Mandrake)'],
    bookingNote: 'Book direct with True Blue Sailing or OzSail for best pricing. Both have real-time availability online.',
    image: '/images/overnight-sailing-social.jpg',
    imageAlt: 'Atlantic Clipper sailing through the Whitsunday Passage with guests on deck',
  },
  {
    title: 'Small group, mixed ages',
    subtitle: 'Adults of all ages — relaxed, sociable, genuine sailing',
    accentColor: '#0B6E72',
    bg: '#E8F4F5',
    priceRange: 'From $780 per person — 2 days, 2 nights',
    description: 'The sweet spot for most visitors. Small enough to feel personal — usually 10 to 16 guests — big enough to be sociable. All meals included, genuine sailing rather than motorised cruising, snorkelling at reef sites the big boats don\'t reach, and a crew that actually knows your name by day two. This tier covers a wide range of vessels at different price points.',
    whoFor: 'Couples, groups of friends, solo travellers over 30, anyone who wants the overnight sailing experience without the party boat atmosphere. Also the best option for anyone short on time — Summertime does a 2D1N trip for those with limited days.',
    worthNoting: 'Blizzard stands out in this category — a modern Beneteau 50 catamaran, max 10 guests, adult-only, 3 days 2 nights. Whitsunday Adventurer (12 guests) has a heated spa, clear kayak, and underwater blue lights at night. Eureka II (14 guests) is a good mid-price option. Summertime (16 guests) is the best choice if you only have time for a 2D1N.',
    vessels: [
      'Blizzard — 10 guests, Beneteau 50 catamaran, adult-only, 3D2N',
      'Whitsunday Adventurer — 12 guests, heated spa, clear kayak',
      'Eureka II — 14 guests, good mid-price option',
      'Summertime — 16 guests, 2D1N option for time-short travellers',
      'Prima — 12 guests, traditional monohull, family-friendly',
    ],
    bookingNote: 'Explore Whitsundays (explorewhitsundays.com) represents the broadest fleet in this category and has been operating since 1985. Good starting point for comparing available vessels and dates.',
    image: '/images/overnight-sailing-small-group.jpg',
    imageAlt: 'Small group sailing catamaran anchored in a secluded bay in the Whitsunday Islands',
  },
  {
    title: 'Luxury and couples',
    subtitle: 'Private cabins, ensuites, 8 guests maximum',
    accentColor: '#1A2E35',
    bg: '#F4FAFA',
    priceRange: 'From $1,200 per person — 2 days, 2 nights',
    description: 'A fundamentally different experience. Maximum 8 guests, all private air-conditioned cabins with ensuites, a two-person crew who double as your hosts and chefs, and access to anchorages and coves the larger vessels can\'t reach. You\'re essentially chartering a luxury yacht with a skipper — without needing to organise a private charter yourself. The per-person cost is higher but the experience is in a different league.',
    whoFor: 'Couples celebrating something. Small groups of friends who want privacy. Anyone for whom the quality of sleep, food, and experience matters more than the social atmosphere. Also genuinely the best option for a honeymoon in the Whitsundays.',
    worthNoting: 'Whitsunday Blue is the standout — 41-foot Lagoon catamaran, 4 private cabins (3 with ensuites), adults-only, departs Saturdays. Limited to 8 guests and books out well ahead in peak season. Whitsunday Getaway offers a similar experience. Both access Blue Pearl Bay off Hayman Island and other spots the big boats never visit.',
    vessels: [
      'Whitsunday Blue — 8 guests, Lagoon catamaran, 4 private cabins, Saturday departures',
      'Whitsunday Getaway — 8 guests, private ensuites, luxury catamaran',
    ],
    bookingNote: 'Book as far ahead as possible — peak season (Jun–Aug) books out months in advance for vessels at this level. Explore Whitsundays represents both vessels.',
    image: '/images/overnight-sailing-luxury.jpg',
    imageAlt: 'Luxury sailing catamaran at sunset in a secluded Whitsunday Islands anchorage',
  },
];

const faqs = [
  {
    q: 'Is overnight sailing worth it over a day trip?',
    a: 'Yes — if you have the time. A day trip shows you Whitehaven Beach and maybe a reef stop. Overnight sailing shows you the Whitsundays at sunrise before the day tours arrive, takes you to anchorages that day trips never reach, and gives the whole experience room to breathe. It\'s not a better version of a day trip — it\'s a different experience altogether.',
  },
  {
    q: 'What\'s the difference between 2D2N and 3D2N?',
    a: 'Two days, two nights means you board in the afternoon of day one and return by midday on day three — you get two full days on the water. Three days, two nights means you board in the morning of day one, giving you an extra half-day of sailing. The 3D2N option is worth it if you can manage the schedule.',
  },
  {
    q: 'Will I get seasick?',
    a: 'The Whitsunday Passage can be choppy, particularly in winter when the trade winds are up. Catamarans are significantly more stable than monohulls. If you\'re prone to seasickness, choose a catamaran and take medication the night before — not on the boat. The inner island anchorages are generally very calm once you\'re settled for the night.',
  },
  {
    q: 'Is BYO alcohol allowed?',
    a: 'On most budget and mid-range vessels, yes. Typically cans only — no glass, no red wine, limits on quantity (usually 24 cans or equivalent per person). Check your specific vessel before boarding. Luxury vessels in the upper tier generally have a licensed bar on board.',
  },
  {
    q: 'What do I need to bring?',
    a: 'Soft bag only — no hard case luggage, no wheelie bags. Space on yachts is minimal. Swimwear, light clothing, hat, reef-safe sunscreen, a warm layer for winter evenings, camera, and any medication including seasickness tablets. Most luggage storage is available in Airlie Beach if you\'re continuing your trip afterwards.',
  },
  {
    q: 'How do I choose between 50+ vessels?',
    a: 'Start with the three questions: How many people do you want on board? What\'s your budget? Do you want a social atmosphere or a quieter experience? That narrows the field significantly. Once you\'ve answered those, Explore Whitsundays (the longest-operating tour agent in the region) can match you to available vessels and dates. The turtle in the bottom right corner can also help narrow it down if you tell it what you\'re after.',
  },
];

export default function OvernightSailingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/overnight-sailing-hero.jpg"
            alt="Sailing yacht at anchor in a secluded Whitsunday Islands bay at sunset"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/55 via-[#1A2E35]/35 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center justify-center">
            <div className="max-w-3xl text-white text-center">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
                Overnight Sailing
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-lg">
                Wake up at Whitehaven before the crowds arrive. The best way to see
                the Whitsundays — if you have the time.
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl">
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
              A day trip to Whitehaven Beach shows you one thing. Overnight sailing shows you
              the Whitsundays. You anchor in bays the day tours never reach, you snorkel reefs
              that don&apos;t appear on any tourist map, and you watch the sun rise over the
              islands from the water before a single other boat has left the marina. There are
              reportedly up to 50 vessels operating overnight trips out of Airlie Beach. The
              quality gap between them is significant. Here&apos;s how to think about it.
            </p>
          </div>
        </div>

        {/* Why overnight */}
        <section className="py-10 md:py-12 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {[
                {
                  title: 'Before the crowds',
                  body: 'Day tours arrive at Whitehaven at 10am. Overnight vessels anchor there the night before. You have the beach to yourself in the morning — different light, no crowd, no noise.',
                  accent: '#0B6E72',
                },
                {
                  title: 'Inaccessible anchorages',
                  body: 'Large day tour vessels can only anchor in a handful of locations. Small overnight boats reach coves, bays, and reef systems that day trippers never see.',
                  accent: '#E07B39',
                },
                {
                  title: 'All-inclusive value',
                  body: 'Accommodation, all meals, snorkelling gear, Marine Park fees — all included. Compare that to hotel + day tour + reef tour + meals booked separately.',
                  accent: '#0B6E72',
                },
              ].map((point) => (
                <div
                  key={point.title}
                  className="bg-white p-5 rounded-xl border-t-4"
                  style={{
                    borderColor: point.accent,
                    borderLeftColor: '#D1E8E8',
                    borderRightColor: '#D1E8E8',
                    borderBottomColor: '#D1E8E8',
                    borderLeftWidth: '1px',
                    borderRightWidth: '1px',
                    borderBottomWidth: '1px',
                  }}
                >
                  <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#1A2E35' }}>
                    {point.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three tiers */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-2"
              style={{ color: '#1A2E35' }}
            >
              Choosing the right vessel
            </h2>
            <p className="font-body text-sm mb-10" style={{ color: '#4A5C61' }}>
              Three questions narrow it down fast: How many people do you want on board?
              What&apos;s your budget? Social atmosphere or quiet anchorage?
            </p>

            <div className="space-y-10">
              {tiers.map((tier) => (
                <article
                  key={tier.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  {/* Image */}
                  <div className="relative h-52 md:h-64">
                    <Image
                      src={tier.image}
                      alt={tier.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A2E35]/10 to-[#1A2E35]/80" />
                    <div className="absolute bottom-0 left-0 p-5 md:p-6">
                      <div
                        className="inline-block px-3 py-1 rounded-lg font-heading font-bold text-xs tracking-widest uppercase mb-2 text-white"
                        style={{ backgroundColor: tier.accentColor }}
                      >
                        {tier.title}
                      </div>
                      <p className="font-body text-sm text-white/85">{tier.subtitle}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 md:p-8 space-y-5">

                    {/* Price */}
                    <div
                      className="inline-block px-4 py-2 rounded-lg font-heading font-bold text-sm"
                      style={{ backgroundColor: tier.bg, color: tier.accentColor }}
                    >
                      {tier.priceRange}
                    </div>

                    {/* Description */}
                    <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                      {tier.description}
                    </p>

                    {/* Who for + vessels */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div
                          className="text-xs font-heading font-bold tracking-widest uppercase mb-3"
                          style={{ color: '#0B6E72' }}
                        >
                          Who this suits
                        </div>
                        <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                          {tier.whoFor}
                        </p>
                      </div>
                      <div>
                        <div
                          className="text-xs font-heading font-bold tracking-widest uppercase mb-3"
                          style={{ color: '#0B6E72' }}
                        >
                          Vessels in this tier
                        </div>
                        <div className="space-y-2">
                          {tier.vessels.map((vessel) => (
                            <div key={vessel} className="flex items-start gap-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                style={{ backgroundColor: tier.accentColor }}
                                aria-hidden="true"
                              />
                              <span className="font-body text-sm" style={{ color: '#1A2E35' }}>
                                {vessel}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Worth noting */}
                    <div
                      className="rounded-lg px-5 py-4 border-l-2"
                      style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
                    >
                      <div
                        className="text-xs font-heading font-bold tracking-widest uppercase mb-1.5"
                        style={{ color: '#E07B39' }}
                      >
                        Worth noting
                      </div>
                      <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                        {tier.worthNoting}
                      </p>
                    </div>

                    {/* Booking note */}
                    <div
                      className="rounded-lg px-5 py-4"
                      style={{ backgroundColor: '#F4FAFA', border: '1px solid #D1E8E8' }}
                    >
                      <div
                        className="text-xs font-heading font-bold tracking-widest uppercase mb-1.5"
                        style={{ color: '#0B6E72' }}
                      >
                        Where to book
                      </div>
                      <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                        {tier.bookingNote}
                      </p>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Booking agent section */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#1A2E35' }}
            >
              Where to compare and book
            </h2>
            <p className="font-body text-sm mb-8" style={{ color: '#4A5C61' }}>
              With 50+ vessels in the market, booking through a reputable local agent is
              the most efficient way to compare availability, pricing, and fit.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white p-6 rounded-xl border-l-4" style={{ borderColor: '#0B6E72', borderTopColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderBottomColor: '#D1E8E8', borderTopWidth: '1px', borderRightWidth: '1px', borderBottomWidth: '1px' }}>
                <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#1A2E35' }}>
                  Explore Whitsundays
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
                  Operating since 1985 — the longest continually running tour operator
                  in the Whitsundays. Represents the largest and most diverse fleet,
                  from budget backpacker vessels through to luxury catamarans. Direct
                  agent relationship, real-time availability, covers all price tiers.
                </p>
                <a
                  href="https://explorewhitsundays.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-heading font-bold text-sm transition-opacity hover:opacity-80 min-h-[44px]"
                  style={{ backgroundColor: '#0B6E72', color: '#fff' }}
                >
                  Browse Explore Whitsundays &#8594;
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4" style={{ borderColor: '#E07B39', borderTopColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderBottomColor: '#D1E8E8', borderTopWidth: '1px', borderRightWidth: '1px', borderBottomWidth: '1px' }}>
                <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#1A2E35' }}>
                  Sailing Whitsundays
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
                  Airlie Beach-based travel agency with a wide range of overnight vessels,
                  day and overnight tour deals, and a local team available seven days a week.
                  Good for comparing last-minute deals and special pricing across multiple vessels.
                </p>
                <a
                  href="https://sailing-whitsundays.com/tours/overnight-tour-deals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-heading font-bold text-sm transition-opacity hover:opacity-80 min-h-[44px]"
                  style={{ backgroundColor: '#E07B39', color: '#fff' }}
                >
                  Browse Sailing Whitsundays &#8594;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Practical tips */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#1A2E35' }}
            >
              Before you book
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {[
                {
                  title: 'When to book',
                  accent: '#0B6E72',
                  tips: [
                    'Peak season (Jun–Aug): 4–8 weeks ahead minimum for luxury vessels, 2–3 weeks for larger boats',
                    'Shoulder (Apr–May, Sep–Nov): 1–2 weeks usually fine',
                    'Wet season (Dec–Mar): often available short notice — best prices',
                    'Luxury vessels (8 guests) book out months ahead in peak season',
                  ],
                },
                {
                  title: 'What to pack',
                  accent: '#E07B39',
                  tips: [
                    'Soft bag only — no hard-case luggage or wheelie bags',
                    'Swimwear, light clothing, hat, reef-safe sunscreen',
                    'Warm layer for winter evenings on deck',
                    'Seasickness medication — take the night before, not on the boat',
                    'Camera, BYO alcohol (cans only on most vessels)',
                  ],
                },
                {
                  title: 'Important to know',
                  accent: '#0B6E72',
                  tips: [
                    'All guests must be able to swim — water-based activity',
                    'Marine Park Environmental Management Charge applies ($10pp/day)',
                    'Catamarans are significantly more stable than monohulls if seasickness is a concern',
                    'Luggage storage available in Airlie Beach if continuing your trip afterwards',
                  ],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  className="bg-white p-5 rounded-xl border"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  <h3
                    className="font-heading font-bold text-sm mb-3"
                    style={{ color: '#1A2E35' }}
                  >
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.tips.map((tip) => (
                      <div key={tip} className="flex items-start gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: section.accent }}
                          aria-hidden="true"
                        />
                        <span className="font-body text-xs leading-relaxed" style={{ color: '#1A2E35' }}>
                          {tip}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#1A2E35' }}
            >
              Common questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white p-6 rounded-xl border"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  <h3
                    className="font-heading text-base font-bold mb-3"
                    style={{ color: '#1A2E35' }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: '#1A2E35' }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliate disclosure */}
        <div className="border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 py-6 max-w-4xl">
            <p
              className="font-body text-xs leading-relaxed"
              style={{ color: '#4A5C61' }}
            >
              Some links on this page may earn a small commission if you book through them,
              at no extra cost to you. It helps keep this guide free. I only point to operators
              and agents I&apos;d genuinely recommend.{' '}
              <Link
                href="/affiliate-disclosure"
                className="underline hover:opacity-70"
                style={{ color: '#0B6E72' }}
              >
                Full disclosure.
              </Link>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which option suits you?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Tell the turtle how long you have, who you&apos;re travelling with, and
              what matters most — it knows the fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/things-to-do"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                All Things to Do
              </Link>
              <Link
                href="/itinerary-3-day"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#fff', color: '#0B6E72' }}
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
