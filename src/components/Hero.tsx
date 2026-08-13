import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface HeroProps {
  onExplorePortfolio: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio, onOpenConsultation }) => {
  return (
    <section 
      id="hero-section"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#111315]"
    >
      {/* Cinematic Architectural Dusk Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury modern architectural residence in South Africa"
          className="w-full h-full object-cover object-center brightness-[0.68] contrast-[1.08] scale-105 transition-transform duration-10000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic gradients for architectural depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#191c1d] via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/75" />
      </div>

      {/* Blueprint Grid Watermark Graphic Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10" 
        style={{
          backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px), radial-gradient(#d4af37 1px, #191c1d 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center my-auto">
        
        {/* Location & Architectural Badge */}
        <div 
          id="hero-architectural-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#d4af37]/40 text-[#f5df97] text-xs font-semibold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700"
        >
          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Pretoria West • Serving Pretoria & Greater Gauteng</span>
        </div>

        {/* Display Headline */}
        <h1 
          id="hero-headline"
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] max-w-4xl mx-auto drop-shadow-md mb-6"
        >
          Building the Future of <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f8f9fa] to-[#e1e3e4]">
            South African Living.
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          id="hero-subtitle"
          className="text-stone-300 font-normal text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-sans leading-relaxed drop-shadow-sm mb-10"
        >
          Expert craftsmanship, home renovations, roofing, brickwork & building materials supply in Pretoria.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
          {/* Main Golden Amber Button */}
          <button
            id="hero-view-portfolio-btn"
            onClick={onExplorePortfolio}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-[#d4af37] hover:bg-[#c49f2b] active:bg-[#b08e23] text-[#241a00] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-lg hover:shadow-xl hover:translate-y-[-1px] cursor-pointer group"
          >
            <span>VIEW OUR PORTFOLIO</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
          </button>

          {/* Secondary Free Quote Button */}
          <button
            id="hero-request-quote-btn"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-black/40 hover:bg-black/60 border border-white/20 hover:border-[#d4af37]/60 text-white font-heading font-medium text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#d4af37]" />
            <span>Get Free Quote</span>
          </button>
        </div>

        {/* Trust pill bar with SA Building Standards */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-stone-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Free On-Site Quotations in Gauteng</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>NHBRC & Master Builders Compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>SABS Approved Building Materials</span>
          </div>
        </div>
      </div>
    </section>
  );
};
