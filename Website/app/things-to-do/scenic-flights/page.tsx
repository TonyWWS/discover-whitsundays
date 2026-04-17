import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Scenic Flights in the Whitsundays | Discover Whitsundays',
  description: 'Five curated scenic flight operators over the Whitsundays — fixed-wing, helicopter, seaplane, and combo packages. The only way to see Heart Reef and get the Hill Inlet aerial shot.',
  openGraph: {
    title: 'Scenic Flights in the Whitsundays | Discover Whitsundays',
    description: 'The only way to see Heart Reef. Five operators, each genuinely different.',
    url: 'https://discoverwhitsundays.com/tours/scenic-flights',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/scenic-flights-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scenic Flights in the Whitsundays | Discover Whitsundays',
    description: 'The only way to see Heart Reef. Five operators, each genuinely different.',
    images: ['/images/scenic-flights-hero.jpg'],
  },
};

const operators = [
  {
    name: 'FlyAus',
    tagline: 'Fly Australia Charters',
    badge: 'Best Value Fixed-Wing',
    badgeColor: '#0B6E72',
    image: '/images/scenic-flights-flyaus.jpg',
    imageAlt: 'Fixed-wing aircraft flying over Heart Reef and the Great Barrier Reef, Whitsundays',
    price: 'From $318',
    duration: '60 minutes',
    departure: 'Whitsunday Airport — 5 min from Airlie Beach',
    description: 'The most accessible scenic flight in the Whitsundays. Up to six departures daily, guaranteed window seat for every passenger, and two passes over Heart Reef so both sides of the aircraft get the shot. The flight covers Whitehaven Beach, Hill Inlet, Heart Reef, and the outer Great Barrier Reef in one hour.',
    includes: [
      'Heart Reef — two passes, one each side',
      'Whitehaven Beach and Hill Inlet',
      '74 Whitsunday Islands from above',
      'Hardy Reef and outer Great Barrier Reef',
      'Guaranteed window seat',
      'Hotel pickup from two Airlie Beach locations',
      'Up to 6 departures daily — 7am through to 2:30pm',
    ],
    whoFor: 'Budget-conscious travellers who want Heart Reef covered without helicopter prices. Photographers wanting maximum time in the air. Anyone visiting Whitehaven Beach separately by boat who wants the aerial view as a standalone.',
    worthNoting: 'The flight component in Ocean Rafting\'s Fly Raft package uses the same aircraft and departure point. If you\'re already considering Ocean Rafting for Whitehaven Beach, booking the Fly Raft combo saves up to $38pp.',
    accentColor: '#0B6E72',
    website: 'https://flyaus.com.au/whitsunday-tours/',
  },
  {
    name: 'Airlie Beach Helicopters',
    tagline: 'Family owned — pilot Justin',
    badge: 'Most Personal Service',
    badgeColor: '#E07B39',
    image: '/images/scenic-flights-helicopter.jpg',
    imageAlt: 'Small helicopter flying over the Whitsunday Islands with turquoise water below',
    price: 'From $279',
    duration: '20 min to 2.5 hours',
    departure: 'Whitsunday Airport — 5 min from Airlie Beach',
    description: 'Family owned and operated by pilot Justin, who has over 10 years experience with six of those based in Airlie Beach. Operates a 2023 Robinson R44 — 4 seats, maximum. Every review names Justin specifically. If you want to feel like a genuine guest rather than a passenger number, this is the operator. Tours range from a 20-minute scenic intro all the way to a 2.5-hour Heart Reef and Whitehaven Beach landing with canapés and champagne.',
    includes: [
      '20-minute Whitsunday intro flight from $279',
      '30-minute Whitehaven from Above from $429',
      'Heart Reef and Whitehaven Rest & Relax (2.5hr) from $969 — beach landing, 1.5hr on sand, canapés and beverages',
      'Hotel pickup and drop-off included',
      'Maximum 3 passengers — never a crowd',
    ],
    whoFor: 'Couples, honeymooners, and anyone celebrating something. First-time helicopter flyers who want a reassuring, unhurried experience. Those who want the Whitehaven beach landing with genuine personal service rather than a group tour feel.',
    worthNoting: 'Weight restrictions apply — 130kg maximum per seat, combined 250kg. Book directly with Justin rather than through aggregators for the most flexible experience.',
    accentColor: '#E07B39',
    website: 'https://airliebeachhelicopters.com.au',
  },
  {
    name: 'HeliReef',
    tagline: 'Helicopter and fixed-wing from Coral Sea Marina',
    badge: 'Broadest Tour Range',
    badgeColor: '#0B6E72',
    image: '/images/scenic-flights-helireef.jpg',
    imageAlt: 'Helicopter at Coral Sea Marina Airlie Beach ready for scenic flight over Whitsundays',
    price: 'From $279',
    duration: '20 min to 3 hours',
    departure: 'Coral Sea Marina — downtown Airlie Beach',
    description: 'The only helicopter operator departing directly from Coral Sea Marina in the heart of Airlie Beach — no transfer to the airport needed. Also runs fixed-wing aeroplane tours from Whitsunday Airport covering a different route via Hamilton Island, Bait Reef, and Hayman Island. The broadest tour range of any local operator, from a 20-minute intro through to a full Reefworld pontoon combo.',
    includes: [
      '20-minute Whitsunday intro from Coral Sea Marina',
      'Whitehaven Beach scenic and landing options',
      'Heart Reef + Whitehaven landing — 75 min on beach with sparkling wine',
      'Heart Reef Escapade — helicopter to Langford Reef for snorkelling',
      'Reefworld combo — 60-min scenic over Heart Reef then pontoon experience',
      'Fixed-wing aeroplane option from Whitsunday Airport',
      'Island transfers available (Hamilton to Hayman etc)',
    ],
    whoFor: 'Anyone who wants maximum flexibility in tour length and style. Snorkellers who want to combine aerial views with in-water reef time. Visitors staying close to the marina who want the most convenient departure point.',
    worthNoting: 'Minimum 2 passengers required — no single bookings. In some cases flights can accommodate 3 passengers at a discounted rate for the third seat. Pilot Tom is mentioned by name in multiple reviews.',
    accentColor: '#0B6E72',
    website: 'https://www.helireef.com.au',
  },
  {
    name: 'Ocean Rafting Fly Raft',
    tagline: 'Scenic flight + Ocean Rafting day tour',
    badge: 'Best Combo',
    badgeColor: '#E07B39',
    image: '/images/scenic-flights-flyraft.jpg',
    imageAlt: 'Ocean Rafting semi-rigid inflatable boat on the Whitsunday Passage with islands behind',
    price: 'From $472',
    duration: 'Full day — flight + boat tour',
    departure: 'Whitsunday Airport — 5 min from Airlie Beach',
    description: 'The only way to see the Whitsundays from above, on the water, and below the surface — all in a single day. The 60-minute FlyAus scenic flight (Heart Reef, Hill Inlet, Whitehaven from the air) is paired with Ocean Rafting\'s Northern Exposure or Southern Lights day tour (Whitehaven Beach, Hill Inlet beach access, reef snorkelling). The flight and boat tour cannot be taken on the same day — the flight is in the morning, the rafting departs from Airlie Beach separately. Saves up to $38pp versus booking both independently.',
    includes: [
      '60-minute scenic flight over Heart Reef, Hill Inlet, Whitehaven',
      'Choice of Northern Exposure (more snorkelling) or Southern Lights (more beach time)',
      'Direct Hill Inlet beach access — only Ocean Rafting has this',
      'Guided national park walk to Hill Inlet lookout',
      'Inner fringing reef snorkelling',
      'Tropical lunch included on the boat tour',
      'Hotel pickup for both components',
    ],
    whoFor: 'Anyone who wants the complete aerial and water-level Whitsundays experience without doing two separate multi-day trips. Adventure-focused travellers who want maximum variety. Good value for those already planning both a flight and Ocean Rafting.',
    worthNoting: 'The two components run on separate days — plan accordingly. Not available for guests departing from Hamilton Island, Hayman Island, Long Island, or Daydream Island.',
    accentColor: '#E07B39',
    website: 'https://oceanrafting.com.au/tours/fly-and-raft/',
  },
  {
    name: 'Air Whitsunday Seaplanes',
    tagline: 'Seaplane — reef, beach, and water landing',
    badge: 'Unique Seaplane Experience',
    badgeColor: '#0B6E72',
    image: '/images/scenic-flights-seaplane.jpg',
    imageAlt: 'Seaplane making a water landing at Whitehaven Beach, Whitsunday Island',
    price: 'From $450',
    duration: 'Half day to full day',
    departure: 'Whitsunday Airport — 5 min from Airlie Beach',
    description: 'The seaplane experience is genuinely different from fixed-wing or helicopter. You take off and land on water — the Panorama tour lands at Whitehaven Beach (step straight from the plane onto the sand) and at Hardy Lagoon on the outer reef, where a private glass-bottom boat and snorkelling session await. Max 10 passengers. When it runs as advertised it is exceptional. Has pioneered seaplane services in the Whitsundays since 1973.',
    includes: [
      'Seaplane flight over Heart Reef, Hill Inlet, Whitehaven',
      'Water landing at Whitehaven Beach',
      'Fine dining lunch on the beach',
      'Hardy Lagoon — private reef location on the outer Great Barrier Reef',
      'Glass-bottom boat coral viewing',
      'Snorkelling in Hardy Lagoon',
      'Max 10 passengers — near-private feel',
    ],
    whoFor: 'Those who want the seaplane water landing as part of the experience itself. Anyone wanting reef snorkelling and Whitehaven in a single tour. Worth the premium for the right traveller.',
    worthNoting: 'Check availability and recent reviews before booking — some guests have reported tours not running as described. Book direct and confirm your itinerary in writing. The concept is outstanding; verify the current operational status.',
    accentColor: '#0B6E72',
    website: 'https://www.airwhitsunday.com.au',
  },
];

