import React from 'react';
import { BilingualText } from '../../types';

interface BilingualBlockProps {
  text: BilingualText;
  className?: string;
  enClassName?: string;
  zhClassName?: string;
}

const BilingualBlock: React.FC<BilingualBlockProps> = ({ text, className = "", enClassName = "text-sm opacity-80", zhClassName = "" }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className={`block mb-0.5 ${zhClassName}`}>{text.zh}</span>
      <span className={`block font-light ${enClassName}`}>{text.en}</span>
    </div>
  );
};

export default BilingualBlock;