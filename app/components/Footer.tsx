import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A2E35] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About Column */}
          <div>
            <h3 className="font-heading text-white text-lg font-bold mb-4">Discover Whitsundays</h3>
            <p className="font-body text-sm leading-relaxed">
              Your curated guide to exploring the beautiful Whitsunday Islands and the Great Barrier Reef.
            </p>
          </div>

          {/* Legal & Info Column */}
          <div>
            <h3 className="font-heading text-white text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="/about-tony" className="hover:text-[#E07B39] transition-colors">
                  About Tony
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-[#E07B39] transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#E07B39] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E07B39] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations Column */}
          <div>
            <h3 className="font-heading text-white text-lg font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="/whitehaven-beach" className="hover:text-[#E07B39] transition-colors">
                  Whitehaven Beach
                </Link>
              </li>
              <li>
                <Link href="/islands" className="hover:text-[#E07B39] transition-colors">
                  The Islands
                </Link>
              </li>
              <li>
                <Link href="/where-to-stay" className="hover:text-[#E07B39] transition-colors">
                  Where to Stay
                </Link>
              </li>
              <li>
                <Link href="/things-to-do" className="hover:text-[#E07B39] transition-colors">
                  Things to Do
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading text-white text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <span>info@discoverwhitsundays.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Airlie Beach, QLD<br />Australia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center font-body text-sm">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Discover Whitsundays. All rights reserved.
            </p>
            <p className="text-gray-400">
              Built with <span className="text-[#E07B39]">❤</span> for the Whitsundays
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}