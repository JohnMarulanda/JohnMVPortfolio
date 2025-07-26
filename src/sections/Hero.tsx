"use client"

import Image from "next/image";
import memojiImage from "@/assets/images/CodingWaifu.gif";  
import { FaArrowRight, FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { LikeButton } from "@/components/LikeButton";
import { useWiiCursor } from "@/hooks/useWiiCursor";
import { ContactModal } from "@/components/ContactModal";
import { useState } from "react";

interface SocialButton {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

export const HeroSection = () => {
  const { createCursorHandlers } = useWiiCursor();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Nueva función para descargar el CV y abrir Google Drive
  const handleDownloadCV = () => {
    const googleDriveUrl = "https://drive.google.com/file/d/13nlFdkuVdhFgVCf54WlVqFBjSWzQ-3NB/view?usp=sharing";
    const localCVPath = "/CV_John.pdf";
    window.open(googleDriveUrl, '_blank', 'noopener,noreferrer');
    const link = document.createElement('a');
    link.href = localCVPath;
    link.download = 'CV_John_Marulanda.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Constantes de animación movidas aquí para evitar errores
  const socialItemVariants = {
    initial: { rotateX: 0, opacity: 1, scale: 1 },
    hover: { rotateX: -90, opacity: 0, scale: 1.1 },
  };

  const socialBackVariants = {
    initial: { rotateX: 90, opacity: 0, scale: 1 },
    hover: { rotateX: 0, opacity: 1, scale: 1.1 },
  };

  const socialGlowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1.8,
      transition: {
        opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        scale: { duration: 0.4, type: "spring", stiffness: 400, damping: 30 },
      },
    },
  };

  const socialContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const socialButtonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const sharedTransition = {
    type: "spring",
    stiffness: 150,
    damping: 25,
    duration: 0.4,
  };

  // socialButtons ahora dentro del componente para acceder a handleDownloadCV
  const socialButtons: SocialButton[] = [
    {
      icon: <FaLinkedin className="size-5" />, label: "LinkedIn",
      href: "https://www.linkedin.com/in/john-marulanda/",
      gradient: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(2,132,199,0.06) 50%, rgba(3,105,161,0) 100%)",
      iconColor: "text-blue-500",
    },
    {
      icon: <FaGithub className="size-5" />, label: "GitHub",
      href: "https://github.com/JohnMarulanda",
      gradient: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)",
      iconColor: "text-purple-500",
    },
    {
      icon: <FaInstagram className="size-5" />, label: "Instagram",
      href: "https://www.instagram.com/j._.marulanda/",
      gradient: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(190,24,93,0) 100%)",
      iconColor: "text-pink-500",
    },
    {
      icon: <Download className="size-5" />, label: "CV",
      href: "#cv-download", // No se usa como link real
      gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "text-green-500",
    },
    {
      icon: <FaEnvelope className="size-5" />, label: "Gmail",
      href: "mailto:johnmarulanda74@gmail.com",
      gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
      iconColor: "text-red-500",
    },
    {
      icon: <FaTelegramPlane className="size-5" />, label: "Telegram",
      href: "https://t.me/JohnMarulanda",
      gradient: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(6,182,212,0.06) 50%, rgba(8,145,178,0) 100%)",
      iconColor: "text-cyan-500",
    },
  ];

  const handleLetConnect = () => {
    setIsContactModalOpen(true);
  };

  const handleExploreWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div id="hero" className="py-32 md:py-48 lg:py-60 relative overflow-x-clip">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(to_bottom,transparent,black_10%, black_70%, transparent)] pointer-events-none">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div> 
        <HeroOrbit size={800} rotate={-72} orbitDuration={36} shouldOrbit={true}>
          <StarIcon className="size-28 text-purple-500" />
        </HeroOrbit>
        <HeroOrbit size={550} rotate={20} orbitDuration={36} shouldOrbit={true}>
          <StarIcon className="size-12 text-purple-500" />
        </HeroOrbit>
        <HeroOrbit size={590} rotate={98} orbitDuration={36} shouldOrbit={true}>
          <StarIcon className="size-8 text-purple-500" />
        </HeroOrbit>
        <HeroOrbit size={430} rotate={-14} orbitDuration={36} shouldOrbit={true}>
          <SparkleIcon className="size-8 text-purple-500/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotate={79} orbitDuration={36} shouldOrbit={true}>
          <SparkleIcon className="size-5 text-purple-500/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotate={180} orbitDuration={36} shouldOrbit={true}>
          <SparkleIcon className="size-10 text-purple-500/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotate={144} orbitDuration={36} shouldOrbit={true}>
          <SparkleIcon className="size-14 text-purple-500/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotate={85} orbitDuration={36} shouldOrbit={true}>
          <div className="size-3 bg-purple-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotate={-5} orbitDuration={36} shouldOrbit={true}>
          <div className="size-2 bg-purple-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotate={-41} orbitDuration={36} shouldOrbit={true}>
          <div className="size-2 bg-purple-300/20 rounded-full"></div>
        </HeroOrbit>
      </div>
      
      {/* Main content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image 
            src={memojiImage} 
            className="size-[120px] rounded-full border-purple-500/20 p-1 mb-2 hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20" 
            alt="Person peeking from behind laptop" 
          />
          <div className="bg-gray-950 border border-gray-800 inline-flex px-4 py-1.5 items-center gap-4 rounded-lg">
            <div className="size-2.5 bg-green-500 rounded-full relative">
              <div className="size-2.5 bg-green-500 rounded-full relative animate-ping"></div>
            </div>
            <div className="text-sm font-semibold">Available for new projects</div>
          </div>
        </div>
        
        <div className="max-w-lg mx-auto">
          <h1 className="font-semibold md:text-5xl text-3xl text-center mt-8" translate="no">
            John MV
          </h1>
          <h2 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text text-center mt-2">
            Creative Developer & Designer
          </h2>
          <p className="mt-6 text-center text-white/60 md:text-lg">
            Passionate developer and designer who creates innovative solutions that drive business growth and deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <motion.button
            onClick={handleExploreWork}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-all duration-300 z-20 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...createCursorHandlers('pointer')}
          >
            <span className="font-semibold">Explore my work</span><FaArrowRight className="size-4"/>
          </motion.button>
          <motion.button 
            onClick={handleLetConnect}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-950 px-6 h-12 rounded-xl hover:bg-white/90 transition-all duration-300 z-20 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...createCursorHandlers('pointer')}
          >
            <span className="font-semibold">Let&apos;s connect</span>
            <span> 🤝 </span> 
          </motion.button>
        </div>

        {/* Social Buttons with Liquid Glass Effect */}
        <motion.div 
          className="flex justify-center mt-8 relative z-20"
          variants={socialContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center gap-3 p-4 rounded-2xl bg-gradient-to-b from-gray-800/40 to-gray-800/20 backdrop-blur-lg border border-white/10 shadow-lg">
            {socialButtons.map((social, index) => (
              <motion.div
                key={social.label}
                variants={socialButtonVariants}
                className="relative"
              >
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={socialGlowVariants}
                    style={{
                      background: social.gradient,
                      opacity: 0,
                      borderRadius: "12px",
                    }}
                  />
                  {/* Main Button */}
                  {social.label === "CV" ? (
                    <motion.button
                      type="button"
                      onClick={handleDownloadCV}
                      className="flex items-center justify-center w-12 h-12 relative z-10 bg-gray-700/30 backdrop-blur-sm border border-white/15 text-white/70 group-hover:text-white transition-colors rounded-xl shadow-lg group-hover:shadow-xl"
                      variants={socialItemVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                      title={social.label}
                      {...createCursorHandlers('pointer')}
                    >
                      <span className={`transition-colors duration-300 group-hover:${social.iconColor}`}>
                        {social.icon}
                      </span>
                    </motion.button>
                  ) : (
                    <motion.a
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 relative z-10 bg-gray-700/30 backdrop-blur-sm border border-white/15 text-white/70 group-hover:text-white transition-colors rounded-xl shadow-lg group-hover:shadow-xl"
                      variants={socialItemVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                      title={social.label}
                      {...createCursorHandlers('pointer')}
                    >
                      <span className={`transition-colors duration-300 group-hover:${social.iconColor}`}>
                        {social.icon}
                      </span>
                    </motion.a>
                  )}
                  {/* Back Button (3D flip effect) */}
                  {social.label === "CV" ? (
                    <motion.button
                      type="button"
                      onClick={handleDownloadCV}
                      className="flex items-center justify-center w-12 h-12 absolute inset-0 z-10 bg-gray-700/50 backdrop-blur-sm border border-white/20 text-white/70 group-hover:text-white transition-colors rounded-xl shadow-lg group-hover:shadow-xl"
                      {...createCursorHandlers('pointer')}
                      variants={socialBackVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                      title={social.label}
                    >
                      <span className={`transition-colors duration-300 group-hover:${social.iconColor}`}>
                        {social.icon}
                      </span>
                    </motion.button>
                  ) : (
                    <motion.a
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 absolute inset-0 z-10 bg-gray-700/50 backdrop-blur-sm border border-white/20 text-white/70 group-hover:text-white transition-colors rounded-xl shadow-lg group-hover:shadow-xl"
                      {...createCursorHandlers('pointer')}
                      variants={socialBackVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                      title={social.label}
                    >
                      <span className={`transition-colors duration-300 group-hover:${social.iconColor}`}>
                        {social.icon}
                      </span>
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Like Button */}
        <motion.div
          className="flex justify-center mt-8 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <LikeButton />
        </motion.div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};