"use client";
import React from "react";
import { TransitionPanel } from "@/components/core/transition-panel";
import { AnimatedCardBackgroundHover } from "@/components/ui/animatedcard";
import { AnimatedCardBackgroundHover2 } from "@/components/ui/animatedcard2";

// Update type definitions for the AnimatedCardBackgroundHover components
type AnimatedCardProps = {
  children: React.ReactNode;
};

type ConsultationItem = {
  id: number;
  title: string;
  description: string;
};

const ITEMS = [
  {
    title: "Personalized meal plans",
    subtitle: "Refining Visual Harmony",
    content: [
      "Say goodbye to digestive discomfort and hello to delicious, gut-friendly meals! Our Personalized Meal Plans are designed to take the guesswork out of following the FODMAP diet, ensuring you enjoy every bite while supporting your digestive health.",
    ],
  },
  {
    title: "One on one consultations",
    subtitle: "Expert FODMAP Support",
    content:
      "Delve into how motion can be used as an artistic tool to tell stories and evoke emotions, making digital interactions feel more human and expressive.",
  },
  {
    title: "Delicious low FODMAP recipes",
    subtitle: "Mastering Motion Tools",
    content:
      "Gain proficiency in advanced techniques such as physics-based animations, 3D transformations, and complex sequencing to elevate your design skills and implementation.",
  },
];

const CONSULTATION_ITEMS: ConsultationItem[] = [
  {
    id: 1,
    title: "Expert Support",
    description: "Work directly with FODMAP-trained dietitians",
  },
  {
    id: 2,
    title: "Customized Approach",
    description: "Tailored advice based on your unique symptoms and lifestyle",
  },
  {
    id: 3,
    title: "Comprehensive Assessment",
    description: "In-depth analysis of your diet and digestive health",
  },
  {
    id: 4,
    title: "Step-by-Step Guidance",
    description: "Navigate the FODMAP diet phases with confidence",
  },
  {
    id: 5,
    title: "Ongoing Support",
    description: "Regular check-ins to monitor progress and adjust your plan",
  },
  {
    id: 6,
    title: "Education",
    description: "Learn to identify trigger foods and expand your diet safely",
  },
];

// Update the component imports with proper typing
const TypedAnimatedCardBackgroundHover: React.FC<AnimatedCardProps> =
  AnimatedCardBackgroundHover as React.FC<AnimatedCardProps>;
const TypedAnimatedCardBackgroundHover2: React.FC<AnimatedCardProps> =
  AnimatedCardBackgroundHover2 as React.FC<AnimatedCardProps>;

export function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        {ITEMS.map((item, index) => (
          <button
            key={item.title}
            onClick={() => setActiveIndex(index)}
            type="button"
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? "bg-[#27AE60] text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-[#27AE60] hover:text-white dark:bg-zinc-700 dark:text-zinc-400 dark:hover:bg-[#27AE60] dark:hover:text-white"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={item.title} className="py-2">
              <h3 className="mb-2 font-medium text-zinc-800 dark:text-zinc-100">
                {item.subtitle}
              </h3>
              <div className="text-zinc-600 dark:text-zinc-400">
                {Array.isArray(item.content) ? (
                  item.content.map((paragraph) => (
                    <p key={paragraph} className="mb-2">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
              {index === 0 && (
                <TypedAnimatedCardBackgroundHover>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Personalized Meal Plans
                    </h4>
                    <p>
                      Discover the perfect balance of nutrition and taste with
                      our expertly crafted meal plans.
                    </p>
                  </div>
                </TypedAnimatedCardBackgroundHover>
              )}
              {index === 1 && (
                <TypedAnimatedCardBackgroundHover2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {CONSULTATION_ITEMS.map((consultationItem) => (
                      <div
                        key={consultationItem.id}
                        className="bg-white p-4 rounded-lg shadow"
                      >
                        <h4 className="text-lg font-semibold mb-2">
                          {consultationItem.title}
                        </h4>
                        <p>{consultationItem.description}</p>
                      </div>
                    ))}
                  </div>
                </TypedAnimatedCardBackgroundHover2>
              )}
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
