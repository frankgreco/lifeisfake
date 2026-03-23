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
            <strong>Last updated:</strong> March 23, 2026
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            This Privacy Policy describes how Life is Fake LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, stores, and shares your information when you use our mobile applications available on the Apple App Store (each, an &ldquo;App,&rdquo; and collectively, the &ldquo;Apps&rdquo;). This Privacy Policy is incorporated into and subject to our <a href="/legal/terms" className="text-blue-600 hover:text-blue-800 underline">End User License Agreement</a>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            By downloading, installing, or using any of our Apps, you consent to the collection of automatically collected information as described in this Privacy Policy. For information you actively provide (such as photos, videos, and display names), your consent is given at the time you choose to upload or enter that information. You may withdraw your consent at any time by ceasing to use the Apps, deleting your content, or contacting us to request data deletion.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">1. Information We Collect</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Information You Provide</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Name or display name you enter in the App</li>
              <li>Photos, images, and videos you upload through the App</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Device type, model, operating system version, and unique device identifiers</li>
              <li>Push notification tokens (if you opt in to notifications)</li>
              <li>App usage data, session information, and interaction events</li>
              <li>Crash logs, diagnostics, and performance data</li>
              <li>IP address and general location information (country or region level)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Information Collected by Apple</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you make in-app purchases or subscribe to premium features, payment transactions are processed entirely by Apple through the App Store. We do not collect, process, or store your payment information (such as credit card numbers or billing addresses). We receive only a transaction confirmation and subscription status from Apple. Apple&rsquo;s collection and use of your data is governed by <a href="https://www.apple.com/legal/privacy/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Apple&rsquo;s Privacy Policy</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>To provide, operate, and maintain the Apps and their features</li>
              <li>To store and serve your uploaded content (photos, images, and videos)</li>
              <li>To send push notifications you have opted into</li>
              <li>To process and manage your in-app purchases and subscriptions</li>
              <li>To analyze usage patterns and improve our Apps</li>
              <li>To diagnose crashes, debug errors, and monitor performance</li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">3. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
              <li>
                <strong>Cloud infrastructure providers.</strong> Your uploaded content (photos, images, and videos) is stored using secure third-party cloud infrastructure services located in the United States. These service providers process data on our behalf and are contractually obligated to protect it in accordance with industry-standard security practices.
              </li>
              <li>
                <strong>Analytics and crash reporting providers.</strong> We may use third-party analytics and crash reporting tools to understand app usage and diagnose issues. These services may collect device and usage information on our behalf.
              </li>
              <li>
                <strong>Apple.</strong> Apple collects certain data through the App Store, including purchase history and app usage analytics. See <a href="https://www.apple.com/legal/privacy/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Apple&rsquo;s Privacy Policy</a>.
              </li>
              <li>
                <strong>Legal compliance.</strong> We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
              </li>
              <li>
                <strong>Business transfers.</strong> If Life is Fake LLC is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change via the App or by updating this Privacy Policy.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">4. Data Storage and International Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information, including uploaded content, is stored on secure third-party cloud servers located in the United States. If you are accessing our Apps from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your jurisdiction.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using our Apps, you consent to the transfer of your information to the United States and the processing of your information as described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We take reasonable administrative, technical, and physical measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Encryption of data in transit using TLS/SSL</li>
              <li>Encryption of stored data at rest</li>
              <li>Access controls limiting who within our organization can access your data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              However, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">6. Data Breach Notification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a data breach that compromises your personal information, we will notify affected users as required by applicable law. Where required, we will provide notice within the timeframes mandated by applicable state or international law, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Within 30 days for California residents, as required by the California Civil Code</li>
              <li>Within 72 hours to the relevant supervisory authority for individuals protected under the GDPR</li>
              <li>Within the timeframes required by other applicable state breach notification laws</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Such notification will include the nature of the breach, the types of data affected, and steps you can take to protect yourself.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as it is necessary to provide the Apps and fulfill the purposes described in this Privacy Policy. Specifically:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>User Content</strong> (photos, images, videos): Retained until you delete it from within the App, or until we delete it following termination of the Apps.</li>
              <li><strong>Usage and analytics data:</strong> Retained for up to 24 months, then aggregated or deleted.</li>
              <li><strong>Crash logs and diagnostics:</strong> Retained for up to 12 months.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may retain certain information for longer periods as required by law or as necessary to resolve disputes and enforce our agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">8. Tracking and Analytics Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Apps do not use cookies (as they are mobile applications). However, we may use software development kits (SDKs) and similar technologies for analytics and crash reporting.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not track you across other companies&rsquo; apps or websites for advertising purposes. If we ever implement tracking that requires it, we will request your permission through Apple&rsquo;s App Tracking Transparency framework before any such tracking occurs.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Universal Opt-Out Signals</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We recognize and honor universal opt-out preference signals, including the Global Privacy Control (GPC), as required by applicable state law. When we detect such a signal, we will treat it as a valid opt-out request for the sale or sharing of personal information and targeted advertising. Since we do not sell personal information or engage in targeted advertising, no additional action is required on your part, but we honor such signals as a matter of compliance and respect for your privacy preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">9. Artificial Intelligence</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Apps do not share your personal data with third-party artificial intelligence services. If we ever integrate AI features that process your personal data through third-party AI services, we will update this Privacy Policy to clearly disclose the AI service provider and the types of data shared, and we will obtain your explicit consent before sharing any personal data with such services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">10. Children&rsquo;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Apps are rated 4+ on the Apple App Store and may be used by children. We are committed to complying with the Children&rsquo;s Online Privacy Protection Act (COPPA), as amended, and other applicable laws protecting children&rsquo;s privacy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not knowingly collect personal information (as defined by COPPA, including persistent identifiers used for purposes other than supporting the internal operations of our Apps) from children under 13 without verifiable parental consent. We do not require users to create accounts or provide personal identifying information to use the Apps.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the extent our Apps collect device identifiers or analytics data, such collection is limited to supporting the internal operations of the Apps (e.g., maintaining functionality, analyzing internal operations, and performing network communications) as permitted by the COPPA Rule.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a parent or guardian and believe your child has provided us with personal information beyond what is described above, please contact us at <a href="mailto:fbgrecojr@me.com" className="text-blue-600 hover:text-blue-800 underline">fbgrecojr@me.com</a> and we will promptly delete such information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">11. Your Privacy Rights</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">All Users</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Regardless of your location, you may:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Delete your uploaded content at any time from within the App</li>
              <li>Opt out of push notifications through your device settings</li>
              <li>Request access to, correction of, or deletion of your personal data by emailing us</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">California Residents (CCPA/CPRA)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Right to Know:</strong> You may request details about the categories and specific pieces of personal information we have collected about you.</li>
              <li><strong>Right to Delete:</strong> You may request that we delete your personal information, subject to certain legal exceptions.</li>
              <li><strong>Right to Correct:</strong> You may request correction of inaccurate personal information.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
              <li><strong>Do Not Sell or Share:</strong> We do not sell your personal information. We do not share your personal information for cross-context behavioral advertising.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise your California privacy rights, contact us at <a href="mailto:fbgrecojr@me.com" className="text-blue-600 hover:text-blue-800 underline">fbgrecojr@me.com</a>. We will respond to verifiable requests within 45 days.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Other U.S. State Privacy Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a resident of a state with applicable consumer privacy legislation (such as Colorado, Connecticut, Delaware, Indiana, Iowa, Kentucky, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Virginia, or other states with comprehensive privacy laws), you may have rights including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Right to Access:</strong> Request a copy of the personal data we have collected about you.</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal data.</li>
              <li><strong>Right to Correct:</strong> Request correction of inaccurate personal data.</li>
              <li><strong>Right to Data Portability:</strong> Obtain a copy of your data in a portable, readily usable format.</li>
              <li><strong>Right to Opt Out:</strong> Opt out of targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information or use it for targeted advertising. To exercise any of these rights, contact us at <a href="mailto:fbgrecojr@me.com" className="text-blue-600 hover:text-blue-800 underline">fbgrecojr@me.com</a>. We will respond within the timeframe required by your state&rsquo;s applicable law. If your request is denied, you may have the right to appeal; instructions for doing so will be included in our response.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">European Economic Area, UK, and Switzerland (GDPR)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are located in the EEA, UK, or Switzerland, you may have additional rights under the General Data Protection Regulation (GDPR), including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data.</li>
              <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
              <li><strong>Right to Data Portability:</strong> Request a copy of your data in a portable format.</li>
              <li><strong>Right to Object:</strong> Object to our processing of your data.</li>
              <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Legal Bases for Processing (GDPR)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data under the following legal bases:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Performance of contract:</strong> Providing the Apps, storing and serving your content, processing in-app purchases</li>
              <li><strong>Your consent:</strong> Push notifications (which you may withdraw at any time through device settings), voluntary content uploads</li>
              <li><strong>Legitimate interests:</strong> Analytics and usage pattern analysis (improving our Apps), crash diagnostics and error reporting (maintaining service quality and security)</li>
              <li><strong>Legal obligation:</strong> Compliance with applicable laws, responding to lawful requests from authorities</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise your rights, contact us at <a href="mailto:fbgrecojr@me.com" className="text-blue-600 hover:text-blue-800 underline">fbgrecojr@me.com</a>. You also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">12. Data Deletion Requests</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may delete your uploaded content directly from within the App at any time. To request complete deletion of all personal data we hold about you, email us at <a href="mailto:fbgrecojr@me.com" className="text-blue-600 hover:text-blue-800 underline">fbgrecojr@me.com</a> with the subject line &ldquo;Data Deletion Request.&rdquo; We will process your request within 30 days and confirm deletion via email.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please note that some information may be retained as required by law or for legitimate business purposes (such as resolving disputes or enforcing our agreements), even after a deletion request.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page and may notify you through the App. Your continued use of the Apps after changes are posted constitutes your acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">14. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Life is Fake LLC</strong><br />
              16192 Coastal Highway<br />
              Lewes, DE 19958<br />
              United States<br />
              Email: <a href="mailto:fbgrecojr@me.com" className="text-blue-600 hover:text-blue-800 underline">fbgrecojr@me.com</a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
