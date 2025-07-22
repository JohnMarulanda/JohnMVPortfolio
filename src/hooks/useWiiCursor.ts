import { useEffect, useCallback } from 'react';

export type WiiCursorType = 
  | 'default'
  | 'pointer'
  | 'grab'
  | 'grabbing'
  | 'help'
  | 'loading'
  | 'loading-ccw'
  | 'disabled';

interface CursorConfig {
  type: WiiCursorType;
  fallback: string;
  file: string;
}

const cursorConfigs: Record<WiiCursorType, CursorConfig> = {
  default: {
    type: 'default',
    fallback: 'auto',
    file: 'wii-pointer-ccw.cur'
  },
  pointer: {
    type: 'pointer',
    fallback: 'pointer',
    file: 'wii-pointer-blue.cur'
  },
  grab: {
    type: 'grab',
    fallback: 'grab',
    file: 'wii-grab.cur'
  },
  grabbing: {
    type: 'grabbing',
    fallback: 'grabbing',
    file: 'wii-grab-ccw.cur'
  },
  help: {
    type: 'help',
    fallback: 'help',
    file: 'wii-help.cur'
  },
  loading: {
    type: 'loading',
    fallback: 'wait',
    file: 'wii-loading-cd.ani'
  },
  'loading-ccw': {
    type: 'loading-ccw',
    fallback: 'wait',
    file: 'wii-loading-cd-ccw.ani'
  },
  disabled: {
    type: 'disabled',
    fallback: 'not-allowed',
    file: 'wii-help-ccw.cur'
  }
};

export const useWiiCursor = () => {
  const setCursor = useCallback((type: WiiCursorType, element?: HTMLElement) => {
    const config = cursorConfigs[type];
    const cursorValue = `url('/cursors/${config.file}'), ${config.fallback}`;
    
    if (element) {
      element.style.cursor = cursorValue;
    } else {
      document.body.style.cursor = cursorValue;
    }
  }, []);

  const resetCursor = useCallback((element?: HTMLElement) => {
    if (element) {
      element.style.cursor = '';
    } else {
      document.body.style.cursor = `url('/cursors/wii-pointer-ccw.cur'), auto`;
    }
  }, []);

  const setGlobalCursor = useCallback((type: WiiCursorType) => {
    const config = cursorConfigs[type];
    const cursorValue = `url('/cursors/${config.file}'), ${config.fallback}`;
    
    // Aplicar a html y body
    document.documentElement.style.cursor = cursorValue;
    document.body.style.cursor = cursorValue;
    
    // Aplicar a todos los elementos si es necesario
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        cursor: ${cursorValue} !important;
      }
    `;
    style.id = 'wii-cursor-global';
    
    // Remover estilo anterior si existe
    const existingStyle = document.getElementById('wii-cursor-global');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    document.head.appendChild(style);
  }, []);

  const removeGlobalCursor = useCallback(() => {
    const existingStyle = document.getElementById('wii-cursor-global');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    document.documentElement.style.cursor = '';
    document.body.style.cursor = `url('/cursors/wii-pointer-ccw.cur'), auto`;
  }, []);

  const createCursorHandlers = useCallback((type: WiiCursorType) => {
    return {
      onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
        setCursor(type, e.currentTarget);
      },
      onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
        resetCursor(e.currentTarget);
      }
    };
  }, [setCursor, resetCursor]);

  return {
    setCursor,
    resetCursor,
    setGlobalCursor,
    removeGlobalCursor,
    createCursorHandlers,
    cursorTypes: Object.keys(cursorConfigs) as WiiCursorType[]
  };
};

// Hook para aplicar cursores automáticamente basado en el tipo de elemento
export const useAutoWiiCursor = (type: WiiCursorType = 'default') => {
  const { setCursor, resetCursor } = useWiiCursor();

  useEffect(() => {
    setCursor(type);
    
    return () => {
      resetCursor();
    };
  }, [type, setCursor, resetCursor]);
};

// Hook para elementos específicos
export const useElementWiiCursor = (
  ref: React.RefObject<HTMLElement>,
  type: WiiCursorType = 'pointer'
) => {
  const { setCursor, resetCursor } = useWiiCursor();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => setCursor(type, element);
    const handleMouseLeave = () => resetCursor(element);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, type, setCursor, resetCursor]);
};

export default useWiiCursor; 