import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: "What's On in the Whitsundays | Discover Whitsundays",
  description: "Seasonal highlights, annual events, and local knowledge from an Airlie Beach local. What to expect in the Whitsundays throughout the year.",
  openGraph: {
    title: "What's On in the Whitsundays | Discover Whitsundays",
    description: "Seasonal highlights, annual events, and local knowledge from an Airlie Beach local.",
    url: 'https://discoverwhitsundays.com/whats-on',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/whats-on-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What's On in the Whitsundays | Discover Whitsundays",
    description: "Seasonal highlights, annual events, and local knowledge from an Airlie Beach local.",
    images: ['/images/whats-on-hero.jpg'],
  },
};

const annualEvents = [
  {
    name: 'Airlie Beach Race Week',
    month: 'Aug',
    accentColor: '#0B6E72',
    description: 'One of Australia\'s premier sailing regattas — hundreds of yachts, thousands of sailors, and a week-long festival atmosphere that transforms the town. The racing itself is spectacular to watch from the foreshore. If sailing is your thing, this is the best week to be here. If it\'s not, plan around it.',
    details: [
      { label: 'When', value: 'Mid-August, usually second week' },
      { label: 'Duration', value: '7 days' },
      { label: 'Best for', value: 'Sailing enthusiasts, anyone who likes a festival vibe' },
    ],
    tip: 'Book accommodation at least 6 months ahead. Prices jump significantly. The town gets very busy — great atmosphere, but not the week for a quiet getaway.',
  },
  {
    name: 'Hamilton Island Race Week',
    month: 'Aug',
    accentColor: '#E07B39',
    description: 'Australia\'s largest offshore keelboat regatta, held in the waters around Hamilton Island. More upscale than the Airlie Beach event — luxury hospitality, international fleet, spectacular scenery. Even as a spectator it\'s worth catching if you\'re on the island that week.',
    details: [
      { label: 'When', value: 'Mid to late August' },
      { label: 'Duration', value: '7 days' },
      { label: 'Best for', value: 'Upscale sailing event, already staying on Hamilton Island' },
    ],
    tip: 'Hamilton Island accommodation books out completely. If you\'re planning to go specifically for Race Week, start looking 6–12 months out.',
  },
  {
    name: 'Airlie Beach Music Festival',
    month: 'Nov',
    accentColor: '#0B6E72',
    description: 'Local and national artists across multiple venues around town. Mix of free and ticketed events, acoustic through to full bands. Laid-back atmosphere — November is good weather and the shoulder season crowds mean it doesn\'t feel overwhelming. A genuinely enjoyable long weekend if music is your thing.',
    details: [
      { label: 'When', value: 'November (dates vary annually)' },
      { label: 'Duration', value: 'Weekend' },
      { label: 'Best for', value: 'Music lovers, shoulder season visitors' },
    ],
    tip: 'Check the official programme before booking — the lineup varies considerably year to year. Some years it\'s genuinely excellent, some years it\'s more low-key.',
  },
  {
    name: 'Whitsunday Reef Festival',
    month: 'Sep',
    accentColor: '#E07B39',
    description: 'Community celebration of the reef and marine environment. Markets, educational workshops, family activities, live entertainment. More local than tourist-facing — a good window into the community rather than a major visitor event. Worth attending if you\'re here anyway.',
    details: [
      { label: 'When', value: 'September' },
      { label: 'Duration', value: 'Weekend' },
      { label: 'Best for', value: 'Families, anyone interested in reef conservation' },
    ],
    tip: 'Smaller and more community-focused than the sailing events. Don\'t plan your whole trip around it, but worth an afternoon if you\'re in town.',
  },
];

