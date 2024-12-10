import React from 'react';
import Header from './header/Header';

function PrivacyPolicy() {
  return (
    <>
    <Header />
    <div className="bg-gradient-to-r from-blue-200 to-blue-100 min-h-screen py-12 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Your privacy is of utmost importance to us. This policy outlines how we collect, use, and safeguard your personal information.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Collection</h2>
          <p className="text-lg text-gray-600">
            We collect personal information, such as your name, email, and contact details, to improve your experience and provide support.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">How We Use Your Data</h2>
          <p className="text-lg text-gray-600">
            The information we collect helps us to personalize your experience and resolve any issues efficiently, offering seamless support.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Security</h2>
          <p className="text-lg text-gray-600">
            We take data protection seriously, using strong encryption to secure your information and ensure that your data is safe with us.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-lg text-gray-600">
            If you have any concerns or questions, feel free to contact us at{' '}
            <a href="mailto:parthparmar2711@gmail.com" className="text-blue-500 hover:text-blue-700 font-semibold transition-all">
              parthparmar2711@gmail.com
            </a>.
          </p>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            By using our platform, you agree to our privacy policy.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default PrivacyPolicy;
