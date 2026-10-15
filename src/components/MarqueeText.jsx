"use client";
import { motion } from "framer-motion";

export default function MarqueeText() {
  const textLeft = "EXPLORING THE UNSEEN • CAPTURING THE WORLD ON CAMERA • GAYA WALKER • ";
  const textRight = "CINEMATIC VISUALS • STORYTELLING ON THE ROAD • TRAVEL VLOGGING • ";

  const marqueeLeft = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const marqueeRight = {
    animate: {
      x: [-1035, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 22,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="bg-[#0a0a0a] py-16 overflow-hidden relative w-full flex flex-col gap-6 select-none border-y border-white/5">
      
      {/* 1. TOP BAND - Vivid Coral/Red and Left Scrolling Marquee */}
      <div className="relative w-full -rotate-2 transform scale-105">
        <div className="bg-[#FF4C4C] text-black py-4 font-black text-2xl md:text-4xl tracking-tight uppercase whitespace-nowrap overflow-hidden flex shadow-lg">
          <motion.div
            className="flex gap-4 shrink-0"
            variants={marqueeLeft}
            animate="animate"
          >
            <span>{textLeft}</span>
            <span>{textLeft}</span>
            <span>{textLeft}</span>
            <span>{textLeft}</span>
          </motion.div>
        </div>
      </div>

      {/* 2. BOTTOM BAND - Dark Charcoal/Black and Right Scrolling Marquee */}
      <div className="relative w-full rotate-2 transform scale-105 -mt-2">
        <div className="bg-[#1C1C1C] text-white py-4 font-black text-2xl md:text-4xl tracking-tight uppercase whitespace-nowrap overflow-hidden flex shadow-2xl border-y border-white/5">
          <motion.div
            className="flex gap-4 shrink-0"
            variants={marqueeRight}
            animate="animate"
          >
            <span>{textRight}</span>
            <span>{textRight}</span>
            <span>{textRight}</span>
            <span>{textRight}</span>
          </motion.div>
        </div>
      </div>

    </section>
  );
}