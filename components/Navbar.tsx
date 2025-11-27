import React, { useState, useEffect } from 'react';
import { BRAND_NAME, NAV_ITEMS } from '../constants';
import BilingualBlock from './ui/BilingualBlock';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = scrolled 
    ? "bg-slate-900/60 backdrop-blur-xl border-b border-white/5 py-4" 
    : "bg-transparent py-6";

  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-500 ${navClass}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
           <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">D</div>
           <span className="text-white font-bold text-xl md:text-2xl tracking-wider group-hover:text-emerald-400 transition-colors">
            {BRAND_NAME}
           </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-slate-300 hover:text-white transition-colors group relative"
            >
              <div className="text-center">
                <span className="block text-sm font-medium group-hover:text-emerald-400 transition-colors duration-300">{item.label.zh}</span>
                <span className="block text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100">{item.label.en}</span>
              </div>
              <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col p-6 space-y-6">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="block border-b border-white/5 pb-4 text-slate-200 hover:text-emerald-400"
                onClick={() => setIsOpen(false)}
              >
                <BilingualBlock text={item.label} className="items-start" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;