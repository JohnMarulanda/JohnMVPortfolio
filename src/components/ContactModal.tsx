"use client"

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import { Download } from "lucide-react";
import type React from "react";

interface SocialButton {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
  description: string
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const socialButtons: SocialButton[] = [
  {
    icon: <FaLinkedin className="size-6" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/john-marulanda/",
    gradient: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(2,132,199,0.06) 50%, rgba(3,105,161,0) 100%)",
    iconColor: "text-blue-500",
    description: "Connect professionally"
  },
  {
    icon: <FaGithub className="size-6" />,
    label: "GitHub",
    href: "https://github.com/JohnMarulanda",
    gradient: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)",
    iconColor: "text-purple-500",
    description: "View my projects and code"
  },
  {
    icon: <FaEnvelope className="size-6" />,
    label: "Email",
    href: "mailto:johnmarulanda74@gmail.com",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
    description: "Send me a direct email"
  },
  {
    icon: <FaTelegramPlane className="size-6" />,
    label: "Telegram",
    href: "https://t.me/JohnMarulanda",
    gradient: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(6,182,212,0.06) 50%, rgba(8,145,178,0) 100%)",
    iconColor: "text-cyan-500",
    description: "Chat instantly"
  },
  {
    icon: <FaInstagram className="size-6" />,
    label: "Instagram",
    href: "https://www.instagram.com/j._.marulanda/",
    gradient: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(190,24,93,0) 100%)",
    iconColor: "text-pink-500",
    description: "Follow my journey"
  },
  {
    icon: <Download className="size-6" />,
    label: "Download CV",
    href: "#",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
    description: "Get my complete resume"
  },
];

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const handleDownloadCV = () => {
    // URL del CV en Google Drive para abrir en pestaña
    const googleDriveUrl = "https://drive.google.com/file/d/16HI52Fr9jIvGTEJDbJmYm3qHDs6Z04fK/view?usp=sharing"
    // Ruta local del CV para descarga
    const localCVPath = "/CV_John.pdf"
    
    // 1. Abrir en nueva pestaña
    window.open(googleDriveUrl, '_blank', 'noopener,noreferrer')
    
    // 2. Iniciar descarga automática
    const link = document.createElement('a')
    link.href = localCVPath
    link.download = 'CV_John_Marulanda.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSocialClick = async (social: SocialButton) => {
    if (social.label === "Download CV") {
      handleDownloadCV()
    } else if (social.label === "Email") {
      // Copiar email al portapapeles
      const email = "johnmarulanda74@gmail.com"
      try {
        await navigator.clipboard.writeText(email)
        console.log("Email copied to clipboard:", email)
      } catch (err) {
        console.error("Failed to copy email:", err)
        // Fallback para navegadores más antiguos
        const textArea = document.createElement("textarea")
        textArea.value = email
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
      }
      // Abrir cliente de correo
      window.open(social.href, '_self')
    } else {
      window.open(social.href, social.href.startsWith('mailto:') ? '_self' : '_blank', 'noopener,noreferrer')
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={overlayVariants}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl bg-gray-900/95 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">Let's Connect!</h3>
                <p className="text-white/60 text-sm md:text-base mt-1">Choose your preferred way to get in touch</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Social Cards - Horizontal Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialButtons.map((social, index) => (
                <motion.div
                  key={social.label}
                  variants={cardVariants}
                  custom={index}
                  className="group relative"
                >
                  <button
                    onClick={() => handleSocialClick(social)}
                    className="w-full flex flex-col items-center gap-3 p-4 bg-gray-800/40 hover:bg-gray-800/60 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg min-h-[120px]"
                  >
                    {/* Icon Container */}
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gray-700/50 border border-white/10 ${social.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="font-semibold text-white group-hover:text-white/90 transition-colors text-sm md:text-base">
                        {social.label}
                      </h4>
                      <p className="text-xs md:text-sm text-white/60 group-hover:text-white/70 transition-colors mt-1">
                        {social.description}
                      </p>
                    </div>

                    {/* Hover Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                      style={{ background: social.gradient }}
                    />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-center text-white/40 text-xs md:text-sm">
                Looking forward to hearing from you soon!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 