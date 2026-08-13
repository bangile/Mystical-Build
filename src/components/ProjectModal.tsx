import React, { useState } from 'react';
import { X, MapPin, Calendar, CheckCircle2, Ruler, Shield, Layers, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookConsultationForProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose,
  onBookConsultationForProject
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-4xl w-full rounded-lg shadow-2xl overflow-hidden border border-[#e1e3e4] relative my-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
          aria-label="Close project view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Hero Section */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-stone-900 overflow-hidden">
          <img
            src={project.gallery[activeImageIndex] || project.coverImage}
            alt={`${project.title} photograph ${activeImageIndex + 1}`}
            className="w-full h-full object-cover object-center transition-all duration-300"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          {/* Floating Top Tag */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-2">
            <div>
              <span className="px-2.5 py-1 rounded bg-[#d4af37] text-[#241a00] text-xs font-heading font-bold uppercase tracking-wider mb-2 inline-block">
                {project.badge}
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {project.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-stone-300 mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  {project.location}
                </span>
                <span>•</span>
                <span>{project.sqft}</span>
                <span>•</span>
                <span>{project.categoryLabel}</span>
              </div>
            </div>

            {/* Gallery Selector Thumbnails */}
            {project.gallery.length > 1 && (
              <div className="flex gap-1.5 p-1 bg-black/60 backdrop-blur-sm rounded">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-10 h-8 rounded overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#d4af37] scale-105' : 'border-white/30 opacity-60'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-8">
          
          {/* Executive Overview */}
          <div>
            <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-[#735c00] mb-2">
              Architectural Overview
            </h3>
            <p className="text-[#191c1d] text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights & Engineering Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f8f9fa] rounded-lg p-5 border border-[#e1e3e4]">
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-4">
                <Ruler className="w-4 h-4 text-[#735c00]" />
                <span>Structural & Spatial Highlights</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#4d4635]">
                {project.architecturalHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f8f9fa] rounded-lg p-5 border border-[#e1e3e4]">
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#191c1d] mb-4">
                <Layers className="w-4 h-4 text-[#735c00]" />
                <span>Material Palette</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((mat, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded bg-white text-xs font-medium text-[#191c1d] border border-stone-200 shadow-2xs"
                  >
                    {mat}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-stone-200 flex justify-between items-center text-xs text-[#7f7663]">
                <span>Timeline: <strong className="text-[#191c1d]">{project.duration}</strong></span>
                <span>Client Type: <strong className="text-[#191c1d]">{project.client}</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#f3f4f5] border-t border-[#e1e3e4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#4e6073] flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#735c00]" />
            <span>Backed by Mystical 10-Year Master Structural Warranty</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultationForProject(project.title);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded bg-[#d4af37] hover:bg-[#c49f2b] text-[#241a00] font-heading font-bold text-xs uppercase tracking-wider shadow transition-colors"
            >
              Request Similar Build Quote
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
