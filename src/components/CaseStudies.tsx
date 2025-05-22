"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechCorp Global",
      logo: "/logos/techcorp.svg", // This would be placeholder in a real implementation
      industry: "Financial Services",
      result: "$3.2M in operational savings",
      description: "Implemented 500,000+ AI agents to automate customer service, fraud detection, and regulatory compliance processes.",
      metrics: [
        { label: "Efficiency Increase", value: "78%" },
        { label: "Response Time", value: "-92%" },
        { label: "Customer Satisfaction", value: "+42%" }
      ]
    },
    {
      company: "InnoHealth",
      logo: "/logos/innohealth.svg", // This would be placeholder in a real implementation
      industry: "Healthcare",
      result: "4,500 hours saved monthly",
      description: "Deployed a network of specialized medical AI agents for patient intake, diagnostic assistance, and administrative tasks.",
      metrics: [
        { label: "Documentation Time", value: "-65%" },
        { label: "Diagnostic Accuracy", value: "+28%" },
        { label: "Staff Productivity", value: "+52%" }
      ]
    },
    {
      company: "LogiSupply Inc.",
      logo: "/logos/logisupply.svg", // This would be placeholder in a real implementation
      industry: "Supply Chain",
      result: "99.8% inventory accuracy",
      description: "Built an orchestrated system of AI agents to optimize inventory management, demand forecasting, and logistics operations.",
      metrics: [
        { label: "Stockouts", value: "-87%" },
        { label: "Shipping Errors", value: "-94%" },
        { label: "Fulfillment Speed", value: "+63%" }
      ]
    }
  ];

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