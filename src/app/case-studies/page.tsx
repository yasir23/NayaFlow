import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  title: "AI Agent Case Studies | NAYAFlOW",
  description: "Explore real-world applications of NAYAFlOW's AI agent orchestration platform across various industries.",
};

export default function CaseStudies() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6 text-blue-700">
              Success Stories
            </h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              Discover how organizations across industries have transformed their operations using NAYAFlOW's AI agent orchestration platform.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Case Study
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-blue-700">
                Global Financial Services Firm Automates Research Process
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A leading financial services firm implemented NAYAFlOW to automate their investment research process, resulting in 80% faster report generation and improved accuracy.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700">85% Reduction in Processing Time</h3>
                    <p className="text-gray-600">From 24+ hours to under 4 hours for comprehensive market analysis reports</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700">Improved Accuracy and Compliance</h3>
                    <p className="text-gray-600">Reduced human error by 92% and ensured consistent regulatory compliance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700">$4.2M Annual Cost Savings</h3>
                    <p className="text-gray-600">Reduced headcount requirements and operational expenses</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="inline-block">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Request Full Case Study
                </Button>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <Image 
                src="/images/documentation/case-study-finance.svg" 
                alt="Financial services automation workflow"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-blue-700">
              Industry Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              See how NAYAFlOW is transforming operations across diverse industries with AI agent orchestration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image 
                  src="/images/documentation/healthcare-case.svg" 
                  alt="Healthcare AI application"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-6">Healthcare</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-2 text-blue-700">Patient Care Optimization</h4>
                <p className="text-gray-600 mb-4">
                  A hospital network implemented NAYAFlOW to orchestrate diagnostic review, treatment recommendation, and care coordination agents.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">32% faster diagnoses</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">28% reduction in readmissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">$3.6M annual savings</span>
                  </div>
                </div>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Manufacturing */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image 
                  src="/images/documentation/manufacturing-case.svg" 
                  alt="Manufacturing AI application"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-6">Manufacturing</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-2 text-blue-700">Predictive Maintenance</h4>
                <p className="text-gray-600 mb-4">
                  A global equipment manufacturer uses NAYAFlOW to coordinate sensor data analysis, failure prediction, and maintenance scheduling.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">72% reduced downtime</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">42% maintenance cost savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">18% production increase</span>
                  </div>
                </div>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Retail */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image 
                  src="/images/documentation/retail-case.svg" 
                  alt="Retail AI application"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-6">Retail</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-2 text-blue-700">Personalized Shopping Experience</h4>
                <p className="text-gray-600 mb-4">
                  A major retailer deployed NAYAFlOW to orchestrate customer profiling, inventory, and personalization agents for their e-commerce platform.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">37% increase in conversion</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">28% higher average order value</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">53% repeat customer increase</span>
                  </div>
                </div>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-blue-700">
              Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              Our streamlined approach to implementing AI agent orchestration in your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Discovery</h3>
              <p className="text-gray-600">
                We analyze your current workflows and identify high-value opportunities for AI agent orchestration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Solution Design</h3>
              <p className="text-gray-600">
                Our architects design the optimal agent orchestration solution tailored to your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Implementation</h3>
              <p className="text-gray-600">
                Our engineering team rapidly deploys the solution and integrates it with your existing systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-700">Optimization</h3>
              <p className="text-gray-600">
                Continuous monitoring and refinement ensure your solution delivers maximum value over time.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Schedule a Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-blue-700">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-[800px] mx-auto">
              Hear directly from organizations that have transformed their operations with NAYAFlOW
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl font-bold">JD</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700">James Donovan</h3>
                  <p className="text-gray-600 text-sm">CTO, Global Financial Corp</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "NAYAFlOW has revolutionized how we approach market research. The orchestration of multiple AI agents working in concert has given us capabilities we never thought possible."
              </p>
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl font-bold">SP</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700">Sarah Patel</h3>
                  <p className="text-gray-600 text-sm">VP of Operations, MediCare Solutions</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The implementation was smoother than we anticipated. Within weeks, we saw dramatic improvements in patient care coordination and reduced administrative overhead."
              </p>
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xl font-bold">MR</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700">Michael Rodriguez</h3>
                  <p className="text-gray-600 text-sm">Director of Innovation, TechRetail</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "We've tried other AI solutions, but NAYAFlOW was the first that truly delivered on the promise of orchestrated AI agents. Our customer experience has transformed completely."
              </p>
              <div className="flex text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="w-full py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-xl text-blue-100 max-w-[800px] mb-8">
              Join the leading organizations already benefiting from NAYAFlOW's AI agent orchestration platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Request a Demo
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