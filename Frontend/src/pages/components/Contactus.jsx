import React from 'react';
import Header from './header/Header';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing icons

function ContactUs() {
  return (
    <>
    <Header />
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact-Us</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We’d love to hear from you. For any inquiries or questions, please contact us.
        </p>

        <div className="space-y-6">
          {/* Email Section */}
          <div className="flex items-center p-5 bg-blue-100 rounded-xl shadow-md hover:bg-blue-200 transition-all">
            <FaEnvelope className="text-3xl text-blue-500 mr-5" />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Email</h3>
              <p className="text-gray-600">parthparmar2711@gmail.com</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center p-5 bg-green-100 rounded-xl shadow-md hover:bg-green-200 transition-all">
            <FaPhoneAlt className="text-3xl text-green-500 mr-5" />
            <div>
              <h3 className="text-xl font-semibold text-green-600">Phone</h3>
              <p className="text-gray-600">+91 81409 00625</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <a href="mailto:parthparmar2711@gmail.com" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition-all">
            Send Us an Email
          </a>
        </div>
      </div>
    </div>
    </> 
  );
}

export default ContactUs;
