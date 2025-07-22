"use client"

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiFastapi,
  SiGit,
  SiDocker,
  SiFigma,
  SiLinux,
  SiKotlin,
  SiAndroid,
  SiElectron,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiAdobe,
  SiSketch,
  SiFramer,
  SiInvision,
  SiCanva,
  SiGo,
  SiAmazon,
  SiKubernetes,
  SiRedis,
  SiGraphql,
  SiRust,
  SiThreedotjs,
  SiBlender,
  SiGreensock,
  SiHtml5,
  SiCss3,
  SiJavascript
} from "react-icons/si";
import { FaRocket, FaPalette, FaMobile, FaGraduationCap } from "react-icons/fa";
import type React from "react";
import memojiComputer from '@/assets/images/memoji-computer.png';
import Image from 'next/image';

interface TechIcon {
  icon: React.ReactNode;
  name: string;
  color: string;
}

const frontendTech: TechIcon[] = [
  { icon: <SiHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <SiCss3 />, name: "CSS", color: "text-blue-500" },
  { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <SiReact />, name: "React", color: "text-blue-400" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
  { icon: <SiThreedotjs />, name: "Three.js", color: "text-white" },
  { icon: <SiGreensock />, name: "GSAP", color: "text-green-400" },
  { icon: <SiFramer />, name: "Framer Motion", color: "text-purple-400" },
  { icon: <SiVuedotjs />, name: "Vue.js", color: "text-green-400" },
  { icon: <SiAngular />, name: "Angular", color: "text-red-500" },
  { icon: <SiTailwindcss />, name: "TailwindCSS", color: "text-cyan-400" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
];

const backendTech: TechIcon[] = [
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-500" },
  { icon: <SiPython />, name: "Python", color: "text-yellow-400" },
  { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
  { icon: <SiFastapi />, name: "FastAPI", color: "text-teal-400" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-500" },
];

const mobileTech: TechIcon[] = [
  { icon: <SiKotlin />, name: "Kotlin", color: "text-purple-400" },
  { icon: <SiAndroid />, name: "Android", color: "text-green-400" },
  { icon: <SiElectron />, name: "Electron", color: "text-cyan-400" },
  { icon: <SiReact />, name: "React Native", color: "text-blue-400" },
];

const toolsTech: TechIcon[] = [
  { icon: <SiGit />, name: "Git", color: "text-orange-500" },
  { icon: <SiDocker />, name: "Docker", color: "text-blue-400" },
  { icon: <SiLinux />, name: "Linux", color: "text-blue-500" },
  { icon: <SiFirebase />, name: "Firebase", color: "text-yellow-400" },
  { icon: <SiVercel />, name: "Vercel", color: "text-white" },
  { icon: <SiNetlify />, name: "Netlify", color: "text-teal-400" },
];

const uxuiTech: TechIcon[] = [
  { icon: <SiFigma />, name: "Figma", color: "text-purple-400" },
  { icon: <SiBlender />, name: "Blender", color: "text-orange-500" },
  { icon: <SiAdobe />, name: "Adobe Suite", color: "text-pink-500" },
  { icon: <SiSketch />, name: "Sketch", color: "text-orange-400" },
  { icon: <SiFramer />, name: "Framer", color: "text-blue-400" },
  { icon: <SiInvision />, name: "InVision", color: "text-red-400" },
  { icon: <SiCanva />, name: "Canva", color: "text-cyan-400" },
];

const learningTech: TechIcon[] = [
  { icon: <SiGo />, name: "Go", color: "text-cyan-400" },
  { icon: <SiAmazon />, name: "AWS", color: "text-yellow-500" },
  { icon: <SiKubernetes />, name: "Kubernetes", color: "text-blue-500" },
  { icon: <SiRedis />, name: "Redis", color: "text-red-500" },
  { icon: <SiGraphql />, name: "GraphQL", color: "text-pink-400" },
  { icon: <SiRust />, name: "Rust", color: "text-orange-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  }
}



const SkillIcon = ({ tech }: { tech: TechIcon }) => {
  // Extraer el color sin el prefijo 'text-'
  const colorMap: { [key: string]: string } = {
    'text-blue-400': '#60a5fa',
    'text-blue-500': '#3b82f6',
    'text-blue-600': '#2563eb',
    'text-white': '#ffffff',
    'text-green-400': '#4ade80',
    'text-green-500': '#22c55e',
    'text-red-500': '#ef4444',
    'text-cyan-400': '#22d3ee',
    'text-purple-400': '#c084fc',
    'text-yellow-400': '#facc15',
    'text-yellow-500': '#eab308',
    'text-gray-400': '#9ca3af',
    'text-teal-400': '#2dd4bf',
    'text-orange-500': '#f97316',
    'text-orange-400': '#fb923c',
    'text-orange-600': '#ea580c',
    'text-pink-500': '#ec4899',
    'text-pink-400': '#f472b6',
    'text-red-400': '#f87171',
  };

  const hexColor = colorMap[tech.color] || '#ffffff';

  return (
    <motion.div
      className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-white/10 text-white/70 transition-all duration-300 shadow-lg cursor-pointer skill-icon-individual"
      style={{
        '--hover-color': hexColor,
      } as React.CSSProperties}
      whileHover={{
        scale: 1.15,
        color: hexColor,
        borderColor: hexColor + '50',
        boxShadow: `0 10px 30px -10px ${hexColor}30`,
      }}
      title={tech.name}
    >
      <div className="text-2xl">
        {tech.icon}
      </div>

      {/* Tooltip - Solo aparece con hover directo en este elemento */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg opacity-0 transition-all duration-300 pointer-events-none border border-white/30 whitespace-nowrap z-50 shadow-xl hover-tooltip">
        <div className="font-medium">{tech.name}</div>
        {/* Flecha del tooltip */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
      </div>
    </motion.div>
  );
};



export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text text-center">About Me</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Crafting Digital Experiences</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">Where creativity meets technology and ideas become reality</p>

        <motion.div
          className="mt-12 md:mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Personal Section - Two Column Layout */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20"
            variants={itemVariants}
          >
            {/* Left side - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text text-sm">ABOUT ME</p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Know who am I
                </h3>
                <p className="text-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text font-medium">My journey in few words</p>
              </div>



              <div className="space-y-4 text-white/80 leading-relaxed">
                <p className="text-base md:text-lg">
                  I&apos;m a <span className="text-white font-semibold">Developer and UX/UI Designer</span> driven by a deep desire to grow, improve, and make a meaningful impact through technology.
                  <br /><br />
                  I&apos;m currently pursuing a degree in <span className="text-white font-semibold">Systems Engineering at Universidad del Valle</span>. Over the years, I’ve worked on a variety of projects across <span className="text-white font-semibold">front-end, back-end, machine learning, design, and more</span>.
                  <br /><br />
                  What motivates me most is the opportunity to keep learning, to challenge myself every day, and to push boundaries in everything I create.
                </p>
              </div>
            </div>

            {/* Right side - Portrait Image */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <div className="relative">
                {/* Polaroid-style frame */}
                <div className="bg-white p-4 pb-16 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-80 h-96 bg-gray-200 rounded overflow-hidden">
                    {/* Developer portrait image */}
                    <Image
                      src="/Mifoto.jpg"
                      alt="John Marulanda - Developer portrait"
                      fill
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {/* Polaroid text */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-700 font-handwriting text-lg">John &hearts; </p>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-white">Skills & Technologies</h2>
            <p className="text-white/60 mt-4 md:text-lg max-w-2xl mx-auto">The tools and technologies I use to bring ideas to life</p>
          </div>

          {/* Skills Categories */}
          <motion.div
            className="mt-10 md:mt-16"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

              {/* Frontend */}
              <motion.div
                className="relative bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FaPalette className="text-blue-400 text-xl" />
                    <h4 className="text-lg font-semibold text-white">Frontend</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {frontendTech.map((tech, index) => (
                      <SkillIcon key={index} tech={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                className="relative bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FaRocket className="text-green-400 text-xl" />
                    <h4 className="text-lg font-semibold text-white">Backend</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {backendTech.map((tech, index) => (
                      <SkillIcon key={index} tech={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Mobile */}
              <motion.div
                className="relative bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FaMobile className="text-purple-400 text-xl" />
                    <h4 className="text-lg font-semibold text-white">Mobile</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {mobileTech.map((tech, index) => (
                      <SkillIcon key={index} tech={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* UX/UI */}
              <motion.div
                className="relative bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FaPalette className="text-pink-400 text-xl" />
                    <h4 className="text-lg font-semibold text-white">UX/UI & Design</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {uxuiTech.map((tech, index) => (
                      <SkillIcon key={index} tech={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Learning */}
              <motion.div
                className="relative bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FaGraduationCap className="text-cyan-400 text-xl" />
                    <h4 className="text-lg font-semibold text-white">Learning</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {learningTech.map((tech, index) => (
                      <SkillIcon key={index} tech={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                className="relative bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <SiGit className="text-orange-400 text-xl" />
                    <h4 className="text-lg font-semibold text-white">Tools</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {toolsTech.map((tech, index) => (
                      <SkillIcon key={index} tech={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
