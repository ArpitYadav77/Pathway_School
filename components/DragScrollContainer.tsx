"use client";

import React, { HTMLAttributes, ReactNode } from "react";
import { useDragScroll } from "@/hooks/useDragScroll";

interface DragScrollContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function DragScrollContainer({ children, className = "", ...props }: DragScrollContainerProps) {
  const scrollRef = useDragScroll<HTMLDivElement>();

  return (
    <div
      ref={scrollRef}
      className={`overflow-x-auto overflow-y-hidden whitespace-nowrap w-full ${className}`}
      // Hide scrollbar inline for compatibility, Tailwind typically needs a plugin for this
      style={{
        scrollbarWidth: 'none',  // Firefox
        msOverflowStyle: 'none', // IE and Edge
        ...props.style
      }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
      {/* 
        Ensure you add the \`scrollbar-hide\` class to the \`className\` 
        prop if you want to completely hide it on WebKit browsers. 
      */}
      <div className={`flex w-auto scrollbar-hide`}>
        {children}
      </div>
    </div>
  );
}
