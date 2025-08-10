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
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Real Results with AI Agent Orchestration
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See how enterprises across industries are transforming their operations with NAYAFlOW's AI agent orchestration platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">{study.company}</h3>
                <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
                  {/* Placeholder for company logo */}
                  <div className="text-blue-700 font-bold text-xs">{study.company.substring(0, 2)}</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{study.industry}</span>
                  <span className="text-sm font-semibold text-blue-600">{study.result}</span>
                </div>
                
                <p className="text-gray-700 mb-6">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg shadow text-center">
                      <div className="text-blue-600 font-bold">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link href={`/case-studies/${study.company.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/case-studies" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors">
            View All Case Studies
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 
