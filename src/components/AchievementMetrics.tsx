"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaGlobe, 
  FaUsers, 
  FaCalendarAlt,
  FaTrophy,
  FaRocket,
  FaAward,
  FaStar
} from 'react-icons/fa';

const AchievementMetrics = () => {
  const metrics = [
    {
      id: 'projects',
      value: '3,000+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across diverse industries',
      icon: <FaProjectDiagram className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      id: 'countries',
      value: '23+',
      label: 'Countries Served',
      description: 'Global reach spanning multiple continents',
      icon: <FaGlobe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      id: 'clients',
      value: '236+',
      label: 'Happy Clients',
      description: 'Trusted by businesses from startups to enterprises',
      icon: <FaUsers className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-500',
      delay: 0.3
    },
    {
      id: 'experience',
      value: '15+',
      label: 'Years of Excellence',
      description: 'Proven track record in technology innovation',
      icon: <FaCalendarAlt className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      id: 'awards',
      value: '50+',
      label: 'Industry Awards',
      description: 'Recognition for outstanding service and innovation',
      icon: <FaTrophy className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      delay: 0.5
    },
    {
      id: 'satisfaction',
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Consistently exceeding client expectations',
      icon: <FaStar className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      delay: 0.6
    }
  ];

  const additionalStats = [
    {
      label: 'AI Models Deployed',
      value: '10,000+',
      icon: <FaRocket className="w-5 h-5" />
    },
    {
      label: 'Code Commits',
      value: '500K+',
      icon: <FaProjectDiagram className="w-5 h-5" />
    },
    {
      label: 'Team Members',
      value: '150+',
      icon: <FaUsers className="w-5 h-5" />
    },
    {
      label: 'Certifications',
      value: '200+',
      icon: <FaAward className="w-5 h-5" />
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
            Proven Track Record of Excellence
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our achievements speak for themselves. With over a decade of experience, 
            we've built a legacy of delivering exceptional AI and technology solutions worldwide.
          </motion.p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: metric.delay }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <div className="text-white">
                  {metric.icon}
                </div>
              </div>
              
              {/* Metric Value */}
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: metric.delay + 0.2 }}
                >
                  {metric.value}
                </motion.div>
                
                {/* Metric Label */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {metric.label}
                </h3>
                
                {/* Metric Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Bar */}
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {additionalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let's work together to achieve remarkable results for your business. 
              Join hundreds of satisfied clients who trust us with their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <FaRocket className="w-4 h-4 ml-2" />
              </motion.a>
              <motion.a
                href="/case-studies"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Success Stories
                <FaTrophy className="w-4 h-4 ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementMetrics;
