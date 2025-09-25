"use client";

import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaChartLine, FaLock, FaPlug, FaUsersCog, FaHandshake, FaCogs, FaBuilding } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBrain size={36} className="text-blue-500" />,
      title: "Intelligent Orchestration",
      description: "Our platform dynamically routes tasks between millions of specialized AI agents, ensuring optimal resource allocation and maximum efficiency."
    },
    {
      icon: <FaRobot size={36} className="text-blue-500" />,
      title: "Custom Agent Development",
      description: "We design and deploy specialized AI agents tailored to your unique business processes and industry-specific requirements."
    },
    {
      icon: <FaChartLine size={36} className="text-blue-500" />,
      title: "Performance Analytics",
      description: "Comprehensive dashboards provide real-time insights into agent performance, task completion rates, and system efficiency."
    },
    {
      icon: <FaLock size={36} className="text-blue-500" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and comprehensive access controls keep your data and AI operations secure at all times."
    },
    {
      icon: <FaPlug size={36} className="text-blue-500" />,
      title: "Seamless Integration",
      description: "Connect with existing enterprise systems and workflows through our extensive API library and pre-built connectors."
    },
    {
      icon: <FaUsersCog size={36} className="text-blue-500" />,
      title: "Human-AI Collaboration",
      description: "Empower your workforce with AI agents that enhance human capabilities rather than replace them, creating effective hybrid teams."
    },
    {
      icon: <FaHandshake size={36} className="text-green-500" />,
      title: "Sales Automation",
      description: "Automate your entire sales pipeline from lead generation to conversion with AI-powered qualification, nurturing, and closing processes."
    },
    {
      icon: <FaCogs size={36} className="text-orange-500" />,
      title: "No-Code Integrations",
      description: "Connect with 1000+ applications using visual workflow builders like n8n and Make.com - no technical expertise required."
    },
    {
      icon: <FaBuilding size={36} className="text-purple-500" />,
      title: "Multi-Segment Support",
      description: "Tailored solutions for every business size - from rapid startup deployment to enterprise-grade orchestration with advanced governance."
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI Automation for Every Business Size
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From startup sales automation to enterprise orchestration - NAYAFlOW delivers tailored AI solutions that scale with your business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 


