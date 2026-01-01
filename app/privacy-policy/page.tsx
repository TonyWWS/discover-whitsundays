import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-gray-800">
                Discover Whitsundays ("we," "us," or "our") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information when
                you visit our website.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Information You Provide</h3>
              <p className="text-gray-700 mb-4">
                We may collect information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Contact us via email or contact form</li>
                <li>Subscribe to our newsletter (if applicable)</li>
                <li>Leave comments or reviews</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This information may include your name, email address, and any other information you
                choose to provide.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your
                device and browsing behavior, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Date and time of visit</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>To provide and maintain our website</strong> - Ensuring the site functions properly and is accessible</li>
                <li><strong>To improve our content</strong> - Understanding which content is most useful to visitors</li>
                <li><strong>To respond to inquiries</strong> - Answering your questions and providing customer support</li>
                <li><strong>To send updates</strong> - Sending newsletters or important updates (only if you've opted in)</li>
                <li><strong>To analyze website usage</strong> - Understanding how visitors use our site to improve user experience</li>
                <li><strong>To prevent fraud</strong> - Detecting and preventing fraudulent or malicious activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and
                analyze website traffic.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">What Are Cookies?</h3>
              <p className="text-gray-700 mb-4">
                Cookies are small text files stored on your device when you visit a website. They help
                websites remember your preferences and improve functionality.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Types of Cookies We Use</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="text-gray-900">Essential Cookies</strong>
                  <p className="text-gray-700 text-sm mt-2">
                    Required for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="text-gray-900">Analytics Cookies</strong>
                  <p className="text-gray-700 text-sm mt-2">
                    Help us understand how visitors interact with our website by collecting and
                    reporting information anonymously.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <strong className="text-gray-900">Affiliate Cookies</strong>
                  <p className="text-gray-700 text-sm mt-2">
                    Track clicks on affiliate links to ensure we receive proper credit for referrals.
                    These cookies are set by our affiliate partners.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                You can control and delete cookies through your browser settings. However, disabling
                cookies may affect the functionality of this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that collect, monitor, and analyze information to
                improve our website and services.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Analytics Services</h3>
              <p className="text-gray-700 mb-4">
                We may use services like Google Analytics to understand how visitors use our website.
                These services may use cookies and similar technologies to collect information about your
                browsing behavior.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Affiliate Partners</h3>
              <p className="text-gray-700 mb-4">
                When you click on affiliate links to booking platforms (such as Booking.com, Viator,
                GetYourGuide), you will be redirected to their websites. These third parties have their
                own privacy policies, and we are not responsible for their practices.
              </p>
              <p className="text-gray-700">
                We recommend reviewing the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Protect Your Information</h2>
              <p className="text-gray-700 mb-4">
                We implement reasonable security measures to protect your personal information from
                unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100% secure.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Important:</strong> We do not collect or store sensitive financial information
                  such as credit card details. All payment transactions are processed securely by our
                  affiliate partners on their own platforms.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information only as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required or permitted
                by law. When information is no longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request that we correct any inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request that we delete your personal information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing emails at any time</li>
                <li><strong>Object:</strong> Object to our processing of your personal information</li>
                <li><strong>Data portability:</strong> Request that we transfer your data to another service</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise any of these rights, please contact us at the email address provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Australian Privacy Principles</h2>
              <p className="text-gray-700">
                As an Australian-based website, we comply with the Australian Privacy Principles (APPs)
                contained in the Privacy Act 1988. This includes requirements around collection, use,
                disclosure, and security of personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our website is not directed to individuals under the age of 18. We do not knowingly
                collect personal information from children. If you are a parent or guardian and believe
                your child has provided us with personal information, please contact us so we can delete
                that information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Links to Other Websites</h2>
              <p className="text-gray-700">
                Our website contains links to third-party websites, including tour operators, accommodation
                providers, and booking platforms. We are not responsible for the privacy practices of these
                external sites. We encourage you to read the privacy policies of any website you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or
                for legal, operational, or regulatory reasons. We will notify you of any material changes
                by updating the "Last Updated" date at the top of this page.
              </p>
              <p className="text-gray-700 mt-4">
                We encourage you to review this Privacy Policy periodically to stay informed about how we
                are protecting your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our
                data practices, please contact us:
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> info@discoverwhitsundays.com
                </p>
                <p className="text-gray-700">
                  <strong>Location:</strong> Airlie Beach, Queensland, Australia
                </p>
              </div>
              <p className="text-gray-700 mt-4">
                We will respond to your inquiry as soon as reasonably possible, typically within 30 days.
              </p>
            </section>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <p className="text-gray-800">
                <strong>Your Privacy Matters:</strong> We are committed to being transparent about how we
                collect and use your information. This Privacy Policy is designed to help you understand
                your rights and our responsibilities. Thank you for trusting Discover Whitsundays.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}