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
        
        
        <div className="flex items-center space-x-4">
          
          <Link 
            href="https://cal.com/yasirali23/intro-call-45-min" 
            className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-sm"
          >
            Let's Talk Business
          </Link>
          
          <Link 
            href="https://cal.com/yasirali23/intro-call-45-min" 
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all shadow-sm"
          >
            Contact Us
          </Link>
          </div>
        </div>
        
        
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 w-full fixed left-0 right-0 top-16 z-50 shadow-lg border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 pb-4 border-b border-gray-200 dark:border-gray-700">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium py-3 px-2 min-h-[44px] flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium py-3 px-2 min-h-[44px] flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                Services
              </Link>
              <Link href="/case-studies" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium py-3 px-2 min-h-[44px] flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                Case Studies
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium py-3 px-2 min-h-[44px] flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                About
              </Link>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/services" 
                className="px-6 py-4 min-h-[48px] text-center text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium transition-colors border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 flex items-center justify-center"
              >
                Explore Services
              </Link>
              
              <Link 
                href="/contact" 
                className="px-6 py-4 min-h-[48px] text-center bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-sm flex items-center justify-center"
              >
                Let's Talk Business
              </Link>
              
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 












