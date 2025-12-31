
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 glass">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <img 
            src="https://raw.githubusercontent.com/Llama-2-7b-chat-hf/placeholder/main/wf-logo.png" 
            alt="WF Logo" 
            className="h-14 w-auto filter invert brightness-[2] drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="text-xl font-bold gradient-text tracking-tighter uppercase italic">
            Wewoli F.
          </div>
        </div>
        <div className="text-slate-500 text-sm font-medium">
          &copy; {currentYear} Wewoli F. All rights reserved.
        </div>
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
