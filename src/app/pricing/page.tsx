import { Metadata } from "next";
import Link from "next/link";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  title: "Pricing Plans | NAYAFlOW",
  description: "Explore NAYAFlOW's flexible pricing plans for AI agent orchestration, from startups to enterprise organizations.",
};

export default function Pricing() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6 text-blue-700">
              Transparent Pricing
            </h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              Choose the right plan for your organization's AI agent orchestration needs. All plans include our core platform features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <div className="flex flex-col p-6 bg-white rounded-xl shadow-md border border-gray-200 relative">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-700">Starter</h2>
                <p className="text-gray-600 mt-2">For teams beginning their AI journey</p>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">$999</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Up to 5 concurrent workflows</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>10,000 API calls per month</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Community support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Standard agent templates</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Cloud deployment only</span>
                </li>
              </ul>

              <Link href="/contact" className="mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col p-6 bg-blue-50 rounded-xl shadow-md border border-blue-200 relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-max bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-700">Professional</h2>
                <p className="text-gray-600 mt-2">For growing businesses with scaling needs</p>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">$2,499</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Up to 25 concurrent workflows</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>100,000 API calls per month</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced analytics & monitoring</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority email support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom agent development</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Team collaboration features</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Cloud or hybrid deployment</span>
                </li>
              </ul>

              <Link href="/contact" className="mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col p-6 bg-white rounded-xl shadow-md border border-gray-200 relative">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-700">Enterprise</h2>
                <p className="text-gray-600 mt-2">For organizations with advanced requirements</p>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-2xl font-extrabold text-gray-900">Custom Pricing</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited concurrent workflows</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom API call volume</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Enterprise-grade analytics & security</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>SLA guarantees</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>On-premises or private cloud options</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom implementation & training</span>
                </li>
              </ul>

              <Link href="/contact" className="mt-auto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
            Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Starter</th>
                  <th className="p-4 text-center bg-blue-700">Professional</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Concurrent workflows</td>
                  <td className="p-4 text-center">5</td>
                  <td className="p-4 text-center bg-blue-50">25</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">API calls per month</td>
                  <td className="p-4 text-center">10,000</td>
                  <td className="p-4 text-center bg-blue-50">100,000</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Agent templates</td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center bg-blue-50">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Custom agent development</td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center bg-blue-50">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Analytics dashboard</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-blue-50">Advanced</td>
                  <td className="p-4 text-center">Enterprise</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Support</td>
                  <td className="p-4 text-center">Community</td>
                  <td className="p-4 text-center bg-blue-50">Priority email</td>
                  <td className="p-4 text-center">24/7 dedicated</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">SLA guarantees</td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center bg-blue-50">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Deployment options</td>
                  <td className="p-4 text-center">Cloud</td>
                  <td className="p-4 text-center bg-blue-50">Cloud or hybrid</td>
                  <td className="p-4 text-center">Any (incl. on-premises)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Team collaboration</td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center bg-blue-50">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Implementation services</td>
                  <td className="p-4 text-center">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center bg-blue-50">Available (add-on)</td>
                  <td className="p-4 text-center">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Can I change plans as my needs grow?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time. The changes will be prorated for the remainder of your billing cycle. Downgrading is also possible at the end of your current billing period.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">What happens if I exceed my API call limit?</h3>
              <p className="text-gray-600">
                If you exceed your monthly API call limit, you'll be charged for additional usage at a per-call rate specific to your plan. We'll notify you as you approach your limit so you can decide whether to upgrade your plan or manage usage.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-600">
                Yes, we offer a 15% discount for annual billing on all plans. Contact our sales team for details on annual pricing options.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Is there a free trial available?</h3>
              <p className="text-gray-600">
                We offer a 14-day free trial for our Professional plan, allowing you to explore all the features before making a commitment. No credit card is required to start your trial.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Does pricing include the cost of AI models?</h3>
              <p className="text-gray-600">
                NAYAFlOW pricing covers the platform usage, orchestration, and management of AI agents. Third-party model costs (like OpenAI, Anthropic, etc.) are billed separately, though some plans include credits for select providers.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Still have questions about our pricing or need a custom solution?
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Contact Our Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-xl text-blue-100 max-w-[800px] mb-8">
              Start orchestrating AI agents today with NAYAFlOW's powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Schedule a Demo
                </Button>
              </Link>
              <Link href="/documentation">
                <Button variant="outline" className="border-white text-white hover:bg-blue-500">
                  Explore Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 