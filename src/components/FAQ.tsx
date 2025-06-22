"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly is AI agent orchestration?",
      answer: "AI agent orchestration is the process of coordinating, managing, and optimizing multiple AI agents to work together efficiently. Our platform enables enterprises to deploy and coordinate millions of specialized AI agents that can automate complex business processes, make decisions based on real-time data, and seamlessly hand off tasks between different types of agents."
    },
    {
      question: "How many AI agents can NAYAFlOW manage simultaneously?",
      answer: "NAYAFlOW's platform is designed for enterprise-scale operations and can orchestrate millions of AI agents concurrently. Our architecture is built to handle massive parallelization with minimal latency, ensuring that even the most complex automation workflows can be executed efficiently."
    },
    {
      question: "What types of processes can be automated with your platform?",
      answer: "Our platform can automate a wide range of business processes across departments including customer service, sales, marketing, HR, finance, operations, and IT. Common use cases include document processing, customer query handling, fraud detection, inventory management, compliance monitoring, and data analysis. If a process involves decision-making based on data or following defined workflows, it can likely be automated with our platform."
    },
    {
      question: "How does NAYAFlOW integrate with our existing systems?",
      answer: "NAYAFlOW provides comprehensive API-based integration capabilities that connect with most enterprise systems including CRM platforms, ERP systems, databases, and custom applications. We offer pre-built connectors for popular enterprise software, as well as custom integration services for specialized systems. Our platform is designed to work alongside your existing infrastructure rather than replacing it."
    },
    {
      question: "What security measures does NAYAFlOW implement?",
      answer: "Security is paramount in our platform. We implement bank-level encryption for data at rest and in transit, role-based access controls, comprehensive audit logging, and regular security audits. Our platform is compliant with major security standards including SOC 2, GDPR, HIPAA, and ISO 27001. For enterprise clients, we offer custom security configurations to meet specific compliance requirements."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on the complexity of your automation needs and the scale of deployment. For standard implementations, our clients typically see their first automated workflows live within 4-6 weeks. Enterprise-wide deployments with complex integrations may take 3-6 months. Our implementation team works closely with your technical teams to ensure smooth deployment and knowledge transfer."
    },
    {
      question: "Do you offer custom AI agent development?",
      answer: "Yes, we specialize in developing custom AI agents tailored to your specific business processes and requirements. Our team of AI specialists and domain experts can create specialized agents that understand your industry terminology, comply with relevant regulations, and effectively automate your unique workflows. These custom agents are designed to integrate seamlessly with our orchestration platform."
    },
    {
      question: "How do you measure ROI for AI agent orchestration?",
      answer: "We work with clients to establish clear KPIs for measuring ROI, typically including metrics like time saved, error reduction, cost savings, throughput increases, and customer satisfaction improvements. Our platform includes comprehensive analytics that track these metrics in real-time. On average, our enterprise clients see ROI within 6-9 months of full implementation, with 300-500% ROI over a three-year period."
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get answers to common questions about NAYAFlOW's AI agent orchestration platform.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <button 
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-blue-700">{faq.question}</h3>
                <span className="text-blue-500 ml-4">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              {openIndex === index && (
                <motion.div 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <a 
            href="https://cal.com/yasirali23/intro-call-45-min" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 