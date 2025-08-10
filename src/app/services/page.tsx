import React from 'react';
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: "AI Automation Services | NAYAFlOW - Startups, SMEs & Enterprises",
  description: "Comprehensive AI automation services for startups, SMEs, and enterprises. Sales automation, LangGraph, Google SDK, OpenAI SDK, n8n, and make.com integrations.",
};

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-700">
                AI Automation Services for Every Business
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                From startups to enterprises, we deliver tailored AI automation solutions with sales automation, LangGraph, Google SDK, OpenAI SDK, n8n, and make.com integrations.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
              >
                Get Started Today
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Segments Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-blue-700">
              Tailored Solutions for Every Business Size
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl">
              Whether you're a startup looking for rapid deployment, an SME scaling operations, or an enterprise requiring comprehensive orchestration, we have the perfect solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Startups */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 shadow-md border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-800">Startups</h3>
              <p className="text-gray-700 mb-6">
                Rapid deployment, cost-effective automation solutions to accelerate growth and streamline operations from day one.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quick setup in 2-4 weeks</li>
                <li>• Affordable pricing plans</li>
                <li>• Essential integrations</li>
                <li>• Growth-ready architecture</li>
              </ul>
            </div>

            {/* SMEs */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 shadow-md border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">SMEs</h3>
              <p className="text-gray-700 mb-6">
                Scalable solutions designed for growing businesses that need flexibility and advanced automation capabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Advanced workflow automation</li>
                <li>• Multi-department integration</li>
                <li>• Scalable infrastructure</li>
                <li>• Performance analytics</li>
              </ul>
            </div>

            {/* Enterprises */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 shadow-md border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Enterprises</h3>
              <p className="text-gray-700 mb-6">
                Comprehensive orchestration with advanced security, compliance, and unlimited customization capabilities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Enterprise-grade security</li>
                <li>• Custom compliance features</li>
                <li>• Unlimited agent orchestration</li>
                <li>• 24/7 dedicated support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Integrations by Business Segment */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-blue-700">
              Powerful Integrations for Every Business
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl">
              Our comprehensive suite of integrations ensures seamless automation across all your business processes.
            </p>
          </div>

          <Tabs defaultValue="startups" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <TabsTrigger value="startups" className="px-6 py-4 bg-green-50 text-green-800 data-[state=active]:bg-green-100">
                Startup Solutions
              </TabsTrigger>
              <TabsTrigger value="smes" className="px-6 py-4 bg-blue-50 text-blue-800 data-[state=active]:bg-blue-100">
                SME Solutions
              </TabsTrigger>
              <TabsTrigger value="enterprises" className="px-6 py-4 bg-purple-50 text-purple-800 data-[state=active]:bg-purple-100">
                Enterprise Solutions
              </TabsTrigger>
            </TabsList>

            {/* Startup Solutions */}
            <TabsContent value="startups" className="space-y-6">
              <Card>
                <CardContent className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Startup-Focused Automation</h3>
                  <p className="text-gray-600 mb-8">
                    Get your startup moving fast with essential automation tools that grow with your business. Focus on what matters most while we handle the repetitive tasks.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Sales Automation */}
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">📈</span>
                      </div>
                      <h4 className="font-bold text-green-800 mb-3">Sales Automation</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Automate lead qualification, follow-ups, and customer onboarding to accelerate your sales cycle.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Lead scoring & routing</li>
                        <li>• Email sequences</li>
                        <li>• CRM integration</li>
                      </ul>
                    </div>

                    {/* OpenAI SDK */}
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🤖</span>
                      </div>
                      <h4 className="font-bold text-green-800 mb-3">OpenAI Integration</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Leverage GPT models for content generation, customer support, and intelligent decision-making.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Content generation</li>
                        <li>• Chatbot automation</li>
                        <li>• Data analysis</li>
                      </ul>
                    </div>

                    {/* n8n Integration */}
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🔗</span>
                      </div>
                      <h4 className="font-bold text-green-800 mb-3">n8n Workflows</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Visual workflow automation to connect your favorite tools without coding expertise.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• No-code automation</li>
                        <li>• 200+ integrations</li>
                        <li>• Custom workflows</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-3 text-green-800">Startup Success Story</h4>
                    <p className="text-sm text-gray-600">
                      "TechStart Inc. reduced their customer onboarding time by 75% and increased lead conversion by 40% using our startup automation package. They went from manual processes to fully automated workflows in just 3 weeks."
                    </p>
                    <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500">
                      <span>• 75% faster onboarding</span>
                      <span>• 40% higher conversion</span>
                      <span>• 3-week implementation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SME Solutions */}
            <TabsContent value="smes" className="space-y-6">
              <Card>
                <CardContent className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">SME Growth Acceleration</h3>
                  <p className="text-gray-600 mb-8">
                    Scale your operations efficiently with advanced automation that adapts to your growing business needs. Perfect for companies ready to take the next step.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Advanced Sales Automation */}
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🎯</span>
                      </div>
                      <h4 className="font-bold text-blue-800 mb-3">Advanced Sales Automation</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Multi-channel sales orchestration with predictive analytics and advanced customer segmentation.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Predictive lead scoring</li>
                        <li>• Multi-channel campaigns</li>
                        <li>• Revenue forecasting</li>
                      </ul>
                    </div>

                    {/* LangGraph Integration */}
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🧠</span>
                      </div>
                      <h4 className="font-bold text-blue-800 mb-3">LangGraph Orchestration</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Complex multi-agent workflows with state management for sophisticated business processes.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Multi-agent coordination</li>
                        <li>• State management</li>
                        <li>• Complex workflows</li>
                      </ul>
                    </div>

                    {/* Google SDK */}
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🌐</span>
                      </div>
                      <h4 className="font-bold text-blue-800 mb-3">Google Workspace Integration</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Seamless integration with Google services for document automation and collaboration.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Gmail automation</li>
                        <li>• Sheets integration</li>
                        <li>• Calendar management</li>
                      </ul>
                    </div>

                    {/* Make.com Integration */}
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">⚡</span>
                      </div>
                      <h4 className="font-bold text-blue-800 mb-3">Make.com Automation</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Visual automation platform for complex multi-step workflows across hundreds of applications.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Visual workflow builder</li>
                        <li>• 1000+ app integrations</li>
                        <li>• Advanced logic</li>
                      </ul>
                    </div>

                    {/* Enhanced OpenAI */}
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🚀</span>
                      </div>
                      <h4 className="font-bold text-blue-800 mb-3">Enhanced AI Capabilities</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Advanced AI features including custom model fine-tuning and specialized business applications.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Custom model training</li>
                        <li>• Advanced analytics</li>
                        <li>• Business intelligence</li>
                      </ul>
                    </div>

                    {/* Advanced n8n */}
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🔧</span>
                      </div>
                      <h4 className="font-bold text-blue-800 mb-3">Enterprise n8n</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Self-hosted n8n with advanced security, custom nodes, and enterprise-grade reliability.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Self-hosted deployment</li>
                        <li>• Custom node development</li>
                        <li>• Advanced security</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-3 text-blue-800">SME Success Story</h4>
                    <p className="text-sm text-gray-600">
                      "GrowthCorp scaled from 50 to 200 employees while maintaining operational efficiency using our SME automation suite. They achieved 60% cost reduction in manual processes and 3x faster customer response times."
                    </p>
                    <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500">
                      <span>• 60% cost reduction</span>
                      <span>• 3x faster responses</span>
                      <span>• 4x team scaling</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enterprise Solutions */}
            <TabsContent value="enterprises" className="space-y-6">
              <Card>
                <CardContent className="p-8 bg-white rounded-xl shadow-md border border-gray-200">
                  <h3 className="text-2xl font-bold text-purple-800 mb-6">Enterprise-Grade Orchestration</h3>
                  <p className="text-gray-600 mb-8">
                    Comprehensive AI automation platform with unlimited scalability, advanced security, and complete customization for large organizations.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Enterprise Sales Automation */}
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🏢</span>
                      </div>
                      <h4 className="font-bold text-purple-800 mb-3">Enterprise Sales Orchestration</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Global sales automation with compliance, territory management, and advanced analytics.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Global territory management</li>
                        <li>• Compliance automation</li>
                        <li>• Advanced reporting</li>
                      </ul>
                    </div>

                    {/* Advanced LangGraph */}
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🧬</span>
                      </div>
                      <h4 className="font-bold text-purple-800 mb-3">Advanced LangGraph</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Enterprise-scale multi-agent orchestration with custom security and compliance features.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Unlimited agent orchestration</li>
                        <li>• Custom security layers</li>
                        <li>• Compliance frameworks</li>
                      </ul>
                    </div>

                    {/* Enterprise Google SDK */}
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">☁️</span>
                      </div>
                      <h4 className="font-bold text-purple-800 mb-3">Google Cloud Enterprise</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Full Google Cloud integration with enterprise security, compliance, and custom deployments.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Enterprise security</li>
                        <li>• Custom deployments</li>
                        <li>• Advanced analytics</li>
                      </ul>
                    </div>

                    {/* Enterprise OpenAI */}
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🎯</span>
                      </div>
                      <h4 className="font-bold text-purple-800 mb-3">Enterprise AI Platform</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Custom AI models, dedicated infrastructure, and enterprise-grade security for OpenAI integration.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Dedicated infrastructure</li>
                        <li>• Custom model development</li>
                        <li>• Enterprise compliance</li>
                      </ul>
                    </div>

                    {/* Enterprise Make.com */}
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">⚙️</span>
                      </div>
                      <h4 className="font-bold text-purple-800 mb-3">Enterprise Automation Hub</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Private cloud Make.com deployment with unlimited scenarios and enterprise support.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Private cloud deployment</li>
                        <li>• Unlimited scenarios</li>
                        <li>• 24/7 enterprise support</li>
                      </ul>
                    </div>

                    {/* Enterprise n8n */}
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white text-xl">🔒</span>
                      </div>
                      <h4 className="font-bold text-purple-800 mb-3">Secure n8n Enterprise</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        On-premises n8n deployment with advanced security, audit trails, and custom development.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• On-premises deployment</li>
                        <li>• Advanced audit trails</li>
                        <li>• Custom node development</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-semibold mb-3 text-purple-800">Enterprise Success Story</h4>
                    <p className="text-sm text-gray-600">
                      "Global Financial Corp automated their entire customer lifecycle management across 50+ countries, reducing operational costs by $12M annually while improving compliance scores by 95% and customer satisfaction by 40%."
                    </p>
                    <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500">
                      <span>• $12M annual savings</span>
                      <span>• 95% compliance improvement</span>
                      <span>• 40% higher satisfaction</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                Join thousands of businesses that have automated their operations with NAYAFlOW. Get started today with a free consultation.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex h-12 items-center justify-center rounded-md border border-blue-400 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
