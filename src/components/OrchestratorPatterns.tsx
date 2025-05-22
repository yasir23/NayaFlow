"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const OrchestratorPatterns = () => {
  const patterns = [
    {
      id: 1,
      title: "Sequential Chaining",
      description: "Pass outputs from one agent to the next in a defined sequence, creating linear workflows for multi-step processes.",
      icon: "/icons/sequential-chain.svg"
    },
    {
      id: 2,
      title: "Dynamic Routing",
      description: "Intelligently route tasks to specialized agents based on content analysis and decision rules.",
      icon: "/icons/dynamic-routing.svg"
    },
    {
      id: 3,
      title: "Parallel Processing",
      description: "Distribute tasks across multiple agents simultaneously, then aggregate results for increased efficiency.",
      icon: "/icons/parallel-processing.svg"
    },
    {
      id: 4,
      title: "Hierarchical Supervision",
      description: "Implement supervisor agents that coordinate specialized worker agents, providing oversight and optimization.",
      icon: "/icons/hierarchical.svg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {patterns.map((pattern) => (
        <Card key={pattern.id} className="border border-gray-200 hover:border-primary/50 transition-all">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                {pattern.icon ? (
                  <Image 
                    src={pattern.icon} 
                    alt={pattern.title} 
                    width={24} 
                    height={24}
                    className="text-primary"
                  />
                ) : (
                  <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{pattern.title}</h3>
                <p className="text-gray-600">{pattern.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrchestratorPatterns; 