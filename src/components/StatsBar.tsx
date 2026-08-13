import React from 'react';
import { motion } from 'motion/react';
import { STATS } from '../data/mockData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const StatsBar: React.FC = () => {
  return (
    <section 
      id="stats-section"
      className="bg-[#edeeef] border-y border-[#d0c5af]/50 py-5 sm:py-7 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center divide-y-0"
        >
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              id={`stat-item-${idx}`}
              className="flex flex-col items-center justify-center p-1 sm:p-2 group"
            >
              {/* Stat Value */}
              <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#735c00] tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              
              {/* Stat Label */}
              <span className="font-heading font-semibold text-xs sm:text-sm text-[#4d4635] tracking-wider uppercase text-center max-w-[180px]">
                {stat.label}
              </span>

              {/* Subtle sub text */}
              <span className="hidden sm:block text-[11px] text-[#7f7663] mt-0.5 font-normal">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

