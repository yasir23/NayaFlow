const fs = require('fs');
const path = require('path');

// Define image directories
const directories = [
  'public/images/case-studies',
  'public/images/architecture',
  'public/icons'
];

// Create directories if they don't exist
directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${fullPath}`);
  }
});

// Create placeholder SVG files for architecture diagrams
const architectureImages = [
  { name: 'platform-overview.png', title: 'Platform Architecture' },
  { name: 'react-pattern.png', title: 'ReAct Pattern' },
  { name: 'tool-augmented.png', title: 'Tool-Augmented Pattern' },
  { name: 'multi-agent.png', title: 'Multi-Agent Collaboration' },
  { name: 'autonomous-agent.png', title: 'Autonomous Agent' },
  { name: 'langgraph-implementation.png', title: 'LangGraph' },
  { name: 'crewai-implementation.png', title: 'CrewAI' },
  { name: 'autogen-implementation.png', title: 'AutoGen' },
  { name: 'interactive-explorer.png', title: 'Architecture Explorer' }
];

// Create placeholder SVG files for case studies
const caseStudyImages = [
  { name: 'financial-workflow.png', title: 'Financial Workflow' },
  { name: 'healthcare-ai.png', title: 'Healthcare AI' },
  { name: 'retail-inventory.png', title: 'Retail Inventory' },
  { name: 'manufacturing-predictive.png', title: 'Manufacturing' },
  { name: 'customer-service-ai.png', title: 'Customer Service' },
  { name: 'finance-fraud.png', title: 'Finance Fraud' },
  { name: 'logistics-optimization.png', title: 'Logistics' }
];

// Create placeholder SVG files for icons
const iconImages = [
  { name: 'sequential-chain.svg', title: 'Sequential' },
  { name: 'dynamic-routing.svg', title: 'Routing' },
  { name: 'parallel-processing.svg', title: 'Parallel' },
  { name: 'hierarchical.svg', title: 'Hierarchical' }
];

// Generate a placeholder SVG with the given title
function generatePlaceholderSVG(title, colorHex = '#3B82F6') {
  return `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#f0f4f8" />
  <rect x="20" y="20" width="560" height="360" fill="white" stroke="${colorHex}" stroke-width="2" rx="10" />
  <text x="300" y="100" font-family="Arial" font-size="24" text-anchor="middle" fill="${colorHex}" font-weight="bold">${title}</text>
  <text x="300" y="200" font-family="Arial" font-size="16" text-anchor="middle" fill="#64748b">NAYAFlOW Placeholder Image</text>
  <g fill="none" stroke="${colorHex}" stroke-width="2">
    <circle cx="150" cy="250" r="40" />
    <circle cx="300" cy="250" r="40" />
    <circle cx="450" cy="250" r="40" />
    <line x1="190" y1="250" x2="260" y2="250" />
    <line x1="340" y1="250" x2="410" y2="250" />
  </g>
</svg>`;
}

// Generate a placeholder SVG icon
function generatePlaceholderIcon(title, colorHex = '#3B82F6') {
  return `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" fill="none" />
  <circle cx="12" cy="12" r="10" stroke="${colorHex}" stroke-width="2" fill="none" />
  <text x="12" y="17" font-family="Arial" font-size="12" text-anchor="middle" fill="${colorHex}" font-weight="bold">${title[0]}</text>
</svg>`;
}

// Create architecture images
architectureImages.forEach(img => {
  const filePath = path.join(process.cwd(), 'public/images/architecture', img.name);
  const svgContent = generatePlaceholderSVG(img.title, '#3B82F6');
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created placeholder image: ${filePath}`);
});

// Create case study images
caseStudyImages.forEach(img => {
  const filePath = path.join(process.cwd(), 'public/images/case-studies', img.name);
  const svgContent = generatePlaceholderSVG(img.title, '#0EA5E9');
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created placeholder image: ${filePath}`);
});

// Create icon images
iconImages.forEach(img => {
  const filePath = path.join(process.cwd(), 'public/icons', img.name);
  const svgContent = generatePlaceholderIcon(img.title, '#3B82F6');
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created placeholder icon: ${filePath}`);
});

console.log('All placeholder images created successfully!'); 