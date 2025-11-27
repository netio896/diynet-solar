import React from 'react';
import BilingualBlock from './BilingualBlock';
import { BilingualText } from '../../types';
import FadeIn from './FadeIn';

interface SectionTitleProps {
  title: BilingualText;
  subtitle?: BilingualText;
  align?: 'left' | 'center';
  light?: boolean; // Prop kept for compatibility but defaulting to light text now
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  
  return (
    <FadeIn className={`flex flex-col ${alignmentClass} mb-16 md:mb-24 relative`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight">
        <BilingualBlock text={title} enClassName="text-xl md:text-2xl font-light mt-4 block text-slate-400 tracking-wide" />
      </h2>
      {subtitle && (
        <div className="mt-6 max-w-2xl text-slate-400 text-lg font-light leading-relaxed">
           <BilingualBlock text={subtitle} />
        </div>
      )}
      <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mt-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
    </FadeIn>
  );
};

export default SectionTitle;