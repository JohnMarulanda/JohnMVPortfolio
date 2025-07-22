import { StaticImageData } from "next/image";
// Importar imágenes específicas de proyectos
import gestOSLanding from "@/assets/images-projects/GestOSLANDING.png";
import gestOSApp from "@/assets/images-projects/GestOSAPP.png";
import recursiveCostAI from "@/assets/images-projects/HDA recursive cost AI.png";
import linjaGame from "@/assets/images-projects/LinjaGame.png";
import html5APIs from "@/assets/images-projects/HTML5APIS.png";
import posadaDelSol from "@/assets/images-projects/PosadaDelSol.png";
import mlServiceCloud from "@/assets/images-projects/MLServiceCloud.png";
import hommieStock from "@/assets/images-projects/HommieStock.png";
import valorantAPI from "@/assets/images-projects/API VALORANT.png";
import readYA from "@/assets/images-projects/ReadYA.jpg";
import defaultProject from "@/assets/images-projects/Project.png";
import EventMaster from "@/assets/images-projects/EventMaster.png";
import FADA from "@/assets/images-projects/FADA.png";
import portfolioImg from "@/assets/images-projects/Portafolio.png";


import { 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiAngular, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiNodedotjs, 
  SiElectron, 
  SiKotlin, 
  SiAndroid,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiFastapi,
  SiDocker,
  SiAmazon,
  SiFirebase,
  SiFigma,
  SiAdobe,
  SiGit,
  SiLinux,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiFlutter,
  SiDart,
  SiSwift,
  SiUnity,
  SiBlender,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiShopify,
  SiStripe,
  SiSocketdotio,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiStorybook,
  SiFramer
} from "react-icons/si";

