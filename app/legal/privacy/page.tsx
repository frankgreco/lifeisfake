import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-8 md:py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            <strong>Last updated:</strong> March 12, 2026
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            This Privacy Policy applies to all mobile applications (&ldquo;Apps&rdquo;) published by Life is Fake LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using any of our Apps, you agree to the collection and use of information as described in this policy.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Information We Collect</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Information You Provide</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Name or display name you enter in the App</li>
              <li>Photos and media you upload through the App</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Device type, operating system version, and unique device identifiers</li>
              <li>Push notification tokens</li>
              <li>App usage data, crash logs, and performance analytics</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>To provide and maintain the App&rsquo;s functionality</li>
              <li>To send push notifications you have opted into</li>
              <li>To analyze usage patterns and improve our Apps</li>
              <li>To diagnose crashes and technical issues</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Service providers</strong> that help us operate our Apps (e.g., cloud hosting, analytics, crash reporting)</li>
              <li><strong>Legal authorities</strong> if required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as your account or data exists within the App. You may delete your content at any time from within the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Apps may use third-party services that collect information. These services have their own privacy policies governing the use of your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Children&rsquo;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Apps are not directed at children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may request access to, correction of, or deletion of your personal data by contacting us at the email below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Changes will be reflected by updating the &ldquo;Last updated&rdquo; date above.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Life is Fake LLC</strong><br />
              Email: <a href="mailto:fbgrecojr@me.com" className="text-blue-600 hover:text-blue-800 underline">fbgrecojr@me.com</a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
