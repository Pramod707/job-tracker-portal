import React from 'react'

const PrivacyAndPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your information when you use our Job Tracking
          and Productivity App.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect personal information such as your name, email address, and
          usage data to improve our services. This data helps us provide a more
          personalized experience and better support.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use your information to:
          <ul className="list-disc list-inside pl-5">
            <li>Provide, maintain, and improve our services.</li>
            <li>Personalize your experience.</li>
            <li>Communicate with you regarding updates or customer support.</li>
            <li>Analyze app usage to enhance productivity features.</li>
          </ul>
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement appropriate security measures to protect your data from
          unauthorized access or disclosure. However, no data transmission over
          the internet is completely secure.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Third-Party Services</h2>
        <p className="text-gray-700 mb-4">
          We may use third-party services for analytics, advertising, or payments.
          These services have their own privacy policies, and we are not
          responsible for their practices.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, update, or delete your personal
          information. You can do this through your account settings or by
          contacting us.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be
          posted on this page, so please review it periodically.
        </p>
        
        <p className="text-gray-700 mb-4">
          By using our app, you agree to this Privacy Policy.
        </p>
        
        <p className="text-gray-700">
          If you have any questions, feel free to contact us at{' '}
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
}

export default PrivacyAndPolicy