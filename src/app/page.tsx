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
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-blue-700">
              How NAYAFlOW Works
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl mb-12">
              NAYAFlOW provides a scalable, enterprise-ready platform for orchestrating AI agents across your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 relative w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Define Your Agents</h3>
              <p className="text-gray-600">
                Create specialized AI agents with specific roles, capabilities, and access to tools and data sources.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 relative w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Design Workflows</h3>
              <p className="text-gray-600">
                Use our visual workflow designer to create complex agent interactions and decision paths.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 relative w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Deploy & Monitor</h3>
              <p className="text-gray-600">
                Launch your orchestrated agents into production with comprehensive monitoring and governance.
              </p>
            </div>
          </div>
          
          <div className="mt-16 relative rounded-xl overflow-hidden border border-gray-200">
            <Image 
              src="/images/documentation/platform-workflow.jpeg" 
              alt="NAYAFlOW workflow diagram"
              width={1200}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Framework Integration */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-blue-700">
              Framework Integration
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl">
              NAYAFlOW seamlessly integrates with popular AI agent frameworks to provide a unified orchestration layer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 text-xl font-bold">LG</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700">LangGraph</h3>
                  <p className="text-gray-600">State management, cyclic execution</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Full integration with LangChain's LangGraph framework for complex multi-agent systems with state management.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-700 text-xl font-bold">CA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700">CrewAI</h3>
                  <p className="text-gray-600">Role-based collaboration</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Seamless integration with CrewAI for role-based agent collaboration and task delegation systems.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 text-xl font-bold">AG</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700">AutoGen</h3>
                  <p className="text-gray-600">Conversational agents</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Full support for Microsoft's AutoGen framework for flexible multi-agent conversation systems.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/solutions">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Explore Framework Integrations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Business Segments Automation Needs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-blue-700">
              Automation Solutions for Every Business Stage
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl mb-12">
              From rapid startup deployment to enterprise-scale orchestration, our AI automation solutions are tailored to meet the unique needs of businesses at every stage of growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Startups */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 shadow-lg border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-green-800">Startups</h3>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-green-700">Rapid Deployment & Cost-Effective Automation</h4>
              <p className="text-gray-700 mb-6">
                Get your startup moving fast with essential automation that accelerates growth without breaking the bank. Focus on what matters most while we handle the repetitive tasks.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-green-800 mb-2">Key Automation Needs:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lead qualification and nurturing</li>
                    <li>• Customer onboarding automation</li>
                    <li>• Basic CRM and email integration</li>
                    <li>• Social media and content scheduling</li>
                  </ul>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-green-800">Implementation Time</span>
                    <span className="text-green-700 font-bold">2-4 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-800">ROI Timeline</span>
                    <span className="text-green-700 font-bold">1-2 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SMEs */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 shadow-lg border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-800">SMEs</h3>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-blue-700">Scalable Solutions & Growth-Focused</h4>
              <p className="text-gray-700 mb-6">
                Scale your operations efficiently with advanced automation that adapts to your growing business complexity. Perfect for companies ready to take the next step.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-blue-800 mb-2">Key Automation Needs:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-channel sales orchestration</li>
                    <li>• Advanced workflow automation</li>
                    <li>• Department integration and coordination</li>
                    <li>• Performance analytics and reporting</li>
                  </ul>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-blue-800">Implementation Time</span>
                    <span className="text-blue-700 font-bold">6-12 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-800">ROI Timeline</span>
                    <span className="text-blue-700 font-bold">2-4 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprises */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 shadow-lg border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-800">Enterprises</h3>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-purple-700">Comprehensive Orchestration & Advanced Security</h4>
              <p className="text-gray-700 mb-6">
                Transform your entire organization with unlimited-scale automation, advanced security, and complete customization for complex enterprise requirements.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-purple-800 mb-2">Key Automation Needs:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Global process orchestration</li>
                    <li>• Compliance and security automation</li>
                    <li>• Cross-department integration</li>
                    <li>• Advanced analytics and governance</li>
                  </ul>
                </div>
                
                <div className="bg-purple-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-purple-800">Implementation Time</span>
                    <span className="text-purple-700 font-bold">3-6 months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-purple-800">ROI Timeline</span>
                    <span className="text-purple-700 font-bold">6-12 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Proven Results Across All Business Segments</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-green-800 mb-2">Startup Impact</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div><span className="font-semibold text-2xl text-green-600">75%</span> faster customer onboarding</div>
                  <div><span className="font-semibold text-2xl text-green-600">40%</span> increase in lead conversion</div>
                  <div><span className="font-semibold text-2xl text-green-600">60%</span> reduction in manual tasks</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">📈</span>
                </div>
                <h4 className="font-bold text-blue-800 mb-2">SME Growth</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div><span className="font-semibold text-2xl text-blue-600">3x</span> faster customer response times</div>
                  <div><span className="font-semibold text-2xl text-blue-600">60%</span> cost reduction in processes</div>
                  <div><span className="font-semibold text-2xl text-blue-600">4x</span> team scaling efficiency</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🏢</span>
                </div>
                <h4 className="font-bold text-purple-800 mb-2">Enterprise Scale</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div><span className="font-semibold text-2xl text-purple-600">$12M</span> annual cost savings</div>
                  <div><span className="font-semibold text-2xl text-purple-600">95%</span> compliance improvement</div>
                  <div><span className="font-semibold text-2xl text-purple-600">40%</span> higher customer satisfaction</div>
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

      {/* Contact Form */}
      <ContactForm />

      {/* CTA Section */}
      <CTA />
    </main>
  );
}





