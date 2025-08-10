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
    <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-900">
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
            Transform Your Business
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer"
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <div className="space-y-1">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 2 && (
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      <span>+{service.features.length - 2} more features</span>
                    </div>
                  )}
                </div>
                
                {/* Hover Arrow */}
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
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
            className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
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

        {/* Service Integrations */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Integration Suite
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    {integration.icon}
                  </div>
                  <h4 className="text-xl font-bold text-blue-700">{integration.name}</h4>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{integration.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2 text-sm">Key Capabilities:</h5>
                  <div className="flex flex-wrap gap-1">
                    {integration.capabilities.map((capability, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-green-50 p-2 rounded text-xs">
                    <span className="font-semibold text-green-800">Startups:</span>
                    <span className="text-green-700 ml-1">{integration.segments.startups}</span>
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-xs">
                    <span className="font-semibold text-blue-800">SMEs:</span>
                    <span className="text-blue-700 ml-1">{integration.segments.smes}</span>
                  </div>
                  <div className="bg-purple-50 p-2 rounded text-xs">
                    <span className="font-semibold text-purple-800">Enterprise:</span>
                    <span className="text-purple-700 ml-1">{integration.segments.enterprises}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Proven Results Across All Segments</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaRocket size={32} className="text-green-600" />
              </div>
              <h4 className="font-bold text-green-800 mb-2">Startup Success</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div><span className="font-semibold">75%</span> faster onboarding</div>
                <div><span className="font-semibold">40%</span> higher conversion</div>
                <div><span className="font-semibold">3 weeks</span> to deployment</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaChartLine size={32} className="text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-800 mb-2">SME Growth</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div><span className="font-semibold">60%</span> cost reduction</div>
                <div><span className="font-semibold">3x</span> faster responses</div>
                <div><span className="font-semibold">4x</span> team scaling</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaBuilding size={32} className="text-purple-600" />
              </div>
              <h4 className="font-bold text-purple-800 mb-2">Enterprise Scale</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div><span className="font-semibold">$12M</span> annual savings</div>
                <div><span className="font-semibold">95%</span> compliance improvement</div>
                <div><span className="font-semibold">40%</span> higher satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have automated their operations with NAYAFlOW. 
              Get started with a free consultation tailored to your business size and needs.
            </p>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                Schedule Free Consultation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full font-medium transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;





