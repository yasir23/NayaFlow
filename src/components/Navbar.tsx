"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const navItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      setNavHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Stagger animation on load
    gsap.fromTo(navItemsRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.5
      }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        navHidden ? '-translate-y-full' : 'translate-y-0'
      } ${scrolled ? 'bg-gray-950/60 backdrop-blur-xl' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Minimal logo */}
          <div ref={el => navItemsRef.current[0] = el} className="relative">
            <Link href="/" className="text-xl tracking-tighter flex items-center gap-2">
              <span className="text-gray-500 font-light">naya</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white"
              >
                {/* Robot Head - Square with rounded corners */}
                <rect x="7" y="3" width="10" height="8" rx="1.5" fill="currentColor" opacity="0.9"/>
                
                {/* Antenna */}
                <line x1="12" y1="3" x2="12" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="0.5" r="0.8" fill="currentColor"/>
                
                {/* Robot Eyes - Rectangular */}
                <rect x="8.5" y="5" width="1.5" height="1" rx="0.2" fill="#00FFFF" opacity="0.9"/>
                <rect x="14" y="5" width="1.5" height="1" rx="0.2" fill="#00FFFF" opacity="0.9"/>
                
                {/* Robot Mouth - Grid pattern */}
                <rect x="9" y="7.5" width="6" height="1" rx="0.2" fill="currentColor" opacity="0.3"/>
                <line x1="10" y1="7.5" x2="10" y2="8.5" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                <line x1="12" y1="7.5" x2="12" y2="8.5" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                <line x1="14" y1="7.5" x2="14" y2="8.5" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                
                {/* Robot Body - Rectangular */}
                <rect x="6" y="12" width="12" height="8" rx="1" fill="currentColor" opacity="0.8"/>
                
                {/* Chest Panel */}
                <rect x="8" y="14" width="8" height="4" rx="0.5" fill="currentColor" opacity="0.2"/>
                <rect x="9" y="15" width="2" height="1" rx="0.2" fill="#00FFFF" opacity="0.6"/>
                <rect x="13" y="15" width="2" height="1" rx="0.2" fill="#00FFFF" opacity="0.6"/>
                <rect x="9" y="17" width="2" height="1" rx="0.2" fill="#00FFFF" opacity="0.6"/>
                <rect x="13" y="17" width="2" height="1" rx="0.2" fill="#00FFFF" opacity="0.6"/>
                
                {/* Robot Arms */}
                <rect x="4" y="13" width="2" height="6" rx="1" fill="currentColor" opacity="0.7"/>
                <rect x="18" y="13" width="2" height="6" rx="1" fill="currentColor" opacity="0.7"/>
                
                {/* Robot Legs */}
                <rect x="8" y="21" width="3" height="2" rx="0.5" fill="currentColor" opacity="0.6"/>
                <rect x="13" y="21" width="3" height="2" rx="0.5" fill="currentColor" opacity="0.6"/>
              </svg>
              <span className="text-white font-medium">flow</span>
            </Link>
            <motion.div
              className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-white to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
          
          {/* Center navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {['Services', 'Solutions', 'Case Studies', 'About'].map((item, i) => (
              <a
                key={item}
                ref={el => navItemsRef.current[i + 1] = el}
                href={`#${item.toLowerCase()}`}
                className="group relative text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                </span>
              </a>
            ))}
          </div>
          
          {/* CTA with glow effect */}
          <div ref={el => navItemsRef.current[5] = el} className="relative">
            <Link 
              href="https://cal.com/yasirali23/intro-call-45-min"
              className="relative px-6 py-2 text-sm text-white overflow-hidden group"
            >
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 












