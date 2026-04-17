import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Whitehaven Beach | Discover Whitsundays',
  description: 'Seven kilometres of 98% pure silica sand on Whitsunday Island. How to get there, what to expect, and the spots most visitors never find.',
  openGraph: {
    title: 'Whitehaven Beach | Discover Whitsundays',
    description: 'Seven kilometres of 98% pure silica sand on Whitsunday Island. How to get there, what to expect, and the spots most visitors never find.',
    url: 'https://discoverwhitsundays.com/whitehaven-beach',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/whitehaven-beach.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whitehaven Beach | Discover Whitsundays',
    description: 'Seven kilometres of 98% pure silica sand on Whitsunday Island.',
    images: ['/images/whitehaven-beach.jpg'],
  },
};

const quickFacts = [
  { value: '7km', label: 'Pristine beach', accent: '#E07B39' },
  { value: '98%', label: 'Pure silica sand', accent: '#0B6E72' },
  { value: 'National Park', label: 'Protected wilderness', accent: '#0B6E72' },
  { value: 'Boat only', label: 'No road access', accent: '#E07B39' },
];

const sandProperties = [
  {
    title: 'Brilliant white',
    description: 'The high silica content reflects light, creating a dazzling white appearance that\'s striking in person even more than in photos.',
    accent: '#E07B39',
    bg: '#F5F0E8',
  },
  {
    title: 'Stays cool',
    description: 'Unlike most beach sand, silica sand doesn\'t retain heat. You can walk barefoot comfortably even on the hottest days.',
    accent: '#0B6E72',
    bg: '#E8F4F5',
  },
  {
    title: 'Fine texture',
    description: 'The sand is incredibly fine and soft, almost powder-like. It squeaks when you walk on it — one of those details you don\'t expect until you\'re standing on it.',
    accent: '#0B6E72',
    bg: '#E8F4F5',
  },
  {
    title: 'Protected',
    description: 'Taking sand from the beach is illegal. This helps preserve one of the world\'s genuinely rare natural environments.',
    accent: '#E07B39',
    bg: '#F5F0E8',
  },
];

const accessOptions = [
  {
    title: 'Day tours by boat',
    subtitle: 'Most popular and accessible option',
    description: 'Full-day or half-day tours depart from Airlie Beach. Most include the Hill Inlet lookout walk, time on the beach, lunch, and snorkelling at other locations.',
    details: [
      { label: 'Duration', value: '6–8 hours (full day) or 4 hours (half day)' },
      { label: 'Price', value: '$130–220 per person' },
      { label: 'Includes', value: 'Lunch, snorkel gear, guided walk' },
      { label: 'Best for', value: 'Most visitors, first-timers' },
    ],
    link: { href: '/whitehaven-beach/tours', label: 'View day tours', primary: true },
  },
  {
    title: 'Scenic flights',
    subtitle: 'See Hill Inlet from above',
    description: 'Helicopter or seaplane flights offer the aerial view of Hill Inlet\'s swirling sands that you\'ve seen in photos. Some include beach landings.',
    details: [
      { label: 'Duration', value: '15–60 minutes' },
      { label: 'Price', value: '$180–650 per person' },
      { label: 'Includes', value: 'Aerial views, some include beach landing' },
      { label: 'Best for', value: 'Special occasions, photographers' },
    ],
    link: { href: '/things-to-do/scenic-flights', label: 'View scenic flights', primary: true },
  },
  {
    title: 'Overnight sailing trips',
    subtitle: 'The beach at sunrise, without the crowds',
    description: 'Multi-day sailing trips visit Whitehaven at sunset or sunrise — when the day-trippers are gone and the beach is nearly empty. If you want to understand what makes this place special, this is how to do it properly.',
    details: [
      { label: 'Duration', value: '2–3 days' },
      { label: 'Price', value: '$400–700 total' },
      { label: 'Includes', value: 'Accommodation, all meals, multiple stops' },
      { label: 'Best for', value: 'Anyone who wants to do it properly' },
    ],
    link: { href: '/things-to-do/overnight-sailing', label: 'View sailing trips', primary: false },
  },
];

