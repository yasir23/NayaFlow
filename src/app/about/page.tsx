"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Target, Award, Globe, Zap, Shield, TrendingUp, CheckCircle, Building, Rocket, BarChart3 } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [counters, setCounters] = useState({
    agents: 0,
    savings: 0,
    efficiency: 0,
    response: 0
  });

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('id');
            if (elementId) {
              setIsVisible(prev => ({
                ...prev,
                [elementId]: true
              }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll<HTMLElement>('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const statsVisible = isVisible['stats'];
    if (statsVisible) {
      const animateCounter = (key: keyof typeof counters, target: number) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };

      animateCounter('agents', 500);
      animateCounter('savings', 32);
      animateCounter('efficiency', 78);
      animateCounter('response', 92);
    }
  }, [isVisible]);

  const fadeInUpClass = (id: string) => 
    `transform transition-all duration-700 ease-out ${
      isVisible[id] 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-8 opacity-0'
    }`;

  const staggeredFadeIn = (id: string, delay: number = 0) =>
    `transform transition-all duration-700 ease-out ${
      isVisible[id]
        ? 'translate-y-0 opacity-100'
        : 'translate-y-8 opacity-0'
    }`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 mx-auto w-full py-12 md:py-24 lg:py-32 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div 
              id="hero-title" 
              data-animate
              className={fadeInUpClass('hero-title')}
            >
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-white leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse">NAYAFLOW</span>
              </h1>
            </div>
            
            <div 
              id="hero-subtitle" 
              data-animate
              className={fadeInUpClass('hero-subtitle')}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="max-w-[800px] text-blue-100 md:text-xl mb-12 leading-relaxed">
                Pioneering the future of enterprise automation through intelligent AI agent orchestration. We're building the platform that coordinates millions of AI agents worldwide.
              </p>
            </div>
            
            <div 
              id="hero-badge" 
              data-animate
              className={fadeInUpClass('hero-badge')}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <p className="text-blue-200 font-semibold">Orchestrating millions of AI agents worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Mission & Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              id="mission-content" 
              data-animate
              className={fadeInUpClass('mission-content')}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-blue-700 leading-tight">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="text-gray-500 md:text-xl leading-relaxed">
                  At NAYAFLOW, we believe that the future of enterprise efficiency lies in intelligent automation. Our mission is to democratize AI agent orchestration, making it accessible for businesses of all sizes.
                </p>
                <p className="text-gray-500 md:text-xl leading-relaxed">
                  We envision a world where millions of specialized AI agents work seamlessly together, handling routine tasks so humans can focus on innovation, creativity, and strategic decision-making.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                {['Enterprise Automation', 'Scalable Solutions', 'AI Innovation'].map((tag, i) => (
                  <div 
                    key={tag}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              id="stats" 
              data-animate
              className={`bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${fadeInUpClass('stats')}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: `${counters.agents}K+`, label: 'AI Agents Deployed', color: 'blue' },
                  { value: `$${counters.savings}.2M`, label: 'Annual Savings', color: 'green' },
                  { value: `${counters.efficiency}%`, label: 'Efficiency Increase', color: 'purple' },
                  { value: `${counters.response}%`, label: 'Faster Response', color: 'orange' }
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center group hover:transform hover:scale-110 transition-all duration-300">
                    <div className={`text-3xl font-bold text-${stat.color}-600 mb-2 group-hover:animate-pulse`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section (similar to How NAYAFlOW Works) */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div 
            id="how-we-work-header" 
            data-animate
            className={`flex flex-col items-center text-center ${fadeInUpClass('how-we-work-header')}`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-blue-700">
              How We Build the Future
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl mb-12">
              Our approach combines cutting-edge AI technology with enterprise-grade reliability to create scalable automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Research & Innovation",
                description: "We continuously research and develop new AI agent technologies, staying at the forefront of automation innovation.",
                icon: Zap
              },
              {
                number: "2", 
                title: "Enterprise Integration",
                description: "Our solutions seamlessly integrate with existing enterprise systems, ensuring smooth deployment and adoption.",
                icon: Building
              },
              {
                number: "3",
                title: "Scale & Monitor",
                description: "We provide comprehensive monitoring, governance, and scaling capabilities for enterprise-wide deployments.",
                icon: BarChart3
              }
            ].map((step, index) => (
              <div 
                key={step.number}
                id={`step-${index}`}
                data-animate
                className={`flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-500 ${staggeredFadeIn(`step-${index}`)}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 relative w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110">
                  <span className="text-blue-600 text-3xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-700 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div 
            id="workflow-diagram" 
            data-animate
            className={`mt-16 relative rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ${fadeInUpClass('workflow-diagram')}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="w-full h-[400px] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Globe className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">Global AI Agent Network</h3>
                <p className="text-blue-600">Visualizing our worldwide agent orchestration platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section (Services equivalent) */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div 
            id="services-header" 
            data-animate
            className={`flex flex-col items-center text-center mb-12 ${fadeInUpClass('services-header')}`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-blue-700">
              What We Do
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl">
              We provide enterprise-grade AI agent orchestration platform that coordinates millions of specialized AI agents to automate complex business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Zap,
                title: "Dynamic Task Routing",
                description: "Our platform intelligently routes tasks between millions of specialized AI agents, ensuring optimal resource allocation.",
                color: "green"
              },
              {
                icon: Shield,
                title: "Enterprise Security", 
                description: "Built with enterprise-grade security standards, ensuring your data and processes remain protected.",
                color: "red"
              },
              {
                icon: TrendingUp,
                title: "Scalable Architecture",
                description: "From startups to Fortune 500 companies, our platform scales seamlessly to handle millions of AI agents.",
                color: "blue"
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                id={`service-${index}`}
                data-animate
                className={`bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group ${staggeredFadeIn(`service-${index}`)}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center group-hover:bg-${service.color}-200 transition-all duration-300`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-700 group-hover:animate-pulse`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div 
            id="explore-button" 
            data-animate
            className={`text-center ${fadeInUpClass('explore-button')}`}
            style={{ transitionDelay: '400ms' }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Explore Our Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Company Stages Section (Business Segments equivalent) */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div 
            id="segments-header" 
            data-animate
            className={`flex flex-col items-center text-center mb-16 ${fadeInUpClass('segments-header')}`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-blue-700">
              Serving Companies at Every Stage
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl mb-12">
              From rapid startup deployment to enterprise-scale orchestration, our solutions are tailored to meet the unique needs of businesses at every stage of growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Startups */}
            <div 
              id="startups-card" 
              data-animate
              className={`bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 shadow-lg border border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${staggeredFadeIn('startups-card')}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Startups</h3>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-green-700">Rapid Deployment & Cost-Effective Automation</h4>
              <p className="text-gray-700 mb-6">
                Get your startup moving fast with essential automation that accelerates growth without breaking the bank.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-green-800 mb-2">Key Solutions:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lead qualification and nurturing</li>
                    <li>• Customer onboarding automation</li>
                    <li>• Basic CRM integration</li>
                    <li>• Content scheduling</li>
                  </ul>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="text-center">
                      <span className="font-semibold text-2xl text-green-600">75%</span>
                      <div className="text-sm text-green-700">faster onboarding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SMEs */}
            <div 
              id="smes-card" 
              data-animate
              className={`bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 shadow-lg border border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${staggeredFadeIn('smes-card')}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">SMEs</h3>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-blue-700">Scalable Solutions & Growth-Focused</h4>
              <p className="text-gray-700 mb-6">
                Scale your operations efficiently with advanced automation that adapts to your growing business complexity.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-blue-800 mb-2">Key Solutions:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-channel sales orchestration</li>
                    <li>• Advanced workflow automation</li>
                    <li>• Department integration</li>
                    <li>• Performance analytics</li>
                  </ul>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="text-center">
                      <span className="font-semibold text-2xl text-blue-600">3x</span>
                      <div className="text-sm text-blue-700">faster response times</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprises */}
            <div 
              id="enterprises-card" 
              data-animate
              className={`bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 shadow-lg border border-purple-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${staggeredFadeIn('enterprises-card')}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800">Enterprises</h3>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-purple-700">Comprehensive Orchestration & Advanced Security</h4>
              <p className="text-gray-700 mb-6">
                Transform your entire organization with unlimited-scale automation and complete customization.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-purple-800 mb-2">Key Solutions:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Global process orchestration</li>
                    <li>• Compliance automation</li>
                    <li>• Cross-department integration</li>
                    <li>• Advanced governance</li>
                  </ul>
                </div>
                
                <div className="bg-purple-100 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="text-center">
                      <span className="font-semibold text-2xl text-purple-600">$4M</span>
                      <div className="text-sm text-purple-700">annual cost savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div 
            id="values-header" 
            data-animate
            className={`flex flex-col items-center text-center mb-16 ${fadeInUpClass('values-header')}`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-blue-700">
              Our Values
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl">
              The principles that guide our innovation and shape our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovation First",
                description: "We continuously push the boundaries of AI technology to deliver cutting-edge solutions.",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Trust & Security",
                description: "We prioritize data security and privacy, building solutions enterprises can trust.",
                color: "green"
              },
              {
                icon: Users,
                title: "Customer Success",
                description: "Our success is measured by the transformational impact we deliver to our customers.",
                color: "purple"
              },
              {
                icon: TrendingUp,
                title: "Continuous Growth",
                description: "We embrace learning and adaptation, constantly evolving our platform.",
                color: "orange"
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                id={`value-${index}`}
                data-animate
                className={`text-center group hover:transform hover:scale-105 transition-all duration-500 cursor-pointer ${staggeredFadeIn(`value-${index}`)}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${value.color}-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <value.icon className={`w-8 h-8 text-${value.color}-600 group-hover:animate-pulse`} />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact/Case Study Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div 
            id="impact-header" 
            data-animate
            className={`flex flex-col items-center text-center mb-16 ${fadeInUpClass('impact-header')}`}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 text-blue-700">
              Our Global Impact
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl">
              Real results from enterprises that have transformed their operations with NAYAFLOW
            </p>
          </div>

          <div 
            id="impact-card" 
            data-animate
            className={`bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${fadeInUpClass('impact-card')}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                { value: "500,000+", label: "AI Agents Deployed" },
                { value: "Fortune 500", label: "Enterprise Clients" },
                { value: "99.9%", label: "Platform Uptime" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group hover:transform hover:scale-110 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:animate-pulse">
                    {stat.value}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Featured Case Study: TechCorp Global</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                "NAYAFLOW transformed our customer service operations, implementing 500,000+ AI agents that revolutionized our fraud detection, regulatory compliance, and customer response times."
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  "$3.2M Annual Savings",
                  "78% Efficiency Increase", 
                  "92% Faster Response"
                ].map((metric, index) => (
                  <div 
                    key={metric}
                    className="bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="font-semibold">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div 
          id="cta-section" 
          data-animate
          className={`container px-4 md:px-6 mx-auto w-full text-center relative z-10 ${fadeInUpClass('cta-section')}`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-white leading-tight">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Enterprise?</span>
          </h2>
          <p className="max-w-[800px] text-gray-300 md:text-xl mb-8 mx-auto leading-relaxed">
            Join the enterprises already saving millions through intelligent AI agent orchestration. Contact our team to discuss your automation needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              Contact Our Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/5">
              Schedule Demo
            </button>
          </div>

          <div className="text-gray-400 text-sm space-y-1">
            <p>123 AI Avenue, Innovation District</p>
            <p>San Francisco, CA 94103</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </main>
  );
};

export default About;