'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// NOTE: Replace YOUR_DW_FORMSPREE_ID with your actual Formspree form ID
// Create a new form at formspree.io — log in, New Form, copy the ID from the endpoint URL
const FORMSPREE_ID = 'YOUR_DW_FORMSPREE_ID';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/xqegwbpr`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4FAFA' }}>
      <Navbar />

      <main>

        {/* Header */}
        <div
          className="py-12 md:py-16 border-b"
          style={{ backgroundColor: '#0B6E72', borderColor: '#D1E8E8' }}
        >
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-3">
              Get in Touch
            </h1>
            <p className="font-body text-lg text-white/85">
              Trip planning questions, local advice, or operator enquiries — happy to help.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

              {/* Contact form */}
              <div
                className="bg-white rounded-2xl border p-6 md:p-8"
                style={{ borderColor: '#D1E8E8' }}
              >
                <h2
                  className="font-heading text-xl font-bold mb-6"
                  style={{ color: '#1A2E35' }}
                >
                  Send me a message
                </h2>

                {status === 'success' ? (
                  <div
                    className="p-5 rounded-xl border-l-4 text-center"
                    style={{ backgroundColor: '#E8F4F5', borderColor: '#0B6E72' }}
                  >
                    <p
                      className="font-heading font-bold text-base mb-1"
                      style={{ color: '#1A2E35' }}
                    >
                      Message sent
                    </p>
                    <p className="font-body text-sm" style={{ color: '#4A5C61' }}>
                      I&apos;ll get back to you within 24–48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-heading font-bold text-xs mb-1.5"
                        style={{ color: '#1A2E35' }}
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border font-body text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: '#D1E8E8',
                          color: '#1A2E35',
                          backgroundColor: '#F4FAFA',
                        }}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-heading font-bold text-xs mb-1.5"
                        style={{ color: '#1A2E35' }}
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border font-body text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: '#D1E8E8',
                          color: '#1A2E35',
                          backgroundColor: '#F4FAFA',
                        }}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block font-heading font-bold text-xs mb-1.5"
                        style={{ color: '#1A2E35' }}
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-lg border font-body text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{
                          borderColor: '#D1E8E8',
                          color: '#1A2E35',
                          backgroundColor: '#F4FAFA',
                        }}
                      >
                        <option value="">Select a topic...</option>
                        <option value="Trip planning">Trip planning</option>
                        <option value="Local advice">Local advice</option>
                        <option value="Tour or operator question">Tour or operator question</option>
                        <option value="Partnership enquiry">Partnership enquiry</option>
                        <option value="Site feedback">Site feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-heading font-bold text-xs mb-1.5"
                        style={{ color: '#1A2E35' }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border font-body text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                        style={{
                          borderColor: '#D1E8E8',
                          color: '#1A2E35',
                          backgroundColor: '#F4FAFA',
                        }}
                        placeholder="What would you like to know?"
                      />
                    </div>

                    {status === 'error' && (
                      <p
                        className="font-body text-sm"
                        style={{ color: '#E07B39' }}
                      >
                        Something went wrong — please try again or email me directly at{' '}
                        <a
                          href="mailto:info@discoverwhitsundays.com"
                          className="underline"
                        >
                          info@discoverwhitsundays.com.com
                        </a>
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3 rounded-lg font-heading font-bold text-sm text-white transition-opacity hover:opacity-80 min-h-[44px] disabled:opacity-60"
                      style={{ backgroundColor: '#0B6E72' }}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send message'}
                    </button>
                  </form>
                )}
              </div>

              {/* Right column */}
              <div className="space-y-6">

                {/* What I can help with */}
                <div>
                  <h2
                    className="font-heading text-xl font-bold mb-4"
                    style={{ color: '#1A2E35' }}
                  >
                    What I can help with
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        title: 'Trip planning',
                        desc: 'Which tours to book, where to stay, how to structure your days, what to prioritise if time is limited.',
                      },
                      {
                        title: 'Local advice',
                        desc: 'Seasonal conditions, crowd patterns, what the weather actually means for your tour, things the guides don\'t tell you.',
                      },
                      {
                        title: 'Tour and operator questions',
                        desc: 'Specific questions about operators featured on the site, or help comparing tours.',
                      },
                      {
                        title: 'Partnership enquiries',
                        desc: 'Tour operators, accommodation providers, or tourism businesses interested in being featured or in a referral arrangement.',
                      },
                      {
                        title: 'Site feedback',
                        desc: 'Corrections, outdated information, or suggestions for content worth adding.',
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="p-4 rounded-xl border"
                        style={{ backgroundColor: '#fff', borderColor: '#D1E8E8' }}
                      >
                        <h3
                          className="font-heading font-bold text-sm mb-1"
                          style={{ color: '#1A2E35' }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="font-body text-xs leading-relaxed"
                          style={{ color: '#4A5C61' }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response time */}
                <div
                  className="p-5 rounded-xl border-l-4"
                  style={{ backgroundColor: '#F5F0E8', borderColor: '#E07B39' }}
                >
                  <h3
                    className="font-heading font-bold text-sm mb-1"
                    style={{ color: '#1A2E35' }}
                  >
                    Response time
                  </h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: '#1A2E35' }}>
                    I aim to reply within 24–48 hours. If your question is time-sensitive,
                    mention it in the subject — I&apos;ll prioritise accordingly.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Before you contact — helpful links */}
        <section className="py-10 md:py-12 border-t" style={{ borderColor: '#D1E8E8', backgroundColor: '#fff' }}>
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="font-heading text-xl font-bold mb-6"
              style={{ color: '#1A2E35' }}
            >
              Your question might already be answered
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { href: '/itinerary-3-day', label: '3-Day Itinerary', desc: 'Planning guide for first-time visitors' },
                { href: '/where-to-stay', label: 'Where to Stay', desc: 'Mainland vs island, accommodation options' },
                { href: '/things-to-do', label: 'Things to Do', desc: 'Tours, activities, and experiences' },
                { href: '/whats-on', label: "What's On", desc: 'Events, seasons, and timing your visit' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-4 rounded-xl border transition-all hover:shadow-sm"
                  style={{ backgroundColor: '#F4FAFA', borderColor: '#D1E8E8' }}
                >
                  <span
                    className="font-heading font-bold text-sm block mb-1"
                    style={{ color: '#0B6E72' }}
                  >
                    {link.label}
                  </span>
                  <span className="font-body text-xs" style={{ color: '#4A5C61' }}>
                    {link.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="py-16 md:py-20" style={{ backgroundColor: '#0B6E72' }}>
          <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to plan your trip?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Start with the three-day itinerary — built for first-time visitors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/itinerary-3-day"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#E07B39', color: '#fff' }}
              >
                3-Day Itinerary
              </Link>
              <Link
                href="/things-to-do"
                className="px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-300 shadow-xl min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#fff', color: '#0B6E72' }}
              >
                All Things to Do
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