const seasons = [
  {
    name: 'Peak season',
    months: 'June–August',
    bg: '#E8F4F5',
    accent: '#0B6E72',
    pros: ['Perfect weather', 'No stingers', 'Calm seas'],
    cons: ['Most crowded', 'Highest prices'],
  },
  {
    name: 'Shoulder season',
    months: 'Apr–May, Sep–Nov',
    bg: '#F5F0E8',
    accent: '#E07B39',
    pros: ['Great weather', 'Fewer crowds', 'Better prices', 'Still excellent conditions', 'Best value'],
    cons: [],
  },
  {
    name: 'Summer',
    months: 'December–March',
    bg: '#E8F4F5',
    accent: '#0B6E72',
    pros: ['Lowest prices', 'Quieter'],
    cons: ['Stinger season', 'Humidity', 'Possible rain'],
  },
];

const faqs = [
  {
    q: 'How long should I spend at Whitehaven Beach?',
    a: 'Most day tours give you around 2–3 hours at the beach — enough time to do the Hill Inlet lookout walk, have a swim, and actually sit with it for a while. If you want the beach at its quietest, bareboat and private charter visitors can anchor overnight at Tongue Bay or the southern end — you\'ll have the place almost to yourself before the day tours arrive.',
  },
  {
    q: 'Can I visit Whitehaven Beach independently?',
    a: 'Only if you have your own boat or can charter one. There\'s no road access and no public ferry — the beach sits on an uninhabited national park island. Most visitors join an organised day tour, which handles all the logistics and usually includes snorkelling at a nearby reef as well.',
  },
  {
    q: 'Are there facilities at Whitehaven Beach?',
    a: 'No permanent ones. It\'s protected national park — no shops, no kiosks, no shade structures. There are composting toilets at the southern end. Everything else comes with your tour operator.',
  },
  {
    q: 'Is Whitehaven Beach suitable for children?',
    a: 'Yes — the water is shallow, calm, and warm, which makes it well suited to young kids. The Hill Inlet lookout walk is short but steep with some large uneven steps, so it\'s not suitable for toddlers or anyone with limited mobility. The beach itself is fine for all ages.',
  },
  {
    q: 'What\'s the water temperature like?',
    a: 'Around 22°C in the cooler months (July–August), rising to about 28°C in summer. Comfortable year-round — no wetsuit required. A rash vest is worth bringing for sun protection. During stinger season (late October through May), tour operators provide stinger suits for any time in the water.',
  },
];

