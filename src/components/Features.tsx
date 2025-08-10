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
    }
  ];

  return (
    <section className="w-full py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Revolutionize Your Enterprise with AI Orchestration
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            NAYAFlOW orchestrates millions of specialized AI agents to automate complex business processes at unprecedented scale and efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 
