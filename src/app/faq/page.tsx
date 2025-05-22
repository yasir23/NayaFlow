import { Metadata } from "next";
import Link from "next/link";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | NAYAFlOW",
  description: "Get answers to the most common questions about NAYAFlOW's AI agent orchestration platform and services.",
};

export default function FAQ() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6 text-blue-700">
              Frequently Asked Questions
            </h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              Get answers to common questions about NAYAFlOW's AI agent orchestration platform, implementation process, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid gap-8">
            {/* General Questions */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-700">General Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">What is NAYAFlOW?</h3>
                  <p className="text-gray-600">
                    NAYAFlOW is an AI agent orchestration platform that enables organizations to design, deploy, and manage complex workflows involving multiple AI agents. Our platform provides the infrastructure and tools needed to coordinate AI agents for enterprise applications, ensuring they work together seamlessly to accomplish sophisticated tasks.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">How does NAYAFlOW differ from other AI platforms?</h3>
                  <p className="text-gray-600">
                    While many platforms focus on individual AI models or agents, NAYAFlOW specializes in orchestration—the coordination of multiple AI agents working together. Our platform provides robust tools for agent communication, workflow management, monitoring, and scaling, allowing for more complex and powerful AI systems than single-agent solutions.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">What kinds of problems can NAYAFlOW solve?</h3>
                  <p className="text-gray-600">
                    NAYAFlOW excels at solving complex problems that require multiple types of intelligence or expertise. Examples include automated research workflows, customer service automation, complex data analysis pipelines, content generation and management, and business process automation across departments.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Technical Questions */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-700">Technical Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">What AI models does NAYAFlOW support?</h3>
                  <p className="text-gray-600">
                    NAYAFlOW is model-agnostic and supports integration with a wide range of AI models and services, including OpenAI, Anthropic, Google Vertex AI, HuggingFace models, and open-source LLMs. Our platform also allows you to incorporate custom models and traditional ML systems into your agent workflows.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">How does NAYAFlOW handle security and privacy?</h3>
                  <p className="text-gray-600">
                    NAYAFlOW prioritizes security and privacy with enterprise-grade features including end-to-end encryption, role-based access controls, audit logging, and compliance with major standards (GDPR, HIPAA, SOC 2). We offer both cloud and on-premises deployment options to meet your organization's security requirements.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Can NAYAFlOW integrate with our existing systems?</h3>
                  <p className="text-gray-600">
                    Yes, NAYAFlOW is designed for seamless integration with existing enterprise systems. We provide robust APIs, pre-built connectors for common enterprise tools (Salesforce, SAP, Microsoft 365, etc.), and custom integration services to ensure NAYAFlOW works with your existing tech stack.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Does NAYAFlOW support both synchronous and asynchronous workflows?</h3>
                  <p className="text-gray-600">
                    Yes, NAYAFlOW supports both synchronous (real-time) and asynchronous workflows. Our platform allows you to design workflows where agents work simultaneously on different subtasks, coordinate through messaging, and handle long-running processes that may take minutes or hours to complete.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Implementation Questions */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-700">Implementation & Support</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">How long does it take to implement NAYAFlOW?</h3>
                  <p className="text-gray-600">
                    Implementation timelines vary based on the complexity of your use case, but most clients see their first production workflows live within 4-8 weeks. Our phased approach allows for quick wins while building toward more complex orchestrations, with typical enterprise-wide deployments completed within 3-6 months.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">What kind of support does NAYAFlOW provide?</h3>
                  <p className="text-gray-600">
                    NAYAFlOW offers tiered support options, including 24/7 technical support for enterprise customers, dedicated solution architects, implementation assistance, and training resources. Our Professional Services team is available for custom development, system integration, and ongoing optimization.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Do we need AI expertise to use NAYAFlOW?</h3>
                  <p className="text-gray-600">
                    While AI expertise is beneficial, it's not required. NAYAFlOW is designed with intuitive interfaces for business users and provides templates and pre-built components to accelerate implementation. Our team can provide the necessary expertise during implementation, and we offer training to help your team become self-sufficient.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pricing Questions */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-700">Pricing & Licensing</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">How is NAYAFlOW priced?</h3>
                  <p className="text-gray-600">
                    NAYAFlOW offers flexible pricing models based on your needs. We provide subscription-based pricing with tiers for different organization sizes and use cases. Pricing factors include the number of agents, workflow complexity, API calls, and support level. Contact us for a customized quote based on your specific requirements.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Is there a trial or proof of concept option?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 30-day free trial for qualified organizations, and we can work with you to develop a proof of concept for your specific use case. This allows you to test NAYAFlOW with your data and workflows before committing to a full implementation.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Does NAYAFlOW pricing include the cost of AI models?</h3>
                  <p className="text-gray-600">
                    NAYAFlOW pricing does not include the cost of third-party AI models (such as OpenAI or Anthropic models). You'll need separate accounts with these providers. However, NAYAFlOW helps optimize model usage to control costs, and some plans include bundled credits for certain model providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 max-w-[600px] mx-auto mb-8">
            Our team is ready to help you understand how NAYAFlOW can transform your organization's AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 min-w-[180px]">
                Contact Us
              </Button>
            </Link>
            <Link href="/documentation">
              <Button variant="outline" className="border-white text-white hover:bg-blue-500 min-w-[180px]">
                Browse Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 