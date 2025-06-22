"use client";

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      billingPeriod: "per month",
      description: "Perfect for small businesses looking to automate basic workflows.",
      features: [
        "Up to 50,000 AI agents",
        "5 custom agent types",
        "Basic orchestration capabilities",
        "Standard security features",
        "Email support",
        "99.5% uptime SLA"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$5,999",
      billingPeriod: "per month",
      description: "Ideal for growing businesses with complex automation needs.",
      features: [
        "Up to 250,000 AI agents",
        "15 custom agent types",
        "Advanced orchestration logic",
        "Enhanced security & compliance",
        "Priority email & phone support",
        "99.9% uptime SLA",
        "Dedicated success manager"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      billingPeriod: "",
      description: "For large organizations requiring unlimited scale and customization.",
      features: [
        "Unlimited AI agents",
        "Unlimited custom agent types",
        "Enterprise-grade orchestration",
        "Custom security & compliance",
        "24/7 dedicated support",
        "99.99% uptime SLA",
        "Dedicated engineering team",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      highlighted: false
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
            Transparent Pricing for Every Scale
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the plan that fits your enterprise automation needs, with flexible scaling options as you grow.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg ${plan.highlighted ? 'ring-2 ring-blue-500' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className={`p-6 ${plan.highlighted ? 'bg-blue-500 text-white' : 'bg-blue-100'}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.billingPeriod && <span className="ml-1 text-sm">{plan.billingPeriod}</span>}
                </div>
                <p className="text-sm">{plan.description}</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={index === 2 ? "/contact" : "/signup"} 
                  className={`w-full py-3 rounded-lg font-medium text-center block transition-colors ${
                    plan.highlighted 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer tailored enterprise solutions for organizations with specific requirements. Our team will work with you to design a custom plan.
          </p>
          <Link 
            href="https://cal.com/yasirali23/intro-call-45-min" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 