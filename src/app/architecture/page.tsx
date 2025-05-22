import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  title: "AI Agent Architecture | NAYAFlOW",
  description: "Explore the technical architecture behind NAYAFlOW's AI agent orchestration platform, including frameworks, patterns, and implementation details.",
};

export default function Architecture() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6 text-blue-700">
              AI Agent Architecture
            </h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              A technical deep dive into the architecture that powers NAYAFlOW's AI agent orchestration platform.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-blue-700">Platform Architecture Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                NAYAFlOW's architecture is built on a modular, scalable foundation that enables seamless orchestration of AI agents across complex workflows and enterprise systems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700">Microservices Architecture</h3>
                    <p className="text-gray-600">Distributed, containerized services provide flexibility and scalability for enterprise deployment across cloud and on-premises environments.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700">Extensible Agent Framework</h3>
                    <p className="text-gray-600">Supports multiple agent architectures (LangGraph, CrewAI, AutoGen) with a unified interface for consistent development and deployment.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                      <line x1="16" y1="8" x2="2" y2="22"></line>
                      <line x1="17.5" y1="15" x2="9" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700">Enterprise Integration</h3>
                    <p className="text-gray-600">Pre-built connectors to common enterprise systems (CRM, ERP, databases) with a secure API gateway for custom integrations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <Image 
                src="/images/documentation/system-architecture.svg" 
                alt="NAYAFlOW platform architecture diagram"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent p-4">
                <p className="text-sm text-gray-600 font-medium">Figure 1: High-level architecture of the NAYAFlOW platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Patterns */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-blue-700">Agent Orchestration Patterns</h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              NAYAFlOW supports multiple orchestration patterns that can be implemented across different agent frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Pattern 1: ReAct Pattern */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700">ReAct Pattern</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Combines reasoning and action in a synergistic loop, allowing agents to reason about their observations before taking the next action.
              </p>
              
              <div className="relative mb-6">
                <Image 
                  src="/images/documentation/orchestration-patterns.svg" 
                  alt="ReAct Pattern Diagram"
                  width={500}
                  height={300}
                  className="mx-auto rounded-lg border border-gray-200"
                />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Implementation Details:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><span className="font-medium">Thought:</span> Internal reasoning about current state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><span className="font-medium">Action:</span> Execution based on reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><span className="font-medium">Observation:</span> Environment feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><span className="font-medium">Iteration:</span> Continuous improvement cycle</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Pattern 2: Tool-Augmented Pattern */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700">Tool-Augmented Pattern</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Extends agent capabilities through integration with external tools, APIs, and data sources, enabling real-world interactions.
              </p>
              
              <div className="relative mb-6">
                <Image 
                  src="/images/documentation/orchestration-patterns.svg" 
                  alt="Tool-Augmented Pattern Diagram"
                  width={500}
                  height={300}
                  className="mx-auto rounded-lg border border-gray-200"
                />
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Implementation Details:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><span className="font-medium">Tool Selection:</span> Dynamic choosing of appropriate tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><span className="font-medium">Tool Invocation:</span> Properly formatted API calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><span className="font-medium">Result Integration:</span> Processing tool responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><span className="font-medium">Tool Library:</span> Expandable ecosystem of capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Pattern 3: Multi-Agent Collaboration */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700">Multi-Agent Collaboration</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Enables multiple specialized agents to work together on complex tasks, with structured communication and role-based responsibility allocation.
              </p>
              
              <div className="relative mb-6">
                <Image 
                  src="/images/documentation/orchestration-patterns.svg" 
                  alt="Multi-Agent Collaboration Diagram"
                  width={500}
                  height={300}
                  className="mx-auto rounded-lg border border-gray-200"
                />
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Implementation Details:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><span className="font-medium">Role Definition:</span> Specialized agent capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><span className="font-medium">Communication Protocol:</span> Structured message passing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><span className="font-medium">Task Allocation:</span> Dynamic work distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><span className="font-medium">Conflict Resolution:</span> Mechanisms for handling disagreements</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Pattern 4: Autonomous Agent */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                    <path d="M5 22h14"></path>
                    <path d="M5 2h14"></path>
                    <rect x="3" y="8" width="18" height="8" rx="2"></rect>
                    <line x1="7" y1="8" x2="7" y2="16"></line>
                    <line x1="17" y1="8" x2="17" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700">Autonomous Agent Pattern</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Self-driven agent architecture that maintains its own goals, memory, and planning capabilities without continuous human intervention.
              </p>
              
              <div className="relative mb-6">
                <Image 
                  src="/images/documentation/orchestration-patterns.svg" 
                  alt="Autonomous Agent Pattern Diagram"
                  width={500}
                  height={300}
                  className="mx-auto rounded-lg border border-gray-200"
                />
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Implementation Details:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><span className="font-medium">Goal Management:</span> Setting and refining objectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><span className="font-medium">Memory System:</span> Maintaining relevant context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><span className="font-medium">Planning Module:</span> Creating execution strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><span className="font-medium">Self-Reflection:</span> Evaluating progress and adapting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-blue-700">Technical Implementation Details</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Framework 1: LangGraph */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="bg-green-800 h-3"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-full">
                    <span className="text-green-700 text-xl font-bold">LG</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-blue-700">LangGraph</h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art framework for building stateful, multi-agent applications with LLMs using a graph-based approach.
                </p>
                <div className="mb-4">
                  <Image 
                    src="/images/documentation/framework-comparison.svg" 
                    alt="LangGraph Implementation Example"
                    width={400}
                    height={200}
                    className="rounded-lg border border-gray-200 mx-auto"
                  />
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Key capabilities:</h4>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>Stateful graph execution</li>
                    <li>Human-in-the-loop interactions</li>
                    <li>Persistent memory management</li>
                    <li>Advanced error handling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Framework 2: CrewAI */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="bg-red-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-full">
                    <span className="text-red-600 text-xl font-bold">CA</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-blue-700">CrewAI</h3>
                <p className="text-gray-600 mb-4">
                  Framework for orchestrating role-based autonomous AI agents, designed for collaborative tasks with minimal code.
                </p>
                <div className="mb-4">
                  <Image 
                    src="/images/documentation/framework-comparison.svg" 
                    alt="CrewAI Implementation Example"
                    width={400}
                    height={200}
                    className="rounded-lg border border-gray-200 mx-auto"
                  />
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Key capabilities:</h4>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>Role-based agent design</li>
                    <li>Pre-built agent templates</li>
                    <li>Collaborative task execution</li>
                    <li>Simplified agent communication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Framework 3: AutoGen */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="bg-blue-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full">
                    <span className="text-blue-600 text-xl font-bold">AG</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-blue-700">AutoGen</h3>
                <p className="text-gray-600 mb-4">
                  Open-source framework for building conversational AI systems with multiple agents that can work together to solve complex tasks.
                </p>
                <div className="mb-4">
                  <Image 
                    src="/images/documentation/framework-comparison.svg" 
                    alt="AutoGen Implementation Example"
                    width={400}
                    height={200}
                    className="rounded-lg border border-gray-200 mx-auto"
                  />
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Key capabilities:</h4>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    <li>Customizable conversation flows</li>
                    <li>Multi-agent conversations</li>
                    <li>Human-in-the-loop integration</li>
                    <li>Tool use and function calling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Architecture Explorer - Coming Soon */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-blue-700">Interactive Architecture Explorer</h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              Coming soon: Explore our interactive architecture visualization tool to understand how NAYAFlOW components work together in real-world scenarios.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden border border-gray-200 max-w-4xl mx-auto">
            <Image 
              src="/images/documentation/orchestration-patterns.svg" 
              alt="Interactive Architecture Explorer Preview"
              width={900}
              height={500}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg max-w-md text-center">
                <h3 className="text-xl font-bold mb-3 text-blue-700">Coming Soon</h3>
                <p className="text-gray-600 mb-4">Our interactive architecture explorer is currently in development. Sign up to be notified when it launches.</p>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Early Access
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="w-full py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Implement Your AI Architecture?</h2>
            <p className="text-xl text-blue-100 max-w-[800px] mb-8">
              Our team of AI architects can help you design and implement the perfect agent orchestration solution for your enterprise needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/documentation">
                <Button variant="outline" className="border-white text-white hover:bg-blue-500">
                  Technical Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 