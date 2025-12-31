
import React from 'react';

interface AboutProps {
  onContactClick: () => void;
}

const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://raw.githubusercontent.com/Llama-2-7b-chat-hf/placeholder/main/favour.png" 
              alt="Wewoli F" 
              className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1544606111-063996772733?q=80&w=1000&auto=format&fit=crop";
              }}
            />
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              #11 Favour
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold italic tracking-tight uppercase">
              Driven by <span className="text-blue-500">Passion</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          
          <p className="text-slate-400 text-lg leading-relaxed">
            I'm <span className="text-white font-semibold">Wewoli F</span>, a web developer who brings the same discipline and teamwork from the basketball court to the world of software engineering. Just like in a high-stakes game, I believe every line of code counts towards a winning user experience.
          </p>
          
          <p className="text-slate-400 text-lg leading-relaxed">
            Based in Ghana, I specialize in building high-performance web applications that are as agile and responsive as a fast break. Whether I'm debugging complex logic or designing sleek interfaces, my goal is always to deliver a "slam dunk" project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-2xl glass border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <i className="fa-solid fa-basketball"></i>
              </div>
              <div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-tighter">Athletic Spirit</div>
                <div className="text-white font-medium">Team Player</div>
              </div>
            </div>
            <div className="p-5 rounded-2xl glass border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                <i className="fa-solid fa-code"></i>
              </div>
              <div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-tighter">Tech Stack</div>
                <div className="text-white font-medium">Full Stack Dev</div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button 
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all group"
            >
              Let's Build Something Together
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
