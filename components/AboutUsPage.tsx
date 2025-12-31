
import React, { useEffect } from 'react';
import { PROJECTS, SKILLS } from '../constants.tsx';

interface AboutUsPageProps {
  initialSection?: string;
  onBack: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ initialSection, onBack }) => {
  useEffect(() => {
    if (initialSection) {
      const el = document.getElementById(`full-${initialSection}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [initialSection]);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 animate-in fade-in duration-700">
      {/* Narrative Header */}
      <header id="full-home" className="px-6 py-20 text-center max-w-4xl mx-auto space-y-6">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Landing
        </button>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
          About <span className="text-blue-500">Us</span>
        </h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-xl text-slate-400 font-light leading-relaxed">
          Wewoli F is more than just a name. It's a commitment to excellence, a fusion of athletic discipline and technical mastery. We build the digital future, one line of code at a time.
        </p>
      </header>

      {/* The Story Section */}
      <section id="full-about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight italic">
              Our <span className="text-purple-500">Identity</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              At Wewoli F, we believe that web development is a team sport. Founded by a visionary with a background in competitive basketball, our philosophy is rooted in precision, agility, and the relentless pursuit of the "slam dunk" solution. 
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-400 text-xl">
              "We don't just build websites; we craft interactive legacies that stand the test of time and technology."
            </blockquote>
            <p className="text-slate-300 text-lg leading-relaxed">
              Based in the vibrant heart of Ghana, our reach is global. We leverage modern stacks like React, Supabase, and Tailwind to deliver applications that aren't just functional—they are experiences.
            </p>
          </div>
          <div className="glass rounded-[3rem] p-4 border border-white/10 overflow-hidden relative group">
            <img 
              src="https://raw.githubusercontent.com/Llama-2-7b-chat-hf/placeholder/main/favour.png" 
              alt="Wewoli F - Brand Identity" 
              className="rounded-[2.5rem] w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1544606111-063996772733?q=80&w=1000&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* The Toolkit (Skills) Section */}
      <section id="full-skills" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight italic">The <span className="text-blue-500">Toolkit</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The technologies we use to build high-performance, accessible digital architectures.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 transition-colors">
                    <i className={`${skill.icon} text-3xl text-slate-400 group-hover:text-blue-400`}></i>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold uppercase tracking-tighter">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {skill.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Portfolio Section */}
      <section id="full-projects" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight italic">The <span className="text-blue-500">Portfolio</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Explore the detailed case studies of our most impactful digital interventions.</p>
          </div>

          <div className="space-y-32">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div className="flex gap-2 justify-center md:justify-start">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    This project represents a significant milestone in our journey. We focused on deep integration and user-centric design to ensure that the end-product was not only robust but also delightful to use.
                  </p>
                  <p className="text-slate-400 text-lg">
                    {project.description}
                  </p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 font-bold hover:underline"
                  >
                    Launch Experience <i className="fa-solid fa-external-link text-xs"></i>
                  </a>
                </div>
                <div className="flex-1 relative group">
                  <div className="absolute -inset-4 bg-blue-600/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="relative z-10 rounded-[2rem] shadow-2xl border border-white/10 w-full aspect-video object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto glass p-12 rounded-[3rem] border border-white/10 space-y-8">
          <h2 className="text-4xl font-bold">Ready to start your journey with <span className="text-blue-500">Us</span>?</h2>
          <p className="text-slate-400">Let's turn your vision into a digital reality that makes an impact.</p>
          <button 
            onClick={() => onBack()}
            className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            Get In Touch Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
