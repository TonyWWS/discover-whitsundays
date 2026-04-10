import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About the Whitsundays | Discover Whitsundays',
  description: '74 tropical islands in the heart of the Great Barrier Reef. What you need to know before you come — climate, marine life, Ngaro heritage, and how to get here.',
  openGraph: {
    title: 'About the Whitsundays | Discover Whitsundays',
    description: '74 tropical islands in the heart of the Great Barrier Reef. What you need to know before you come.',
    url: 'https://discoverwhitsundays.com/about',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/about-hero1.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About the Whitsundays | Discover Whitsundays',
    description: '74 tropical islands in the heart of the Great Barrier Reef.',
    images: ['/images/about-hero1.jpg'],
  },
};

const quickFacts = [
  { label: 'Total area', value: '309 km²' },
  { label: 'Largest island', value: 'Whitsunday Island', sub: '109 km²' },
  { label: 'Mainland population', value: '~5,000', sub: 'Airlie Beach' },
  { label: 'Time zone', value: 'AEST (UTC+10)', sub: 'No daylight saving' },
];

const locations = [
  { label: 'Location', value: '900km north of Brisbane, 630km south of Cairns' },
  { label: 'Islands', value: '74 islands, mostly uninhabited national parks' },
  { label: 'Marine Park', value: 'Part of the Great Barrier Reef Marine Park' },
  { label: 'Gateway', value: 'Airlie Beach on the mainland' },
];

const marineLife = [
  { name: 'Sea Turtles', detail: 'Green and Hawksbill turtles common year-round' },
  { name: 'Humpback Whales', detail: 'Migrate through June–September' },
  { name: 'Tropical Fish', detail: '1,500+ species of reef fish' },
  { name: 'Reef Sharks', detail: 'Whitetip and blacktip reef sharks — harmless' },
  { name: 'Giant Clams', detail: 'Some over 100 years old' },
  { name: 'Coral', detail: '400+ species of hard and soft corals' },
];

const seasons = [
  {
    name: 'Peak (Jun–Aug)',
    summary: 'Dry season. 16–25°C, calm seas, ideal sailing conditions. Most expensive time to visit — book 2–3 months ahead. Worth every cent.',
    warning: null,
  },
  {
    name: 'Shoulder (Apr–May, Sep–Nov)',
    summary: 'Excellent weather, fewer crowds, better prices. My personal pick. The water is warm, the boats are less crowded, and you can usually book closer to the date.',
    warning: null,
  },
  {
    name: 'Wet season (Dec–Mar)',
    summary: 'Warm water, lowest prices, lush landscapes. Afternoon storms are common but usually brief. Lowest prices of the year.',
    warning: 'Stinger season runs November–May. Wear stinger suits when swimming — most operators provide them.',
  },
];

