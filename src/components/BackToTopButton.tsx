"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/ocultar botón basado en scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para scroll suave al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          title="Volver al inicio"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
          
          {/* Main Button */}
          <div className="relative w-14 h-14 bg-gray-800/80 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-gray-700/80 transition-all duration-300 shadow-lg group-hover:shadow-xl">
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Arrow Icon */}
            <motion.div
              className="relative z-10"
              initial={{ y: 0 }}
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Ripple Effect on Click */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full opacity-0"
            whileTap={{
              opacity: [0, 1, 0],
              scale: [1, 1.5, 2],
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}; 