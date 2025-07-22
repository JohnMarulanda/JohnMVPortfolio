"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, ExternalLink, Eye, X, Calendar, ArrowUpRight } from "lucide-react"
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiPython, SiAmazon, SiGoogle, SiMeta } from "react-icons/si"
import { useWiiCursor } from "@/hooks/useWiiCursor"
import { StaticImageData } from "next/image"
import Image from "next/image"

// Importar imágenes específicas de achievements
import awsMLImage from "@/assets/images-achievements/AWS_ML_page-0001.jpg"
import googleAIImage from "@/assets/images-achievements/GoogleAIEssentials_page-0001.jpg"
import metaFrontendImage from "@/assets/images-achievements/MetaIntroductionFrontend_page-0001.jpg"
import metaUXUIImage from "@/assets/images-achievements/MetaPrinciplesUXUI_page-0001.jpg"
import learningHowToLearnImage from "@/assets/images-achievements/AprendiendoaAprender_page-0001.jpg"

// Helper function to get image URL from StaticImageData or string
const getImageUrl = (imageUrl: string | StaticImageData): string => {
  return typeof imageUrl === 'string' ? imageUrl : imageUrl.src;
};

interface Achievement {
  id: number
  title: string
  issuer: string
  category: string
  description: string
  imageUrl: string | StaticImageData
  verificationUrl?: string
  skills: string[]
  icon: React.ReactNode
  colors: {
    primary: string
    secondary: string
    text: string
    shadow: string
  }
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "AWS Academy Machine Learning Foundations",
    issuer: "AWS Academy",
    category: "Cloud",
    description: "Comprehensive course covering machine learning fundamentals on AWS platform, including data science concepts and AWS ML services.",
    imageUrl: awsMLImage,
    verificationUrl: "https://www.credly.com/go/x8CEcuGF",
    skills: ["AWS", "Machine Learning", "Data Science", "ML Models", "Cloud Computing"],
    icon: <SiAmazon />,
    colors: {
      primary: "#1f2937",
      secondary: "#fb923c",
      text: "#fef3f2",
      shadow: "rgba(251, 146, 60, 0.15)",
    }
  },
  {
    id: 2,
    title: "Google AI Essentials",
    issuer: "Google",
    category: "AI",
    description: "Essential course covering artificial intelligence fundamentals, practical AI applications, and Google's AI technologies.",
    imageUrl: googleAIImage,
    verificationUrl: "https://coursera.org/verify/TQGM54SC9X1Q",
    skills: ["Artificial Intelligence", "Google AI", "Machine Learning", "AI Ethics", "AI Applications"],
    icon: <SiGoogle />,
    colors: {
      primary: "#1e293b",
      secondary: "#67e8f9",
      text: "#f0fdfa",
      shadow: "rgba(103, 232, 249, 0.15)",
    }
  },
  {
    id: 3,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    category: "Frontend",
    description: "Comprehensive introduction to front-end development fundamentals, covering HTML, CSS, JavaScript, and modern development practices.",
    imageUrl: metaFrontendImage,
    verificationUrl: "https://coursera.org/verify/0XXEZITYYKQN",
    skills: ["HTML", "CSS", "JavaScript", "Frontend Development", "Web Development"],
    icon: <SiMeta />,
    colors: {
      primary: "#1e293b",
      secondary: "#64748b",
      text: "#f1f5f9",
      shadow: "rgba(59, 130, 246, 0.15)",
    }
  },
  {
    id: 4,
    title: "Principles of UX/UI Design",
    issuer: "Meta",
    category: "Design",
    description: "Core principles of user experience and user interface design, covering design thinking, prototyping, and user-centered design methodologies.",
    imageUrl: metaUXUIImage,
    verificationUrl: "https://coursera.org/verify/TD56H4NM833W",
    skills: ["UX Design", "UI Design", "Prototyping", "Design Thinking", "User Research"],
    icon: <SiMeta />,
    colors: {
      primary: "#1e293b",
      secondary: "#a78bfa",
      text: "#f5f3ff",
      shadow: "rgba(167, 139, 250, 0.15)",
    }
  },
  {
    id: 5,
    title: "Learning How to Learn: Powerful Mental Tools",
    issuer: "Deep Teaching Solutions",
    category: "Learning",
    description: "Powerful mental tools for mastering difficult subjects, covering learning techniques, memory strategies, and cognitive science principles.",
    imageUrl: learningHowToLearnImage,
    verificationUrl: "https://coursera.org/verify/2LNS2MSRR2BX",
    skills: ["Learning Strategies", "Memory Techniques", "Study Methods", "Cognitive Science", "Self-Improvement"],
    icon: <Award />,
    colors: {
      primary: "#1f2937",
      secondary: "#6ee7b7",
      text: "#f0fdf4",
      shadow: "rgba(110, 231, 183, 0.15)",
    }
  }
]

