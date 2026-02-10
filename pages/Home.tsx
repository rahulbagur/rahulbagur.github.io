import React from 'react';
import Magnetic from '../components/Magnetic';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center min-h-[60vh] max-w-4xl pt-12">
      <div className="space-y-6">
        {/* Header removed; handled by Layout.tsx to enable seamless transition from intro */}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
          Architecting the future of <span className="text-white font-medium">revenue operations</span>.
        </h1>
        
        <p className="max-w-xl text-lg text-gray-400 leading-relaxed">
          High performance automation, data workflows, and GTM strategy designed for technical excellence and measurable business impact.
        </p>

        <div className="pt-8">
          <Magnetic>
            <Link 
              to="/portfolio" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:bg-gray-200"
            >
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
        </div>
      </div>

    </div>
  );
};

export default Home;