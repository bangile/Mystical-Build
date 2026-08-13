import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Award, Building, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="reviews"
      className="py-10 sm:py-14 bg-white border-b border-[#e1e3e4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f4f5] border border-[#d0c5af]/50 text-[#735c00] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Client Endorsements & Reviews</span>
          </div>

          <h2 
            id="reviews-heading"
            className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#191c1d] tracking-tight"
          >
            Trusted by Pretoria Property Owners & Developers
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-[#4d4635] text-sm sm:text-base leading-relaxed">
            Our reputation is built on structural precision, transparent Rand quotations, and dependable delivery across Gauteng.
          </p>
        </motion.div>

        {/* Testimonials 3-Cards Grid */}
        <motion.div 
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              id={`testimonial-card-${testimonial.id}`}
              className="bg-[#f8f9fa] rounded-lg p-7 sm:p-8 border border-[#e1e3e4] hover:border-[#d4af37]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[#191c1d] text-sm sm:text-base leading-relaxed italic mb-6 font-sans">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-[#e1e3e4] flex items-center gap-3.5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#d0c5af]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-heading font-bold text-sm text-[#191c1d]">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[#735c00] font-medium">
                    {testimonial.role}
                  </div>
                  <div className="text-[11px] text-[#7f7663]">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* South African Accreditations & Standards Bar */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="bg-[#edeeef] rounded-lg p-6 sm:p-8 border border-[#d0c5af]/50"
        >
          <div className="text-center text-xs font-heading font-bold uppercase tracking-widest text-[#735c00] mb-6">
            South African Building Accreditations & Compliance
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-3.5 bg-white rounded border border-[#e1e3e4] shadow-2xs">
              <Building className="w-6 h-6 text-[#735c00] mb-2" />
              <span className="font-heading font-bold text-xs text-[#191c1d]">NHBRC Registered</span>
              <span className="text-[11px] text-[#7f7663]">Home Builders Compliance</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3.5 bg-white rounded border border-[#e1e3e4] shadow-2xs">
              <ShieldCheck className="w-6 h-6 text-[#735c00] mb-2" />
              <span className="font-heading font-bold text-xs text-[#191c1d]">Master Builders</span>
              <span className="text-[11px] text-[#7f7663]">MBA North / Gauteng Guild</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3.5 bg-white rounded border border-[#e1e3e4] shadow-2xs">
              <Award className="w-6 h-6 text-[#735c00] mb-2" />
              <span className="font-heading font-bold text-xs text-[#191c1d]">SABS Standards</span>
              <span className="text-[11px] text-[#7f7663]">SANS 10400 Certified Materials</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3.5 bg-white rounded border border-[#e1e3e4] shadow-2xs">
              <CheckCircle2 className="w-6 h-6 text-[#735c00] mb-2" />
              <span className="font-heading font-bold text-xs text-[#191c1d]">COC Certified</span>
              <span className="text-[11px] text-[#7f7663]">Electrical & Plumbing Sign-Off</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

