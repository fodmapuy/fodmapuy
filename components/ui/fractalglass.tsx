"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const FractalGlass = () => {
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  return (
    <>
      <div className="relative h-[540px] w-full">
        <motion.div
          drag
          style={{
            zIndex: draggedItem === 1 ? 2 : 1,
            width: "200px",
            height: "200px",
            rotate: "30deg",
            background: `linear-gradient(190deg, #0090FF 10%, #0D74CE 90%)`,
            position: "relative",
          }}
          initial={{ x: 0, y: 200 }}
          onDragStart={() => setDraggedItem(1)}
        />
        <motion.div
          drag
          style={{
            zIndex: draggedItem === 2 ? 2 : 1,
            width: "200px",
            height: "200px",
            borderRadius: "9999px",
            background: `linear-gradient(190deg, #FFE629 10%, #9E6C00 90%)`,
            position: "relative",
          }}
          initial={{ x: 200, y: 0 }}
          onDragStart={() => setDraggedItem(2)}
        />
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[50%]">
          <div className="flex h-full flex-row">
            <div className="glass h-full"></div>
            <div className="glass h-full"></div>
            <div className="glass h-full"></div>
            <div className="glass h-full"></div>
            <div className="glass h-full"></div>
            <div className="glass h-full"></div>
            <div className="glass h-full"></div>
            <div className="glass h-full"></div>
            <div className="glass h-full"></div>
            <div className="glass h-full"></div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 z-10 h-[50%] w-[80%]">
          <div className="h-full w-full">
            <div className="glass-one-div h-full" />
          </div>
        </div> */}
      </div>
      <style jsx>{`
        .glass {
          width: 48px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 10%,
            rgba(4, 9, 20, 0) 70%,
            rgba(255, 255, 255, 0.1) 110%
          );
          backdrop-filter: blur(40px);
        }

        .glass-one-div {
          --glass-width: 40.5px;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.15) 0px,
            rgba(0, 0, 0, 0.01) calc(var(--glass-width) / 1.5),
            rgba(255, 255, 255, 0.35) var(--glass-width)
          );
          backdrop-filter: blur(24px);
        }
      `}</style>
    </>
  );
};
