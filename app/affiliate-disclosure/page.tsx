import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Affiliate Disclosure | Discover Whitsundays',
  description: 'How Discover Whitsundays earns commissions, which partners are involved, and what that means for you.',
  openGraph: {
    title: 'Affiliate Disclosure | Discover Whitsundays',
    description: 'How Discover Whitsundays earns commissions and what that means for you.',
    url: 'https://discoverwhitsundays.com/affiliate-disclosure',
    siteName: 'Discover Whitsundays',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Header */}
        <div
          className="py-12 md:py-16 border-b"
          style={{ backgroundColor: '#fff', borderColor: '#D1E8E8' }}
        >
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h1
              className="font-heading text-3xl md:text-4xl font-bold mb-3"
              style={{ color: '#1A2E35' }}
            >
              Affiliate Disclosure
            </h1>
            <p className="font-body text-sm" style={{ color: '#4A5C61' }}>
              Last updated: April 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-10">

            {/* Summary box */}
            <div
              className="p-6 rounded-xl border-l-4"
              style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}
            >
              <p className="font-body text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                Some links on Discover Whitsundays are affiliate links. If you book a tour or
                experience through one of those links, I may earn a small commission — at no
                extra cost to you. You pay exactly the same price either way. The commission
                helps keep this guide free.
              </p>
            </div>

            {/* What are affiliate links */}
            <section className="space-y-4">
              <h2
                className="font-heading text-xl md:text-2xl font-bold"
                style={{ color: '#1A2E35' }}
              >
                What are affiliate links?
              </h2>
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                An affiliate link is a tracking link that tells a booking platform or operator
                that a visitor came from this site. If you complete a booking after clicking
                through, I receive a small percentage of the sale from the operator — not from
                you. The price you pay is identical to booking directly.
              </p>
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                For example, if you click through to Explore Whitsundays from the overnight
                sailing page and book a trip, I may earn a referral commission from Explore
                Whitsundays on that booking.
              </p>
            </section>

            {/* Current partners */}
            <section className="space-y-4">
              <h2
                className="font-heading text-xl md:text-2xl font-bold"
                style={{ color: '#1A2E35' }}
              >
                Current affiliate and referral partners
              </h2>
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                I only list partners where a referral or affiliate arrangement is either active
                or being formalised. As the site grows, this list will expand and I&apos;ll
                keep it updated.
              </p>
              <div className="space-y-3">
                {[
                  {
                    name: 'Explore Whitsundays',
                    desc: 'Overnight sailing and day tours. Referral arrangement in place — the longest-operating tour agent in the Whitsundays.',
                  },
                  {
                    name: 'Sailing Whitsundays',
                    desc: 'Overnight sailing and tour deals. Referral arrangement in place.',
                  },
                  {
                    name: 'Viator',
                    desc: 'General tour and activity bookings. Standard affiliate program — used where specific operators don\'t have their own direct arrangement.',
                  },
                  {
                    name: 'Individual operators',
                    desc: 'Some operators linked on this site — such as FlyAus, Airlie Beach Helicopters, Ocean Rafting, and ZigZag Whitsundays — may offer referral or affiliate arrangements. These are disclosed on the relevant pages as they are formalised.',
                  },
                ].map((partner) => (
                  <div
                    key={partner.name}
                    className="p-4 rounded-xl border"
                    style={{ backgroundColor: '#fff', borderColor: '#D1E8E8' }}
                  >
                    <h3
                      className="font-heading font-bold text-sm mb-1"
                      style={{ color: '#1A2E35' }}
                    >
                      {partner.name}
                    </h3>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: '#4A5C61' }}
                    >
                      {partner.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* My commitment */}
            <section className="space-y-4">
              <h2
                className="font-heading text-xl md:text-2xl font-bold"
                style={{ color: '#1A2E35' }}
              >
                My commitment to you
              </h2>
              <div className="space-y-3">
                {[
                  'I only recommend operators and services I\'d genuinely point a friend toward. Affiliate potential doesn\'t change what gets listed.',
                  'You pay the same price whether you book through my links or go directly. I never add fees or inflate prices.',
                  'Not all links on this site are affiliate links. Many are straight referrals to operator websites, tourism bodies, and free resources with no financial arrangement attached.',
                  'Where affiliate links appear, I note it on the page — usually in a disclosure line at the bottom of the relevant section.',
                  'My editorial content is not written around affiliate arrangements. If an operator is listed, it\'s because I think they\'re worth recommending.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="font-bold mt-0.5 shrink-0"
                      style={{ color: '#0B6E72' }}
                      aria-hidden="true"
                    >
                      &#10003;
                    </span>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: '#1A2E35' }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* How it works */}
            <section className="space-y-4">
              <h2
                className="font-heading text-xl md:text-2xl font-bold"
                style={{ color: '#1A2E35' }}
              >
                How it works technically
              </h2>
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                When you click an affiliate link you&apos;re redirected to the partner&apos;s
                website. A tracking cookie is placed in your browser — standard practice across
                the industry. If you complete a booking within the cookie window (typically 24–30
                days depending on the partner), I may receive a commission. Commission rates vary
                by partner but are typically in the 5–10% range, paid by the operator from their
                margin rather than added to your price.
              </p>
            </section>

            {/* Your choices */}
            <section className="space-y-4">
              <h2
                className="font-heading text-xl md:text-2xl font-bold"
                style={{ color: '#1A2E35' }}
              >
                Your choices
              </h2>
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                You&apos;re never obligated to use affiliate links. You can search for any
                operator directly, compare prices across platforms, or book through whichever
                channel you prefer. If you find this guide useful and choose to book through a
                link here, I appreciate it — it&apos;s what keeps the site free and allows me
                to keep adding content.
              </p>
            </section>

            {/* Compliance */}
            <section className="space-y-4">
              <h2
                className="font-heading text-xl md:text-2xl font-bold"
                style={{ color: '#1A2E35' }}
              >
                Compliance
              </h2>
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                This disclosure is maintained in accordance with Australian Competition and Consumer
                Commission (ACCC) guidelines on affiliate and referral arrangements, and the US
                Federal Trade Commission (FTC) guidelines for international visitors. If you have
                questions about any specific arrangement, get in touch.
              </p>
            </section>

            {/* Contact */}
            <div
              className="p-6 rounded-xl border-l-4"
              style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
            >
              <h2
                className="font-heading font-bold text-base mb-2"
                style={{ color: '#1A2E35' }}
              >
                Questions about this disclosure?
              </h2>
              <p
                className="font-body text-sm leading-relaxed mb-3"
                style={{ color: '#1A2E35' }}
              >
                If anything here isn&apos;t clear or you want to know about a specific link or
                arrangement, I&apos;m happy to explain.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-heading font-bold text-sm transition-opacity hover:opacity-80 min-h-[44px]"
                style={{ backgroundColor: '#0B6E72', color: '#fff' }}
              >
                Get in touch &#8594;
              </Link>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
