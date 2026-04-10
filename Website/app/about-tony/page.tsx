import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Tony | Discover Whitsundays',
  description: 'Seven years living in Airlie Beach, 20+ years in hospitality, and a genuine passion for this place. Meet the local behind Discover Whitsundays.',
  openGraph: {
    title: 'About Tony | Discover Whitsundays',
    description: 'Seven years living in Airlie Beach, 20+ years in hospitality. Meet the local behind Discover Whitsundays.',
    url: 'https://discoverwhitsundays.com/about-tony',
    siteName: 'Discover Whitsundays',
    images: [{ url: '/images/about-tony-hillinlet.jpg', width: 1200, height: 630 }],
    locale: 'en_AU',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Tony | Discover Whitsundays',
    description: 'Seven years living in Airlie Beach. Meet the local behind Discover Whitsundays.',
    images: ['/images/about-tony-hillinlet.jpg'],
  },
};

export default function AboutTonyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Hero */}
        <div className="py-16 md:py-20 border-b" style={{ backgroundColor: '#0B6E72', borderColor: '#D1E8E8' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I&apos;m Tony
            </h1>
            <p className="font-body text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              Airlie Beach local, former hospitality professional, and the person behind
              Discover Whitsundays. Seven years living here will do that to you.
            </p>
          </div>
        </div>

        {/* Photo + intro */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

              {/* Primary photo */}
              <div className="w-full md:w-64 shrink-0">
                <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-tony-hillinlet.jpg"
                    alt="Tony at Hill Inlet lookout, Whitsunday Island — the view that keeps locals coming back"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    priority
                  />
                </div>
                <p
                  className="font-body text-xs text-center mt-2 italic"
                  style={{ color: '#4A5C61' }}
                >
                  Hill Inlet lookout — still the best view in the Whitsundays
                </p>
              </div>

              {/* Intro text */}
              <div className="flex-1 space-y-4">
                <h2
                  className="font-heading text-2xl md:text-3xl font-bold"
                  style={{ color: '#1A2E35' }}
                >
                  My story
                </h2>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: '#1A2E35' }}
                >
                  I moved to Airlie Beach seven years ago and never really left. It&apos;s that
                  kind of place. Before that I spent over 20 years working in hospitality and
                  retail — a decade of that in professional kitchens — which gave me a fairly
                  clear sense of what separates a good experience from a great one.
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: '#1A2E35' }}
                >
                  Living here means I watch visitors navigate the Whitsundays every day. Most
                  of them have done some research but are still not sure which tour to book,
                  when to go, or how to make the most of limited time. The information that
                  actually helps — which operator is worth it, what the conditions are really
                  like in March, which anchorage the overnight boats reach that day tours
                  don&apos;t — that&apos;s local knowledge, not something you find easily online.
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: '#1A2E35' }}
                >
                  I completed a Certificate III in IT through TAFE Queensland and used those
                  skills to build this — a guide to the Whitsundays written by someone who
                  actually lives here, based on genuine experience rather than aggregated
                  reviews and sponsored content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why I built this */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div
              className="p-6 md:p-8 rounded-2xl border-l-4"
              style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}
            >
              <h2
                className="font-heading text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#1A2E35' }}
              >
                Why I built this site
              </h2>
              <div className="space-y-4">
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: '#1A2E35' }}
                >
                  Two decades in hospitality taught me what visitors actually need — not pretty
                  photos and vague superlatives, but specific, honest answers to specific
                  questions. Which tour has the most beach time? Is the stinger season actually
                  a problem in April? Is Hill Inlet worth it if I&apos;ve only got one day?
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: '#1A2E35' }}
                >
                  Living locally gives me things most travel sites don&apos;t have — I know
                  which operators consistently deliver, I understand the seasonal patterns
                  firsthand, and I can tell you which anchorages the overnight boats reach that
                  day tours never see. That knowledge is the point of this site.
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: '#1A2E35' }}
                >
                  I only recommend things I&apos;d genuinely point a friend toward. Some links
                  on this site earn a small commission if you book through them — I&apos;m
                  transparent about that on every page where it applies. It&apos;s how a free
                  resource like this stays free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach cards */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#1A2E35' }}
            >
              How I approach this
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {[
                {
                  title: 'Honest recommendations',
                  body: 'I only list operators I\'d recommend to someone I know. If something doesn\'t deliver genuine value, it\'s not on this site — regardless of commission potential.',
                  accent: '#0B6E72',
                },
                {
                  title: 'Local knowledge',
                  body: 'Seven years in Airlie Beach means I understand the seasonal rhythms, the operators worth knowing, and the things visitors regularly get wrong in their planning.',
                  accent: '#E07B39',
                },
                {
                  title: 'Practical information',
                  body: 'My hospitality background taught me that visitors need specific, actionable answers — not general information that applies to any beach destination on earth.',
                  accent: '#0B6E72',
                },
                {
                  title: 'Full transparency',
                  body: 'Affiliate links are disclosed on every page where they appear. I\'m clear about how the site makes money and I never let that influence what I recommend.',
                  accent: '#E07B39',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-6 rounded-2xl border-t-4"
                  style={{
                    borderColor: card.accent,
                    borderLeftColor: '#D1E8E8',
                    borderRightColor: '#D1E8E8',
                    borderBottomColor: '#D1E8E8',
                    borderLeftWidth: '1px',
                    borderRightWidth: '1px',
                    borderBottomWidth: '1px',
                  }}
                >
                  <h3
                    className="font-heading font-bold text-base mb-2"
                    style={{ color: '#1A2E35' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: '#1A2E35' }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-8"
              style={{ color: '#1A2E35' }}
            >
              Background
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: '20+ years in hospitality and retail',
                  body: 'A decade in professional kitchens, the rest in retail and customer-facing roles. That background shapes how I think about visitor experiences — what makes something genuinely worth recommending, and what\'s just marketing copy.',
                },
                {
                  title: 'Seven years in Airlie Beach',
                  body: 'Long enough to understand the seasons properly, know the operators personally, and have a genuine feel for what the Whitsundays is like across the full year — not just during the peak season window that most travel content is written from.',
                },
                {
                  title: 'Certificate III in IT — TAFE Queensland',
                  body: 'The formal training that gave me the skills to build this. Discover Whitsundays is built on Next.js and runs on Vercel — a proper technical foundation rather than a templated site.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-xl border-l-4 border"
                  style={{ borderColor: '#D1E8E8', borderLeftColor: '#0B6E72' }}
                >
                  <h3
                    className="font-heading font-bold text-base mb-2"
                    style={{ color: '#1A2E35' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: '#1A2E35' }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary photo + beyond the site */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
              <div className="flex-1 space-y-4">
                <h2
                  className="font-heading text-2xl md:text-3xl font-bold"
                  style={{ color: '#1A2E35' }}
                >
                  Beyond the site
                </h2>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: '#1A2E35' }}
                >
                  When I&apos;m not working on this, I&apos;m usually cooking — once a chef,
                  always a chef. I also run a couple of other web projects, including
                  Gourmet Living, a food and kitchen content site, and Whitsunday Web Studio,
                  my web design practice for local hospitality and tourism operators.
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: '#1A2E35' }}
                >
                  I travel when I can, which mostly means I appreciate how much is on my
                  doorstep here. And yes — self-confessed sci-fi nerd. That part isn&apos;t
                  going anywhere.
                </p>
              </div>

              {/* Secondary photo */}
              <div className="w-full md:w-64 shrink-0">
                <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-tony-whitehaven.jpg"
                    alt="Tony at Whitehaven Beach on the iconic driftwood log"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    loading="lazy"
                  />
                </div>
                <p
                  className="font-body text-xs text-center mt-2 italic"
                  style={{ color: '#4A5C61' }}
                >
                  Whitehaven Beach — the driftwood log is a rite of passage
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section className="py-12 md:py-16 border-b" style={{ borderColor: '#D1E8E8', backgroundColor: '#F4FAFA' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div
              className="p-6 md:p-8 rounded-2xl border-l-4"
              style={{ backgroundColor: '#fff', borderColor: '#0B6E72' }}
            >
              <h2
                className="font-heading text-xl md:text-2xl font-bold mb-5"
                style={{ color: '#1A2E35' }}
              >
                What I commit to
              </h2>
              <div className="space-y-3">
                {[
                  'Only recommending experiences I\'d genuinely point a friend toward',
                  'Keeping information accurate — operators change, tours change, and I update accordingly',
                  'Being transparent about affiliate relationships on every page where they apply',
                  'Writing from local experience, not from a press trip or a sponsored brief',
                  'Continuing to build this out — more operators, more pages, more genuinely useful content',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span
                      className="font-bold mt-0.5 shrink-0"
                      style={{ color: '#0B6E72' }}
                      aria-hidden="true"
                    >
                      &#10003;
                    </span>
                    <span
                      className="font-body text-sm leading-relaxed"
                      style={{ color: '#1A2E35' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Have a question about the Whitsundays?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Get in touch directly — I&apos;m happy to help with trip planning questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                Get in Touch
              </Link>
              <Link
                href="/"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#fff', color: '#0B6E72' }}
              >
                Explore the Guide
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
