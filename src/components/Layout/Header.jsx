import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiUser, FiFolder, FiBriefcase, FiMail } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const location = useLocation();

  // Close menu when path changes (user navigates to a new page)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/', icon: <FiHome className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <FiUser className="w-5 h-5" /> },
    { name: 'Projects', path: '/projects', icon: <FiFolder className="w-5 h-5" /> },
    { name: 'Experience', path: '/experience', icon: <FiBriefcase className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <FiMail className="w-5 h-5" /> },
  ];

  const isActivePath = (path) => {
    return location.pathname === path ? 'text-accent-light dark:text-accent-dark' : '';
  };

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-white dark:bg-gray-900 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-serif font-bold text-accent-light dark:text-accent-dark">
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`font-medium hover:text-accent-light dark:hover:text-accent-dark transition-colors ${isActivePath(item.path)}`}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode 
                  ? <FiSun className="w-5 h-5" />
                  : <FiMoon className="w-5 h-5" />
                }
              </button>
            </nav>

            {/* Mobile navigation toggle and theme toggle */}
            <div className="flex md:hidden items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode 
                  ? <FiSun className="w-5 h-5" />
                  : <FiMoon className="w-5 h-5" />
                }
              </button>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen 
                  ? <FiX className="w-6 h-6" />
                  : <FiMenu className="w-6 h-6" />
                }
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 animate-fade-in' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      
      <aside 
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0 animate-slide-in-right' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-accent-light dark:text-accent-dark">Navigation</h2>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          {/* Sidebar Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-4">
              {navItems.map((item, index) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      isActivePath(item.path) ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
                    } ${isMenuOpen ? 'animate-fade-in-up' : ''}`}
                    onClick={toggleMenu}
                  >
                    <span className={`mr-3 ${isActivePath(item.path) ? 'text-accent-light dark:text-accent-dark' : 'text-gray-500 dark:text-gray-400'}`}>
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Sidebar Footer */}
          <div className="p-5 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {isDarkMode ? 'Dark Mode Active' : 'Light Mode Active'}
              </span>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode 
                  ? <FiSun className="w-5 h-5 text-amber-500" />
                  : <FiMoon className="w-5 h-5 text-blue-600" />
                }
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header; 