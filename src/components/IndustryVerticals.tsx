"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaHospital, 
  FaUniversity, 
  FaShoppingCart, 
  FaPiggyBank, 
  FaIndustry, 
  FaGamepad,
  FaPlane,
  FaHome,
  FaCar,
  FaShieldAlt,
  FaChevronRight,
  FaArrowRight
} from 'react-icons/fa';

const IndustryVerticals = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const industries = [
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      icon: <FaHospital className="w-8 h-8" />,
      description: 'Digital transformation solutions for hospitals, clinics, and pharmaceutical companies.',
      projects: '450+ Projects',
      color: 'from-red-500 to-pink-500',
      href: '/industries/healthcare'
    },
    {
      id: 'education',
      title: 'Education & E-Learning',
      icon: <FaUniversity className="w-8 h-8" />,
      description: 'Innovative learning platforms and educational technology solutions.',
      projects: '320+ Projects',
      color: 'from-blue-500 to-indigo-500',
      href: '/industries/education'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce & Retail',
      icon: <FaShoppingCart className="w-8 h-8" />,
      description: 'Scalable e-commerce platforms and retail management systems.',
      projects: '580+ Projects',
      color: 'from-green-500 to-emerald-500',
      href: '/industries/ecommerce'
    },
    {
      id: 'fintech',
      title: 'FinTech & Banking',
      icon: <FaPiggyBank className="w-8 h-8" />,
      description: 'Secure financial applications and digital banking solutions.',
      projects: '290+ Projects',
      color: 'from-yellow-500 to-orange-500',
      href: '/industries/fintech'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & IoT',
      icon: <FaIndustry className="w-8 h-8" />,
      description: 'Smart manufacturing solutions and Industrial IoT implementations.',
      projects: '380+ Projects',
      color: 'from-gray-500 to-slate-500',
      href: '/industries/manufacturing'
    },
    {
      id: 'gaming',
      title: 'Gaming & Entertainment',
      icon: <FaGamepad className="w-8 h-8" />,
      description: 'Immersive gaming experiences and entertainment platforms.',
      projects: '210+ Projects',
      color: 'from-purple-500 to-violet-500',
      href: '/industries/gaming'
    },
    {
      id: 'travel',
      title: 'Travel & Hospitality',
      icon: <FaPlane className="w-8 h-8" />,
      description: 'Booking platforms and hospitality management systems.',
      projects: '340+ Projects',
      color: 'from-cyan-500 to-blue-500',
      href: '/industries/travel'
    },
    {
      id: 'realestate',
      title: 'Real Estate & PropTech',
      icon: <FaHome className="w-8 h-8" />,
      description: 'Property management and real estate technology solutions.',
      projects: '260+ Projects',
      color: 'from-teal-500 to-green-500',
      href: '/industries/realestate'
    },
    {
      id: 'automotive',
      title: 'Automotive & Mobility',
      icon: <FaCar className="w-8 h-8" />,
      description: 'Connected vehicle solutions and mobility platforms.',
      projects: '180+ Projects',
      color: 'from-indigo-500 to-purple-500',
      href: '/industries/automotive'
    },
    {
      id: 'government',
      title: 'Government & Public Sector',
      icon: <FaShieldAlt className="w-8 h-8" />,
      description: 'Digital governance solutions and public service platforms.',
      projects: '150+ Projects',
      color: 'from-rose-500 to-pink-500',
      href: '/industries/government'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Discover our Impact Across Industries
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We deliver tailored AI and technology solutions across diverse industries, 
            helping businesses transform their operations and achieve sustainable growth.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              className="group relative bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredIndustry(industry.id)}
              onMouseLeave={() => setHoveredIndustry(null)}
            >
              <Link href={industry.href} className="block h-full">
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Industry Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <div className="text-white">
                    {industry.icon}
                  </div>
                </div>
                
                {/* Industry Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative z-10">
                  {industry.title}
                </h3>
                
                {/* Industry Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 relative z-10">
                  {industry.description}
                </p>
                
                {/* Project Count */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    {industry.projects}
                  </span>
                  
                  {/* Navigation Arrow */}
                  <div className={`flex items-center transition-all duration-300 ${
                    hoveredIndustry === industry.id ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-60'
                  }`}>
                    <FaChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <motion.div
            className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We work with businesses across all sectors. Our adaptable AI and technology solutions 
              can be customized to meet the unique challenges of any industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Discuss Your Industry
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              >
                View All Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryVerticals;
