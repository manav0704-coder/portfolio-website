import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiInfo, FiInstagram } from 'react-icons/fi';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            I'd love to hear from you! Feel free to contact me using the information below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info: 3 columns on lg screens */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8 mb-6">
                {/* Email - Primary Contact Method */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark">
                      <FiMail size={24} />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-medium mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      The best way to reach me directly
                    </p>
                    <a 
                      href="mailto:manavpardeshi9@gmail.com?subject=Portfolio%20Inquiry" 
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent-light dark:bg-accent-dark text-white font-medium hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-colors"
                    >
                      <FiSend /> Send Email
                    </a>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                      <FiInfo className="inline mr-1" /> Clicking will open your email client
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark">
                      <FiPhone size={24} />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-medium mb-1">Phone</h3>
                    <a href="tel:+919356013449" className="text-gray-600 dark:text-gray-400 hover:underline text-lg">
                      +91 93560 13449
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark">
                      <FiMapPin size={24} />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-medium mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Pune, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-xl font-medium mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/mr._manav._17/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <FiInstagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manav-pardeshi/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/manav0704-coder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                    aria-label="GitHub"
                  >
                    <FiGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Email Section: 2 columns on lg screens */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-full">
              <div className="flex flex-col h-full justify-center">
                <div className="text-center mb-8">
                  <FiMail size={48} className="mx-auto mb-4 text-accent-light dark:text-accent-dark" />
                  <h2 className="text-2xl font-bold mb-2">Ready to Collaborate?</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <a 
                    href="mailto:manavpardeshi9@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Manav,%0A%0AI'm%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%0A%0AProject%20Details:%0A-%20%0A-%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards," 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-light dark:bg-accent-dark text-white font-medium hover:bg-accent-light/90 dark:hover:bg-accent-dark/90 transition-colors w-full sm:w-auto"
                  >
                    <FiSend /> Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 