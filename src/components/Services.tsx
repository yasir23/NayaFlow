"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaBrain, 
  FaRobot, 
  FaMobile, 
  FaUsers, 
  FaCloud, 
  FaPalette, 
  FaCode, 
  FaCogs, 
  FaShieldAlt, 
  FaChartBar, 
  FaDatabase, 
  FaGamepad,
  FaPlus,
  FaMinus
} from 'react-icons/fa';

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    {
      id: 'generative-ai',
      title: 'Generative AI',
      icon: <FaBrain className="w-8 h-8" />,
      description: 'Harness the power of AI to generate content, automate processes, and enhance decision-making across your organization.',
      features: ['Content Generation', 'Process Automation', 'Intelligent Analysis', 'Custom AI Models'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/generative-ai'
    },
    {
      id: 'ai-agents',
      title: 'AI Agent Development',
      icon: <FaRobot className="w-8 h-8" />,
      description: 'Custom AI agents tailored to your business needs, capable of handling complex workflows and decision-making.',
      features: ['Custom Agent Design', 'Workflow Integration', 'Multi-Agent Systems', 'Performance Monitoring'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-agents'
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      icon: <FaMobile className="w-8 h-8" />,
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/mobile-development'
    },
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      icon: <FaUsers className="w-8 h-8" />,
      description: 'Scale your team with skilled professionals who integrate seamlessly with your existing workforce.',
      features: ['Skilled Professionals', 'Quick Integration', 'Flexible Scaling', 'Quality Assurance'],
      color: 'from-orange-500 to-red-500',
      href: '/services/staff-augmentation'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Solutions',
      icon: <FaCloud className="w-8 h-8" />,
      description: 'Comprehensive cloud services including migration, optimization, and management for scalable infrastructure.',
      features: ['Cloud Migration', 'Infrastructure Management', 'Cost Optimization', '24/7 Support'],
      color: 'from-indigo-500 to-purple-500',
      href: '/services/cloud-solutions'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: <FaPalette className="w-8 h-8" />,
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-pink-500 to-rose-500',
      href: '/services/ui-ux-design'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <FaCode className="w-8 h-8" />,
      description: 'Full-stack web applications built with modern technologies for optimal performance and scalability.',
      features: ['Full-Stack Development', 'Modern Frameworks', 'Responsive Design', 'Performance Optimization'],
      color: 'from-teal-500 to-green-500',
      href: '/services/web-development'
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      icon: <FaCogs className="w-8 h-8" />,
      description: 'Bespoke software solutions designed to meet your unique business requirements and challenges.',
      features: ['Custom Solutions', 'Scalable Architecture', 'Integration Services', 'Maintenance & Support'],
      color: 'from-yellow-500 to-orange-500',
      href: '/services/custom-software'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      icon: <FaShieldAlt className="w-8 h-8" />,
      description: 'Comprehensive security services to protect your digital assets and ensure compliance.',
      features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      color: 'from-red-500 to-pink-500',
      href: '/services/cybersecurity'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Insights',
      icon: <FaChartBar className="w-8 h-8" />,
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Real-time Reporting'],
      color: 'from-cyan-500 to-blue-500',
      href: '/services/data-analytics'
    },
    {
      id: 'database-management',
      title: 'Database Solutions',
      icon: <FaDatabase className="w-8 h-8" />,
      description: 'Robust database design, optimization, and management services for reliable data storage.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery'],
      color: 'from-slate-500 to-gray-500',
      href: '/services/database-solutions'
    },
    {
      id: 'game-development',
      title: 'Game Development',
      icon: <FaGamepad className="w-8 h-8" />,
      description: 'End-to-end game development services from concept to deployment across multiple platforms.',
      features: ['Game Design', 'Multi-Platform', '3D Graphics', 'Monetization Strategy'],
      color: 'from-violet-500 to-purple-500',
      href: '/services/game-development'
    }
  ];

  const displayedServices = showAllServices ? services : services.slice(0, 8);

  return (
    <section className="w-full py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Business
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive AI and technology solutions designed to accelerate your digital transformation and drive business growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Link href={service.href} className="block">
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <div className="space-y-1">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 2 && (
                    <div className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                      <span>+{service.features.length - 2} more features</span>
                    </div>
                  )}
                </div>
                
                {/* Hover Arrow */}
                <div className="mt-4 flex items-center text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More/Less Button */}
        <div className="text-center">
          <motion.button
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-gray-300 hover:bg-gray-700 rounded-lg font-medium transition-colors border border-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {showAllServices ? (
              <>
                <FaMinus className="w-4 h-4 mr-2" />
                View Less Services
              </>
            ) : (
              <>
                <FaPlus className="w-4 h-4 mr-2" />
                View More Services
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
