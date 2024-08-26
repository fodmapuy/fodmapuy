"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";
import { Folder, MessageCircle, User, WalletCards } from "lucide-react";

// Inline implementation of useClickOutside
const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.25,
};

const ITEMS = [
  // ... (ITEMS array remains unchanged)
];

export default function ToolbarExpandable() {
  const [active, setActive] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxWidth, setMaxWidth] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  useClickOutside(ref, () => {
    setIsOpen(false);
    setActive(null);
  });

  const updateDimensions = useCallback(() => {
    if (menuRef.current) {
      setMaxWidth(menuRef.current.offsetWidth);
    }
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    updateDimensions();
  }, [active, isOpen, updateDimensions]);

  return (
    <MotionConfig transition={transition}>
      <div className="absolute bottom-8" ref={ref}>
        <div className="h-full w-full rounded-xl border border-zinc-950/10 bg-white">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="sync">
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0 }}
                  animate={{ height: contentHeight }}
                  exit={{ height: 0 }}
                  style={{
                    width: maxWidth,
                  }}
                >
                  <div ref={contentRef} className="p-2">
                    {ITEMS.map((item) => {
                      const isSelected = active === item.id;

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isSelected ? 1 : 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <div
                            className={cn(
                              "px-2 pt-2 text-sm",
                              isSelected ? "block" : "hidden"
                            )}
                          >
                            {item.content}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="flex space-x-2 p-2" ref={menuRef}>
            {ITEMS.map((item) => (
              <button
                key={item.id}
                aria-label={item.label}
                className={cn(
                  "relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]",
                  active === item.id ? "bg-zinc-100 text-zinc-800" : ""
                )}
                type="button"
                onClick={() => {
                  if (!isOpen) setIsOpen(true);
                  if (active === item.id) {
                    setIsOpen(false);
                    setActive(null);
                    return;
                  }

                  setActive(item.id);
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