const seasonalHighlights = [
  {
    title: 'Humpback whale season',
    when: 'July–September (peak August)',
    accentColor: '#0B6E72',
    bg: '#E8F4F5',
    description: 'Humpback whales migrate through the Whitsundays on their way from Antarctic feeding grounds to warm tropical breeding waters. August is the peak — you\'ll often see them from the ferry, from scenic flights, and during sailing tours. Some operators run dedicated whale watching trips. I\'ve watched them breach from the Airlie Beach foreshore in the middle of the afternoon. One of the genuine surprises of living here.',
    note: 'All Whitsunday waters are protected — maintain the required 100m distance if you\'re in your own vessel.',
  },
  {
    title: 'Peak sailing season',
    when: 'May–September',
    accentColor: '#E07B39',
    bg: '#F5F0E8',
    description: 'Consistent southeast trade winds, calm seas, clear skies, temperatures between 16–25°C. This is what the Whitsundays are made for. June and July in particular hit a sweet spot — dry, sunny, perfect wind, before the Race Week crowds arrive in August. My personal pick for the best time to visit.',
    note: 'Book tours and overnight sailing 4–8 weeks ahead minimum during peak season. Popular vessels fill months out.',
  },
  {
    title: 'Turtle nesting season',
    when: 'November–March',
    accentColor: '#0B6E72',
    bg: '#E8F4F5',
    description: 'Green and loggerhead turtles nest on Whitsunday Island beaches during summer. You\'re almost guaranteed turtle encounters while snorkelling during this period — they\'re especially common around Hook Island reefs. The nesting sites themselves are protected, but seeing turtles in the water is a highlight of the wet season visits.',
    note: 'Nesting sites are protected national park — observe from a distance and never approach a nesting turtle.',
  },
  {
    title: 'Stinger season',
    when: 'November–May',
    accentColor: '#E07B39',
    bg: '#F5F0E8',
    description: 'Marine stingers (box jellyfish and irukandji) are present in Whitsunday waters through the warmer months. All tour operators provide stinger suits — wear them. The lagoon in Airlie Beach is stinger-netted and safe year-round. This doesn\'t stop tours operating or significantly affect the experience, but it\'s worth knowing before you arrive.',
    note: 'Stinger suits are provided by all reputable operators — this is standard, not optional. The Airlie Beach Lagoon is safe year-round.',
  },
];

const regularEvents = [
  {
    title: 'Airlie Beach Markets',
    when: 'Every Saturday, 7am–1pm',
    where: 'Lions Park, Airlie Beach',
    description: 'Local crafts, jewellery, art, clothing, and fresh produce. Worth a morning wander if you\'re around on a Saturday.',
  },
  {
    title: 'Live music',
    when: 'Multiple nights weekly',
    where: 'Airlie Beach Hotel, local bars',
    description: 'Several venues host live music throughout the week — acoustic, rock, covers. Check with your accommodation for current schedules.',
  },
  {
    title: 'Sunset from the foreshore',
    when: 'Every evening',
    where: 'Airlie Beach foreshore and marina',
    description: 'Free. The sunsets over the islands are consistently spectacular. The foreshore and marina are the best spots. Worth making time for every evening you\'re here.',
  },
];

