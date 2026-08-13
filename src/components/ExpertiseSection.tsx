import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Building2, Wrench, Shield, Layers, Zap, Truck, CheckCircle2, ArrowRight, X, Phone, FileText } from 'lucide-react';
import { SERVICES, BUILDING_MATERIALS_LIST, BUSINESS_INFO } from '../data/mockData';
import { ServiceExpertise } from '../types';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface ExpertiseSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedModalService, setSelectedModalService] = useState<ServiceExpertise | null>(null);
  const [activeTab, setActiveTab] = useState<'construction' | 'materials'>('construction');

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'home':
        return <Home className="w-6 h-6 text-[#735c00]" />;
      case 'building':
        return <Building2 className="w-6 h-6 text-[#735c00]" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-[#735c00]" />;
      case 'layers':
        return <Layers className="w-6 h-6 text-[#735c00]" />;
      case 'zap':
        return <Zap className="w-6 h-6 text-[#735c00]" />;
      case 'truck':
        return <Truck className="w-6 h-6 text-[#735c00]" />;
      case 'renovate':
      default:
        return <Wrench className="w-6 h-6 text-[#735c00]" />;
    }
  };

  return (
    <section 
      id="expertise"
      className="py-10 sm:py-14 bg-[#f8f9fa] border-b border-[#e1e3e4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe088]/30 border border-[#d4af37]/40 text-[#735c00] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Pretoria Building & Renovation Specialists</span>
          </div>

          <h2 
            id="expertise-heading"
            className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#191c1d] tracking-tight"
          >
            Comprehensive Construction Services
          </h2>
          {/* Gold Accent Bar */}
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-[#4d4635] text-sm sm:text-base leading-relaxed">
            From complete new home builds and major structural alterations to roofing, aluminium installations, and direct building material supplies in Pretoria.
          </p>

          {/* Toggle between Construction Services & Building Materials Supply */}
          <div className="flex justify-center gap-3 mt-5 sm:mt-6">
            <button
              onClick={() => setActiveTab('construction')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'construction'
                  ? 'bg-[#191c1d] text-white shadow-md'
                  : 'bg-white text-[#4d4635] border border-stone-200 hover:border-stone-400'
              }`}
            >
              Building & Renovation Services
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'materials'
                  ? 'bg-[#d4af37] text-[#241a00] shadow-md font-extrabold'
                  : 'bg-white text-[#4d4635] border border-stone-200 hover:border-stone-400'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Building Materials & Sand Supply</span>
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Construction & Renovation Services Grid */}
        {activeTab === 'construction' && (
          <motion.div 
            variants={staggerContainer(0.09, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                id={`service-card-${service.id}`}
                className="bg-white rounded-lg p-7 sm:p-8 border border-[#e1e3e4] hover:border-[#d4af37]/60 shadow-[0_4px_20px_rgba(44,62,80,0.04)] hover:shadow-[0_12px_30px_rgba(44,62,80,0.08)] transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {service.badge && (
                    <span className="absolute top-6 right-6 px-2.5 py-0.5 rounded text-[10px] font-heading font-bold uppercase tracking-wider bg-[#ffe088]/40 text-[#735c00] border border-[#d4af37]/30">
                      {service.badge}
                    </span>
                  )}

                  {/* Icon Container */}
                  <div className="w-13 h-13 rounded-lg bg-[#edeeef] group-hover:bg-[#ffe088]/30 flex items-center justify-center mb-6 transition-colors duration-300 border border-[#d0c5af]/30">
                    {getIcon(service.icon)}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-heading font-bold text-xl text-[#191c1d] mb-2 group-hover:text-[#735c00] transition-colors">
                    {service.title}
                  </h3>

                  <span className="text-xs font-semibold text-[#735c00] block mb-3">
                    {service.tagline}
                  </span>

                  {/* Service Description */}
                  <p className="text-[#4d4635] text-sm leading-relaxed mb-5 font-sans">
                    {service.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <ul className="space-y-2 pt-4 border-t border-stone-100 text-xs sm:text-sm text-[#4e6073]">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-7 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    id={`service-details-btn-${service.id}`}
                    onClick={() => setSelectedModalService(service)}
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase tracking-wider text-[#735c00] hover:text-[#554300] transition-colors cursor-pointer group/btn"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    id={`service-quote-btn-${service.id}`}
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-stone-100 hover:bg-[#d4af37] hover:text-[#241a00] text-[#4d4635] transition-all cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Building Materials Supply */}
        {activeTab === 'materials' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg p-8 sm:p-10 border border-[#e1e3e4] shadow-sm">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#735c00] block mb-2">
                  Direct Contractor Delivery • Pretoria & Gauteng
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#191c1d] mb-3">
                  Quality Building Sand, Aggregates & Bricks
                </h3>
                <p className="text-[#4d4635] text-sm sm:text-base leading-relaxed">
                  We supply and deliver bulk construction materials directly to residential sites and commercial contractors from our Pretoria yard. High-grade sand, crushed stone, and durable bricks at competitive bulk rates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {BUILDING_MATERIALS_LIST.map((mat, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-lg bg-[#f8f9fa] border border-[#e1e3e4] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-heading font-bold text-base text-[#191c1d]">
                          {mat.name}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#ffe088]/40 text-[#735c00]">
                          {mat.unit}
                        </span>
                      </div>
                      <p className="text-xs text-[#4d4635] leading-relaxed">
                        {mat.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                      <span className="text-[#7f7663]">Direct delivery available</span>
                      <button 
                        onClick={() => onSelectServiceForQuote(`Building Materials: ${mat.name}`)}
                        className="font-semibold text-[#735c00] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Request Pricing</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Materials Order Callout Banner */}
              <div className="bg-[#191c1d] text-white p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-heading font-bold text-lg text-white mb-1">
                    Need Bulk Tipper Delivery on Your Site Today?
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm">
                    Call <strong>061 860 7883</strong> or <strong>067 855 2358</strong> for immediate dispatch pricing and volume discounts.
                  </p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto shrink-0">
                  <a
                    href="tel:+27618607883"
                    className="flex-1 sm:flex-initial px-5 py-3 rounded bg-stone-800 hover:bg-stone-700 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={() => onSelectServiceForQuote('Bulk Tipper Building Materials Order')}
                    className="flex-1 sm:flex-initial px-5 py-3 rounded bg-[#d4af37] hover:bg-[#c49f2b] text-[#241a00] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Get Free Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedModalService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white max-w-2xl w-full rounded-lg shadow-2xl p-6 sm:p-8 border border-[#e1e3e4] relative max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setSelectedModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#ffe088]/40 flex items-center justify-center text-[#735c00]">
                  {getIcon(selectedModalService.icon)}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#735c00]">
                    {selectedModalService.tagline}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#191c1d]">
                    {selectedModalService.title}
                  </h3>
                </div>
              </div>

              <p className="text-[#4d4635] text-base leading-relaxed mb-6">
                {selectedModalService.description}
              </p>

              <div className="bg-[#f8f9fa] p-5 rounded-lg border border-[#e1e3e4] mb-6">
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-[#191c1d] mb-3">
                  South African Building & Engineering Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4e6073]">
                  {selectedModalService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-stone-200">
                <button
                  onClick={() => setSelectedModalService(null)}
                  className="px-5 py-2.5 rounded border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-50 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const serviceTitle = selectedModalService.title;
                    setSelectedModalService(null);
                    onSelectServiceForQuote(serviceTitle);
                  }}
                  className="px-6 py-2.5 rounded bg-[#d4af37] hover:bg-[#c49f2b] text-[#241a00] font-heading font-bold text-xs uppercase tracking-wider shadow cursor-pointer"
                >
                  Request Free Quote
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

