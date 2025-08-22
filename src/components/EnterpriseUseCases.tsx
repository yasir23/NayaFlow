"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const EnterpriseUseCases = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Transform Business Operations with Orchestrated AI</h2>
          <p className="text-lg text-gray-600 mb-8">
            NAYAFlOW's enterprise-grade AI agent orchestration platform empowers organizations across industries to automate complex workflows, 
            enhance decision-making, and deliver exceptional experiences.
          </p>
          <p className="text-lg text-gray-600">
            Our solutions integrate seamlessly with existing systems, enabling rapid implementation and immediate value creation across your enterprise.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image 
            src="/images/documentation/enterprise-use-cases.jpeg" 
            alt="Enterprise Use Cases for AI Agent Orchestration" 
            width={600}
            height={450}
            className="w-full max-w-full mx-auto bg-white rounded-xl shadow-sm" 
          />
        </div>
      </div>

      <Tabs defaultValue="financial" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <TabsTrigger value="financial" className="px-4 py-3 bg-green-50 text-green-800 data-[state=active]:bg-green-100">
            Financial Services
          </TabsTrigger>
          <TabsTrigger value="healthcare" className="px-4 py-3 bg-blue-50 text-blue-800 data-[state=active]:bg-blue-100">
            Healthcare
          </TabsTrigger>
          <TabsTrigger value="manufacturing" className="px-4 py-3 bg-orange-50 text-orange-800 data-[state=active]:bg-orange-100">
            Manufacturing
          </TabsTrigger>
          <TabsTrigger value="retail" className="px-4 py-3 bg-purple-50 text-purple-800 data-[state=active]:bg-purple-100">
            Customer Experience
          </TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Financial Services Automation</h3>
              <p className="text-gray-600 mb-6">
                Financial institutions leverage NAYAFlOW to enhance fraud detection, automate compliance processes, and deliver personalized 
                financial advice at scale.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">Fraud Detection</h4>
                  <p className="text-sm text-gray-600">
                    Multi-agent systems that analyze transaction patterns, user behavior, and external signals to identify and prevent fraudulent activities in real-time.
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">Portfolio Analysis</h4>
                  <p className="text-sm text-gray-600">
                    AI agents that continuously analyze market data, economic indicators, and client portfolios to generate investment insights and recommendations.
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">Risk Assessment</h4>
                  <p className="text-sm text-gray-600">
                    Orchestrated workflows that evaluate loan applications, insurance policies, and investment opportunities through multiple specialized agents.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-2">Client Success: Global Investment Bank</h4>
                <p className="text-sm text-gray-600">
                  A leading investment bank implemented NAYAFlOW to orchestrate their client advisory workflows, resulting in a 64% increase in advisor productivity, 
                  43% faster response times, and 92% client satisfaction rating.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="healthcare" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Healthcare Systems Transformation</h3>
              <p className="text-gray-600 mb-6">
                Healthcare providers and payers use NAYAFlOW to enhance patient care, optimize operations, and accelerate medical research through 
                intelligent agent coordination.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2">Patient Monitoring</h4>
                  <p className="text-sm text-gray-600">
                    Coordinated agent systems that continuously monitor patient data from multiple sources, identify trends, and alert care teams to potential issues.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2">Medical Research</h4>
                  <p className="text-sm text-gray-600">
                    Research acceleration through agent networks that analyze scientific literature, clinical data, and lab results to identify promising research directions.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-2">Diagnostic Assistance</h4>
                  <p className="text-sm text-gray-600">
                    Multi-agent systems that analyze patient symptoms, medical history, imaging data, and the latest research to support clinical decision-making.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-2">Client Success: Regional Healthcare Network</h4>
                <p className="text-sm text-gray-600">
                  A healthcare system implemented NAYAFlOW to coordinate their patient care workflows, resulting in 32% reduced readmission rates, 
                  58% faster diagnostic workflows, and significant improvements in patient outcomes.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manufacturing" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Manufacturing & Industry Excellence</h3>
              <p className="text-gray-600 mb-6">
                Manufacturing and industrial organizations leverage NAYAFlOW to optimize production, enhance quality control, and create 
                resilient supply chains through intelligent agent orchestration.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2">Predictive Maintenance</h4>
                  <p className="text-sm text-gray-600">
                    AI agent systems that monitor equipment sensors, maintenance history, and operational data to predict failures before they occur.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2">Quality Control</h4>
                  <p className="text-sm text-gray-600">
                    Multi-agent quality assurance workflows that analyze production data, visual inspections, and customer feedback to identify quality issues.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2">Supply Chain Optimization</h4>
                  <p className="text-sm text-gray-600">
                    Orchestrated agent networks that manage inventory, predict demand, optimize routing, and respond to disruptions in real-time.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-2">Client Success: Global Manufacturer</h4>
                <p className="text-sm text-gray-600">
                  A leading manufacturer implemented NAYAFlOW to orchestrate their production and supply chain processes, achieving 27% reduction in downtime, 
                  18% increase in production efficiency, and 34% fewer quality defects.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="retail" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Customer Experience Transformation</h3>
              <p className="text-gray-600 mb-6">
                Retail, e-commerce, and service organizations use NAYAFlOW to create personalized customer experiences, optimize marketing campaigns, 
                and deliver intelligent support across channels.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-800 mb-2">Personalized Marketing</h4>
                  <p className="text-sm text-gray-600">
                    Agent systems that analyze customer behavior, purchase history, and preferences to deliver highly targeted marketing messages and offers.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-800 mb-2">Intelligent Support</h4>
                  <p className="text-sm text-gray-600">
                    Multi-agent customer service systems that handle inquiries, resolve issues, and escalate complex problems to the right human experts.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-800 mb-2">Omnichannel Experience</h4>
                  <p className="text-sm text-gray-600">
                    Orchestrated workflows that create consistent, personalized customer experiences across web, mobile, in-store, and call center interactions.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-2">Client Success: E-commerce Leader</h4>
                <p className="text-sm text-gray-600">
                  A major e-commerce company implemented NAYAFlOW to orchestrate their customer experience workflows, resulting in 42% higher conversion rates, 
                  53% faster issue resolution, and 76% increase in customer retention.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EnterpriseUseCases; 
