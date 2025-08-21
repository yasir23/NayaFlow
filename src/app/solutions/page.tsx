import React from 'react';
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import OrchestratorPatterns from "../../components/OrchestratorPatterns";
import EnterpriseUseCases from '@/components/EnterpriseUseCases';

export const metadata: Metadata = {
  title: "AI Agent Orchestration Solutions | NAYAFlOW",
  description: "Discover NAYAFlOW's innovative AI agent architectures and orchestration patterns that transform business operations and customer experiences.",
};

export default function Solutions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-700">
                AI Agent Orchestration Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Transform your business with NAYAFlOW's intelligent agent orchestration platform. Connect, coordinate, and optimize AI agents for powerful business applications.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
              >
                Request Demo
              </Link>
              <Link
                href="/documentation"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Architecture Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tighter mb-4 text-blue-700">Intelligent Agent Architectures</h2>
              <p className="text-gray-500 md:text-lg mb-6">
                NAYAFlOW provides cutting-edge AI agent architectures designed for enterprise-grade applications. Our architectures enable seamless coordination between specialized agents, creating powerful systems that can handle complex tasks.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-500 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Modular agent design for specialized capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-500 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Flexible communication protocols between agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-500 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Built-in memory and context management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-500 p-1 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Enterprise-grade security and governance</span>
                </li>
              </ul>
              <Link
                href="/architecture"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
              >
                Explore Architectures
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image 
                src="/images/documentation/system-architecture.jpeg" 
                alt="NAYAFlOW AI Agent Architecture" 
                width={500} 
                height={400}
                className="w-full max-w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Framework Comparison */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-blue-700">Framework Comparison</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
              NAYAFlOW extends and enhances popular AI agent frameworks, providing enterprise-grade capabilities and seamless integration.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <Image 
              src="/images/documentation/framework-comparison.jpeg" 
              alt="NAYAFlOW Framework Comparison" 
              width={800} 
              height={600}
              className="w-full max-w-full rounded-xl shadow-lg bg-white"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-2 bg-green-600"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-blue-700">LangGraph Integration</h3>
                <p className="text-gray-600 mb-4">
                  Extend LangGraph with enterprise security, monitoring, and scalability features.
                </p>
                <Link href="/documentation/frameworks/langgraph" className="text-blue-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-2 bg-orange-600"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-blue-700">CrewAI Enhancement</h3>
                <p className="text-gray-600 mb-4">
                  Power up CrewAI with advanced orchestration, security, and enterprise integrations.
                </p>
                <Link href="/documentation/frameworks/crewai" className="text-blue-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-blue-700">AutoGen Extension</h3>
                <p className="text-gray-600 mb-4">
                  Enhance AutoGen with enterprise features, monitoring, and advanced routing.
                </p>
                <Link href="/documentation/frameworks/autogen" className="text-blue-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Orchestration Patterns */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-blue-700">Advanced Orchestration Patterns</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
              NAYAFlOW provides a comprehensive library of orchestration patterns to optimize agent interactions for different use cases.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <Image 
              src="/images/documentation/orchestration-patterns.jpeg" 
              alt="NAYAFlOW Orchestration Patterns" 
              width={800} 
              height={600}
              className="w-full max-w-full rounded-xl shadow-lg bg-white"
            />
          </div>
          
          <OrchestratorPatterns />
        </div>
      </section>

      {/* Enterprise Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-blue-700">Enterprise Use Cases</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
              Discover how leading enterprises have transformed their operations using NAYAFlOW's AI agent orchestration platform.
            </p>
          </div>
          
          <EnterpriseUseCases />
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Schedule a consultation with our AI architects to explore how NAYAFlOW can revolutionize your enterprise operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/documentation"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-white/10 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  Explore Documentation
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-white/20 blur-lg"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/30">
                  <h3 className="font-bold text-xl mb-4">Our Enterprise Clients</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                        F100
                      </div>
                      <div>
                        <h4 className="font-semibold">Fortune 100 Financial Services</h4>
                        <p className="text-sm text-blue-100">72% reduction in document processing time</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                        HC
                      </div>
                      <div>
                        <h4 className="font-semibold">Global Healthcare Provider</h4>
                        <p className="text-sm text-blue-100">58% faster diagnostic workflows</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                        MFG
                      </div>
                      <div>
                        <h4 className="font-semibold">Manufacturing Conglomerate</h4>
                        <p className="text-sm text-blue-100">34% fewer quality defects through AI monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 


