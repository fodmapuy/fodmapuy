"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import { ArrowLeft, Search, User } from "lucide-react";

// Inline implementation of useClickOutside hook
function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}

const transition = {
  type: "spring" as const,
  bounce: 0.1,
  duration: 0.2,
};

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

function Button({ children, onClick, disabled, ariaLabel }: ButtonProps) {
  return (
    <button
      className="relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default function ToolbarDynamic() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <MotionConfig transition={transition}>
      <div className="absolute bottom-8" ref={containerRef}>
        <div className="h-full w-full rounded-xl border border-zinc-950/10 bg-white">
          <motion.div
            animate={{
              width: isOpen ? "300px" : "98px",
            }}
            initial={false}
            style={{ overflow: "hidden" }} // Add this to prevent content from overflowing during animation
          >
            <div className="overflow-hidden p-2">
              {!isOpen ? (
                <div className="flex space-x-2">
                  <Button disabled ariaLabel="User profile">
                    <User className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => setIsOpen(true)}
                    ariaLabel="Search notes"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Button onClick={() => setIsOpen(false)} ariaLabel="Back">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <div className="relative w-full">
                    <input
                      className="h-9 w-full rounded-lg border border-zinc-950/10 bg-transparent p-2 text-zinc-900 placeholder-zinc-500 focus:outline-none"
                      autoFocus
                      placeholder="Search notes"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
