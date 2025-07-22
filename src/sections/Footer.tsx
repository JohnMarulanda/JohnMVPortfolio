"use client"

import { FaArrowRight } from "react-icons/fa";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/john-marulanda/",
  },
  {
    label: "GitHub",
    href: "https://github.com/JohnMarulanda",
  },
  {
    label: "Email",
    href: "#",
  },
  {
    label: "Telegram",
    href: "https://t.me/JohnMarulanda",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/j._.marulanda/",
  },
];

export const Footer = () => {
  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault()
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
    window.open("mailto:johnmarulanda74@gmail.com", '_self')
  }
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/30 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-8 text-sm flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-gray-400">
            &copy; 2025 John Marulanda. All rights reserved.
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            {socialLinks.map((link) => (
              link.label === "Email" ? (
                <button
                  key={link.label}
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span>{link.label}</span>
                  <FaArrowRight className="size-3" />
                </button>
              ) : (
                <a 
                  href={link.href} 
                  key={link.label} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span>{link.label}</span>
                  <FaArrowRight className="size-3" />
                </a>
              )
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
