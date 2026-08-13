import React from 'react';
import { Compass, ArrowUp, Mail, Phone, MapPin, Shield, Award, Navigation, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#111315] text-stone-300 border-t border-stone-800">
      {/* Top Banner / Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-stone-800/80">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-[#d4af37] mb-2">
              <Compass className="w-6 h-6" />
              <span className="font-heading font-extrabold text-xl tracking-wider uppercase text-white">
                MYSTICAL <span className="text-[#d4af37]">BUILD</span>
              </span>
            </div>
            <p className="text-stone-400 text-sm max-w-lg">
              Pretoria & Gauteng's premier construction, new turnkey home builds, structural renovations, and direct building materials supplier.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded bg-[#d4af37] hover:bg-[#c49f2b] text-[#241a00] font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow"
            >
              Get Free Quotation
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 font-heading font-medium text-xs uppercase tracking-wider transition-colors border border-stone-700"
            >
              Explore Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: About & South African Yard */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Pretoria Head Office & Yard
            </h4>
            <div className="text-sm space-y-2.5 text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phonePrimaryIntl}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phonePrimary} / {BUSINESS_INFO.phoneSecondary}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <p className="flex items-start gap-2 text-xs text-stone-400">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours}</span>
              </p>
            </div>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <span className="block font-medium text-stone-300">Serving Pretoria, Centurion, Midrand & Greater Gauteng</span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#d4af37] hover:underline pt-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Find Us on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Building Services
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="#expertise" className="hover:text-white transition-colors">New House Construction</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Home Renovations & Alterations</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Roofing, Trusses & Ceilings</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Plastering, Painting & Paving</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Aluminium Stacking Doors</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Building Sand & Bricks Supply</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Access */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#before-after" className="hover:text-white transition-colors">Before & After Showcase</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">4-Phase Build Process</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews & Ratings</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Free On-Site Quotation</a></li>
            </ul>
          </div>

          {/* Col 5: Accreditations */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Standards & Warranty
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>NHBRC Standard</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Master Builders Gauteng</span>
              </li>
              <li className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>SANS 10400 Compliance</span>
              </li>
              <li className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Electrical & Plumbing COC</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black/60 border-t border-stone-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Mystical Construction And Renovation. 259 Ketjen St, Pretoria West, South Africa.
          </p>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-stone-300">Free Quotes</a>
            <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-stone-300">Google Maps</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#d4af37]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
