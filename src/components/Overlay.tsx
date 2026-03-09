"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% scroll (Center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: 30% scroll (Left aligned)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

  // Section 3: 60% scroll (Right aligned)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center max-w-7xl mx-auto px-6 overflow-hidden">
        
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex items-center justify-center text-center px-4"
        >
          <div className="flex flex-col items-center gap-4 pt-20">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
              Mradul Rajput.
            </h1>
            <p className="text-xl md:text-3xl font-light text-zinc-300">
              Marketing & Business Analytics Enthusiast.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 md:px-24"
        >
           <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white max-w-4xl drop-shadow-xl leading-tight">
             PGDM student at IMS Ghaziabad interested in marketing strategy, business analytics, and AI-driven solutions.
           </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col justify-center items-end text-right px-6 md:px-24"
        >
           <div className="flex gap-6 pointer-events-auto">
             <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors cursor-pointer" onClick={() => document.getElementById('profile')?.scrollIntoView({behavior: 'smooth'})}>
               View Work
             </button>
             <button className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors cursor-pointer gap-2 flex items-center">
               Download Resume
             </button>
           </div>
        </motion.div>

      </div>
    </div>
  );
}
