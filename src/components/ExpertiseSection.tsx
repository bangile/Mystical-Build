import React, { useState } from 'react';
import { Home, Building2, Wrench, Shield, Layers, Zap, Truck, CheckCircle2, ArrowRight, X, Phone, MessageCircle } from 'lucide-react';
import { SERVICES, BUILDING_MATERIALS_LIST, BUSINESS_INFO } from '../data/mockData';
import { ServiceExpertise } from '../types';

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
      className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e1e3e4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe088]/30 border border-[#d4af37]/40 text-[#735c00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Pretoria Building & Renovation Specialists</span>
          </div>

          <h2 
            id="expertise-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-[#191c1d] tracking-tight"
          >
            Comprehensive Construction Services
          </h2>
          {/* Gold Accent Bar */}
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-[#4d4635] text-base sm:text-lg leading-relaxed">
            From complete new home builds and major structural alterations to roofing, aluminium installations, and direct building material supplies in Pretoria.
          </p>

          {/* Toggle between Construction Services & Building Materials Supply */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('construction')}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'construction'
                  ? 'bg-[#191c1d] text-white shadow-md'
                  : 'bg-white text-[#4d4635] border border-stone-200 hover:border-stone-400'
              }`}
            >
              Building & Renovation Services
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'materials'
                  ? 'bg-[#d4af37] text-[#241a00] shadow-md font-extrabold'
                  : 'bg-white text-[#4d4635] border border-stone-200 hover:border-stone-400'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Building Materials & Sand Supply</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Construction & Renovation Services Grid */}
        {activeTab === 'construction' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service) => (
              <div
                key={service.id}
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
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Building Materials Supply */}
        {activeTab === 'materials' && (
          <div className="space-y-8 animate-in fade-in duration-300">
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
                  <div 
                    key={idx}
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
                      <a 
                        href={`https://wa.me/27618607883?text=Hi%20Mystical%20Construction,%20please%20send%20pricing%20for%20${encodeURIComponent(mat.name)}%20delivery%20in%20Pretoria.`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-[#15803d] hover:underline flex items-center gap-1"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Order via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Materials Order Callout Banner */}
              <div className="bg-[#191c1d] text-white p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-heading font-bold text-lg text-white mb-1">
                    Need Bulk Tipper Delivery on Your Site Today?
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm">
                    Call <strong>061 860 7883</strong> or WhatsApp <strong>067 855 2358</strong> for immediate dispatch pricing and volume discounts.
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
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-3 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white max-w-2xl w-full rounded-lg shadow-2xl p-6 sm:p-8 border border-[#e1e3e4] relative max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-black transition-colors"
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
                className="px-5 py-2.5 rounded border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-50"
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
          </div>
        </div>
      )}
    </section>
  );
};
