import React from 'react';
import { HERO_CONTENT } from '../constants';
import BilingualBlock from './ui/BilingualBlock';
import FadeIn from './ui/FadeIn';
import { Zap, Activity, Wifi, Server, Database, Sun } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-40 pb-32 md:pt-60 md:pb-48 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-10 text-center lg:text-left z-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                System Operational
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl">
                <BilingualBlock 
                  text={HERO_CONTENT.title} 
                  enClassName="text-2xl md:text-3xl lg:text-4xl font-light text-slate-300 mt-6 block leading-snug"
                />
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <BilingualBlock text={HERO_CONTENT.subtitle} />
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
                <a 
                  href="#contact"
                  className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex flex-col items-center">
                    <span>{HERO_CONTENT.ctaPrimary.zh}</span>
                    <span className="text-xs font-normal opacity-90">{HERO_CONTENT.ctaPrimary.en}</span>
                  </div>
                </a>
                
                <a 
                  href="#contact"
                  className="group px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center">
                    <span>{HERO_CONTENT.ctaSecondary.zh}</span>
                    <span className="text-xs font-normal opacity-70 group-hover:text-emerald-300 transition-colors">{HERO_CONTENT.ctaSecondary.en}</span>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual: Tech Dashboard Mockup */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <FadeIn delay={600} className="relative">
               {/* Main Panel */}
               <div className="relative z-10 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-float lg:rotate-y-[-10deg] lg:rotate-x-[5deg] transform-style-3d">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                           <Database size={20} />
                        </div>
                        <div>
                           <div className="text-white font-bold text-sm">System Status</div>
                           <div className="text-emerald-400 text-xs flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
                           </div>
                        </div>
                     </div>
                     <div className="text-slate-500 text-xs font-mono">ID: D-2024-X8</div>
                  </div>

                  {/* Grid Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                     <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div className="flex justify-between items-start mb-2">
                           <Sun size={20} className="text-yellow-400" />
                           <span className="text-xs text-slate-400">Solar Input</span>
                        </div>
                        <div className="text-2xl font-bold text-white">12.4 <span className="text-sm font-normal text-slate-500">kW</span></div>
                        <div className="w-full bg-slate-700 h-1 mt-3 rounded-full overflow-hidden">
                           <div className="bg-yellow-400 h-full w-[85%]"></div>
                        </div>
                     </div>
                     <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div className="flex justify-between items-start mb-2">
                           <Zap size={20} className="text-emerald-400" />
                           <span className="text-xs text-slate-400">Battery</span>
                        </div>
                        <div className="text-2xl font-bold text-white">98 <span className="text-sm font-normal text-slate-500">%</span></div>
                        <div className="w-full bg-slate-700 h-1 mt-3 rounded-full overflow-hidden">
                           <div className="bg-emerald-400 h-full w-[98%]"></div>
                        </div>
                     </div>
                  </div>

                  {/* Network Graph Mock */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                     <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                           <Wifi size={16} className="text-blue-400" />
                           <span className="text-sm text-slate-200">Network Latency</span>
                        </div>
                        <span className="text-xs text-emerald-400">12ms (Excellent)</span>
                     </div>
                     <div className="flex items-end gap-1 h-16 justify-between opacity-80">
                        {[40, 60, 45, 70, 50, 60, 75, 55, 65, 80, 50, 45].map((h, i) => (
                           <div key={i} style={{height: `${h}%`}} className="w-2 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm"></div>
                        ))}
                     </div>
                  </div>

                  {/* Decorative Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl opacity-20 blur-lg -z-10"></div>
               </div>

               {/* Floating Badges */}
               <div className="absolute -right-8 top-1/3 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <Activity className="text-pink-400 mb-1" size={24} />
                  <div className="text-xs font-bold text-white">Monitoring</div>
               </div>
               <div className="absolute -left-4 bottom-10 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl animate-float" style={{animationDelay: '2s'}}>
                  <Server className="text-purple-400 mb-1" size={24} />
                  <div className="text-xs font-bold text-white">Storage</div>
               </div>

            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;