"use client";
import type React from "react";
import { useState } from "react";
import { TransitionPanel } from "@/components/core/transition-panel";
import { AnimatedCardBackgroundHover } from "@/components/ui/animatedcard";

type AnimatedCardProps = {
  children: React.ReactNode;
  language: "en" | "es";
};

const TypedAnimatedCardBackgroundHover = AnimatedCardBackgroundHover as React.FC<AnimatedCardProps>;

type Item = {
  title: string;
  subtitle: string;
  content: string | string[];
};

const ITEMS: Item[] = [
  {
    title: "Personalized meal plans",
    subtitle: "Refining Visual Harmony",
    content: [
      "Say goodbye to digestive discomfort and hello to delicious, gut-friendly meals! Our Personalized Meal Plans are designed to take the guesswork out of following the FODMAP diet, ensuring you enjoy every bite while supporting your digestive health.",
    ],
  },
  {
    title: "One on one consultations",
    subtitle: "Narrative and Expression",
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

export function TabsTransitionOneOnOne() {
  const [activeIndex, setActiveIndex] = useState(0);

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
                <TypedAnimatedCardBackgroundHover language="en">
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
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
