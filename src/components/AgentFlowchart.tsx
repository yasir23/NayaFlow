"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AgentFlowchart = () => {
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const [activePath, setActivePath] = useState<string>('');

  const paths = {
    'complex': ['control', 'framework-features', 'langgraph'],
    'simple': ['framework-specific', 'team-expertise', 'langgraph-simple'],
    'collaborative': ['skill-based', 'framework-features-collab', 'langgraph-collab'],
    'complex-no': ['framework-features', 'diy', 'swarm'],
    'simple-no': ['team-expertise', 'prompt-engineering', 'crewai'],
    'collaborative-workflow': ['framework-features-collab', 'flexibility', 'swarm-collab']
  };

  const handlePathSelect = (path: string) => {
    setActivePath(path);
    setActiveNodes(paths[path as keyof typeof paths]);
  };

  useEffect(() => {
    // Start with the complex path active by default
    handlePathSelect('complex');
  }, []);

  return (
    <div className="bg-gray-50 py-8 px-4 rounded-xl border border-gray-200">
      <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Agent Framework Selection Flowchart</h3>
      
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <button 
          onClick={() => handlePathSelect('complex')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${activePath === 'complex' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Complex Workflows
        </button>
        <button 
          onClick={() => handlePathSelect('complex-no')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${activePath === 'complex-no' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Complex + DIY
        </button>
        <button 
          onClick={() => handlePathSelect('simple')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${activePath === 'simple' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Simple Tasks
        </button>
        <button 
          onClick={() => handlePathSelect('simple-no')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${activePath === 'simple-no' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Simple + Prompt Eng.
        </button>
        <button 
          onClick={() => handlePathSelect('collaborative')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${activePath === 'collaborative' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Collaborative (Skill)
        </button>
        <button 
          onClick={() => handlePathSelect('collaborative-workflow')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${activePath === 'collaborative-workflow' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Collaborative (Workflow)
        </button>
      </div>
      
      <div className="relative">
        {/* Connecting lines */}
        <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
          <line 
            x1="50%" y1="70" 
            x2="25%" y2="160" 
            stroke={activeNodes.includes('control') ? "#3b82f6" : "#e5e7eb"} 
            strokeWidth="2"
          />
          <line 
            x1="50%" y1="70" 
            x2="50%" y2="160" 
            stroke={activeNodes.includes('framework-specific') ? "#3b82f6" : "#e5e7eb"} 
            strokeWidth="2"
          />
          <line 
            x1="50%" y1="70" 
            x2="75%" y2="160" 
            stroke={activeNodes.includes('skill-based') ? "#3b82f6" : "#e5e7eb"} 
            strokeWidth="2"
          />
          
          <line 
            x1="25%" y1="250" 
            x2="25%" y2="340" 
            stroke={activeNodes.includes('framework-features') ? "#3b82f6" : "#e5e7eb"} 
            strokeWidth="2"
          />
          <line 
            x1="50%" y1="250" 
            x2="50%" y2="340" 
            stroke={activeNodes.includes('team-expertise') ? "#3b82f6" : "#e5e7eb"} 
            strokeWidth="2"
          />
          <line 
            x1="75%" y1="250" 
            x2="75%" y2="340" 
            stroke={activeNodes.includes('framework-features-collab') ? "#3b82f6" : "#e5e7eb"} 
            strokeWidth="2"
          />
        </svg>
      
        {/* Root node */}
        <motion.div 
          className={`relative z-10 mx-auto w-60 p-4 rounded-lg bg-blue-100 text-blue-900 font-semibold text-center mb-12`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What type of agent application?
        </motion.div>
        
        {/* Level 1 nodes */}
        <div className="flex justify-between mb-12 relative z-10">
          <motion.div 
            className={`w-48 p-4 rounded-lg ${activeNodes.includes('control') ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} text-center font-medium`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Need precise control over agent interactions?
          </motion.div>
          
          <motion.div 
            className={`w-48 p-4 rounded-lg ${activeNodes.includes('framework-specific') ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} text-center font-medium`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Want to minimize framework-specific code?
          </motion.div>
          
          <motion.div 
            className={`w-48 p-4 rounded-lg ${activeNodes.includes('skill-based') ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} text-center font-medium`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Task assignment is skill-based or workflow-based?
          </motion.div>
        </div>
        
        {/* Level 2 nodes */}
        <div className="flex justify-between mb-12 relative z-10">
          <motion.div 
            className={`w-48 p-4 rounded-lg ${activeNodes.includes('framework-features') ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} text-center font-medium`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Prefer framework features or DIY?
          </motion.div>
          
          <motion.div 
            className={`w-48 p-4 rounded-lg ${activeNodes.includes('team-expertise') ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} text-center font-medium`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Team expertise?
          </motion.div>
          
          <motion.div 
            className={`w-48 p-4 rounded-lg ${activeNodes.includes('framework-features-collab') ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} text-center font-medium`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Prefer framework features or flexibility?
          </motion.div>
        </div>
        
        {/* Level 3 nodes */}
        <div className="flex justify-between relative z-10">
          <motion.div 
            className={`w-48 p-4 rounded-lg ${activeNodes.includes('langgraph') || activeNodes.includes('diy') ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700'} text-center font-bold`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {activeNodes.includes('diy') ? 'Swarm' : 'LangGraph'}
          </motion.div>
          
          <motion.div 
            className={`w-48 p-4 rounded-lg ${activeNodes.includes('langgraph-simple') || activeNodes.includes('prompt-engineering') ? activeNodes.includes('prompt-engineering') ? 'bg-red-600 text-white' : 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700'} text-center font-bold`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {activeNodes.includes('prompt-engineering') ? 'CrewAI' : 'LangGraph'}
          </motion.div>
          
          <motion.div 
            className={`w-48 p-4 rounded-lg ${activeNodes.includes('langgraph-collab') || activeNodes.includes('flexibility') ? activeNodes.includes('flexibility') ? 'bg-gray-800 text-white' : 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700'} text-center font-bold`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {activeNodes.includes('flexibility') ? 'Swarm' : 'LangGraph'}
          </motion.div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="font-semibold text-gray-900 mb-2">Framework Recommendations:</h4>
        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
          <li><span className="font-medium text-green-700">LangGraph:</span> Best for complex, stateful workflows requiring precise control and software engineering expertise.</li>
          <li><span className="font-medium text-red-600">CrewAI:</span> Ideal for simpler tasks where prompt engineering expertise is more important than software engineering.</li>
          <li><span className="font-medium text-gray-800">Swarm:</span> Optimal for maximum flexibility, DIY approaches, and workflow-based collaborative tasks.</li>
        </ul>
      </div>
    </div>
  );
};

export default AgentFlowchart; 