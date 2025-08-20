"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaUsers, 
  FaShieldAlt, 
  FaHeartbeat, 
  FaCogs, 
  FaBuilding, 
  FaChartLine,
  FaArrowRight
} from 'react-icons/fa';

const UseCases = () => {
  const useCases = [
    {
      id: 'saas-customer-success',
      industry: 'SaaS Customer Success',
      icon: <FaUsers className="w-8 h-8" />,
      problem: 'High churn rates and reactive customer support',
      solution: 'LangGraph-orchestrated AI agents monitor customer health scores, predict churn risk, and trigger personalized retention workflows through Google Workspace integration.',
      outcome: '40% reduction in churn rate, 65% faster issue resolution, $2.3M annual revenue retention improvement',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200'
    },
    {
      id: 'financial-fraud-detection',
      industry: 'Financial Services',
      icon: <FaShieldAlt className="w-8 h-8" />,
      problem: 'Manual fraud detection causing delays and false positives',
      solution: 'Multi-agent LangGraph system processes transactions in real-time, cross-references patterns with Google AI models, and automatically flags suspicious activities with 99.7% accuracy.',
      outcome: '85% faster fraud detection, 92% reduction in false positives, $8.5M prevented losses annually',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200'
    },
    {
      id: 'healthcare-patient-management',
      industry: 'Healthcare',
      icon: <FaHeartbeat className="w-8 h-8" />,
      problem: 'Fragmented patient data and delayed care coordination',
      solution: 'AI agents orchestrated through LangGraph integrate EHR systems, schedule appointments via Google Calendar, and provide real-time patient monitoring with automated care alerts.',
      outcome: '50% improvement in care coordination, 35% reduction in readmissions, 4.8/5 patient satisfaction score',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      borderColor: 'border-red-200'
    },
    {
      id: 'manufacturing-quality-control',
      industry: 'Manufacturing',
      icon: <FaCogs className="w-8 h-8" />,
      problem: 'Inconsistent quality control and reactive maintenance',
      solution: 'LangGraph coordinates AI agents that analyze sensor data, predict equipment failures, and automatically adjust production parameters using Google Cloud AI for predictive maintenance.',
      outcome: '78% reduction in defects, 60% decrease in unplanned downtime, $4.2M annual operational savings',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-200'
    },
    {
      id: 'enterprise-operations',
      industry: 'Enterprise Operations',
      icon: <FaBuilding className="w-8 h-8" />,
      problem: 'Siloed departments and manual approval workflows',
      solution: 'Enterprise-scale LangGraph orchestration connects 500+ AI agents across departments, automating approvals, document processing, and compliance reporting through Google Workspace APIs.',
      outcome: '70% faster approval cycles, 90% reduction in manual tasks, $12M annual efficiency gains',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200'
    },
    {
      id: 'research-consulting',
      industry: 'Research & Consulting',
      icon: <FaChartLine className="w-8 h-8" />,
      problem: 'Time-intensive data analysis and report generation',
      solution: 'LangGraph-managed AI agents automatically gather market data, perform analysis using Google AI models, and generate comprehensive reports with citations and visualizations.',
      outcome: '80% faster research delivery, 95% accuracy in data analysis, 3x increase in client project capacity',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700',
      borderColor: 'border-teal-200'
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industry Use Cases
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how leading organizations leverage NayaFlow's LangGraph orchestration and Google AI SDKs 
            to transform their operations with measurable results.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              🔗 LangGraph Orchestration
            </div>
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
              🤖 Google AI SDKs
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              ⚡ Multi-Agent Systems
            </div>
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              className={`${useCase.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${useCase.borderColor} group cursor-pointer`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              {/* Icon and Industry */}
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${useCase.color} p-3 rounded-lg text-white mr-4`}>
                  {useCase.icon}
                </div>
                <h3 className={`text-lg font-bold ${useCase.textColor}`}>
                  {useCase.industry}
                </h3>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Business Problem</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {useCase.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">AI Solution</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {useCase.solution}
                </p>
              </div>

              {/* Outcome */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Measurable Outcomes</h4>
                <p className={`text-sm font-medium ${useCase.textColor} leading-relaxed`}>
                  {useCase.outcome}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className={`flex items-center ${useCase.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                <span className="text-sm font-medium">Learn more</span>
                <FaArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join leading organizations using NayaFlow's AI agent orchestration to achieve measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/yasirali23/intro-call-45-min"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors text-lg shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full font-medium transition-colors text-lg"
              >
                View All Use Cases
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
