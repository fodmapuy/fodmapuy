import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const sections = {
  en: [
    { id: "welcome", label: "Welcome" },
    { id: "not-alone", label: "You are not alone" },
    { id: "what-is", label: "What is" },
    { id: "services", label: "Services" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact Us" },
  ],
  es: [
    { id: "welcome", label: "Bienvenido" },
    { id: "not-alone", label: "No estás solo" },
    { id: "what-is", label: "Qué es" },
    { id: "services", label: "Servicios" },
    { id: "faq", label: "Preguntas frecuentes" },
    { id: "contact", label: "Contáctanos" },
  ],
};

const totalLines = 30;

interface TimelineProps {
  className?: string;
  activeSection?: string | null;
}

export default function Timeline({
  className = "",
  activeSection: propActiveSection,
}: TimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("welcome");
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");
  const currentSections = isSpanish ? sections.es : sections.en;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (propActiveSection) {
      setActiveSection(propActiveSection);
    }
  }, [propActiveSection]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setActiveSection("welcome");
  }, [isSpanish]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const calculateScale = (index: number) => {
    const activeSectionIndex = currentSections.findIndex(
      (section) => section.id === activeSection
    );
    if (hoveredIndex !== null) {
      const distance = Math.abs(index - hoveredIndex);
      return Math.max(1 - distance * 0.2, 0.4);
    } else if (activeSectionIndex !== -1) {
      const sectionIndex = Math.floor(
        (activeSectionIndex * (totalLines - 1)) / (currentSections.length - 1)
      );
      const distance = Math.abs(index - sectionIndex);
      return Math.max(1 - distance * 0.1, 0.4);
    }
    return 0.4;
  };

  const sectionIndices = currentSections.map((_, index) =>
    Math.floor((index * (totalLines - 1)) / (currentSections.length - 1))
  );

  return (
    <div className={`flex flex-col h-full w-full items-center ${className}`}>
      <div className="h-32 mb-4 relative">
        {currentSections.map((section, index) => {
          const isActive = section.id === activeSection;
          return (
            <p
              key={section.id}
              style={{
                writingMode: "vertical-rl",
                position: "absolute",
                left: `${index * (100 / (currentSections.length - 1))}%`,
                height: "100%",
                transform: "rotate(180deg)",
                transition: "opacity 0.3s, filter 0.3s",
                opacity: isActive ? 1 : 0,
              }}
              className="whitespace-nowrap font-sans text-[16px] leading-[1.1] tracking-[-0.05em] text-gray-800 dark:text-gray-200"
            >
              {section.label}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col flex-grow">
        {Array.from({ length: totalLines }, (_, i) => {
          const sectionIndex = sectionIndices.indexOf(i);
          const section =
            sectionIndex !== -1 ? currentSections[sectionIndex] : null;
          const isActive = section?.id === activeSection;
          return (
            <button
              key={i}
              className="relative inline-flex items-center justify-start py-1 group"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (section) {
                  document
                    .getElementById(section.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div
                className={`h-1 w-10 rounded-[4px] transition-all duration-300 ${
                  isActive ? "bg-purple-400" : "bg-gray-400 dark:bg-gray-600"
                }`}
                style={{
                  transform: `scale(${calculateScale(i)})`,
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
