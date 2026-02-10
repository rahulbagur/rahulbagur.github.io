import React from 'react';
import SpotlightCard from '../components/SpotlightCard';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Web Intelligence',
    category: 'Automation',
    desc: 'Focus on detecting ICP (Ideal Customer Profile) rules and website technologies at scale.',
    tech: ['Python', 'Scrapy', 'Classification']
  },
  {
    title: 'GTM Unified Flow',
    category: 'Architecture',
    desc: 'Mapping the complete revenue journey from initial intent to the final close.',
    tech: ['Blueprint', 'CRM', 'Process Design']
  },
  {
    title: 'AI SDR System',
    category: 'AI Agent',
    desc: 'Implementing end-to-end automated outreach using advanced Large Language Models.',
    tech: ['LLMs', 'Apollo API', 'Workflow']
  },
  {
    title: 'Revenue Flow',
    category: 'Data Viz',
    desc: 'Visualizing leakage points and friction in multi-channel attribution models.',
    tech: ['Tableau', 'SQL', 'Data Modeling']
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
        <div>
          <h1 className="text-4xl font-light mb-2">Projects</h1>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-gray-400 text-sm">Active Projects</p>
          <p className="text-2xl font-mono">04</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <SpotlightCard key={index} className="group h-full flex flex-col justify-between p-8 hover:bg-white/5 cursor-pointer">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-indigo-400 border border-indigo-500/30 px-2 py-1 rounded">
                  {project.category}
                </span>
                <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl text-white font-medium mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.desc}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                  {t}{i < project.tech.length - 1 ? ' /' : ''}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;