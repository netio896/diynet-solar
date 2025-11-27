import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] text-slate-500 py-16 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 opacity-80 hover:opacity-100 transition-opacity">
           <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-black text-sm">D</div>
           <span className="text-slate-200 font-bold text-xl tracking-wider">{BRAND_NAME}</span>
        </div>
        <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Professional Engineering Services for Solar & Networks. <br />
          Built for reliability.
        </p>
        <div className="flex justify-center gap-6 mb-8">
           {['Home', 'Services', 'Projects', 'Contact'].map(link => (
             <a key={link} href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors">
               {link}
             </a>
           ))}
        </div>
        <div className="text-xs opacity-40 border-t border-white/5 pt-8">
          &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;