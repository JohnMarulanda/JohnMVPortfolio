# 🎮 Guía de Cursores de Wii

¡Bienvenido a la guía completa de los cursores personalizados de Wii para tu portfolio! Esta guía te explica cómo usar, personalizar y aprovechar al máximo los cursores temáticos de Wii.

## 🚀 Implementación Exitosa

Los cursores de Wii ya están implementados en tu portfolio con las siguientes características:

### ✅ Características Implementadas

- **Cursores automáticos**: Se aplican automáticamente a toda la página
- **8 tipos de cursores diferentes**: Para distintas interacciones
- **Hook personalizado**: Para control programático
- **Demostración interactiva**: Modal para probar todos los cursores
- **Fallbacks**: Cursores estándar como respaldo

## 🎯 Cursores Disponibles

### 1. **Por Defecto** (`default`)
- **Archivo**: `wii-pointer.cur`
- **Uso**: Navegación general
- **Aplicación**: Automática en toda la página

### 2. **Puntero** (`pointer`)
- **Archivo**: `wii-pointer-blue.cur`
- **Uso**: Enlaces, botones, elementos clicables
- **Aplicación**: Automática en elementos interactivos

### 3. **Agarrar** (`grab`)
- **Archivo**: `wii-grab.cur`
- **Uso**: Elementos que se pueden arrastrar
- **Aplicación**: Elementos con clase `.draggable`

### 4. **Agarrando** (`grabbing`)
- **Archivo**: `wii-grab-ccw.cur`
- **Uso**: Cuando se está arrastrando un elemento
- **Aplicación**: Automática al hacer `mousedown` en elementos arrastrables

### 5. **Ayuda** (`help`)
- **Archivo**: `wii-help.cur`
- **Uso**: Elementos con información adicional
- **Aplicación**: Elementos con atributo `title` o clase `.help-element`

### 6. **Cargando** (`loading`)
- **Archivo**: `wii-loading-cd.ani`
- **Uso**: Procesos de carga
- **Aplicación**: Elementos con clase `.loading`

### 7. **Cargando CCW** (`loading-ccw`)
- **Archivo**: `wii-loading-cd-ccw.ani`
- **Uso**: Procesos de carga (antihorario)
- **Aplicación**: Variante del cursor de carga

### 8. **Deshabilitado** (`disabled`)
- **Archivo**: `wii-help-ccw.cur`
- **Uso**: Elementos no disponibles
- **Aplicación**: Elementos deshabilitados o con clase `.disabled`

## 🛠️ Cómo Usar

### Uso Automático
Los cursores se aplican automáticamente según el tipo de elemento:

```html
<!-- Cursor pointer automático -->
<button>Botón</button>
<a href="#link">Enlace</a>

<!-- Cursor de ayuda automático -->
<div title="Información adicional">Elemento con tooltip</div>

<!-- Cursor de carga automático -->
<div class="loading">Cargando...</div>
```

### Uso Programático

#### 1. Importar el Hook
```typescript
import { useWiiCursor } from '@/hooks/useWiiCursor';
```

#### 2. Usar en Componentes
```typescript
const { createCursorHandlers, setCursor, resetCursor } = useWiiCursor();

// Aplicar cursor específico a un elemento
<button {...createCursorHandlers('pointer')}>
  Botón con cursor personalizado
</button>

// Cambiar cursor globalmente
setCursor('loading');
resetCursor(); // Volver al cursor por defecto
```

#### 3. Ejemplos Prácticos

```typescript
// Botón con cursor de puntero
<button {...createCursorHandlers('pointer')}>
  Hacer clic aquí
</button>

// Elemento arrastrable
<div {...createCursorHandlers('grab')}>
  Arrastra este elemento
</div>

// Elemento con ayuda
<div {...createCursorHandlers('help')}>
  Hover para ayuda
</div>

// Cambiar cursor durante carga
const handleSubmit = async () => {
  setCursor('loading');
  await processForm();
  resetCursor();
};
```

## 🎨 Personalización

### Añadir Nuevos Cursores

1. **Añadir archivo de cursor** a `/public/cursors/`
2. **Actualizar el hook** en `src/hooks/useWiiCursor.ts`:

```typescript
const cursorConfigs: Record<WiiCursorType, CursorConfig> = {
  // ... cursores existentes
  'nuevo-cursor': {
    type: 'nuevo-cursor',
    fallback: 'pointer',
    file: 'nuevo-cursor.cur'
  }
};
```

