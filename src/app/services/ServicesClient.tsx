"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Motion presets
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState("startups");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-bold tracking-tight text-blue-700 mb-6"
          >
            AI Automation Services
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-8"
          >
            From startups to enterprises, NAYAFLOW delivers tailored automation
            solutions with OpenAI, LangGraph, Google SDK, n8n, and Make.com
            integrations.
          </motion.p>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm hover:bg-gray-100 transition"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Tailored Solutions by Business Size
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-12">
              Whether you're a startup, SME, or enterprise, our AI automation
              services adapt to your stage and scale.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Startups",
                colorClass: "green",
                text: "Rapid deployment, affordable pricing, and integrations to grow from day one.",
                points: ["Setup in 2–4 weeks", "Cost-effective plans", "Essential automation"],
                icon: "🚀",
              },
              {
                title: "SMEs",
                colorClass: "blue",
                text: "Flexible, scalable workflows for growing businesses needing advanced automation.",
                points: ["Multi-department workflows", "Analytics & scaling", "Advanced integrations"],
                icon: "📈",
              },
              {
                title: "Enterprises",
                colorClass: "purple",
                text: "Enterprise-grade orchestration with compliance, security, and unlimited scalability.",
                points: ["Compliance features", "Custom workflows", "24/7 dedicated support"],
                icon: "🏢",
              },
            ].map((seg, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className={`p-8 rounded-xl ${
                  seg.colorClass === "green" 
                    ? "bg-green-50 border-green-100" 
                    : seg.colorClass === "blue" 
                    ? "bg-blue-50 border-blue-100" 
                    : "bg-purple-50 border-purple-100"
                } border shadow-lg transition-all hover:shadow-xl`}
              >
                <div className="text-4xl mb-4">{seg.icon}</div>
                <h3 className={`text-2xl font-bold ${
                  seg.colorClass === "green" 
                    ? "text-green-700" 
                    : seg.colorClass === "blue" 
                    ? "text-blue-700" 
                    : "text-purple-700"
                } mb-4`}>
                  {seg.title}
                </h3>
                <p className="text-gray-600 mb-6">{seg.text}</p>
                <ul className="text-left text-sm text-gray-600 space-y-2">
                  {seg.points.map((p, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`${
                        seg.colorClass === "green" 
                          ? "text-green-500" 
                          : seg.colorClass === "blue" 
                          ? "text-blue-500" 
                          : "text-purple-500"
                      } mr-2`}>✓</span> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services & Integrations */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Our Services & Integrations
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We connect your business with industry-leading platforms and tools
              for seamless automation.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 bg-gray-100 p-2 rounded-lg">
                <TabsTrigger 
                  value="startups" 
                  className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md py-3"
                >
                  Startups
                </TabsTrigger>
                <TabsTrigger 
                  value="smes" 
                  className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md py-3"
                >
                  SMEs
                </TabsTrigger>
                <TabsTrigger 
                  value="enterprises" 
                  className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md py-3"
                >
                  Enterprises
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="startups" className="focus-visible:outline-none">
                <ServiceTab 
                  title="Startup Automation Package" 
                  description="Perfect for new businesses looking to automate essential processes from day one."
                  colorClass="green"
                  features={[
                    "CRM & Email Marketing Integration",
                    "Basic Sales Automation",
                    "Social Media Management",
                    "Customer Support Setup",
                    "Google Workspace Automation"
                  ]}
                  integrations={["HubSpot", "Mailchimp", "Google Sheets", "Slack", "OpenAI API"]}
                />
              </TabsContent>
              
              <TabsContent value="smes" className="focus-visible:outline-none">
                <ServiceTab 
                  title="SME Automation Suite" 
                  description="Comprehensive automation for growing businesses with multiple departments."
                  colorClass="blue"
                  features={[
                    "Multi-department Workflow Automation",
                    "Advanced Data Processing",
                    "Custom API Integrations",
                    "Analytics & Reporting Dashboard",
                    "Team Collaboration Setup"
                  ]}
                  integrations={["Salesforce", "n8n", "Make.com", "Google SDK", "MySQL", "OpenAI API"]}
                />
              </TabsContent>
              
              <TabsContent value="enterprises" className="focus-visible:outline-none">
                <ServiceTab 
                  title="Enterprise Automation Platform" 
                  description="End-to-end automation solutions with enterprise-grade security and scalability."
                  colorClass="purple"
                  features={[
                    "Custom LangGraph Workflows",
                    "Enterprise System Integration",
                    "Compliance & Security Management",
                    "Real-time Analytics & Monitoring",
                    "Dedicated Support & Training"
                  ]}
                  integrations={["LangGraph", "SAP", "Oracle", "Snowflake", "Azure", "AWS", "OpenAI Enterprise"]}
                />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Our Process
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We follow a structured approach to deliver automation solutions that perfectly fit your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We analyze your business processes and identify automation opportunities." },
              { step: "02", title: "Planning", desc: "Our team designs a customized automation strategy tailored to your needs." },
              { step: "03", title: "Implementation", desc: "We build and integrate the automation solutions with your existing systems." },
              { step: "04", title: "Support", desc: "We provide ongoing maintenance and optimization for your automation workflows." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-center text-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="max-w-xl mx-auto text-blue-100 mb-8">
            Schedule a free consultation and discover how NAYAFLOW can transform
            your operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-semibold text-blue-600 shadow hover:bg-gray-100 transition"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex h-12 items-center justify-center rounded-md border border-blue-300 px-8 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

/* Service Tab Component */
function ServiceTab({ 
  title, 
  description, 
  colorClass, 
  features,
  integrations 
}: { 
  title: string; 
  description: string; 
  colorClass: string;
  features: string[];
  integrations: string[];
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <h3 className={`text-2xl font-bold ${
            colorClass === "green" 
              ? "text-green-700" 
              : colorClass === "blue" 
              ? "text-blue-700" 
              : "text-purple-700"
          } mb-4`}>{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className={`${
                  colorClass === "green" 
                    ? "text-green-500" 
                    : colorClass === "blue" 
                    ? "text-blue-500" 
                    : "text-purple-500"
                } mr-2 mt-1`}>✓</span> 
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Included Integrations</h4>
          <div className="flex flex-wrap gap-3">
            {integrations.map((integration, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`px-4 py-2 ${
                  colorClass === "green" 
                    ? "bg-green-100 text-green-700" 
                    : colorClass === "blue" 
                    ? "bg-blue-100 text-blue-700" 
                    : "bg-purple-100 text-purple-700"
                } rounded-full text-sm font-medium`}
              >
                {integration}
              </motion.span>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Why Choose This Package?</h4>
            <p className="text-gray-600">
              Our {title.toLowerCase()} is designed to provide exactly what your business needs at its current stage, 
              with the flexibility to scale as you grow.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
