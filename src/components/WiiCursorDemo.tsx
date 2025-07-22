"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWiiCursor, type WiiCursorType } from '@/hooks/useWiiCursor';
import { X, MousePointer, Hand, HelpCircle, Loader, Ban } from 'lucide-react';

interface CursorDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

const cursorDemoItems = [
  {
    type: 'default' as WiiCursorType,
    name: 'Por Defecto',
    description: 'Cursor normal para navegación general',
    icon: <MousePointer className="h-5 w-5" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    type: 'pointer' as WiiCursorType,
    name: 'Puntero',
    description: 'Para enlaces y elementos clicables',
    icon: <MousePointer className="h-5 w-5" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10 border-purple-500/20'
  },
  {
    type: 'grab' as WiiCursorType,
    name: 'Agarrar',
    description: 'Para elementos arrastrables',
    icon: <Hand className="h-5 w-5" />,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10 border-green-500/20'
  },
  {
    type: 'grabbing' as WiiCursorType,
    name: 'Agarrando',
    description: 'Cuando se está arrastrando un elemento',
    icon: <Hand className="h-5 w-5" />,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10 border-orange-500/20'
  },
  {
    type: 'help' as WiiCursorType,
    name: 'Ayuda',
    description: 'Para elementos con información adicional',
    icon: <HelpCircle className="h-5 w-5" />,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10 border-yellow-500/20'
  },
  {
    type: 'loading' as WiiCursorType,
    name: 'Cargando',
    description: 'Para indicar procesos en curso',
    icon: <Loader className="h-5 w-5" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/20'
  },
  {
    type: 'loading-ccw' as WiiCursorType,
    name: 'Cargando CCW',
    description: 'Variante de carga (antihorario)',
    icon: <Loader className="h-5 w-5" />,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10 border-indigo-500/20'
  },
  {
    type: 'disabled' as WiiCursorType,
    name: 'Deshabilitado',
    description: 'Para elementos no disponibles',
    icon: <Ban className="h-5 w-5" />,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10 border-red-500/20'
  }
];

export const WiiCursorDemo: React.FC<CursorDemoProps> = ({ isOpen, onClose }) => {
  const [selectedCursor, setSelectedCursor] = useState<WiiCursorType>('default');
  const { createCursorHandlers, setGlobalCursor, removeGlobalCursor } = useWiiCursor();

  const handleCursorSelect = (cursorType: WiiCursorType) => {
    setSelectedCursor(cursorType);
    setGlobalCursor(cursorType);
  };

  const handleResetCursor = () => {
    setSelectedCursor('default');
    removeGlobalCursor();
  };

  const handleClose = () => {
    removeGlobalCursor();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        />

        {/* Modal Content */}
        <motion.div
          className="relative w-full max-w-4xl bg-gray-900/95 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Cursores de Wii
              </h2>
              <p className="text-white/60 text-sm md:text-base mt-1">
                Prueba todos los cursores personalizados disponibles
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200"
              {...createCursorHandlers('pointer')}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Current Cursor Display */}
          <div className="mb-6 p-4 bg-gray-800/40 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg ${cursorDemoItems.find(item => item.type === selectedCursor)?.bgColor} border`}>
                <span className={cursorDemoItems.find(item => item.type === selectedCursor)?.color}>
                  {cursorDemoItems.find(item => item.type === selectedCursor)?.icon}
                </span>
              </div>
              <div>
                <h3 className="text-white font-semibold">
                  Cursor Actual: {cursorDemoItems.find(item => item.type === selectedCursor)?.name}
                </h3>
                <p className="text-white/60 text-sm">
                  {cursorDemoItems.find(item => item.type === selectedCursor)?.description}
                </p>
              </div>
            </div>
            <button
              onClick={handleResetCursor}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-medium transition-colors"
              {...createCursorHandlers('pointer')}
            >
              Resetear Cursor
            </button>
          </div>

          {/* Cursor Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cursorDemoItems.map((item) => (
              <motion.div
                key={item.type}
                className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  selectedCursor === item.type
                    ? `${item.bgColor} border-opacity-50 scale-105`
                    : 'bg-gray-800/30 border-white/10 hover:bg-gray-800/50'
                }`}
                onClick={() => handleCursorSelect(item.type)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...createCursorHandlers(item.type)}
              >
                {/* Icon */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${item.bgColor} border`}>
                  <span className={item.color}>
                    {item.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="font-semibold text-white mb-1 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Selected Indicator */}
                {selectedCursor === item.type && (
                  <motion.div
                    className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                )}

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
              </motion.div>
            ))}
          </div>

          {/* Test Area */}
          <div className="mt-6 p-6 bg-gray-800/30 rounded-xl border border-white/10">
            <h3 className="text-white font-semibold mb-4">Área de Prueba</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg text-sm transition-colors"
                  {...createCursorHandlers('pointer')}
                >
                  Botón Normal
                </button>
                <button
                  className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg text-sm transition-colors"
                  {...createCursorHandlers('grab')}
                >
                  Elemento Arrastrable
                </button>
                <button
                  className="px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 rounded-lg text-sm transition-colors"
                  {...createCursorHandlers('help')}
                >
                  Elemento con Ayuda
                </button>
                <button
                  className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm transition-colors opacity-50"
                  {...createCursorHandlers('disabled')}
                  disabled
                >
                  Elemento Deshabilitado
                </button>
              </div>
              <p className="text-white/60 text-sm">
                Pasa el cursor sobre los elementos para ver los diferentes cursores en acción.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-center text-white/40 text-xs">
              Los cursores de Wii añaden un toque único a tu experiencia de navegación ✨
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WiiCursorDemo; 