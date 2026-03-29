import React from "react";

interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10 py-10 md:py-16 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {children}
      </div>
    </div>
  );
};

export default GridLayout;
