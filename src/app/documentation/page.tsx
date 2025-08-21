import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/ui/button";
import UsageGuide from "../../components/UsageGuide";

export const metadata: Metadata = {
  title: "Documentation | NAYAFlOW",
  description: "Comprehensive documentation for the NAYAFlOW AI agent orchestration platform. Learn how to build, deploy, and manage AI agent workflows.",
};

export default function Documentation() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6 text-blue-700">
              Documentation
            </h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              Comprehensive guides, tutorials, and references for the NAYAFlOW AI agent orchestration platform.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="w-full py-8 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#getting-started" className="px-4 py-2 text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline">
              Getting Started
            </a>
            <a href="#architecture" className="px-4 py-2 text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline">
              Architecture
            </a>
            <a href="#orchestration" className="px-4 py-2 text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline">
              Orchestration Patterns
            </a>
            <a href="#api" className="px-4 py-2 text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline">
              API Reference
            </a>
            <a href="#frameworks" className="px-4 py-2 text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline">
              Framework Integration
            </a>
            <a href="#examples" className="px-4 py-2 text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline">
              Code Examples
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-blue-700">Getting Started</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">Platform Overview</h3>
              <p className="text-gray-600 mb-6">
                NAYAFlOW provides a robust infrastructure for designing, deploying, and managing AI agent workflows. Our platform supports various orchestration patterns, model integrations, and enterprise features.
              </p>
              <p className="text-gray-600 mb-6">
                Before diving into the technical details, familiarize yourself with the core concepts of AI agent orchestration and how NAYAFlOW implements them.
              </p>
              <Link href="/architecture" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                Learn about system architecture
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <Image
                src="/images/documentation/system-architecture.svg"
                alt="NAYAFlOW platform overview"
                width={600}
                height={400}
                className="w-full max-w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 text-blue-700">Installation & Setup</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-blue-700">1. Register for API Access</h4>
                <p className="text-gray-600 mb-4">
                  Sign up on our developer portal to receive your API key.
                </p>
                <div className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
                  <code>
                    # Example API key (replace with your own)<br/>
                    NAYAFLOW_API_KEY=naya_sk_e8a7d4f2c1b9a6e3d5c2b8a7f4e1d9c6
                  </code>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-blue-700">2. Install the SDK</h4>
                <p className="text-gray-600 mb-4">
                  NAYAFlOW provides SDKs for multiple languages. Choose the one that best fits your development environment.
                </p>
                <div className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
                  <code>
                    # For JavaScript/TypeScript environments<br/>
                    npm install @nayaflow/sdk<br/><br/>
                    # For Python environments<br/>
                    pip install nayaflow<br/>
                  </code>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-blue-700">3. Initialize the Client</h4>
                <p className="text-gray-600 mb-4">
                  Create a client instance to connect to the NAYAFlOW API.
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">JavaScript</p>
                    <div className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
                      <code>
                        import &#123; NayaFlow &#125; from '@nayaflow/sdk';<br/><br/>

                        const nayaflow = new NayaFlow(&#123;<br/>
                        &nbsp;&nbsp;apiKey: 'your_api_key',<br/>
                        &nbsp;&nbsp;environment: 'production' // or 'development'<br/>
                        &#125;);
                      </code>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Python</p>
                    <div className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
                      <code>
                        from nayaflow import NayaFlow<br/><br/>

                        nayaflow = NayaFlow(<br/>
                        &nbsp;&nbsp;api_key="your_api_key",<br/>
                        &nbsp;&nbsp;environment="production"  # or "development"<br/>
                        )
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-blue-700">NAYAFlOW Architecture</h2>
          
          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            <h3 className="text-xl font-bold mb-6 text-blue-700">System Components</h3>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-gray-200 mb-6">
              <Image
                src="/images/documentation/platform-overview.png"
                alt="NAYAFlOW system architecture"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              NAYAFlOW's architecture consists of several key components that work together to enable seamless AI agent orchestration:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
              <li><span className="font-semibold text-blue-700">Orchestration Engine</span>: Coordinates the execution of workflows and manages agent interactions</li>
              <li><span className="font-semibold text-blue-700">Agent Registry</span>: Catalogs available agents and their capabilities</li>
              <li><span className="font-semibold text-blue-700">Workflow Designer</span>: Visual interface for creating and editing agent workflows</li>
              <li><span className="font-semibold text-blue-700">Model Integrations</span>: Connectors to various AI models and services</li>
              <li><span className="font-semibold text-blue-700">Monitoring & Observability</span>: Tools for tracking performance and debugging</li>
              <li><span className="font-semibold text-blue-700">Security Layer</span>: Ensures data privacy and access control</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-6 text-blue-700">Data Flow</h3>
            <p className="text-gray-600 mb-6">
              Understanding how data flows through the NAYAFlOW platform is essential for designing effective agent orchestrations:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">Input Processing</h4>
                <p className="text-gray-600">
                  The platform receives input through various channels (API calls, webhooks, scheduled triggers) and routes it to the appropriate workflow. Input data is validated, transformed if necessary, and prepared for processing by the first agent in the workflow.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">Agent Communication</h4>
                <p className="text-gray-600">
                  Agents communicate through standardized message passing. Each agent receives input, performs its designated task, and produces output that can be consumed by other agents. The orchestration engine manages this communication flow according to the workflow definition.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">State Management</h4>
                <p className="text-gray-600">
                  NAYAFlOW maintains workflow state, allowing for both stateless and stateful agent interactions. The platform handles persistence, retrieval, and updating of state information throughout the workflow execution.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">Output Handling</h4>
                <p className="text-gray-600">
                  Once the workflow completes, the platform formats the final output according to the specified requirements and delivers it through the appropriate channel (API response, webhook, database update, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orchestration Patterns */}
      <section id="orchestration" className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-blue-700">Orchestration Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">React Pattern</h3>
              <p className="text-gray-600 mb-6">
                The React Pattern implements a think-act cycle where agents continuously observe, reason, and act until a goal is reached. This pattern is ideal for complex problem-solving scenarios requiring iterative refinement.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Effective for reasoning-heavy tasks</li>
                <li>Supports self-correction and reflection</li>
                <li>Enables emergent behavior through iteration</li>
              </ul>
              <Link href="#examples" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                See implementation examples
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <Image
                src="/images/documentation/react-pattern.png"
                alt="React pattern diagram"
                width={600}
                height={400}
                className="w-full max-w-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <Image
                src="/images/documentation/langgraph-implementation.png"
                alt="LangGraph implementation"
                width={600}
                height={400}
                className="w-full max-w-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Graph-based Orchestration</h3>
              <p className="text-gray-600 mb-6">
                Graph-based orchestration allows for complex agent interaction patterns with conditional paths, parallel execution, and dynamic routing. This approach provides maximum flexibility for designing sophisticated workflows.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Supports complex decision trees</li>
                <li>Enables parallel processing for efficiency</li>
                <li>Handles conditional logic and branching</li>
              </ul>
              <Link href="#examples" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                See implementation examples
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/solutions">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Explore Advanced Patterns
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section id="examples" className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-blue-700">Code Examples</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            Explore practical code examples for implementing AI agent orchestration with NAYAFlOW.
          </p>
          
          <UsageGuide />
        </div>
      </section>

      {/* Framework Integration */}
      <section id="frameworks" className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-blue-700">Framework Integration</h2>
          <p className="text-lg text-gray-600 mb-12">
            NAYAFlOW integrates seamlessly with popular AI frameworks and ecosystems, enabling you to leverage existing tools and models within your orchestrated workflows.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-xl font-bold text-blue-700">LangChain</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Integrate LangChain agents and chains into NAYAFlOW orchestrations, combining the best of both ecosystems.
              </p>
              <Link href="#langchain-example" className="text-blue-600 hover:text-blue-700 font-medium">
                View integration guide
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <h3 className="text-xl font-bold text-blue-700">LlamaIndex</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Leverage LlamaIndex for efficient data retrieval and RAG capabilities within your NAYAFlOW workflows.
              </p>
              <Link href="#llamaindex-example" className="text-blue-600 hover:text-blue-700 font-medium">
                View integration guide
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8.00002C21.0001 7.6493 20.9083 7.30483 20.7356 7.00119C20.563 6.69754 20.3161 6.44539 20.02 6.27002L13 2.27002C12.696 2.09375 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09375 11 2.27002L4 6.27002C3.70401 6.44547 3.45721 6.69769 3.28457 7.00136C3.11193 7.30504 3.02007 7.64952 3.02 8.00002V16C3.02007 16.3505 3.11193 16.695 3.28457 16.9987C3.45721 17.3023 3.70401 17.5546 4 17.73L11 21.73C11.304 21.9063 11.6489 21.9981 12 21.9981C12.3511 21.9981 12.696 21.9063 13 21.73L20 17.73C20.2961 17.5547 20.5432 17.3025 20.7158 16.9988C20.8885 16.6952 20.9803 16.3507 20.98 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-xl font-bold text-blue-700">Custom Models</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Connect your proprietary or specialized AI models to NAYAFlOW for unique capabilities and competitive advantage.
              </p>
              <Link href="#custom-model-example" className="text-blue-600 hover:text-blue-700 font-medium">
                View integration guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference Button */}
      <section id="api" className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-blue-700">API Reference</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our comprehensive API documentation for detailed information on endpoints, parameters, and response formats.
          </p>
          <Link href="https://api.nayaflow.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Open API Reference
            </Button>
          </Link>
        </div>
      </section>

      {/* Help & Support */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Need Help?</h2>
            <p className="text-xl text-blue-100 max-w-[800px] mb-8">
              Our technical team is ready to assist with implementation, troubleshooting, and best practices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full mb-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Developer Community</h3>
                <p className="text-blue-100 mb-4">
                  Join our active community forum to connect with other developers and share knowledge.
                </p>
                <a href="https://community.nayaflow.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-blue-200">
                  Join Community →
                </a>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Technical Support</h3>
                <p className="text-blue-100 mb-4">
                  Get direct assistance from our technical support team for implementation challenges.
                </p>
                <Link href="/contact" className="text-white font-medium hover:text-blue-200">
                  Contact Support →
                </Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Schedule a Demo
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" className="border-white text-white hover:bg-blue-500">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 


