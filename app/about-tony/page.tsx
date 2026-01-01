import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutTonyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Hi, I'm Tony
            </h1>
            <p className="text-2xl mb-6">
              Your Local Guide to the Whitsundays
            </p>
            <p className="text-xl opacity-90">
              Airlie Beach local | Former hospitality professional | Passionate about helping visitors experience the best of the Whitsundays
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Profile Image Placeholder */}
          <div className="mb-12 text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-8xl">👨‍💻</span>
            </div>
            <p className="text-gray-600 text-sm italic">
              [Add your photo here when ready]
            </p>
          </div>

          {/* My Story */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                After spending over 20 years working in the hospitality and retail industries, I decided
                it was time for a change. I've always been fascinated by technology and creating things,
                so I enrolled in a Certificate 3 in IT at TAFE Queensland to learn web development.
              </p>
              <p>
                Living in Airlie Beach, the gateway to the Whitsundays, I'm surrounded by one of the most
                beautiful destinations in the world. Every day, I see tourists trying to navigate their way
                through planning a Whitsundays adventure - figuring out which islands to visit, which tours
                to book, where to stay, and how to make the most of their limited time.
              </p>
              <p>
                That's when it hit me: I could combine my new web development skills with my local knowledge
                and hospitality experience to create something genuinely useful. And that's how Discover
                Whitsundays was born.
              </p>
            </div>
          </section>

          {/* Why I Created This Site */}
          <section className="mb-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why I Created This Site</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Having worked in hospitality for two decades, I understand what makes a great visitor
                  experience. I've served countless guests, answered thousands of questions, and seen
                  firsthand what travelers need to know to have an amazing trip.
                </p>
                <p>
                  Living locally gives me insider knowledge that most travel sites don't have. I know:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Which tour operators consistently deliver great experiences</li>
                  <li>The best times to visit different islands to avoid crowds</li>
                  <li>Hidden gems and local spots that tourists often miss</li>
                  <li>Realistic budgets and money-saving tips</li>
                  <li>What weather conditions actually mean for your tours</li>
                  <li>How to navigate Airlie Beach like a local</li>
                </ul>
                <p>
                  My goal is simple: help you plan the perfect Whitsundays adventure without the stress
                  and confusion. I want your trip to be everything you hoped for - and more.
                </p>
              </div>
            </div>
          </section>

          {/* My Approach */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Honest Recommendations</h3>
                <p className="text-gray-700">
                  I only recommend tours, accommodations, and activities I genuinely believe offer value.
                  If something doesn't meet my standards, I won't recommend it - regardless of potential
                  commission.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
                <p className="text-gray-700">
                  Living in Airlie Beach means I'm constantly connected to what's happening in the
                  Whitsundays. I stay up-to-date on new tours, accommodation changes, and seasonal
                  variations.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Information</h3>
                <p className="text-gray-700">
                  My hospitality background taught me what information travelers actually need. I focus
                  on practical, actionable advice - not just pretty pictures and vague descriptions.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-700">
                  I'm transparent about how this site works. When you book through my affiliate links,
                  I earn a small commission at no extra cost to you. This helps me maintain and improve
                  this free resource.
                </p>
              </div>
            </div>
          </section>

          {/* My Background */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Background & Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">20+ Years in Hospitality & Retail</h3>
                <p className="text-gray-700">
                  Extensive experience in customer service, understanding traveler needs, and delivering
                  exceptional experiences. This background gives me unique insight into what makes or
                  breaks a holiday.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Kitchen Experience</h3>
                <p className="text-gray-700">
                  Years of working in professional kitchens taught me attention to detail, the importance
                  of quality, and how to spot the difference between good and great. I apply these same
                  standards when evaluating tours and accommodations.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Certificate 3 in IT (TAFE Queensland)</h3>
                <p className="text-gray-700">
                  Completed comprehensive training in web development, giving me the skills to create
                  this platform and keep it updated with the latest information and features.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Airlie Beach Local</h3>
                <p className="text-gray-700">
                  Living in the heart of the Whitsundays means I'm immersed in the destination every day.
                  I experience the seasons, weather patterns, and tourism rhythms firsthand.
                </p>
              </div>
            </div>
          </section>

          {/* Beyond the Whitsundays */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond the Whitsundays</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  When I'm not working on this site or my web development projects, you'll find me:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Exploring new recipes and cooking techniques (once a chef, always a chef!)</li>
                  <li>Traveling when I can - I love experiencing new places and cultures</li>
                  <li>Indulging my passion for science fiction (self-confessed sci-fi nerd here)</li>
                  <li>Building other web projects and expanding my development skills</li>
                  <li>Enjoying the incredible natural beauty right on my doorstep</li>
                </ul>
              </div>
            </div>
          </section>

          {/* My Promise */}
          <section className="mb-12">
            <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Promise to You</h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                  <span>I'll only recommend experiences I genuinely believe in</span>
                </p>
                <p className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                  <span>I'll keep information accurate and up-to-date</span>
                </p>
                <p className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                  <span>I'll be transparent about how this site makes money</span>
                </p>
                <p className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                  <span>I'll provide practical, honest advice based on real local knowledge</span>
                </p>
                <p className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                  <span>I'll continue improving this resource to serve you better</span>
                </p>
              </div>
            </div>
          </section>

          {/* Get in Touch */}
          <section>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
              <p className="text-xl mb-6">
                Have questions about the Whitsundays? Want to share your experience? I'd love to hear from you!
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-lg">
                  📧 Email: info@discoverwhitsundays.com
                </p>
                <p className="text-lg">
                  📍 Based in: Airlie Beach, Queensland
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}