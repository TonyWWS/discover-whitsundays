export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Discover Whitsundays</h3>
            <p className="text-gray-300">
              Your comprehensive guide to exploring the beautiful Whitsunday Islands and the Great Barrier Reef.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Islands</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Things to Do</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Plan Your Trip</a></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Whitehaven Beach</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Hamilton Island</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Airlie Beach</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Heart Reef</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📧 info@discoverwhitsundays.com</li>
              <li>📱 +61 123 456 789</li>
              <li>📍 Airlie Beach, QLD</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Discover Whitsundays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}