const faqs = [
  {
    q: 'Is it worth the money?',
    a: "Living here, I've watched countless visitors return from scenic flights saying it was the highlight of their trip. Heart Reef only makes sense from the air, and the scale of Hill Inlet and Whitehaven Beach can't be appreciated from ground level. If you only splurge on one thing, make it this.",
  },
  {
    q: 'Fixed-wing, helicopter, or seaplane — what\'s the difference?',
    a: "Fixed-wing (FlyAus, HeliReef aeroplane) is the best value — more passengers, guaranteed window seat, smooth ride, covers the most distance. Helicopters are more manoeuvrable, can hover over Heart Reef, and can land on Whitehaven Beach — smaller groups, more personal, more expensive. Seaplanes offer a unique water takeoff and landing experience — the landing at Whitehaven or the reef is part of the appeal.",
  },
  {
    q: 'Can I see Heart Reef from a boat tour?',
    a: "No. Heart Reef is 78km offshore — too far for day boat tours. Scenic flight is the only practical way most visitors see it. Every fixed-wing and helicopter tour on this list flies over it.",
  },
  {
    q: 'What if the weather is bad?',
    a: "Flights are weather-dependent. If conditions aren't safe, operators reschedule rather than cancel — no extra cost. Morning flights generally have better conditions. If your dates are fixed, check the operator's cancellation policy before booking.",
  },
  {
    q: 'Which side of the plane should I sit on?',
    a: "For fixed-wing tours, every seat is a window seat and pilots do two passes over Heart Reef — one each side — so it doesn't matter. For helicopters, everyone gets a window. For seaplanes, request a window seat when booking and arrive early.",
  },
  {
    q: 'Are there weight restrictions?',
    a: "Yes on all aircraft. Fixed-wing typically 125–130kg per seat. Helicopters usually 110–130kg per seat with combined weight limits. You'll be weighed at check-in — provide accurate weights when booking to avoid issues on the day.",
  },
];

