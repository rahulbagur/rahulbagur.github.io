import React from 'react';
import SpotlightCard from '../components/SpotlightCard';

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Sidebar / Title */}
      <div className="lg:col-span-4 space-y-8">
        <h1 className="text-4xl font-light">About Me</h1>
        
        <div className="text-sm text-gray-400 space-y-2 border-t border-white/10 pt-4">
            <h4 className="text-white uppercase tracking-wider text-xs mb-2">Strategic Focus</h4>
            <p className="leading-relaxed">Automation architecture, GTM systems design, CRM structuring, AI assisted outbound, and data backed execution layers.</p>
        </div>

        {/* Bio Section - Moved here */}
        <div className="text-sm text-gray-400 space-y-2">
           <p className="text-xl text-white leading-relaxed font-light">
            I design revenue systems that execute. Engineer by foundation. Operator by choice.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-8 space-y-12">
        
        {/* Narrative / Philosophy Sections */}
        <section className="space-y-8 mt-4 lg:mt-0">
             <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-indigo-400">Core Pillar</h3>
                <p className="text-gray-400 leading-relaxed">
                  Aerospace Engineering trained me to think in constraints, structure, and trade-offs. Complex problems get broken into components. Components become systems. Systems produce outcomes. That mental model now drives how I build GTM and revenue infrastructure.
                </p>
             </div>

             <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-indigo-400">Professional Proof</h3>
                <p className="text-gray-400 leading-relaxed">
                  At CoinDCX, I worked on building new verticals where no clear process existed. I structured workflows, aligned stakeholders, and translated ambiguous goals into operational systems that moved revenue.
                </p>
             </div>

             <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-indigo-400">The "Why"</h3>
                <p className="text-gray-400 leading-relaxed">
                  Most growth challenges are not creative problems. They are coordination failures. I focus on designing systems that reduce friction, increase clarity, and scale execution without chaos.
                </p>
             </div>
        </section>

        {/* Skill Clusters */}
        <section>
          <h2 className="text-2xl mb-6 border-b border-white/10 pb-4">Skill Clusters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <SpotlightCard className="p-6">
                <h4 className="text-white font-medium mb-2">Revenue / Growth</h4>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">Databricks, MoEngage, Apollo, Zoho, SalesIQ</p>
             </SpotlightCard>
             <SpotlightCard className="p-6">
                <h4 className="text-white font-medium mb-2">Technical</h4>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">Python, SQL, Node.js, HTML, CSS</p>
             </SpotlightCard>
             <SpotlightCard className="p-6">
                <h4 className="text-white font-medium mb-2">AI / Automation</h4>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">Gemini CLI, Prompt Engineering, Workflow</p>
             </SpotlightCard>
             <SpotlightCard className="p-6">
                <h4 className="text-white font-medium mb-2">Design / Ops</h4>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">Figma, Blender, Google Workspace, Zoom</p>
             </SpotlightCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;