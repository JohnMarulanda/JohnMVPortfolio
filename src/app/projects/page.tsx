"use client"

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Figma, Play, Filter, X, Search } from "lucide-react";
import { PROJECTS, CATEGORIES, TECHNOLOGIES, filterProjects, getTechnologyById, getCategoryById } from "@/data/projectsPage";
import { Header } from "@/sections/Header";
import { useWiiCursor } from "@/hooks/useWiiCursor";

const ProjectsPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { createCursorHandlers } = useWiiCursor();

  // Enhanced filter function that includes text search
  const enhancedFilterProjects = useMemo(() => {
    let filtered = filterProjects(selectedCategories, selectedTechnologies);
    
    // Apply text search filter
    if (searchText.trim()) {
      const searchLower = searchText.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.longDescription.toLowerCase().includes(searchLower) ||
        project.technologies.some(techId => {
          const tech = getTechnologyById(techId);
          return tech?.name.toLowerCase().includes(searchLower);
        }) ||
        project.features.some(feature => feature.toLowerCase().includes(searchLower)) ||
        getCategoryById(project.category)?.name.toLowerCase().includes(searchLower)
      );
    }
    
    return filtered;
  }, [selectedCategories, selectedTechnologies, searchText]);

  // Toggle category filter
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Toggle technology filter
  const toggleTechnology = (technologyId: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(technologyId)
        ? prev.filter(id => id !== technologyId)
        : [...prev, technologyId]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedTechnologies([]);
    setSearchText("");
  };

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
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-fuchsia-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10 pt-24">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            {...createCursorHandlers('pointer')}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text mb-4">
              Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              All Projects
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Explore my complete collection of projects. Search by text or filter by category and technology to find exactly what you&apos;re looking for.
            </p>
          </div>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
              <input
                type="text"
                placeholder="Search projects by title, description, technology, or features..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-lg border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                {...createCursorHandlers('pointer')}
              />
              {searchText && (
                <button
                  onClick={() => setSearchText("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-white/40 hover:text-white transition-colors"
                  {...createCursorHandlers('pointer')}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-lg border border-white/10 rounded-xl text-white hover:bg-gray-800/70 transition-all duration-300"
              {...createCursorHandlers('pointer')}
            >
              <Filter className="h-4 w-4" />
              Advanced Filters
              {(selectedCategories.length > 0 || selectedTechnologies.length > 0) && (
                <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {selectedCategories.length + selectedTechnologies.length}
                </span>
              )}
            </button>

            {/* Results Count & Clear */}
            <div className="flex items-center gap-4">
              <span className="text-white/60">
                {enhancedFilterProjects.length} project{enhancedFilterProjects.length !== 1 ? 's' : ''} found
              </span>
              {(selectedCategories.length > 0 || selectedTechnologies.length > 0 || searchText.trim()) && (
                <button
                  onClick={clearAllFilters}
                  className="text-red-400 hover:text-red-300 text-sm transition-colors"
                  {...createCursorHandlers('pointer')}
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                className="mt-6 p-6 bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => toggleCategory(category.id)}
                        className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all duration-300 ${
                          selectedCategories.includes(category.id)
                            ? category.color
                            : "bg-gray-700/30 border-white/10 text-white/70 hover:bg-gray-700/50"
                        }`}
                        {...createCursorHandlers('pointer')}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {TECHNOLOGIES.map((tech) => (
                      <button
                        key={tech.id}
                        onClick={() => toggleTechnology(tech.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-all duration-300 ${
                          selectedTechnologies.includes(tech.id)
                            ? `bg-gray-600/50 border-white/20 text-white ${tech.color}`
                            : "bg-gray-700/30 border-white/10 text-white/70 hover:bg-gray-700/50"
                        }`}
                        {...createCursorHandlers('pointer')}
                      >
                        <span className={selectedTechnologies.includes(tech.id) ? tech.color : "text-white/50"}>
                          {tech.icon}
                        </span>
                        {tech.name}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Filters Display */}
          {(selectedCategories.length > 0 || selectedTechnologies.length > 0 || searchText.trim()) && (
            <motion.div
              className="mt-4 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Search Filter */}
              {searchText.trim() && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                  Search: &quot;{searchText}&quot;
                  <button
                    onClick={() => setSearchText("")}
                    className="hover:bg-white/10 rounded-full p-0.5"
                    {...createCursorHandlers('pointer')}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              
              {selectedCategories.map((categoryId) => {
                const category = getCategoryById(categoryId);
                return (
                  <span
                    key={categoryId}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${category?.color}`}
                  >
                    {category?.name}
                    <button
                      onClick={() => toggleCategory(categoryId)}
                      className="hover:bg-white/10 rounded-full p-0.5"
                      {...createCursorHandlers('pointer')}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                );
              })}
              {selectedTechnologies.map((techId) => {
                const tech = getTechnologyById(techId);
                return (
                  <span
                    key={techId}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-gray-600/50 border border-white/20 text-white rounded-full text-xs font-medium"
                  >
                    <span className={tech?.color}>{tech?.icon}</span>
                    {tech?.name}
                    <button
                      onClick={() => toggleTechnology(techId)}
                      className="hover:bg-white/10 rounded-full p-0.5"
                      {...createCursorHandlers('pointer')}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                );
              })}
            </motion.div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {enhancedFilterProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-gray-800/40 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                layout
                {...createCursorHandlers('pointer')}
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
                        {...createCursorHandlers('pointer')}
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
                        {...createCursorHandlers('pointer')}
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
                        {...createCursorHandlers('pointer')}
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
                        {...createCursorHandlers('pointer')}
                      >
                        <Play className="h-5 w-5" />
                      </a>
                    )}
                  </motion.div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
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
                        >
                          <span className={tech?.color}>{tech?.icon}</span>
                          <span className="text-white/80">{tech?.name}</span>
                        </div>
                      );
                    })}
                    {project.technologies.length > 4 && (
                      <div className="flex items-center px-2 py-1 bg-gray-700/40 border border-white/10 rounded-lg text-xs text-white/60">
                        +{project.technologies.length - 4}
                      </div>
                    )}
                  </div>
                </div>

                {/* Liquid Glass Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {enhancedFilterProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">No projects found</h3>
            <p className="text-white/60 mb-6">
              Try adjusting your search or filters to see more projects.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              {...createCursorHandlers('pointer')}
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage; 