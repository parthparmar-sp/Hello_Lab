import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Branding Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-orange-500">Lab Assistant</h3>
          <p className="text-gray-400 text-sm">Your companion for managing lab activities</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
          <li className="cursor-pointer hover:text-lime-500 transition duration-200">
            <a href="/about">About Us</a>
          </li>
          <li className="cursor-pointer hover:text-lime-500 transition duration-200">
            <a href="/contact">Contact</a>
          </li>
          <li className="cursor-pointer hover:text-lime-500 transition duration-200">
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-white hover:text-orange-500">
            <FaFacebook className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-orange-400">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-orange-600">
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-4">
        <p className="text-gray-400 text-xs">&copy; 2024 Lab Assistant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
