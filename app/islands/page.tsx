import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'The Whitsunday Islands | Discover Whitsundays',
  description: '74 tropical islands in the Great Barrier Reef. Find out which island suits you — from Hamilton\'s resort amenities to uninhabited national park wilderness.',
  openGraph: {
    title: 'The Whitsunday Islands | Discover Whitsundays',
    description: '74 tropical islands in the Great Barrier Reef. Find out which island suits you — from Hamilton\'s resort amenities to uninhabited national park wilderness.',
    url: 'https://discoverwhitsundays.com/islands',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/islands-hero1.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Whitsunday Islands | Discover Whitsundays',
    description: '74 tropical islands in the Great Barrier Reef. Find out which island suits you.',
    images: ['/images/islands-hero1.jpg'],
  },
};

const islands = [
  {
    name: 'Hamilton Island',
    badge: 'Most Developed',
    badgeColor: '#0B6E72',
    image: '/images/hamilton-island.jpg',
    imageAlt: 'Aerial view of Hamilton Island marina and resort, Whitsundays',
    intro: "The largest inhabited island in the Whitsundays and the only one with its own commercial airport. Hamilton is essentially a self-contained resort island — hotels, restaurants, marina, shops, golf course, and wildlife park. Popular with families and anyone wanting resort amenities combined with island beauty.",
    features: [
      'Own commercial airport (direct flights from Sydney, Melbourne, Brisbane)',
      'Multiple accommodation options from budget to qualia luxury resort',
      'Main marina hub for sailing charters',
      'Hamilton Island Golf Club on Dent Island',
      'Wildlife Hamilton Island — koalas and kangaroos',
      'Catseye Beach for swimming',
    ],
    whoFor: [
      'Families with children',
      'First-time Whitsundays visitors',
      'Couples and honeymooners (qualia resort)',
      'Those wanting resort amenities with island life',
    ],
    tip: "Hamilton runs on golf buggies and is effectively cashless — everything goes on your room charge or credit card. Book restaurants ahead in peak season (June–August). The sunset from One Tree Hill is worth the walk every time.",
    links: [
      { href: '/where-to-stay', label: 'View Accommodation', primary: true },
      { href: '/things-to-do', label: 'Activities & Tours', primary: false },
    ],
  },
  {
    name: 'Daydream Island',
    badge: 'Family Favourite',
    badgeColor: '#E07B39',
    image: '/images/daydream-island.jpg',
    imageAlt: 'Daydream Island resort and Living Reef, Whitsundays',
    intro: "A small island just 1km long and 5km from Airlie Beach — the closest resort island to the mainland. Daydream is known for its Living Reef, an outdoor aquarium where you can snorkel with tropical fish, rays, and reef sharks. More affordable than Hamilton and genuinely great for families.",
    features: [
      'Living Reef outdoor aquarium with 80+ species',
      '20-minute ferry from Airlie Beach',
      '3 pools including a dedicated kids\' pool',
      'Spa and wellness centre',
      'Multiple dining options',
      'Kids\' club',
    ],
    whoFor: [
      'Families with young children',
      'Budget-conscious travellers',
      'Day trippers from Airlie Beach',
      'Snorkelling enthusiasts',
    ],
    tip: "Even if you're not staying, you can take the ferry as a day tripper and use the resort facilities for a day-use fee. The Living Reef fish feeding at 10am is worth timing your visit around. Book the ferry ahead during school holidays.",
    links: [
      { href: '/where-to-stay', label: 'View Accommodation', primary: true },
      { href: '/things-to-do', label: 'Day Trip Options', primary: false },
    ],
  },
  {
    name: 'Whitsunday Island',
    badge: 'Most Famous',
    badgeColor: '#0B6E72',
    image: '/images/whitsunday-island.jpg',
    imageAlt: 'Hill Inlet lookout and Whitehaven Beach on Whitsunday Island',
    intro: "The largest island in the group and home to Whitehaven Beach. The entire island is uninhabited national park — no resorts, no shops, no facilities. Just pristine wilderness. You visit by day tour, sailing charter, or camping permit. This is what most people come to the Whitsundays to see.",
    features: [
      'Whitehaven Beach — 7km of pure silica sand',
      'Hill Inlet lookout — the swirling sand view is best before 11am at low tide',
      'Walking trails through national park',
      'Multiple camping spots (permit required)',
      'Snorkelling spots around the island',
    ],
    whoFor: [
      'Beach lovers and photographers',
      'Day trippers from Airlie Beach',
      'Sailing charter guests',
      'Campers and nature enthusiasts',
    ],
    tip: "The northern end of Whitehaven Beach is usually quieter than the southern. The sand is 98% pure silica — so fine it doesn't retain heat and squeaks when you walk on it. Reef-safe sunscreen is a Marine Park requirement, not a suggestion.",
    links: [
      { href: '/tours/whitehaven-beach-tours', label: 'Book a Whitehaven Tour', primary: true },
      { href: '/whitehaven-beach', label: 'Complete Beach Guide', primary: false },
    ],
  },
  {
    name: 'Long Island',
    badge: 'Quiet Escape',
    badgeColor: '#E07B39',
    image: '/images/long-island.jpg',
    imageAlt: 'Secluded beach and rainforest on Long Island, Whitsundays',
    intro: "Long Island sits 9km from the mainland. At 9km long and just 400m wide, over 80% is national park. It's quieter than Hamilton and Daydream, with 17km of walking trails, fringing reefs, and two distinct accommodation options depending on what you're after.",
    features: [
      '17km of walking trails through national park',
      'Excellent snorkelling 150m off the beach at Happy Bay',
      'Secluded bays and dense rainforest',
      '20-minute transfer from Shute Harbour or Airlie Beach',
      'Palm Bay Resort — adults 16+, Balinese-inspired villas',
      'Elysian Retreat — eco-luxury boutique',
    ],
    whoFor: [
      'Couples and adults seeking quiet',
      'Bush walkers and snorkellers',
      'Eco-conscious travellers',
      'Anyone who wants to genuinely switch off',
    ],
    tip: "I haven't made it to Long Island yet — it's on my list. What I hear from locals is that Happy Bay has some of the best accessible snorkelling in the Whitsundays. Palm Bay suits adults wanting a relaxed retreat. Elysian is eco-luxury done properly — worth it if the budget allows. July is the sweet spot: cooler, sunny, and quiet.",
    links: [
      { href: '/where-to-stay', label: 'View Accommodation', primary: true },
    ],
  },
];

