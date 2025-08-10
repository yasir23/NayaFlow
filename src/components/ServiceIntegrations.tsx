"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { FaBrain, FaGoogle, FaRobot, FaCogs, FaPlug, FaChartLine } from 'react-icons/fa';

const ServiceIntegrations = () => {
  const integrations = [
    {
      id: 'langgraph',
      name: 'LangGraph',
      icon: <FaBrain size={32} className="text-purple-600" />,
      image: '/images/services/langgraph-integration.svg',
      description: 'Advanced multi-agent orchestration with state management for complex business workflows and intelligent decision-making.',
      salesAutomation: 'Orchestrates complex sales workflows with multiple AI agents handling lead qualification, nurturing, and conversion optimization.',
      capabilities: [
        'Multi-agent coordination',
        'State management',
        'Complex workflow orchestration',
        'Intelligent routing'
      ],
      useCases: {
        startups: {
          title: 'Simple Agent Workflows',
          description: 'Basic multi-agent coordination for core sales and support processes',
          benefits: ['Quick setup', 'Essential workflows', 'Cost-effective']
        },
        smes: {
          title: 'Advanced Orchestration',
          description: 'Sophisticated multi-agent systems for growing business complexity',
          benefits: ['Scalable workflows', 'Advanced logic', 'Custom integrations']
        },
        enterprises: {
          title: 'Enterprise-Scale Orchestration',
          description: 'Unlimited agents with custom security and compliance features',
          benefits: ['Unlimited scale', 'Custom security', 'Compliance ready']
        }
      },
      color: 'purple'
    },
    {
      id: 'google-sdk',
      name: 'Google SDK',
      icon: <FaGoogle size={32} className="text-red-600" />,
      image: '/images/services/google-sdk-integration.svg',
      description: 'Seamless integration with Google Workspace and Cloud services for enhanced productivity and collaboration.',
      salesAutomation: 'Automates Gmail outreach, calendar scheduling, and document generation for streamlined sales processes.',
      capabilities: [
        'Gmail automation',
        'Calendar management',
        'Sheets integration',
        'Drive workflows'
      ],
      useCases: {
        startups: {
          title: 'Workspace Automation',
          description: 'Basic Google Workspace integration for email and calendar automation',
          benefits: ['Email sequences', 'Calendar booking', 'Document sync']
        },
        smes: {
          title: 'Advanced Google Services',
          description: 'Comprehensive Google services integration with advanced features',
          benefits: ['Advanced analytics', 'Custom workflows', 'Team collaboration']
        },
        enterprises: {
          title: 'Google Cloud Enterprise',
          description: 'Full Google Cloud integration with enterprise security and compliance',
          benefits: ['Enterprise security', 'Custom deployments', 'Advanced analytics']
        }
      },
      color: 'red'
    },
    {
      id: 'openai-sdk',
      name: 'OpenAI SDK',
      icon: <FaRobot size={32} className="text-green-600" />,
      image: '/images/services/openai-sdk-integration.svg',
      description: 'Leverage cutting-edge AI models for content generation, analysis, and intelligent automation across your business.',
      salesAutomation: 'Powers intelligent lead scoring, personalized content generation, and automated customer communication.',
      capabilities: [
        'Content generation',
        'Data analysis',
        'Chatbot automation',
        'Custom AI models'
      ],
      useCases: {
        startups: {
          title: 'Essential AI Features',
          description: 'Core AI capabilities for content generation and basic automation',
          benefits: ['Content creation', 'Basic chatbots', 'Data insights']
        },
        smes: {
          title: 'Advanced AI Capabilities',
          description: 'Enhanced AI features with custom model training and advanced analytics',
          benefits: ['Custom training', 'Advanced analytics', 'Business intelligence']
        },
        enterprises: {
          title: 'Enterprise AI Platform',
          description: 'Dedicated infrastructure with custom models and enterprise compliance',
          benefits: ['Dedicated infrastructure', 'Custom models', 'Enterprise compliance']
        }
      },
      color: 'green'
    },
    {
      id: 'n8n',
      name: 'n8n',
      icon: <FaCogs size={32} className="text-orange-600" />,
      image: '/images/services/n8n-integration.svg',
      description: 'Visual workflow automation platform connecting 200+ applications without requiring coding expertise.',
      salesAutomation: 'Creates visual sales workflows connecting CRM, email, and communication tools for seamless automation.',
      capabilities: [
        'No-code automation',
        '200+ integrations',
        'Visual workflow builder',
        'Custom nodes'
      ],
      useCases: {
        startups: {
          title: 'No-Code Workflows',
          description: 'Essential workflow automation without technical complexity',
          benefits: ['Easy setup', 'No coding required', 'Essential integrations']
        },
        smes: {
          title: 'Self-Hosted n8n',
          description: 'Advanced n8n deployment with enhanced security and custom nodes',
          benefits: ['Self-hosted', 'Custom nodes', 'Advanced security']
        },
        enterprises: {
          title: 'Enterprise n8n',
          description: 'On-premises deployment with advanced audit trails and custom development',
          benefits: ['On-premises', 'Audit trails', 'Custom development']
        }
      },
      color: 'orange'
    },
    {
      id: 'make-com',
      name: 'Make.com',
      icon: <FaPlug size={32} className="text-indigo-600" />,
      image: '/images/services/make-com-integration.svg',
      description: 'Powerful automation platform for complex multi-step workflows across hundreds of applications.',
      salesAutomation: 'Builds sophisticated sales funnels with advanced logic, error handling, and multi-channel integration.',
      capabilities: [
        'Visual workflow builder',
        '1000+ app integrations',
        'Advanced logic',
        'Error handling'
      ],
      useCases: {
        startups: {
          title: 'Basic Automation',
          description: 'Essential automation scenarios for growing startups',
          benefits: ['Quick setup', 'Essential scenarios', 'Cost-effective']
        },
        smes: {
          title: 'Advanced Workflows',
          description: 'Complex multi-step workflows with advanced logic and integrations',
          benefits: ['Complex logic', 'Advanced integrations', 'Scalable scenarios']
        },
        enterprises: {
          title: 'Enterprise Automation Hub',
          description: 'Private cloud deployment with unlimited scenarios and enterprise support',
          benefits: ['Private cloud', 'Unlimited scenarios', '24/7 support']
        }
      },
      color: 'indigo'
    },
    {
      id: 'sales-automation',
      name: 'Sales Automation',
      icon: <FaChartLine size={32} className="text-blue-600" />,
      image: '/images/services/sales-automation-integration.svg',
      description: 'Comprehensive sales automation suite covering lead generation, qualification, nurturing, and conversion optimization.',
      salesAutomation: 'End-to-end sales process automation from lead capture to deal closure with intelligent routing and personalization.',
      capabilities: [
        'Lead scoring & routing',
        'Email sequences',
        'CRM integration',
        'Revenue forecasting'
      ],
      useCases: {
        startups: {
          title: 'Essential Sales Tools',
          description: 'Core sales automation for rapid growth and efficient lead management',
          benefits: ['Lead management', 'Email automation', 'CRM sync']
        },
        smes: {
          title: 'Advanced Sales Orchestration',
          description: 'Multi-channel sales automation with predictive analytics and segmentation',
          benefits: ['Predictive analytics', 'Multi-channel', 'Advanced segmentation']
        },
        enterprises: {
          title: 'Enterprise Sales Platform',
          description: 'Global sales automation with compliance, territory management, and advanced analytics',
          benefits: ['Global management', 'Compliance features', 'Advanced analytics']
        }
      },
      color: 'blue'
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
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
            Powerful Integration Suite
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect your business with industry-leading platforms and AI services. Each integration is tailored to your business size and specific automation needs.
          </motion.p>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 h-full">
                <CardContent className="p-6">
                  {/* Header with Icon and Image */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-${integration.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                        {integration.icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-700">{integration.name}</h3>
                    </div>
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image
                        src={integration.image}
                        alt={`${integration.name} integration`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm">{integration.description}</p>

                  {/* Sales Automation Highlight */}
                  <div className={`bg-${integration.color}-50 p-3 rounded-lg mb-4 border border-${integration.color}-100`}>
                    <h4 className={`font-semibold text-${integration.color}-800 mb-1 text-sm`}>Sales Automation:</h4>
                    <p className={`text-${integration.color}-700 text-xs`}>{integration.salesAutomation}</p>
                  </div>

                  {/* Capabilities */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Capabilities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {integration.capabilities.map((capability, i) => (
                        <span key={i} className={`bg-${integration.color}-100 text-${integration.color}-800 text-xs px-2 py-1 rounded-full`}>
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases by Segment */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Business Segments:</h4>
                    
                    {/* Startups */}
                    <div className="bg-green-50 p-2 rounded border border-green-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-green-800 text-xs">🚀 Startups</span>
                        <span className="text-green-700 text-xs font-medium">{integration.useCases.startups.title}</span>
                      </div>
                      <p className="text-green-700 text-xs mb-1">{integration.useCases.startups.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {integration.useCases.startups.benefits.map((benefit, i) => (
                          <span key={i} className="bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* SMEs */}
                    <div className="bg-blue-50 p-2 rounded border border-blue-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-blue-800 text-xs">📈 SMEs</span>
                        <span className="text-blue-700 text-xs font-medium">{integration.useCases.smes.title}</span>
                      </div>
                      <p className="text-blue-700 text-xs mb-1">{integration.useCases.smes.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {integration.useCases.smes.benefits.map((benefit, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Enterprises */}
                    <div className="bg-purple-50 p-2 rounded border border-purple-100">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-purple-800 text-xs">🏢 Enterprise</span>
                        <span className="text-purple-700 text-xs font-medium">{integration.useCases.enterprises.title}</span>
                      </div>
                      <p className="text-purple-700 text-xs mb-1">{integration.useCases.enterprises.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {integration.useCases.enterprises.benefits.map((benefit, i) => (
                          <span key={i} className="bg-purple-100 text-purple-800 text-xs px-1 py-0.5 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link 
                      href="/services" 
                      className={`inline-flex items-center text-${integration.color}-700 hover:text-${integration.color}-900 font-medium text-sm`}
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Ready to Integrate These Powerful Tools?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our expert team will help you choose and implement the right integrations for your business size and specific automation needs.
            </p>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                Schedule Integration Consultation
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

export default ServiceIntegrations;
