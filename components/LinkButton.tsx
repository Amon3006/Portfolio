import React from 'react';

interface LinkButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, label, icon }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-6 p-4 rounded-2xl border border-white/20 hover:border-white/60 bg-transparent hover:bg-white/5 transition-all duration-300 w-full"
    >
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="text-white text-sm md:text-base tracking-[0.2em] uppercase font-medium">
        {label}
      </span>
    </a>
  );
};

export default LinkButton;