export default function WhitehavenBeachPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[420px] md:h-[600px] overflow-hidden">
          <Image
            src="/images/whitehaven-beach.jpg"
            alt="Whitehaven Beach white silica sand and turquoise water, Whitsunday Island"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/40 via-[#1A2E35]/30 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center justify-center">
            <div className="max-w-3xl text-white text-center">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
                Whitehaven Beach
              </h1>
              <p className="font-heading text-lg md:text-2xl text-white/90 drop-shadow-lg font-light max-w-3xl mx-auto">
                Some days you won&apos;t see another soul. It almost feels like you&apos;ve reached
                the edge of the world.
              </p>
            </div>
          </div>
        </div>

        {/* Quick facts */}
        <div style={{ backgroundColor: '#F5F0E8' }} className="py-10 md:py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white p-5 md:p-6 rounded-xl shadow-sm text-center border-b-4"
                  style={{ borderColor: fact.accent }}
                >
                  <div
                    className="font-heading text-xl md:text-2xl font-bold mb-1"
                    style={{ color: '#1A2E35' }}
                  >
                    {fact.value}
                  </div>
                  <div className="font-body text-xs md:text-sm" style={{ color: '#4A5C61' }}>
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">

            {/* Introduction */}
            <section className="mb-12 md:mb-16">
              <h2
                className="font-heading text-2xl md:text-4xl font-bold mb-6"
                style={{ color: '#1A2E35' }}
              >
                If you can only see one thing while you&apos;re here, it has to be this.
              </h2>
              <div className="font-body text-base md:text-lg leading-relaxed space-y-4" style={{ color: '#1A2E35' }}>
                <p>
                  Whitehaven Beach stretches over 7 kilometres along Whitsunday Island. The sand is
                  98% pure silica — one of the purest concentrations in the world. It stays cool
                  underfoot even in the height of summer, and it squeaks when you walk on it.
                </p>
                <p>
                  The beach is protected national park. No roads reach it, no permanent structures
                  sit on it, and no shops or kiosks break the view. You get there by boat, seaplane,
                  or helicopter — and that inaccessibility is exactly what keeps it worth visiting.
                </p>
                <p>
                  The northern end features Hill Inlet, where tidal shifts create a swirling pattern
                  of white sand and turquoise water that changes throughout the day. It&apos;s the
                  most photographed spot in Queensland — and one of those rare cases where the reality
                  matches the photos.
                </p>
              </div>
            </section>

            {/* Hill Inlet */}
            <section className="mb-12 md:mb-16">
              <div
                className="p-6 md:p-8 rounded-2xl border-l-4"
                style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}
              >
                <h2
                  className="font-heading text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: '#1A2E35' }}
                >
                  Hill Inlet Lookout
                </h2>
                <div className="font-body text-base leading-relaxed space-y-4" style={{ color: '#1A2E35' }}>
                  <p>
                    The Hill Inlet lookout is a 20–30 minute walk through bushland from where the
                    boats anchor at Tongue Bay — about 1km each way with some stairs and inclines.
                    Do it. The view from the top is the one you&apos;ve seen in every Whitsundays
                    photo ever taken.
                  </p>
                  <p>
                    The swirling sand patterns are created by tidal movement and change throughout
                    the day. Mid-morning gives you the best combination of light and tide.
                  </p>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-lg mt-6">
                  <h3
                    className="font-heading text-lg font-bold mb-4"
                    style={{ color: '#1A2E35' }}
                  >
                    Photography tips
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Best time', value: 'Before 11am for optimal light and tide conditions' },
                      { label: 'Tide', value: 'Mid-tide shows the most dramatic swirling patterns' },
                      { label: 'What to bring', value: 'Wide-angle lens if you have one, polarising filter' },
                    ].map((tip) => (
                      <div key={tip.label} className="flex items-start gap-2">
                        <span
                          className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: '#E07B39' }}
                          aria-hidden="true"
                        />
                        <p className="font-body text-sm" style={{ color: '#1A2E35' }}>
                          <span className="font-bold">{tip.label}:</span> {tip.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Betty's Beach */}
            <section className="mb-12 md:mb-16">
              <div
                className="p-6 md:p-8 rounded-2xl border-l-4"
                style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
              >
                <h2
                  className="font-heading text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: '#1A2E35' }}
                >
                  Betty&apos;s Beach
                </h2>
                <p
                  className="font-body text-sm mb-6 italic"
                  style={{ color: '#4A5C61' }}
                >
                  The one most visitors walk straight past.
                </p>
                <div className="font-body text-base leading-relaxed space-y-4" style={{ color: '#1A2E35' }}>
                  <p>
                    From the Hill Inlet lookout, most people turn back toward Tongue Bay and the
                    boat. The ones who don&apos;t — who follow the trail down to the north end of
                    the beach and walk the coastline left until they hit rocks — find Betty&apos;s
                    Beach on the other side.
                  </p>
                  <p>
                    It&apos;s a small protected cove, quieter than the main beach and largely
                    overlooked by the day tour crowd. I&apos;ve been there on days when there
                    wasn&apos;t another person in sight.
                  </p>
                  <p>
                    The Ngaro people used this cove for generations. Folklore suggests it served
                    as both a fishing ground — where men would dig trenches to trap fish using the
                    tides — and a gathering place for women during childbirth, woven into Dreamtime
                    ceremony. It&apos;s a place with history as well as beauty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg mt-6">
                  <h3
                    className="font-heading text-base font-bold mb-2"
                    style={{ color: '#1A2E35' }}
                  >
                    How to get there
                  </h3>
                  <p className="font-body text-sm" style={{ color: '#1A2E35' }}>
                    From the Hill Inlet lookout, instead of turning back toward Tongue Bay, follow
                    the trail down to the north end of Whitehaven. Walk the coastline to your left
                    until you hit rocks — Betty&apos;s Beach is over those rocks. Not every tour
                    visits the north end, so check the itinerary before you book if this is on
                    your list.
                  </p>
                </div>
              </div>
            </section>

            {/* The Sand */}
            <section className="mb-12 md:mb-16">
              <h2
                className="font-heading text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#1A2E35' }}
              >
                The Famous Silica Sand
              </h2>
              <p className="font-body text-base mb-6" style={{ color: '#1A2E35' }}>
                Whitehaven&apos;s sand is 98% pure silica — one of the purest concentrations in
                the world. This unique composition creates several remarkable properties:
              </p>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {sandProperties.map((prop) => (
                  <div
                    key={prop.title}
                    className="p-5 md:p-6 rounded-xl border-l-4"
                    style={{ backgroundColor: prop.bg, borderColor: prop.accent }}
                  >
                    <h3
                      className="font-heading text-lg font-bold mb-2"
                      style={{ color: '#1A2E35' }}
                    >
                      {prop.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                      {prop.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Visit */}
            <section className="mb-12 md:mb-16">
              <h2
                className="font-heading text-2xl md:text-4xl font-bold mb-4"
                style={{ color: '#1A2E35' }}
              >
                How to Visit Whitehaven Beach
              </h2>
              <p className="font-body text-base mb-8" style={{ color: '#4A5C61' }}>
                Whitehaven is only accessible by boat, seaplane, or helicopter. No roads reach it
                — which is a large part of why it&apos;s still worth visiting.
              </p>

              <div className="space-y-6">
                {accessOptions.map((option) => (
                  <div
                    key={option.title}
                    className="bg-white rounded-2xl p-6 md:p-8 border hover:shadow-md transition-shadow"
                    style={{ borderColor: '#D1E8E8' }}
                  >
                    <h3
                      className="font-heading text-xl md:text-2xl font-bold mb-1"
                      style={{ color: '#1A2E35' }}
                    >
                      {option.title}
                    </h3>
                    <p
                      className="font-body text-sm mb-4"
                      style={{ color: '#4A5C61' }}
                    >
                      {option.subtitle}
                    </p>
                    <p
                      className="font-body text-sm md:text-base leading-relaxed mb-5"
                      style={{ color: '#1A2E35' }}
                    >
                      {option.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                      {option.details.map((detail) => (
                        <div key={detail.label}>
                          <span
                            className="font-heading font-bold text-sm"
                            style={{ color: '#1A2E35' }}
                          >
                            {detail.label}:{' '}
                          </span>
                          <span className="font-body text-sm" style={{ color: '#4A5C61' }}>
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={option.link.href}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-heading font-bold text-sm tracking-wide transition-opacity hover:opacity-80 min-h-[44px]"
                      style={option.link.primary
                        ? { backgroundColor: '#0B6E72', color: '#fff' }
                        : { backgroundColor: '#E07B39', color: '#fff' }
                      }
                    >
                      {option.link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* What to Bring */}
            <section className="mb-12 md:mb-16">
              <div
                className="p-6 md:p-8 rounded-2xl"
                style={{ backgroundColor: '#E8F4F5' }}
              >
                <h2
                  className="font-heading text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: '#1A2E35' }}
                >
                  What to Bring
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3
                      className="font-heading text-base font-bold mb-4"
                      style={{ color: '#1A2E35' }}
                    >
                      Essential items
                    </h3>
                    <div className="space-y-3">
                      {[
                        { item: 'Reef-safe sunscreen', note: 'regular sunscreen is banned to protect the reef' },
                        { item: 'Hat and sunglasses', note: 'limited shade on the beach' },
                        { item: 'Water bottle', note: 'stay hydrated in the tropical heat' },
                        { item: 'Camera', note: 'you\'ll want to capture this' },
                        { item: 'Comfortable walking shoes', note: 'for the Hill Inlet walk' },
                      ].map(({ item, note }) => (
                        <div key={item} className="flex items-start gap-2">
                          <span
                            className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: '#0B6E72' }}
                            aria-hidden="true"
                          />
                          <p className="font-body text-sm" style={{ color: '#1A2E35' }}>
                            <span className="font-bold">{item}</span> — {note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3
                      className="font-heading text-base font-bold mb-4"
                      style={{ color: '#1A2E35' }}
                    >
                      Leave at home
                    </h3>
                    <div className="space-y-3">
                      {[
                        { item: 'Plastic bags', note: 'banned in the marine park' },
                        { item: 'Regular sunscreen', note: 'only reef-safe allowed' },
                        { item: 'Glass containers', note: 'not permitted on most boats' },
                        { item: 'Drones', note: 'prohibited in the national park' },
                      ].map(({ item, note }) => (
                        <div key={item} className="flex items-start gap-2">
                          <span
                            className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: '#E07B39' }}
                            aria-hidden="true"
                          />
                          <p className="font-body text-sm" style={{ color: '#1A2E35' }}>
                            <span className="font-bold">{item}</span> — {note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Rules */}
            <section className="mb-12 md:mb-16">
              <div
                className="border-l-4 p-6 rounded-lg"
                style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
              >
                <h3
                  className="font-heading text-lg font-bold mb-4"
                  style={{ color: '#1A2E35' }}
                >
                  Important rules & etiquette
                </h3>
                <div className="space-y-3">
                  {[
                    'Do not take sand or shells — it\'s illegal and damages the environment',
                    'Take all rubbish with you — leave no trace',
                    'Stay on marked walking tracks — protects native vegetation',
                    'No dogs allowed — protects native wildlife',
                    'No camping on the beach itself — a designated camping area exists in the vine forest behind the southern end, accessible by boat with a valid Queensland Parks permit',
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="font-heading font-bold text-sm shrink-0 mt-0.5"
                        style={{ color: '#E07B39' }}
                      >
                        {i + 1}.
                      </span>
                      <p className="font-body text-sm" style={{ color: '#1A2E35' }}>
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Best Time to Visit */}
            <section className="mb-12 md:mb-16">
              <h2
                className="font-heading text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#1A2E35' }}
              >
                Best Time to Visit
              </h2>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {seasons.map((season) => (
                  <div
                    key={season.name}
                    className="p-5 md:p-6 rounded-xl border-t-4"
                    style={{ backgroundColor: season.bg, borderColor: season.accent }}
                  >
                    <h3
                      className="font-heading text-lg font-bold mb-1"
                      style={{ color: '#1A2E35' }}
                    >
                      {season.name}
                    </h3>
                    <p
                      className="font-body text-xs mb-4 font-bold"
                      style={{ color: '#4A5C61' }}
                    >
                      {season.months}
                    </p>
                    <div className="space-y-1.5">
                      {season.pros.map((pro) => (
                        <div key={pro} className="flex items-center gap-2">
                          <span style={{ color: '#0B6E72' }} aria-hidden="true">&#10003;</span>
                          <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{pro}</span>
                        </div>
                      ))}
                      {season.cons.map((con) => (
                        <div key={con} className="flex items-center gap-2">
                          <span style={{ color: '#E07B39' }} aria-hidden="true">&#10007;</span>
                          <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2
                className="font-heading text-2xl md:text-3xl font-bold mb-8"
                style={{ color: '#1A2E35' }}
              >
                Common questions
              </h2>
              <div className="space-y-4 md:space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-white border rounded-xl p-6"
                    style={{ borderColor: '#D1E8E8' }}
                  >
                    <h3
                      className="font-heading text-lg font-bold mb-3"
                      style={{ color: '#1A2E35' }}
                    >
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
        </div>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to see it for yourself?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              The curated list of operators worth booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/whitehaven-beach/tours"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                View Day Tours
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