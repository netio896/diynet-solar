import React from 'react';
import { WHY_US } from '../constants';
import SectionTitle from './ui/SectionTitle';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';
import { Check, X } from 'lucide-react';

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title={{ zh: "为什么选择 Diynet Solar", en: "Why Choose Diynet Solar" }}
        />

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Pros Column */}
          <FadeIn className="flex-1">
            <div className="glass-card p-10 rounded-3xl border-t-4 border-t-emerald-500 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100"></div>
              
              <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Check size={28} />
                </span>
                Diynet Advantage
              </h3>
              
              <div className="space-y-10 relative z-10">
                {WHY_US.pros.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group/item">
                    <div className="mt-2 relative">
                       <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"></div>
                       <div className="absolute top-3 left-1.5 w-0.5 h-full bg-emerald-500/20 -z-10 last:hidden"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100 text-xl group-hover/item:text-emerald-300 transition-colors">
                        <BilingualBlock text={item.title} />
                      </h4>
                      <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                        <BilingualBlock text={item.description} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Cons Column */}
          <FadeIn delay={200} className="flex-1">
            <div className="bg-[#0f172a]/50 p-10 rounded-3xl border border-red-500/10 h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <h3 className="text-3xl font-bold text-slate-400 mb-10 flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20">
                  <X size={28} />
                </span>
                Common Issues
              </h3>
              <div className="space-y-6">
                {WHY_US.cons.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-4 rounded-xl hover:bg-red-500/5 transition-colors border border-transparent hover:border-red-500/10">
                    <X size={24} className="text-red-400/60 flex-shrink-0" />
                    <div className="font-medium text-slate-400">
                      <BilingualBlock text={item} enClassName="text-sm font-normal opacity-60 mt-1"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;