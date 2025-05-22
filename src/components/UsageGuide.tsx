"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import SyntaxHighlighter to prevent SSR issues
const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then((mod) => mod.Prism),
  { ssr: false }
);

const tomorrow = dynamic<any>(
  () => import('react-syntax-highlighter/dist/esm/styles/prism').then((mod) => mod.tomorrow),
  { ssr: false }
);

type TabId = 'quickstart' | 'sequential' | 'parallel' | 'routing';
type PlatformId = 'langchain' | 'crewai' | 'autogen';

const UsageGuide = () => {
  const [activeTab, setActiveTab] = useState<TabId>('quickstart');
  const [activePlatform, setActivePlatform] = useState<PlatformId>('langchain');

  const platformTabs = [
    { id: 'langchain', label: 'LangChain' },
    { id: 'crewai', label: 'CrewAI' },
    { id: 'autogen', label: 'AutoGen' },
  ] as const;
  
  const mainTabs = [
    { id: 'quickstart', label: 'Quick Start', icon: '🚀' },
    { id: 'sequential', label: 'Sequential Pattern', icon: '🔄' },
    { id: 'parallel', label: 'Parallel Pattern', icon: '⚡' },
    { id: 'routing', label: 'Dynamic Routing', icon: '🔀' },
  ] as const;

  const codeExamples: Record<TabId, Record<PlatformId, string>> = {
    quickstart: {
      langchain: `import { NayaFlow } from '@nayaflow/langchain';

// Initialize NAYAFlOW with your API key
const nayaflow = new NayaFlow({
  apiKey: process.env.NAYAFLOW_API_KEY,
  orchestrationType: 'sequential'
});

// Define your agents
const researchAgent = nayaflow.createAgent({
  name: 'researcher',
  description: 'Researches information from the web',
  tools: ['web-search', 'document-loader']
});

const writerAgent = nayaflow.createAgent({
  name: 'writer',
  description: 'Writes content based on research',
  tools: ['text-generation']
});

// Connect agents in a workflow
const workflow = nayaflow.createWorkflow()
  .addAgent(researchAgent)
  .addAgent(writerAgent)
  .connect(researchAgent, writerAgent);

// Run the workflow
const result = await workflow.execute({
  input: "Create a summary about AI orchestration patterns"
});

console.log(result);`,
      crewai: `import { Crew, Agent, Task } from 'crewai';
import { NayaFlowProvider } from '@nayaflow/crewai';

// Initialize NAYAFlOW provider
const nayaflowProvider = new NayaFlowProvider({
  apiKey: process.env.NAYAFLOW_API_KEY
});

// Define your agents
const researcher = new Agent({
  name: 'Research Specialist',
  goal: 'Find the most accurate and up-to-date information',
  backstory: 'Expert at gathering and analyzing information',
  provider: nayaflowProvider,
  tools: ['web-search', 'document-loader']
});

const writer = new Agent({
  name: 'Content Writer',
  goal: 'Create engaging and informative content',
  backstory: 'Experienced writer with expertise in creating compelling narratives',
  provider: nayaflowProvider,
  tools: ['text-generation']
});

// Define tasks
const researchTask = new Task({
  description: 'Research the latest developments in AI orchestration',
  agent: researcher
});

const writingTask = new Task({
  description: 'Write a comprehensive summary based on the research',
  agent: writer
});

// Create and run the crew
const crew = new Crew({
  agents: [researcher, writer],
  tasks: [researchTask, writingTask],
  workflow: 'sequential',
  monitoring: true
});

const result = await crew.run();
console.log(result);`,
      autogen: `import autogen
from nayaflow.autogen import NayaFlowConfig

# Configure NAYAFlOW
config = NayaFlowConfig(
    api_key="your-nayaflow-api-key",
    orchestration_type="sequential"
)

# Define agents
researcher = autogen.AssistantAgent(
    name="researcher",
    system_message="You are a research specialist who finds accurate information.",
    llm_config=config.get_llm_config()
)

writer = autogen.AssistantAgent(
    name="writer",
    system_message="You are a content writer who creates engaging summaries.",
    llm_config=config.get_llm_config()
)

user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER"
)

# Create a group chat
groupchat = autogen.GroupChat(
    agents=[user_proxy, researcher, writer],
    messages=[],
    max_round=10
)

manager = autogen.GroupChatManager(
    groupchat=groupchat,
    llm_config=config.get_llm_config()
)

# Start the conversation
user_proxy.initiate_chat(
    manager,
    message="Create a summary about AI orchestration patterns"
)

# Access the final result
result = user_proxy.last_message()
print(result)`
    },
    sequential: {
      langchain: `import { NayaFlow } from '@nayaflow/langchain';
import { SequentialChain } from '@nayaflow/patterns';

// Initialize NAYAFlOW
const nayaflow = new NayaFlow({
  apiKey: process.env.NAYAFLOW_API_KEY
});

// Define your agents
const dataExtractor = nayaflow.createAgent({
  name: 'extractor',
  description: 'Extracts structured data from documents',
  tools: ['document-parser']
});

const dataAnalyzer = nayaflow.createAgent({
  name: 'analyzer',
  description: 'Analyzes extracted data for insights',
  tools: ['data-analysis']
});

const reportGenerator = nayaflow.createAgent({
  name: 'reporter',
  description: 'Generates reports from analyzed data',
  tools: ['report-generator']
});

// Create a sequential chain
const sequentialChain = new SequentialChain({
  agents: [dataExtractor, dataAnalyzer, reportGenerator],
  inputKey: 'document',
  outputKey: 'report'
});

// Execute the chain
const result = await sequentialChain.invoke({
  document: "https://example.com/financial-data.pdf"
});

console.log(result.report);`,
      crewai: `import { Crew, Agent, Task } from 'crewai';
import { NayaFlowProvider, SequentialWorkflow } from '@nayaflow/crewai';

// Initialize NAYAFlOW provider
const nayaflowProvider = new NayaFlowProvider({
  apiKey: process.env.NAYAFLOW_API_KEY
});

// Define your agents
const extractor = new Agent({
  name: 'Data Extractor',
  goal: 'Extract structured data from documents accurately',
  provider: nayaflowProvider,
  tools: ['document-parser']
});

const analyzer = new Agent({
  name: 'Data Analyst',
  goal: 'Analyze data to discover meaningful insights',
  provider: nayaflowProvider,
  tools: ['data-analysis']
});

const reporter = new Agent({
  name: 'Report Generator',
  goal: 'Create clear and informative reports',
  provider: nayaflowProvider,
  tools: ['report-generator']
});

// Define tasks in sequence
const extractionTask = new Task({
  description: 'Extract all financial data from the provided document',
  agent: extractor,
  expectedOutput: 'Structured financial data'
});

const analysisTask = new Task({
  description: 'Analyze the extracted financial data for trends and insights',
  agent: analyzer,
  expectedOutput: 'Analysis report with key findings'
});

const reportingTask = new Task({
  description: 'Generate a comprehensive financial report based on the analysis',
  agent: reporter,
  expectedOutput: 'Final financial report'
});

// Create and configure the sequential workflow
const workflow = new SequentialWorkflow({
  tasks: [extractionTask, analysisTask, reportingTask]
});

// Create and run the crew
const crew = new Crew({
  agents: [extractor, analyzer, reporter],
  tasks: [extractionTask, analysisTask, reportingTask],
  workflow: workflow
});

const result = await crew.run({
  document: "https://example.com/financial-data.pdf"
});
console.log(result);`,
      autogen: `import autogen
from nayaflow.autogen import NayaFlowConfig, SequentialWorkflow

# Configure NAYAFlOW
config = NayaFlowConfig(
    api_key="your-nayaflow-api-key"
)

# Define agents
extractor = autogen.AssistantAgent(
    name="extractor",
    system_message="You extract structured data from documents.",
    llm_config=config.get_llm_config()
)

analyzer = autogen.AssistantAgent(
    name="analyzer",
    system_message="You analyze data to find meaningful insights.",
    llm_config=config.get_llm_config()
)

reporter = autogen.AssistantAgent(
    name="reporter",
    system_message="You create comprehensive reports from analyzed data.",
    llm_config=config.get_llm_config()
)

user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER"
)

# Create a sequential workflow
workflow = SequentialWorkflow(
    agents=[extractor, analyzer, reporter],
    user_proxy=user_proxy
)

# Run the workflow
result = workflow.run(
    initial_message="Process this financial document: https://example.com/financial-data.pdf"
)

print(result)`
    },
    parallel: {
      langchain: `import { NayaFlow } from '@nayaflow/langchain';
import { ParallelChain } from '@nayaflow/patterns';

// Initialize NAYAFlOW
const nayaflow = new NayaFlow({
  apiKey: process.env.NAYAFLOW_API_KEY
});

// Define your parallel agents
const sentimentAnalyzer = nayaflow.createAgent({
  name: 'sentiment',
  description: 'Analyzes sentiment of customer feedback',
  tools: ['sentiment-analysis']
});

const categoryClassifier = nayaflow.createAgent({
  name: 'classifier',
  description: 'Classifies feedback into product categories',
  tools: ['text-classification']
});

const keyPointExtractor = nayaflow.createAgent({
  name: 'extractor',
  description: 'Extracts key points from customer feedback',
  tools: ['key-point-extraction']
});

// Create an aggregator agent
const insightAggregator = nayaflow.createAgent({
  name: 'aggregator',
  description: 'Aggregates insights from multiple analyses',
  tools: ['data-aggregation']
});

// Create a parallel chain
const parallelChain = new ParallelChain({
  parallelAgents: [sentimentAnalyzer, categoryClassifier, keyPointExtractor],
  aggregatorAgent: insightAggregator,
  inputKey: 'feedback',
  outputKey: 'insights'
});

// Process multiple feedback items in parallel
const customerFeedback = [
  "I love the new interface, but the search function is still slow.",
  "The mobile app crashes frequently on Android devices.",
  "Customer support was very helpful resolving my billing issue."
];

const results = await parallelChain.batchInvoke({
  feedback: customerFeedback
});

console.log(results.insights);`,
      crewai: `import { Crew, Agent, Task } from 'crewai';
import { NayaFlowProvider, ParallelWorkflow } from '@nayaflow/crewai';

// Initialize NAYAFlOW provider
const nayaflowProvider = new NayaFlowProvider({
  apiKey: process.env.NAYAFLOW_API_KEY
});

// Define your agents
const sentimentAnalyzer = new Agent({
  name: 'Sentiment Analyzer',
  goal: 'Accurately determine the sentiment of customer feedback',
  provider: nayaflowProvider,
  tools: ['sentiment-analysis']
});

const categoryClassifier = new Agent({
  name: 'Category Classifier',
  goal: 'Classify feedback into the correct product category',
  provider: nayaflowProvider,
  tools: ['text-classification']
});

const keyPointExtractor = new Agent({
  name: 'Key Point Extractor',
  goal: 'Extract the most important points from customer feedback',
  provider: nayaflowProvider,
  tools: ['key-point-extraction']
});

const insightAggregator = new Agent({
  name: 'Insight Aggregator',
  goal: 'Combine multiple analyses into actionable insights',
  provider: nayaflowProvider,
  tools: ['data-aggregation']
});

// Define parallel tasks
const sentimentTask = new Task({
  description: 'Analyze the sentiment of the customer feedback',
  agent: sentimentAnalyzer
});

const categoryTask = new Task({
  description: 'Classify the feedback into product categories',
  agent: categoryClassifier
});

const extractionTask = new Task({
  description: 'Extract key points from the customer feedback',
  agent: keyPointExtractor
});

// Define aggregation task
const aggregationTask = new Task({
  description: 'Aggregate the sentiment, category, and key points into a comprehensive insight',
  agent: insightAggregator,
  dependencies: [sentimentTask, categoryTask, extractionTask]
});

// Create a parallel workflow
const workflow = new ParallelWorkflow({
  parallelTasks: [sentimentTask, categoryTask, extractionTask],
  aggregationTask: aggregationTask
});

// Create and run the crew
const crew = new Crew({
  agents: [sentimentAnalyzer, categoryClassifier, keyPointExtractor, insightAggregator],
  tasks: [sentimentTask, categoryTask, extractionTask, aggregationTask],
  workflow: workflow
});

const customerFeedback = [
  "I love the new interface, but the search function is still slow.",
  "The mobile app crashes frequently on Android devices.",
  "Customer support was very helpful resolving my billing issue."
];

const results = await Promise.all(
  customerFeedback.map(feedback => crew.run({ feedback }))
);
console.log(results);`,
      autogen: `import autogen
from nayaflow.autogen import NayaFlowConfig, ParallelWorkflow

# Configure NAYAFlOW
config = NayaFlowConfig(
    api_key="your-nayaflow-api-key"
)

# Define agents
sentiment_analyzer = autogen.AssistantAgent(
    name="sentiment_analyzer",
    system_message="You analyze the sentiment of customer feedback.",
    llm_config=config.get_llm_config()
)

category_classifier = autogen.AssistantAgent(
    name="category_classifier",
    system_message="You classify feedback into product categories.",
    llm_config=config.get_llm_config()
)

key_point_extractor = autogen.AssistantAgent(
    name="key_point_extractor",
    system_message="You extract key points from customer feedback.",
    llm_config=config.get_llm_config()
)

insight_aggregator = autogen.AssistantAgent(
    name="insight_aggregator",
    system_message="You aggregate insights from multiple analyses.",
    llm_config=config.get_llm_config()
)

user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER"
)

# Create a parallel workflow
workflow = ParallelWorkflow(
    parallel_agents=[sentiment_analyzer, category_classifier, key_point_extractor],
    aggregator_agent=insight_aggregator,
    user_proxy=user_proxy
)

# Customer feedback to process
customer_feedback = [
    "I love the new interface, but the search function is still slow.",
    "The mobile app crashes frequently on Android devices.",
    "Customer support was very helpful resolving my billing issue."
]

# Process feedback in parallel
results = []
for feedback in customer_feedback:
    result = workflow.run(
        initial_message=f"Analyze this customer feedback: {feedback}"
    )
    results.append(result)

print(results)`
    },
    routing: {
      langchain: `import { NayaFlow } from '@nayaflow/langchain';
import { DynamicRouter } from '@nayaflow/patterns';

// Initialize NAYAFlOW
const nayaflow = new NayaFlow({
  apiKey: process.env.NAYAFLOW_API_KEY
});

// Define specialized agents
const technicalSupportAgent = nayaflow.createAgent({
  name: 'tech-support',
  description: 'Handles technical product issues',
  tools: ['knowledge-base-search', 'troubleshooting-guide']
});

const billingAgent = nayaflow.createAgent({
  name: 'billing',
  description: 'Resolves billing and payment issues',
  tools: ['payment-system-api', 'invoice-generator']
});

const generalInfoAgent = nayaflow.createAgent({
  name: 'general-info',
  description: 'Provides general product information',
  tools: ['product-catalog', 'feature-documentation']
});

// Create router agent
const routerAgent = nayaflow.createAgent({
  name: 'router',
  description: 'Routes customer queries to appropriate specialized agents',
  tools: ['intent-classification']
});

// Configure dynamic routing
const router = new DynamicRouter({
  routerAgent,
  destinationAgents: {
    'technical': technicalSupportAgent,
    'billing': billingAgent,
    'general': generalInfoAgent
  },
  inputKey: 'query',
  outputKey: 'response'
});

// Process customer queries
const customerQueries = [
  "I can't log into my account after the recent update",
  "I was charged twice for my monthly subscription",
  "What new features are included in the premium plan?"
];

const responses = await Promise.all(
  customerQueries.map(query => router.invoke({ query }))
);

console.log(responses);`,
      crewai: `import { Crew, Agent, Task } from 'crewai';
import { NayaFlowProvider, DynamicRoutingWorkflow } from '@nayaflow/crewai';

// Initialize NAYAFlOW provider
const nayaflowProvider = new NayaFlowProvider({
  apiKey: process.env.NAYAFLOW_API_KEY
});

// Define specialized agents
const technicalSupportAgent = new Agent({
  name: 'Technical Support Specialist',
  goal: 'Resolve technical product issues efficiently',
  provider: nayaflowProvider,
  tools: ['knowledge-base-search', 'troubleshooting-guide']
});

const billingAgent = new Agent({
  name: 'Billing Specialist',
  goal: 'Resolve billing and payment issues accurately',
  provider: nayaflowProvider,
  tools: ['payment-system-api', 'invoice-generator']
});

const generalInfoAgent = new Agent({
  name: 'Product Information Specialist',
  goal: 'Provide comprehensive product information',
  provider: nayaflowProvider,
  tools: ['product-catalog', 'feature-documentation']
});

// Define router agent
const routerAgent = new Agent({
  name: 'Query Router',
  goal: 'Accurately route customer queries to the right specialist',
  provider: nayaflowProvider,
  tools: ['intent-classification']
});

// Define routing task
const routingTask = new Task({
  description: 'Determine the appropriate specialist for the customer query',
  agent: routerAgent
});

// Define specialist tasks
const technicalTask = new Task({
  description: 'Resolve technical issues with the product',
  agent: technicalSupportAgent
});

const billingTask = new Task({
  description: 'Resolve billing and payment issues',
  agent: billingAgent
});

const generalInfoTask = new Task({
  description: 'Provide general product information',
  agent: generalInfoAgent
});

// Create dynamic routing workflow
const workflow = new DynamicRoutingWorkflow({
  routingTask,
  destinationTasks: {
    'technical': technicalTask,
    'billing': billingTask,
    'general': generalInfoTask
  }
});

// Create and configure the crew
const crew = new Crew({
  agents: [routerAgent, technicalSupportAgent, billingAgent, generalInfoAgent],
  tasks: [routingTask, technicalTask, billingTask, generalInfoTask],
  workflow: workflow
});

// Process customer queries
const customerQueries = [
  "I can't log into my account after the recent update",
  "I was charged twice for my monthly subscription",
  "What new features are included in the premium plan?"
];

const responses = await Promise.all(
  customerQueries.map(query => crew.run({ query }))
);
console.log(responses);`,
      autogen: `import autogen
from nayaflow.autogen import NayaFlowConfig, DynamicRoutingWorkflow

# Configure NAYAFlOW
config = NayaFlowConfig(
    api_key="your-nayaflow-api-key"
)

# Define specialized agents
tech_support = autogen.AssistantAgent(
    name="tech_support",
    system_message="You handle technical product issues and troubleshooting.",
    llm_config=config.get_llm_config()
)

billing_support = autogen.AssistantAgent(
    name="billing_support",
    system_message="You resolve billing and payment issues.",
    llm_config=config.get_llm_config()
)

general_info = autogen.AssistantAgent(
    name="general_info",
    system_message="You provide general product information and answer feature questions.",
    llm_config=config.get_llm_config()
)

# Define router agent
router = autogen.AssistantAgent(
    name="router",
    system_message="You analyze customer queries and route them to the appropriate specialist.",
    llm_config=config.get_llm_config()
)

user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER"
)

# Create routing workflow
workflow = DynamicRoutingWorkflow(
    router_agent=router,
    destination_agents={
        "technical": tech_support,
        "billing": billing_support,
        "general": general_info
    },
    user_proxy=user_proxy
)

# Customer queries to process
customer_queries = [
    "I can't log into my account after the recent update",
    "I was charged twice for my monthly subscription",
    "What new features are included in the premium plan?"
]

# Process queries through dynamic routing
results = []
for query in customer_queries:
    result = workflow.run(
        initial_message=f"Customer query: {query}"
    )
    results.append(result)

print(results)`
    }
  };

  // Generate placeholders for pattern diagrams
  const createPlaceholderImages = () => {
    // In a real application, we'd create these images on the server
    // For now, we'll just render a fallback if the image doesn't exist
  };

  React.useEffect(() => {
    createPlaceholderImages();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Main Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        {mainTabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-4 px-2 text-sm font-medium flex flex-col items-center transition-colors ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-xl mb-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            {mainTabs.find(tab => tab.id === activeTab)?.label}
          </h3>
          <p className="text-gray-600">
            {activeTab === 'quickstart' && 'Get started quickly with NAYAFlOW using this simple integration template.'}
            {activeTab === 'sequential' && 'Process data through a sequence of specialized agents for step-by-step workflows.'}
            {activeTab === 'parallel' && 'Distribute tasks across multiple agents simultaneously and aggregate results for increased efficiency.'}
            {activeTab === 'routing' && 'Dynamically route tasks to specialized agents based on content analysis and decision rules.'}
          </p>
        </div>

        {/* Visual Diagram */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="relative">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h4 className="text-center font-bold text-lg text-blue-600 mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Pattern</h4>
              <div className="flex items-center justify-center space-x-6 py-8">
                {activeTab === 'sequential' && (
                  <>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 w-24 h-24 flex items-center justify-center text-center">Agent 1</div>
                    <div className="text-blue-500">→</div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 w-24 h-24 flex items-center justify-center text-center">Agent 2</div>
                    <div className="text-blue-500">→</div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 w-24 h-24 flex items-center justify-center text-center">Agent 3</div>
                  </>
                )}
                
                {activeTab === 'parallel' && (
                  <>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 w-24 h-24 flex items-center justify-center text-center">Agent 1</div>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 w-24 h-24 flex items-center justify-center text-center">Agent 2</div>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 w-24 h-24 flex items-center justify-center text-center">Agent 3</div>
                    </div>
                    <div className="text-purple-500">→</div>
                    <div className="p-4 bg-purple-200 rounded-lg border border-purple-300 w-32 h-32 flex items-center justify-center text-center">Aggregator Agent</div>
                  </>
                )}
                
                {activeTab === 'routing' && (
                  <>
                    <div className="p-4 bg-green-100 rounded-lg border border-green-200 w-32 h-32 flex items-center justify-center text-center">Router Agent</div>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex items-center">
                        <div className="text-green-500 transform -rotate-45">→</div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200 w-24 h-24 flex items-center justify-center text-center">Agent A</div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-green-500">→</div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200 w-24 h-24 flex items-center justify-center text-center">Agent B</div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-green-500 transform rotate-45">→</div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200 w-24 h-24 flex items-center justify-center text-center">Agent C</div>
                      </div>
                    </div>
                  </>
                )}
                
                {activeTab === 'quickstart' && (
                  <>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 w-32 h-32 flex items-center justify-center text-center">NAYAFlOW</div>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="text-yellow-500">→</div>
                      <div className="p-4 bg-yellow-100 rounded-lg border border-yellow-200 w-64 h-32 flex items-center justify-center text-center">
                        <div>Connect your agents with just a few lines of code</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          {platformTabs.map((platform) => (
            <button
              key={platform.id}
              className={`py-2 px-4 text-sm font-medium ${
                activePlatform === platform.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActivePlatform(platform.id)}
            >
              {platform.label}
            </button>
          ))}
        </div>

        {/* Code Example */}
        <div className="rounded-lg overflow-hidden">
          {typeof SyntaxHighlighter !== 'string' && (
            <SyntaxHighlighter 
              language={activePlatform === 'autogen' ? 'python' : 'javascript'} 
              style={tomorrow || {}} // Provide a fallback empty style
              customStyle={{
                borderRadius: '0.5rem',
                fontSize: '0.9rem',
                padding: '1.5rem',
                lineHeight: '1.5'
              }}
            >
              {codeExamples[activeTab][activePlatform]}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsageGuide; 