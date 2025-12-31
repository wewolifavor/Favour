
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (view: 'landing' | 'about-us' | 'contact', section?: string) => void;
  currentView: 'landing' | 'about-us' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', type: 'landing' },
    { name: 'About', id: 'about', type: 'page' },
    { name: 'Projects', id: 'projects', type: 'page' },
    { name: 'Skills', id: 'skills', type: 'page' },
    { name: 'Contact', id: 'contact', type: 'contact' },
  ];

  const handleClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (link.type === 'landing') {
      onNavigate('landing');
    } else if (link.type === 'page') {
      onNavigate('about-us', link.id);
    } else if (link.type === 'contact') {
      onNavigate('contact');
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer group gap-2"
          onClick={() => onNavigate('landing')}
        >
          <img 
            src="https://raw.githubusercontent.com/Llama-2-7b-chat-hf/placeholder/main/wf-logo.png" 
            alt="WF Brand Logo" 
            className="h-12 w-auto filter invert brightness-[2] drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector('.fallback-text')) {
                const text = document.createElement('span');
                text.className = 'text-2xl font-bold gradient-text tracking-tighter fallback-text';
                text.innerText = 'WF.';
                parent.appendChild(text);
              }
            }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              onClick={(e) => handleClick(e, link)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-blue-400 ${
                activeSection === link.id ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl text-slate-300"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-white/10 p-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              onClick={(e) => handleClick(e, link)}
              className={`text-lg font-bold uppercase tracking-widest ${
                activeSection === link.id ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
