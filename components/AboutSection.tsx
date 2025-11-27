import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import SectionTitle from './ui/SectionTitle';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title={{ zh: "关于我们", en: "About Us" }}
          subtitle={{ zh: "Mandalay 本地工程服务", en: "Local Engineering Services in Mandalay" }}
        />

        <FadeIn className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-8">
               <div className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                 {ABOUT_CONTENT.intro.zh}
               </div>
               <div className="text-slate-400 leading-relaxed font-light border-l-2 border-emerald-500/30 pl-6">
                 {ABOUT_CONTENT.intro.en}
               </div>
            </div>

            <div className="md:w-1/3 flex flex-col gap-4 w-full">
               {[
                 { title: "Service Area", val: "Mandalay & Surrounding", zh: "服务区域" },
                 { title: "Clients", val: "Residential & Small Biz", zh: "目标客户" },
                 { title: "Focus", val: "Long-term Reliability", zh: "核心价值" }
               ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-emerald-400 text-sm uppercase tracking-wider">{item.title}</h4>
                      <span className="text-xs text-slate-500">{item.zh}</span>
                    </div>
                    <p className="text-slate-200 font-medium">{item.val}</p>
                  </div>
               ))}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;