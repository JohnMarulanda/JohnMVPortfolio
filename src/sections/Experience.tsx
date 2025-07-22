"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Code, Calendar, ExternalLink } from "lucide-react"
import { useWiiCursor } from "@/hooks/useWiiCursor"

interface ExperienceItem {
  id: string
  type: "work" | "education" | "project"
  title: string
  company: string
  period: string
  description: string[]
  icon: React.ReactNode
  gradient: string
  iconColor: string
  link?: string
}

const experienceData: ExperienceItem[] = [
  {
    id: "gestos",
    type: "project",
    title: "GestOS - Control PC with gestures",
    company: "Thesis Project - Project Lead",
    period: "2024 – 2025 | 1 year",
    description: [
      "Led development of cross-platform app using Electron, React, Python (FastAPI, OpenCV, MediaPipe)",
      "Integrated full-stack features from UI/UX to backend gesture detection logic",
      "Conducted real user testing and ensured accessibility compliance (WCAG)",
      "Optimized system performance for real-time interaction and accuracy"
    ],
    icon: <Code className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.05) 100%)",
    iconColor: "text-purple-500",
    link: "https://gest-os.vercel.app"
  },
  {
    id: "freelancer",
    type: "work",
    title: "Software Developer & UI/UX Designer",
    company: "Freelancer",
    period: "2021 – Present | 4 years",
    description: [
      "Built responsive web apps using Vue.js, Angular, React, TailwindCSS, and TypeScript",
      "Developed betting and POS platforms with attention to security and fraud prevention",
      "Ensured accessibility and performance compliance across browsers and devices",
      "Managed client communications and remote project delivery as a freelancer"
    ],
    icon: <Briefcase className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(234,88,12,0.05) 100%)",
    iconColor: "text-orange-500"
  },
  {
    id: "teaching",
    type: "education",
    title: "Teaching Assistant & Support Monitor",
    company: "Universidad del Valle",
    period: "January 2023 - December 2024| 2 years",
    description: [
      "Mentored students and provided technical assistance across academic projects and tools",
      "Managed program logistics and inventory systems to ensure smooth operations",
      "Designed promotional graphics and marketing materials for academic initiatives",
      "Maintained documentation and archive systems, ensuring data integrity and accessibility"
    ],
    icon: <GraduationCap className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(16,185,129,0.05) 100%)",
    iconColor: "text-green-500"
  },
  
  {
    id: "customer-service",
    type: "work",
    title: "Customer Service & Design Specialist",
    company: "Part-time",
    period: "2018 - Present | 7 years",
    description: [
      "Delivered bilingual customer service in fast-paced retail environments",
      "Designed marketing materials and brand visuals for promotions",
      "Supported day-to-day shop operations and customer engagement strategies",
      "Collaborated with teams to ensure an excellent client experience"
    ],
    icon: <Briefcase className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(220,38,38,0.05) 100%)",
    iconColor: "text-red-500"
  },
  {
    id: "readya",
    type: "project",
    title: "ReadYA - Mobile Application Development",
    company: "Team Lead",
    period: "2023 | 6 months",
    description: [
      "Led native Android development in Kotlin for e-book tracking and analytics",
      "Designed user experience features, including notifications and reading goals",
      "Built secure authentication and encrypted data management systems",
      "Optimized performance for smooth use across low-end and high-end devices"
    ],
    icon: <Code className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(2,132,199,0.05) 100%)",
    iconColor: "text-blue-500"
  },
  {
    id: "ai-games",
    type: "project",
    title: "AI Algorithm Implementation & Game Development",
    company: "Team Lead",
    period: "2022 | 6 months",
    description: [
      "Implemented and optimized Uniform Cost Search and Minimax algorithms",
      "Built real-time strategy games with dynamic interfaces and user interaction",
      "Applied AI logic to enhance gameplay and decision-making systems",
      "Conducted quality assurance through testing and peer reviews"
    ],
    icon: <Code className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(147,51,234,0.05) 100%)",
    iconColor: "text-violet-500"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
}

export const ExperienceSection = () => {
  const { createCursorHandlers } = useWiiCursor()

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text text-center">Journey</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Professional Experience</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">Building skills through diverse projects and collaborations</p>
        
        <motion.div 
          className="mt-12 md:mt-20 relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-fuchsia-500/30 to-transparent"></div>
          
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Icon */}
              <motion.div
                variants={iconVariants}
                className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl backdrop-blur-sm border border-white/15 shadow-lg shrink-0 ${
                  index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
                } ml-0`}
                style={{
                  background: item.gradient,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                {...createCursorHandlers('pointer')}
              >
                <span className={`${item.iconColor}`}>
                  {item.icon}
                </span>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                className={`relative bg-gray-800/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg group cursor-pointer flex-1 md:max-w-md ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                {...createCursorHandlers('pointer')}
              >
                {/* Subtle Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: item.gradient,
                    filter: "blur(20px)",
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-white/60" />
                        <span className="text-sm text-white/60 font-mono">{item.period}</span>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-white/60 hover:text-white transition-colors"
                            {...createCursorHandlers('pointer')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className={`text-base font-medium mb-4 ${item.iconColor}`}>
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start gap-3 text-white/70 text-sm md:text-base">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 shrink-0"></div>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Type Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${
                  item.type === 'work' 
                    ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
                    : item.type === 'education'
                    ? 'bg-green-500/10 border-green-500/20 text-green-400'
                    : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                }`}>
                  {item.type === 'work' ? 'Work' : item.type === 'education' ? 'Education' : 'Project'}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 