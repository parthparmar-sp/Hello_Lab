import React from 'react';
import Header from './header/Header';

function AboutUs() {
  return (
    <>
    <Header />
    <div className="bg-gradient-to-r from-teal-100 via-indigo-200 to-purple-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Main Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Vision</h1>
          <p className="text-xl text-gray-700 mt-4">
            We're creating a seamless lab experience at AIT College to make your academic journey smoother and more efficient.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to provide AIT College students and faculty with an easy-to-use platform for managing all things related to lab activities.
              From organizing schedules to solving problems, we strive to make every lab session more effective and efficient.
            </p>
          </div>

          {/* Vision Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a future where technology seamlessly supports academic environments. Our goal is to make lab management effortless, where faculty, lab assistants, and students collaborate effortlessly to solve challenges and enhance learning.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Features That Matter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Scheduling</h3>
              <p className="text-gray-600">
                Simplify the lab scheduling process with easy-to-manage tools for both students and faculty.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Efficient Complaint Management</h3>
              <p className="text-gray-600">
                Our platform allows for quick tracking, reporting, and resolving of student complaints in real-time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Alerts</h3>
              <p className="text-gray-600">
                Receive notifications instantly about schedule changes or any ongoing issues with the lab.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-4">
            We value your thoughts and feedback. If you have any questions or suggestions, feel free to reach out to us.
          </p>
          <p className="text-lg text-gray-600">
            Email: 
            <a href="mailto:parthparmar2711@gmail.com" className="font-semibold text-blue-500 hover:underline">
              parthparmar2711@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-600">
            Phone: <span className="font-semibold text-blue-500">+91 81409 00625</span>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2024 AIT College | All Rights Reserved</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUs;
