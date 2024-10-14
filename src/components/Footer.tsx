// components/Footer.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 lg:px-16 z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left w-full md:w-auto lg:w-1/3"> {/* Added width control */}
          <h2 className="text-xl font-bold mb-2 text-center md:text-left">
            SRI SAI RAM INSTITUTE OF TECHNOLOGY
          </h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Center Section (Responsive and Rounded Map) */}
        <div className="mb-6 md:mb-0 w-full md:w-1/2 lg:w-1/3">
          <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1750647706494!2d80.0506575751227!3d12.960647087353676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1727280188360!5m2!1sen!2sin"
              allowFullScreen={false}
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0 rounded-md"
            ></iframe>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Link 1</a></li>
            <li><a href="#" className="hover:underline">Link 2</a></li>
            <li><a href="#" className="hover:underline">Link 3</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
