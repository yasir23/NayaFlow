"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-400" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-blue-400" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-blue-700 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Orchestrate Millions of AI Agents for Your Enterprise?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join the enterprises already saving millions through intelligent automation. 
            Our team will create a tailored solution for your unique business needs.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="https://cal.com/yasirali23/intro-call-45-min" 
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Schedule a Demo
            </Link>
            <Link 
              href="/case-studies" 
              className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-700 rounded-full font-bold text-lg hover:bg-blue-100 transition-colors"
            >
              Explore Case Studies
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 