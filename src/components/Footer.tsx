"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current,
        { y: 100 },
        {
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="py-12 px-8 border-t border-gray-900 bg-gray-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div>© 2024 NAYAFlOW. All rights reserved.</div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 