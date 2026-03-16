"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { certificatesData } from "@/lib/data";

// Duplicate certificates to create a more populated "bucket"
const duplicatedCertificates = [
  ...certificatesData,
  ...certificatesData.map(cert => ({ ...cert, id: `${cert.id}-copy-1` })),
  ...certificatesData.map(cert => ({ ...cert, id: `${cert.id}-copy-2` })),
];

interface FloatingCardProps {
  id: string;
  image: string;
  title: string;
  trigger: number;
}

const FloatingCard = ({ image, title, trigger }: FloatingCardProps) => {
  const controls = useAnimation();
  
  const moveRandomly = useCallback(() => {
    const maxX = 120; // Increased range to allow movement off-center significantly
    const maxY = 80; 
    
    const newX = Math.random() * (maxX * 2) - maxX;
    const newY = Math.random() * (maxY * 2) - maxY;
    const newRotate = Math.random() * 120 - 60; // More dramatic rotation
    
    controls.start({
      x: `${newX}%`,
      y: `${newY}%`,
      rotate: newRotate,
      transition: { 
        type: "spring", 
        stiffness: 40 + Math.random() * 40, // Varied stiffness for natural feel
        damping: 15 + Math.random() * 10,
        mass: 0.8 + Math.random() * 0.4
      }
    });
  }, [controls]);

  // Handle section-wide click trigger
  useEffect(() => {
    if (trigger > 0) {
      moveRandomly();
    }
  }, [trigger, moveRandomly]);

  // Initial scattering
  useEffect(() => {
    const startX = Math.random() * 160 - 80;
    const startY = Math.random() * 120 - 60;
    const startRotate = Math.random() * 120 - 60;
    
    controls.set({
      x: `${startX}%`,
      y: `${startY}%`,
      rotate: startRotate,
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      whileHover={{ scale: 1.15, zIndex: 50, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.9 }}
      className="absolute cursor-pointer group"
      style={{
        width: "140px", // Reduced size
        height: "100px",
      }}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl border border-white/5 group-hover:border-purple-500/40 bg-[#16161a] transition-all duration-500">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          sizes="140px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500" />
        <div className="absolute bottom-1.5 left-2 right-2 text-[8px] font-medium text-white/50 group-hover:text-white/90 truncate transition-colors">
          {title}
        </div>
      </div>
      
      {/* Dynamic Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/0 to-pink-600/0 blur-xl rounded-lg group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-700" />
    </motion.div>
  );
};

export default function FloatingCertificates() {
  const [clickTrigger, setClickTrigger] = useState(0);

  const handleSectionClick = () => {
    setClickTrigger(prev => prev + 1);
  };

  return (
    <section 
      className="relative py-48 bg-[#0c0c0e] overflow-hidden min-h-[900px] flex flex-col items-center justify-center cursor-crosshair group/section"
      onClick={handleSectionClick}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center mb-16 select-none">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-purple-400 border border-purple-500/20 rounded-full bg-purple-500/5 mb-4 inline-block">
            Interactive Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Certificate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Galaxy</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Click anywhere in this space to stir the constellation. Each certificate is a milestone in my journey.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full max-w-6xl h-[700px] flex items-center justify-center">
        {duplicatedCertificates.map((cert, index) => (
          <FloatingCard 
            key={cert.id} 
            id={cert.id} 
            image={cert.image} 
            title={cert.title} 
            trigger={clickTrigger} 
          />
        ))}

        {/* Instructions Hint */}
        <motion.div 
          animate={{ opacity: clickTrigger > 0 ? 0 : 1 }}
          className="absolute bottom-4 text-[10px] text-zinc-600 tracking-widest pointer-events-none"
        >
          CLICK ANYWHERE TO INTERACT
        </motion.div>
      </div>
      
      {/* Premium Border Effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
