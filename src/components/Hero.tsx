"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#121212] px-6 text-center">
      {/* Background radial gradient for subtle lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >
        <h2 className="text-zinc-400 font-medium tracking-widest uppercase text-sm md:text-base mb-6">
          Marketing & Business Analytics Enthusiast
        </h2>
        
        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl mb-8 leading-[0.9]">
          Mradul Rajput.
        </h1>

        <p className="text-lg md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          PGDM student at IMS Ghaziabad interested in <strong className="text-white font-medium">marketing strategy</strong>, 
          <strong className="text-white font-medium"> business analytics</strong>, and AI-driven solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a 
            href="#profile"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors w-full sm:w-auto text-lg"
          >
            View Work
          </motion.a>
          <motion.a 
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-colors w-full sm:w-auto text-lg"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
