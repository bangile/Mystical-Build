import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../data/mockData';
import { Project } from '../types';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Renovations' },
    { id: 'luxury-estates', label: 'Luxury Estates' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const flagshipProject = PROJECTS.find(p => p.id === 'the-waterkloof-horizon-estate') || PROJECTS[0];

  return (
    <section 
      id="portfolio"
      className="py-10 sm:py-14 bg-white border-b border-[#e1e3e4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6"
        >
          <div>
            <h2 
              id="portfolio-heading"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#191c1d] tracking-tight"
            >
              Featured South African Portfolio
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mt-3 mb-2 rounded-full" />
            <p className="text-[#4d4635] text-sm sm:text-base max-w-xl">
              Completed turnkey builds, structural renovations, and architectural achievements across Pretoria, Centurion, and Gauteng.
            </p>
          </div>

          <button
            id="view-all-projects-btn"
            onClick={() => setActiveFilter('all')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#191c1d] hover:text-[#735c00] transition-colors cursor-pointer group shrink-0"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37] transition-transform group-hover:translate-x-1 duration-200" />
          </button>
        </motion.div>

        {/* Filter Category Tabs */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex flex-wrap gap-2 sm:gap-3 mb-6 pb-2 border-b border-stone-100"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              id={`portfolio-filter-${tab.id}`}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#191c1d] text-white font-semibold shadow-sm'
                  : 'bg-[#f3f4f5] text-[#4e6073] hover:bg-[#e7e8e9] hover:text-[#191c1d]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Primary Flagship Project Card */}
        {activeFilter === 'all' || activeFilter === 'residential' ? (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="mb-8"
          >
            <div
              id="flagship-horizon-residence-card"
              onClick={() => onSelectProject(flagshipProject)}
              className="group relative rounded-lg overflow-hidden border border-[#e1e3e4] bg-[#191c1d] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 h-[480px] sm:h-[560px] md:h-[620px]"
            >
              <img
                src={flagshipProject.coverImage}
                alt={flagshipProject.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 text-[#f5df97] text-[11px] font-heading font-semibold tracking-wider uppercase">
                  Featured Pretoria Build
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded bg-black/60 backdrop-blur-md text-white/90 text-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>View Case Study</span>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <div className="inline-block px-3 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[11px] font-semibold tracking-wider uppercase mb-3">
                  {flagshipProject.badge}
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-2 group-hover:text-[#f5df97] transition-colors">
                  {flagshipProject.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-300 font-normal">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    {flagshipProject.location}
                  </span>
                  <span>•</span>
                  <span>{flagshipProject.sqft}</span>
                  <span>•</span>
                  <span>{flagshipProject.duration} Build</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Architectural Grid of other projects */}
        <motion.div 
          layout
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects
              .filter(p => activeFilter !== 'all' || p.id !== 'the-waterkloof-horizon-estate')
              .map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  id={`project-card-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="group bg-[#f8f9fa] rounded-lg overflow-hidden border border-[#e1e3e4] hover:border-[#d4af37]/70 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                    
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold tracking-wider uppercase">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="p-1.5 rounded-full bg-white/90 text-[#191c1d] flex items-center justify-center shadow">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#735c00] font-semibold uppercase tracking-wider mb-1.5">
                        <span>{project.categoryLabel}</span>
                        <span className="text-[#7f7663]">{project.sqft}</span>
                      </div>

                      <h4 className="font-heading font-bold text-lg text-[#191c1d] group-hover:text-[#735c00] transition-colors mb-2">
                        {project.title}
                      </h4>

                      <p className="text-[#4d4635] text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#e1e3e4] flex items-center justify-between text-xs text-[#4e6073]">
                      <span className="flex items-center gap-1 truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </span>
                      <span className="font-medium text-[#735c00] group-hover:translate-x-0.5 transition-transform flex items-center gap-1 shrink-0">
                        Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

