import { motion } from "framer-motion";
import { useState } from "react";

const benefits = [
  {
    title: "Symptom Relief",
    key: "Bloating",
    value: "Reduced",
  },
  {
    title: "Personalized",
    key: "Approach",
    value: "Tailored",
  },
  {
    title: "Quality of Life",
    key: "Improvement",
    value: "Significant",
  },
  {
    title: "Management",
    key: "Strategy",
    value: "Long-term",
  },
  {
    title: "Nutritional",
    key: "Balance",
    value: "Maintained",
  },
];

const CARD_HEIGHT = 70;
const GAP = 8;

export default function FODMAPBenefitsStack() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      <div
        className="relative flex h-full w-full flex-col items-center justify-center"
        style={{
          perspective: "1000px",
        }}
      >
        {benefits.map((benefit, i) => {
          return (
            <motion.div
              className="absolute w-[250px] rounded-3xl border-t border-neutral-50 bg-neutral-200 bg-opacity-80 px-3 py-3 backdrop-blur-2xl dark:border-neutral-50/20 dark:bg-neutral-800"
              key={i}
              animate={isOpen ? "open" : "closed"}
              style={{
                height: CARD_HEIGHT,
              }}
              variants={{
                open: {
                  y: i * (CARD_HEIGHT + GAP),
                  z: 0,
                  top: `16%`,
                },
                closed: {
                  y: i * 10,
                  z: i * 40,
                  top: `50%`,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
              }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <div className="flex justify-between text-[15px]">
                <div className="pointer-events-none flex flex-col">
                  <span className="text-neutral-950/50 dark:text-neutral-50/50">
                    {benefit.title}
                  </span>
                  <span className="text-neutral-950 dark:text-neutral-50">
                    {benefit.key}
                  </span>
                </div>
                <div className="pointer-events-none flex flex-col items-end">
                  <span className="text-neutral-950/50 dark:text-neutral-50/50">
                    Result
                  </span>
                  <span className="text-neutral-950 dark:text-neutral-50">
                    {benefit.value}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
