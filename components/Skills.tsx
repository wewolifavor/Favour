
import React from 'react';
import { SKILLS } from '../constants.tsx';
import { Skill } from '../types.ts';

interface SkillsProps {
  onSkillClick: (skill: Skill) => void;
}

const Skills: React.FC<SkillsProps> = ({ onSkillClick }) => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold italic tracking-tight uppercase">Technical <span className="text-blue-500">Skills</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Click on a technology to learn more about my expertise and how I use it to build modern applications.
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill) => (
            <button 
              key={skill.name} 
              onClick={() => onSkillClick(skill)}
              className="group p-8 glass rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-2 flex flex-col items-center justify-center space-y-4 text-center cursor-pointer"
            >
              <i className={`${skill.icon} text-4xl text-slate-500 group-hover:text-blue-400 transition-colors`}></i>
              <span className="font-medium text-slate-400 group-hover:text-white uppercase tracking-tighter">{skill.name}</span>
              <div className="text-[10px] text-blue-500/0 group-hover:text-blue-500 transition-all font-bold">LEARN MORE</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
