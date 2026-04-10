import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: "Discover Whitsundays | A local's guide to the Whitsunday Islands",
  description: 'Honest, curated travel guidance for the Whitsunday Islands from an Airlie Beach local. Fewer recommendations, covered properly.',
  openGraph: {
    title: "Discover Whitsundays | A local's guide to the Whitsunday Islands",
    description: 'Honest, curated travel guidance for the Whitsunday Islands from an Airlie Beach local.',
    url: 'https://discoverwhitsundays.com',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/home-hero.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Discover Whitsundays | A local's guide",
    description: 'Honest, curated travel guidance for the Whitsunday Islands from an Airlie Beach local.',
    images: ['/images/home-hero.jpg'],
  },
};

const cards = [
  {
    href: '/whitehaven-beach',
    image: '/images/Whitehaven.jpg',
    alt: 'Whitehaven Beach white silica sand and Hill Inlet swirling sandbar, Whitsundays',
    badge: 'Must-See',
    badgeColor: '#0B6E72',
    title: 'Whitehaven Beach',
    description: "If you can only see one thing while you're here, it has to be this.",
    priority: true,
  },
  {
    href: '/islands',
    image: '/images/islands-hero1.jpg',
    alt: 'Aerial view of tropical islands and turquoise water in the Whitsundays',
    badge: '74 Islands',
    badgeColor: '#0B6E72',
    title: 'The Islands',
    description: "Mostly untouched national park. But there's an island to suit your vibe — find it here.",
    priority: false,
  },
  {
    href: '/things-to-do',
    image: '/images/Things-to-do.jpg',
    alt: 'Sailing boats at sunset on the Whitsunday Passage',
    badge: 'Adventures',
    badgeColor: '#0B6E72',
    title: 'Things to Do',
    description: "The Whitsundays is a playground for all things aquatic — and a few things that aren't. Here's what to book and what to skip.",
    priority: false,
  },
  {
    href: '/whats-on',
    image: '/images/whats-on.jpg',
    alt: 'Local events and festivals in Airlie Beach and the Whitsundays',
    badge: 'Events',
    badgeColor: '#E07B39',
    title: "What's On",
    description: 'Local events and festivals in the Whitsundays.',
    priority: false,
  },
  {
    href: '/itinerary-3-day',
    image: '/images/plan-your-trip.jpg',
    alt: 'Planning a Whitsundays itinerary — map and travel guide',
    badge: 'Itinerary',
    badgeColor: '#E07B39',
    title: 'Plan Your Trip',
    description: "Only have a long weekend? Here's what I'd see first.",
    priority: false,
  },
  {
    href: '/where-to-stay',
    image: '/images/accom-hero.jpg',
    alt: 'Waterfront accommodation options in Airlie Beach and the Whitsunday Islands',
    badge: 'Accommodation',
    badgeColor: '#E07B39',
    title: 'Where to Stay',
    description: 'Mainland or islands? Make your choice here.',
    priority: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[400px] md:h-[600px] overflow-hidden">
          <Image
            src="/images/home-hero.jpg"
            alt="Aerial view of the Whitsunday Islands and Great Barrier Reef from above"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/70 via-[#1A2E35]/50 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-3xl">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 drop-shadow-2xl">
                Discover Whitsundays
              </h1>
              <p className="font-heading text-lg md:text-2xl text-white/90 drop-shadow-lg font-light max-w-2xl mx-auto">
                A curated guide to the Whitsunday Islands &mdash; local insight, honest recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Local voice intro */}
        <div className="border-b" style={{ backgroundColor: '#F5F0E8', borderColor: '#0B6E72', borderBottomWidth: '1px', borderBottomStyle: 'solid', opacity: 1 }}>
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl text-center">
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
              I&apos;m Tony. Like many before me, I visited Airlie Beach for a holiday and never left &mdash;
              that was seven years ago. I&apos;ve picked up a few things about the Whitsundays in that time,
              and it felt like time to share them. Because if you&apos;ve made it this far, you deserve to
              get the best out of it.
            </p>
          </div>
        </div>

        {/* Cards section */}
        <div className="py-12 md:py-16" style={{ backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-3" style={{ color: '#1A2E35' }}>
                Explore the Whitsundays
              </h2>
              <p className="font-body text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#4A5C61' }}>
                Fewer recommendations, covered properly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cards.map((card) => (
                <Link key={card.href} href={card.href} className="group">
                  <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={card.priority}
                      loading={card.priority ? undefined : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/75" />
                    <div className="relative p-6 md:p-8 h-full flex flex-col justify-end text-white">
                      <div
                        className="inline-block px-3 py-1 rounded-lg font-heading font-bold text-xs tracking-widest uppercase mb-3 w-fit text-white"
                        style={{ backgroundColor: card.badgeColor }}
                      >
                        {card.badge}
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#E07B39] transition-colors">
                        {card.title}
                      </h3>
                      <p className="font-body text-sm md:text-base opacity-90">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
              Only have time for the greatest hits?
            </h2>
            <p className="font-body text-lg md:text-xl mb-8 md:mb-10" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Here&apos;s how I&apos;d do it.
            </p>
            <Link
              href="/itinerary-3-day"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-2xl min-h-[44px]"
              style={{ backgroundColor: '#E07B39', color: '#fff' }}
            >
              Read the Itinerary
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
