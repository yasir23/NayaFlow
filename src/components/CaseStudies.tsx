"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaArrowRight, 
  FaExternalLinkAlt,
  FaChartLine,
  FaLightbulb,
  FaCode,
  FaMobile,
  FaCloud,
  FaShieldAlt
} from 'react-icons/fa';

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'case-studies' | 'insights'>('all');

  const featuredContent = [
    {
      id: 'techcorp-transformation',
      type: 'case-study',
      title: 'TechCorp Global: $3.2M Operational Savings Through AI Automation',
      excerpt: 'How we implemented 500,000+ AI agents to revolutionize customer service, fraud detection, and regulatory compliance processes.',
      industry: 'Financial Services',
      readTime: '8 min read',
      date: '2024-01-15',
      image: '/images/case-studies/techcorp-hero.jpg',
      tags: ['AI Automation', 'Financial Services', 'Cost Reduction'],
      metrics: {
        primary: '$3.2M saved annually',
        secondary: ['78% efficiency increase', '92% faster response', '42% higher satisfaction']
      },
      href: '/case-studies/techcorp-global-transformation'
    },
    {
      id: 'ai-trends-2024',
      type: 'insight',
      title: 'The Future of AI in Enterprise: 5 Trends Shaping 2024',
      excerpt: 'Explore the latest developments in artificial intelligence and how they\'re transforming business operations across industries.',
      category: 'AI Trends',
      readTime: '6 min read',
      date: '2024-01-20',
      image: '/images/insights/ai-trends-2024.jpg',
      tags: ['AI Trends', 'Enterprise', 'Technology'],
      author: {
        name: 'Dr. Sarah Chen',
        title: 'Head of AI Research',
        avatar: '/images/team/sarah-chen.jpg'
      },
      href: '/insights/ai-trends-2024'
    },
    {
      id: 'healthcare-ai-success',
      type: 'case-study',
      title: 'InnoHealth: 4,500 Hours Saved Monthly with Medical AI Agents',
      excerpt: 'Discover how specialized medical AI agents transformed patient intake, diagnostic assistance, and administrative workflows.',
      industry: 'Healthcare',
      readTime: '10 min read',
      date: '2024-01-10',
      image: '/images/case-studies/innohealth-success.jpg',
      tags: ['Healthcare AI', 'Process Automation', 'Efficiency'],
      metrics: {
        primary: '4,500 hours saved monthly',
        secondary: ['65% less documentation time', '28% diagnostic accuracy', '52% staff productivity']
      },
      href: '/case-studies/innohealth-medical-ai'
    },
    {
      id: 'mobile-development-guide',
      type: 'insight',
      title: 'Building Scalable Mobile Apps: A Complete Development Guide',
      excerpt: 'Best practices and strategies for creating mobile applications that scale with your business growth.',
      category: 'Mobile Development',
      readTime: '12 min read',
      date: '2024-01-18',
      image: '/images/insights/mobile-development-guide.jpg',
      tags: ['Mobile Development', 'Scalability', 'Best Practices'],
      author: {
        name: 'Michael Rodriguez',
        title: 'Senior Mobile Architect',
        avatar: '/images/team/michael-rodriguez.jpg'
      },
      href: '/insights/mobile-development-guide'
    },
    {
      id: 'supply-chain-optimization',
      type: 'case-study',
      title: 'LogiSupply Inc: Achieving 99.8% Inventory Accuracy with AI',
      excerpt: 'Learn how orchestrated AI agents optimized inventory management, demand forecasting, and logistics operations.',
      industry: 'Supply Chain',
      readTime: '9 min read',
      date: '2024-01-05',
      image: '/images/case-studies/logisupply-optimization.jpg',
      tags: ['Supply Chain', 'AI Optimization', 'Logistics'],
      metrics: {
        primary: '99.8% inventory accuracy',
        secondary: ['87% fewer stockouts', '94% less shipping errors', '63% faster fulfillment']
      },
      href: '/case-studies/logisupply-inventory-optimization'
    },
    {
      id: 'cybersecurity-insights',
      type: 'insight',
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies and AI-powered solutions to safeguard your business in an evolving threat landscape.',
      category: 'Cybersecurity',
      readTime: '7 min read',
      date: '2024-01-22',
      image: '/images/insights/cybersecurity-ai.jpg',
      tags: ['Cybersecurity', 'AI Security', 'Digital Protection'],
      author: {
        name: 'Alex Thompson',
        title: 'Cybersecurity Lead',
        avatar: '/images/team/alex-thompson.jpg'
      },
      href: '/insights/cybersecurity-ai-protection'
    }
  ];

  const filteredContent = featuredContent.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'case-studies') return item.type === 'case-study';
    if (activeTab === 'insights') return item.type === 'insight';
    return true;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Trends': return <FaLightbulb className="w-4 h-4" />;
      case 'Mobile Development': return <FaMobile className="w-4 h-4" />;
      case 'Cybersecurity': return <FaShieldAlt className="w-4 h-4" />;
      default: return <FaChartLine className="w-4 h-4" />;
    }
  };

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
            Featured Insights
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how leading companies are transforming their operations with our AI and technology solutions, 
            plus expert insights on the latest industry trends.
          </motion.p>

          {/* Tab Navigation */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex">
              {[
                { key: 'all', label: 'All Content' },
                { key: 'case-studies', label: 'Case Studies' },
                { key: 'insights', label: 'Insights' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <motion.article
              key={item.id}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Link href={item.href} className="block">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'case-study' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {item.type === 'case-study' ? 'Case Study' : 'Insight'}
                    </span>
                  </div>
                  {item.type === 'insight' && (
                    <div className="absolute top-4 right-4 text-white">
                      {getCategoryIcon(item.category!)}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      {item.type === 'case-study' ? (
                        <span className="font-medium">{item.industry}</span>
                      ) : (
                        <span className="font-medium">{item.category}</span>
                      )}
                      <div className="flex items-center">
                        <FaClock className="w-3 h-3 mr-1" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="w-3 h-3 mr-1" />
                      <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Metrics for Case Studies */}
                  {item.type === 'case-study' && item.metrics && (
                    <div className="mb-4">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {item.metrics.primary}
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {item.metrics.secondary.slice(0, 2).map((metric, i) => (
                          <div key={i} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Author for Insights */}
                  {item.type === 'insight' && item.author && (
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                          {item.author.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{item.author.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{item.author.title}</div>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="inline-block text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                        +{item.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">
                      {item.type === 'case-study' ? 'Read Case Study' : 'Read Article'}
                    </span>
                    <FaArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                View All Case Studies
                <FaExternalLinkAlt className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              >
                Browse All Insights
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 


