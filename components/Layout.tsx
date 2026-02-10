import React, { useState, useEffect, ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Magnetic from './Magnetic';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Animation Steps:
  // 0: Initial White Screen
  // 1: "RAHUL" appears (Black)
  // 2: "MAHENDRA" appears (Black)
  // 3: "BAGUR" appears (Black)
  // 4: Colors Invert (Black BG, White Text)
  // 5: Final State (Minimizes to logo position)
  const [step, setStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    // Check session storage to skip animation on subsequent visits
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setStep(5);
    } else {
      const timers: ReturnType<typeof setTimeout>[] = [];
      
      // Sequence timing - Faster, tighter sequence (~0.6s - 0.8s gaps)
      // Total intro time: ~4.0s (Increased delay at the end)
      timers.push(setTimeout(() => setStep(1), 500));   // Rahul starts
      timers.push(setTimeout(() => setStep(2), 1100));  // Mahendra starts (+0.6s)
      timers.push(setTimeout(() => setStep(3), 1700));  // Bagur starts (+0.6s)
      timers.push(setTimeout(() => setStep(4), 2500));  // Invert Colors (+0.8s)
      timers.push(setTimeout(() => {
        setStep(5); // Minimize & Load Content
        sessionStorage.setItem('hasVisited', 'true');
      }, 4000)); // Increased delay to 1.5s after inversion before minimizing

      return () => timers.forEach(clearTimeout);
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const introComplete = step === 5;
  const isInvertPhase = step >= 4; // Invert colors at step 4
  const isWhitePhase = !isInvertPhase && !introComplete;

  return (
    <div className={`relative min-h-screen w-full overflow-hidden font-mono selection:bg-white selection:text-black`}>
      
      {/* Background Layer: Handles the White -> Black transition */}
      <div 
        className={`fixed inset-0 z-0 transition-colors duration-[1000ms] ease-in-out ${isWhitePhase ? 'bg-white' : 'bg-black'}`}
      />

      {/* Ambient Mesh Background - Only visible in dark mode */}
      <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-[1500ms] ${isWhitePhase ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full mix-blend-screen filter blur-[100px] animate-aurora-1" />
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full mix-blend-screen filter blur-[100px] animate-aurora-2 animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] rounded-full mix-blend-screen filter blur-[100px] animate-aurora-3 animation-delay-4000" />
      </div>

      {/* Navigation Header Structure */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-opacity duration-[1500ms] ${introComplete ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
           {/* Placeholder for Logo/Title space - This is where the minimized text effectively lives in the layout flow */}
           <div className="w-24 h-10 md:w-48" /> 

           {/* Desktop Nav */}
           <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2">
             {['Home', 'Portfolio', 'About'].map((item) => {
               const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
               return (
                 <Magnetic key={item}>
                   <NavLink 
                     to={path}
                     className={({ isActive }) => 
                       `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                         isActive ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                       }`
                     }
                   >
                     {item}
                   </NavLink>
                 </Magnetic>
               );
             })}
           </div>

           {/* Mobile Menu Toggle */}
           <div className="md:hidden">
             <button onClick={() => setMenuOpen(!menuOpen)} className={`p-2 transition-colors ${introComplete ? 'text-white' : 'text-transparent'}`}>
               {menuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
           </div>
        </div>
      </nav>

      {/* 
        FINAL HEADER STATE:
        This text appears only on the Home page after the intro is complete.
        It replaces the animated text.
      */}
      {isHome && (
        <div 
            className={`fixed top-32 left-0 w-full z-20 pointer-events-none transition-opacity duration-[2000ms] ${introComplete ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="max-w-7xl mx-auto px-6">
                 <h2 className="text-gray-500 text-sm tracking-widest uppercase">
                    Rahul Mahendra Bagur — Revenue Systems Architect
                 </h2>
            </div>
        </div>
      )}

      {/* 
        ANIMATED INTRO OVERLAY
      */}
      <div className="fixed inset-0 z-50 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl px-6 relative h-full">
            
            {/* RAHUL */}
            <div 
                className="absolute transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1)"
                style={{
                    // Intro: 35% from top. Final: Moves UP to where the header is, and fades out.
                    top: introComplete ? '8rem' : '35%', 
                    left: '1.5rem', 
                    opacity: introComplete ? 0 : (step >= 1 ? 1 : 0),
                    transform: 'translateY(-50%)'
                }}
            >
                <span className={`block font-bold leading-none tracking-tight transition-colors duration-[1000ms]
                    text-4xl md:text-7xl lg:text-8xl 
                    ${isWhitePhase ? 'text-black' : 'text-white'}
                `}>
                    RAHUL
                </span>
            </div>

            {/* MAHENDRA */}
            <div 
                className="absolute transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1)"
                style={{
                    // Intro: 50% from top (Center). Final: Moves UP.
                    top: introComplete ? '8rem' : '50%', 
                    left: '1.5rem',
                    opacity: introComplete ? 0 : (step >= 2 ? 1 : 0),
                    transform: 'translateY(-50%)'
                }}
            >
                 <span className={`block font-bold leading-none tracking-tight transition-colors duration-[1000ms]
                    text-4xl md:text-7xl lg:text-8xl 
                    ${isWhitePhase ? 'text-black' : 'text-white'}
                `}>
                    MAHENDRA
                </span>
            </div>

            {/* BAGUR */}
            <div 
                className="absolute transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1)"
                style={{
                    // Intro: 65% from top. Final: Moves UP.
                    top: introComplete ? '8rem' : '65%', 
                    left: '1.5rem',
                    opacity: introComplete ? 0 : (step >= 3 ? 1 : 0),
                    transform: 'translateY(-50%)'
                }}
            >
                 <span className={`block font-bold leading-none tracking-tight transition-colors duration-[1000ms]
                    text-4xl md:text-7xl lg:text-8xl 
                    ${isWhitePhase ? 'text-black' : 'text-white'}
                `}>
                    BAGUR
                </span>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main 
        className={`relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 transition-all duration-[1500ms] delay-300 ${
          introComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </main>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         {['Home', 'Portfolio', 'About'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <NavLink 
                key={item}
                to={path}
                className={({ isActive }) => 
                  `text-2xl font-light ${isActive ? 'text-white' : 'text-gray-500'}`
                }
              >
                {item}
              </NavLink>
            );
          })}
      </div>

      {/* Subtle Footer */}
      <footer className={`fixed bottom-6 right-6 z-40 text-[10px] text-gray-700 font-mono transition-opacity duration-[2000ms] ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        SYSTEM.VER.2.0.4
      </footer>
    </div>
  );
};

export default Layout;