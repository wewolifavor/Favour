
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold italic tracking-tight uppercase">Recent <span className="text-blue-500">Work</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my technical abilities and creative problem-solving skills.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-3xl border border-white/5 overflow-hidden flex flex-col hover:border-blue-500/40 transition-all hover:-translate-y-2 relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Visual Indicator for Link (Top Right Icon) */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="pt-4 flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                  View Project <i className="fa-solid fa-chevron-right group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
