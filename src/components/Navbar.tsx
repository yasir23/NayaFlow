"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-gradient-to-r from-white via-blue-50 to-white shadow-sm sticky top-0 z-50">
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
          <span className="text-2xl font-bold text-blue-700">NAYAFlOW</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-700 transition-colors">
            Home
          </Link>
          <Link href="/solutions" className="text-gray-700 hover:text-blue-700 transition-colors">
            Solutions
          </Link>
          <Link href="/architecture" className="text-gray-700 hover:text-blue-700 transition-colors">
            Architecture
          </Link>
          <Link href="/case-studies" className="text-gray-700 hover:text-blue-700 transition-colors">
            Case Studies
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-700 transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-700 transition-colors">
            FAQs
          </Link>
        </div>
        
        <button className="hidden md:block px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
          <Link href="https://cal.com/yasirali23/intro-call-45-min">Book a Demo</Link>
        </button>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute left-0 right-0 z-10 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-blue-700 transition-colors">
              Home
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-blue-700 transition-colors">
              Solutions
            </Link>
            <Link href="/architecture" className="text-gray-700 hover:text-blue-700 transition-colors">
              Architecture
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-blue-700 transition-colors">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-700 transition-colors">
              Pricing
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-700 transition-colors">
              FAQs
            </Link>
            <Link href="https://cal.com/yasirali23/intro-call-45-min" className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-center">
              Book a Meeting
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 