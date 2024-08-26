"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Transition,
  Variant,
} from "framer-motion";
import { cn } from "@/lib/utils";

type CursorProps = {
  children: React.ReactNode;
  className?: string;
  springConfig?: SpringOptions;
  attachToParent?: boolean;
  transition?: Transition;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
  onPositionChange?: (x: number, y: number) => void;
};

export function Cursor({
  children,
  className,
  springConfig,
  attachToParent = false,
  variants,
  transition,
  onPositionChange,
}: CursorProps) {
  const cursorX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const cursorY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!attachToParent);

  const updatePosition = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      onPositionChange?.(e.clientX, e.clientY);
    },
    [cursorX, cursorY, onPositionChange]
  );

  useEffect(() => {
    document.body.style.cursor = attachToParent ? "auto" : "none";
    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.body.style.cursor = "auto";
    };
  }, [attachToParent, updatePosition]);

  const cursorXSpring = useSpring(cursorX, springConfig || { duration: 0 });
  const cursorYSpring = useSpring(cursorY, springConfig || { duration: 0 });

  useEffect(() => {
    if (!attachToParent || !cursorRef.current) return;

    const parent = cursorRef.current.parentElement;
    if (!parent) return;

    const handleMouseEnter = () => {
      parent.style.cursor = "none";
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      parent.style.cursor = "auto";
      setIsVisible(false);
    };

    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [attachToParent]);

  return (
    <motion.div
      ref={cursorRef}
      className={cn("pointer-events-none fixed left-0 top-0 z-50", className)}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
