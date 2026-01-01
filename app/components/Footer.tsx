

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Discover Whitsundays</h3>
            <p className="text-sm leading-relaxed">
              Your comprehensive guide to exploring the beautiful Whitsunday Islands and the Great Barrier Reef.
            </p>
          </div>

          {/* Legal & Info Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-tony" className="hover:text-white transition-colors">
                  About Tony
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/whitehaven-beach" className="hover:text-white transition-colors">
                  Whitehaven Beach
                </Link>
              </li>
              <li>
                <Link href="/islands" className="hover:text-white transition-colors">
                  The Islands
                </Link>
              </li>
              <li>
                <Link href="/where-to-stay" className="hover:text-white transition-colors">
                  Where to Stay
                </Link>
              </li>
              <li>
                <Link href="/things-to-do" className="hover:text-white transition-colors">
                  Things to Do
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div></div>