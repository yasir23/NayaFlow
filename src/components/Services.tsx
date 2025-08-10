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
  const businessSegments = [
    {
      id: 'startups',
      title: 'Startups',
      icon: <FaRocket size={32} className="text-green-600" />,
      description: 'Rapid deployment and cost-effective automation solutions to accelerate growth from day one.',
      color: 'green',
      bgGradient: 'from-green-50 to-emerald-100',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      features: [
        'Quick 2-4 week setup',
        'Affordable pricing',
        'Essential integrations',
        'Growth-ready architecture'
      ]
    },
    {
      id: 'smes',
      title: 'SMEs',
      icon: <FaChartLine size={32} className="text-blue-600" />,
      description: 'Scalable solutions for growing businesses that need flexibility and advanced automation capabilities.',
      color: 'blue',
      bgGradient: 'from-blue-50 to-indigo-100',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      features: [
        'Advanced workflow automation',
        'Multi-department integration',
        'Scalable infrastructure',
        'Performance analytics'
      ]
    },
    {
      id: 'enterprises',
      title: 'Enterprises',
      icon: <FaBuilding size={32} className="text-purple-600" />,
      description: 'Comprehensive orchestration with advanced security, compliance, and unlimited customization.',
      color: 'purple',
      bgGradient: 'from-purple-50 to-violet-100',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      features: [
        'Enterprise-grade security',
        'Custom compliance features',
        'Unlimited orchestration',
        '24/7 dedicated support'
      ]
    }
  ];

  const serviceIntegrations = [
    {
      name: 'Sales Automation',
      icon: <FaChartLine size={24} className="text-blue-600" />,
      description: 'Intelligent lead qualification, follow-ups, and customer lifecycle management across all business segments.',
      capabilities: ['Lead scoring & routing', 'Email sequences', 'CRM integration', 'Revenue forecasting'],
      segments: {
        startups: 'Basic lead management and email automation',
        smes: 'Multi-channel campaigns with predictive analytics',
        enterprises: 'Global territory management with compliance'
      }
    },
    {
      name: 'LangGraph',
      icon: <FaBrain size={24} className="text-purple-600" />,
      description: 'Advanced multi-agent orchestration with state management for complex business workflows.',
      capabilities: ['Multi-agent coordination', 'State management', 'Complex workflows', 'Custom logic'],
      segments: {
        startups: 'Simple agent workflows for core processes',
        smes: 'Advanced orchestration for growing complexity',
        enterprises: 'Unlimited agents with custom security'
      }
    },
    {
      name: 'Google SDK',
      icon: <FaGoogle size={24} className="text-red-600" />,
      description: 'Seamless integration with Google Workspace and Cloud services for enhanced productivity.',
      capabilities: ['Gmail automation', 'Sheets integration', 'Calendar management', 'Drive workflows'],
      segments: {
        startups: 'Basic Google Workspace automation',
        smes: 'Advanced Google services integration',
        enterprises: 'Full Google Cloud enterprise features'
      }
    },
    {
      name: 'OpenAI SDK',
      icon: <FaRobot size={24} className="text-green-600" />,
      description: 'Leverage cutting-edge AI models for content generation, analysis, and intelligent automation.',
      capabilities: ['Content generation', 'Data analysis', 'Chatbot automation', 'Custom AI models'],
      segments: {
        startups: 'Essential AI features for growth',
        smes: 'Advanced AI with custom training',
        enterprises: 'Dedicated infrastructure and compliance'
      }
    },
    {
      name: 'n8n',
      icon: <FaCogs size={24} className="text-orange-600" />,
      description: 'Visual workflow automation platform connecting 200+ applications without coding expertise.',
      capabilities: ['No-code automation', '200+ integrations', 'Custom workflows', 'Visual builder'],
      segments: {
        startups: 'Essential no-code workflows',
        smes: 'Self-hosted with advanced security',
        enterprises: 'On-premises with custom nodes'
      }
    },
    {
      name: 'Make.com',
      icon: <FaPlug size={24} className="text-indigo-600" />,
      description: 'Powerful automation platform for complex multi-step workflows across hundreds of applications.',
      capabilities: ['Visual workflow builder', '1000+ app integrations', 'Advanced logic', 'Error handling'],
      segments: {
        startups: 'Basic automation scenarios',
        smes: 'Advanced workflows with complex logic',
        enterprises: 'Private cloud with unlimited scenarios'
      }
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI Automation Services for Every Business
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From startups to enterprises, we deliver tailored automation solutions with powerful integrations that scale with your business.
          </motion.p>
        </div>

        {/* Business Segments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {businessSegments.map((segment, index) => (
            <motion.div
              key={segment.id}
              className={`bg-gradient-to-br ${segment.bgGradient} rounded-xl p-8 shadow-lg ${segment.borderColor} border hover:shadow-xl transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-${segment.color}-600 rounded-full flex items-center justify-center mr-4`}>
                  {segment.icon}
                </div>
                <h3 className={`text-2xl font-bold ${segment.textColor}`}>{segment.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-6">{segment.description}</p>
              
              <ul className="space-y-2">
                {segment.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <div className={`w-2 h-2 bg-${segment.color}-500 rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <Link 
                  href="/services" 
                  className={`inline-flex items-center text-${segment.color}-700 hover:text-${segment.color}-900 font-medium text-sm`}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
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

