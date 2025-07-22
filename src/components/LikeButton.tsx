"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface LikeButtonProps {
  className?: string;
}

export const LikeButton = ({ className = '' }: LikeButtonProps) => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // Cargar likes al montar el componente
  useEffect(() => {
    fetchLikes();
    // Verificar si ya dio like desde localStorage
    const liked = localStorage.getItem('portfolio-liked');
    if (liked) {
      setHasLiked(true);
    }
  }, []);

  const fetchLikes = async () => {
    try {
      const response = await fetch('/api/likes');
      const data = await response.json();
      setLikes(data.likes);
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  const handleLike = async () => {
    if (isLoading || hasLiked) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      
      if (data.success) {
        setLikes(data.likes);
        setHasLiked(true);
        localStorage.setItem('portfolio-liked', 'true');
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
      
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
      
    } catch (error) {
      console.error('Error liking:', error);
      setMessage('Error al procesar el like');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="flex items-center gap-3 bg-gradient-to-r from-gray-800/40 to-gray-800/20 backdrop-blur-lg border border-white/10 rounded-xl px-6 py-3 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.button
          onClick={handleLike}
          disabled={isLoading || hasLiked}
          className={`flex items-center gap-2 transition-all duration-300 ${
            hasLiked 
              ? 'text-red-400 cursor-not-allowed' 
              : 'text-white/70 hover:text-red-400 cursor-pointer'
          }`}
          whileHover={!hasLiked ? { scale: 1.1 } : {}}
          whileTap={!hasLiked ? { scale: 0.9 } : {}}
        >
          <motion.div
            animate={isLoading ? { rotate: 360 } : {}}
            transition={{ duration: 0.5, repeat: isLoading ? Infinity : 0 }}
          >
            {hasLiked ? (
              <FaHeart className="size-5 text-red-500" />
            ) : (
              <FaRegHeart className="size-5" />
            )}
          </motion.div>
          
          <span className="font-semibold">
            {isLoading ? 'Procesando...' : hasLiked ? 'Liked!' : 'Like'}
          </span>
        </motion.button>
        
        <div className="w-px h-6 bg-white/20"></div>
        
        <motion.div
          className="flex items-center gap-1 text-white/80"
          key={likes}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-bold text-lg">{likes}</span>
          <span className="text-sm">likes</span>
        </motion.div>
      </motion.div>
      
      {/* Mensaje de feedback */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/20 rounded-lg px-4 py-2 text-sm text-white whitespace-nowrap shadow-lg"
          >
            {message}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-white/20 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Efecto de partículas cuando se da like */}
      <AnimatePresence>
        {hasLiked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-red-500 rounded-full"
                initial={{ 
                  x: '50%', 
                  y: '50%', 
                  scale: 0,
                  opacity: 1 
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 200}%`,
                  y: `${50 + (Math.random() - 0.5) * 200}%`,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 