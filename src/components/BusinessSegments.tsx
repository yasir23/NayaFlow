"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaBuilding, FaQuoteLeft, FaClock, FaDollarSign, FaShieldAlt } from 'react-icons/fa';

const BusinessSegments = () => {
  const segments = [
    {
      id: 'startups',
      title: 'Startups',
      icon: <FaRocket size={40} className="text-green-600" />,
      subtitle: 'Rapid Deployment & Cost-Effective Automation',
      description: 'Get your AI automation up and running in weeks, not months. Perfect for lean teams that need maximum impact with minimal investment.',
      bgGradient: 'from-green-50 to-emerald-100',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      accentColor: 'text-green-600',
      features: [
        {
          icon: <FaClock size={20} className="text-green-600" />,
          title: 'Quick Setup',
          description: '2-4 week deployment with immediate ROI'
        },
        {
          icon: <FaDollarSign size={20} className="text-green-600" />,
          title: 'Budget-Friendly',
          description: 'Affordable pricing that scales with growth'
        },
        {
          icon: <FaRocket size={20} className="text-green-600" />,
          title: 'Growth-Ready',
          description: 'Architecture designed to scale with your success'
        }
      ],
      testimonial: {
        quote: "NAYAFlOW helped us automate our entire sales pipeline in just 3 weeks. We've seen a 75% faster lead qualification process and 40% higher conversion rates. It's been a game-changer for our startup.",
        author: "Sarah Chen",
        position: "CEO, TechStart Solutions",
        company: "Y Combinator Startup",
        metrics: [
          { label: "Setup Time", value: "3 weeks" },
          { label: "Lead Qualification", value: "75% faster" },
          { label: "Conversion Rate", value: "+40%" }
        ]
      }
    },
    {
      id: 'smes',
      title: 'SMEs',
      icon: <FaChartLine size={40} className="text-blue-600" />,
      subtitle: 'Scalable Solutions & Growth-Focused Automation',
      description: 'Advanced workflows that grow with your business. Multi-department integration with the flexibility to adapt as your needs evolve.',
      bgGradient: 'from-blue-50 to-indigo-100',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      accentColor: 'text-blue-600',
      features: [
        {
          icon: <FaChartLine size={20} className="text-blue-600" />,
          title: 'Advanced Workflows',
          description: 'Multi-channel orchestration across departments'
        },
        {
          icon: <FaClock size={20} className="text-blue-600" />,
          title: 'Flexible Scaling',
          description: 'Adapt and expand as your business grows'
        },
        {
          icon: <FaDollarSign size={20} className="text-blue-600" />,
          title: 'Cost Optimization',
          description: 'Reduce operational costs while increasing efficiency'
        }
      ],
      testimonial: {
        quote: "Our customer response time improved by 3x after implementing NAYAFlOW's automation across our sales, support, and operations teams. The ROI was clear within 2 months, and we've reduced operational costs by 60%.",
        author: "Michael Rodriguez",
        position: "Operations Director",
        company: "GrowthTech Industries",
        metrics: [
          { label: "Response Time", value: "3x faster" },
          { label: "ROI Timeline", value: "2 months" },
          { label: "Cost Reduction", value: "60%" }
        ]
      }
    },
    {
      id: 'enterprises',
      title: 'Enterprises',
      icon: <FaBuilding size={40} className="text-purple-600" />,
      subtitle: 'Comprehensive Orchestration & Advanced Security',
      description: 'Enterprise-grade solutions with unlimited customization, advanced governance, and bank-level security for global operations.',
      bgGradient: 'from-purple-50 to-violet-100',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      accentColor: 'text-purple-600',
      features: [
        {
          icon: <FaBuilding size={20} className="text-purple-600" />,
          title: 'Global Scale',
          description: 'Orchestrate millions of agents across regions'
        },
        {
          icon: <FaShieldAlt size={20} className="text-purple-600" />,
          title: 'Enterprise Security',
          description: 'Bank-level encryption and compliance controls'
        },
        {
          icon: <FaClock size={20} className="text-purple-600" />,
          title: 'Custom Solutions',
          description: 'Unlimited customization for unique requirements'
        }
      ],
      testimonial: {
        quote: "NAYAFlOW's enterprise orchestration platform has transformed our global operations. We've achieved $12M in annual savings while maintaining 99.9% uptime and 95% compliance improvement across all regions.",
        author: "Jennifer Walsh",
        position: "Chief Technology Officer",
        company: "Fortune 500 Financial Services",
        metrics: [
          { label: "Annual Savings", value: "$12M" },
          { label: "System Uptime", value: "99.9%" },
          { label: "Compliance Score", value: "+95%" }
        ]
      }
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tailored Solutions for Every Business Size
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From rapid startup deployment to enterprise-grade orchestration, discover how businesses like yours are transforming with AI automation.
          </motion.p>
        </div>

        <div className="space-y-16">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.id}
              className={`bg-gradient-to-br ${segment.bgGradient} rounded-2xl p-8 md:p-12 border ${segment.borderColor} shadow-lg`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Segment Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    {segment.icon}
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-bold ${segment.textColor}`}>
                        {segment.title}
                      </h3>
                      <p className={`text-lg ${segment.accentColor} font-medium`}>
                        {segment.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {segment.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {segment.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        {feature.icon}
                        <div>
                          <h4 className={`font-semibold ${segment.textColor}`}>
                            {feature.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Testimonial */}
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-200">
                  <div className="flex items-start space-x-4 mb-6">
                    <FaQuoteLeft size={24} className={segment.accentColor} />
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                      "{segment.testimonial.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className={`font-semibold ${segment.textColor}`}>
                          {segment.testimonial.author}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {segment.testimonial.position}
                        </p>
                        <p className={`text-sm ${segment.accentColor} font-medium`}>
                          {segment.testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {segment.testimonial.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-gray-50 rounded-lg p-3">
                          <p className={`text-lg font-bold ${segment.accentColor}`}>
                            {metric.value}
                          </p>
                          <p className="text-xs text-gray-600">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already saving time and money with AI automation. 
            Let's discuss which solution is right for your business size and goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://cal.com/yasirali23/intro-call-45-min"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-700 rounded-full font-bold text-lg hover:bg-blue-100 transition-colors"
            >
              Explore All Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSegments;
