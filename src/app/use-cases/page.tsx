import React from 'react';
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  FaUsers, 
  FaShieldAlt, 
  FaHeartbeat, 
  FaCogs, 
  FaBuilding, 
  FaChartLine,
  FaArrowRight,
  FaClock,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaRocket,
  FaCode,
  FaGoogle
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Industry Use Cases | NAYAFlOW - AI Agent Orchestration Solutions",
  description: "Explore comprehensive use cases showcasing how NAYAFlOW's LangGraph orchestration and Google AI SDKs transform operations across SaaS, Finance, Healthcare, Manufacturing, Enterprise, and Research industries.",
  keywords: "AI use cases, LangGraph orchestration, Google AI SDK, multi-agent systems, enterprise automation, industry solutions, AI transformation",
  openGraph: {
    title: "Industry Use Cases | NAYAFlOW - AI Agent Orchestration Solutions",
    description: "Discover how leading organizations leverage NAYAFlOW's AI agent orchestration to achieve measurable business outcomes across industries.",
    type: "website",
  },
};

export default function UseCasesPage() {
  const useCases = [
    {
      id: 'saas-customer-success',
      industry: 'SaaS Customer Success',
      icon: <FaUsers className="w-12 h-12" />,
      problem: 'High churn rates and reactive customer support',
      solution: 'LangGraph-orchestrated AI agents monitor customer health scores, predict churn risk, and trigger personalized retention workflows through Google Workspace integration.',
      outcome: '40% reduction in churn rate, 65% faster issue resolution, $2.3M annual revenue retention improvement',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200',
      implementation: {
        timeline: '6-8 weeks',
        complexity: 'Medium',
        agents: '15-25 specialized agents',
        integrations: ['Salesforce CRM', 'Google Workspace', 'Zendesk', 'Slack']
      },
      technicalDetails: {
        langGraph: 'Multi-agent workflow orchestration for customer journey mapping and automated intervention triggers',
        googleAI: 'Natural language processing for sentiment analysis and predictive churn modeling',
        architecture: 'Event-driven microservices with real-time data streaming and automated escalation protocols'
      },
      caseStudyLink: '/case-studies/saas-customer-success',
      metrics: [
        { label: 'Churn Reduction', value: '40%', icon: '📉' },
        { label: 'Response Time', value: '65% faster', icon: '⚡' },
        { label: 'Revenue Retention', value: '$2.3M', icon: '💰' }
      ]
    },
    {
      id: 'financial-fraud-detection',
      industry: 'Financial Services',
      icon: <FaShieldAlt className="w-12 h-12" />,
      problem: 'Manual fraud detection causing delays and false positives',
      solution: 'Multi-agent LangGraph system processes transactions in real-time, cross-references patterns with Google AI models, and automatically flags suspicious activities with 99.7% accuracy.',
      outcome: '85% faster fraud detection, 92% reduction in false positives, $8.5M prevented losses annually',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
      implementation: {
        timeline: '10-12 weeks',
        complexity: 'High',
        agents: '50-75 specialized agents',
        integrations: ['Core Banking System', 'Google Cloud AI', 'Risk Management Platform', 'Compliance Tools']
      },
      technicalDetails: {
        langGraph: 'Complex decision trees with parallel processing for real-time transaction analysis and pattern recognition',
        googleAI: 'Advanced machine learning models for anomaly detection and behavioral pattern analysis',
        architecture: 'High-throughput streaming architecture with sub-second response times and regulatory compliance'
      },
      caseStudyLink: '/case-studies/financial-fraud-detection',
      metrics: [
        { label: 'Detection Speed', value: '85% faster', icon: '🚀' },
        { label: 'False Positives', value: '92% reduction', icon: '🎯' },
        { label: 'Prevented Losses', value: '$8.5M', icon: '🛡️' }
      ]
    },
    {
      id: 'healthcare-patient-management',
      industry: 'Healthcare',
      icon: <FaHeartbeat className="w-12 h-12" />,
      problem: 'Fragmented patient data and delayed care coordination',
      solution: 'AI agents orchestrated through LangGraph integrate EHR systems, schedule appointments via Google Calendar, and provide real-time patient monitoring with automated care alerts.',
      outcome: '50% improvement in care coordination, 35% reduction in readmissions, 4.8/5 patient satisfaction score',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      borderColor: 'border-red-200',
      implementation: {
        timeline: '12-16 weeks',
        complexity: 'High',
        agents: '30-45 specialized agents',
        integrations: ['EHR Systems', 'Google Workspace', 'Medical Devices', 'Lab Systems']
      },
      technicalDetails: {
        langGraph: 'HIPAA-compliant workflow orchestration with secure patient data handling and care pathway automation',
        googleAI: 'Clinical decision support with natural language processing for medical documentation and alerts',
        architecture: 'Secure, encrypted microservices with real-time monitoring and compliance audit trails'
      },
      caseStudyLink: '/case-studies/healthcare-patient-management',
      metrics: [
        { label: 'Care Coordination', value: '50% improvement', icon: '🏥' },
        { label: 'Readmissions', value: '35% reduction', icon: '📉' },
        { label: 'Patient Satisfaction', value: '4.8/5', icon: '⭐' }
      ]
    },
    {
      id: 'manufacturing-quality-control',
      industry: 'Manufacturing',
      icon: <FaCogs className="w-12 h-12" />,
      problem: 'Inconsistent quality control and reactive maintenance',
      solution: 'LangGraph coordinates AI agents that analyze sensor data, predict equipment failures, and automatically adjust production parameters using Google Cloud AI for predictive maintenance.',
      outcome: '78% reduction in defects, 60% decrease in unplanned downtime, $4.2M annual operational savings',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-200',
      implementation: {
        timeline: '14-18 weeks',
        complexity: 'High',
        agents: '40-60 specialized agents',
        integrations: ['MES Systems', 'IoT Sensors', 'Google Cloud AI', 'ERP Systems']
      },
      technicalDetails: {
        langGraph: 'Industrial IoT orchestration with predictive maintenance workflows and automated quality control protocols',
        googleAI: 'Computer vision and predictive analytics for defect detection and equipment failure prediction',
        architecture: 'Edge computing with cloud integration for real-time processing and historical trend analysis'
      },
      caseStudyLink: '/case-studies/manufacturing-quality-control',
      metrics: [
        { label: 'Defect Reduction', value: '78%', icon: '🔧' },
        { label: 'Downtime Decrease', value: '60%', icon: '⏱️' },
        { label: 'Operational Savings', value: '$4.2M', icon: '💰' }
      ]
    },
    {
      id: 'enterprise-operations',
      industry: 'Enterprise Operations',
      icon: <FaBuilding className="w-12 h-12" />,
      problem: 'Siloed departments and manual approval workflows',
      solution: 'Enterprise-scale LangGraph orchestration connects 500+ AI agents across departments, automating approvals, document processing, and compliance reporting through Google Workspace APIs.',
      outcome: '70% faster approval cycles, 90% reduction in manual tasks, $12M annual efficiency gains',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200',
      implementation: {
        timeline: '16-24 weeks',
        complexity: 'Very High',
        agents: '500+ specialized agents',
        integrations: ['ERP Systems', 'Google Workspace', 'HR Systems', 'Financial Systems']
      },
      technicalDetails: {
        langGraph: 'Enterprise-scale orchestration with complex approval workflows, compliance automation, and cross-departmental coordination',
        googleAI: 'Document processing, intelligent routing, and automated compliance checking with natural language understanding',
        architecture: 'Distributed microservices with enterprise security, audit trails, and scalable infrastructure'
      },
      caseStudyLink: '/case-studies/enterprise-operations',
      metrics: [
        { label: 'Approval Speed', value: '70% faster', icon: '📋' },
        { label: 'Manual Tasks', value: '90% reduction', icon: '🤖' },
        { label: 'Efficiency Gains', value: '$12M', icon: '📈' }
      ]
    },
    {
      id: 'research-consulting',
      industry: 'Research & Consulting',
      icon: <FaChartLine className="w-12 h-12" />,
      problem: 'Time-intensive data analysis and report generation',
      solution: 'LangGraph-managed AI agents automatically gather market data, perform analysis using Google AI models, and generate comprehensive reports with citations and visualizations.',
      outcome: '80% faster research delivery, 95% accuracy in data analysis, 3x increase in client project capacity',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700',
      borderColor: 'border-teal-200',
      implementation: {
        timeline: '8-10 weeks',
        complexity: 'Medium',
        agents: '20-35 specialized agents',
        integrations: ['Data Sources', 'Google AI Platform', 'Visualization Tools', 'Client Portals']
      },
      technicalDetails: {
        langGraph: 'Research workflow orchestration with automated data collection, analysis pipelines, and report generation',
        googleAI: 'Advanced analytics, natural language generation, and intelligent data synthesis for comprehensive reporting',
        architecture: 'Data pipeline architecture with automated quality checks, version control, and client delivery systems'
      },
      caseStudyLink: '/case-studies/research-consulting',
      metrics: [
        { label: 'Research Speed', value: '80% faster', icon: '📊' },
        { label: 'Data Accuracy', value: '95%', icon: '🎯' },
        { label: 'Project Capacity', value: '3x increase', icon: '📈' }
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6 text-blue-700">
              Industry Use Cases
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl mb-8">
              Discover comprehensive implementations of NAYAFlOW's AI agent orchestration across industries. 
              Each use case showcases real-world applications of LangGraph coordination and Google AI SDKs 
              delivering measurable business outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <FaCode className="w-4 h-4 mr-2" />
                LangGraph Orchestration
              </div>
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <FaGoogle className="w-4 h-4 mr-2" />
                Google AI SDKs
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <FaRocket className="w-4 h-4 mr-2" />
                Multi-Agent Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={useCase.id} className={`${useCase.bgColor} rounded-2xl p-8 md:p-12 border-2 ${useCase.borderColor}`}>
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-8">
                  <div className={`bg-gradient-to-r ${useCase.color} p-4 rounded-xl text-white`}>
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${useCase.textColor}`}>
                      {useCase.industry}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {useCase.problem}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={useCase.caseStudyLink}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${useCase.color} text-white rounded-full font-medium transition-all hover:shadow-lg`}
                    >
                      View Case Study
                      <FaExternalLinkAlt className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Solution & Outcome */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">AI Solution</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Measurable Outcomes</h3>
                      <p className={`font-medium ${useCase.textColor} leading-relaxed`}>
                        {useCase.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {useCase.metrics.map((metric, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{metric.icon}</span>
                              <span className="text-gray-600">{metric.label}</span>
                            </div>
                            <span className={`font-bold text-lg ${useCase.textColor}`}>
                              {metric.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Implementation Details */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaClock className="w-5 h-5 mr-2 text-blue-600" />
                      Implementation Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-medium">{useCase.implementation.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Complexity:</span>
                        <span className="font-medium">{useCase.implementation.complexity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">AI Agents:</span>
                        <span className="font-medium">{useCase.implementation.agents}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-gray-600 text-sm">Key Integrations:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {useCase.implementation.integrations.map((integration, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Architecture */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaCode className="w-5 h-5 mr-2 text-blue-600" />
                      Technical Architecture
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-blue-700 mb-1">LangGraph Orchestration</h4>
                        <p className="text-sm text-gray-600">{useCase.technicalDetails.langGraph}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-700 mb-1">Google AI Integration</h4>
                        <p className="text-sm text-gray-600">{useCase.technicalDetails.googleAI}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-700 mb-1">System Architecture</h4>
                        <p className="text-sm text-gray-600">{useCase.technicalDetails.architecture}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join leading organizations using NAYAFlOW's AI agent orchestration to achieve measurable business outcomes. 
              Schedule a consultation to explore how our LangGraph and Google AI solutions can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/yasirali23/intro-call-45-min"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
                <FaArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-700 rounded-full font-bold text-lg transition-colors"
              >
                View Case Studies
                <FaExternalLinkAlt className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
