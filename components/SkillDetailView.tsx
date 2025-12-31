
import React, { useEffect } from 'react';
import { Skill } from '../types';

interface SkillDetailViewProps {
  skill: Skill;
  onBack: () => void;
}

const SkillDetailView: React.FC<SkillDetailViewProps> = ({ skill, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24 px-6 relative animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto space-y-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
          Back to Portfolio
        </button>

        <div className="glass p-8 md:p-16 rounded-[2.5rem] border border-white/10 space-y-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-2xl shadow-blue-500/10">
              <i className={`${skill.icon} text-6xl md:text-7xl text-blue-400`}></i>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight italic uppercase">
                {skill.name}
              </h1>
              <div className="px-4 py-1 inline-block rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-400 uppercase tracking-widest">
                {skill.category}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Expertise Overview</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              {skill.longDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-3 text-blue-400">
                <i className="fa-solid fa-circle-check"></i>
                <h3 className="font-bold uppercase text-sm tracking-wider">Key Strengths</h3>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Industry Best Practices</li>
                <li>• Optimized Performance</li>
                <li>• Scalable Architecture</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-3 text-purple-400">
                <i className="fa-solid fa-lightbulb"></i>
                <h3 className="font-bold uppercase text-sm tracking-wider">Practical Usage</h3>
              </div>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Real-world Applications</li>
                <li>• Modern Tooling</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailView;
