import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const operators = [
  {
    name: 'Ocean Rafting',
    tagline: 'Northern Exposure or Southern Lights',
    badge: 'Adventure',
    badgeNote: 'Best for snorkellers & thrill seekers',
    price: 'From $199',
    duration: '7 hours',
    accentColor: '#E07B39',
    why: "The only operator with direct access to Hill Inlet beach — not just the lookout. Their semi-rigid inflatables were originally built as rescue craft and run fast. Two tour options: Northern Exposure for serious snorkellers (two reef sites), Southern Lights for more beach time. TripAdvisor Travellers' Choice winner and consistently the most reviewed operator in the region.",
    whoFor: 'Active travellers, snorkel enthusiasts, anyone who wants the thrill of a fast boat with genuine local guides. Also great if Hill Inlet access is a priority.',
    worthNoting: "The speedboat ride is part of the experience — you won't be chatting on the way out. If someone wants a leisurely sail with a drink in hand, this isn't the one. That's not a flaw, just an honest trade-off.",
    website: 'https://oceanrafting.com.au',
    deepLink: null,
  },
  {
    name: 'ZigZag Whitsundays',
    tagline: 'Super Flyer Catamaran',
    badge: 'Beach Time',
    badgeNote: 'Most time on the sand',
    price: 'From $229',
    duration: '8 hours',
    accentColor: '#0B6E72',
    why: "Founded by Nicole, a marine scientist, and Ben, a diesel engineer — a local Airlie Beach couple who built this tour around one idea: more time on the sand. Their catamaran Super Flyer runs unlimited on-demand water taxi transfers between the boat and the beach all day, giving you up to 5 hours on South Whitehaven. No other operator comes close on beach time.",
    whoFor: 'Families, beach lovers, anyone whose priority is actually being on Whitehaven rather than getting there. The marine science background also means the reef stop is genuinely educational.',
    worthNoting: 'Newer operator than most on this list — worth factoring in if longevity matters to you. That said, the reviews are excellent and the concept is genuinely distinct.',
    website: 'https://zigzagwhitsundays.com.au',
    deepLink: null,
  },
  {
    name: 'Camira',
    tagline: 'Cruise Whitsundays Sailing Adventure',
    badge: 'Sailing',
    badgeNote: 'Largest sailing cat in the Whitsundays',
    price: 'From $219',
    duration: 'Full day',
    accentColor: '#1A2E35',
    why: "The largest sailing catamaran in the Whitsundays with capped passenger numbers — the big purple boat you've probably already seen at the marina. Fully all-inclusive from morning tea through to beer and wine. Hill Inlet, Whitehaven Beach, snorkelling and guided walks all in one day. Long-established and consistently well-reviewed.",
    whoFor: "Couples and adults who want the classic Whitsundays sailing experience with comfort. If someone pictures a cold beer on a sailing boat with 74 islands sliding past — this is the tour.",
    worthNoting: 'Beach time is around 1.5 hours — significantly less than ZigZag. Worth flagging to anyone whose main goal is beach time. The trade-off is the sailing experience itself, which is genuinely the point of this one.',
    website: 'https://www.cruisewhitsundays.com/experiences/camira-sailing-adventure/',
    deepLink: '/things-to-do/camira-sailing-adventure',
  },
  {
    name: 'Whitehaven Xpress',
    tagline: 'The Original Whitehaven Day Tour',
    badge: 'Local Icon',
    badgeNote: 'Family owned since 1989',
    price: 'From $195',
    duration: '8.5 hours',
    accentColor: '#E07B39',
    why: "The pioneer of Whitehaven Beach day tours — family owned and operated by brothers Captain Shane and Captain Dan since 1989. That's not marketing copy, it's just true. Around three hours at Whitehaven Beach and two hours at Hill Inlet, with a BBQ lunch cooked by the captain on the sand. Small vessel, max 35 passengers.",
    whoFor: "Families and beach-focused travellers who want a relaxed, unhurried day. Also good for anyone who values booking with an operator who has been doing this longer than most tourists have been alive.",
    worthNoting: "No snorkelling as a feature — it's beach and lookout focused. Worth confirming current pricing and availability directly with them before recommending.",
    website: 'https://www.whitehavenexpress.com.au',
    deepLink: null,
  },
  {
    name: 'Providence V',
    tagline: 'Tall Ship Schooner Day Sail',
    badge: 'Character',
    badgeNote: 'For those who care about the journey',
    price: 'From $195',
    duration: '9 hours',
    accentColor: '#0B6E72',
    why: "A classic 62-foot gaff-rigged schooner built from Queensland timber — genuinely unlike anything else running day trips out of Airlie Beach. Maximum 24 passengers. You can help hoist the sails if you want to. The boat visits Betty's Beach, a quieter corner of Whitehaven that most tours walk straight past, plus Hill Inlet and a snorkel at Dumbell Island.",
    whoFor: "Sailing enthusiasts and people who care about the journey as much as the destination. Couples looking for something with real character. Not the right pick if someone's priority is beach time or adventure — the pace is deliberately unhurried.",
    worthNoting: "Lunch is an add-on rather than included — factor that into the price comparison. Dietary options are limited (vegetarian only, no vegan or gluten-free). Also worth knowing that on days with little wind, you motor more than you sail. An inherent risk with any sailing vessel.",
    website: 'https://whitsundaysailing.com.au',
    deepLink: null,
  },
];

export const metadata = {
  title: 'Whitehaven Beach Day Tours | Discover Whitsundays',
  description: 'Five curated Whitehaven Beach day trip operators — each genuinely different. Find the one that suits you, from fast adventure boats to tall ship schooners.',
  openGraph: {
    title: 'Whitehaven Beach Day Tours | Discover Whitsundays',
    description: 'Five curated Whitehaven Beach day trip operators — each genuinely different.',
    url: 'https://discoverwhitsundays.com/tours/whitehaven-beach-tours',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/whitehaven-tour-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whitehaven Beach Day Tours | Discover Whitsundays',
    description: 'Five curated Whitehaven Beach day trip operators — each genuinely different.',
    images: ['/images/whitehaven-tour-hero.jpg'],
  },
};

export default function WhitehavenBeachToursPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      {/* Hero */}
      <div className="relative h-[380px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/whitehaven-tour-hero.jpg"
          alt="Hill Inlet and Whitehaven Beach aerial view, Whitsunday Island"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(26, 46, 53, 0.72)' }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <div
              className="inline-block px-3 py-1 rounded text-xs font-heading font-bold tracking-widest uppercase mb-6"
              style={{ backgroundColor: '#E07B39', color: '#fff' }}
            >
              Whitehaven Beach Day Trips
            </div>
            <h1
              className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#fff' }}
            >
              Five operators.<br />
              <span style={{ color: '#E07B39' }}>Five different days.</span>
            </h1>
            <p className="font-body text-lg leading-relaxed" style={{ color: '#8BBCBC' }}>
              I&apos;ve lived in Airlie Beach for seven years. These are the five day trips to
              Whitehaven I&apos;d point a friend toward &mdash; each one genuinely different
              from the others.
            </p>
          </div>
        </div>
      </div>

      {/* How I chose these */}
      <div className="border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="font-body text-base leading-relaxed" style={{ color: '#1A2E35' }}>
            <span className="font-semibold">How this list works:</span> I&apos;ve researched each
            operator&apos;s reputation, longevity, what makes them distinct, and who they actually
            suit. This isn&apos;t every operator running to Whitehaven &mdash; it&apos;s the ones
            worth your time, covering different budgets, vessel types, and styles of day.
          </p>
        </div>
      </div>

      {/* Operator Cards */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-16">
          {operators.map((op) => (
            <div
              key={op.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border"
              style={{ borderColor: '#D1E8E8' }}
            >
              {/* Card Header */}
              <div
                className="px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                style={{ backgroundColor: op.accentColor }}
              >
                <div>
                  <div
                    className="text-xs font-heading font-bold tracking-widest uppercase mb-1"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {op.badge} &mdash; {op.badgeNote}
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-white">{op.name}</h2>
                  <p
                    className="font-body text-sm mt-1"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    {op.tagline}
                  </p>
                </div>
                <div className="flex gap-6 shrink-0">
                  <div className="text-right">
                    <div className="font-heading text-2xl font-bold text-white">{op.price}</div>
                    <div
                      className="font-body text-xs"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                    >
                      per person
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-2xl font-bold text-white">{op.duration}</div>
                    <div
                      className="font-body text-xs"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                    >
                      approx
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 space-y-6">
                <div>
                  <div
                    className="text-xs font-heading font-bold tracking-widest uppercase mb-2"
                    style={{ color: '#0B6E72' }}
                  >
                    Why it made the list
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                    {op.why}
                  </p>
                </div>
                <div>
                  <div
                    className="text-xs font-heading font-bold tracking-widest uppercase mb-2"
                    style={{ color: '#0B6E72' }}
                  >
                    Who this suits
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                    {op.whoFor}
                  </p>
                </div>
                <div
                  className="rounded-lg px-5 py-4 border-l-2"
                  style={{ backgroundColor: '#F4FAFA', borderColor: '#E07B39' }}
                >
                  <div
                    className="text-xs font-heading font-bold tracking-widest uppercase mb-1.5"
                    style={{ color: '#E07B39' }}
                  >
                    Worth noting
                  </div>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: '#1A2E35', opacity: 0.8 }}
                  >
                    {op.worthNoting}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={op.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-lg font-heading font-bold text-sm tracking-wide transition-opacity hover:opacity-80"
                    style={{ backgroundColor: op.accentColor, color: '#fff' }}
                  >
                    Visit Website &#8594;
                  </a>
                  {op.deepLink && (
                    <Link
                      href={op.deepLink}
                      className="font-body text-sm hover:opacity-70 transition-opacity"
                      style={{ color: '#0B6E72' }}
                    >
                      Read our full Camira guide →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cruise Whitsundays footer mention */}
        <div
          className="mt-12 rounded-xl px-8 py-6 border"
          style={{ backgroundColor: '#fff', borderColor: '#D1E8E8' }}
        >
          <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
            <span className="font-semibold">Looking for more options?</span>{' '}
            <a
              href="https://www.cruisewhitsundays.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
              style={{ color: '#0B6E72' }}
            >
              Cruise Whitsundays
            </a>{' '}
            also operate larger vessel day trips and resort connections throughout the region &mdash;
            worth a look if none of the above suit your group size, mobility requirements, or if
            you&apos;re departing from Hamilton Island or Daydream.
          </p>
        </div>

        {/* Decision helper */}
        <div className="mt-16">
          <h2
            className="font-heading text-3xl font-bold mb-2"
            style={{ color: '#1A2E35' }}
          >
            Not sure which one?
          </h2>
          <p className="font-body text-sm mb-8" style={{ color: '#1A2E35', opacity: 0.6 }}>
            Here&apos;s the short version.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { condition: 'You want the most time on the actual beach', answer: 'ZigZag Whitsundays' },
              { condition: "You're a keen snorkeller or want a thrill", answer: 'Ocean Rafting' },
              { condition: 'You want a proper sailing experience', answer: 'Camira' },
              { condition: 'Family, relaxed pace, BBQ on the sand', answer: 'Whitehaven Xpress' },
              { condition: 'The journey matters as much as the destination', answer: 'Providence V' },
              { condition: 'Large group or departing from an island resort', answer: 'Cruise Whitsundays' },
            ].map(({ condition, answer }) => (
              <div
                key={condition}
                className="flex items-start gap-4 p-5 rounded-xl border"
                style={{ backgroundColor: '#fff', borderColor: '#D1E8E8' }}
              >
                <div
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: '#E07B39' }}
                />
                <div>
                  <p className="font-body text-sm" style={{ color: '#1A2E35', opacity: 0.65 }}>
                    {condition}
                  </p>
                  <p
                    className="font-heading font-bold text-base mt-0.5"
                    style={{ color: '#0B6E72' }}
                  >
                    {answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking tips */}
        <div className="mt-16 rounded-2xl p-8" style={{ backgroundColor: '#1A2E35' }}>
          <h2 className="font-heading text-2xl font-bold mb-6 text-white">
            A few things worth knowing before you book
          </h2>
          <div
            className="grid md:grid-cols-2 gap-8 font-body text-sm"
            style={{ color: '#8BBCBC' }}
          >
            <div className="space-y-3">
              <p>
                <span className="text-white font-semibold">Peak season (Jun&ndash;Aug):</span> Book
                4&ndash;6 weeks ahead. Tours fill quickly and this is the best weather window.
              </p>
              <p>
                <span className="text-white font-semibold">Stinger season (late Oct&ndash;May):</span>{' '}
                Stinger suits are provided by most operators &mdash; wear them.
              </p>
              <p>
                <span className="text-white font-semibold">Weather cancellations:</span> Tours
                reschedule rather than refund. If your dates are fixed, check the operator&apos;s
                policy before booking.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <span className="text-white font-semibold">Hill Inlet timing:</span> The famous
                sandbar swirl is best at low tide in the morning. If that shot matters to you, check
                which tours hit it early.
              </p>
              <p>
                <span className="text-white font-semibold">Reef-safe sunscreen only:</span> Not
                optional. It&apos;s a Marine Park requirement.
              </p>
              <p>
                <span className="text-white font-semibold">Seasickness:</span> The crossing can be
                choppy. If you&apos;re prone to it, take medication the night before &mdash; not on
                the boat.
              </p>
            </div>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div
          className="mt-8 px-6 py-5 rounded-xl"
          style={{ backgroundColor: '#fff', border: '1px solid #D1E8E8' }}
        >
          <p
            className="font-body text-xs leading-relaxed"
            style={{ color: '#1A2E35', opacity: 0.55 }}
          >
            Some links on this page may earn a small commission if you book through them, at no
            extra cost to you. It helps keep this guide free. I only list operators I would
            genuinely recommend.{' '}
            <Link
              href="/affiliate-disclosure"
              className="underline hover:opacity-70"
              style={{ color: '#0B6E72' }}
            >
              Full disclosure here.
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ backgroundColor: '#0B6E72' }} className="py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Planning a trip to the Whitsundays?
          </h2>
          <p className="font-body mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Read the full Whitehaven Beach guide or explore what else is worth your time up here.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/whitehaven-beach"
              className="px-8 py-3 rounded-lg font-heading font-bold text-sm tracking-wide transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#E07B39', color: '#fff' }}
            >
              Whitehaven Beach Guide
            </Link>
            <Link
              href="/things-to-do"
              className="px-8 py-3 rounded-lg font-heading font-bold text-sm tracking-wide transition-opacity hover:opacity-80"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              All Things to Do
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
