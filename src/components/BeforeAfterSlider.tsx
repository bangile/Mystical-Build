import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MoveHorizontal, Check, Clock, MapPin } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/mockData';
import { fadeInUp, scaleUp } from '../utils/animations';

export const BeforeAfterSlider: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section 
      id="before-after"
      className="py-10 sm:py-14 bg-[#f8f9fa] border-b border-[#e1e3e4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe088]/40 border border-[#d4af37]/40 text-[#735c00] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transformative Renovations</span>
          </div>
          <h2 
            id="before-after-heading"
            className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#191c1d] tracking-tight"
          >
            Before & After Architectural Overhauls
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-[#4d4635] text-sm sm:text-base leading-relaxed">
            Drag the comparison slider to experience how we re-engineer outdated structures into breathtaking contemporary masterpieces.
          </p>

          {/* Project Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {BEFORE_AFTER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                id={`before-after-tab-${item.id}`}
                onClick={() => {
                  setActiveItemIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-1.5 rounded text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeItemIndex === idx
                    ? 'bg-[#d4af37] text-[#241a00] shadow-sm'
                    : 'bg-white text-[#4d4635] border border-stone-200 hover:border-stone-400'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Interactive Comparison Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={scaleUp}
          className="bg-white rounded-lg border border-[#e1e3e4] shadow-lg overflow-hidden p-4 sm:p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Slider (8 columns) */}
            <div className="lg:col-span-8">
              <div
                ref={containerRef}
                id="interactive-comparison-slider"
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none overflow-hidden rounded-lg bg-stone-900 cursor-ew-resize shadow-inner"
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
              >
                {/* AFTER IMAGE (Background / Full Width) */}
                <img
                  src={currentItem.afterImage}
                  alt={`After renovation: ${currentItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* BEFORE IMAGE (Clipped with polygon) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentItem.beforeImage}
                    alt={`Before renovation: ${currentItem.title}`}
                    className="absolute inset-0 h-full object-cover object-center"
                    style={{ 
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      maxWidth: 'none'
                    }}
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle retro / desaturated tint for before image */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* SLIDER DIVIDER LINE & HANDLE */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-10 h-10 -ml-0.5 rounded-full bg-[#d4af37] border-2 border-white shadow-xl flex items-center justify-center text-[#241a00] hover:scale-110 transition-transform">
                    <MoveHorizontal className="w-5 h-5" />
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-sm border border-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider">
                    Before
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded bg-[#d4af37] backdrop-blur-sm text-[#241a00] text-xs font-heading font-bold uppercase tracking-wider shadow">
                    After
                  </span>
                </div>

                {/* Bottom helper tip */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] text-white/90">
                  Drag or slide to inspect details
                </div>
              </div>
            </div>

            {/* Case Details (4 columns) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#735c00] uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentItem.location}</span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#191c1d] mb-4">
                  {currentItem.title}
                </h3>

                <p className="text-[#4d4635] text-sm leading-relaxed mb-6">
                  {currentItem.description}
                </p>

                <div className="bg-[#f8f9fa] rounded-lg p-4 border border-[#e1e3e4] mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#191c1d] mb-3">
                    <Clock className="w-4 h-4 text-[#d4af37]" />
                    <span>Project Duration: {currentItem.duration}</span>
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#4e6073] mb-2">
                    Key Upgrades Executed:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#191c1d]">
                    {currentItem.keyUpgrades.map((upgrade, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#735c00] shrink-0 mt-0.5" />
                        <span>{upgrade}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded bg-[#191c1d] hover:bg-[#333] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Consult On Your Renovation
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

