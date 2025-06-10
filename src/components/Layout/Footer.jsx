import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-light dark:bg-secondary-dark py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-serif font-bold text-accent-light dark:text-accent-dark mb-2">
              Portfolio
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Manav Pardeshi. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a href="/" className="text-sm hover:text-accent-light dark:hover:text-accent-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-accent-light dark:hover:text-accent-dark">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-sm hover:text-accent-light dark:hover:text-accent-dark">
                  Projects
                </a>
              </li>
              <li>
                <a href="/experience" className="text-sm hover:text-accent-light dark:hover:text-accent-dark">
                  Experience
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-accent-light dark:hover:text-accent-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/manav0704-coder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/manav-pardeshi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/mr._manav._17/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <FiInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 