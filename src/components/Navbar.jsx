import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="w-full px-6 sm:px-8">
        <div className="flex justify-end items-center h-16">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/sibi-narendran-1a5a19150/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 active:text-blue-800 hover:scale-110 active:scale-95 transition-all duration-200 transform"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a 
              href="https://x.com/sibinarendran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 active:text-black hover:scale-110 active:scale-95 transition-all duration-200 transform"
              aria-label="Twitter/X Profile"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 