"use client";
import React, { useEffect, useRef, useCallback } from "react";

export const withSectionId = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  sectionId: string
) => {
  const WithSectionId: React.FC<P> = (props) => {
    const ref = useRef<HTMLDivElement>(null);

    const observerCallback = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          window.dispatchEvent(
            new CustomEvent("sectionChange", { detail: sectionId })
          );
        }
      },
      [] // Remove sectionId from the dependency array
    );

    useEffect(() => {
      const currentRef = ref.current;
      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5,
      });

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [observerCallback]);

    return (
      <div ref={ref} id={sectionId}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  WithSectionId.displayName = `WithSectionId(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithSectionId;
};
