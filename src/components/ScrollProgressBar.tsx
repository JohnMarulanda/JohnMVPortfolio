"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calcular el progreso del scroll
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      
      setScrollProgress(scrolled);
    };

    // Agregar event listener
    window.addEventListener("scroll", updateScrollProgress);
    
    // Llamar una vez para establecer el valor inicial
    updateScrollProgress();

    // Cleanup
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-900/20 backdrop-blur-sm">
      {/* Background Track */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-gray-700/30" />
      
      {/* Progress Bar */}
      <motion.div
        className="h-full relative overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #8B5CF6 0%, #A855F7 35%, #EC4899 70%, #C026D3 100%)",
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)",
        }}
        initial={{ width: "0%" }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
        }}
      >
        {/* Liquid Glass Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm" />
        
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          }}
        />
        
        {/* Glow at the end */}
        {scrollProgress > 0 && (
          <motion.div
            className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/40 to-transparent"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>
      
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500/50 via-purple-400/50 to-fuchsia-500/50" />
    </div>
  );
}; 