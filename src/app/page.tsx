import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Button from "../components/ui/button";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
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