const categories = ["All", "Frontend", "Cloud", "AI", "Design", "Learning"]

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

export const AchievementsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cards, setCards] = useState<Achievement[]>(achievements)
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const { createCursorHandlers } = useWiiCursor()

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory)

  // Update cards when category changes
  useEffect(() => {
    setCards(filteredAchievements)
  }, [filteredAchievements])

  const removeCard = (id: number) => {
    setCards((prevCards) => {
      const newCards = prevCards.filter((card) => card.id !== id)
      
      // If we've gone through all cards in this category, reset
      if (newCards.length === 0) {
        return filteredAchievements
      }
      
      return newCards
    })
  }

  const openModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement)
  }

  const closeModal = () => {
    setSelectedAchievement(null)
  }

  const getIconComponent = (achievement: Achievement) => {
    return achievement.icon
  }

  return (
    <section id="achievements" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text text-center">Recognition</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Achievements & Certifications</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">Swipe the cards to explore my professional certifications</p>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-800/20 backdrop-blur-lg border border-white/10 shadow-lg">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...createCursorHandlers('pointer')}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Card Stack */}
        <motion.div
          className="mt-12 md:mt-20 flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative h-[450px] md:h-[600px] w-full max-w-sm md:max-w-md">
            {cards.length === 0 ? (
              <motion.div 
                className="flex items-center justify-center h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-center">
                  <Award className="h-16 w-16 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60 text-lg">No more certificates in this category</p>
                  <button 
                    onClick={() => setCards(filteredAchievements)}
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    {...createCursorHandlers('pointer')}
                  >
                    Reset
                  </button>
                </div>
              </motion.div>
            ) : (
              <AnimatePresence mode="popLayout">
                {cards.slice(0, 3).map((card, index) => (
                  <AchievementCard
                    key={card.id}
                    achievement={card}
                    index={index}
                    removeCard={removeCard}
                    openModal={openModal}
                    getIconComponent={getIconComponent}
                    totalCards={Math.min(cards.length, 3)}
                  />
                ))}
              </AnimatePresence>
            )}
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            💡 Drag the top card to see the next certificate
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-gray-800/90 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content"
              initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: "1000px" }}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-700/50 backdrop-blur-sm border border-white/15 text-white/70 hover:text-white hover:bg-gray-600/50 transition-all duration-300"
                onClick={closeModal}
                {...createCursorHandlers('pointer')}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Certificate Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700/50 to-gray-600/30 rounded-2xl border border-white/10 overflow-hidden relative group cursor-pointer"
                     {...createCursorHandlers('pointer')}>
                  <Image 
                    src={getImageUrl(selectedAchievement.imageUrl)} 
                    alt={selectedAchievement.title}
                    fill
                    className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <Eye className="h-8 w-8 text-white mx-auto mb-2" />
                      <p className="text-white text-sm font-medium">View full certificate</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gray-700/30 backdrop-blur-sm border border-white/15 text-2xl" style={{ color: selectedAchievement.colors.secondary }}>
                        {selectedAchievement.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-white">
                          {selectedAchievement.title}
                        </h3>
                        <p className="text-lg font-medium" style={{ color: selectedAchievement.colors.secondary }}>
                          {selectedAchievement.issuer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-white/70">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      selectedAchievement.category === 'Frontend'
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                        : selectedAchievement.category === 'Cloud'
                        ? 'bg-orange-500/10 border-orange-500/20 text-orange-400'
                        : selectedAchievement.category === 'AI'
                        ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        : selectedAchievement.category === 'Design'
                        ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'
                        : selectedAchievement.category === 'Learning'
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-gray-500/10 border-gray-500/20 text-gray-400'
                    }`}>
                      {selectedAchievement.category}
                    </span>
                  </div>

                  <p className="text-white/80 leading-relaxed">
                    {selectedAchievement.description}
                  </p>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAchievement.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-2 bg-gray-700/40 border border-white/10 rounded-2xl text-sm text-white/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedAchievement.verificationUrl && (
                    <div className="flex gap-3">
                      <a 
                        href={selectedAchievement.verificationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white bg-white text-gray-950 px-6 h-12 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                        {...createCursorHandlers('pointer')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Verify Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

interface AchievementCardProps {
  achievement: Achievement
  index: number
  removeCard: (id: number) => void
  openModal: (achievement: Achievement) => void
  getIconComponent: (achievement: Achievement) => React.ReactNode
  totalCards: number
}

function AchievementCard({ achievement, index, removeCard, openModal, getIconComponent, totalCards }: AchievementCardProps) {
  const { createCursorHandlers } = useWiiCursor()
  const zIndex = totalCards - index
  const yOffset = index * 20
  const xOffset = index * 5
  const rotation = index * -2

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, x: xOffset }}
      animate={{
        opacity: 1,
        y: yOffset,
        x: xOffset,
        scale: 1 - index * 0.03,
        rotateZ: rotation,
      }}
      exit={{
        opacity: 0,
        x: 500,
        rotateZ: 20,
        transition: { duration: 0.3 },
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
        mass: 1,
      }}
      style={{
        zIndex,
        boxShadow: `0 ${10 + index * 5}px ${30 + index * 10}px ${achievement.colors.shadow}`,
        backgroundColor: achievement.colors.primary,
      }}
      className="absolute left-0 top-0 h-full w-full cursor-grab overflow-hidden rounded-2xl active:cursor-grabbing border border-white/10"
      drag={index === 0}
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={(_, info) => {
        if (index === 0) {
          const distance = Math.sqrt(Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2))
          if (distance > 150) {
            removeCard(achievement.id)
          }
        }
      }}
      whileDrag={{
        scale: 1.05,
        boxShadow: `0 ${15 + index * 5}px ${40 + index * 10}px ${achievement.colors.shadow}`,
        rotateZ: 5,
      }}
      {...(index === 0 ? createCursorHandlers('grabbing') : {})}
    >
      <motion.div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl"
        style={{ color: achievement.colors.text }}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <div 
            className="rounded-full p-2 md:p-3 text-xl md:text-2xl" 
            style={{ backgroundColor: `${achievement.colors.text}20` }}
          >
            {getIconComponent(achievement)}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                openModal(achievement)
              }}
              className="rounded-full p-2 text-white/70 hover:text-white transition-colors"
              style={{ backgroundColor: `${achievement.colors.text}20` }}
              {...createCursorHandlers('pointer')}
            >
              <Eye className="h-5 w-5" />
            </button>
            {achievement.verificationUrl && (
              <a
                href={achievement.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-full p-2 text-white/70 hover:text-white transition-colors cursor-pointer" 
                style={{ backgroundColor: `${achievement.colors.text}20` }}
                title="Verify Certificate"
                {...createCursorHandlers('pointer')}
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Card Title */}
        <div className="px-4 md:px-6 py-2">
          <h2 className="text-xl md:text-3xl font-bold leading-tight">{achievement.title}</h2>
          <h3 className="text-base md:text-xl font-medium mt-1 md:mt-2" style={{ color: `${achievement.colors.text}99` }}>
            {achievement.issuer}
          </h3>
        </div>

        {/* Card Image */}
        <div className="mt-3 md:mt-4 overflow-hidden px-4 md:px-6">
          <div
            className="aspect-video w-full overflow-hidden rounded-lg md:rounded-xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl(achievement.imageUrl)})`,
              boxShadow: `0 8px 20px ${achievement.colors.shadow}`,
            }}
          />
        </div>

        {/* Card Footer */}
        <div className="mt-auto p-4 md:p-6">
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold border ${
              achievement.category === 'Frontend'
                ? 'bg-blue-500/20 border-blue-500/30 text-blue-200'
                : achievement.category === 'Cloud'
                ? 'bg-orange-500/20 border-orange-500/30 text-orange-200'
                : achievement.category === 'AI'
                ? 'bg-purple-500/20 border-purple-500/30 text-purple-200'
                : achievement.category === 'Design'
                ? 'bg-pink-500/20 border-pink-500/30 text-pink-200'
                : achievement.category === 'Learning'
                ? 'bg-green-500/20 border-green-500/30 text-green-200'
                : 'bg-gray-500/20 border-gray-500/30 text-gray-200'
            }`}>
              {achievement.category}
            </span>
          </div>
          <p className="text-xs md:text-sm opacity-80 leading-relaxed line-clamp-2 md:line-clamp-3">{achievement.description}</p>
          
          {/* Skills Preview */}
          <div className="flex flex-wrap gap-1 mt-2 md:mt-3">
            {achievement.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs rounded-2xl"
                style={{ backgroundColor: `${achievement.colors.text}15` }}
              >
                {skill}
              </span>
            ))}
            {achievement.skills.length > 3 && (
              <span 
                className="px-2 py-1 text-xs rounded-2xl opacity-60"
                style={{ backgroundColor: `${achievement.colors.text}15` }}
              >
                +{achievement.skills.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Drag indicator for the top card */}
        {index === 0 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center">
            <motion.div
              className="h-1 w-10 rounded-full"
              style={{ backgroundColor: `${achievement.colors.text}40` }}
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
} 