export default function ScenicFlightsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/scenic-flights-hero.jpg"
            alt="Aerial view of Hill Inlet and Whitehaven Beach from a scenic flight over the Whitsundays"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/60 via-[#1A2E35]/40 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center justify-center">
            <div className="max-w-3xl text-white text-center">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
                Scenic Flights
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-lg">
                The only way to see Heart Reef &mdash; and the view that puts everything else
                in perspective.
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl">
            <div className="p-6 md:p-8 rounded-xl border-l-4" style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}>
              <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
                Every photo of the Whitsundays that made you want to come here was taken from the
                air. The swirling sands of Hill Inlet, the heart shape of Heart Reef, the contrast
                between deep ocean and shallow turquoise — none of it makes sense from ground level.
                Living in Airlie Beach, I&apos;ve watched countless people return from scenic flights
                saying it was the highlight of their trip. If you only splurge on one thing, make
                it this.
              </p>
            </div>
          </div>
        </div>

        {/* Helicopter vs fixed-wing vs seaplane */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1A2E35' }}>
              Fixed-wing, helicopter, or seaplane?
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {[
                {
                  title: 'Fixed-wing',
                  pros: ['Best value per minute in the air', 'Guaranteed window seat', 'Up to 13 passengers — easier to book', 'Smooth ride, covers the most distance'],
                  cons: ['Can\'t hover or land on beach', 'Fixed flight path'],
                  accent: '#0B6E72',
                },
                {
                  title: 'Helicopter',
                  pros: ['Can hover over Heart Reef for the shot', 'Can land on Whitehaven Beach', 'More manoeuvrable — circles back for photos', 'Small groups (2–4 passengers)'],
                  cons: ['More expensive', 'Can be bumpy in wind'],
                  accent: '#E07B39',
                },
                {
                  title: 'Seaplane',
                  pros: ['Water takeoff and landing — genuinely thrilling', 'Land directly at Whitehaven and reef', 'Smooth flight similar to fixed-wing', 'Unique experience unlike anything else'],
                  cons: ['Higher price point', 'Fewer departure times'],
                  accent: '#0B6E72',
                },
              ].map((type) => (
                <div
                  key={type.title}
                  className="bg-white rounded-xl border-t-4 p-5"
                  style={{ borderColor: type.accent, borderLeftColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderBottomColor: '#D1E8E8', borderLeftWidth: '1px', borderRightWidth: '1px', borderBottomWidth: '1px' }}
                >
                  <h3 className="font-heading text-lg font-bold mb-4" style={{ color: '#1A2E35' }}>
                    {type.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {type.pros.map((pro) => (
                      <div key={pro} className="flex items-start gap-2">
                        <span style={{ color: '#0B6E72' }} aria-hidden="true">&#10003;</span>
                        <span className="font-body text-xs leading-relaxed" style={{ color: '#1A2E35' }}>{pro}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {type.cons.map((con) => (
                      <div key={con} className="flex items-start gap-2">
                        <span style={{ color: '#E07B39' }} aria-hidden="true">&#10007;</span>
                        <span className="font-body text-xs leading-relaxed" style={{ color: '#1A2E35' }}>{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-5 rounded-lg border-l-4"
              style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
            >
              <p className="font-heading font-bold text-sm mb-1" style={{ color: '#1A2E35' }}>
                Honest recommendation
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                If you&apos;re splurging anyway, go helicopter — the ability to hover over Heart
                Reef and potentially land on Whitehaven Beach is worth the premium. If budget
                matters, FlyAus delivers the same aerial views of Heart Reef and Whitehaven for
                significantly less. The seaplane water landing is genuinely unlike anything else
                if that experience itself appeals.
              </p>
            </div>
          </div>
        </section>

        {/* Operator cards */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-2"
              style={{ color: '#1A2E35' }}
            >
              Five operators worth considering
            </h2>
            <p className="font-body text-sm mb-10" style={{ color: '#4A5C61' }}>
              Each genuinely different. Here&apos;s the honest breakdown.
            </p>

            <div className="space-y-12">
              {operators.map((op) => (
                <article
                  key={op.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  {/* Image */}
                  <div className="relative h-52 md:h-64">
                    <Image
                      src={op.image}
                      alt={op.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A2E35]/10 to-[#1A2E35]/75" />
                    <div className="absolute bottom-0 left-0 p-5 md:p-6">
                      <div
                        className="inline-block px-3 py-1 rounded-lg font-heading font-bold text-xs tracking-widest uppercase mb-2 text-white"
                        style={{ backgroundColor: op.badgeColor }}
                      >
                        {op.badge}
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
                        {op.name}
                      </h3>
                      <p className="font-body text-sm text-white/80">{op.tagline}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 md:p-8 space-y-6">

                    {/* Quick stats */}
                    <div className="flex flex-wrap gap-6 pb-5 border-b" style={{ borderColor: '#D1E8E8' }}>
                      <div>
                        <div className="font-heading text-xl font-bold" style={{ color: op.accentColor }}>
                          {op.price}
                        </div>
                        <div className="font-body text-xs" style={{ color: '#4A5C61' }}>per person</div>
                      </div>
                      <div>
                        <div className="font-heading text-base font-bold" style={{ color: '#1A2E35' }}>
                          {op.duration}
                        </div>
                        <div className="font-body text-xs" style={{ color: '#4A5C61' }}>duration</div>
                      </div>
                      <div>
                        <div className="font-heading text-base font-bold" style={{ color: '#1A2E35' }}>
                          {op.departure}
                        </div>
                        <div className="font-body text-xs" style={{ color: '#4A5C61' }}>departure</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                      {op.description}
                    </p>

                    {/* Includes + who for */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div
                          className="text-xs font-heading font-bold tracking-widest uppercase mb-3"
                          style={{ color: '#0B6E72' }}
                        >
                          What&apos;s included
                        </div>
                        <div className="space-y-2">
                          {op.includes.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                style={{ backgroundColor: op.accentColor }}
                                aria-hidden="true"
                              />
                              <span className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div
                          className="text-xs font-heading font-bold tracking-widest uppercase mb-3"
                          style={{ color: '#0B6E72' }}
                        >
                          Who this suits
                        </div>
                        <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                          {op.whoFor}
                        </p>
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
                        {op.worthNoting}
                      </p>
                    </div>

                    {/* Website link */}
                    <a
                      href={op.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading font-bold text-sm tracking-wide transition-opacity hover:opacity-80 min-h-[44px]"
                      style={{ backgroundColor: op.accentColor, color: '#fff' }}
                    >
                      Visit website &#8594;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer mention — Hamilton Island Air */}
        <div className="border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 py-8 max-w-4xl">
            <div className="p-5 md:p-6 rounded-xl border" style={{ borderColor: '#D1E8E8' }}>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                <span className="font-bold">Already staying on Hamilton Island?</span>{' '}
                <a
                  href="https://www.hamiltonislandair.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ color: '#0B6E72' }}
                >
                  Hamilton Island Air
                </a>{' '}
                operates helicopter, seaplane, and fixed-wing tours directly from the island —
                including their flagship Journey to the Heart experience, which lands on a private
                pontoon inside Heart Reef Lagoon. Departures from Hamilton Island only, so not
                practical for visitors based in Airlie Beach.
              </p>
            </div>
          </div>
        </div>

        {/* Booking tips */}
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
                  title: 'Best time to fly',
                  accent: '#0B6E72',
                  tips: [
                    'Morning (8–10am) — best light, less wind, calmer air',
                    'Late afternoon (3–5pm) — golden hour light',
                    'Avoid midday — harsh overhead sun, more turbulence',
                    'Peak season (Jun–Sep) — book 2–4 weeks ahead',
                  ],
                },
                {
                  title: 'Photography tips',
                  accent: '#E07B39',
                  tips: [
                    'Shoot through window, not at an angle — reduces reflections',
                    'Fast shutter speed (1/500s+) to avoid blur from vibration',
                    'Turn off flash',
                    'Clean lens before boarding',
                    'Wear dark clothing to reduce glare',
                  ],
                },
                {
                  title: 'Important to know',
                  accent: '#0B6E72',
                  tips: [
                    'Flights reschedule in unsafe weather — check cancellation policy',
                    'Arrive 15–20 minutes early for check-in and weight balance',
                    'Provide accurate weights when booking — you\'ll be weighed at check-in',
                    'Noise-cancelling headsets provided on helicopter tours',
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
        <div
          className="border-t"
          style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}
        >
          <div className="container mx-auto px-4 md:px-8 py-6 max-w-4xl">
            <p
              className="font-body text-xs leading-relaxed"
              style={{ color: '#4A5C61' }}
            >
              Some links on this page may earn a small commission if you book through them, at no
              extra cost to you. It helps keep this guide free. I only list operators I&apos;d
              genuinely point a friend toward.{' '}
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
              Ready to see it from above?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Compare all tours or plan your full trip.
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
