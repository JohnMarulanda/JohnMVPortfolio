"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useWiiCursor } from "@/hooks/useWiiCursor"

export const TestimonialsSection = () => {
  const { createCursorHandlers } = useWiiCursor();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text text-center">Philosophy</p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Art of Development</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">Where passion meets precision in every line of code</p>
        
        <div className="mt-8 md:mt-16">
          {/* Single Testimonial Card with Liquid Glass Effect */}
          <motion.div
            className="relative bg-gray-800 rounded-3xl overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:outline-dashed p-6 md:p-8 lg:p-10 after:pointer-events-none group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.002 }}
            {...createCursorHandlers('pointer')}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 opacity-10" style={{ background: "linear-gradient(to right, #8B5CF6, #EC4899)" }}></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="h-8 w-8 text-purple-400" />
            </div>

            {/* Liquid Glass Overlay */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.01) 0%, rgba(236,72,153,0.008) 100%)",
                borderRadius: "24px",
                border: "1px solid rgba(139,92,246,0.03)",
                boxShadow: "0 4px 15px -10px rgba(139,92,246, 0.05), inset 0 1px 0 rgba(255,255,255,0.02)",
                backdropFilter: "blur(2px)"
              }}
            />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              {/* Developer Image Placeholder */}
              <div className="flex-shrink-0">
                <motion.div 
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden border-3 border-purple-500/20 shadow-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ rotate: 1, scale: 1.01 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-3xl md:text-4xl">💻</div>
                </motion.div>
              </div>

              {/* Quote and Attribution */}
              <div className="flex-1 text-center lg:text-left">
                <blockquote className="mb-4">
                  <motion.p
                    className="text-white text-lg md:text-xl lg:text-2xl font-serif leading-relaxed mb-4"
                    style={{
                      letterSpacing: "-0.01em",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    &ldquo;<span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Love</span> is an <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">art</span>, just as living is an <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">art</span>; if we want to learn how to <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">love</span> we must proceed in the same way we have to proceed if we want to learn any other <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">art</span>, say music, painting, carpentry, or the{" "}
                    <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
                      art of medicine and engineering
                    </span>
                    .&rdquo;
                  </motion.p>
                </blockquote>

                {/* Attribution */}
                <motion.footer
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <cite className="not-italic text-white font-bold text-lg md:text-xl block mb-1">
                    Erich Fromm
                  </cite>
                  <p className="text-white/80 text-sm md:text-base mb-1">
                    Philosopher & Psychoanalyst
                  </p>
                  <p className="text-white/60 text-xs font-mono">
                    The Art of Loving
                  </p>
                </motion.footer>
              </div>
            </div>

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/2 via-fuchsia-500/2 to-cyan-500/2 opacity-0 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed font-mono">
            Every line of code is crafted with passion, purpose, and the understanding that development is both a science and an art.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
