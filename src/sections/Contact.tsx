"use client"

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ContactModal } from "@/components/ContactModal";
import { useWiiCursor } from "@/hooks/useWiiCursor";

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { createCursorHandlers } = useWiiCursor();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="contact" className="py-16 pt-14">
      <div className="container">
        <div className="relative bg-gradient-to-br from-purple-600/10 via-purple-700/10 to-fuchsia-700/10 text-white py-12 px-8 rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20">
          {/* Efecto de brillo sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          {/* Elementos decorativos */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-fuchsia-400/20 rounded-full blur-lg"></div>
          
          <div className="relative z-10 flex flex-col gap-6 items-center md:flex-row md:items-center md:gap-12">
            <div className="text-center md:text-left flex-1">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let's create something amazing together
              </h2>
              <p className="text-lg md:text-xl text-purple-100 leading-relaxed font-medium">
                I'm currently looking for new opportunities. My inbox is always open.
                <br className="hidden md:block" />
                <span className="text-purple-200">
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </span>
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <button 
                onClick={openModal}
                className="group relative inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-purple-50"
                {...createCursorHandlers('pointer')}
              >
                <span>Get in touch</span>
                <FaArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                
                {/* Efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
