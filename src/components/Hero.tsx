"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 text-gray-900 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Automation Services for <span className="text-blue-700">Startups, SMEs & Enterprises</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-700 max-w-xl">
              From rapid startup deployment to enterprise-scale orchestration, we deliver tailored AI automation solutions that grow with your business.
            </p>
            
            {/* Business Segment Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Startups: 2-4 week setup
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                📈 SMEs: Scalable growth
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                🏢 Enterprise: Unlimited scale
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="https://cal.com/yasirali23/intro-call-45-min" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-center transition-colors text-lg shadow-lg hover:shadow-xl">
                Book a Demo
              </Link>
              <Link href="/services" className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full font-medium text-center transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                View Services
              </Link>
              <Link href="/solutions" className="px-8 py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-100 text-blue-700 rounded-full font-medium text-center transition-colors text-lg">
                Explore Solutions
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full h-80 md:h-96 bg-white rounded-lg overflow-hidden shadow-2xl">
              {/* This would be an image or animation in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 p-4 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-blue-100 rounded-lg flex items-center justify-center text-blue-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                    >
                      <div className="text-xs md:text-sm p-2 text-center">
                        {['Sales', 'Support', 'Research', 'Finance', 'HR', 'Legal', 'Marketing', 'Data', 'Operations'][i]}
                        <div className="mt-1 text-[10px] text-blue-500">Agent {i+1}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Central orchestrator */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear" 
                }}
              >
                <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center z-10">
                  <div className="text-white font-bold text-sm text-center">
                    NAYAFlOW<br/>Orchestrator
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/80 p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold mb-2 text-blue-700">$10M+</div>
            <div className="text-xl text-gray-700">Savings Generated</div>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold mb-2 text-blue-700">1M+</div>
            <div className="text-xl text-gray-700">AI Agents Orchestrated</div>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold mb-2 text-blue-700">99.9%</div>
            <div className="text-xl text-gray-700">Orchestration Uptime</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 

