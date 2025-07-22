"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Figma, Play } from "lucide-react";
import { Project, getTechnologyById, getCategoryById } from "@/data/projectsPage";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  // Get project status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 border-green-500/20 text-green-400";
      case "in-progress":
        return "bg-yellow-500/10 border-yellow-500/20 text-yellow-400";
      case "planned":
        return "bg-blue-500/10 border-blue-500/20 text-blue-400";
      default:
        return "bg-gray-500/10 border-gray-500/20 text-gray-400";
    }
  };

  return (
    <motion.div
      className="group relative bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      layout
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with Links */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
          initial={false}
        >
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300"
              title="View Live Site"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300"
              title="View Source Code"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.links.figma && (
            <a
              href={project.links.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300"
              title="View Design"
            >
              <Figma className="h-5 w-5" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300"
              title="View Demo"
            >
              <Play className="h-5 w-5" />
            </a>
          )}
        </motion.div>

        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category & Year */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryById(project.category)?.color}`}>
            {getCategoryById(project.category)?.name}
          </span>
          <span className="text-white/60 text-sm">{project.year}</span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((techId) => {
            const tech = getTechnologyById(techId);
            return (
              <div
                key={techId}
                className="flex items-center gap-1 px-2 py-1 bg-gray-700/40 border border-white/10 rounded-lg text-xs"
                title={tech?.name}
              >
                <span className={tech?.color}>{tech?.icon}</span>
                <span className="text-white/80">{tech?.name}</span>
              </div>
            );
          })}
          {project.technologies.length > 4 && (
            <div 
              className="flex items-center px-2 py-1 bg-gray-700/40 border border-white/10 rounded-lg text-xs text-white/60"
              title={`${project.technologies.length - 4} more technologies`}
            >
              +{project.technologies.length - 4}
            </div>
          )}
        </div>
      </div>

      {/* Liquid Glass Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
    </motion.div>
  );
}; 