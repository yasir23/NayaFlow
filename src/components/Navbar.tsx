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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${navHidden ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled ? 'bg-gray-950/60 backdrop-blur-xl' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Minimal logo */}
          <div ref={el => navItemsRef.current[0] = el} className="relative">
            <Link href="/" className="text-xl tracking-tighter flex items-center gap-2">
              <span className="text-gray-500 font-light">naya</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" y1="2" x2="12" y2="0.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <circle cx="12" cy="0.5" r="0.75" fill="currentColor" />
                <rect x="8" y="2" width="8" height="7" rx="2" fill="currentColor" opacity="0.95" />

                <circle cx="10.5" cy="5" r="1" fill="#0EA5E9" opacity="0.9" />
                <circle cx="13.5" cy="5" r="1" fill="#0EA5E9" opacity="0.9" />
                <circle cx="10.5" cy="5" r="0.4" fill="white" opacity="0.8" />
                <circle cx="13.5" cy="5" r="0.4" fill="white" opacity="0.8" />

                <rect x="10.5" y="7" width="3" height="0.8" rx="0.4" fill="currentColor" opacity="0.4" />

                <rect x="6.5" y="10" width="11" height="9" rx="2" fill="currentColor" opacity="0.9" />

                <rect x="8.5" y="12" width="7" height="5" rx="1" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="0.5" opacity="0.3" />

                <circle cx="10" cy="14" r="0.6" fill="#22C55E" opacity="0.8" />
                <circle cx="12" cy="14" r="0.6" fill="#EAB308" opacity="0.8" />
                <circle cx="14" cy="14" r="0.6" fill="#EF4444" opacity="0.8" />

                <line x1="9.5" y1="15.5" x2="14.5" y2="15.5" stroke="#0EA5E9" stroke-width="0.8" opacity="0.6" />
                <line x1="9.5" y1="16.5" x2="12.5" y2="16.5" stroke="#0EA5E9" stroke-width="0.8" opacity="0.4" />

                <rect x="4" y="11.5" width="2" height="6" rx="1" fill="currentColor" opacity="0.8" />
                <rect x="18" y="11.5" width="2" height="6" rx="1" fill="currentColor" opacity="0.8" />

                <circle cx="5" cy="18.5" r="1" fill="currentColor" opacity="0.7" />
                <circle cx="19" cy="18.5" r="1" fill="currentColor" opacity="0.7" />

                <rect x="9" y="20" width="2.5" height="3" rx="0.8" fill="currentColor" opacity="0.8" />
                <rect x="12.5" y="20" width="2.5" height="3" rx="0.8" fill="currentColor" opacity="0.8" />

                <rect x="8.5" y="23" width="3" height="1" rx="0.5" fill="currentColor" opacity="0.6" />
                <rect x="12.5" y="23" width="3" height="1" rx="0.5" fill="currentColor" opacity="0.6" />
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












