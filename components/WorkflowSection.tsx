import React from 'react';
import { WORKFLOW_STEPS } from '../constants';
import SectionTitle from './ui/SectionTitle';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';

const WorkflowSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050b1d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          title={{ zh: "标准化施工流程", en: "Standardized Workflow" }} 
        />

        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {WORKFLOW_STEPS.map((step, index) => (
              <FadeIn key={index} delay={index * 150} className="relative flex flex-col items-center text-center group">
                {/* Step Circle */}
                <div className="w-20 h-20 rounded-2xl bg-[#0f172a] border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-2xl font-bold mb-8 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] shadow-lg relative">
                  {step.step}
                  {/* Glow under circle */}
                  <div className="absolute -inset-2 bg-emerald-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Text */}
                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">
                  <BilingualBlock text={step.title} enClassName="text-sm font-light opacity-60 mt-1 block" />
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[180px]">
                  <BilingualBlock text={step.description} />
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;