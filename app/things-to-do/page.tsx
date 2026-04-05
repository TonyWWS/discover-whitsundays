import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Things to Do in the Whitsundays | Discover Whitsundays',
  description: "What's worth your time in the Whitsundays — honest recommendations from an Airlie Beach local across sailing, scenic flights, bareboating, and island visits.",
  openGraph: {
    title: 'Things to Do in the Whitsundays | Discover Whitsundays',
    description: "What's worth your time in the Whitsundays — honest recommendations from an Airlie Beach local.",
    url: 'https://discoverwhitsundays.com/things-to-do',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/things-to-do-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Things to Do in the Whitsundays | Discover Whitsundays',
    description: "What's worth your time in the Whitsundays.",
    images: ['/images/things-to-do-hero.jpg'],
  },
};

const categories = [
  {
    title: 'On the Water',
    description: 'Sailing, snorkelling, diving, day trips, and overnight adventures. The core Whitsundays experience — and where the quality gap between operators matters most.',
    image: '/images/things-to-do-water.jpg',
    imageAlt: 'Sailing catamaran on the Whitsunday Passage with islands in the background',
    accentColor: '#0B6E72',
    links: [
      { label: 'Whitehaven Beach day trips', href: '/tours/whitehaven-beach-tours' },
      { label: 'Overnight sailing', href: '/tours/overnight-sailing' },
    ],
  },
  {
    title: 'From Above',
    description: "Scenic flights, helicopters, and seaplanes. The only way to see Heart Reef and get the Hill Inlet aerial shot that everyone's seen but most people don't know how to take.",
    image: '/images/things-to-do-flights.jpg',
    imageAlt: 'Aerial view of Hill Inlet and Whitehaven Beach swirling sands from a scenic flight',
    accentColor: '#E07B39',
    links: [
      { label: 'Scenic flights guide', href: '/tours/scenic-flights' },
    ],
  },
  {
    title: 'Further Out',
    description: "Bareboating, private charters, and island camping. For those who want to get off the main tourist circuit and access the parts of the Whitsundays most visitors never see.",
    image: '/images/things-to-do-bareboat.jpg',
    imageAlt: 'Yacht anchored in a secluded bay in the Whitsunday Islands national park',
    accentColor: '#0B6E72',
    links: [
      { label: 'Bareboating & private charters', href: '/tours/bareboating-and-private-charters' },
    ],
  },
  {
    title: 'On the Islands',
    description: "Resort stays, day trips to Hamilton and Daydream, and the quieter islands most visitors never find. 74 islands — most of them national park, a handful worth staying on.",
    image: '/images/things-to-do-islands.jpg',
    imageAlt: 'Tropical island with clear turquoise water in the Whitsundays national park',
    accentColor: '#E07B39',
    links: [
      { label: 'Island guide', href: '/islands' },
    ],
  },
];

export default function ThingsToDoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/things-to-do-hero.jpg"
            alt="Sailing boats on the Whitsunday Passage at sunset"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/50 via-[#1A2E35]/40 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
                Things to Do
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-lg">
                The Whitsundays is a playground for all things aquatic &mdash; and a few things
                that aren&apos;t. Here&apos;s what&apos;s worth your time.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial intro */}
        <div className="border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl">
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
              Seven years here and I&apos;ll be straight with you: the Whitsundays is primarily a
              water destination. If you&apos;re not into being on or in the ocean, it&apos;s worth
              knowing that upfront. If you are, there&apos;s a lot to choose from &mdash; and the
              quality gap between operators is significant. I&apos;ve broken it into four areas. If
              you have a specific question, the turtle in the bottom right corner knows everything
              I know.
            </p>
          </div>
        </div>

        {/* Four category cards */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="space-y-8">
              {categories.map((cat, index) => (
                <article
                  key={cat.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  <div className="md:grid md:grid-cols-5">

                    {/* Image */}
                    <div
                      className={`relative h-52 md:h-auto md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                    >
                      <Image
                        src={cat.image}
                        alt={cat.imageAlt}
                        fill
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 hidden md:block"
                        style={{ backgroundColor: cat.accentColor }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`p-6 md:p-8 md:col-span-3 flex flex-col justify-between ${index % 2 === 1 ? 'md:order-1' : ''}`}
                    >
                      <div>
                        <div
                          className="inline-block px-3 py-1 rounded-lg font-heading font-bold text-xs tracking-widest uppercase mb-4 text-white"
                          style={{ backgroundColor: cat.accentColor }}
                        >
                          {cat.title}
                        </div>

                        <h2
                          className="font-heading text-2xl md:text-3xl font-bold mb-3"
                          style={{ color: '#1A2E35' }}
                        >
                          {cat.title}
                        </h2>

                        <p
                          className="font-body text-sm md:text-base leading-relaxed mb-6"
                          style={{ color: '#4A5C61' }}
                        >
                          {cat.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                        {cat.links.map((link, i) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="px-5 py-3 rounded-lg font-heading font-bold text-sm tracking-wide transition-opacity hover:opacity-80 min-h-[44px] flex items-center justify-center text-center"
                            style={i === 0
                              ? { backgroundColor: cat.accentColor, color: '#fff' }
                              : {
                                  border: `2px solid ${cat.accentColor}`,
                                  color: cat.accentColor,
                                  backgroundColor: 'transparent',
                                }
                            }
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Turtle nudge */}
        <div
          className="border-t border-b"
          style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}
        >
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl text-center">
            <p className="font-body text-base leading-relaxed" style={{ color: '#1A2E35' }}>
              Not sure what suits you? The turtle in the bottom right corner can answer specific
              questions &mdash; tell it how long you&apos;re here, who you&apos;re travelling with,
              and what you&apos;re into. It knows everything I know about this place.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Need help planning the whole trip?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Three days, done properly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/itinerary-3-day"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                Read the Itinerary
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