export interface Technology {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: StaticImageData;
  category: string;
  technologies: string[];
  year: string;
  status: "completed" | "in-progress" | "planned";
  links: {
    live?: string;
    github?: string;
    figma?: string;
    demo?: string;
  };
  features: string[];
  challenges?: string[];
  results?: string[];
}

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  { id: "react", name: "React", icon: <SiReact />, color: "text-blue-400" },
  { id: "nextjs", name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { id: "vuejs", name: "Vue.js", icon: <SiVuedotjs />, color: "text-green-400" },
  { id: "angular", name: "Angular", icon: <SiAngular />, color: "text-red-500" },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { id: "javascript", name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { id: "html5", name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
  { id: "css3", name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
  { id: "tailwindcss", name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { id: "framer-motion", name: "Framer Motion", icon: <SiFramer />, color: "text-purple-400" },
  
  // Backend
  { id: "nodejs", name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { id: "python", name: "Python", icon: <SiPython />, color: "text-yellow-400" },
  { id: "java", name: "Java", icon: <SiPython />, color: "text-red-600" },
  { id: "csharp", name: "C#", icon: <SiUnity />, color: "text-purple-500" },
  { id: "express", name: "Express", icon: <SiExpress />, color: "text-gray-400" },
  { id: "fastapi", name: "FastAPI", icon: <SiFastapi />, color: "text-teal-400" },
  { id: "php", name: "PHP", icon: <SiPhp />, color: "text-purple-400" },
  { id: "laravel", name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
  
  // Databases
  { id: "mongodb", name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { id: "postgresql", name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
  { id: "mysql", name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
  { id: "redis", name: "Redis", icon: <SiRedis />, color: "text-red-500" },
  { id: "prisma", name: "Prisma", icon: <SiPrisma />, color: "text-blue-400" },
  { id: "supabase", name: "Supabase", icon: <SiSupabase />, color: "text-green-500" },
  
  // Mobile
  { id: "kotlin", name: "Kotlin", icon: <SiKotlin />, color: "text-purple-400" },
  { id: "android", name: "Android", icon: <SiAndroid />, color: "text-green-400" },
  { id: "flutter", name: "Flutter", icon: <SiFlutter />, color: "text-blue-400" },
  { id: "dart", name: "Dart", icon: <SiDart />, color: "text-blue-500" },
  { id: "swift", name: "Swift", icon: <SiSwift />, color: "text-orange-500" },
  
  // Desktop
  { id: "electron", name: "Electron", icon: <SiElectron />, color: "text-cyan-400" },
  
  // AI/ML
  { id: "tensorflow", name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
  { id: "pytorch", name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
  { id: "opencv", name: "OpenCV", icon: <SiOpencv />, color: "text-green-500" },
  { id: "pygame", name: "Pygame", icon: <SiPython />, color: "text-green-600" },
  
  // Cloud & DevOps
  { id: "aws", name: "AWS", icon: <SiAmazon />, color: "text-orange-500" },
  { id: "gcp", name: "Google Cloud", icon: <SiAmazon />, color: "text-blue-500" },
  { id: "firebase", name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
  { id: "docker", name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
  { id: "vercel", name: "Vercel", icon: <SiVercel />, color: "text-white" },
  { id: "netlify", name: "Netlify", icon: <SiNetlify />, color: "text-teal-400" },
  { id: "uvicorn", name: "Uvicorn", icon: <SiPython />, color: "text-green-500" },
  
  // Design & CMS
  { id: "figma", name: "Figma", icon: <SiFigma />, color: "text-purple-400" },
  { id: "adobe", name: "Adobe Suite", icon: <SiAdobe />, color: "text-red-500" },
  { id: "wordpress", name: "WordPress", icon: <SiWordpress />, color: "text-blue-600" },
  { id: "shopify", name: "Shopify", icon: <SiShopify />, color: "text-green-500" },
  { id: "storybook", name: "Storybook", icon: <SiStorybook />, color: "text-pink-400" },
  
  // Game Development
  { id: "unity", name: "Unity", icon: <SiUnity />, color: "text-white" },
  { id: "blender", name: "Blender", icon: <SiBlender />, color: "text-orange-500" },
  
  // Others
  { id: "graphql", name: "GraphQL", icon: <SiGraphql />, color: "text-pink-400" },
  { id: "socketio", name: "Socket.IO", icon: <SiSocketdotio />, color: "text-white" },
  { id: "stripe", name: "Stripe", icon: <SiStripe />, color: "text-purple-500" },
  { id: "git", name: "Git", icon: <SiGit />, color: "text-orange-500" },
  { id: "linux", name: "Linux", icon: <SiLinux />, color: "text-yellow-400" },
];

export const CATEGORIES: ProjectCategory[] = [
  { id: "frontend", name: "Frontend", color: "bg-blue-500/10 border-blue-500/20 text-blue-400" },
  { id: "backend", name: "Backend", color: "bg-green-500/10 border-green-500/20 text-green-400" },
  { id: "fullstack", name: "Full Stack", color: "bg-purple-500/10 border-purple-500/20 text-purple-400" },
  { id: "mobile", name: "Mobile", color: "bg-pink-500/10 border-pink-500/20 text-pink-400" },
  { id: "desktop", name: "Desktop", color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" },
  { id: "ai", name: "AI/ML", color: "bg-orange-500/10 border-orange-500/20 text-orange-400" },
  { id: "design", name: "Design", color: "bg-red-500/10 border-red-500/20 text-red-400" },
  { id: "game", name: "Game Dev", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400" },
  { id: "ecommerce", name: "E-commerce", color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400" },
  { id: "automation", name: "Automation", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" },
];

export const PROJECTS: Project[] = [
  {
    id: "gestos-landing",
    title: "GestOS Landing - Gesture Recognition System Website",
    description: "Modern landing page and promotional website for GestOS, a gesture recognition system for computer control.",
    longDescription: "Professional landing page for GestOS gesture recognition system, built with modern web technologies. Features smooth animations, responsive design, and comprehensive product information to showcase the innovative gesture control technology.",
    image: gestOSLanding,
    category: "frontend",
    technologies: ["react", "nextjs", "typescript", "tailwindcss", "framer-motion"],
    year: "2024",
    status: "completed",
    links: {
      live: "https://gest-os.vercel.app",
      github: "https://github.com/JohnMarulanda/GestOS-Landing"
    },
    features: [
      "Modern responsive design",
      "Smooth animations with Framer Motion",
      "Product showcase sections",
      "Interactive demonstrations",
      "Cross-browser compatibility",
      "SEO optimized",
      "Performance focused",
      "Accessible design"
    ],
    challenges: [
      "Creating engaging product demonstrations",
      "Optimizing animations for performance",
      "Implementing responsive design patterns"
    ],
    results: [
      "100% Lighthouse performance score",
      "Responsive across all devices",
      "Professional product presentation"
    ]
  },
  
  {
    id: "gesture-ai-core",
    title: "GestOS Core - Gesture Recognition Engine",
    description: "Core engine for gesture recognition system with machine learning algorithms and computer vision processing.",
    longDescription: "The heart of the GestOS system, featuring advanced machine learning algorithms for real-time gesture recognition. Implements computer vision techniques, image processing, and neural networks to accurately detect and interpret hand gestures for computer control.",
    image: gestOSApp,
    category: "ai",
    technologies: ["python", "tensorflow", "opencv"],
    year: "2024",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/GestureAI-Core"
    },
    features: [
      "Real-time gesture recognition",
      "Machine learning model training",
      "Computer vision processing",
      "Image preprocessing pipeline",
      "Neural network implementation",
      "Performance optimization",
      "Multi-gesture support",
      "Accuracy improvements"
    ],
    challenges: [
      "Optimizing recognition accuracy",
      "Real-time processing performance",
      "Model training and validation"
    ],
    results: [
      "95%+ gesture recognition accuracy",
      "< 100ms processing latency",
      "Support for 20+ gesture types"
    ]
  },
  {
    id: "ui-gesture-ai",
    title: "GestOS UI - Desktop Application Interface",
    description: "Desktop application interface for the GestOS system, built with Electron for cross-platform compatibility.",
    longDescription: "User-friendly desktop application that serves as the interface for the GestOS Core system. Built with Electron for cross-platform support, featuring intuitive controls, real-time feedback, and seamless integration with the gesture recognition engine.",
    image: gestOSApp,
    category: "desktop",
    technologies: ["react", "typescript", "electron", "nodejs"],
    year: "2024",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/UIGestureAI"
    },
    features: [
      "Cross-platform desktop app",
      "Real-time gesture feedback",
      "Intuitive user interface",
      "System integration",
      "Configuration management",
      "Performance monitoring",
      "Auto-update system",
      "Accessibility features"
    ],
    challenges: [
      "Cross-platform compatibility",
      "Real-time UI updates",
      "System resource management"
    ],
    results: [
      "Cross-platform deployment",
      "Smooth user experience",
      "Efficient resource usage"
    ]
  },
  
  {
    id: "recursive-cost-ai",
    title: "Recursive Cost AI Game",
    description: "Pygame-based strategy game implementing recursive uniform cost search algorithms for pathfinding and decision-making.",
    longDescription: "A strategic puzzle game built with Pygame that demonstrates AI pathfinding algorithms. The game uses recursive uniform cost search to find optimal paths and make intelligent decisions, providing an educational and entertaining experience for understanding AI concepts.",
    image: recursiveCostAI,
    category: "ai",
    technologies: ["python", "pygame"],
    year: "2022",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/recursive_cost_IA"
    },
    features: [
      "Recursive uniform cost search implementation",
      "Interactive game interface",
      "Real-time pathfinding visualization",
      "Educational AI demonstration",
      "Optimized algorithm performance",
      "Strategic gameplay mechanics"
    ],
    challenges: [
      "Implementing efficient recursive algorithms",
      "Optimizing pathfinding performance",
      "Creating engaging game mechanics"
    ],
    results: [
      "Optimal pathfinding solution",
      "Smooth real-time performance",
      "Educational value for AI concepts"
    ]
  },
  
  {
    id: "linja-game",
    title: "Linja Digital Board Game",
    description: "Digital implementation of the classic Linja board game with AI opponents and multiplayer support.",
    longDescription: "A faithful digital recreation of the strategic board game Linja, featuring intelligent AI opponents, local multiplayer, and an intuitive interface. Built with Pygame to provide a smooth gaming experience while preserving the original game's strategic depth.",
    image: linjaGame,
    category: "game",
    technologies: ["python", "pygame"],
    year: "2022",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/LinjaGame"
    },
    features: [
      "Digital board game recreation",
      "AI opponent implementation",
      "Local multiplayer support",
      "Intuitive user interface",
      "Strategic gameplay mechanics",
      "Score tracking system"
    ],
    results: [
      "Faithful game recreation",
      "Intelligent AI behavior",
      "Smooth multiplayer experience"
    ]
  },
  
  {
    id: "html5-apis",
    title: "HTML5 APIs Learning Examples",
    description: "Comprehensive collection of HTML5 API examples and demonstrations for modern web development learning.",
    longDescription: "An educational project showcasing various HTML5 APIs through practical examples and interactive demonstrations. Covers topics like Geolocation, Canvas, Local Storage, Web Workers, and more, providing hands-on learning experiences for web developers.",
    image: html5APIs,
    category: "frontend",
    technologies: ["html5", "javascript", "css3"],
    year: "2023",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/APIS-HTML5"
    },
    features: [
      "Comprehensive HTML5 API examples",
      "Interactive demonstrations",
      "Educational documentation",
      "Modern web standards implementation",
      "Cross-browser compatibility",
      "Responsive design patterns"
    ],
    results: [
      "Complete API coverage",
      "Educational resource creation",
      "Cross-browser compatibility"
    ]
  },
  
  {
    id: "posada-del-sol",
    title: "Posada del Sol - Hotel Management System",
    description: "Complete hotel management system with reservation handling, room management, and customer service features.",
    longDescription: "A comprehensive hotel management platform for Posada del Sol, featuring a modern React frontend and robust Node.js backend. The system handles reservations, room availability, customer management, and administrative tasks with a user-friendly interface.",
    image: posadaDelSol,
    category: "fullstack",
    technologies: ["react", "typescript", "tailwindcss", "nodejs", "express", "mongodb"],
    year: "2023",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/PosadadelSolFRONTEND"
    },
    features: [
      "Room reservation system",
      "Guest management dashboard",
      "Real-time availability tracking",
      "Payment processing integration",
      "Administrative control panel",
      "Responsive mobile interface",
      "Email notification system",
      "Booking history tracking"
    ],
    challenges: [
      "Real-time room availability synchronization",
      "Complex booking logic implementation",
      "Payment gateway integration"
    ],
    results: [
      "Streamlined hotel operations",
      "Improved booking efficiency",
      "Enhanced guest experience"
    ]
  },
  
  {
    id: "fada-algorithms",
    title: "FADA Algorithm Implementations",
    description: "Academic projects implementing fundamental algorithms and data structures for the Fundamentals of Algorithms and Data Structures (FADA) course.",
    longDescription: "A collection of algorithm implementations developed for the Fundamentals of Algorithms and Data Structures (FADA) course. Includes implementations in both Java and Python, covering sorting algorithms, graph algorithms, dynamic programming, and advanced data structures.",
    image: FADA,
    category: "ai",
    technologies: ["java", "python"],
    year: "2022",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/fada2022-proyectoF-Java"
    },
    features: [
      "Fundamental algorithm implementations",
      "Data structure demonstrations",
      "Performance analysis tools",
      "Educational documentation",
      "Comparative studies",
      "Optimization techniques"
    ],
    results: [
      "Complete algorithm coverage",
      "Educational resource creation",
      "Performance optimization achievements"
    ]
  },
  
  {
    id: "ml-service-cloud",
    title: "ML Service Cloud Platform",
    description: "Cloud-based machine learning platform for deploying and managing ML models with scalable architecture.",
    longDescription: "A comprehensive cloud platform for machine learning services, featuring model deployment, scaling, monitoring, and management capabilities. Built with a modern React frontend and robust backend architecture for enterprise-grade ML operations.",
    image: mlServiceCloud,
    category: "ai",
    technologies: ["react", "typescript", "tailwindcss", "nodejs", "express", "mongodb", "python"],
    year: "2024",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/MLServiceCloud-Frontend"
    },
    features: [
      "ML model deployment system",
      "Scalable cloud architecture",
      "Model monitoring dashboard",
      "API endpoint management",
      "Performance analytics",
      "User management system",
      "Resource optimization",
      "Enterprise security"
    ],
    results: [
      "Successfully deployed ML models",
      "Scalable cloud infrastructure",
      "Enterprise-ready platform"
    ]
  },
  
  {
    id: "ml-service-cloud-backend",
    title: "MLServiceCloud-Backend - Weather Image Classification API",
    description: "Robust FastAPI-based backend service for weather image classification using convolutional neural networks.",
    longDescription: "A high-performance backend service built with FastAPI and Python for weather image classification. Implements convolutional neural networks with TensorFlow for efficient image processing and provides RESTful endpoints for classification tasks. Deployed on Google Cloud Platform with Docker for scalable performance and enterprise-grade reliability.",
    image: mlServiceCloud,
    category: "ai",
    technologies: ["python", "fastapi", "tensorflow", "docker", "gcp", "uvicorn"],
    year: "2024",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/MLServiceCloud-Backend"
    },
    features: [
      "Weather image classification with CNNs",
      "FastAPI RESTful endpoints",
      "TensorFlow model integration",
      "Docker containerization",
      "Google Cloud Platform deployment",
      "Efficient image processing pipeline",
      "Scalable architecture",
      "High-performance inference",
      "API authentication system",
      "Batch processing support"
    ],
    challenges: [
      "Optimizing CNN model performance",
      "Implementing efficient image preprocessing",
      "Scaling for concurrent requests",
      "Memory management for large images"
    ],
    results: [
      "Deployed on Google Cloud Run",
      "High-accuracy weather classification",
      "Optimized inference performance",
      "Enterprise-ready API service"
    ]
  },
  
  {
    id: "hommie-stock",
    title: "HommieStock - Home Inventory Management",
    description: "Smart home inventory management system for tracking household items, supplies, and purchases.",
    longDescription: "A comprehensive home inventory management application that helps users track household items, manage supplies, monitor expiration dates, and optimize purchasing decisions. Features barcode scanning, smart notifications, and analytics.",
    image: hommieStock,
    category: "frontend",
    technologies: ["react", "typescript", "tailwindcss"],
    year: "2023",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/HommieStock-Front"
    },
    features: [
      "Inventory tracking system",
      "Barcode scanning integration",
      "Expiration date monitoring",
      "Purchase optimization",
      "Analytics dashboard",
      "Mobile-responsive design",
      "Smart notifications",
      "Category management"
    ],
    results: [
      "Efficient inventory management",
      "Reduced household waste",
      "Optimized purchasing decisions"
    ]
  },
  
  {
    id: "event-master",
    title: "EventMaster - Event Management Platform",
    description: "Comprehensive event management platform for organizing, promoting, and managing events with attendee tracking.",
    longDescription: "A full-stack event management solution that enables users to create, promote, and manage events efficiently. Features attendee registration, ticket management, event analytics, and communication tools for event organizers.",
    image: EventMaster,
    category: "fullstack",
    technologies: ["react", "nodejs", "express", "mongodb"],
    year: "2023",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/EventMaster"
    },
    features: [
      "Event creation and management",
      "Attendee registration system",
      "Ticket management",
      "Event analytics dashboard",
      "Communication tools",
      "Payment processing",
      "QR code generation",
      "Mobile-responsive interface"
    ],
    results: [
      "Streamlined event management",
      "Improved attendee experience",
      "Efficient organizer workflow"
    ]
  },
  
  {
    id: "valorant-api",
    title: "Valorant API Explorer",
    description: "Interactive web application to explore Valorant game data, agents, weapons, and player statistics.",
    longDescription: "A modern web application that integrates with the official Valorant API to provide detailed information about agents, weapons, maps, and player statistics. Features responsive design, real-time data fetching, and advanced filtering capabilities.",
    image: valorantAPI,
    category: "frontend",
    technologies: ["nextjs", "react", "typescript", "tailwindcss", "nodejs"],
    year: "2024",
    status: "completed",
    links: {
      live: "https://valorant-explorer.vercel.app",
      github: "https://github.com/JohnMarulanda/ValorantAPI"
    },
    features: [
      "Real-time API data integration",
      "Advanced search and filtering",
      "Responsive design for all devices",
      "Player statistics tracking",
      "Agent and weapon databases",
      "Interactive map exploration"
    ],
    results: [
      "Integrated 500+ game assets",
      "Achieved 95% Lighthouse performance score",
      "Support for 25+ languages"
    ]
  },
  
  {
    id: "readya",
    title: "ReadYA – Android Reading Tracker App",
    description: "Native Android application for tracking reading habits, book progress, and reading goals with analytics.",
    longDescription: "ReadYA is a comprehensive reading tracker built natively for Android using Kotlin. It helps users track their reading progress, set goals, discover new books, and analyze their reading patterns with detailed statistics and insights.",
    image: readYA,
    category: "mobile",
    technologies: ["kotlin", "android", "firebase", "mysql", "figma"],
    year: "2023",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/ReadYA",
    },
    features: [
      "Book progress tracking",
      "Reading goals and challenges",
      "Statistics and analytics",
      "Book recommendations",
      "Social reading features",
      "Offline reading support"
    ],
    results: [
      "Optimized for 500+ concurrent users",
      "99.9% crash-free rate",
      "4.8/5 average user rating"
    ]
  },
  {
    id: "portfolio",
    title: "Personal Portfolio – John Marulanda",
    description: "My personal web portfolio showcasing my projects, skills, and experience as a developer and designer.",
    longDescription: "This portfolio is a modern, responsive web application built with Next.js and TypeScript. It features a curated selection of my best work, a detailed skills section, and a contact form. Designed to be fast, accessible, and visually engaging, it reflects my passion for both development and design.",
    image: portfolioImg,
    category: "frontend",
    technologies: ["nextjs", "react", "typescript", "tailwindcss", "framer-motion"],
    year: "2024",
    status: "completed",
    links: {
      github: "https://github.com/JohnMarulanda/JohnMVPortfolio"
    },
    features: [
      "Modern responsive design",
      "Featured projects showcase",
      "Skills and technologies section",
      "Contact form integration",
      "Custom animated UI elements",
      "Accessible and SEO-friendly"
    ],
    results: [
      "Deployed on Vercel",
      "Optimized for performance and accessibility",
      "Fully responsive across devices"
    ]
  },
];

// Helper functions
export const getTechnologyById = (id: string): Technology | undefined => {
  return TECHNOLOGIES.find(tech => tech.id === id);
};

export const getCategoryById = (id: string): ProjectCategory | undefined => {
  return CATEGORIES.find(cat => cat.id === id);
};

export const getProjectsByCategory = (categoryId: string): Project[] => {
  return PROJECTS.filter(project => project.category === categoryId);
};

export const getProjectsByTechnology = (technologyId: string): Project[] => {
  return PROJECTS.filter(project => project.technologies.includes(technologyId));
};

export const filterProjects = (
  selectedCategories: string[], 
  selectedTechnologies: string[]
): Project[] => {
  return PROJECTS.filter(project => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(project.category);
    const technologyMatch = selectedTechnologies.length === 0 || 
      selectedTechnologies.some(tech => project.technologies.includes(tech));
    
    return categoryMatch && technologyMatch;
  });
}; 