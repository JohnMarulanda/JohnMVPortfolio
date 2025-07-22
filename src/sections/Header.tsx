"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Home, FolderKanban, User, Mail, Globe, Download, Briefcase, Menu, X, Award, ChevronDown } from "lucide-react"
import type * as React from "react"
import { useState, useRef, useEffect } from "react"
import { useWiiCursor } from "@/hooks/useWiiCursor"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

interface ProjectMenuItem {
  label: string
  href: string
  description: string
}

interface LanguageOption {
  code: string
  label: string
  gradient: string
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#hero",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "#about",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Experience",
    href: "#experience",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-purple-500",
  },
  {
    icon: <Award className="h-5 w-5" />,
    label: "Achievements",
    href: "#achievements",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-purple-500",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contact",
    href: "#contact",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

const projectsMenuItems: ProjectMenuItem[] = [
  {
    label: "Featured Projects",
    href: "#projects",
    description: "View highlighted projects on main page"
  },
  {
    label: "All Projects",
    href: "/projects",
    description: "Browse complete project portfolio"
  }
]

const languageOptions: LanguageOption[] = [
  {
    code: "ES",
    label: "Español",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
  },
  {
    code: "EN",
    label: "English",
    gradient: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(2,132,199,0.06) 50%, rgba(3,105,161,0) 100%)",
  },
]

