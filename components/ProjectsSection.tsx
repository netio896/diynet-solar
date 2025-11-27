import React from 'react';
import { PROJECTS } from '../constants';
import SectionTitle from './ui/SectionTitle';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';
import { ArrowRight, Clock, Zap } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title={{ zh: "真实工程案例", en: "Real Projects" }}
          subtitle={{ zh: "看得见的交付质量", en: "Visible Quality & Deliverables" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100}>
              <div className="group relative rounded-3xl overflow-hidden h-[400px] border border-white/10 shadow-2xl">
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title.en}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent opacity-90 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold mb-3 backdrop-blur-md">
                        {project.details.capacity}
                      </span>
                      <h3 className="font-bold text-white text-lg leading-tight">
                        <BilingualBlock text={project.title} enClassName="text-sm font-normal text-slate-400 mt-1" />
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-emerald-500" />
                        <span>{project.details.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap size={14} className="text-yellow-500" />
                        <span className="truncate">{project.details.purpose.en}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400} className="mt-16 text-center">
          <a href="#projects" className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105 backdrop-blur-sm group">
            <BilingualBlock text={{ zh: "查看更多工程案例", en: "View All Projects" }} className="items-center" enClassName="text-xs text-slate-400 ml-2" />
            <ArrowRight size={20} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProjectsSection;