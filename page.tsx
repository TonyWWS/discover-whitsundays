import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Bareboating & Private Charters in the Whitsundays | Discover Whitsundays',
  description: 'Hire your own yacht or book a skippered private charter in the Whitsundays. Full guide coming soon — covering operators, costs, and what to expect.',
  openGraph: {
    title: 'Bareboating & Private Charters in the Whitsundays | Discover Whitsundays',
    description: 'Hire your own yacht or book a skippered private charter in the Whitsundays.',
    url: 'https://discoverwhitsundays.com/things-to-do/bareboating-and-private-charters',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/things-to-do-bareboat.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bareboating & Private Charters in the Whitsundays | Discover Whitsundays',
    description: 'Hire your own yacht or book a skippered private charter in the Whitsundays.',
    images: ['/images/things-to-do-bareboat.jpg'],
  },
};

export default function BareboatPrivateChartersPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/things-to-do-bareboat.jpg"
            alt="Yacht anchored in a secluded bay in the Whitsunday Islands national park"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E35]/60 via-[#1A2E35]/40 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
                Bareboating & Private Charters
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-lg">
                The Whitsundays at your own pace — 74 islands, your choice of anchorage,
                no schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Coming soon notice */}
        <div className="border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 py-10 max-w-3xl">
            <div
              className="inline-block px-3 py-1 rounded-lg font-heading font-bold text-xs tracking-widest uppercase mb-6 text-white"
              style={{ backgroundColor: '#E07B39' }}
            >
              Guide coming soon
            </div>
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#1A2E35' }}>
              Bareboating is the Whitsundays at its most unfiltered — you pick the route,
              you pick the anchorage, you set the pace. It takes more planning than a day
              trip, and it&apos;s worth it. A full guide covering operators, costs, licence
              requirements, and what to expect is in progress. In the meantime, the overview
              below covers the essentials.
            </p>
          </div>
        </div>

        {/* What is bareboating */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1A2E35' }}>
              Bareboat vs skippered charter
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="bg-white rounded-2xl p-6 md:p-8 border-t-4 shadow-sm"
                style={{ borderColor: '#0B6E72', borderLeftColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderBottomColor: '#D1E8E8', borderLeftWidth: '1px', borderRightWidth: '1px', borderBottomWidth: '1px' }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-lg font-heading font-bold text-xs tracking-widest uppercase mb-4 text-white"
                  style={{ backgroundColor: '#0B6E72' }}
                >
                  Bareboat
                </div>
                <h3 className="font-heading text-xl font-bold mb-3" style={{ color: '#1A2E35' }}>
                  You skipper, you decide
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#4A5C61' }}>
                  You hire the yacht and sail it yourself. No crew, no guide, no fixed itinerary.
                  You need a recognised sailing qualification or to pass a competency assessment
                  with the charter company. The Whitsundays is one of the best-charted bareboat
                  destinations in the world — protected waters, reliable anchorages, and well-marked
                  passages.
                </p>
                <div className="space-y-2">
                  {[
                    'Sailing qualification or competency assessment required',
                    'Full flexibility — anchor where you like',
                    'Typically 5–7 days minimum for a proper trip',
                    'From approximately $800–1,500/day for the vessel',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: '#0B6E72' }} aria-hidden="true" />
                      <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-white rounded-2xl p-6 md:p-8 border-t-4 shadow-sm"
                style={{ borderColor: '#E07B39', borderLeftColor: '#D1E8E8', borderRightColor: '#D1E8E8', borderBottomColor: '#D1E8E8', borderLeftWidth: '1px', borderRightWidth: '1px', borderBottomWidth: '1px' }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-lg font-heading font-bold text-xs tracking-widest uppercase mb-4 text-white"
                  style={{ backgroundColor: '#E07B39' }}
                >
                  Skippered charter
                </div>
                <h3 className="font-heading text-xl font-bold mb-3" style={{ color: '#1A2E35' }}>
                  Private boat, professional skipper
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#4A5C61' }}>
                  You hire the boat and a skipper comes with it. No sailing experience needed —
                  you just bring your group and enjoy the ride. The skipper handles navigation
                  and anchoring while you decide where you want to go. The most accessible
                  private charter option for non-sailors.
                </p>
                <div className="space-y-2">
                  {[
                    'No sailing experience required',
                    'Skipper handles all navigation',
                    'Available for half-day, full-day, or multi-day',
                    'From approximately $1,200–2,500/day including skipper',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: '#E07B39' }} aria-hidden="true" />
                      <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it suits */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1A2E35' }}>
              Is this right for you?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border-l-4" style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}>
                <h3 className="font-heading font-bold text-base mb-3" style={{ color: '#1A2E35' }}>
                  Good fit if you...
                </h3>
                <div className="space-y-2">
                  {[
                    'Want complete flexibility over your itinerary',
                    'Have 5+ days in the Whitsundays',
                    'Are travelling in a group of 4–8 people',
                    'Have sailing experience (bareboat) or don\'t mind paying for a skipper',
                    'Want to reach anchorages the tour boats never visit',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <span style={{ color: '#0B6E72' }} aria-hidden="true">&#10003;</span>
                      <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl border-l-4" style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}>
                <h3 className="font-heading font-bold text-base mb-3" style={{ color: '#1A2E35' }}>
                  Probably not if you...
                </h3>
                <div className="space-y-2">
                  {[
                    'Only have 2–3 days — overnight sailing is better value',
                    'Are travelling solo or as a couple on a budget',
                    'Want the social atmosphere of a group sailing trip',
                    'Haven\'t sailed before and don\'t want a skippered charter',
                    'Are primarily focused on Whitehaven Beach — a day tour is sufficient',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <span style={{ color: '#E07B39' }} aria-hidden="true">&#10007;</span>
                      <span className="font-body text-sm" style={{ color: '#1A2E35' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full guide coming soon */}
        <section className="py-12 md:py-16 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
            <div
              className="inline-block px-3 py-1 rounded-lg font-heading font-bold text-xs tracking-widest uppercase mb-6"
              style={{ backgroundColor: '#E8F4F5', color: '#0B6E72' }}
            >
              In progress
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1A2E35' }}>
              Full guide coming soon
            </h2>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: '#4A5C61' }}>
              The complete bareboating guide — covering specific operators, licence requirements,
              provisioning, recommended anchorages, and honest cost breakdowns — is in progress.
              In the meantime, the overnight sailing guide covers the most accessible way to
              experience the islands from the water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/things-to-do/overnight-sailing"
                className="px-8 py-4 rounded-xl font-heading font-bold text-base transition-all duration-300 shadow-sm min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#0B6E72', color: '#fff' }}
              >
                Overnight sailing guide
              </Link>
              <Link
                href="/things-to-do"
                className="px-8 py-4 rounded-xl font-heading font-bold text-base transition-all duration-300 min-h-[44px] flex items-center justify-center"
                style={{ border: '2px solid #0B6E72', color: '#0B6E72', backgroundColor: 'transparent' }}
              >
                All things to do
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