const cvDownloadGradient = "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(16,185,129,0.06) 50%, rgba(5,150,105,0) 100%)"

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const [isMobileProjectsDropdownOpen, setIsMobileProjectsDropdownOpen] = useState(false)
  const { createCursorHandlers } = useWiiCursor()
  const projectsDropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  const handleDownloadCV = () => {
    const googleDriveUrl = "https://drive.google.com/file/d/16HI52Fr9jIvGTEJDbJmYm3qHDs6Z04fK/view?usp=sharing"
    const localCVPath = "/CV_John.pdf"
    
    window.open(googleDriveUrl, '_blank', 'noopener,noreferrer')
    
    const link = document.createElement('a')
    link.href = localCVPath
    link.download = 'CV_John_Marulanda.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    
    if (href.startsWith('#')) {
      // Si estamos en la página de proyectos, navegar a la página principal con el hash
      if (pathname === '/projects') {
        router.push(`/${href}`)
      } else {
        // Si estamos en la página principal, hacer scroll suave
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    } else {
      // Para enlaces externos, navegar normalmente
      router.push(href)
    }
  }

  const handleProjectsClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    setIsProjectsDropdownOpen(false)
    
    if (href.startsWith('#')) {
      // Si estamos en la página de proyectos, navegar a la página principal con el hash
      if (pathname === '/projects') {
        router.push(`/${href}`)
      } else {
        // Si estamos en la página principal, hacer scroll suave
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    } else {
      router.push(href)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileProjectsDropdownOpen(false)
  }

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
  }

  const toggleMobileProjectsDropdown = () => {
    setIsMobileProjectsDropdownOpen(!isMobileProjectsDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className="flex justify-center items-center fixed top-3 w-full z-50 px-4" style={{ zIndex: 9999 }}>
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Navegación principal - Desktop */}
          <motion.nav
            className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-white/15 shadow-lg relative"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90% to-transparent rounded-3xl z-0 pointer-events-none"
              variants={navGlowVariants}
            />
            <ul className="flex items-center gap-2 relative z-10">
              {/* Home */}
              <motion.li key="home" className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    style={{
                      background: menuItems[0].gradient,
                      opacity: 0,
                      borderRadius: "16px",
                    }}
                  />
                  <motion.a
                    href={menuItems[0].href}
                    className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                    onClick={(e) => handleNavClick(menuItems[0].href, e)}
                    {...createCursorHandlers('pointer')}
                  >
                    <span className={`transition-colors duration-300 group-hover:${menuItems[0].iconColor}`}>
                      {menuItems[0].icon}
                    </span>
                    <span>{menuItems[0].label}</span>
                  </motion.a>
                  <motion.a
                    href={menuItems[0].href}
                    className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                    onClick={(e) => handleNavClick(menuItems[0].href, e)}
                  >
                    <span className={`transition-colors duration-300 group-hover:${menuItems[0].iconColor}`}>
                      {menuItems[0].icon}
                    </span>
                    <span>{menuItems[0].label}</span>
                  </motion.a>
                </motion.div>
              </motion.li>

              {/* Projects Dropdown */}
              <motion.li className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                  ref={projectsDropdownRef}
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    style={{
                      background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
                      opacity: 0,
                      borderRadius: "16px",
                    }}
                  />
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                    onClick={toggleProjectsDropdown}
                    {...createCursorHandlers('pointer')}
                  >
                    <span className="transition-colors duration-300 group-hover:text-orange-500">
                      <FolderKanban className="h-5 w-5" />
                    </span>
                    <span>Projects</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                    onClick={toggleProjectsDropdown}
                  >
                    <span className="transition-colors duration-300 group-hover:text-orange-500">
                      <FolderKanban className="h-5 w-5" />
                    </span>
                    <span>Projects</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                  </motion.button>
                  
                  {/* Projects Dropdown Menu */}
                  <AnimatePresence>
                    {isProjectsDropdownOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-b from-slate-950/95 to-slate-900/95 backdrop-blur-lg border border-white/15 rounded-xl shadow-xl z-50"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {projectsMenuItems.map((project, index) => (
                          <motion.a
                            key={project.label}
                            href={project.href}
                            className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 border-b border-white/15 last:border-b-0"
                            onClick={(e) => handleProjectsClick(project.href, e)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              transition: { delay: index * 0.05, duration: 0.2 }
                            }}
                            {...createCursorHandlers('pointer')}
                          >
                            <div className="font-medium">{project.label}</div>
                            <div className="text-xs text-white/60 mt-1">{project.description}</div>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.li>

              {/* Rest of menu items */}
              {menuItems.slice(1).map((item) => (
                <motion.li key={item.label} className="relative">
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      style={{
                        background: item.gradient,
                        opacity: 0,
                        borderRadius: "16px",
                      }}
                    />
                    <motion.a
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl"
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                      onClick={(e) => handleNavClick(item.href, e)}
                      {...createCursorHandlers('pointer')}
                    >
                      <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </motion.a>
                    <motion.a
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl"
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                      onClick={(e) => handleNavClick(item.href, e)}
                    >
                      <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </motion.a>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Selector de idioma - Desktop */}
          {/*
          <motion.nav
            className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-white/15 shadow-lg relative overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-radial from-transparent via-purple-400/30 via-50% via-blue-400/30 to-transparent rounded-3xl z-0 pointer-events-none"
              variants={navGlowVariants}
            />
            <ul className="flex items-center gap-1 relative z-10">
              {languageOptions.map((language) => (
                <motion.li key={language.code} className="relative">
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      style={{
                        background: language.gradient,
                        opacity: 0,
                        borderRadius: "16px",
                      }}
                    />
                    <motion.button
                      className="flex items-center gap-1 px-3 py-2 relative z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl font-medium text-sm"
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                      onClick={() => {
                        console.log(`Cambiar idioma a: ${language.label}`)
                      }}
                    >
                      <Globe className="h-4 w-4 text-purple-400 group-hover:text-purple-300" />
                      <span className="text-xs font-semibold">{language.code}</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-1 px-3 py-2 absolute inset-0 z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl font-medium text-sm"
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                      onClick={() => {
                        console.log(`Cambiar idioma a: ${language.label}`)
                      }}
                    >
                      <Globe className="h-4 w-4 text-purple-400 group-hover:text-purple-300" />
                      <span className="text-xs font-semibold">{language.code}</span>
                    </motion.button>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
          */}

          {/* Botón de descarga de CV - Desktop */}
          <motion.nav
            className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-white/15 shadow-lg relative overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-radial from-transparent via-green-400/30 via-50% via-emerald-400/30 to-transparent rounded-3xl z-0 pointer-events-none"
              variants={navGlowVariants}
            />
            <div className="relative z-10">
              <motion.div
                className="block rounded-xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none"
                  variants={glowVariants}
                  style={{
                    background: cvDownloadGradient,
                    opacity: 0,
                    borderRadius: "16px",
                  }}
                />
                <motion.button
                  className="flex items-center gap-1 px-3 py-2 relative z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl font-medium text-sm"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                  onClick={handleDownloadCV}
                  {...createCursorHandlers('pointer')}
                >
                  <Download className="h-4 w-4 text-green-400 group-hover:text-green-300" />
                  <span className="text-xs font-semibold">CV</span>
                </motion.button>
                <motion.button
                  className="flex items-center gap-1 px-3 py-2 absolute inset-0 z-10 bg-transparent text-white/70 group-hover:text-white transition-colors rounded-xl font-medium text-sm"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                  onClick={handleDownloadCV}
                >
                  <Download className="h-4 w-4 text-green-400 group-hover:text-green-300" />
                  <span className="text-xs font-semibold">CV</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.nav>
        </div>

        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between w-full max-w-sm">
          {/* Botón Menú Hamburguesa */}
          <motion.button
            className="p-3 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-white/15 shadow-lg text-white/70 hover:text-white transition-colors"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            {...createCursorHandlers('pointer')}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </motion.button>

          {/* Selector de idioma - Mobile */}
          {/*
          <div className="flex items-center gap-2">
            <motion.button
              className="p-2 rounded-xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-white/15 shadow-lg text-white/70 hover:text-white transition-colors"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log("Cambiar idioma")
              }}
            >
              <Globe className="h-4 w-4 text-purple-400" />
            </motion.button>

            {/* Botón de descarga de CV - Mobile */}
            {/*
            <motion.button
              className="p-2 rounded-xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-white/15 shadow-lg text-white/70 hover:text-white transition-colors"
              onClick={handleDownloadCV}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-4 w-4 text-green-400" />
            </motion.button>
          </div>
          */}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <motion.nav
              className="absolute top-20 left-4 right-4 p-4 rounded-2xl bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-lg border border-white/15 shadow-lg"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.05, duration: 0.2 }
                    }}
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                      onClick={(e) => {
                        handleNavClick(item.href, e)
                        closeMobileMenu()
                      }}
                    >
                      <span className={`${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
                
                {/* Projects Dropdown Mobile */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: menuItems.length * 0.05, duration: 0.2 }
                  }}
                >
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                    onClick={toggleMobileProjectsDropdown}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-orange-500">
                        <FolderKanban className="h-5 w-5" />
                      </span>
                      <span className="font-medium">Projects</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileProjectsDropdownOpen && (
                      <motion.div
                        className="mt-2 ml-4 space-y-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {projectsMenuItems.map((project, index) => (
                          <motion.a
                            key={project.label}
                            href={project.href}
                            className="block px-4 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
                            onClick={(e) => {
                              handleProjectsClick(project.href, e)
                              closeMobileMenu()
                            }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: index * 0.05, duration: 0.2 }
                            }}
                          >
                            <div className="font-medium text-sm">{project.label}</div>
                            <div className="text-xs text-white/40 mt-1">{project.description}</div>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              </ul>
              
              {/* Language Selector in Mobile Menu */}
              {/*
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-2">
                  {languageOptions.map((language) => (
                    <motion.button
                      key={language.code}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium text-sm"
                      onClick={() => {
                        console.log(`Cambiar idioma a: ${language.label}`)
                        closeMobileMenu()
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe className="h-4 w-4 text-purple-400" />
                      <span>{language.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
              */}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
