"use client";

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Split text animation
      const titleLines = titleRef.current?.querySelectorAll('.word');
      if (titleLines) {
        tl.fromTo(titleLines,
          { 
            y: 100,
            opacity: 0,
            rotationX: -90,
            transformOrigin: "0% 50% -50"
          },
          { 
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1
          }
        );
      }

      tl.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

      tl.fromTo(ctaRef.current?.children,
        { y: 20, opacity: 0 },
        { 
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden bg-gray-950">
      {/* Grain texture overlay */}
      <div className="grainy" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8">
          <div className="overflow-hidden">
            <span className="word inline-block">AI</span>{' '}
            <span className="word inline-block">Automation</span>
          </div>
          <div className="overflow-hidden mt-4">
            <span className="word inline-block text-gray-500">for</span>{' '}
            <span className="word inline-block font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enterprise
            </span>
          </div>
        </h1>
        
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Orchestrate millions of AI agents to automate complex business processes at scale, 
          driving efficiency and transforming enterprises.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.button 
            className="group relative px-10 py-5 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="https://cal.com/yasirali23/intro-call-45-min" className="relative z-10 flex items-center justify-center gap-3 text-gray-900">
              Book a Demo
            </Link>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button 
            className="relative px-10 py-5 overflow-hidden border border-gray-700 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/services" className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
              View Services
            </Link>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-6 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
      </motion.div>
    </section>
  );
};

export default Hero; 