const transport = [
  {
    mode: 'By air',
    detail: 'Fly direct to Hamilton Island (HTI) or Whitsunday Coast Airport (PPP) at Proserpine. Direct flights from Sydney, Melbourne, and Brisbane.',
    times: ['Brisbane: ~1.5 hours', 'Sydney: ~2.5 hours', 'Melbourne: ~3 hours'],
  },
  {
    mode: 'By road',
    detail: 'Scenic coastal drive along the Bruce Highway. If you have the time, it\'s worth it — the coastline through the Whitsunday region is genuinely beautiful.',
    times: ['Brisbane: ~11 hours (1,100km)', 'Cairns: ~7 hours (650km)', 'Mackay: ~2 hours (150km)'],
  },
  {
    mode: 'By train',
    detail: 'Queensland Rail Spirit of Queensland to Proserpine, then bus or taxi to Airlie Beach (25 minutes). Overnight from Brisbane is a comfortable option.',
    times: ['Brisbane: ~11 hours overnight', 'Cairns: ~8 hours', 'Scenic coastal journey'],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/about-hero1.jpg"
            alt="Tropical palm trees and sunset over the Whitsunday Islands and Great Barrier Reef"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A2E35]/80" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-end pb-10 md:pb-16 justify-center">
            <div className="max-w-3xl text-white text-center">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-3 drop-shadow-2xl">
                About the Whitsundays
              </h1>
              <p className="font-body text-lg md:text-2xl text-white/90 drop-shadow-lg">
                What you need to know before you come
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl">
            <div
              className="border-l-4 p-6 md:p-8 rounded-lg"
              style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}
            >
              <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
                74 islands. Most of them uninhabited national park. One of them home to Whitehaven Beach.
                The Whitsundays sit in the heart of the Great Barrier Reef Marine Park, about halfway between
                Brisbane and Cairns off the central Queensland coast. This is what seven years of living here
                has taught me about the place.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Geography */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-10 text-center" style={{ color: '#1A2E35' }}>
                Location & Geography
              </h2>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">

                {/* Location facts */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border" style={{ borderColor: '#D1E8E8' }}>
                  <h3 className="font-heading text-lg font-bold mb-6" style={{ color: '#1A2E35' }}>
                    The basics
                  </h3>
                  <div className="space-y-4">
                    {locations.map((loc) => (
                      <div key={loc.label} className="flex items-start gap-3">
                        <span
                          className="w-2 h-2 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: '#0B6E72' }}
                          aria-hidden="true"
                        />
                        <div>
                          <span className="font-heading font-bold text-sm" style={{ color: '#1A2E35' }}>
                            {loc.label}:{' '}
                          </span>
                          <span className="font-body text-sm" style={{ color: '#1A2E35' }}>
                            {loc.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick facts */}
                <div
                  className="p-6 md:p-8 rounded-2xl"
                  style={{ backgroundColor: '#1A2E35' }}
                >
                  <h3 className="font-heading text-lg font-bold mb-6 text-white">
                    Quick facts
                  </h3>
                  <div className="space-y-4">
                    {quickFacts.map((fact, i) => (
                      <div
                        key={fact.label}
                        className={`pb-4 ${i < quickFacts.length - 1 ? 'border-b' : ''}`}
                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <div className="font-body text-xs" style={{ color: '#8BBCBC' }}>{fact.label}</div>
                        <div className="font-heading text-xl md:text-2xl font-bold text-white">{fact.value}</div>
                        {fact.sub && (
                          <div className="font-body text-sm" style={{ color: '#8BBCBC' }}>{fact.sub}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Climate & Weather */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-3 text-center" style={{ color: '#1A2E35' }}>
                Climate & Weather
              </h2>
              <p className="font-body text-center mb-10 md:mb-12" style={{ color: '#4A5C61' }}>
                Tropical climate year-round. The season you visit makes a real difference.
              </p>

              <div className="space-y-4">
                {seasons.map((season) => (
                  <div
                    key={season.name}
                    className="p-6 rounded-xl border"
                    style={{ backgroundColor: '#F4FAFA', borderColor: '#D1E8E8' }}
                  >
                    <h3 className="font-heading text-lg font-bold mb-2" style={{ color: '#0B6E72' }}>
                      {season.name}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                      {season.summary}
                    </p>
                    {season.warning && (
                      <div
                        className="mt-4 px-4 py-3 rounded-lg border-l-2 text-sm font-body"
                        style={{ backgroundColor: '#FFF5EC', borderColor: '#E07B39', color: '#1A2E35' }}
                      >
                        <span className="font-bold" style={{ color: '#E07B39' }}>Note: </span>
                        {season.warning}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-10 text-center" style={{ color: '#1A2E35' }}>
                Getting Here
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {transport.map((t) => (
                  <div
                    key={t.mode}
                    className="bg-white p-6 rounded-2xl shadow-sm border-b-4 hover:shadow-md transition-shadow"
                    style={{ borderColor: '#0B6E72', borderTopColor: '#D1E8E8', borderLeftColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderTopWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px' }}
                  >
                    <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                      {t.mode}
                    </h3>
                    <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
                      {t.detail}
                    </p>
                    <div
                      className="p-4 rounded-lg space-y-1"
                      style={{ backgroundColor: '#F4FAFA' }}
                    >
                      {t.times.map((time) => (
                        <div key={time} className="font-body text-sm" style={{ color: '#4A5C61' }}>
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 px-6 py-5 rounded-xl border-l-2"
                style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}
              >
                <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                  <span className="font-bold">Getting around once you&apos;re here:</span> Most activities
                  are boat-based. Airlie Beach is walkable. Rental cars are useful for exploring the mainland.
                  Hamilton Island uses golf buggies — no private cars allowed. Ferry services connect
                  Airlie Beach to Hamilton Island and Daydream Island daily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ngaro Heritage */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#1A2E35' }}>
                Ngaro Heritage
              </h2>
              <div
                className="p-6 md:p-8 rounded-2xl border-l-4"
                style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
              >
                <p className="font-body leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
                  The Whitsunday Islands are the traditional lands of the Ngaro people — also known as the
                  Gia and Juru people — who have lived in this region for thousands of years. The Ngaro were
                  seafaring people who travelled between the mainland and islands in bark canoes.
                </p>
                <p className="font-body leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
                  Evidence of their history can be found throughout the islands — rock art, stone arrangements,
                  and midden sites. The name &quot;Whitsunday&quot; comes from Captain Cook&apos;s 1770 voyage,
                  though he was actually a day off due to crossing the International Date Line.
                </p>
                <p className="font-body leading-relaxed" style={{ color: '#1A2E35', fontStyle: 'italic' }}>
                  When visiting the islands, please respect heritage sites and follow Leave No Trace principles.
                  These places matter to communities who have connection to this country going back far longer
                  than the name on the map.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marine Life */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-10 text-center" style={{ color: '#1A2E35' }}>
                Marine Life & Conservation
              </h2>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">

                {/* What you'll see */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border" style={{ borderColor: '#D1E8E8' }}>
                  <h3 className="font-heading text-lg font-bold mb-6" style={{ color: '#1A2E35' }}>
                    What you&apos;ll see
                  </h3>
                  <div className="space-y-4">
                    {marineLife.map((animal) => (
                      <div key={animal.name} className="flex items-start gap-3">
                        <span
                          className="w-2 h-2 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: '#0B6E72' }}
                          aria-hidden="true"
                        />
                        <div>
                          <span className="font-heading font-bold text-sm" style={{ color: '#1A2E35' }}>
                            {animal.name}:{' '}
                          </span>
                          <span className="font-body text-sm" style={{ color: '#1A2E35' }}>
                            {animal.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GBR facts */}
                <div
                  className="p-6 md:p-8 rounded-2xl"
                  style={{ backgroundColor: '#1A2E35' }}
                >
                  <h3 className="font-heading text-lg font-bold mb-4 text-white">
                    Great Barrier Reef Marine Park
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-6" style={{ color: '#8BBCBC' }}>
                    The Whitsundays sit inside the Great Barrier Reef Marine Park — a UNESCO World Heritage
                    Site and one of the seven natural wonders of the world.
                  </p>
                  <div
                    className="rounded-lg p-5 mb-5 space-y-2"
                    style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                  >
                    <div className="font-heading font-bold text-sm text-white mb-3">By the numbers</div>
                    {[
                      '344,400 km² total area',
                      '2,900 individual reefs',
                      '900 islands',
                      'Visible from space',
                    ].map((fact) => (
                      <div key={fact} className="flex items-start gap-2">
                        <span style={{ color: '#E07B39' }} aria-hidden="true">&#8594;</span>
                        <span className="font-body text-sm" style={{ color: '#8BBCBC' }}>{fact}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-xs leading-relaxed" style={{ color: '#8BBCBC' }}>
                    Marine park fees ($6.50/day) are included in most tour costs and go directly toward
                    conservation. Worth knowing where your money goes.
                  </p>
                </div>

              </div>
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
              Here&apos;s where to go from here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/things-to-do"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                Things to Do
              </Link>
              <Link
                href="/islands"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#fff', color: '#0B6E72' }}
              >
                Discover the Islands
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
