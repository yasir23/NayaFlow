import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-blue-100 text-gray-800 py-12 border-t border-blue-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <Image 
                  src="/images/logo/nayaflow-logo.svg" 
                  alt="NAYAFlOW Logo" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-700">NAYAFlOW</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Automating million agents orchestration for enterprise automation
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-700">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/agent-orchestration" className="text-gray-600 hover:text-blue-700 transition-colors">
                  Agent Orchestration
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise-automation" className="text-gray-600 hover:text-blue-700 transition-colors">
                  Enterprise Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-integration" className="text-gray-600 hover:text-blue-700 transition-colors">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/solutions/custom-agents" className="text-gray-600 hover:text-blue-700 transition-colors">
                  Custom Agents
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-700">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-blue-700 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-700 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-blue-700 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-700">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                123 AI Avenue, Innovation District
              </li>
              <li className="text-gray-600">
                Montana, CA 94103
              </li>
              <li>
                <a href="mailto:info@nayaflow.com" className="text-gray-600 hover:text-blue-700 transition-colors">
                  yasir@nayaflow.com
                </a>
              </li>
              <li>
                <a href="tel:+1-800-123-4567" className="text-gray-600 hover:text-blue-700 transition-colors">
                  +1 (800) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-200 mt-8 pt-8 flex flex-col md:flex-row md:justify-between">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} NAYAFlOW. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 