# 📁 Guía para Agregar Nuevos Proyectos

Esta guía te explica cómo agregar nuevos proyectos a tu portfolio de manera fácil y rápida.

## 🚀 Pasos Rápidos

### 1. Agregar la Imagen del Proyecto

1. Coloca tu imagen en la carpeta `src/assets/images/`
2. Formatos recomendados: `.png`, `.jpg`, `.webp`
3. Resolución recomendada: 1200x800px (ratio 3:2)
4. Peso recomendado: < 500KB

### 2. Importar la Imagen

En el archivo `src/data/projects.ts`, agrega el import de tu imagen:

```typescript
import tuNuevaImagen from "@/assets/images/tu-nueva-imagen.png";
```

### 3. Agregar el Proyecto al Array

Agrega tu proyecto al array `PROJECTS` en `src/data/projects.ts`:

```typescript
{
  id: "tu-proyecto-id", // Único, sin espacios, uso de guiones
  title: "Título de tu Proyecto",
  description: "Descripción corta (máx. 150 caracteres)",
  longDescription: "Descripción detallada del proyecto, funcionalidades, objetivos, etc.",
  image: tuNuevaImagen, // La imagen que importaste
  category: "frontend", // Ver categorías disponibles abajo
  technologies: ["react", "nextjs", "typescript"], // Ver tecnologías disponibles abajo
  year: "2024", // Año o rango de años
  status: "completed", // completed | in-progress | planned
  links: {
    live: "https://tu-proyecto.vercel.app", // Opcional
    github: "https://github.com/tu-usuario/tu-repo", // Opcional
    figma: "https://figma.com/tu-diseño", // Opcional
    demo: "https://demo.tu-proyecto.com" // Opcional
  },
  features: [
    "Característica 1",
    "Característica 2",
    "Característica 3"
  ],
  challenges: [ // Opcional
    "Desafío técnico que resolviste",
    "Problema complejo que enfrentaste"
  ],
  results: [ // Opcional
    "Resultado medible obtenido",
    "Métrica de rendimiento alcanzada"
  ]
}
```

## 📋 Categorías Disponibles

- `frontend` - Desarrollo Frontend
- `backend` - Desarrollo Backend  
- `fullstack` - Desarrollo Full Stack
- `mobile` - Desarrollo Móvil
- `desktop` - Aplicaciones de Escritorio
- `ai` - Inteligencia Artificial/Machine Learning
- `design` - Diseño UI/UX
- `game` - Desarrollo de Videojuegos
- `ecommerce` - Comercio Electrónico
- `automation` - Automatización

## 🛠️ Tecnologías Disponibles

### Frontend
`react`, `nextjs`, `vuejs`, `angular`, `typescript`, `javascript`, `tailwindcss`

### Backend
`nodejs`, `python`, `express`, `fastapi`, `php`, `laravel`

### Bases de Datos
`mongodb`, `postgresql`, `mysql`, `redis`, `prisma`, `supabase`

### Móvil
`kotlin`, `android`, `flutter`, `dart`, `swift`

### Desktop
`electron`

### AI/ML
`tensorflow`, `pytorch`, `opencv`

### Cloud & DevOps
`aws`, `firebase`, `docker`, `vercel`, `netlify`

### Diseño & CMS
`figma`, `adobe`, `wordpress`, `shopify`

### Juegos
`unity`, `blender`

### Otros
`graphql`, `socketio`, `stripe`, `git`, `linux`

## ➕ Agregar Nueva Tecnología

Si necesitas una tecnología que no está en la lista:

1. Ve al array `TECHNOLOGIES` en `src/data/projects.ts`
2. Agrega tu tecnología siguiendo este formato:

```typescript
{ 
  id: "nueva-tech", 
  name: "Nueva Tecnología", 
  icon: <SiNuevaTech />, // Importa el icono de react-icons/si
  color: "text-blue-400" // Color de Tailwind CSS
}
```

3. No olvides agregar el import del icono al principio del archivo:

```typescript
import { SiNuevaTech } from "react-icons/si";
```

## ➕ Agregar Nueva Categoría

Para agregar una nueva categoría:

1. Ve al array `CATEGORIES` en `src/data/projects.ts`
2. Agrega tu categoría:

```typescript
{ 
  id: "nueva-categoria", 
  name: "Nueva Categoría", 
  color: "bg-blue-500/10 border-blue-500/20 text-blue-400" 
}
```

## 🎨 Colores Recomendados para Tecnologías

- **Azul**: `text-blue-400`, `text-blue-500`, `text-blue-600`
- **Verde**: `text-green-400`, `text-green-500`
- **Rojo**: `text-red-400`, `text-red-500`
- **Amarillo**: `text-yellow-400`, `text-yellow-500`
- **Púrpura**: `text-purple-400`, `text-purple-500`
- **Cian**: `text-cyan-400`, `text-cyan-500`
- **Rosa**: `text-pink-400`, `text-pink-500`
- **Naranja**: `text-orange-400`, `text-orange-500`

## 📝 Ejemplo Completo

```typescript
import miProyectoImagen from "@/assets/images/mi-proyecto.png";

// Agregar al array PROJECTS:
{
  id: "mi-proyecto-increible",
  title: "Mi Proyecto Increíble",
  description: "Una aplicación web moderna que soluciona problemas reales usando las últimas tecnologías.",
  longDescription: "Este proyecto es una aplicación web completa que permite a los usuarios gestionar sus tareas diarias con una interfaz intuitiva y moderna. Incluye autenticación, base de datos en tiempo real, y notificaciones push.",
  image: miProyectoImagen,
  category: "fullstack",
  technologies: ["nextjs", "react", "typescript", "tailwindcss", "nodejs", "postgresql", "prisma"],
  year: "2024",
  status: "completed",
  links: {
    live: "https://mi-proyecto.vercel.app",
    github: "https://github.com/usuario/mi-proyecto",
    figma: "https://figma.com/mi-diseño"
  },
  features: [
    "Autenticación segura con NextAuth",
    "Base de datos en tiempo real",
    "Interfaz responsive",
    "Notificaciones push",
    "Dashboard de administración"
  ],
  results: [
    "100% Lighthouse performance score",
    "Soporte para 1000+ usuarios concurrentes",
    "Tiempo de carga < 2 segundos"
  ]
}
```

## 🔧 Troubleshooting

### La imagen no se muestra
- Verifica que el import de la imagen sea correcto
- Asegúrate de que la imagen esté en `src/assets/images/`
- Verifica que el nombre del archivo no tenga caracteres especiales

### La tecnología no aparece
- Verifica que el ID de la tecnología exista en el array `TECHNOLOGIES`
- Revisa que no haya errores de tipeo en el ID

### El proyecto no se filtra correctamente
- Asegúrate de que la categoría exista en el array `CATEGORIES`
- Verifica que las tecnologías estén escritas correctamente

## 🎯 Tips para Mejores Resultados

1. **Imágenes**: Usa imágenes de alta calidad que muestren claramente tu proyecto
2. **Descripciones**: Sé específico sobre las tecnologías y características
3. **Links**: Incluye todos los links relevantes (live, github, figma)
4. **Resultados**: Agrega métricas concretas cuando sea posible
5. **Categorización**: Elige la categoría más específica para tu proyecto

¡Listo! Ahora ya puedes agregar nuevos proyectos fácilmente a tu portfolio. 🚀 