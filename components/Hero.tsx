
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 lg:pt-0">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <img 
              src="https://raw.githubusercontent.com/Llama-2-7b-chat-hf/placeholder/main/wf-logo.png" 
              alt="WF Brand" 
              className="h-20 w-auto filter invert brightness-[2] opacity-80 mb-4 animate-pulse"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
          </div>
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <span className="gradient-text">Wewoli F</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            A passionate <span className="text-white font-medium">Web Developer</span> based in <span className="text-white font-medium">Ghana</span>. I build accessible, high-performance, and visually stunning web experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-center"
            >
              View Projects
            </a>
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 glass border border-white/10 hover:border-white/20 text-white rounded-xl font-semibold transition-all active:scale-95 text-center"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Image Frame */}
            <div className="relative z-10 glass p-3 rounded-[3rem] border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img 
                src="https://raw.githubusercontent.com/Llama-2-7b-chat-hf/placeholder/main/favour.png" 
                alt="Wewoli F - Favour" 
                className="w-full max-w-[400px] h-auto rounded-[2.5rem] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544606111-063996772733?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-2xl font-black italic text-xl shadow-xl border-2 border-slate-950">
                #11 FAVOUR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
