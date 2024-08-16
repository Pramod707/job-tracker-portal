import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
        <p className="text-gray-700 mb-4">
          Please read these terms and conditions ("Terms", "Terms and Conditions") carefully before using our Job Tracking and Productivity App.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By using our app, you agree to be bound by these Terms. If you do not agree with these Terms, you must not use the app.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Accounts and Responsibilities</h2>
        <p className="text-gray-700 mb-4">
          When you create an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for any activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Usage Restrictions</h2>
        <p className="text-gray-700 mb-4">
          You agree not to use the app for any unlawful purpose or in any way that could damage, disable, or impair the app. You also agree not to attempt to gain unauthorized access to any part of the app or its related systems.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content, features, and functionality of the app, including but not limited to text, graphics, logos, and software, are the property of our company and are protected by intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Termination</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to suspend or terminate your access to the app at our discretion, without notice, for any violation of these Terms or if we suspect any fraudulent activity.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the app. The app is provided on an "as-is" and "as-available" basis.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We may update these Terms from time to time. Any changes will be posted on this page, and your continued use of the app constitutes your acceptance of the new Terms.
        </p>

        <p className="text-gray-700 mb-4">
          By using our app, you agree to these Terms and Conditions.
        </p>

        <p className="text-gray-700">
          If you have any questions, please contact us at{' '}
          <a
            href="mailto:support@example.com"
            className="text-blue-600 hover:underline"
          >
            support@example.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