export default function WhatsOnPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/whats-on-hero.jpg"
            alt="Airlie Beach foreshore at sunset during sailing race week, Whitsundays"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/55 via-[#1A2E35]/35 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center justify-center">
            <div className="max-w-3xl text-white text-center">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
                What&apos;s On
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-lg">
                Events, seasonal highlights, and what to expect throughout the year.
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl">
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
              The Whitsundays has a rhythm to it — whale season in August, Race Week turning
              Airlie Beach into a sailing festival, the wet season bringing warmer water and
              fewer crowds. Knowing what time of year you&apos;re coming helps you plan around
              it rather than get caught out by it. This page covers the annual events worth
              knowing about and the seasonal patterns that shape the experience. I&apos;ll be
              adding local guides and timely content here regularly as the site grows.
            </p>
          </div>
        </div>

        {/* Annual events */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-2"
              style={{ color: '#1A2E35' }}
            >
              Major annual events
            </h2>
            <p className="font-body text-sm mb-10" style={{ color: '#4A5C61' }}>
              Worth planning around — either to attend or to avoid, depending on what you&apos;re after.
            </p>

            <div className="space-y-6">
              {annualEvents.map((event) => (
                <article
                  key={event.name}
                  className="bg-white rounded-2xl border overflow-hidden"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Month badge */}
                    <div
                      className="flex items-center justify-center p-6 md:w-28 shrink-0"
                      style={{ backgroundColor: event.accentColor }}
                    >
                      <div className="text-center">
                        <div className="font-heading text-2xl font-bold text-white">
                          {event.month}
                        </div>
                        <div
                          className="font-body text-xs text-white/75"
                        >
                          Annual
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1 space-y-4">
                      <h3
                        className="font-heading text-xl md:text-2xl font-bold"
                        style={{ color: '#1A2E35' }}
                      >
                        {event.name}
                      </h3>
                      <p
                        className="font-body text-sm md:text-base leading-relaxed"
                        style={{ color: '#1A2E35' }}
                      >
                        {event.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {event.details.map((detail) => (
                          <div key={detail.label}>
                            <span
                              className="font-heading font-bold text-xs"
                              style={{ color: '#1A2E35' }}
                            >
                              {detail.label}:{' '}
                            </span>
                            <span
                              className="font-body text-xs"
                              style={{ color: '#4A5C61' }}
                            >
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div
                        className="rounded-lg px-5 py-4 border-l-2"
                        style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
                      >
                        <div
                          className="text-xs font-heading font-bold tracking-widest uppercase mb-1"
                          style={{ color: '#E07B39' }}
                        >
                          Local note
                        </div>
                        <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                          {event.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal highlights */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-2"
              style={{ color: '#1A2E35' }}
            >
              Seasonal highlights
            </h2>
            <p className="font-body text-sm mb-10" style={{ color: '#4A5C61' }}>
              What the Whitsundays does at different times of year — the natural patterns worth knowing.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {seasonalHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl p-6 border-t-4"
                  style={{
                    backgroundColor: highlight.bg,
                    borderColor: highlight.accentColor,
                    borderLeftColor: '#D1E8E8',
                    borderRightColor: '#D1E8E8',
                    borderBottomColor: '#D1E8E8',
                    borderLeftWidth: '1px',
                    borderRightWidth: '1px',
                    borderBottomWidth: '1px',
                  }}
                >
                  <h3
                    className="font-heading text-lg font-bold mb-1"
                    style={{ color: '#1A2E35' }}
                  >
                    {highlight.title}
                  </h3>
                  <p
                    className="font-body text-xs font-bold mb-3"
                    style={{ color: highlight.accentColor }}
                  >
                    {highlight.when}
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed mb-4"
                    style={{ color: '#1A2E35' }}
                  >
                    {highlight.description}
                  </p>
                  <div
                    className="flex items-start gap-2 p-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: highlight.accentColor }}
                      aria-hidden="true"
                    />
                    <p className="font-body text-xs leading-relaxed" style={{ color: '#1A2E35' }}>
                      {highlight.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planning guide */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#1A2E35' }}
            >
              Timing your visit
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div
                className="bg-white p-6 rounded-2xl border-l-4"
                style={{ borderColor: '#0B6E72', borderTopColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderBottomColor: '#D1E8E8', borderTopWidth: '1px', borderRightWidth: '1px', borderBottomWidth: '1px' }}
              >
                <h3 className="font-heading font-bold text-base mb-4" style={{ color: '#1A2E35' }}>
                  Visit during events if you
                </h3>
                <div className="space-y-2">
                  {[
                    'Want a lively, festival atmosphere',
                    'Are interested in sailing or specific events',
                    'Don\'t mind crowds and higher accommodation prices',
                    'Have booked accommodation well in advance',
                    'Want to experience the local community at its most energetic',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span style={{ color: '#0B6E72' }} aria-hidden="true">&#10003;</span>
                      <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-white p-6 rounded-2xl border-l-4"
                style={{ borderColor: '#E07B39', borderTopColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderBottomColor: '#D1E8E8', borderTopWidth: '1px', borderRightWidth: '1px', borderBottomWidth: '1px' }}
              >
                <h3 className="font-heading font-bold text-base mb-4" style={{ color: '#1A2E35' }}>
                  Plan around events if you
                </h3>
                <div className="space-y-2">
                  {[
                    'Prefer a quiet, relaxed holiday',
                    'Are on a tight budget — prices jump 30–50% during Race Week',
                    'Are booking last minute with limited flexibility',
                    'Want uncrowded beaches and easy tour availability',
                    'Are travelling with young children who need a calm environment',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span style={{ color: '#E07B39' }} aria-hidden="true">&#10007;</span>
                      <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="p-5 rounded-xl border-l-4"
              style={{ backgroundColor: '#fff', borderColor: '#0B6E72' }}
            >
              <p className="font-heading font-bold text-sm mb-1" style={{ color: '#1A2E35' }}>
                My pick
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                April–May and September–November hit the sweet spot. Good weather, no stingers,
                shoulder season prices, and you can still book most tours without planning months ahead.
                June and July are peak quality but you&apos;ll pay for it — worth it if the budget allows.
              </p>
            </div>
          </div>
        </section>

        {/* Regular events */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#1A2E35' }}
            >
              Regular events
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {regularEvents.map((event) => (
                <div
                  key={event.title}
                  className="bg-white p-5 rounded-xl border"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  <h3
                    className="font-heading font-bold text-base mb-1"
                    style={{ color: '#1A2E35' }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="font-body text-xs mb-1 font-bold"
                    style={{ color: '#0B6E72' }}
                  >
                    {event.when}
                  </p>
                  <p
                    className="font-body text-xs mb-3"
                    style={{ color: '#4A5C61' }}
                  >
                    {event.where}
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: '#1A2E35' }}
                  >
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming soon note */}
        <div
          className="border-t"
          style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}
        >
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl text-center">
            <p className="font-body text-sm leading-relaxed" style={{ color: '#4A5C61' }}>
              Local guides, seasonal tips, and timely content are being added to this page
              regularly. If you have a specific question about what&apos;s happening when
              you&apos;re visiting, the turtle in the bottom right corner can help.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to plan your trip?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Three days, done properly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/itinerary-3-day"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                3-Day Itinerary
              </Link>
              <Link
                href="/where-to-stay"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#fff', color: '#0B6E72' }}
              >
                Where to Stay
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
