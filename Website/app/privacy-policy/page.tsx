import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy | Discover Whitsundays',
  description: 'How Discover Whitsundays collects, uses, and protects your information.',
  openGraph: {
    title: 'Privacy Policy | Discover Whitsundays',
    description: 'How Discover Whitsundays collects, uses, and protects your information.',
    url: 'https://discoverwhitsundays.com/privacy-policy',
    siteName: 'Discover Whitsundays',
    locale: 'en_AU',
    type: 'website',
  },
};

const sections = [
  {
    heading: 'Information I collect',
    content: (
      <>
        <p className="font-body text-sm md:text-base leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
          <strong>Information you provide directly</strong> — if you contact me via the contact
          form, your name, email address, and the contents of your message are collected. I don&apos;t
          run a newsletter at this stage so no subscription data is collected.
        </p>
        <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
          <strong>Automatically collected information</strong> — when you visit the site, standard
          analytics data may be collected including IP address, browser type, device type, pages
          visited, time on page, and referring website. This is used to understand how visitors
          use the site and improve the content.
        </p>
      </>
    ),
  },
  {
    heading: 'How I use your information',
    content: (
      <ul className="space-y-2">
        {[
          'To respond to contact form enquiries',
          'To understand which content is most useful to visitors and improve the site accordingly',
          'To maintain and improve site performance and security',
          'To detect and prevent fraudulent or malicious activity',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
              style={{ backgroundColor: '#0B6E72' }}
              aria-hidden="true"
            />
            <span className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    heading: 'Cookies and tracking',
    content: (
      <>
        <p className="font-body text-sm md:text-base leading-relaxed mb-5" style={{ color: '#1A2E35' }}>
          This site uses cookies — small text files stored in your browser. Three types are relevant:
        </p>
        <div className="space-y-3">
          {[
            {
              title: 'Essential cookies',
              desc: 'Required for the site to function. Cannot be disabled.',
            },
            {
              title: 'Analytics cookies',
              desc: 'Collect anonymised data about how visitors use the site — pages viewed, time spent, referring source. Used to improve content.',
            },
            {
              title: 'Affiliate cookies',
              desc: 'Set by affiliate partners (Explore Whitsundays, Sailing Whitsundays, Viator) when you click through from this site. Track referrals for commission purposes. The cookie is placed by the partner site, not by Discover Whitsundays.',
            },
          ].map((cookie) => (
            <div
              key={cookie.title}
              className="p-4 rounded-xl border"
              style={{ backgroundColor: '#F4FAFA', borderColor: '#D1E8E8' }}
            >
              <p className="font-heading font-bold text-sm mb-1" style={{ color: '#1A2E35' }}>
                {cookie.title}
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#4A5C61' }}>
                {cookie.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="font-body text-sm leading-relaxed mt-4" style={{ color: '#1A2E35' }}>
          You can control and delete cookies through your browser settings. Disabling certain
          cookies may affect how the site functions.
        </p>
      </>
    ),
  },
  {
    heading: 'Third-party services',
    content: (
      <>
        <p className="font-body text-sm md:text-base leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
          <strong>Analytics</strong> — this site may use Google Analytics or a similar service
          to understand visitor behaviour. These services may use their own cookies and have their
          own privacy policies.
        </p>
        <p className="font-body text-sm md:text-base leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
          <strong>Affiliate partners</strong> — when you click through to Explore Whitsundays,
          Sailing Whitsundays, Viator, or individual tour operators, you leave this site and
          enter theirs. Their privacy policies apply from that point. I&apos;m not responsible
          for their data practices.
        </p>
        <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
          <strong>Contact form</strong> — the contact form is handled via Formspree. Messages
          are transmitted securely and stored by Formspree. Their privacy policy applies to
          that data.
        </p>
      </>
    ),
  },
  {
    heading: 'How I protect your information',
    content: (
      <>
        <p className="font-body text-sm md:text-base leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
          This site is served over HTTPS. I don&apos;t collect or store financial information —
          all payments go directly through affiliate partner platforms on their own secure
          infrastructure.
        </p>
        <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
          No method of transmission over the internet is 100% secure. I take reasonable
          precautions but cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    heading: 'Data retention',
    content: (
      <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
        Contact form messages are retained only as long as needed to respond to your enquiry.
        Analytics data is retained in aggregate, anonymised form. If you want any information
        I hold about you deleted, contact me and I&apos;ll action it promptly.
      </p>
    ),
  },
  {
    heading: 'Your privacy rights',
    content: (
      <>
        <p className="font-body text-sm md:text-base leading-relaxed mb-4" style={{ color: '#1A2E35' }}>
          As an Australian-based site, this privacy policy complies with the Australian Privacy
          Principles (APPs) contained in the Privacy Act 1988. You have the right to:
        </p>
        <ul className="space-y-2">
          {[
            'Request access to personal information I hold about you',
            'Request correction of any inaccurate information',
            'Request deletion of your personal information',
            'Object to processing of your personal information',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: '#0B6E72' }}
                aria-hidden="true"
              />
              <span className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="font-body text-sm leading-relaxed mt-4" style={{ color: '#1A2E35' }}>
          To exercise any of these rights, use the contact page and I&apos;ll respond within
          30 days.
        </p>
      </>
    ),
  },
  {
    heading: "Children's privacy",
    content: (
      <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
        This site is not directed at anyone under 18. I don&apos;t knowingly collect personal
        information from children. If you believe a child has submitted information through
        this site, contact me and I&apos;ll delete it.
      </p>
    ),
  },
  {
    heading: 'Links to other websites',
    content: (
      <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
        This site links to tour operators, booking platforms, and other external sites. I&apos;m
        not responsible for their privacy practices. I recommend reviewing the privacy policy
        of any site you visit.
      </p>
    ),
  },
  {
    heading: 'Changes to this policy',
    content: (
      <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
        This policy may be updated from time to time to reflect changes in practice or legal
        requirements. The date at the top of the page reflects the last revision. Significant
        changes will be noted here.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="font-body text-sm" style={{ color: '#4A5C61' }}>
              Last updated: April 2026
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="pt-12 pb-4">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div
              className="p-6 rounded-xl border-l-4"
              style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}
            >
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#1A2E35' }}>
                Discover Whitsundays is committed to protecting your privacy. This policy explains
                what information is collected when you use this site, how it&apos;s used, and what
                your rights are. This is a one-person operation based in Airlie Beach, Queensland —
                I take a straightforward approach to data and don&apos;t collect anything beyond what&apos;s
                needed to run the site.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="py-8 pb-16">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl space-y-8">
            {sections.map((section) => (
              <section
                key={section.heading}
                className="bg-white rounded-2xl border p-6 md:p-8"
                style={{ borderColor: '#D1E8E8' }}
              >
                <h2
                  className="font-heading text-lg md:text-xl font-bold mb-4"
                  style={{ color: '#1A2E35' }}
                >
                  {section.heading}
                </h2>
                {section.content}
              </section>
            ))}

            {/* Contact */}
            <div
              className="p-6 rounded-xl border-l-4"
              style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
            >
              <h2
                className="font-heading font-bold text-base mb-2"
                style={{ color: '#1A2E35' }}
              >
                Questions about this policy?
              </h2>
              <p
                className="font-body text-sm leading-relaxed mb-3"
                style={{ color: '#1A2E35' }}
              >
                If you have questions about how your data is handled or want to exercise your
                privacy rights, get in touch. I&apos;ll respond within 30 days.
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
