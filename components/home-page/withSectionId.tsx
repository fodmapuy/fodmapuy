"use client";

import React, { useEffect, useRef } from "react";

export const withSectionId = (
  WrappedComponent: React.ComponentType<any>,
  sectionId: string
) => {
  return (props: any) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // You might want to dispatch an event or use a global state management solution here
            // For now, we'll just use a custom event
            window.dispatchEvent(
              new CustomEvent("sectionChange", { detail: sectionId })
            );
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div ref={ref} id={sectionId}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