3. **Actualizar el tipo** TypeScript:
```typescript
export type WiiCursorType = 
  | 'default'
  | 'pointer'
  // ... tipos existentes
  | 'nuevo-cursor';
```

### Personalizar CSS

Añadir estilos específicos en `src/app/globals.css`:

```css
/* Cursor personalizado para clase específica */
.mi-elemento-especial {
  cursor: url('/cursors/mi-cursor.cur'), pointer !important;
}

/* Cursor para estado hover */
.mi-elemento:hover {
  cursor: url('/cursors/mi-cursor-hover.cur'), pointer !important;
}
```

## 🔧 Características Avanzadas

### 1. Cursor Global Temporal
```typescript
const { setGlobalCursor, removeGlobalCursor } = useWiiCursor();

// Cambiar cursor en toda la página
setGlobalCursor('loading');

// Restaurar cursor normal
removeGlobalCursor();
```

### 2. Cursor para Elementos Específicos
```typescript
const { useElementWiiCursor } = useWiiCursor();
const buttonRef = useRef<HTMLButtonElement>(null);

// Aplicar cursor automáticamente al elemento
useElementWiiCursor(buttonRef, 'pointer');
```

### 3. Hooks Especializados
```typescript
// Cursor automático basado en tipo
useAutoWiiCursor('loading'); // Aplica cursor de carga

// Cursor para elemento específico
useElementWiiCursor(ref, 'grab'); // Aplica cursor de agarre
```

## 🎮 Demostración Interactiva

### Acceder a la Demostración

1. **Botón en Header**: Haz clic en el botón "Cursores" en la navegación principal
2. **Prueba todos los cursores**: Experimenta con cada tipo de cursor
3. **Área de prueba**: Elementos interactivos para probar cursores
4. **Cursor global**: Cambia el cursor de toda la página

### Características de la Demostración

- **Vista en tiempo real**: Ve el cursor actual seleccionado
- **Cambio global**: Prueba cómo se ve cada cursor en toda la página
- **Área de prueba**: Botones específicos para cada tipo de cursor
- **Reseteo fácil**: Vuelve al cursor por defecto cuando gustes

## 🌟 Consejos de Uso

### 1. **Consistencia**
- Usa el mismo cursor para elementos similares
- Mantén coherencia con la funcionalidad del elemento

### 2. **Accesibilidad**
- Todos los cursores tienen fallbacks estándar
- Los cursores animados no afectan la funcionalidad

### 3. **Performance**
- Los cursores se cargan automáticamente
- Archivos `.cur` y `.ani` son ligeros

### 4. **Responsive**
- Los cursores funcionan en todos los dispositivos
- En móvil, los cursores no se muestran (comportamiento esperado)

## 🔍 Resolución de Problemas

### El cursor no se muestra
- Verifica que el archivo esté en `/public/cursors/`
- Comprueba que la ruta sea correcta
- Asegúrate de que el fallback esté definido

### El cursor se ve pixelado
- Los archivos `.cur` pueden tener limitaciones de resolución
- Considera usar archivos de mayor calidad

### El cursor no cambia en ciertos elementos
- Verifica que el CSS tenga `!important`
- Comprueba que no haya conflictos con otros estilos

## 🎉 Resultado Final

¡Felicitaciones! Ahora tu portfolio tiene:

- ✅ **Cursores temáticos de Wii** en toda la página
- ✅ **8 tipos diferentes** de cursores
- ✅ **Demostración interactiva** para probar todos los cursores
- ✅ **Hook personalizado** para control programático
- ✅ **Aplicación automática** según el tipo de elemento
- ✅ **Fallbacks** para compatibilidad

Los cursores de Wii añaden un toque único y nostálgico a tu portfolio, mejorando la experiencia de usuario y haciéndola más memorable.

## 🚀 Próximos Pasos

1. **Prueba la demostración**: Haz clic en el botón "Cursores" en el header
2. **Experimenta**: Prueba todos los tipos de cursores disponibles
3. **Personaliza**: Añade cursores adicionales si lo deseas
4. **Comparte**: ¡Muestra tu portfolio con cursores únicos!

¡Disfruta de tus nuevos cursores de Wii! 🎮✨ 