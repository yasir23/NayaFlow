import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Button from "../components/ui/button";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import UseCases from "../components/UseCases";
import CaseStudies from "../components/CaseStudies";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "NAYAFlOW | AI Agent Orchestration Platform",
  description: "The enterprise platform for orchestrating AI agents across your organization",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-gray-100">
              How NAYAFlOW Works
            </h2>
            <p className="max-w-[800px] text-gray-400 md:text-xl mb-12">
              NAYAFlOW provides a scalable, enterprise-ready platform for orchestrating AI agents across your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 relative w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-gray-300 text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Define Your Agents</h3>
              <p className="text-gray-400">
                Create specialized AI agents with specific roles, capabilities, and access to tools and data sources.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 relative w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-gray-300 text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Design Workflows</h3>
              <p className="text-gray-400">
                Use our visual workflow designer to create complex agent interactions and decision paths.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 relative w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-gray-300 text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">Deploy & Monitor</h3>
              <p className="text-gray-400">
                Launch your orchestrated agents into production with comprehensive monitoring and governance.
              </p>
            </div>
          </div>
          
          <div className="mt-16 relative rounded-xl overflow-hidden border border-gray-800">
            <div className="w-full h-96 bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400 text-lg">Platform Workflow Diagram</span>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Integration */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/30">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-gray-100">
              Framework Integration
            </h2>
            <p className="max-w-[800px] text-gray-400 md:text-xl">
              NAYAFlOW seamlessly integrates with popular AI agent frameworks to provide a unified orchestration layer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-300 text-xl font-bold">LG</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">LangGraph</h3>
                  <p className="text-gray-400">State management, cyclic execution</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Full integration with LangChain's LangGraph framework for complex multi-agent systems with state management.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-300 text-xl font-bold">CA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">CrewAI</h3>
                  <p className="text-gray-400">Role-based collaboration</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Seamless integration with CrewAI for role-based agent collaboration and task delegation systems.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-300 text-xl font-bold">AG</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">AutoGen</h3>
                  <p className="text-gray-400">Conversational agents</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Full support for Microsoft's AutoGen framework for flexible multi-agent conversation systems.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/solutions">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600">
                Explore Framework Integrations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Business Segments Automation Needs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-gray-100">
              Automation Solutions for Every Business Stage
            </h2>
            <p className="max-w-[800px] text-gray-400 md:text-xl mb-12">
              From rapid startup deployment to enterprise-scale orchestration, our AI automation solutions are tailored to meet the unique needs of businesses at every stage of growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Startups */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Startups</h3>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Rapid Deployment & Cost-Effective Automation</h4>
              <p className="text-gray-400 mb-6">
                Get your startup moving fast with essential automation that accelerates growth without breaking the bank. Focus on what matters most while we handle the repetitive tasks.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-700/50 p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-200 mb-2">Key Automation Needs:</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Lead qualification and nurturing</li>
                    <li>• Customer onboarding automation</li>
                    <li>• Basic CRM and email integration</li>
                    <li>• Social media and content scheduling</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-200">Implementation Time</span>
                    <span className="text-gray-300 font-bold">2-4 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-200">ROI Timeline</span>
                    <span className="text-gray-300 font-bold">1-2 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SMEs */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">SMEs</h3>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Scalable Solutions & Growth-Focused</h4>
              <p className="text-gray-400 mb-6">
                Scale your operations efficiently with advanced automation that adapts to your growing business complexity. Perfect for companies ready to take the next step.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-700/50 p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-200 mb-2">Key Automation Needs:</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Multi-channel sales orchestration</li>
                    <li>• Advanced workflow automation</li>
                    <li>• Department integration and coordination</li>
                    <li>• Performance analytics and reporting</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-200">Implementation Time</span>
                    <span className="text-gray-300 font-bold">6-12 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-200">ROI Timeline</span>
                    <span className="text-gray-300 font-bold">2-4 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprises */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Enterprises</h3>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Comprehensive Orchestration & Advanced Security</h4>
              <p className="text-gray-400 mb-6">
                Transform your entire organization with unlimited-scale automation, advanced security, and complete customization for complex enterprise requirements.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-700/50 p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-200 mb-2">Key Automation Needs:</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Global process orchestration</li>
                    <li>• Compliance and security automation</li>
                    <li>• Cross-department integration</li>
                    <li>• Advanced analytics and governance</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-200">Implementation Time</span>
                    <span className="text-gray-300 font-bold">3-6 months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-200">ROI Timeline</span>
                    <span className="text-gray-300 font-bold">6-12 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-100">Proven Results Across All Business Segments</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Startup Impact</h4>
                <div className="space-y-1 text-sm text-gray-400">
                  <div><span className="font-semibold text-2xl text-gray-300">75%</span> faster customer onboarding</div>
                  <div><span className="font-semibold text-2xl text-gray-300">40%</span> increase in lead conversion</div>
                  <div><span className="font-semibold text-2xl text-gray-300">60%</span> reduction in manual tasks</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h4 className="font-bold text-gray-200 mb-2">SME Growth</h4>
                <div className="space-y-1 text-sm text-gray-400">
                  <div><span className="font-semibold text-2xl text-gray-300">3x</span> faster customer response times</div>
                  <div><span className="font-semibold text-2xl text-gray-300">60%</span> cost reduction in processes</div>
                  <div><span className="font-semibold text-2xl text-gray-300">4x</span> team scaling efficiency</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Enterprise Scale</h4>
                <div className="space-y-1 text-sm text-gray-400">
                  <div><span className="font-semibold text-2xl text-gray-300">$12M</span> annual cost savings</div>
                  <div><span className="font-semibold text-2xl text-gray-300">95%</span> compliance improvement</div>
                  <div><span className="font-semibold text-2xl text-gray-300">40%</span> higher customer satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <UseCases />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />


      {/* CTA Section */}
      <CTA />
    </main>
  );
}