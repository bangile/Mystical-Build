import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Phone, ArrowUpRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#expertise' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Transformations', href: '#before-after' },
    { label: 'Our Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e1e3e4] py-3' 
          : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent text-white py-4'
      }`}
    >
      {/* Top micro bar on unscrolled desktop for location & contact info */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-2 mb-3 text-[11px] text-stone-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>259 Ketjen St, Pretoria West, South Africa</span>
              </span>
              <span>•</span>
              <span>Serving Pretoria, Centurion, Midrand & Greater Gauteng</span>
            </div>
            <div className="flex items-center gap-4 font-medium">
              <span>Mon – Fri: 08:00 – 17:00 | Sat: 08:00 – 14:00</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with architectural compass */}
        <a 
          href="#" 
          id="brand-logo-link"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="relative flex items-center justify-center w-9 h-9 text-[#d4af37]">
            <Compass className="w-8 h-8 transition-transform group-hover:rotate-12 duration-300 stroke-[1.75]" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className={`font-heading font-extrabold text-xl sm:text-2xl tracking-wider uppercase ${
                isScrolled ? 'text-[#191c1d]' : 'text-white'
              }`}>
                MYSTICAL
              </span>
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-wider uppercase text-[#d4af37]">
                BUILD
              </span>
            </div>
            <span className={`text-[9px] tracking-[0.22em] uppercase font-medium -mt-1 ${
              isScrolled ? 'text-[#7f7663]' : 'text-stone-300'
            }`}>
              Construction & Renovation
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.label}
              id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => scrollTo(link.href)}
              className={`transition-colors duration-200 cursor-pointer ${
                isScrolled
                  ? activeSection === link.href.substring(1)
                    ? 'text-[#735c00] font-semibold'
                    : 'text-[#4d4635] hover:text-[#191c1d]'
                  : 'text-stone-200 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phonePrimaryIntl}`}
            id="nav-phone-call"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold tracking-wide transition-colors ${
              isScrolled ? 'text-[#4e6073] hover:text-[#191c1d]' : 'text-stone-200 hover:text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{BUSINESS_INFO.phonePrimary}</span>
          </a>

          <button
            id="nav-consultation-btn"
            onClick={onOpenConsultation}
            className="flex items-center gap-1.5 px-4 py-2 rounded text-xs font-heading font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c49f2b] text-[#241a00] transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
          >
            <span>Free Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`p-2 rounded focus:outline-none transition-colors ${
              isScrolled ? 'text-[#191c1d] hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-menu"
          className="lg:hidden bg-white text-[#191c1d] border-b border-[#e1e3e4] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-3 text-base font-medium">
            <div className="pb-3 border-b border-stone-200 text-xs text-stone-500 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>259 Ketjen St, Pretoria West</span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => scrollTo(link.href)}
                className="text-left py-2 border-b border-stone-100 text-[#191c1d] hover:text-[#735c00] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phonePrimaryIntl}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded border border-stone-300 text-stone-800 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {BUSINESS_INFO.phonePrimary}</span>
              </a>

              <button
                id="mobile-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded text-center text-xs font-heading font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c49f2b] text-[#241a00] shadow transition-colors cursor-pointer"
              >
                Request Free On-Site Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
