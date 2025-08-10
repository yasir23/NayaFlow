"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-20 h-20">
            <Image 
              src="/images/logo/nayaflow-logo1.png"
              alt="NAYAFlOW Logo" 
              width={100} 
              height={100}
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">NAYAFlOW</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/solutions" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Solutions
          </Link>
          <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Services
          </Link>
          <Link href="/architecture" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Architecture
          </Link>
          <Link href="/case-studies" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Case Studies
          </Link>
          <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            FAQs
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          
          <button className="px-5 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            <Link href="https://cal.com/yasirali23/intro-call-45-min">Book a Demo</Link>
          </button>
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          
          <button 
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 w-full absolute left-0 right-0 z-10 shadow-md border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/solutions" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              Solutions
            </Link>
            <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/architecture" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              Architecture
            </Link>
            <Link href="/case-studies" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              Pricing
            </Link>
            <Link href="/faq" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              FAQs
            </Link>
            <Link href="https://cal.com/yasirali23/intro-call-45-min" className="px-5 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-center">
              Book a Meeting
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 






