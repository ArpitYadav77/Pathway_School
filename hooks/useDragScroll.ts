"use client";

import { useEffect, useRef } from 'react';

interface DragScrollOptions {
  autoScroll?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
  seamlessLoop?: boolean; // If true, expects duplicated content and handles infinite scrolling
}

export function useDragScroll<T extends HTMLElement>(options?: DragScrollOptions) {
  const ref = useRef<T>(null);
  const { 
    autoScroll = false, 
    speed = 0.5, 
    pauseOnHover = true,
    seamlessLoop = false 
  } = options || {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    let isHovered = false;
    let animationFrameId: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
      isHovered = false;
    };

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseUp = () => {
      isDown = false;
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // Multiplier adjusts scroll speed
      el.scrollLeft = scrollLeft - walk;
    };

    const onTouchStart = (e: TouchEvent) => {
      isDown = true;
      startX = e.touches[0].pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onTouchEnd = () => {
      isDown = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    // Auto-scroll logic
    const handleAutoScroll = () => {
      if (!isDown && (!isHovered || !pauseOnHover)) {
        el.scrollLeft += speed;
        
        // Handle infinite scrolling
        if (seamlessLoop) {
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
          } else if (el.scrollLeft <= 0) {
            // If scrolled backward manually, jump to middle
            el.scrollLeft = el.scrollWidth / 2;
          }
        }
      }
      animationFrameId = requestAnimationFrame(handleAutoScroll);
    };

    // Setting initial cursor
    el.style.cursor = "grab";

    // Adding native event listeners
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    
    // passive: true allows browser to optimize scroll performance on touch devices
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });

    if (autoScroll) {
      animationFrameId = requestAnimationFrame(handleAutoScroll);
    }

    return () => {
      // Clean up event listeners
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
      
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchmove", onTouchMove);
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [autoScroll, speed, pauseOnHover, seamlessLoop]);

  return ref;
}
