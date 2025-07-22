"use client"

// Importar imágenes específicas de proyectos
import gestOSLanding from "@/assets/images-projects/GestOSLANDING.png";
import gestOSApp from "@/assets/images-projects/GestOSAPP.png";
import valorantAPI from "@/assets/images-projects/API VALORANT.png";
import readYA from "@/assets/images-projects/ReadYA.jpg";
import minecraftLauncher from "@/assets/images-projects/MinecraftLauncher.png";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaFigma, FaYoutube } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiTypescript, SiNextdotjs, SiPython, SiElectron, SiKotlin, SiAndroid, SiJavascript, SiVuedotjs, SiAngular, SiHtml5, SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";
import { useWiiCursor } from "@/hooks/useWiiCursor";

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Project {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  description?: string;
  liveLink?: string;
  githubLink?: string;
  frontendLink?: string;
  backendLink?: string;
  figmaLink?: string;
  videoLink?: string;
  image: any;
  technologies: Technology[];
}

const portfolioProjects: Project[] = [
  {
    company: "Universidad del Valle",
    year: "2024",
    title: "GestOS Landing – Gesture Recognition System Website",
    description: "A modern landing page for the GestOS gesture recognition system, featuring smooth animations, responsive design, and product information.",
    results: [
      { title: "Built modern landing page with Next.js and TypeScript for GestOS promotion" },
      { title: "Implemented smooth animations using Framer Motion for engaging user experience" },
      { title: "Achieved 100% Lighthouse performance score with responsive design" }
    ],
    liveLink: "https://gest-os.vercel.app",
    githubLink: "https://github.com/JohnMarulanda/GestOS-Landing",
    image: gestOSLanding,
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "React", icon: <SiReact />, color: "text-blue-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-cyan-400" }
    ]
  },
  {
    company: "Universidad del Valle",
    year: "2024",
    title: "GestOS Application – Hand Gesture Control System",
    description: "Control your computer using hand gestures. Visit the landing page to learn more and watch the demo video.",
    results: [
      { title: "Developed complete gesture recognition system with Python ML core and React UI" },
      { title: "Integrated OpenCV and MediaPipe for real-time computer vision processing" },
      { title: "Built cross-platform desktop app using Electron with 95%+ gesture accuracy" }
    ],
    frontendLink: "https://github.com/JohnMarulanda/GestureAI-UI",
    backendLink: "https://github.com/JohnMarulanda/GestureAI-Core",
    videoLink: "https://youtu.be/ipG22HUoBoE",
    image: gestOSApp,
    technologies: [
      { name: "Python", icon: <SiPython />, color: "text-yellow-400" },
      { name: "React", icon: <SiReact />, color: "text-blue-400" },
      { name: "Electron", icon: <SiElectron />, color: "text-cyan-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" }
    ]
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Valorant API Explorer",
    description: "A web application to explore Valorant game data, agents, weapons, and player statistics in real time.",
    results: [
      { title: "Integrated Valorant API to fetch game data and player stats" },
      { title: "Built a responsive and interactive UI to explore agents, weapons, and maps" },
      { title: "Handled API rate limits, loading states, and error management for a smooth UX" }
    ],
    liveLink: "https://valorant-explorer.vercel.app",
    githubLink: "https://github.com/JohnMarulanda/ValorantAPI",
    image: valorantAPI,
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "React", icon: <SiReact />, color: "text-blue-400" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" }
    ]
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Minecraft Launcher Frontend",
    description: "A modern and user-friendly frontend to manage Minecraft installations, mods, configurations, and accounts. Built with collaboration, creativity, and a love for Minecraft!",
    results: [
      { title: "User authentication and profile management" },
      { title: "Minecraft version selection and installation" },
      { title: "Modpack and resource pack management" },
      { title: "Configuration editor" },
      { title: "News and updates section" },
      { title: "Modern and responsive UI" }
    ],
    githubLink: "https://github.com/JohnMarulanda/launcherMinecraft-front",
    figmaLink: "https://www.figma.com/design/0HnKF4twtFi4mWWTYuC1jI/Minecraft-Launche",
    image: minecraftLauncher,
    technologies: [
      { name: "React", icon: <SiReact />, color: "text-blue-400" },
      { name: "Electron", icon: <SiElectron />, color: "text-cyan-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
      { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" }
    ]
  },
  {
    company: "Academic Project",
    year: "2023",
    title: "ReadYA – Android Reading Tracker App",
    description: "A native Android app to track and analyze your reading habits, set goals, and get book recommendations.",
    results: [
      { title: "Developed native Android app in Kotlin to track and analyze reading habits" },
      { title: "Integrated notification system and secure encrypted data handling" },
      { title: "Optimized performance for both low- and high-end devices" }
    ],
    githubLink: "https://github.com/JohnMarulanda/ReadYA",
    figmaLink: "https://www.figma.com/design/ZgrQUk9tfWGp2AozeY5xDL/ReadYA",
    image: readYA,
    technologies: [
      { name: "Kotlin", icon: <SiKotlin />, color: "text-purple-400" },
      { name: "Android", icon: <SiAndroid />, color: "text-green-400" }
    ]
  },
];

const overlayVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    backdropFilter: "blur(0px)"
  },
  visible: { 
    opacity: 1,
    scale: 1,
    backdropFilter: "blur(12px)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

const techVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.2,
      ease: "easeOut"
    }
  })
};

