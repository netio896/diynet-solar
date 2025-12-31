
import React from 'react';
import { HERO_CONTENT } from '../constants';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';
import { Zap, Activity, Wifi, Server, Database, Sun, ArrowUpRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-40 pb-32 md:pt-60 md:pb-48 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-10 text-center lg:text-left z-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Engineering Standards: IEC/ISO Compliant
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                <BilingualBlock 
                  text={HERO_CONTENT.title} 
                  enClassName="text-xl md:text-2xl lg:text-3xl font-light text-slate-400 mt-6 block leading-snug tracking-normal"
                />
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-2 border-emerald-500/30 pl-6 py-2">
                <BilingualBlock text={HERO_CONTENT.subtitle} />
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
                <a 
                  href="#contact"
                  className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center gap-3">
                    <div className="flex flex-col items-start">
                      <span className="text-lg">{HERO_CONTENT.ctaPrimary.zh}</span>
                      <span className="text-[10px] font-normal opacity-80 uppercase tracking-widest">{HERO_CONTENT.ctaPrimary.en}</span>
                    </div>
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>
                
                <a 
                  href="#projects"
                  className="group px-10 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg">{HERO_CONTENT.ctaSecondary.zh}</span>
                    <span className="text-[10px] font-normal opacity-70 group-hover:text-emerald-300 transition-colors uppercase tracking-widest">{HERO_CONTENT.ctaSecondary.en}</span>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual: Industrial Dashboard Mockup */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <FadeIn delay={600} className="relative">
               {/* Main Panel */}
               <div className="relative z-10 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-float lg:rotate-y-[-12deg] lg:rotate-x-[6deg] transform-style-3d">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 shadow-inner">
                           <Database size={24} />
                        </div>
                        <div>
                           <div className="text-white font-bold text-base tracking-wide uppercase">EMS Controller</div>
                           <div className="text-emerald-400 text-xs flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> Real-time Monitoring
                           </div>
                        </div>
                     </div>
                     <div className="text-slate-500 text-[10px] font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5 uppercase">NODE-MND-01</div>
                  </div>

                  {/* Grid Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                     <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5 hover:border-emerald-500/20 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                           <div className="p-2 bg-yellow-400/10 rounded-lg">
                              <Sun size={20} className="text-yellow-400" />
                           </div>
                           <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">PV Output</span>
                        </div>
                        <div className="text-3xl font-black text-white">42.8 <span className="text-sm font-light text-slate-500">kW</span></div>
                        <div className="w-full bg-slate-800 h-1.5 mt-4 rounded-full overflow-hidden">
                           <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-full w-[82%]"></div>
                        </div>
                     </div>
                     <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5 hover:border-emerald-500/20 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                           <div className="p-2 bg-emerald-400/10 rounded-lg">
                              <Zap size={20} className="text-emerald-400" />
                           </div>
                           <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Storage SOC</span>
                        </div>
                        <div className="text-3xl font-black text-white">94.2 <span className="text-sm font-light text-slate-500">%</span></div>
                        <div className="w-full bg-slate-800 h-1.5 mt-4 rounded-full overflow-hidden">
                           <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full w-[94%]"></div>
                        </div>
                     </div>
                  </div>

                  {/* Network Graph Mock */}
                  <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5">
                     <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                           <Wifi size={18} className="text-blue-400" />
                           <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Core Latency</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-emerald-400">8ms</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[8px] font-bold uppercase">Optimal</span>
                        </div>
                     </div>
                     <div className="flex items-end gap-1.5 h-20 justify-between opacity-90">
                        {[35, 55, 40, 65, 45, 55, 70, 50, 60, 75, 45, 40, 55, 60, 40].map((h, i) => (
                           <div 
                            key={i} 
                            style={{height: `${h}%`}} 
                            className="flex-1 bg-gradient-to-t from-blue-600/80 to-blue-400 rounded-t-sm hover:from-emerald-500 hover:to-emerald-300 transition-all duration-300 cursor-help"
                           ></div>
                        ))}
                     </div>
                  </div>

                  {/* Decorative Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[2.6rem] opacity-20 blur-xl -z-10"></div>
               </div>

               {/* Floating Engineering Tags */}
               <div className="absolute -right-12 top-1/4 bg-slate-800/90 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl animate-float lg:z-20" style={{animationDelay: '1.2s'}}>
                  <Activity className="text-pink-500 mb-2" size={28} />
                  <div className="text-[10px] font-black text-white uppercase tracking-widest">Active Monitoring</div>
                  <div className="text-[8px] text-slate-500 mt-1 font-mono">EN-61000 Standard</div>
               </div>
               <div className="absolute -left-8 bottom-1/4 bg-slate-800/90 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl animate-float lg:z-20" style={{animationDelay: '2.5s'}}>
                  <Server className="text-purple-500 mb-2" size={28} />
                  <div className="text-[10px] font-black text-white uppercase tracking-widest">Load Balancing</div>
                  <div className="text-[8px] text-slate-500 mt-1 font-mono">Tier-III Topology</div>
               </div>

            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
