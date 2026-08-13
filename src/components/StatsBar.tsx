import React from 'react';
import { STATS } from '../data/mockData';

export const StatsBar: React.FC = () => {
  return (
    <section 
      id="stats-section"
      className="bg-[#edeeef] border-y border-[#d0c5af]/50 py-12 sm:py-16 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-y-0">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              id={`stat-item-${idx}`}
              className="flex flex-col items-center justify-center p-2 group"
            >
              {/* Stat Value */}
              <span className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#735c00] tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              
              {/* Stat Label matching screenshot exact style */}
              <span className="font-heading font-semibold text-xs sm:text-sm text-[#4d4635] tracking-wider uppercase text-center max-w-[180px]">
                {stat.label}
              </span>

              {/* Subtle sub text */}
              <span className="hidden sm:block text-[11px] text-[#7f7663] mt-1 font-normal">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
