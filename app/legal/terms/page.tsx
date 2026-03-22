import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-8 md:py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg">
            <strong>Last updated:</strong> March 12, 2026
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of mobile applications (&ldquo;Apps&rdquo;) published by Life is Fake LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By downloading or using any of our Apps, you agree to be bound by these Terms.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Use of Our Apps</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may use our Apps only in compliance with these Terms and all applicable laws. You must not misuse our Apps or attempt to access them using any method other than the interface and instructions we provide.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Your Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Apps may allow you to upload, submit, or display content such as photos, text, and other materials (&ldquo;Your Content&rdquo;). You retain ownership of Your Content. By submitting Your Content through our Apps, you grant us a limited license to use, store, and display it solely for the purpose of operating and improving the Apps.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Prohibited Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Use the Apps for any unlawful purpose</li>
              <li>Upload content that infringes on the rights of others</li>
              <li>Attempt to interfere with or disrupt the Apps or their infrastructure</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Apps</li>
              <li>Use the Apps to harass, abuse, or harm others</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All rights, title, and interest in and to the Apps (excluding Your Content) are and will remain the exclusive property of Life is Fake LLC. Our Apps are protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may suspend or terminate your access to the Apps at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Apps are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. We do not warrant that the Apps will be uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Life is Fake LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Apps.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may revise these Terms from time to time. Changes will be reflected by updating the &ldquo;Last updated&rdquo; date above. Your continued use of the Apps after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms, contact us at:
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
