import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

const Card: React.FC<CardProps> = ({ children, title, icon, className = "", highlight = false }) => {
  return (
    <div className={`bg-white rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300 p-6 h-full flex flex-col overflow-hidden border border-gray-100 ${highlight ? 'ring-2 ring-teal-500/20 border-teal-100' : ''} ${className}`}>
      {title && (
        <div className="flex items-center gap-3 mb-6">
          {icon && <div className="text-teal-600 shrink-0 bg-teal-50 p-2 rounded-lg">{icon}</div>}
          <h3 className="text-xl md:text-2xl font-extrabold text-[#003366] tracking-tight">{title}</h3>
        </div>
      )}
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
};

export default Card;
