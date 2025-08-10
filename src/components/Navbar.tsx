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
    <nav className="w-full py-3 bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12">
            <Image 
              src="/images/logo/nayaflow-logo1.png"
              alt="NAYAFlOW Logo" 
              width={48} 
              height={48}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-blue-700 dark:text-blue-400">NAYAFlOW</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium">
            Services
          </Link>
          <Link href="/case-studies" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium">
            Case Studies
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium">
            About
          </Link>
        </div>
        
        {/* Action Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          
          {/* Professional Action Buttons */}
          <Link 
            href="/services" 
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-colors border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400"
          >
            Explore Services
          </Link>
          
          <Link 
            href="/contact" 
            className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-sm"
          >
            Let's Talk Business
          </Link>
          
          <Link 
            href="/contact" 
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all shadow-sm"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          
          <button 
            className="p-2 text-gray-700 dark:text-gray-300 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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







