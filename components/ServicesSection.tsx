import React from 'react';
import { SERVICES } from '../constants';
import SectionTitle from './ui/SectionTitle';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';
import { Network, Sun, Shield, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Network: <Network size={32} />,
  Sun: <Sun size={32} />,
  Shield: <Shield size={32} />,
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title={{ zh: "核心业务", en: "Our Core Services" }}
          subtitle={{ zh: "工程级标准，家庭级关怀", en: "Engineering standards, residential care" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 150} className="h-full">
              <div 
                className="glass-card rounded-3xl p-8 h-full transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-emerald-500/20"></div>

                <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300">
                  {iconMap[service.icon]}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 min-h-[4rem]">
                  <BilingualBlock text={service.title} />
                </h3>
                
                <ul className="space-y-4 relative z-10">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        <BilingualBlock text={point} />
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;