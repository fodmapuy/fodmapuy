"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TransitionPanel } from "@/components/core/transition-panel";
import { AnimatedCardBackgroundHover } from "@/components/ui/animatedcard";
import { AnimatedCardBackgroundHover2 } from "@/components/ui/animatedcard2";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";

type ConsultationItem = {
  id: number;
  title: string;
  description: string;
};

const ITEMS_EN = [
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
      "Get personalized guidance and support from our FODMAP-trained dietitians to help you navigate your digestive health journey with confidence.",
  },
  {
    title: "Delicious low FODMAP recipes",
    subtitle: "Tasty and Gut-Friendly",
    content:
      "Discover a world of flavor with our collection of delicious low FODMAP recipes, designed to satisfy your taste buds while keeping your gut happy.",
  },
];

const ITEMS_ES = [
  {
    title: "Planes de comida personalizados",
    subtitle: "Refinando la Armonía Visual",
    content: [
      "¡Dile adiós a las molestias digestivas y hola a comidas deliciosas y amigables con el intestino! Nuestros Planes de Comida Personalizados están diseñados para eliminar las conjeturas al seguir la dieta FODMAP, asegurando que disfrutes cada bocado mientras apoyas tu salud digestiva.",
    ],
  },
  {
    title: "Consultas uno a uno",
    subtitle: "Soporte Experto en FODMAP",
    content:
      "Obtén orientación y apoyo personalizado de nuestros dietistas capacitados en FODMAP para ayudarte a navegar tu viaje de salud digestiva con confianza.",
  },
  {
    title: "Deliciosas recetas bajas en FODMAP",
    subtitle: "Sabrosas y Amigables con el Intestino",
    content:
      "Descubre un mundo de sabor con nuestra colección de deliciosas recetas bajas en FODMAP, diseñadas para satisfacer tus papilas gustativas mientras mantienes tu intestino feliz.",
  },
];

interface TabsTransitionPanelProps {
  language: "en" | "es";
}

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
}

function CardRotate({ children, onSendToBack }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: any, info: PanInfo) {
    const threshold = 180;
    if (
      Math.abs(info.offset.x) > threshold ||
      Math.abs(info.offset.y) > threshold
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute h-52 w-52 cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

function SwipeableStackCards() {
  const initialCards = [
    {
      id: 1,
      z: 4,
      img: "https://i.pinimg.com/736x/d7/bd/94/d7bd94a0231456ac7f6885de1eccd943.jpg",
    },
    {
      id: 2,
      z: 3,
      img: "https://i.pinimg.com/236x/fd/5d/14/fd5d146cf06e32d30139e4e3f37c993c.jpg",
    },
    {
      id: 3,
      z: 2,
      img: "https://i.pinimg.com/564x/c6/f8/e9/c6f8e988912e469686c431cc680ef49e.jpg",
    },
    {
      id: 4,
      z: 1,
      img: "https://i.pinimg.com/564x/1a/d6/b1/1ad6b124fee1e478689a9fda0c74e92f.jpg",
    },
    {
      id: 5,
      z: 0,
      img: "https://i.pinimg.com/236x/bf/1d/d9/bf1dd9251d0e7f1936bdb9d95a480295.jpg",
    },
  ];
  const [cards, setCards] = useState(initialCards);

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div className="relative h-52 w-52" style={{ perspective: 600 }}>
      {cards.map((card, index) => {
        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)}>
            <motion.div
              className="h-full w-full rounded-lg"
              animate={{
                rotateZ: (cards.length - index - 1) * 4,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Image
                src={card.img}
                alt="card"
                className="pointer-events-none h-full w-full rounded-lg object-cover"
                width={208}
                height={208}
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

export function TabsTransitionPanel({ language }: TabsTransitionPanelProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const ITEMS = language === "en" ? ITEMS_EN : ITEMS_ES;

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
                <AnimatedCardBackgroundHover language={language} />
              )}
              {index === 1 && (
                <AnimatedCardBackgroundHover2 language={language} />
              )}
              {index === 2 && (
                <div className="flex justify-center mt-4">
                  <SwipeableStackCards />
                </div>
              )}
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