export const ProjectsSection = () => {
  const { createCursorHandlers } = useWiiCursor();
  
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text text-center">Real-World Results</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">See how I transform ideas into engaging digital experiences</p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <motion.div 
              key={project.title} 
              className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:outline-dashed p-6 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
              viewport={{ once: true }}
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="absolute inset-0 -z-10 opacity-10" style={{ background: "linear-gradient(to right, #8B5CF6, #EC4899)" }}></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text text-center inline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex items-center gap-2 text-sm text-white/50 md:text-base">
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Project Description */}
                  {project.description && (
                    <div className="mt-6">
                      <p className="text-white/80 text-sm md:text-base italic">{project.description}</p>
                    </div>
                  )}
                  
                  {/* Action Buttons in Text Section */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-gray-950 px-6 py-2 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-300"
                        {...createCursorHandlers('pointer')}
                      >
                        <FaExternalLinkAlt className="size-3" />
                        Visit Live Site
                      </a>
                    )}
                    
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white/15 px-6 py-2 rounded-xl font-semibold text-sm text-white/90 hover:bg-white/5 transition-all duration-300"
                        {...createCursorHandlers('pointer')}
                      >
                        <FaGithub className="size-3" />
                        GitHub
                      </a>
                    )}
                    
                    {project.frontendLink && (
                      <a
                        href={project.frontendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white/15 px-6 py-2 rounded-xl font-semibold text-sm text-white/90 hover:bg-white/5 transition-all duration-300"
                        {...createCursorHandlers('pointer')}
                      >
                        <FaGithub className="size-3" />
                        Frontend
                      </a>
                    )}
                    
                    {project.backendLink && (
                      <a
                        href={project.backendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white/15 px-6 py-2 rounded-xl font-semibold text-sm text-white/90 hover:bg-white/5 transition-all duration-300"
                        {...createCursorHandlers('pointer')}
                      >
                        <FaGithub className="size-3" />
                        Backend
                      </a>
                    )}
                    
                    {project.videoLink && (
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-gray-950 px-6 py-2 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-300"
                        {...createCursorHandlers('pointer')}
                      >
                        <FaYoutube className="size-3" />
                        Video
                      </a>
                    )}
                    
                    {project.figmaLink && (
                      <a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-gray-950 px-6 py-2 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-300"
                        {...createCursorHandlers('pointer')}
                      >
                        <FaFigma className="size-3" />
                        Figma
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="mt-8 -mb-8 md:mb-0 lg:mt-10 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-2xl transition-transform duration-300 group-hover:scale-105" 
                  />
                  
                  {/* Liquid Glass Overlay */}
                  <motion.div
                    className="absolute inset-0 mt-8 -mb-8 md:mb-0 lg:mt-10 lg:absolute lg:h-full lg:w-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                      backdropFilter: "blur(12px)"
                    }}
                  >
                    <div className="flex flex-col justify-center items-center h-full p-6 space-y-6">
                      {/* Action Buttons */}
                      <div className="flex flex-wrap justify-center gap-3">
                        {project.liveLink && (
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            {...createCursorHandlers('pointer')}
                          >
                            <FaExternalLinkAlt className="size-3" />
                            Live Site
                          </motion.a>
                        )}
                        
                        {project.githubLink && (
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-white/20 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            {...createCursorHandlers('pointer')}
                          >
                            <FaGithub className="size-3" />
                            GitHub
                          </motion.a>
                        )}
                        
                        {project.frontendLink && (
                          <motion.a
                            href={project.frontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-white/20 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            {...createCursorHandlers('pointer')}
                          >
                            <FaGithub className="size-3" />
                            Frontend
                          </motion.a>
                        )}
                        
                        {project.backendLink && (
                          <motion.a
                            href={project.backendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-white/20 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            {...createCursorHandlers('pointer')}
                          >
                            <FaGithub className="size-3" />
                            Backend
                          </motion.a>
                        )}
                        
                        {project.videoLink && (
                          <motion.a
                            href={project.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            {...createCursorHandlers('pointer')}
                          >
                            <FaYoutube className="size-3" />
                            Video
                          </motion.a>
                        )}
                        
                        {project.figmaLink && (
                          <motion.a
                            href={project.figmaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            {...createCursorHandlers('pointer')}
                          >
                            <FaFigma className="size-3" />
                            Figma
                          </motion.a>
                        )}
                      </div>
                      
                      {/* Technologies - Always visible */}
                      <div className="flex flex-col items-center space-y-3">
                        <span className="text-white/80 text-sm font-medium">Technologies Used</span>
                        <div className="flex flex-wrap justify-center gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech.name}
                              className={`flex items-center gap-1 px-3 py-1.5 bg-black/40 border border-white/10 rounded-full text-xs font-medium ${tech.color} backdrop-blur-sm`}
                              whileHover={{ scale: 1.15 }}
                              transition={{ duration: 0.2 }}
                              title={tech.name}
                            >
                              <span className="text-base">{tech.icon}</span>
                              <span className="text-white/90">{tech.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <motion.a
            href="https://github.com/JohnMarulanda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...createCursorHandlers('pointer')}
          >
            <span className="font-semibold">Open GitHub</span><FaArrowRight className="size-4"/>
          </motion.a>
          <Link href="/projects">
            <motion.div
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-950 px-6 h-12 rounded-xl hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              {...createCursorHandlers('pointer')}
            >
              <span className="font-semibold">Show more projects</span>
              <FaArrowRight className="size-4"/>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};