const otherIslands = [
  {
    name: 'Hayman Island',
    description: "The Whitsundays' most exclusive destination. Hayman operates at a different level to the other islands — private, premium, and worth its own dedicated guide. Bookings are direct only.",
    access: 'Full guide coming soon in the luxury travel section.',
  },
  {
    name: 'Hook Island',
    description: "The second-largest island and entirely national park. Famous for excellent snorkelling at Manta Ray Bay, Maureen's Cove, and Stonehaven Bay. Most day tours stop here. Camping available at several bays.",
    access: 'Access: Day tours or bareboat charter',
  },
  {
    name: 'South Molle Island',
    description: "Large island mostly covered in national park. Previously had a resort (now closed). Popular with bareboaters for anchorage. Good walking trails to Mt. Jeffreys summit with panoramic views. Sandy Bay is great for swimming.",
    access: 'Access: Bareboat charter or day tours',
  },
  {
    name: 'Langford Island',
    description: "A tiny sand cay perfect for snorkelling. At low tide you can walk around the entire island in five minutes. The surrounding reef is spectacular with abundant fish. No facilities — just pristine sand and turquoise water.",
    access: 'Access: Day tours or bareboat charter',
  },
];

export default function IslandsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/islands-hero1.jpg"
            alt="Aerial view of the Whitsunday Islands showing turquoise water and tropical islands"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/60 via-[#1A2E35]/50 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center justify-center">
            <div className="max-w-3xl text-white text-center">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
                The Whitsunday Islands
              </h1>
              <p className="font-body text-lg md:text-2xl text-white/90 drop-shadow-lg">
                Mostly untouched national park. But there&apos;s an island to suit your vibe &mdash; find it here.
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
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4" style={{ color: '#1A2E35' }}>
                Only 8 islands are inhabited
              </h2>
              <p className="font-body leading-relaxed" style={{ color: '#1A2E35' }}>
                While there are 74 islands in the Whitsundays, only 8 have resorts or permanent settlements.
                The rest are protected national parks with pristine beaches, walking trails, and camping grounds.
                Here are the ones worth knowing about.
              </p>
            </div>
          </div>
        </div>

        {/* Island Cards */}
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 max-w-4xl">
          <div className="space-y-12 md:space-y-16">
            {islands.map((island) => (
              <article
                key={island.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border"
                style={{ borderColor: '#D1E8E8' }}
              >
                {/* Card Image */}
                <div className="relative h-64 md:h-80">
                  <Image
                    src={island.image}
                    alt={island.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A2E35]/20 to-[#1A2E35]/80" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <div
                      className="inline-block px-3 py-1 rounded-lg font-heading font-bold text-xs tracking-widest uppercase mb-3 text-white"
                      style={{ backgroundColor: island.badgeColor }}
                    >
                      {island.badge}
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                      {island.name}
                    </h2>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 space-y-6">
                  <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
                    {island.intro}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-heading text-base font-bold mb-3" style={{ color: '#1A2E35' }}>
                        Key features
                      </h3>
                      <ul className="space-y-2 font-body text-sm" style={{ color: '#1A2E35' }}>
                        {island.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span style={{ color: '#0B6E72' }} aria-hidden="true">&#8594;</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold mb-3" style={{ color: '#1A2E35' }}>
                        Who this suits
                      </h3>
                      <ul className="space-y-2 font-body text-sm" style={{ color: '#1A2E35' }}>
                        {island.whoFor.map((w) => (
                          <li key={w} className="flex items-start gap-2">
                            <span style={{ color: '#0B6E72' }} aria-hidden="true">&#8594;</span>
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Local tip */}
                  <div
                    className="rounded-lg px-5 py-4 border-l-2"
                    style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
                  >
                    <div
                      className="text-xs font-heading font-bold tracking-widest uppercase mb-1.5"
                      style={{ color: '#E07B39' }}
                    >
                      Local tip
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#1A2E35' }}>
                      {island.tip}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {island.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex-1 py-3 rounded-xl font-heading font-bold text-center text-sm tracking-wide transition-colors min-h-[44px] flex items-center justify-center"
                        style={link.primary
                          ? { backgroundColor: '#0B6E72', color: '#fff' }
                          : { border: '2px solid #0B6E72', color: '#0B6E72', backgroundColor: 'transparent' }
                        }
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Other Notable Islands */}
          <section className="mt-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1A2E35' }}>
              Other notable islands
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherIslands.map((island) => (
                <div
                  key={island.name}
                  className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow"
                  style={{ borderColor: '#D1E8E8' }}
                >
                  <h3 className="font-heading text-lg font-bold mb-3" style={{ color: '#1A2E35' }}>
                    {island.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-3" style={{ color: '#1A2E35' }}>
                    {island.description}
                  </p>
                  <p className="font-body text-sm" style={{ color: '#4A5C61' }}>
                    {island.access}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Planning section */}
          <section
            className="mt-16 p-6 md:p-8 rounded-xl"
            style={{ backgroundColor: '#E8F4F5' }}
          >
            <h2 className="font-heading text-xl md:text-2xl font-bold mb-6" style={{ color: '#1A2E35' }}>
              Planning your island visit
            </h2>
            <div className="grid md:grid-cols-3 gap-6 font-body text-sm" style={{ color: '#1A2E35' }}>
              <div>
                <h3 className="font-heading font-bold mb-3" style={{ color: '#1A2E35' }}>Stay on an island</h3>
                <ul className="space-y-2">
                  {['Hamilton Island (full resort)', 'Daydream Island (family resort)', 'Long Island (quiet retreat)', 'Hayman Island (luxury, direct booking)'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#0B6E72' }} aria-hidden="true">&#8594;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/where-to-stay" className="inline-block mt-4 font-semibold hover:underline min-h-[44px] flex items-center" style={{ color: '#0B6E72' }}>
                  View accommodation &#8594;
                </Link>
              </div>
              <div>
                <h3 className="font-heading font-bold mb-3" style={{ color: '#1A2E35' }}>Day trip from Airlie</h3>
                <ul className="space-y-2">
                  {['Whitsunday Island (tours only)', 'Daydream Island (ferry)', 'Hamilton Island (ferry)', 'Hook Island (snorkel tours)'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#0B6E72' }} aria-hidden="true">&#8594;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/things-to-do" className="inline-block mt-4 font-semibold hover:underline min-h-[44px] flex items-center" style={{ color: '#0B6E72' }}>
                  View tours &#8594;
                </Link>
              </div>
              <div>
                <h3 className="font-heading font-bold mb-3" style={{ color: '#1A2E35' }}>Bareboat charter</h3>
                <ul className="space-y-2">
                  {['Access all uninhabited islands', 'Secluded anchorages', 'Camping spots', 'Ultimate flexibility'].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: '#0B6E72' }} aria-hidden="true">&#8594;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/tours/bareboating-and-private-charters" className="inline-block mt-4 font-semibold hover:underline min-h-[44px] flex items-center" style={{ color: '#0B6E72' }}>
                  Learn about bareboating &#8594;
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to explore the islands?
            </h2>
            <p className="font-body text-lg md:text-xl mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              From luxury resorts to uninhabited national parks &mdash; find your island.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/where-to-stay"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                Find Accommodation
              </Link>
              <Link
                href="/things-to-do"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#fff', color: '#0B6E72' }}
              >
                Book Island Tours
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

