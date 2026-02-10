import React from 'react';
import SpotlightCard from '../components/SpotlightCard';
import Magnetic from '../components/Magnetic';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh]">
      
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-light mb-2">Initialize_Handshake</h1>
          <p className="text-gray-500 font-mono text-sm">/src/pages/contact.tsx</p>
        </div>
        
        <p className="text-gray-400 text-lg leading-relaxed">
          I'm currently available for select advisory roles and architectural consulting. If you have a complex revenue system challenge, let's engineer a solution.
        </p>

        <div className="flex gap-4 pt-4">
          <Magnetic>
            <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
              <Mail size={20} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
              <Linkedin size={20} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
              <Github size={20} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
              <Twitter size={20} />
            </a>
          </Magnetic>
        </div>
      </div>

      <SpotlightCard className="p-8 md:p-12 bg-black/50">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500">Identity</label>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500">Coordinates</label>
            <input 
              type="email" 
              placeholder="email@domain.com"
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500">Transmission</label>
            <textarea 
              rows={4}
              placeholder="Project details..."
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors font-mono resize-none"
            />
          </div>
          
          <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-mono text-sm hover:bg-white hover:text-black transition-all rounded">
            SEND_TRANSMISSION
          </button>
        </form>
      </SpotlightCard>

    </div>
  );
};

export default Contact;